import { useMemo } from 'react'
import create, { StoreApi, UseBoundStore, useStore } from 'zustand'
import shallow from 'zustand/shallow'
import { Editable, useIsomorphicLayoutEffect } from '@editablejs/editor'
import { ContextMenuItem as UIContextMenuItem } from '@editablejs/plugin-ui'

interface BaseContextMenuItem extends UIContextMenuItem {
  key: string
  title: JSX.Element | string
  children?: ContextMenuItem[]
}

export type ContextMenuItem =
  | BaseContextMenuItem
  | {
      type: 'separator'
    }

interface ContextMenuState {
  items: ContextMenuItem[]
  open: boolean
}

const EDITOR_TO_CONTEXT_MENU_STORE = new WeakMap<
  Editable,
  UseBoundStore<StoreApi<ContextMenuState>>
>()

const getStore = (editor: Editable) => {
  let store = EDITOR_TO_CONTEXT_MENU_STORE.get(editor)
  if (!store) {
    store = create<ContextMenuState>(() => ({
      items: [],
      open: false,
    }))
    EDITOR_TO_CONTEXT_MENU_STORE.set(editor, store)
  }
  return store
}

export const useContextMenuStore = (editor: Editable) => {
  return useMemo(() => getStore(editor), [editor])
}

export const useContextMenuItems = (editor: Editable) => {
  const store = useContextMenuStore(editor)
  return useStore(store, state => state.items, shallow)
}

export const useContextMenuOpen = (editor: Editable): [boolean, (open: boolean) => void] => {
  const store = useContextMenuStore(editor)
  const open = useStore(store, state => state.open)
  return useMemo(() => {
    return [
      open,
      (open: boolean) => {
        ContextMenuStore.setOpen(editor, open)
      },
    ]
  }, [editor, open])
}

type ContextMenuStoreAction = () => (() => void) | void

export const useContextMenuEffect = (aciton: ContextMenuStoreAction, editor: Editable) => {
  const [open] = useContextMenuOpen(editor)
  useIsomorphicLayoutEffect(() => {
    let destroy: (() => void) | void
    if (open) {
      destroy = aciton()
    }
    return destroy
  }, [open, editor, aciton])
}

export const ContextMenuStore = {
  setOpen(editor: Editable, open: boolean) {
    const store = getStore(editor)
    store.setState(() => ({ open }))
  },

  setItems(editor: Editable, items: ContextMenuItem[]) {
    const store = getStore(editor)
    store.setState(() => {
      return {
        items,
      }
    })
  },
}