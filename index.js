var maliDiv = document.querySelector(".mali");
var contentList = ["Mew mew", "Zzzz"];

var timeoutId;

function toggleOpacity() {
  var randomIndex = Math.floor(Math.random() * contentList.length);
  var randomContent = contentList[randomIndex];
  maliDiv.textContent = randomContent;

  timeoutId = setTimeout(toggleOpacity, 3000);
}

toggleOpacity();
