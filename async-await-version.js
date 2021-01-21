export async function getClue(){
    const response = await fetch("https://jservice.xyz/api/random-clue")
    if (response.ok){
        return await response.json()
    } else {
        throw new Error(response.status);
    }
}