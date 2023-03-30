import 'https://main--helix-playground--dylandepass.hlx.page/library/library.js';

export default function decorate(block) {
  const library = document.createElement('franklin-library');
  block.append(library);
}