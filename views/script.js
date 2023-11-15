const volumeInput = document.getElementById("volume");
const volumeValue = document.getElementById("volume-value");
const div33 = document.querySelector(".div-33");
const div34 = document.querySelector(".div-34");
const div35 = document.querySelector(".div-35");
const div36 = document.querySelector(".div-36");
const div37 = document.querySelector(".div-37");
const div38 = document.querySelector(".div-38");
const costValue = document.getElementById("cost");
const costPorcent = document.getElementById("cost-porcent");

volumeInput.addEventListener("input", function () {
  volumeValue.textContent = `${this.value}KZT`;

  const inputValue = parseFloat(this.value);
  if (this.value >= 100000 && this.value < 200000) {
    const dividedValue = inputValue / 6;
    const porcentValue = dividedValue * 0.15;
    costValue.textContent = `${dividedValue.toFixed(2)}KZT`;
    costPorcent.textContent = `${porcentValue.toFixed(2)}KZT`;
  } else if (this.value >= 200000 && this.value < 300000) {
    const dividedValue = inputValue / 12;
    const porcentValue = dividedValue * 0.15;
    costValue.textContent = `${dividedValue.toFixed(2)}KZT`;
    costPorcent.textContent = `${porcentValue.toFixed(2)}KZT`;
  } else if (this.value >= 300000 && this.value < 400000) {
    const dividedValue = inputValue / 24;
    const porcentValue = dividedValue * 0.15;
    costValue.textContent = `${dividedValue.toFixed(2)}KZT`;
    costPorcent.textContent = `${porcentValue.toFixed(2)}KZT`;
  } else if (this.value >= 400000 && this.value < 500000) {
    const dividedValue = inputValue / 36;
    const porcentValue = dividedValue * 0.15;
    costValue.textContent = `${dividedValue.toFixed(2)}KZT`;
    costPorcent.textContent = `${porcentValue.toFixed(2)}KZT`;
  } else if (this.value >= 500000 && this.value < 600000) {
    const dividedValue = inputValue / 48;
    const porcentValue = dividedValue * 0.15;
    costValue.textContent = `${dividedValue.toFixed(2)}KZT`;
    costPorcent.textContent = `${porcentValue.toFixed(2)}KZT`;
  } else if (this.value >= 600000 && this.value <= 1000000) {
    const dividedValue = inputValue / 60;
    const porcentValue = dividedValue * 0.15;
    costValue.textContent = `${dividedValue.toFixed(2)}KZT`;
    costPorcent.textContent = `${porcentValue.toFixed(2)}KZT`;
  }

  costValue.textContent = `${dividedValue.toFixed(2)}KZT`;
  costPorcent.textContent = `${porcentValue.toFixed(2)}KZT`;
});

volumeInput.addEventListener("input", function () {
  volumeValue.textContent = `${this.value}KZT`;

  if (this.value >= 100000 && this.value < 200000) {
    div33.style.backgroundColor = "#27ae60";
    div33.style.color = "white";
    div34.style.color = "#27ae60";
    div34.style.backgroundColor = "";
    div35.style.backgroundColor = "";
    div36.style.backgroundColor = "";
    div37.style.backgroundColor = "";
    div38.style.backgroundColor = "";
  } else if (this.value >= 200000 && this.value < 300000) {
    div34.style.backgroundColor = "#27ae60";
    div34.style.color = "white";
    div33.style.color = "#27ae60";
    div35.style.color = "#27ae60";
    div36.style.color = "#27ae60";
    div37.style.color = "#27ae60";
    div38.style.color = "#27ae60";
    div33.style.backgroundColor = "";
    div35.style.backgroundColor = "";
    div36.style.backgroundColor = "";
    div37.style.backgroundColor = "";
    div38.style.backgroundColor = "";
  } else if (this.value >= 300000 && this.value < 400000) {
    div35.style.backgroundColor = "#27ae60";
    div35.style.color = "white";
    div33.style.color = "#27ae60";
    div34.style.color = "#27ae60";
    div36.style.color = "#27ae60";
    div37.style.color = "#27ae60";
    div38.style.color = "#27ae60";
    div33.style.backgroundColor = "";
    div34.style.backgroundColor = "";
    div36.style.backgroundColor = "";
    div37.style.backgroundColor = "";
    div38.style.backgroundColor = "";
  } else if (this.value >= 400000 && this.value < 500000) {
    div36.style.backgroundColor = "#27ae60";
    div36.style.color = "white";
    div33.style.color = "#27ae60";
    div34.style.color = "#27ae60";
    div35.style.color = "#27ae60";
    div37.style.color = "#27ae60";
    div38.style.color = "#27ae60";
    div33.style.backgroundColor = "";
    div34.style.backgroundColor = "";
    div35.style.backgroundColor = "";
    div37.style.backgroundColor = "";
    div38.style.backgroundColor = "";
  } else if (this.value >= 500000 && this.value < 600000) {
    div37.style.backgroundColor = "#27ae60";
    div37.style.color = "white";
    div33.style.color = "#27ae60";
    div34.style.color = "#27ae60";
    div35.style.color = "#27ae60";
    div36.style.color = "#27ae60";
    div38.style.color = "#27ae60";
    div33.style.backgroundColor = "";
    div34.style.backgroundColor = "";
    div35.style.backgroundColor = "";
    div36.style.backgroundColor = "";
    div38.style.backgroundColor = "";
  } else if (this.value >= 600000 && this.value <= 1000000) {
    div38.style.backgroundColor = "#27ae60";
    div38.style.color = "white";
    div33.style.color = "#27ae60";
    div34.style.color = "#27ae60";
    div35.style.color = "#27ae60";
    div36.style.color = "#27ae60";
    div37.style.color = "#27ae60";
    div33.style.backgroundColor = "";
    div34.style.backgroundColor = "";
    div35.style.backgroundColor = "";
    div36.style.backgroundColor = "";
    div37.style.backgroundColor = "";
  }
});
