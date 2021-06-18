// function([string1, string2],target id,[color1,color2])    
consoleText(['Idea, termed \'the wisdom of crowds\', is that in a large group errors of judgment should cancel each other out',
 ' Today we use same principle to guess the month when covid-19 3rd wave in India',
  'Might start',
    'All you have to do is press on month you think covid-19 might end.We will use all data collected  to make a guess',
    'Note: This is just a simple experiment this in no way provides any definite answer to when covid19 second wave in India might end']
    , 'text',['orange','white','blue','rgb(0, 255, 0)','red']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 7000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 40)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbzQqVWLfCX365vWZyWCF1cnVRJpokbr8o5r0z23fyjd9viWt0q1jeLFFuHfR4egUU9t/exec'
const form = document.forms['google-sheet']
form.addEventListener('submit', e => 
{
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response =>window.open('thankyou.html','_self'))
  .catch(error => console.error('Error!', error.message))
})
function disable()
{
  document.getElementById("submit-button").style.display="none";
  document.getElementById("disabled").style.display="block";
}