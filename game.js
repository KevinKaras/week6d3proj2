import { getClue as getClueFromPromise } from "./promise-version.js";
import { getClue as getClueFromAsync } from "./async-await-version.js"
import { getClue as getClueFromCB } from "./callback-version.js"

let playerScore = 0;

let response = document.getElementById("player-response");
let checkResponse = document.getElementById("check-response");
let score = document.getElementById("score");
score.innerHTML = playerScore;

let question = document.getElementById("question");
let answer = document.getElementById("answer");
let value = document.getElementById("value");
let categoryTitle = document.getElementById("category-title");
let invalidCount = document.getElementById("invalid-count");


function setHTML(clue) {
    question.innerHTML = clue.question;
    answer.innerHTML = clue.answer;
    value.innerHTML = clue.value;
    categoryTitle.innerHTML = clue.category.title;
    if (clue.invalid_count && clue.invalid_count > 0) invalidCount.innerHTML = "invalid";
    else invalidCount.innerHTML = "valid";
}

document.getElementById("use-promise")
    .addEventListener("click", event => {
        getClueFromPromise()
            .then((clue) => {
                setHTML(clue)
            })
            .catch(err => console.log(err));
        response.value = "";
        answer.classList.add("is-hidden");
        checkResponse.classList.remove("is-hidden");
        checkResponse.classList.add("pure-button");
    });

document.getElementById("use-async-await")
    .addEventListener("click", async event => {
        try {
            let clue = await getClueFromAsync();
            setHTML(clue);
        } catch (error) {
            console.log(error);
        }
        response.value = "";
        answer.classList.add("is-hidden");
        checkResponse.classList.remove("is-hidden");
        checkResponse.classList.add("pure-button");
    });

document.getElementById("use-callback")
    .addEventListener("click", event => {
        getClueFromCB((err, clue) => {
            if (err !== null) console.error(err);
            else setHTML(clue);
        });
        response.value = "";
        answer.classList.add("is-hidden");
        checkResponse.classList.remove("is-hidden");
        checkResponse.classList.add("pure-button");
    });


checkResponse.addEventListener("click", event => {
    answer.classList.remove("is-hidden");
    checkResponse.classList.remove("pure-button");
    checkResponse.classList.add("is-hidden");
    if (response.value.trim() === answer.innerText.trim()) {
        playerScore = playerScore + Number(value.innerText);
        score.innerHTML = playerScore;
    } else {
        playerScore = playerScore - Number(value.innerText);
        score.innerHTML = playerScore;
    }
});

document.addEventListener("DOMContentLoaded", event => {
    checkResponse.classList.remove("pure-button");
    checkResponse.classList.add("is-hidden");
});