let songNames=["Infinity", "Middle of the Night","Hymn For the Weekend"];

let artistNames=["Jaymes Young","Elley Duhe","Coldplay"];
let images=["https://i1.sndcdn.com/artworks-2OSGVjxNBtdS-0-t500x500.jpg",
           "https://i.scdn.co/image/ab67616d0000b27353a2e11c1bde700722fecd2e",
           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz8pg9pHtqYGngBlU7GLmYU0pa_4BV7mqZJuKJqjYzuYUAwdGGoU8Y_jskgScpCHNF4Lw&usqp=CAU"];
let links=["https://www.youtube.com/watch?v=PWqEPKduGm8",
          "https://www.youtube.com/watch?v=qwlzrT5zq9Y",
          "https://www.youtube.com/watch?v=YykjpeuMNEk"];
let length= ["200","200","200"];

//Complete Day 1 goals here

function displaySongInfo() {
  songNames.forEach(function (songName) { 
    $(".songs").append("<p>" + songName + "</p>"); });
  artistNames.forEach(function (artistName) { 
    $(".artists").append("<p>" + artistName + "</p>"); });
  images.forEach(function (image) { 
    $(".images").append(`<img src="${image}">`); });
   links.forEach(function (link) { 
    $(".links").append(`<a href="${link}">Play song</a>`); });
  length.forEach(function(length){
     $(".lengths").append("<p>" + length + "</p>"); });
  
  // Complete the Day 2 goals inside this function
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Step 1 Retrieve user input

  let newSongTitle= $(".title").val();
  let newSongArtist= $(".artist").val();
  let newSongImage= $(".image").val();
  let newSongLink= $(".link").val();
  let newLength= $(".length").val();
   // Step 2 push new items to song arrays
  songNames.push(newSongTitle);
  artistNames.push(newSongArtist);
  images.push(newSongImage);
  links.push(newSongLink);
  length.push(newLength);
  // Complete Day 3 goals inside this function
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
