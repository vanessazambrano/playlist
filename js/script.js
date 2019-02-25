/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["7 Rings",
"Dura Remix", 
"Taki Taki",
"Zeze"];

var songImage = ["https://static.stereogum.com/uploads/2019/01/Ariana-Grande-_7-rings_-Artwork-1547761906-640x640.jpg",
"https://m.media-amazon.com/images/I/814YsbXlhoL._SS500_.jpg",
"https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Taki_Taki_%28Official_Single_Cover%29_-_DJ_Snake.png/220px-Taki_Taki_%28Official_Single_Cover%29_-_DJ_Snake.png",
"https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Zeze_%28official_single_cover%29.png/220px-Zeze_%28official_single_cover%29.png"];

var artist = ["Ariana Grande",
"Daddy Yankee Ft. Bad Bunny, Natti Natasha & Becky G",
"DJ Snake Ft. Selena Gomez, Ozuna & Cardi B",
"Kodak Black Ft. Travis Scott & Offset"]

var songLength = ["3:05",
"4:09",
"3:52",
"3:46"]

var link = ["https://www.youtube.com/watch?v=QYh6mYIJG2Y",
"https://www.youtube.com/watch?v=-FvrwHtg6uo",
"https://www.youtube.com/watch?v=ixkoVwKQaJg",
"https://www.youtube.com/watch?v=mjaayCARwro"]


// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song){
        $("#songs").append("<p>" + song + "</p>");
    });

    songImage.forEach(function(song){
        $("#images").append("<img src=" + song + ">");
    });
    artist.forEach(function(song){
        $("#artists").append("<p>" + song + "</p>");
    });
    songLength.forEach(function(song){
        $("#lengths").append("<p>" + song + "</p>");
    });
    link.forEach(function(song){
        $("#links").append('<a href="' + song + '">Link</a>');
    });
}
    

function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#links").empty();
    $("#lengths").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var songNameInput = $("#song").val();
    songs.push(songNameInput);
    var artistNameInput = $("#artist").val();
    artist.push(artistNameInput);
    var songLengthInput = $("#length").val();
    songLength.push(songLengthInput);
    var imageUrlInput = $("#image").val();
    songImage.push(imageUrlInput);
    var linkInput = $("#link").val();
    link.push(linkInput);
    console.log(link)
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
