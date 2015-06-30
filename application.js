//Define Globals
  var toDoList = [];
  
  function changeDisplay(){
   var list = document.getElementById("todolist");
   // Only place we actually change the screen
   list.innerHTML = "";
   for(var i=0; i<toDoList.length; i++) {
   list.innerHTML += '<div class="item">' + toDoList[i] + '</div>';
   }
  }
  
function addToDo(){


  var tmpItem;
  var newToDo = document.getElementById("todonew");
  

  tmpItem = newToDo.value;

    
  toDoList.push(tmpItem);
  // Call our display function
  changeDisplay();
  
  newToDo.value = "";
  newToDo.select();
  
  
}



















