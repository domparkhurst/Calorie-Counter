// data
var food = document.getElementById("food");
var cal = document.getElementById("cal");
var date = document.getElementById("date");
var total = document.getElementById("total");
var list = document.getElementById("data");

function myData() {
  var liElem = document.createElement("li");
  list.appendChild(liElem);
  
  // food value
  var spanElemFood = document.createElement("span");
  liElem.appendChild(spanElemFood);  
  var spanElemFoodTxt = document.createTextNode(food.value);
  spanElemFood.appendChild(spanElemFoodTxt);
  // attributes
  spanElemFood.setAttribute("id", "food-value");
  spanElemFood.setAttribute("class", "data-span");
  spanElemFood.addEventListener("click", function(){
    var promptVal = prompt("Enter something ");
    spanElemFood.innerText = promptVal;
  });

  // cal value 
  var spanElemCal = document.createElement("span");
  liElem.appendChild(spanElemCal);  
  var spanElemCalTxt = document.createTextNode(cal.value + "kcal");
  spanElemCal.appendChild(spanElemCalTxt);
  // attributes
  spanElemCal.setAttribute("id", "cal-value");
  spanElemFood.setAttribute("style", "data-span");
  spanElemCal.addEventListener("click", function(){
    var promptVal = prompt("Enter something ");
    spanElemCal.innerHTML = promptVal + "kcal";
  });

  // date value
  var spanElemDate = document.createElement("span");
  liElem.appendChild(spanElemDate);  
  var spanElemDateTxt = document.createTextNode(date.value);
  spanElemDate.appendChild(spanElemDateTxt);
  // attributes
  spanElemDate.setAttribute("id", "date-value");
  spanElemFood.setAttribute("class", "data-span");
  spanElemDate.addEventListener("click", function(){
    var promptVal = prompt("Enter something ");
    spanElemDate.innerHTML = promptVal;
  });
}
