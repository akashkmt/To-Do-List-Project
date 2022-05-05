let allTasks = JSON.parse(localStorage.getItem('allTasks')) || [];

document.querySelector("#input").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
      const input = document.querySelector("#input");
      allTasks.push(input.value);
      localStorage.setItem('allTasks',JSON.stringify(allTasks));
      addItem(input.value);
    } 
  });
  
  document.querySelector("#add_item").addEventListener("click", () => {
    const input = document.querySelector("#input");
    allTasks.push(input.value);
    localStorage.setItem('allTasks',JSON.stringify(allTasks));
    addItem(input.value);
  });
  
  addItem = (input,index) => {

    const item = document.createElement("div");
    const div = document.createElement("div");
    const checkIcon = document.createElement("i");
    const trashIcon = document.createElement("i");
    const text = document.createElement("p");
  
    item.className = "item";
    text.textContent = input;
  
    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", () => {
      checkIcon.style.color = "limegreen";
    })
    div.appendChild(checkIcon);
  
    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "darkgray";
    // trashIcon.addEventListener("click", () => {
    //   item.remove();
    // })
    trashIcon.addEventListener('click', () => {
        allTasks.splice(index, 1);
        localStorage.setItem('allTasks',JSON.stringify(allTasks));
        window.location.reload();
    })

    div.appendChild(trashIcon);
  
    item.appendChild(text);
    item.appendChild(div);
  
    document.querySelector("#to_do_list").appendChild(item);
    document.querySelector("#input").value = "";
  }

  window.onload = () => {
      document.querySelector('#to_do_list').innerHTML='';
      allTasks.forEach((element, elementIndex) => {
          addItem(element, elementIndex);
      });
  }