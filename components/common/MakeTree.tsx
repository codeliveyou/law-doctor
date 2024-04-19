import { TreeItem } from "./TreeItem";

export function makeTree(items?: ITreeItem[]) {
  return items && items.map((it, i) => (
    <TreeItem key={i} label={it.label} count={it.count}>
      {makeTree(it.children)}
    </TreeItem>
  ))
}