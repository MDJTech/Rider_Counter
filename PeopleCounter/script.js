let count = 0;

const countDsiplay = document.getElementById("counter");
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const clearBtn = document.getElementById("clearBtn");


addBtn.onclick = function() {
    count++;
    countDsiplay.textContent = count;
}


subBtn.onclick = function() {
    count--;
    countDsiplay.textContent = count;
}

clearBtn.onclick = function() {
    let count = 0;
    countDsiplay.textContent = count;
}
