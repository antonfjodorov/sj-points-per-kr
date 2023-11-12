chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab?.id || 0 },
    files: ['clearStorage.js']
  });
})

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: 'Clear cache',
    contexts: ["action"],
    id: "cache"
  })
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab?.id || 0 },
    files: ['onclick.js']
  });

  chrome.storage.local.onChanged.addListener(s => {
    console.log('chrome.storage.local changed', s)
  })
});
