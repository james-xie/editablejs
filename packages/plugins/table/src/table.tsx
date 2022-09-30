import {
  RenderElementProps,
  useCancellablePromises,
  cancellablePromise,
  Editable,
  Grid,
  Node,
  Editor,
  useIsomorphicLayoutEffect,
  Range,
  useNodeFocused,
  useNodeSelected,
  useGridSelection,
  Transforms,
  useGridSelected,
} from '@editablejs/editor'
import { useState, useRef, useMemo, useCallback } from 'react'
import { TableCell, TableCellEditor } from './cell'
import { TableContext, TableDragOptions, TableOptions } from './context'
import { TableColHeader, TableRowHeader } from './header'
import { getOptions } from './options'
import { TableRow, TableRowEditor } from './row'
import { TableSelection as TableSelectionElement } from './selection'
import { AllHeaderStyles, TableStyles } from './styles'

export const TABLE_KEY = 'table'
export interface CreateTableOptions {
  rows?: number
  cols?: number
}
export interface TableEditor extends Editable {
  toggleTable: (options?: CreateTableOptions) => void
}

export interface Table extends Grid {
  type: typeof TABLE_KEY
  children: TableRow[]
}

export interface TableEditor extends Editable {
  toggleTable: (options?: CreateTableOptions) => void
}

export const TableEditor = {
  isTableEditor: (editor: Editable): editor is TableEditor => {
    return !!(editor as TableEditor).toggleTable
  },

  isTable: (editor: Editable, n: Node): n is Table => {
    return Editor.isBlock(editor, n) && n.type === TABLE_KEY
  },

  isActive: (editor: Editable): boolean => {
    const elements = editor.queryActiveElements()[TABLE_KEY] ?? []
    return elements.some(e => TableEditor.isTable(editor, e[0]))
  },

  getOptions: (editor: Editable): Required<TableOptions> => {
    return getOptions(editor)
  },

  create: (editor: Editable, options: CreateTableOptions = {}): Table => {
    const { rows = 3, cols = 3 } = options
    const { minRowHeight, minColWidth } = TableEditor.getOptions(editor)
    const rowHeight = minRowHeight
    const tableRows: TableRow[] = []
    const tableColsWdith = Grid.avgColWidth(editor, {
      cols,
      minWidth: minColWidth,
      getWidth: width => width - 1,
    })
    for (let r = 0; r < rows; r++) {
      tableRows.push(
        TableRowEditor.create(
          { height: rowHeight },
          tableColsWdith.map(() => TableCellEditor.create()),
        ),
      )
    }
    return Grid.create<Table, TableRow, TableCell>(
      {
        type: TABLE_KEY,
        colsWidth: tableColsWdith,
      },
      ...tableRows,
    )
  },

  toggle: (editor: TableEditor, options?: CreateTableOptions) => {
    editor.toggleTable(options)
  },
}

interface TableProps extends RenderElementProps<Table> {
  editor: TableEditor
}

