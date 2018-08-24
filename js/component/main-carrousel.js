var $bullet = document.querySelectorAll(".bullet");
var $bulletIsActive = document.querySelector(".bullet.-isActive");

$bullet[0].addEventListener("click", clickInBullet);
$bullet[1].addEventListener("click", clickInBullet);
$bullet[2].addEventListener("click", clickInBullet);

function clickInBullet() {
  $bulletIsActive.classList.remove("-isActive");
  this.classList.add("-isActive");
  $bulletIsActive = this;
}