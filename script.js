var quotes = [
  { quote: "Maintain a safe distance from others (at least 1 metre), even if they don’t appear to be sick."},
  { quote: "Wear a mask in public, especially indoors or when physical distancing is not possible."},
  { quote: "Choose open, well-ventilated spaces over closed ones. Open a window if indoors."},
  { quote: "Clean your hands often. Use soap and water, or an alcohol-based hand rub."},
  { quote: "Get vaccinated when it’s your turn. Follow local guidance about vaccination."},
  { quote: "Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze."},
  { quote: "Stay home if you feel unwell."},
  { quote: "Smile and stay safe"},
  { quote: "Wear a well-fitting three-layer mask, especially when you can’t physically distance, or if you’re indoors. Clean your hands before putting on and taking off a mask."},
  { quote: "Frequently clean your hands with soap and water, or an alcohol-based hand rub. If you can, carry alcohol-based rub with you and use it often."},
  { quote: "In india majorly two vaccines are available which are Covishield and Covaxin."},
  { quote: "WHO has approved both the vaccines so it's safe to get vaccinated."},
  { quote: "The government is preparing to vaccinate children against covid-19."},
  { quote: "The country’s drug regulator has already approved Zydus Cadila’s ZyCoV-D for those aged 12 years and above, and recommended granting emergency use authorization (EUA) for Bharat Biotech’s Covaxin for children as young as two."},
  { quote: 'this pandemic will over soon till then stay happy safe and vaccinated.'}
]
console.log(quotes);
function getRandomQuote() {
  var random = Math.floor(Math.random() * quotes.length);
  return(quotes[random ]);
}
function printQuote(){
  var currentQuote = getRandomQuote();
  var html = ''
  var quoteDiv = document.getElementById('quote-box')
  html += '<p class="quote">' + currentQuote.quote 
  html += '</p>'
  quoteDiv.innerHTML = html
  setRandomBackground()
  
}

function setRandomBackground(){
  var randomNumber = Math.floor(Math.random() * 16
  )
  if (randomNumber == 0){
    document.body.style.background = 'silver';
  }else if (randomNumber == 1){
    document.body.style.background = 'aqua';
  }else if (randomNumber == 2){
    document.body.style.background = 'aquamarine';
  }else if (randomNumber == 3){
    document.body.style.background = 'cornsilk';
  }else if (randomNumber == 4){
    document.body.style.background = 'darkgoldenrod';
  }else if (randomNumber == 5){
    document.body.style.background = 'darkkhaki';
  }else if (randomNumber == 6){
    document.body.style.background = 'darkorange';
  }else if (randomNumber == 7){
    document.body.style.background = 'darkseagreen';
  }else if (randomNumber == 8){
    document.body.style.background = 'indianred';
  }else if (randomNumber == 9){
    document.body.style.background = 'darkorchild';
  }else if (randomNumber == 10){
    document.body.style.background = 'lavenderblush';
  }else if (randomNumber == 11){
    document.body.style.background = 'lightcyan';
  }else if (randomNumber == 12){
    document.body.style.background = 'violet';
  }else if (randomNumber == 13){
    document.body.style.background = 'black';
  }else if (randomNumber == 14){
    document.body.style.background = 'purple';
  }else if (randomNumber == 15){
    document.body.style.background = 'teal';
  }
}
document.getElementById('load-quote').addEventListener("click", printQuote, false);
window.setInterval(printQuote, 30000);