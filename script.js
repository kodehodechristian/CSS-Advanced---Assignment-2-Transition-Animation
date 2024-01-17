document.getElementById("smileButton").addEventListener("click", function () {
  let mouth = document.querySelector(".mouth");
  mouth.classList.toggle("mouthTurned");
});

document.getElementById("coolButton").addEventListener("click", function () {
  let sunglasses = document.querySelector(".sunglasses");
  sunglasses.classList.toggle("transformed");
});

document.getElementById("discoButton").addEventListener("click", function () {
  let sunglasses = document.querySelector(".animationdiv");
  sunglasses.classList.toggle("transformedanimation");
});
