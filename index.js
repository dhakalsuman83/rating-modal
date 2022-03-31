const ratings = document.querySelectorAll(".rating-content");
const modal = document.querySelector(".modal");
const modalIcon = document.getElementById("modal-icon");
const btn = document.querySelector(".btn");
const ratingMessage = document.querySelector(".rating-msg");

ratings.forEach((rating, index) => {
  rating.addEventListener("click", () => {
    console.log(rating);
    btn.disabled = false;
    btn.addEventListener("click", () => {
      ratingMessage.innerHTML = `You have given ${index + 1} rating `;
      modal.style.zIndex = "100";
    });
  });
});

modalIcon.addEventListener("click", () => {
  modal.style.zIndex = "-1";
  btn.disabled = true;
});
