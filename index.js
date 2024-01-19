var maliDiv = document.querySelector(".mali");
var contentList = ["Ê Ma Ly kia ngủ đeeee", "Ngủ đi má ơi!!"];

var timeoutId;

function toggleOpacity() {
  var randomIndex = Math.floor(Math.random() * contentList.length);
  var randomContent = contentList[randomIndex];
  maliDiv.textContent = randomContent;

  timeoutId = setTimeout(toggleOpacity, 5000);
}

toggleOpacity();
