// Statistics
data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

// Initializing the amount of each day
let cards = document.querySelectorAll(".price-card");
console.log(cards);
Array.from(cards).forEach((element, index) => {
  element.innerHTML = "$" + data[index].amount;
});

// Setting the height of each bar
let bars = document.querySelectorAll(".bar");
console.log(bars);
Array.from(bars).forEach((element, index) => {
  element.style.height = data[index].amount * 2.5 + "px";
});

// When a certain bar is hovered.
Array.from(bars).forEach((element, index) => {
  element.addEventListener("click", function (event) {
    cards[index].style.visibility = "visible";
    element.style.opacity = "0.9";
    for (i = 0; i < 7; i++) {
      if (i != index) {
        cards[i].style.visibility = "hidden";
      }
    }
  });
});
