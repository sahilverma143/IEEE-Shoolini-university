function toggleReadMore() {
    var aboutUsText = document.getElementById("aboutUsText ,UpcomingText");
    var button = document.querySelector(".read-more-button");
    if (aboutUsText.style.height === "auto") {
      aboutUsText.style.height = "1em"; // Adjust the height according to your design
      button.textContent = "Read More";
    } else {
      aboutUsText.style.height = "auto";
      button.textContent = "Read Less";
    }
  }