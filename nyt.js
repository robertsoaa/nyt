<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>NYT</title>
</head>

<body>
  <label for="">Search </label><input id="search"></input>
  <label for="">Begin Date </label> <input id="begindate"></input>
  <label for="">End Date </label> <input id="enddate"></input>
  
  <button id="searchbutton">Search</button>

  <div id="articles">
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
    
    var term = "";
    var begindate = "";
    var enddate = "";
    var recordstoretrieve = 5;
    
    function showarticles (articles) {
        console.log("show function");
        console.log(articles);
        console.log(articles.response.docs[0].snippet);
        console.log("before loop");

        for (i=0; i<recordstoretrieve; i++) {  
            console.log("loop:" + i);
            $("#articles").append("Article "+ i + " " + articles.response.docs[i].snippet +"<br>");
        };
    }

    function search(term, begindate, enddate) {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3c3850fc219544eca9e26a2398363927&q=" + term + "&begin-date=" + begindate + "&end-date=" +enddate +"&limit=5";
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
      // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

      console.log(response);

      var search = response.response.docs;
      console.log(search);
      showarticles(response);
    });
    } 

     $("#searchbutton").on("click", function() {
      term = $("#search").val().trim();
      console.log("Term: " + term);
      begindate = $("#begindate").val().trim();
      enddate = $("#enddate").val().trim();
      search(term, begindate,enddate);
    
    });

  </script>
</body>

</html>