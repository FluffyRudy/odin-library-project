const dialog         = document.querySelector('dialog');
const menuButtons    = document.querySelector("menu");
const addButton      = document.querySelector('#add-book');
const cancelButton   = document.getElementById("cancel");
const confirmButton  = document.getElementById("confirm");
const libContainer   = document.querySelector(".book-library");
const inputField     = document.querySelectorAll(".inputs");
const myLibrary      = [];

confirmButton.disabled = true;

function Book(author, title, pagenum, status) {
    this.author  = author;
    this.title   = title;
    this.pagenum = pagenum;
    this.status  = status;
}

function addBookCard() {
    const card    = document.createElement('div');
    card.classList.add('card');
    const current = myLibrary[myLibrary.length-1];
    
    for (let elem in current) {
        if (elem != "status") {
            const info = document.createElement('button');
            info.textContent  = current[elem];
            info.style.cursor = 'text';
            card.appendChild(info);
        } else {
            const readStat  = document.createElement('button');
            readStat.setAttribute('id', 'statusbtn');
            readStat.style.backgroundColor = current[elem] ? 'lime' : 'tomato';
            readStat.textContent  = current[elem] ? "Read" : "Not Read"; 
            card.appendChild(readStat);
        }
    }

    libContainer.appendChild(card);
}

function addBookToLibrary() {
    const inputData   = [];
    const statusInput = document.getElementById('status').checked;
    for (let elem of inputField) {
        inputData.push(elem.value);
    }
    myLibrary.push(new Book(...inputData, statusInput));
    addBookCard()
}

addButton.addEventListener('click', (e) => {
    dialog.showModal();
})

cancelButton.addEventListener('click', (e) => {
    dialog.close();
    e.preventDefault();
})

confirmButton.addEventListener('click', (e) => {
    dialog.close();
    e.preventDefault();
    addBookToLibrary();
})

inputField.forEach((elem) => {
    elem.addEventListener('input', (e) => {
        const allFilled = Array.from(inputField).every((input) => {
            return input.value.length > 0;
        });
        confirmButton.disabled = !allFilled; 
    })
})

document.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.id == 'statusbtn') {
        if (e.target.style.backgroundColor === "lime") {
            e.target.style.backgroundColor = "tomato";
            e.target.textContent = "Not Read";
        } else {
            e.target.style.backgroundColor = "lime";
            e.target.textContent = "read";
        }
    }
})