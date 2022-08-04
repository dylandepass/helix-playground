/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {

  const heading = document.querySelector('main > div div:nth-of-type(1)');
  heading.classList.add('hero');

  const iframe = document.createElement('iframe');
  iframe.src = 'https://my.spline.design/expressdevice-78262f5c36e6d392978f3b000d70456e/';
  block.append(iframe);

  document.querySelector('header').remove();
}
