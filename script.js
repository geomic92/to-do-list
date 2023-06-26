// vieets ham click vao nut add, se lay gia tri cua inputbox.value



const inputbox = document.getElementById('inputbox');
const listitem = document.querySelector('.list-item');


function addTask(){
    if(inputbox.value === ''){
        alert('You mush write something');
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        // add the li bang appendChil;
        listitem.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = '';
    saveData();
};


listitem.onclick = function(e){
   if( e.target.tagName === "LI") {
    e.target.classList.toggle('checked');
    saveData();
   }else if(e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
    saveData();
   }
};

// Viet ham luu localstore

function saveData(){
    localStorage.setItem('data', listitem.innerHTML);
}

function showData(){
 listitem.innerHTML = localStorage.getItem('data')   
}
showData();

