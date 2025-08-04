var profilePic = document.getElementById("profilePic");

let isEnlarged = false;

profilePic.addEventListener("click", function () {
  if (!isEnlarged) {
    profilePic.style.transform = "scale(1.1)";
    isEnlarged = true;
  } else {
    profilePic.style.transform = "scale(1)";
    isEnlarged = false;
  }
});

const listItems = document.querySelectorAll("ul li");

listItems.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    item.style.fontWeight = "bold";
    item.style.color = "teal";
  });

  item.addEventListener("mouseout", function () {
    item.style.fontWeight = "normal";
    item.style.color = "black";
  });
});
