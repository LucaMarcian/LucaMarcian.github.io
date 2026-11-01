/* Layout and interactions. Edit content.js to change your information. */
(() => {
  'use strict';
  const content = window.siteContent;
  if (!content) return;
  const setText = (id, value) => {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  };
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };
  const validLink = value => {
    if (typeof value !== 'string' || !value.trim()) return false;
    try { return ['http:', 'https:', 'file:'].includes(new URL(value, document.baseURI).protocol); }
    catch { return false; }
  };
  const makeLink = (text, href, className) => {
    const link = element('a', className, text);
    link.href = href;
    if (!href.startsWith('#')) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    return link;
  };
  document.title = content.name;
  setText('name', content.name);
  setText('footer-name', content.name);
  document.querySelector('.portrait').alt = `Portrait of ${content.name}`;
  const contact = document.getElementById('contact');
  contact.replaceChildren();
  if (content.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(content.email)) {
    contact.append(makeLink(content.email, `mailto:${content.email}`));
  } else contact.append('[Your email]');
  if (content.location) contact.append(` · ${content.location}`);
  // Support editable [link text](https://...) notation without inserting raw HTML.
  content.biography.forEach(paragraph => {
    const node = element('p');
    const pattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    let offset = 0;
    for (const match of paragraph.matchAll(pattern)) {
      node.append(paragraph.slice(offset, match.index));
      node.append(makeLink(match[1], match[2]));
      offset = match.index + match[0].length;
    }
    node.append(paragraph.slice(offset));
    document.getElementById('biography').append(node);
  });
  const cvSentence = element('p', 'cv-sentence');
  cvSentence.append('You can find my CV ');
  cvSentence.append(validLink(content.cv)
    ? makeLink('here', content.cv)
    : element('span', '', 'here [PDF to be added]'));
  cvSentence.append('.');
  document.getElementById('cv-slot').replaceChildren(cvSentence);
  ['linkedin', 'github'].forEach(network => {
    if (!validLink(content[network])) return;
    const placeholder = document.getElementById(network);
    const link = makeLink('', content[network], 'social');
    link.id = network;
    link.append(placeholder.querySelector('img'), network === 'linkedin' ? 'LinkedIn' : 'GitHub');
    placeholder.replaceWith(link);
  });
  const sections = { publications: 'publications', workingPapers: 'working-papers', workInProgress: 'work-in-progress', policy: 'policy' };
  Object.entries(sections).forEach(([key, id]) => {
    const section = document.getElementById(id);
    const entries = content[key] || [];
    const visible = Boolean(section) && content.visibleSections?.[key] !== false && entries.length > 0;
    document.querySelectorAll(`nav a[href="#${id}"]`).forEach(link => { link.hidden = !visible; });
    if (!section) return; // Removing/commenting out a section must not stop the rest of the page.
    section.hidden = !visible;
    if (!visible) return;
    const container = section.querySelector('.entries');
    if (!container) return;
    entries.forEach(paper => {
      const article = element('article', 'paper');
      article.append(element('h3', '', paper.title));
      if (Array.isArray(paper.coauthors) && paper.coauthors.length) {
        const coauthors = element('p', 'coauthors', 'with ');
        paper.coauthors.forEach((author, index) => {
          if (index) coauthors.append(index === paper.coauthors.length - 1 ? ' and ' : ', ');
          coauthors.append(validLink(author.url) ? makeLink(author.name, author.url) : document.createTextNode(author.name));
        });
        article.append(coauthors);
      } else if (typeof paper.coauthors === 'string' && paper.coauthors) {
        article.append(element('p', 'coauthors', `with ${paper.coauthors}`));
      }
      if (paper.status) article.append(element('p', 'status', paper.status));
      const tools = element('div', 'paper-tools');
      if (validLink(paper.pdf)) tools.append(makeLink('PDF ↗', paper.pdf, 'pdf-link'));
      else if (key !== 'workInProgress') tools.append(element('span', 'pdf-placeholder', 'PDF [add link]'));
      if (Object.hasOwn(paper, 'slides')) {
        tools.append(validLink(paper.slides)
          ? makeLink('[Slides]', paper.slides, 'pdf-link')
          : element('span', 'pdf-placeholder', '[Slides — link to be added]'));
      }
      if (paper.abstract) {
        const details = element('details');
        details.append(element('summary', '', 'Abstract'), element('p', 'abstract', paper.abstract));
        tools.append(details);
      }
      article.append(tools);
      container.append(article);
    });
  });
  // Cover links written directly in HTML as well as those generated above.
  document.querySelectorAll('a[href]').forEach(link => {
    if (!link.getAttribute('href').startsWith('#')) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });
  if ('IntersectionObserver' in window) {
    const navLinks = [...document.querySelectorAll('nav a')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '0px 0px -55% 0px', threshold: 0 });
    document.querySelectorAll('main section:not([hidden])').forEach(section => observer.observe(section));
  }
})();
