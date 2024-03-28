function openGift() {
  const text = document.getElementById("gift-text");
  const all = document.querySelectorAll(".a");
  all.forEach((element) => {
    element.classList.remove("hidden");
  });
  text.classList.remove("hidden");
}
