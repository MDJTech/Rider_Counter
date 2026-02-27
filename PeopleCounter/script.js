let count = 0;

const countDisplay = document.getElementById("counter");
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const clearBtn = document.getElementById("clearBtn");


addBtn.addEventListener('click', function(){
    count++;
    countDisplay.textContent = count;
})


subBtn.addEventListener('click', function(){
    count--;
    countDsiplay.textContent = count;
})

clearBtn.addEventListener('click', function(){
    count = 0; 
    countDisplay.textContent = count;
})

if(countDisplay < 0) {
    count = 0;
    countDisplay.textContent = count;
}

