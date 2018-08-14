//Sajeel Malik
//Sports Highlights Gif Generator

$(document).ready(function(){

    var searches = ["NBA", "NFL", "MLB", "World Cup", "NHL", "Houston Rockets", "Golden State Warriors"];

    createButtons();

    //a button click listener on the document so that new buttons are considered as well
    $(document).on("click", "button", function() {
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
          console.log(results, searches);
          for (var i = 0; i < results.length; i++) {
        
            var newDiv = $("<div>");
            var h2 = $("<h2>").text(search)
            var p = $("<p>").text("Rating: " + results[i].rating);
            var divImage = $("<img>");
            divImage.attr("src", results[i].images.fixed_height_still.url);

            divImage.attr("data-state", "still")
            divImage.attr("data-still", results[i].images.fixed_height_still.url);
            divImage.attr("data-animate", results[i].images.fixed_height.url);
            
            newDiv.append(divImage, p);
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
          a.addClass("btn btn-success");
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

      $(document).on("click", "img", function() {
  
        var state = $(this).attr("data-state");
 
        if(state === "animate"){
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
        else if(state === "still"){
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        }
 
      });

});