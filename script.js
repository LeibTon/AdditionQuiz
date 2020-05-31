var numbers = []
function refreshPage(){
    window.location.reload();
}
function generateNumber(digit) {
  numbers = [];
  document.querySelector("#finalResult").classList.remove("visible");
  for(var i = 1;i<=20;i++)
  {
    var random1,random2;
    if(digit==1)
    {
      random1 =  Math.floor((Math.random() * 9) + 1);
      random2 =  Math.floor((Math.random() * 9) + 1);
    }
    else if(digit==2)
    {
       random1 =  Math.floor((Math.random() * 90) + 10);
       random2 =  Math.floor((Math.random() * 90) + 10);
    }
    numbers.push([random1,random2]);
    var element = document.querySelector("#add"+i);
    document.querySelector("#result"+i).classList.remove("visible");

    element.innerHTML = random1+" + "+random2+" = ";
    element.classList.add("visible");
    document.querySelector("#input"+i).classList.add("visible");
  }
  document.querySelector("#submit1").classList.add("visible");
  document.querySelector("#submit2").classList.add("visible");
}

function result()
{
  var sum=0;
for(var i=1;i<=20;i++)
{
  var element = document.querySelector("#input"+i);
  var result1 = document.querySelector("#result"+i);
  var value = element.value;
  var result = numbers[i-1][0]+numbers[i-1][1];
  if(result==value)
  {
    sum+=1;
    result1.innerHTML= "&#10004";
  }
  else {
    result1.innerHTML = "&#10007 "+result
  }
  result1.classList.add("visible");
}
var percent = Math.floor(sum*100/7);
var final = document.querySelector("#finalResult");
if(percent>90)
final.innerHTML= percent+"/100 Excellent";
else if(percent>70)
final.innerHTML= percent+"/100 Good";
else
final.innerHTML= percent+"/100";
final.classList.add("visible");
}
