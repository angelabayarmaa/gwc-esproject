/* .js files add interaction to your website */
var quoteList = ["Around the world, 24% of deaths can be traced back to avoidable environmental factors", "Cutting methane is the single fastest, most effective opportunity to reduce climate change risks in the near term", "Methane is 25 times more potent at trapping heat in the atmosphere", "Nitrous oxide is 300 times more potent than carbon dioxide at trapping heat in the atmosphere"];

var quote = document.getElementById( "quote");

var myBtn = document.getElementById("myBtn");

var count= 0; 

myBtn.addEventListener("click", displayQuote);

function displayQuote(){
  quote.innerHTML = quoteList[count];
  count = count+1; 
  if( count== quoteList.length){
    count=0;
  }
}


