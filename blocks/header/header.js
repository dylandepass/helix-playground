import { html, render } from '../litelement/lit-html.js';
import { readBlockConfig } from '../../scripts/scripts.js';

/**
 * collapses all open nav sections
 * @param {Element} sections The container element
 */

function collapseAllNavSections(sections) {
  sections.querySelectorAll('.nav-section').forEach((section) => {
    section.setAttribute('aria-expanded', 'false');
  });
}

function htmlToJson(div, obj) {
  if (!obj) { obj = [] }
  var tag = {}
  tag['tagName'] = div.tagName
  tag['children'] = []
  for (var i = 0; i < div.children.length; i++) {
    tag['children'].push(htmlToJson(div.children[i]))
  }
  for (var i = 0; i < div.attributes.length; i++) {
    var attr = div.attributes[i]
    tag['@' + attr.name] = attr.value
  }
  return tag
}

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  // fetch nav content
  const navPath = cfg.nav || '/nav';
  const resp = await fetch(`${navPath}.plain.html`);
  const htmlHeader = await resp.text();

  var htmlObject = document.createElement('div');
  htmlObject.innerHTML = htmlHeader;

  console.log(htmlToJson(htmlObject));

  // // decorate nav DOM
  // const nav = document.createElement('div');
  // nav.classList.add('nav');
  // nav.setAttribute('aria-role', 'navigation');
  // const navSections = document.createElement('div');
  // navSections.classList.add('nav-sections');
  // nav.innerHTML = html;
  // nav.querySelectorAll(':scope > div').forEach((navSection, i) => {
  //   if (!i) {
  //     // first section is the brand section
  //     const brand = navSection;
  //     brand.classList.add('nav-brand');
  //   } else {
  //     // all other sections
  //     navSections.append(navSection);
  //     navSection.classList.add('nav-section');
  //     const h2 = navSection.querySelector('h2');
  //     if (h2) {
  //       h2.addEventListener('click', () => {
  //         const expanded = navSection.getAttribute('aria-expanded') === 'true';
  //         collapseAllNavSections(navSections);
  //         navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  //       });
  //     }
  //   }
  // });
  // nav.append(navSections);

  // // hamburger for mobile
  // const hamburger = document.createElement('div');
  // hamburger.classList.add('nav-hamburger');
  // hamburger.innerHTML = '<div class="nav-hamburger-icon"></div>';
  // hamburger.addEventListener('click', () => {
  //   const expanded = nav.getAttribute('aria-expanded') === 'true';
  //   document.body.style.overflowY = expanded ? '' : 'hidden';
  //   nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  // });
  // nav.prepend(hamburger);
  // nav.setAttribute('aria-expanded', 'false');

  //block.append(nav);


  // Define a template
  const myTemplate = (name) => html`<div class="nav" aria-role="navigation" aria-expanded="false">
                                      <div class="nav-hamburger"><div class="nav-hamburger-icon"></div>
                                    </div><div class="nav-brand">
<p><a href="https://www.hlx.live/">Boilerplate</a></p>
</div>



<div class="nav-sections"><div class="nav-section">
<h2 id="example-content">Example Content</h2>
<ul>
<li><a href="https://main--helix-project-boilerplate--adobe.hlx3.page/default-content-examples">Default Content</a></li>
<li><a href="https://main--helix-playground--dylandepass.hlx3.page/sc-qualform">Sales Form</a></li>
</ul>
</div><div class="nav-section">
<h2 id="getting-started">Getting Started</h2>
<ul>
<li><a href="https://www.hlx.live/tutorial">Build your first site</a></li>
<li><a href="https://www.hlx.live/tools/sidekick/">Preview and publish content</a></li>
<li><a href="https://www.hlx.live/tools/organizer/">Organize your content<br>
</a></li>
</ul>
</div><div class="nav-section">
<h2 id="documentation">Documentation</h2>
<ul>
<li><a href="https://www.hlx.live/docs/architecture">Architecture</a></li>
<li><a href="https://www.hlx.live/docs/sidekick">Sidekick<br>
</a></li>
</ul>
</div><div class="nav-section">

</div></div></div>`;

  // Render the template to the document
  render(myTemplate(), block);
}
