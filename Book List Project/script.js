

const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');

const booklist = document.getElementById('book-list');
const button = document.querySelector('.btn');

button.addEventListener("click", function(e) {
    e.preventDefault();

    if (title.value === "" && author.value === "" && year.value === "")
    {
        alert("fill the form");
    }
    else{
        const newRow = document.createElement("section");

        //creating new title 
        const newTitle = document.createElement("div");
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        //creating new author
        const newAuthor = document.createElement("div");
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        //creating new year
        const newYear = document.createElement("div");
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        booklist.appendChild(newRow);
    }
})