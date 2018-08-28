var $bullet = document.querySelectorAll(".bullet");
var $bulletIsActive = document.querySelector(".bullet.-isActive");
var $cardIsActive = document.querySelector(".card.-isActive");

$bullet.forEach((item) => {
  item.addEventListener("click", clickInBullet)
});

function clickInBullet() {
  $bulletIsActive.classList.remove("-isActive")
  this.classList.add("-isActive")
  $bulletIsActive = this

  $cardIsActive.classList.remove("-isActive")
  var idCard = this.querySelector("a").getAttribute("href")
  var $targetCard = document.querySelector(idCard)
  $targetCard.classList.add("-isActive")
  $cardIsActive = $targetCard

}
