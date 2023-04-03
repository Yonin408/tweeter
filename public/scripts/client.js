/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/




$(document).ready(function() { // use jQuery document ready function to ensure that all elements in the DOM are loaded before manipulating them
    const $form = $(`#create-tweet`);

    $form.on('submit', (event) => {
        event.preventDefault();
        const urlencoded = $form.serialize();
        console.log(urlencoded)
        $('#tweet-text').val('');
        $.ajax({
            method: 'POST',
            url: '/tweets',
            data: urlencoded
        }).then((response) => {
            console.log(response)
            loadTweets();
            $('#tweets-container').empty();
        })
  
    });
   const renderTweets = function(tweets) {
      for (const key of tweets) {
         const $tweet = createTweetElement(key)
         $('#tweets-container').prepend($tweet);
      }
    }
   
   
   const createTweetElement = function(obj) {
   const $tweet = (`  
   <article class ="oBorder">
   <header class="pBorder">
   <div class="main-content">
   <img src="${obj.user.avatars}">
    <label for="uName" class="uName">${obj.user.name}</label>\
    <div class="space"></div>
    <label for="uAccount"class="handle">${obj.user.handle}</label>
    </div>
    ${obj.content.text}
   </header>
   <span class="date"></span>
   <script>$('.date').text(timeago.format((${obj.created_at})));</script>
   <button class="interact"><i class="fa-solid fa-flag"></i></button>
   <button class="interact"><i class="fa-solid fa-retweet"></i></button>
   <button class="interact"><i class="fa-sharp fa-solid fa-heart"></i></button>
   </article>`)
   return $tweet;
   }
   
   
   const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
      .then(function(tweets) {
        console.log('Success: ', tweets);
        renderTweets(tweets);
      })
      .catch(function(error) {
        console.log('Error: ', error);
      });
  }

   loadTweets();
    });
   
   