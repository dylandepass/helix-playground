/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  const { Application } = await import('./runtime.js');
  // const urlParams = new URLSearchParams(window.location.search);
  // const delay = urlParams.get('delay') || 0;
  const heading = document.querySelector('main > div div:nth-of-type(1)');
  heading.classList.add('hero');
  document.querySelector('header').remove();

  const canvas = document.createElement('canvas');
  canvas.id = 'canvas3d';
  block.append(canvas);

  const app = new Application(canvas);
  app.load('/blocks/3d/scene.splinecode');
}
