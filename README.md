# GifTastic

* Look up your favorite sports team or player to see their top highlights!
* Powered by Bootstrap, Javascript, jQuery, AJAX, and JSON formats

Here, I pool gifs using the Giphy API and deconstruct the JSON file in a user-friendly format so that users can easily see top clips of their favorite players and teams.

## Getting Started

Follow the deployed project link below to play the game!

### Deployed Project Link
<!-- make a link to the deployed site -->
 
[Sports Highlights](https://sajeelmalik.github.io/GifTastic/)

### Image Preview of GifTastic
<!-- take a picture of the image and add it into the readme  -->

![Sports Highlights Gifs Preview](https://raw.githubusercontent.com/sajeelmalik/GifTastic/master/images/preview.JPG "Sports Gifs Preview")

## Prerequisites

The page can be run from any browser, preferably on Google Chrome!

## Technology Used

* **HTML5**
* **CSS3** 
* **Javascript** - the primary scripting logic powering the game
* **jQuery** - the robust scripting library for Javascript
* **AJAX** - Asynchronous Javascript
* [**Giphy API**](https://developers.giphy.com/) - a developer-oriented resource to natively embed gifs
* [**Bootstrap CDN v4.1.0**](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - the open-source web styling framework used
* [**Google Fonts**](https://fonts.google.com/) - an interactive library of licensed fonts 

# Code Snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->
Here, an AJAX call is utilized to get a JSON file that will be manipulated to the user's needs. 

```
$(document).on("click", "button", function() {
        var apiKey = /hidden/;
        var search = $(this).attr("data-search");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          search + "&api_key=" + apiKey + "&limit=10";
        $("#display").empty();

        $.ajax({
          url: queryURL,  
          method: "GET"
        }).then(function(response) {
  
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
          }
          $("#display").prepend(h2);
  
        });
      });

```

# Learning Points
<!-- Learning points where you would write what you thought was helpful -->
* JSON is a revolutionary array-based format that creates an ease of data manipulation, especially when using APIs pooled from online resources, in this case, Giphy
* AJAX functions provide an interesting and unique format for running functions, especially with the novel .then() 'promise' format


## Authors

* **Sajeel Malik** - *Initial work* - [GitHub](https://github.com/sajeelmalik)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