const TableComponent: React.FC<TableProps> = ({ editor, element, attributes, children }) => {
  // drag
  const dragRef = useRef<TableDragOptions | null>(null)

  const nodeSelected = useNodeSelected()

  const nodeFocused = useNodeFocused()

  const selection = useGridSelection()

  const selected = useGridSelected()

  /**
   * 部分选中表格，让选中部分选中表格的整行
   */
  useIsomorphicLayoutEffect(() => {
    const { selection } = editor
    if (selection && nodeSelected && !nodeFocused) {
      let { anchor, focus } = selection
      const isBackward = Range.isBackward(selection)
      const [startRow] = Editor.nodes<TableRow>(editor, {
        at: anchor.path,
        match: n => TableRowEditor.isTableRow(editor, n),
      })
      if (startRow) {
        const [row, path] = startRow
        const { children: cells } = row
        const table = Grid.findGrid(editor, path)
        if (table) {
          if (isBackward) {
            const sel = Grid.edges(editor, table, {
              start: [0, 0],
              end: [path[path.length - 1], cells.length - 1],
            })
            anchor = Editable.toLowestPoint(editor, path.slice(0, -1).concat(sel.end))
          } else {
            const sel = Grid.edges(editor, table, {
              start: [path[path.length - 1], 0],
              end: [table[0].children.length - 1, cells.length - 1],
            })
            anchor = Editable.toLowestPoint(editor, path.slice(0, -1).concat(sel.start))
          }
        }
      }
      const [endRow] = Editor.nodes<TableRow>(editor, {
        at: focus.path,
        match: n => TableRowEditor.isTableRow(editor, n),
      })
      if (endRow) {
        const [row, path] = endRow
        const { children: cells } = row
        const table = Grid.findGrid(editor, path)
        if (table) {
          if (isBackward) {
            const sel = Grid.edges(editor, table, {
              start: [table[0].children.length - 1, cells.length - 1],
              end: [path[path.length - 1], 0],
            })
            focus = Editable.toLowestPoint(editor, path.slice(0, -1).concat(sel.start))
          } else {
            const sel = Grid.edges(editor, table, {
              start: [0, 0],
              end: [path[path.length - 1], cells.length - 1],
            })
            focus = Editable.toLowestPoint(editor, path.slice(0, -1).concat(sel.end))
          }
        }
      }
      const range = { anchor, focus }
      if (!Range.equals(selection, range)) Transforms.select(editor, range)
    }
  }, [nodeSelected, nodeFocused, editor, editor.selection])

  const { colsWidth = [] } = element

  const renderColgroup = () => {
    const colgroup = []
    for (let i = 0; i < colsWidth.length; i++) {
      colgroup.push(<col width={colsWidth[i]} key={i} />)
    }
    return colgroup.length > 0 ? <colgroup>{colgroup}</colgroup> : null
  }
  // table width
  const tableWidth = useMemo(() => {
    let width = 0
    for (let i = 0; i < colsWidth.length; i++) {
      width += colsWidth[i]
    }
    return width
  }, [colsWidth])
  // table height
  const tableHeight = useMemo(() => {
    const { children } = element
    let height = 0
    for (let i = 0; i < children.length; i++) {
      height += children[i].contentHeight ?? 0
    }
    return height
  }, [element])

  const [isHover, setHover] = useState(false)

  const renderAllHeader = () => {
    const handleMouseDown = (e: React.MouseEvent) => {
      e.preventDefault()
      Grid.select(editor, Editable.findPath(editor, element))
    }
    return <AllHeaderStyles onMouseDown={handleMouseDown} allFull={selected.allFull} />
  }

  const cancellablePromisesApi = useCancellablePromises()

  const handleMouseOver = useCallback(() => {
    cancellablePromisesApi.clearPendingPromises()
    if (~~selected.count) return
    const wait = cancellablePromise(cancellablePromisesApi.delay(200))
    cancellablePromisesApi.appendPendingPromise(wait)
    wait.promise
      .then(() => {
        setHover(true)
      })
      .catch(err => {})
  }, [selected, cancellablePromisesApi])

  const handleMouseLeave = useCallback(() => {
    cancellablePromisesApi.clearPendingPromises()
    setHover(false)
  }, [cancellablePromisesApi])

  return (
    <TableContext.Provider
      value={{
        dragRef,
        selection,
        selected,
        width: tableWidth,
        height: tableHeight,
        rows: element.children.length,
        cols: element.colsWidth?.length ?? 0,
        getOptions: () => TableEditor.getOptions(editor),
      }}
    >
      <TableStyles
        isHover={isHover}
        isSelected={!!~~selected.count}
        {...attributes}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <TableColHeader editor={editor} table={element} />
        <TableRowHeader editor={editor} table={element} />
        {renderAllHeader()}
        <table style={{ width: tableWidth }}>
          {renderColgroup()}
          <tbody>{children}</tbody>
        </table>
        <TableSelectionElement editor={editor} table={element} />
      </TableStyles>
    </TableContext.Provider>
  )
}

export { TableComponent }