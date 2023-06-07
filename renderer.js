const { clipboard } = require('electron');
const updateButton = document.getElementById('updateButton');
const copyButton = document.getElementById('copyButton');
const clipboardList = document.getElementById('clipboardList');

let clipboardHistory = [];

updateButton.addEventListener('click', () => {
  const currentClipboard = clipboard.readText();
  if (!clipboardHistory.includes(currentClipboard)) {
    clipboardHistory.push(currentClipboard);
    const listItem = document.createElement('li');
    listItem.textContent = currentClipboard;
    clipboardList.appendChild(listItem);
  }
});

copyButton.addEventListener('click', () => {
  const selectedText = window.getSelection().toString();
  if (selectedText) {
    clipboard.writeText(selectedText);
  }
});
