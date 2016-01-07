$(document).ready(function(){
  
   $("#box1").draggable({revert:"invalid"});
   $("#box2").draggable({revert:"invalid"});
   $("#box3").draggable({revert:"invalid"});
   $("#box4").draggable({revert:"invalid"});
  
  
  
  //droppable part
//Droppable 1
  $(".droppable1").droppable({
    accept:"#box3",    
   });//ends here

//Droppable 2
  $(".droppable2").droppable({
    accept:"#box4",    
   });//ends here
  
//Droppable 3
  $(".droppable3").droppable({
    accept:"#box2",    
   });//ends here
  
 //Droppable 4
  $(".droppable4").droppable({
    accept:"#box1",    
   });//ends here
  
  
  
});