$(document).ready(function(){

    var searches = ["NBA", "NFL", "MLB", "World Cup", "NHL", "Houston Rockets", "Golden State Warriors"];

    createButtons();

    $("button").on("click", function() {
        var apiKey = "BFjm7zYPwSkcSu4q5YluCE9EyQTrjD69";
        var search = $(this).attr("data-search");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          search + "&api_key=" + apiKey + "&limit=10";
        $("#display").empty();

        $.ajax({
          url: queryURL,  
          method: "GET"
        }).then(function(response) {
          
  
          console.log(response);
  
          var results = response.data;
          console.log(results);
          for (var i = 0; i < results.length; i++) {
        
            var newDiv = $("<div>");
            var h2 = $("<h2>").text(search)
            var p = $("<p>").text("Rating: " + results[i].rating);
            var divImage = $("<img>");
            divImage.attr("src", results[i].images.fixed_height.url);
            
            newDiv.append(p, divImage);
            $("#display").append(newDiv);
          // ==================================
          }
          $("#display").prepend(h2);
  
        });
      });

    // THIS IS WHERE I AM!
      function createButtons() {
        $("#buttons-view").empty();

        // Loops through the array of search items
        for (var i = 0; i < searches.length; i++) {

          var a = $("<button>");
          a.addClass("btn btn-primary");
          a.attr("data-search", searches[i]);
          a.text(searches[i]);
          $("#buttons-view").append(a);
        }
      }

      // Prevents the default form option
      $("#add-search").on("click", function(event) {
        event.preventDefault();
        if($("#button-input").val().trim() != ""){
            var newButton = $("#button-input").val().trim();
            searches.push(newButton);

            createButtons();
        }
      });

});