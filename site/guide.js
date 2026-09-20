for (const button of document.querySelectorAll('[data-copy]')) {
  button.addEventListener('click', async () => {
    const prompt = document.getElementById(button.dataset.copy);
    const status = button.closest('.prompt-block').querySelector('[role="status"]');
    status.textContent = 'Copying…';
    let timer;
    try {
      await Promise.race([
        navigator.clipboard.writeText(prompt.textContent.replace(/\n$/, '')),
        new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('Clipboard unavailable')), 1000); })
      ]);
      status.textContent = 'Copied. Paste into your assistant and adapt the placeholders.';
      button.textContent = 'Copied ✓';
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(prompt);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Prompt selected. Use your browser’s Copy command.';
    } finally { clearTimeout(timer); }
  });
}
const headings = [...document.querySelectorAll('article h2')];
const navLinks = [...document.querySelectorAll('.toc a')];
const observer = new IntersectionObserver(() => {
  const reached = headings.filter(h => h.getBoundingClientRect().top <= 160);
  const current = reached.at(-1) || headings[0];
  for (const link of navLinks) {
    if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}, { rootMargin: '-100px 0px -60% 0px', threshold: [0, 1] });
headings.forEach(h => observer.observe(h));
