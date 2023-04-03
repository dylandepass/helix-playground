import 'https://main--helix-playground--dylandepass.hlx.page/library/library.js';

export default function decorate(block) {
  const library = document.createElement('franklin-library');
  library.config = {
    library: 'https://main--rosalind-boilerplate--dylandepass.hlx.page/storybook/library.json',
    extends: 'https://main--wesco-ecommerce--wesco-international.hlx.page/storybook/library.json',
    taxonomy: 'https://plugin-test--rosalind-boilerplate--dylandepass.hlx.page/blocks/taxonomy/taxonomy.js'
  }
  block.append(library);
}