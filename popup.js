function abbrNum(r,t){t=Math.pow(10,t);for(var a=["k","m","b","t"],n=a.length-1;n>=0;n--){var e=Math.pow(10,3*(n+1));if(e<=r){1e3==(r=Math.round(r*t/e)/t)&&n<a.length-1&&(r=1,n++),r+=a[n];break}}return r}

$.getJSON('https://simpleanalytics.com/open-startups.xyz.json', function(data) {
    //data is the JSON string
    console.log(data.pageviews);
    var pageviews = abbrNum(data.pageviews,2);
    $('#open-startups').text(pageviews);
    /*chrome.browserAction.setBadgeText({text:downloads});*/
});

$.getJSON('https://simpleanalytics.com/influencersargentina.xyz.json', function(data) {
    //data is the JSON string
    console.log(data.pageviews);
    var pageviews = abbrNum(data.pageviews,2);
    $('#influencers').text(pageviews);
    /*chrome.browserAction.setBadgeText({text:downloads});*/
});


$.getJSON('https://simpleanalytics.com/donarg.com.json', function(data) {
    //data is the JSON string
    console.log(data.pageviews);
    var pageviews = abbrNum(data.pageviews,2);
    $('#donarg').text(pageviews);
    /*chrome.browserAction.setBadgeText({text:downloads});*/
});



/*chrome.browserAction.setBadgeBackgroundColor({color:"red"}); chrome.browserAction.setBadgeText({text:downloads});*/
