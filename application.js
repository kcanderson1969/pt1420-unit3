// Define Global
var toDoList = [];
  
function changeDisplay(){
   var list = document.getElementById("todolist");
   // Only place we actually change the screen
   list.innerHTML = "";
   for(var i=0; i<toDoList.length; i++) {
   list.innerHTML += '<div class="item">' + toDoList [i] +
   ' (<a href="#" onclick="javascript:removeToDo(' + i + ')">x</a>)' +
   '</div>';
   }
}
 
function removeToDo(itemToRemove){
  var newList = [];
  for (var i=0;i<toDoList.length;i++) {
    if (i !== itemToRemove) {
      newList.push(toDoList[i]);
    }
  }
  toDoList=newList;
  changeDisplay();
} 
 
function addToDo(){

  var tmpItem;
  var newToDo = document.getElementById("todonew");
  tmpItem = newToDo.value;
  
  if(tmpItem == ""){
    alert("You didn't put anything in to add");
    return;
  }
  toDoList.push(tmpItem);
  // Call our display function
  changeDisplay();
  
  newToDo.value = "";
  newToDo.select();
}



















