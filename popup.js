document.addEventListener('DOMContentLoaded', function() {
  var linkMeButton = document.getElementById('linkMe');

  linkMeButton.addEventListener('click', function() {
    chrome.tabs.executeScript(null, { file: "jquery-3.1.1.js" }, function() {
        // chrome.tabs.executeScript(null, {
        //   code: 'var config = 1';
        // }, function() {
        //   chrome.tabs.executeScript(null, { file: "content.js" });
        // });
        chrome.tabs.executeScript(null, { file: "content.js" });
    });
  });
});