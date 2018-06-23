// Globals
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3c3850fc219544eca9e26a2398363927";
var begindate = "";
var enddate = "";
var qttarticles = 10;
console.log("begin");

function showarticles(qttarticles, articles) { // function to show articles in the Div. %%% update divs
    console.log("show function");
    console.log(articles);
    console.log(articles[0].snippet);


    for (i = 0; i < qttarticles; i++) {
        console.log("loop:" + i);
        $("#articles").append("Article " + i + " " + articles[i].snippet + "<br>");
    }
}

function search(qttarticles, queryURL) {

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
        // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

        console.log(response);
        var search = response.response.docs;
        console.log(search);
        showarticles(qttarticles, search);
    })
}
var goBtn = document.querySelector("#searchbutton");
//
goBtn.addEventListener("click", function() {
//window.onload = function () {
//    console.log("load");
//}

//$("btn btn-primary").on("click", function () {
//    console.log("onclick btn");
//    event.preventDefault();
//    var input = $(this).attr("data-form-control");
//});





var term="";
//$("#buttonSearch").on("click", function () {
    $("#articles").append("zzzzzzzz");
    console.log("Term1: " + term);
    term = "&q=" + $("#searchTerm").val().trim();
    queryURL = queryURL + term;
    console.log("Term2: " + term);

    begindate = $("#startYear").val().trim() + "0101";
    enddate = $("#endYear").val().trim() + "1201";

    if (parseInt(begindate)) {
        console.log(queryURL);
        queryURL = queryURL + "&begin-date=" + begindate;
        console.log(queryURL);
    }
    if (parseInt(enddate)) {
        console.log(queryURL);
        queryURL = queryURL + "&end-date=" + enddate;
        console.log(queryURL);
    }
    if (parseInt(qttarticles)) {
        qttarticles = parseInt(qttarticles);
    }
    else {
        qttarticles = 10; //default 10
    }

    search(qttarticles, queryURL);

});

