import { getClue as getClueFromPromise } from "./promise-version.js";

let question = document.getElementById("question");
let answer = document.getElementById("answer");
let value = document.getElementById("value");
let categoryTitle = document.getElementById("category-title");
let invalidCount = document.getElementById("invalid-count");

let button = document.getElementById("use-promise");
button.addEventListener("click", event => {
    getClueFromPromise()
        .then(clue => {
            question.innerHTML = clue.question;
            answer.innerHTML = clue.answer;
            value.innerHTML = clue.value;
            categoryTitle.innerHTML = clue.category.title;
            if (clue.invalid_count && clue.invalid_count > 0) invalidCount.innerHTML = "invalid";
            else invalidCount.innerHTML = "valid";
        });
});