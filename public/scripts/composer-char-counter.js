$(document).ready(function() {
    $('.error-empty').hide();
    $('.error-full').hide();
    $("#tweet-text").on('click', function() {
        let max = 140;
        let count = document.getElementById("counter");
        let counter = document.getElementById('tweet-text')
        $("#tweet-text").on('input', () => {
            count.textContent = max - counter.value.length;
             if(count.textContent < 0) {
                $('.error-full').slideDown().show();
            }
            else {
                $('.error-full').slideUp().hide();
                event.preventDefault();
            }
        });
        $("#create-tweet").on('submit', () => {
            count.textContent = max - counter.value.length;
            if (count.textContent === 140) {
                $('.error-empty').slideDown().show();

                }
        })
    });
  });
 
 
 
 
 
 
 
 