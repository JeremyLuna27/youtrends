var categoryLinks = {
  general: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.youtube.com%2Ffeed%2Ftrending%22%20and%20xpath%3D%22%2F%2Fa%5Bcontains(%40href%2C%20'watch%3Fv%3D')%20and%20contains(%40class%2C%20'yt-uix-tile-link')%5D%22&format=json&diagnostics=true&callback=",
  food: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPL48XRvWqT9sLHDOyn-TWNNV9O63hBePrY%22%20and%20xpath%3D%22%2F%2Fa%5Bcontains(%40href%2C%20'watch%3Fv%3D')%20and%20contains(%40class%2C%20'yt-uix-tile-link')%5D%22&format=json&diagnostics=true&callback=",
}

var videoList;
//alert(config);
$.getJSON(categoryLinks["food"], function(data) {
  videoList = data.query.results.a;
  //console.log(videoList[10].href); // don't want &list=; only want watch?v=*
  randomNumber = Math.floor((Math.random()*videoList.length) + 1);
  link = videoList[randomNumber].href;
  if (link.includes("&")) {
    link = link.split("&")[0];
  }
  goToUrl = "http://youtube.com" + link;
  chrome.tabs.create({ url: goToUrl });
});