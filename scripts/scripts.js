/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { HelixApp, buildBlock } from 'https://cdn.skypack.dev/@dylandepass/helix-web-library@v1.3.11/dist/helix-web-framework.esm.js';

function buildHeroBlock(main) {
  const h1 = main.querySelector('h1');
  const picture = main.querySelector('picture');
  // eslint-disable-next-line no-bitwise
  if (h1 && picture && (h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING)) {
    const section = document.createElement('div');
    section.append(buildBlock('hero', { elems: [picture, h1] }));
    main.prepend(section);
  }
}

function loadEager(main) {
  console.log('load eager ', main);
}

HelixApp.init({
  rumEnabled: true,
  rumGeneration: 'project-1',
  productionDomains: ['acme.com'],
  lcpBlocks: ['hero'],
})
  .withLoadEager(loadEager)
  .withBuildAutoBlocks((main) => {
    try {
      buildHeroBlock(main);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Auto Blocking failed', error);
    }
  })
  .decorate();