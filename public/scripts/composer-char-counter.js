$(document).ready(function() {
  $('.error-empty').hide();
  $('.error-full').hide();
  $("#tweet-text").on('click', function() {
    let max = 140;
    let count = document.getElementById("counter");
    let counter = document.getElementById('tweet-text');

    //sends error and disables submit button if
    //requirements are not met
    $("#tweet-text").on('input', (event) => {
      count.textContent = max - counter.value.length;
      if (count.textContent < 0) {
        $('.error-full').slideDown().show();
        $('#tweet').attr('disabled', 'disabled');
      } else {
        $('.error-full').slideUp().hide();
        $('#tweet').removeAttr('disabled');
      }
    });
  });
});
 
 
 
 
 
 
 
 