const ratingFormContainer = document.querySelector(".rate-form");
const ratingMessageContainer = document.querySelector(".rating-message");
const ratings = document.querySelectorAll(".ratings button");
const submit = document.getElementById("submit");
const selectedRateText = document.getElementById("selected-rate-text");

ratings.forEach((rate) => {
  rate.addEventListener("click", function (e) {
    const selectedRate = document.querySelector(".ratings button.selected");
    if (selectedRate) {
      selectedRate.classList.remove("selected");
    }
    this.classList.add("selected");
  });
});

let complainSubmit = document.getElementById("complain-submit");
submit.addEventListener("click", function () {
  const selectedRate = document.querySelector(".ratings button.selected");
  if (selectedRate == null) {
    alert("please rate before submitting");
    return;
  }
  ratingFormContainer.style.display = "none";
  ratingMessageContainer.style.display = "block";
  selectedRateText.innerHTML = `
  you selected ${selectedRate.textContent} out of 5
  `;
  const complain = document.getElementById("complain");
  const complainMsg = document.querySelector(".msg");
  if (selectedRate.textContent <= 4) {
    complain.style.display = "block";
    complainMsg.innerHTML = `but why not 5 is there anything wrong <br> how can we help you?`;
    complainSubmit.style.display = "block";
  }
});
complainSubmit.addEventListener("click", function () {
  const finalAct = document.querySelector(".final-act");
  ratingMessageContainer.style.display = "none";
  finalAct.style.display = "block";
});
