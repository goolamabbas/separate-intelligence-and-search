document.querySelectorAll('button[data-copy-target]').forEach((copyButton) => {
  const copyPromptLabel = [...copyButton.childNodes];
  copyButton.addEventListener('click', async () => {
    const prompt = document.getElementById(copyButton.dataset.copyTarget);
    const status = document.getElementById(copyButton.dataset.statusTarget);
    if (!prompt || !status) return;
    status.textContent = 'Copying…';
    let timer;
    try {
      await Promise.race([
        navigator.clipboard.writeText(prompt.textContent),
        new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('Clipboard unavailable')), 1000); })
      ]);
      status.textContent = 'Copied. Paste it into a fresh chat with your search provider enabled.';
      copyButton.textContent = 'Copied ✓';
    } catch {
      copyButton.replaceChildren(...copyPromptLabel);
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(prompt);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Prompt selected. Use your browser’s Copy command.';
    } finally {
      clearTimeout(timer);
    }
  });
});

// Add the same accessible copy interaction to source-derived examples and installation.
document.querySelectorAll('.examples pre, .skill-copy pre').forEach((pre) => {
  const wrap = document.createElement('div');
  wrap.className = 'copy-box';
  const bar = document.createElement('div');
  bar.className = 'copy-bar';
  const label = document.createElement('span');
  label.textContent = pre.closest('.skill-copy') ? 'INSTALL PROMPT' : 'RESEARCH PROMPT';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy-example';
  button.textContent = 'Copy prompt ⧉';
  const status = document.createElement('p');
  status.className = 'example-copy-status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  bar.append(label, button);
  pre.before(wrap);
  wrap.append(bar, pre);
  wrap.after(status);
  button.addEventListener('click', async () => {
    let timer;
    try {
      await Promise.race([
        navigator.clipboard.writeText(pre.textContent),
        new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('Clipboard unavailable')), 1000); })
      ]);
      status.textContent = pre.closest('.skill-copy')
        ? 'Copied. Paste it into OpenCode, Command Code, or your AI agent.'
        : 'Copied. Replace the brackets with your details.';
      button.textContent = 'Copied ✓';
    } catch {
      button.textContent = 'Copy prompt ⧉';
      const range = document.createRange();
      range.selectNodeContents(pre);
      const selection = window.getSelection();
      selection.removeAllRanges(); selection.addRange(range);
      status.textContent = 'Prompt selected. Use your browser’s Copy command.';
    } finally { clearTimeout(timer); }
  });
});
