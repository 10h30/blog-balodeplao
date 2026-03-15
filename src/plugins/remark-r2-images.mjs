import { visit } from 'unist-util-visit';
import { R2_BASE } from '../config/r2.mjs';

export function remarkR2Images() {
  return (tree) => {
    visit(tree, 'image', (node) => {
      if (node.url.startsWith('/images/')) {
        node.url = `${R2_BASE}${node.url}`;
      }
    });

    visit(tree, 'html', (node) => {
      node.value = node.value.replace(
        /src="(\/images\/[^"]+)"/g,
        `src="${R2_BASE}$1"`
      );
    });
  };
}
