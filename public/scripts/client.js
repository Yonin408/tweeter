$(document).ready(function() {
  const $form = $(`#create-tweet`);
  $form.on('submit', (event) => {
    event.preventDefault();
    let count = document.getElementById("counter");
    if (count.textContent < 0) {

      $('.error-full').slideDown().show();
      $('#tweet').attr('disabled', 'disabled');
    } else {
      const urlencoded = $form.serialize();
      $('#tweet-text').val('');
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: urlencoded
      }).then((response) => {
        loadTweets();
        count.textContent = 140;
      })
        .catch((error) => {
        });
    }
  });
  //renders tweets
  const renderTweets = function(tweets) {
    $('#tweets-container').empty();
    for (const key of tweets) {
      const $tweet = createTweetElement(key);
      $('#tweets-container').prepend($tweet);
    }
  };
   
  //creates tweets from given object
  const createTweetElement = function(obj) {
    const $tweet = $(`
        <article class="oBorder">
          <header class="pBorder">
            <div class="main-content">
              <img src="${obj.user.avatars}">
              <label for="uName" class="uName">${$('<div>').text(obj.user.name).html()}</label>
              <div class="space"></div>
              <label for="uAccount" class="handle">${$('<div>').text(obj.user.handle).html()}</label>
            </div>
            ${$('<div>').text(obj.content.text).html()}
          </header>
          <label class="date">${timeago.format(obj.created_at)}</label>
          <button class="interact"><i class="fa-solid fa-flag"></i></button>
          <button class="interact"><i class="fa-solid fa-retweet"></i></button>
          <button class="interact"><i class="fa-sharp fa-solid fa-heart"></i></button>
        </article>`);
    return $tweet;
  };

  //loads tweets on page
  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
      .then(function(tweets) {
        console.log('Success: ', tweets);
        renderTweets(tweets);
      })
      .catch(function(error) {
        console.log('Error: ', error);
      });
  };

  loadTweets();
});
   