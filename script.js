const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask()
// in this function i have add if condtion if inputbox value is empty it will give msg u must write somthing
{
      if(inputBox.value === '')
      {
        alert("You must write Something...!");
      }
      else
      {
        // once u will add something it will come here else creating one html elemet with li
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;   
        listContainer.appendChild(li);       //to display input li
        
        let span=document.createElement("span");        
        span.innerHTML="\u00d7";             //for cross icon
        li.appendChild(span);                   
      }
      inputBox.value="";         
      saveData();
}
listContainer.addEventListener("click",function(e)
{
  if(e.target.tagName === "LI")
  {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN")
  {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData()
{
  localStorage.setItem("data",listContainer.innerHTML);
}
function showTask()
{
  listContainer.innerHTML =localStorage.getItem("data");
}
showTask();

