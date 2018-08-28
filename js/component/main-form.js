var $mainForm = document.querySelector(".main-form");
var $input = $mainForm.querySelector(".input");

$mainForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if($input.value === "") {
    console.log("Fill in the field send an email with an email");
  } 
});