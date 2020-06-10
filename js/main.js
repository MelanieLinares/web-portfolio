function welcome() {
   var now = new Date();
   var hrs = now.getHours(); //getHours takes visitors local time, not server time.
   var msg = "";
   
   if (hrs > 5 && hrs < 12) msg = "and good morning"; // After 6am
   else if (hrs > 12  && hrs < 17) msg = "and good afternoon"; // After 12pm
   else if (hrs > 17  && hrs < 24) msg = "and good evening"; // After 5pm
   else msg = "you night owl"; // After 10pm
document.getElementById("msg").innerHTML = msg;
}
 
    welcome();

   
   
   function blink() {
    loopBlinkingInRandomCountDownTime();
   }
   
   function loopBlinkingInRandomCountDownTime() {
    const MIN_TIME_IN_SECOND = 3;
    const MAX_TIME_IN_SECOND = 10;
    setTimeout(
     blink,
     getRandomCountDownTimeBetween(MIN_TIME_IN_SECOND, MAX_TIME_IN_SECOND)
    );
   }
   
   function getRandomCountDownTimeBetween(min, max) {
    const MILLISECOND = 1000;
    return (
     Math.floor(Math.random() * (max - min)) * MILLISECOND +
     min * MILLISECOND
    );
   }
   loopBlinkingInRandomCountDownTime();
   const SWITCH_WORD_IN_SECOND = 4000;
   const wordElement = document.getElementById("word");
   const words = ["scruffy dogs", "board games", "CMYK", "papercraft", "jazz", "dark chocolate"];
   setInterval(function() {
    randomIndex = Math.floor(Math.random() * words.length);
    wordElement.innerText = words[randomIndex];
   }, SWITCH_WORD_IN_SECOND);

function Blinkinglogo() {
  setInterval(function () { 
    blink();
  }, 10000);
}
function blink() {
  // note no timeout for the hiding part
  document.getElementById('blink').classList.add("imageblink");
  setTimeout(function () {
    document.getElementById('blink').classList.remove("imageblink");
  }, 150);
}

Blinkinglogo();
