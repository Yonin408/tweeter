$(document).ready(function() {
  $('.error-empty').hide();
  $('.error-full').hide();
  let max = 140;
  let count = document.getElementById("counter");
  let counter = document.getElementById('tweet-text');
  //sends error and disables submit button if
  //requirements are not met
  $("#tweet-text").on('input', () => {
    count.textContent = max - counter.value.length;
    if (counter.value.trim().length !== 0) {
      $('.error-empty').slideUp();
    }
    if (count.textContent < 0) {
      $('.error-full').slideDown().show();
      count.style.color = '#f12505';
    } else {
      count.style.color = 'inherit';
      $('.error-full').slideUp();
      $('#tweet').attr('disabled', false);
    }

  });
  $("#tweet").on('click', () => {
    if (counter.value.trim().length === 0) {
      $('.error-empty').slideDown().show();
    }
  });
  $('form').on('submit', (event) => {
    if (counter.value.trim().length === 0 || count.textContent < 0) {
    }


  });

});

 
 
 
 
 
 