const url_openstartups = 'https://simpleanalytics.com/open-startups.xyz.json';
const url_influencers = 'https://simpleanalytics.com/influencersargentina.xyz.json';
const url_donarg = 'https://simpleanalytics.com/donarg.com.json';

var total_pageviews = 0

function abbrNum(r,t){t=Math.pow(10,t);for(var a=["k","m","b","t"],n=a.length-1;n>=0;n--){var e=Math.pow(10,3*(n+1));if(e<=r){1e3==(r=Math.round(r*t/e)/t)&&n<a.length-1&&(r=1,n++),r+=a[n];break}}return r};

chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab) {
  fetch(url_openstartups)
    .then(response => response.json())
    .then(data => {
      var new_pageviews = data.pageviews;
      total_pageviews = 0;
      total_pageviews = total_pageviews + new_pageviews;
    })
    .catch(console.error);
    fetch(url_influencers)
      .then(response => response.json())
      .then(data => {
        var new_pageviews = data.pageviews;
        total_pageviews = total_pageviews + new_pageviews;
      })
      .catch(console.error);
      fetch(url_donarg)
        .then(response => response.json())
        .then(data => {
          var new_pageviews = data.pageviews;
          total_pageviews = total_pageviews + new_pageviews;
        })
        .catch(console.error);
        var number = abbrNum(total_pageviews,1)
        chrome.browserAction.setBadgeText({text:number.toString()});
});
