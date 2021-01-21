export function getClue(cb){
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", event =>{
        if (xhr.readyState !== XMLHttpRequest.DONE) return
        if (xhr.status !== 200) cb(xhr.status)
        const parsed = JSON.parse(xhr.responseText)
        cb(null, parsed)
        
    })
    xhr.open("GET", "https://jservice.xyz/api/random-clue")
    xhr.send()
}