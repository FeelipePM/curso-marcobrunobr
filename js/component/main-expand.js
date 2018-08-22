var mainExpand = window.document.querySelector(".main-expand");
var mainExpandSubtitle = mainExpand.querySelector(".subtitle");
var mainCard = window.document.querySelector(".main-card");

function clickMainExpand() {
  if (mainCard.classList.contains("-isActive")) {
    mainCard.classList.remove("-isActive");
    mainExpandSubtitle.textContent = "Full Screen";
  } else {
      mainCard.classList.add("-isActive");
      mainExpandSubtitle.textContent = "Short Screen";
  }
}

mainExpand.addEventListener("click", clickMainExpand);