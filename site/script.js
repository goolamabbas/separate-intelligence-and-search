const copyButton = document.getElementById('copy-prompt');
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
    status.textContent = 'Copied. Paste it into your assistant and replace the brackets.';
    copyButton.textContent = 'Copied ✓';
  } catch {
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
