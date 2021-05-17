const control = document.querySelector(".control");
const countdown = document.querySelector(".countdown");
const countdownValue = 5;
countdown.innerText = countdownValue;
function play() {
  var beepsound = new Audio(
    "https://www.soundjay.com/button/sounds/beep-01a.mp3"
  );
  beepsound.volume = 0.2;
  beepsound.play();
}

document.addEventListener("DOMContentLoaded", () => {
  let controlState = 0;

  function startCountdown() {
    let count = 0;
    setTimeout(() => {
      return;
    }, 10000);

    let stopInterval = setInterval(() => {
      countdown.innerHTML = countdownValue - 1 - count;
      count++;
      if (count == countdownValue) {
        clearInterval(stopInterval);
        controlState = 0;
        alterControlValue();
      }
    }, 1000);
  }

  function alterControlValue() {
    if (controlState == 1) {
      //   control.innerText = "GO";
      control.classList.add("hide");
      control.classList.remove("show");
      //   controlState = 1;
    } else {
      //   control.innerText = "RESET";
      control.classList.add("show");
      control.classList.remove("hide");
      //   controlState = 1;
    }
    play();
  }

  control.addEventListener("click", () => {
    if (controlState === 0) {
      controlState = 1;
      alterControlValue();
      startCountdown();
    } else {
      controlState = 0;
      alterControlValue();
    }
  });
});
