//alert("hello World")
  var toDoList = [];
  
function addToDo(){

  var list;
  var tmpItem;
  
    list = document.getElementById("todolist");
    tmpItem = document.getElementById("todonew").value;
    list.innerHTML = "";
    
    toDoList.push(tmpItem)
   for(var i=0; i<toDoList.length; i++) {
     list.innerHTML += '<div class="item">' + toDoList[i] + '</div>';
   }
}



















