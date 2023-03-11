"use strict";

var arrows = document.querySelectorAll(".arrow");
var movieLists = document.querySelectorAll(".movie__list__items");
console.log(movieLists);
arrows.forEach(function (arrow, i) {
  var clickCounter = 0;
  var imageItem = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    if (imageItem - (6 + clickCounter) >= 0) {
      clickCounter++;
      movieLists[i].style.transform = "translateX(".concat(movieLists[i].computedStyleMap().get("transform")[0].x.value - 300, "px)");
    } else {
      movieLists[i].style.transform = "translateX(0)";
    }
  });
});