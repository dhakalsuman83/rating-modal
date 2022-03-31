const ratings = document.querySelectorAll(".rating-content");
const modal = document.querySelector(".modal");
const modalIcon = document.getElementById("modal-icon");
const btn = document.querySelector(".btn");
const btnStyle = window.getComputedStyle(btn, "hover");
const ratingMessage = document.querySelector(".rating-msg");

ratings.forEach((rating, index) => {
  rating.addEventListener("click", () => {
    btn.disabled = false;
    btn.style.cursor = "pointer";
    // for (let i = 0; i <= index; i++) {
    //   ratings[i].style.backgroundColor = "hsl(25, 97%, 53%)";
    // }
    btn.addEventListener("click", () => {
      let rating = index === 0 ? "rating" : "ratings";
      ratingMessage.innerHTML = `You have given ${index + 1} ${rating} `;
      modal.style.zIndex = "100";
    });
  });
});

modalIcon.addEventListener("click", () => {
  modal.style.zIndex = "-1";
  btn.disabled = true;
  btn.style.cursor = "not-allowed";
});
