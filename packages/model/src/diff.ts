import {
	DIFF_DELETE,
	DIFF_EQUAL,
	DIFF_INSERT,
	diff_match_patch,
	patch_obj,
} from 'diff-match-patch';
import { OP_DELETE_NODE, OP_DELETE_TEXT, OP_INSERT_NODE, OP_INSERT_TEXT } from "@editablejs/constants";
import Text from './text'
import { INode, IText, Op } from "./types";
import Element from './element';
import { Log } from '@editablejs/utils';

const dmp = new diff_match_patch()

const diffText = (newText: IText, oldText: IText) => {
  const ops: Op[] = [];
  const key1 = newText.getKey()
  const key2 = oldText.getKey()
  const text1 = newText.getText()
  const text2 = oldText.getText()
  const patches = dmp.patch_make(text2, text1);
  Object.keys(patches).forEach((key) => {
    const patch: patch_obj = patches[key as any];
    if(patch.start1 === null) return
    let offset: number = patch.start1;
    patch.diffs.forEach((diff) => {
      const [type, data] = diff;
      if (type !== DIFF_DELETE) {
        if (type !== DIFF_INSERT) {
          if (type === DIFF_EQUAL) {
            offset += data.length;
          }
        } else {
          ops.push({
            type: OP_INSERT_TEXT,
            key: key1,
            value: data,
            offset
          });
        }
      } else {
        ops.unshift({
          type: OP_DELETE_TEXT,
          key: key2,
          value: data,
          offset
        });
      }
    });
  });
  return ops
}

const handleText = (textNode: IText, oldChildren: INode[]) => {
  const ops: Op[] = [];
  const oldTextNode = oldChildren.length > 0 && Text.isText(oldChildren[0]) ? oldChildren[0] : null
  // 都是文本
  if(oldTextNode) { 
    const newText = textNode.getText()
    const oldText = oldTextNode.getText()
    if(newText !== oldText) {
      ops.push(...diffText(textNode, oldTextNode))
    }
  }
  for (let c = oldChildren.length - 1; c >= (oldTextNode ? 1 : 0); c--) {
    const oldChild = oldChildren[c];
    ops.push({
      type: OP_DELETE_NODE,
      key: oldChild.getParentKey(),
      offset: c,
      value: oldChild.toJSON()
    });
  }
  if (!oldTextNode)
    ops.push({
      type: OP_INSERT_NODE,
      key: textNode.getParentKey(),
      offset: 0,
      value: textNode.toJSON()
    });
  return ops;
}

const handleChildren = (newChildren: INode[], oldChildren: INode[]) => {
  const ops: Op[] = [];
  // 旧节点没有子节点数据
  if(oldChildren.length === 0) {
    // 全部插入
    for (let c = 0; c < newChildren.length; c++) {
      const children = newChildren[c]
      ops.push({
        type: OP_INSERT_NODE,
        key: children.getParentKey(),
        value: children.toJSON(),
        offset: c
      });
    }
  } 
  else if (newChildren.length === 0) {
    // 全部删除
    for (let c = oldChildren.length - 1; c >= 0; c--) {
      const children = oldChildren[c]
      ops.push({
        type: OP_DELETE_NODE,
        key: children.getParentKey(),
        offset: c,
        value: children.toJSON()
      });
    }
  } else if (
    newChildren.length === 1 &&
    Text.isText(newChildren[0])
  ) {
    ops.push(...handleText(newChildren[0] as IText, oldChildren))
  } else {
    // 先找出需要删除的旧节点
    const newChildrenKeys = newChildren.map((child) => child.getKey());
    for (let c = oldChildren.length - 1; c >= 0; c--) {
      const oldChild = oldChildren[c];
      const oldChildKey = oldChild.getKey();
      if(!newChildrenKeys.includes(oldChildKey)) {
        ops.push({
          type: OP_DELETE_NODE,
          key: oldChild.getParentKey(),
          offset: c,
          value: oldChild.toJSON()
        });
        oldChildren.splice(c, 1);
      }
    }
    // 再找出需要插入的新节点
    const oldChildrenKeys = oldChildren.map((child) => child.getKey());
    for (let c = 0; c < newChildren.length; c++) {
      const newChild = newChildren[c];
      const newChildKey = newChild.getKey();
      if(!oldChildrenKeys.includes(newChildKey)) { 
        ops.push({
          type: OP_INSERT_NODE,
          key: newChild.getParentKey(),
          offset: c,
          value: newChild.toJSON(),
        });
        oldChildren.splice(c, 0, newChild);
      }
      // 对比有差异的子节点
      else {
        // 比较属性
        const oldChild = oldChildren.find((child) => child.getKey() === newChildKey)
        // 比较子节点
        if(oldChild && Element.isElement(newChild) && Element.isElement(oldChild)) {
          ops.push(
            ...handleChildren(
              newChild.getChildren(),
              oldChild.getChildren()
            ),
          );
        }
      }
    }
  }
  return ops
}

const diff = (newNodes: INode[], oldNodes: INode[]) => {
  // check parentKey
  const newLength = newNodes.length;
  const oldLength = oldNodes.length;
  let parentKey = newLength > 0 ? newNodes[0].getParentKey() : oldNodes.length > 0 ? oldNodes[0].getParentKey() : null;

  for(let i = 0; i < (newLength > oldLength ? newLength : oldLength); i++) {
    const newNode = newNodes[i]
    const oldNode = oldNodes[i]

    if(newNode && newNode.getParentKey() !== parentKey) {
      Log.nodeNotInContext(newNode.getKey())
    }
    if(oldNode && oldNode.getParentKey() !== parentKey) { 
      Log.nodeNotInContext(oldNode.getKey())
    }
  }
  return handleChildren(newNodes, oldNodes);
} 

export default diff