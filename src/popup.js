document.addEventListener('DOMContentLoaded', function() {
  var linkMeButton = document.getElementById('linkMe');

  linkMeButton.addEventListener('click', function() {
    chrome.tabs.executeScript(null, { file: "jquery-3.1.1.js" }, function() {
        goToVideo("general");
    });
  });

  document.getElementById("categories").addEventListener("click", function(e) {
    if (e.target && e.target.nodeName == "A") {
      goToVideo(e.target.id)
    }
  });

});

function goToVideo(category) {
  var videoList;
  $.getJSON(categoryLinks[category], function(data) {
    videoList = data.query.results.a;
    randomNumber = Math.floor((Math.random()*videoList.length) + 1);
    link = videoList[randomNumber].href;
    if (link.includes("&")) { // remove playlist sidebar on video page
      link = link.split("&")[0];
    }
    goToUrl = "http://youtube.com" + link;
    chrome.tabs.create({ url: goToUrl });
  });
}

var categoryLinks = {
  general: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.youtube.com%2Ffeed%2Ftrending%22%20and%20xpath%3D%22%2F%2Fa%5Bcontains(%40href%2C%20'watch%3Fv%3D')%20and%20contains(%40class%2C%20'yt-uix-tile-link')%5D%22&format=json&diagnostics=true&callback=",
  music: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI%22%20and%20xpath%3D%22%2F%2Fa%5Bcontains(%40href%2C%20'watch%3Fv%3D')%20and%20contains(%40class%2C%20'yt-uix-tile-link')%5D%22&format=json&diagnostics=true&callback=",
  gaming: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPLiCvVJzBupKnKoAJR3T8NxXwA5mPeBD8W%22%20and%20xpath%3D%22%2F%2Fa%5Bcontains(%40href%2C%20'watch%3Fv%3D')%20and%20contains(%40class%2C%20'yt-uix-tile-link')%5D%22&format=json&diagnostics=true&callback=",
  sports: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPL8fVUTBmJhHKEJjTNWn-ykf67rVrFWYtC%0A%22%20and%20xpath%3D%22%2F%2Fa%5Bcontains(%40href%2C%20'watch%3Fv%3D')%20and%20contains(%40class%2C%20'yt-uix-tile-link')%5D%22&format=json&diagnostics=true&callback=",
  moviesTV: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCtTnz5C5E4WRUSyb_EVVQeg%2Fvideos%22%20and%20xpath%3D%22%2F%2Fa%5Bcontains(%40href%2C%20'watch%3Fv%3D')%20and%20contains(%40class%2C%20'yt-uix-tile-link')%5D%22&format=json&diagnostics=true&callback=",
  technology: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPL57quI9usf_vDPXuhqIjyrPIjkw3C1oPe%22%20and%20xpath%3D%22%2F%2Fa%5Bcontains(%40href%2C%20'watch%3Fv%3D')%20and%20contains(%40class%2C%20'yt-uix-tile-link')%5D%22&format=json&diagnostics=true&callback=",
  food: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPL48XRvWqT9sLHDOyn-TWNNV9O63hBePrY%22%20and%20xpath%3D%22%2F%2Fa%5Bcontains(%40href%2C%20'watch%3Fv%3D')%20and%20contains(%40class%2C%20'yt-uix-tile-link')%5D%22&format=json&diagnostics=true&callback=",
  art: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPL54PBRyn-helE8EiEbqu0v5v6z7YGGwpC%22%20and%20xpath%3D%22%2F%2Fa%5Bcontains(%40href%2C%20'watch%3Fv%3D')%20and%20contains(%40class%2C%20'yt-uix-tile-link')%5D%22&format=json&diagnostics=true&callback=",
  news: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPL3ZQ5CpNulQldOL3T8g8k1mgWWysJfE9w%22%20and%20xpath%3D%22%2F%2Fa%5Bcontains(%40href%2C%20'watch%3Fv%3D')%20and%20contains(%40class%2C%20'yt-uix-tile-link')%5D%22&format=json&diagnostics=true&callback=",
  fashion: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPLe8KJ5gtpzr9wRAaQpLWlfc4Y1Xa7hKx7%22%20and%20xpath%3D%22%2F%2Fa%5Bcontains(%40href%2C%20'watch%3Fv%3D')%20and%20contains(%40class%2C%20'yt-uix-tile-link')%5D%22&format=json&diagnostics=true&callback=",
  politics: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPLUmcrN7u4BoyDfb9l6XNeAIO2Cs9k5GrM%22%20and%20xpath%3D%22%2F%2Fa%5Bcontains(%40href%2C%20'watch%3Fv%3D')%20and%20contains(%40class%2C%20'yt-uix-tile-link')%5D%22&format=json&diagnostics=true&callback=",
  comedy: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPLHkIZA41nhArb4g7pjyW0ehiACFI3PXdf%22%20and%20xpath%3D%22%2F%2Fa%5Bcontains(%40href%2C%20'watch%3Fv%3D')%20and%20contains(%40class%2C%20'yt-uix-tile-link')%5D%22&format=json&diagnostics=true&callback=",
  travel: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPLrebgFpgoVVa8bPu3vrzDyczjada_yyBz%22%20and%20xpath%3D%22%2F%2Fa%5Bcontains(%40href%2C%20'watch%3Fv%3D')%20and%20contains(%40class%2C%20'yt-uix-tile-link')%5D%22&format=json&diagnostics=true&callback=",
  education: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPL2PswnKYChBjPFkEDGKDYsITPIzNfs1h0%22%20and%20xpath%3D%22%2F%2Fa%5Bcontains(%40href%2C%20'watch%3Fv%3D')%20and%20contains(%40class%2C%20'yt-uix-tile-link')%5D%22&format=json&diagnostics=true&callback=",
}