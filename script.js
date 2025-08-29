console.log("Js is connected baby !!");

// Clicking heart icon

const topCounter = document.querySelector(".likeNumber");

const hearts = document.querySelectorAll(".heartClick");

hearts.forEach((heart) => {
  heart.addEventListener("click", function () {
    topCounter.innerText = parseInt(topCounter.innerText) + 1;
  });
});

//count coints

var coinCount = document.getElementById("coin");
var coins = parseInt(coinCount.innerText);

var callButtons = document.querySelectorAll(".btn-click");
var historyList = document.getElementById("call-history-list");
var clearHistoryBtn = document.querySelector(".clear-history");

callButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    var serviceName = button.getAttribute("service");
    var serviceNumber = button.getAttribute("number");

    alert("Calling " + serviceName + "  " + serviceNumber + " .....");

    coins = coins - 20;
    coinCount.innerText = coins;

    var li = document.createElement("li");
    li.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "py-2",
      "border-b",
      "border-gray-300"
    );

    // service name and number print in history
    var leftDiv = document.createElement("div");
    leftDiv.classList.add("flex", "flex-col");

    var serviceNameEl = document.createElement("span");
    serviceNameEl.classList.add("inter", "font-semibold", "text-[18px]");
    serviceNameEl.innerText = serviceName;

    var serviceNumberEl = document.createElement("span");
    serviceNumberEl.classList.add(
      "hind-madurai",
      "font-normal",
      "text-[18px]",
      "text-[#5C5C5C]"
    );
    serviceNumberEl.innerText = serviceNumber;

    leftDiv.appendChild(serviceNameEl);
    leftDiv.appendChild(serviceNumberEl);

    var timeDiv = document.createElement("div");
    timeDiv.classList.add(
      "hind-madurai",
      "font-normal",
      "text-[18px]",
      "text-center"
    );

    // Get current time from my device
    var now = new Date();
    var timeString = now.toLocaleTimeString("en-BD", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    timeDiv.innerText = timeString;

    li.appendChild(leftDiv);
    li.appendChild(timeDiv);

    historyList.appendChild(li);
  });
});

// deleting past number calling
clearHistoryBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});

// copying number

const copyButtons = document.querySelectorAll(".btn-copy");

copyButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const copyCount = document.getElementById("copy-count");
    copyCount.innerText = parseInt(copyCount.innerText) + 1;
    const card = this.closest(".copy-card");
    const numberText = card.querySelector(".copy-number").innerText.trim();

    navigator.clipboard
      .writeText(numberText)
      .then(() => {
        alert(`Number ${numberText} copied to clipboard!`);
        console.log("Copied: " + numberText);
      })
      .catch((err) => {
        alert("Failed to copy: " + err);
      });
  });
});
