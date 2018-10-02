
$( document ).ready(function() {

  const getTweetText = $("#btn-submit").click(function(event){
    event.preventDefault();
    let tweet = $("#text-field").val();
    appendTweetToList(tweet);
    $("#text-field").val("");
  });

  function appendTweetToList(tweet) {
    $("#tweets").prepend(
      `<div class="tweet bg-light mt-3 p-3">
        <p class="tweet-text h3">${tweet}</p>
        <span id="span-date" class="small">${appendDateToTweet()}</span>
      </div>`
      )
  }

  function appendDateToTweet(){
    return formatDate(new Date());
  }

  function formatDate(date) {
    var monthNames = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out","nov", "dez"];
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    return day + " de " + monthNames[monthIndex] + " de " + year;
  }
  
});




