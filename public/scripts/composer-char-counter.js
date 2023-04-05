$(document).ready(function() {
    $('.error-empty').hide();
    $('.error-full').hide();
    $("#tweet-text").on('click', function() {
        let max = 140;
        let count = document.getElementById("counter");
        let counter = document.getElementById('tweet-text')
        $("#tweet-text").on('input', (event) => {
            count.textContent = max - counter.value.length;
             if(count.textContent < 0) {
                $('.error-full').slideDown().show();
                $('#tweet').attr('disabled', 'disabled');
            }  
            else {
                $('.error-full').slideUp().hide();
                $('#tweet').removeAttr('disabled');
            }
        });
        $("#create-tweet").on('submit', (event) => {
            count.textContent = max - counter.value.length;
            if (count.textContent === 140) {
                $('.error-empty').slideDown().show();
                }
        })
    });
  });
 
 
 
 
 
 
 
 