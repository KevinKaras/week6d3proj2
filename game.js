import { getClue as getClueFromPromise } from "./promise-version.js";
import { getClue as getClueFromAsync } from "./async-await-version.js"
import { getClue as getClueFromCB } from "./callback-version.js"

function setHTML(clue){
    let question = document.getElementById("question");
    let answer = document.getElementById("answer");
    let value = document.getElementById("value");
    let categoryTitle = document.getElementById("category-title");
    let invalidCount = document.getElementById("invalid-count");

    question.innerHTML = clue.question;
    answer.innerHTML = clue.answer;
    value.innerHTML = clue.value;
    categoryTitle.innerHTML = clue.category.title;
    if (clue.invalid_count && clue.invalid_count > 0) invalidCount.innerHTML = "invalid";
    else invalidCount.innerHTML = "valid";
}

let button = document.getElementById("use-promise");

button.addEventListener("click", event => {
    getClueFromPromise()
        .then((clue) => {
            setHTML(clue)
        })
        .catch((err)=>{
            console.log(err);
        })
});

document.getElementById("use-async-await")
    .addEventListener("click", async event => {
        try{ 
            let clue = await getClueFromAsync()
            setHTML(clue)
        } catch(error) {
            console.log(error);
        }
    })


document.getElementById("use-callback")
    .addEventListener("click", event =>{
        getClueFromCB((err, clue) => {
            if (err !== null) {
                console.error(err)
            } else {
                setHTML(clue)
            }
        })
    })