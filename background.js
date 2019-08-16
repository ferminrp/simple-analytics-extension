const url_openstartups = 'https://simpleanalytics.com/open-startups.xyz.json';
const url_influencers = 'https://simpleanalytics.com/influencersargentina.xyz.json';
const url_donarg = 'https://simpleanalytics.com/donarg.com.json';

var total_pageviews = 0

function abbrNum(r, t) {
    t = Math.pow(10, t);
    for (var a = ["k", "m", "b", "t"], n = a.length - 1; n >= 0; n--) {
        var e = Math.pow(10, 3 * (n + 1));
        if (e <= r) {
            1e3 == (r = Math.round(r * t / e) / t) && n < a.length - 1 && (r = 1, n++), r += a[n];
            break
        }
    }
    return r
};


    chrome.tabs.onCreated.addListener(function(tabId, changeInfo, tab) {
      total_pageviews = 0;
      $.getJSON(url_openstartups, function(data) {
          //data is the JSON string
          console.log(data.pageviews);
          var pageviews = data.pageviews;
          total_pageviews += pageviews;
          chrome.browserAction.setBadgeText({text: abbrNum(total_pageviews,1).toString()});
      });
      $.getJSON(url_influencers, function(data) {
          //data is the JSON string
          console.log(data.pageviews);
          var pageviews = data.pageviews;
          total_pageviews += pageviews;
          chrome.browserAction.setBadgeText({text: abbrNum(total_pageviews,1).toString()});
      });
      $.getJSON(url_donarg, function(data) {
          //data is the JSON string
          console.log(data.pageviews);
          var pageviews = data.pageviews;
          total_pageviews += pageviews;
          chrome.browserAction.setBadgeText({text: abbrNum(total_pageviews,1).toString()});
      });
        chrome.browserAction.setBadgeText({text: abbrNum(total_pageviews,1).toString()});
    });
