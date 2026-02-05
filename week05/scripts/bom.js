const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChaptersList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});


button.addEventListener("click", function () {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.ariaLabel = "Close";
    deleteButton.id = 'close-button';
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });

}

function setChapterList() {
    localStorage.setItem('favchap', JSON.stringify(chaptersArray));
}

function getChaptersList() {
    return JSON.parse(localStorage.getItem('favchap'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}


