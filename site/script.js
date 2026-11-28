const copyButton = document.getElementById('copy-prompt');
const copyPromptLabel = [...copyButton.childNodes];
copyButton.addEventListener('click', async () => {
  const prompt = document.getElementById('research-prompt');
  const status = document.getElementById('copy-status');
  status.textContent = 'Copying…';
  let timer;
  try {
    await Promise.race([
      navigator.clipboard.writeText(prompt.textContent),
      new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('Clipboard unavailable')), 1000); })
    ]);
    status.textContent = 'Copied. Paste it into your assistant once Exa is connected.';
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

// Add the same accessible copy interaction to source-derived examples and installation.
document.querySelectorAll('.examples pre, .skill-copy pre').forEach((pre) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy-example';
  button.textContent = 'Copy prompt';
  const status = document.createElement('p');
  status.className = 'example-copy-status';
  status.setAttribute('role', 'status');
  pre.before(button);
  pre.after(status);
  button.addEventListener('click', async () => {
    let timer;
    try {
      await Promise.race([
        navigator.clipboard.writeText(pre.textContent),
        new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('Clipboard unavailable')), 1000); })
      ]);
      status.textContent = pre.closest('.skill-copy')
        ? 'Copied. Paste it into your coding agent.'
        : 'Copied. Replace the brackets with your details.';
      button.textContent = 'Copied ✓';
    } catch {
      button.textContent = 'Copy prompt';
      const range = document.createRange();
      range.selectNodeContents(pre);
      const selection = window.getSelection();
      selection.removeAllRanges(); selection.addRange(range);
      status.textContent = 'Prompt selected. Use your browser’s Copy command.';
    } finally { clearTimeout(timer); }
  });
});
