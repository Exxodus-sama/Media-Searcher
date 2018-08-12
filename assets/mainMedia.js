$("#submit-search").on("click", function(event){
    event.preventDefault();

    var movie = $("#search-bar").val();
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=71f0cfba";
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response);
        var results = JSON.stringify(response);
        console.log(results);
        var movieDiv = $("<div class='movie'>");
        var movieInfo1 = $("<p>").text("Title: " + response.Title);
        var movieInfo2 = $("<p>").text("Release Year: " + response.Year);
        var movieInfo3 = $("<p>").text("Rating: " + response.imdbRating);
        var movieInfo4 = $("<p>").text("Plot: " + response.Plot);


        movieDiv.append(movieInfo1, movieInfo2, movieInfo3, movieInfo4);

        var img = response.Poster;
        var image = $("<img>").attr("src", img);

        movieDiv.append(image);

        $("#movies-view").prepend(movieDiv);
    })
});

$("#clear-page").on("click", function(event){
    $("movies-view").empty();
});