$(document).ready(function() {
    $("#tweet-text").on('click', function() {
        let max = 140;
        let count = document.getElementById("counter");
        let counter = document.getElementById('tweet-text')
        $("#tweet-text").on('input', () => {
            count.textContent = max - counter.value.length;
            if (count.textContent === 140) {
                alert('error, empty tweet');
            }
            else if(count.textContent < 0) {
                alert('character count exceeded limit');
                return;
            }
            
        });
    });
  });
 
 
 
 
 
 
 
 