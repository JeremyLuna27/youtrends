function getTrending() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", "https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=US&key=AIzaSyC9YKtdTCK3XVFLpJ6kHL4y4Qw_VV4-3WY", true);
    xmlHttp.send(null);
  }
  console.log(xmlHttp.responseText);
  return;
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  //renderStatus('Hello world');
  var linkMeButton = document.getElementById('linkMe');

  linkMeButton.addEventListener('click', function() {
    //getTrending();
    //search();
    //console.log("hi");
    chrome.tabs.create({url: "http://youtube.com/" });
    keywordSearch();
  });
  
});

function keywordSearch(){
  console.log("hi");
  gapi.client.setApiKey(''AIzaSyC9YKtdTCK3XVFLpJ6kHL4y4Qw_VV4-3WY';');
  gapi.client.load('youtube', 'v3', function() {
    makeRequest();
  });
}

function makeRequest() {
  var q = 'soccer';//$('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet', 
    maxResults: 10
  });
  request.execute(function(response)  {                                                                                    
    //$('#results').empty()
    var srchItems = response.result.items;                      
    $.each(srchItems, function(index, item) {
      vidTitle = item.snippet.title;  
      vidThumburl =  item.snippet.thumbnails.default.url;                 
      //vidThumbimg = '<pre><img id="thumb" src="'+vidThumburl+'" alt="No  Image Available." style="width:204px;height:128px"></pre>';                   

      console.log(vidTitle);
      //$('#results').append('<pre>' + vidTitle + vidThumbimg +  '</pre>');                      
    })  
  })  
}