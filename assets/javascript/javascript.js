// Globals
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3c3850fc219544eca9e26a2398363927&type_of_material=news";
var begindate = "";
var enddate = "";
var qttarticles = 10;
console.log("begin");

function showarticles(qttarticles, articles) { // function to show articles in the Div. %%% update divs
    console.log("show function");
    console.log(articles);
    console.log(articles[0].snippet);


    for (i = 0; i < qttarticles; i++) { // define fields to present %%%
        console.log("loop:" + i);
        $("#articles").append("<h1>Article: " + i + "</h1><br>");
        //$("#articles").append("   snippet: " +  articles[i].snippet + "<br>");
        $("#articles").append("<h3>   headline: " + articles[i].headline.main + "</h3><br>");
        $("#articles").append("  section: " + articles[i].section_name + "<br>");
        $("#articles").append("  pub_date: " + articles[i].pub_date + "<br>");
        if (articles[i].byline.original){ // find a way to test if exists. If the object does not have the property it causes an error. "Deferred exception: Cannot read property 'original' of undefined TypeError: Cannot read property 'original' of undefined"
        $("#articles").append("  original: " + articles[i].byline.original + "<br>");
        }
        $("#articles").append("  web-url: " + articles[i].web_url + "<br>");
    }
}

function search(qttarticles, queryURL) {
    console.log("url2:"+queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
        // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.
        console.log(queryURL);
        console.log(response);
        var search = response.response.docs;
        console.log(search);
        showarticles(qttarticles, search);
    })
}
var goBtn = document.querySelector("#searchbutton");
//
goBtn.addEventListener("click", function () {
    queryURL = queryURL + "&q=" + $("#searchTerm").val().trim();
    qttarticles = $("#retrieveRecords").val().trim();

    begindate = $("#startYear").val().trim() + "0101";
    enddate = $("#endYear").val().trim() + "1231";
    console.log("begindate:" + begindate);
    console.log("enddate:" + enddate);
    
    
    if (parseInt(begindate)>1900) {
        queryURL = queryURL + "&begin-date=" + begindate;
        console.log("query"+queryURL);
    } 

    if (parseInt(enddate)>1900) {
        queryURL = queryURL + "&end-date=" + enddate;
        console.log("query"+queryURL);
    }
    console.log("qttarticles: " + qttarticles);
    if (parseInt(qttarticles)) {
        qttarticles = parseInt(qttarticles);
    }
    else {
        qttarticles = 10; //default 10
    }
    console.log("url1:"+queryURL);
    search(qttarticles, queryURL);

});

