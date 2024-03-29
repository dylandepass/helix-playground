/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  const urlParams = new URLSearchParams(window.location.search);
  const delay = urlParams.get('delay') || 0;
  const heading = document.querySelector('main > div div:nth-of-type(1)');
  heading.classList.add('hero');
  document.querySelector('header').remove();
  setTimeout(() => {
    const iframe = document.createElement('iframe');
    iframe.loading = 'lazy';
    iframe.src = 'https://my.spline.design/expressdevice-78262f5c36e6d392978f3b000d70456e/';
    block.append(iframe);
  }, delay);
}
