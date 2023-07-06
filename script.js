// Toggle command details visibility on button click
document.querySelectorAll('.expand-button').forEach(function(button) {
  button.addEventListener('click', function() {
    var commandDetails = button.parentElement.nextElementSibling;
    commandDetails.classList.toggle('open');
  });
});
$(document).ready(function() {
  $('.menu-button').click(function() {
    $('.side-menu').toggleClass('open');
  });
});
