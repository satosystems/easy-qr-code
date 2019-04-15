(function() {
  var textarea = document.getElementById("textarea"),
      button = document.getElementById("button"),
      image = document.getElementById("image"),
      makeUrl = function(text) {
        return "http://chart.googleapis.com/chart?cht=qr&chs=400x400&choe=UTF-8&chl=" + encodeURIComponent(text);
      };
  chrome.tabs.getSelected(null, function(tab) {
    image.src = makeUrl(tab.url);
    textarea.value = tab.url;
    setTimeout(function() { // TODO: using setTimeout is workaround
      textarea.select();
    }, 100);
    button.onclick = function() {
      var text = textarea.value;
      if (text !== "") {
        image.src = makeUrl(text);
      }
    };
  });
})();
