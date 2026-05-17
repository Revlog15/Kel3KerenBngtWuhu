console.log("Phishing Detection System Running...");
const detectButton = document.querySelector(".detect-btn");
const resultBox = document.getElementById("resultBox");

detectButton.addEventListener("click", () => {
  const urlInput = document.querySelector(".url-input").value;

  if (urlInput.trim() === "") {
    alert("Please enter a URL first.");
    return;
  }

  // nanti bagian ini connect ke Flask + ML

  resultBox.classList.remove("hidden");
});