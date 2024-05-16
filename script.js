var parent_div = document.createElement("div");
parent_div.className="main"

var input_date = document.createElement("input");
input_date.setAttribute("type","date");
input_date.setAttribute("id","dob");

var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML = "click me";
button.addEventListener("click",display_date);

parent_div.append(input_date,button);
document.body.append(parent_div);

var div=document.createElement("div");
div.className="main1";

function display_date(){
  div.innerHTML=""
  var input = document.getElementById("dob").value;
  var inputdate = new Date(input);
  var currentdate = new Date();
  console.log(`Input date :${inputdate}, Current date:${currentdate}`);
  var millisecdiff = parseInt(currentdate.getTime()) - parseInt(inputdate.getTime())
  console.log(millisecdiff);
  var secdiff = Math.floor(millisecdiff/1000);
  console.log(secdiff);
  var mindiff = Math.floor(secdiff/60);
  console.log(mindiff);
  var hoursdiff = Math.floor(mindiff/60);
  console.log(hoursdiff);
  var daysdiff = Math.floor(hoursdiff/24);
  console.log(daysdiff);
  var yeardiff = currentdate.getFullYear() - inputdate.getFullYear()
  console.log(yeardiff);
  var monthdiff= (yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
  console.log(monthdiff);
  div.innerHTML=`
  Given date ${currentdate}<br>
  milliseconds:${millisecdiff}<br>
  seconds:${secdiff}<br>
  minute:${mindiff}<br>
  Hours:${hoursdiff}<br>
  Days:${daysdiff}<br>
  Months:${monthdiff}<br>
  Years:${yeardiff}
`;
document.body.append(div);
}

