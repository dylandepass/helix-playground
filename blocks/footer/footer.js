import { readBlockConfig } from 'https://cdn.skypack.dev/@dylandepass/helix-web-library@v1.3.11/dist/helix-web-framework.esm.js';

/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`);
  const html = await resp.text();
  const footer = document.createElement('div');
  footer.innerHTML = html;
  block.append(footer);
}
