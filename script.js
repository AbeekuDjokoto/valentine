function moveAway() {
  let noButton = document.getElementById("noButton");
  document.addEventListener("mousemove", function (e) {
    const distanceX = e.clientX - noButton.getBoundingClientRect().right;
    const distanceY = e.clientY - noButton.getBoundingClientRect().bottom;

    if (Math.abs(distanceX) < 50 && Math.abs(distanceY) < 50) {
      noButton.style.transition = "right 0.5s ease-in-out";
      noButton.style.right =
        Math.floor(Math.random() * window.innerWidth - noButton.clientWidth) +
        "px";
    }
  });
}
