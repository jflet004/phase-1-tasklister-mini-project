document.addEventListener("DOMContentLoaded", () => {
  
  let toDoList = document.querySelector('form');
  const newTitle = document.querySelector('h2').textContent = 'My To-Do\'s';

  // Changes "unordered list" to "ordered list"
  let uList = document.querySelector('ul');
  let oList = document.createElement('ol');
  uList.parentNode.replaceChild(oList, uList);
  oList.setAttribute('id', 'tasks');
  
  
  toDoList.addEventListener('submit', e => {
    e.preventDefault(); // prevents form from refreshing right after submitting
    
    // CREATES LIST
    let userInput = e.target.new_task_description.value; 
    let newTask = document.createElement('li'); 
    newTask.textContent = `${userInput}  `;
    document.querySelector('#tasks').appendChild(newTask);
    
    // CREATES BUTTON
    let btn = document.createElement('button'); 
    btn.textContent = 'X';
    newTask.appendChild(btn);

    //CREATES A DROPDOWN
    const dropdown = document.createElement('select');
    document.querySelector('#tasks').appendChild(dropdown);
    const high = document.createElement('option');
    const medium = document.createElement('option');
    const low = document.createElement('option');
  
    //ADDS OPTIONS TO DROPDOWN
    high.text = 'HIGH priority';
    high.value = 'high';
    medium.text = 'MEDIUM priority';
    medium.value = 'medium';
    low.text = 'LOW priority';
    low.value = 'low';
    dropdown.add(low);
    dropdown.add(medium);
    dropdown.add(high);

    
    //RESET AND DELETE
    toDoList.reset();
    btn.addEventListener('click', e => {
      e.target.parentNode.nextSibling.remove();
      e.target.parentNode.remove();
    });
    
    
    //CHANGE TASK COLOR
  









  })

  
});
