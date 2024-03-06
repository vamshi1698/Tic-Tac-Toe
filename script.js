boxes = document.querySelectorAll(".button");
person1 = true;
boxes.forEach((box) =>{
  box.addEventListener("click", () =>{
    if(person1){
    box.innerText = "X";
    person1=false;
    }
  else{
    box.innerText = "O";
    person1 = true;
  }
    box.disabled = true;
    check_win();
  });
});


//decide winner
win_patterns = [
  [0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]
]

function check_win(){
win_patterns.forEach((pattern) => {
  let [a,b,c] = pattern;
  if(boxes[a].innerText !== ''&& boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText)
  {
    alert(`winner is ${boxes[a].innerText}`);
    boxes.forEach((box)=> {
      box.disabled = true;
    })
  }

})
}

//reset button
reset = document.getElementById("reset");
function clear_data(){
 for( box of boxes){
   box.innerText = "";
   box.disabled = false;
 }
}
