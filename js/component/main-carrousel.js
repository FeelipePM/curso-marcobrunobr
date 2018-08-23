var $bullet = document.querySelector(".bullet");

$bullet.addEventListener("click", clickInBullet);

function clickInBullet() {
  $bullet.classList.toggle("-isActive");
  console.log("Funcionando");
  
}