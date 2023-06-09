const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie__list__items");
console.log(movieLists);

arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    if (imageItem - (6 + clickCounter) >= 0) {
      clickCounter++;
      movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
    }
  });

});