let hamBtn = document.querySelector('.mobile').querySelector('i');

let dropdown = document.querySelector('.dropdown');

let displayNone = document.querySelectorAll('.hide');

let body = document.querySelector('body');

function toggleButton() {
  let toggle = null;
  
  function changeState() {
    if (toggle === null) {
      toggle = true;
    } else {
      toggle = !toggle; 
    }
  }
  
  function getState() {
    return toggle;
  }
  
  return {
    changeState,
    getState
  } 
}

const toggle = toggleButton();

toggle.changeState();

toggle.getState();

hamBtn.addEventListener('click', ()=> {
  toggle.changeState();

  if(toggle.getState()) {

  dropdown.style = `display: flex;`;
  body.style.background = '#2A2C2E';
  hamBtn.setAttribute('class', 'bi bi-x');
  displayNone.forEach((i)=> {
    i.style.display = 'none';
  })

  } else {
    
    dropdown.style = `display: none;`;

    for(i = 0; i < displayNone.length; i++) {
      displayNone[i].style.display = 'flex'
    }
    body.style.background = 'white';
    hamBtn.setAttribute('class', 'bi bi-list');
      hamBtn.style.fontSize = '30px';
  }
})
console.log();