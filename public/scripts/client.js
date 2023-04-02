/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() { // use jQuery document ready function to ensure that all elements in the DOM are loaded before manipulating them
    const data = [
        {
          "user": {
            "name": "Newton",
            "avatars": "https://i.imgur.com/73hZDYK.png"
            ,
            "handle": "@SirIsaac"
          },
          "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
          },
          "created_at": 1461116232227
        },
        {
          "user": {
            "name": "Descartes",
            "avatars": "https://i.imgur.com/nlhLi3I.png",
            "handle": "@rd" },
          "content": {
            "text": "Je pense , donc je suis"
          },
          "created_at": 1461113959088
        }
      ]
    renderTweets(data);
  });


const renderTweets = function(tweets) {
    for (const key of tweets) {
       const $tweet = createTweetElement(key)
       $('#tweets-container').append($tweet);
    }
  }

const createTweetElement = function(obj) {
const $tweet = (`     <article class ="oBorder">
<header class="pBorder">
  <label for="uName" class="uName">${obj.user.name}</label>
  <label for="uAccount"class="handle">${obj.user.handle}</label>
  ${obj.content.text}
</header>
<label for="date" class="date">${obj.created_at} days ago</label>
<button class="interact"><i class="fa-solid fa-flag"></i></button>
<button class="interact"><i class="fa-solid fa-retweet"></i></button>
<button class="interact"><i class="fa-sharp fa-solid fa-heart"></i></button>
</article>`)
return $tweet;
}



