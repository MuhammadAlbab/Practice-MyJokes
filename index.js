let conJoke = document.getElementById("jokeCon")
let btnJoke = document.getElementById("btnJoke")

btnJoke.addEventListener("click", getJoke);
function getJoke() {
    conJoke.innerHTML=""
    fetch("https://joke3.p.rapidapi.com/v1/joke", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "b46144c31cmshdc3594cc2a07143p14a8fcjsn77474b4c6d9c",
            "x-rapidapi-host": "joke3.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(dataJokes => {
        var createJokesEl = document.createElement('div')
        createJokesEl.className = "content"
        var jokesContent = `
        <div> ${dataJokes.content} </div>
        <button class="btnAction" id="like"> ${dataJokes.upvotes}</button>
        <button class="btnAction" id="dislike"> ${dataJokes.downvotes} </button>
        `
        createJokesEl.innerHTML = jokesContent
        conJoke.append(createJokesEl)

        //Like Button
        var btnLike = document.querySelector("#like")
        btnLike.addEventListener("click", () => {
            fetch(`https://joke3.p.rapidapi.com/v1/joke/${dataJokes.id}/upvote`, {
                "method": "POST",
                "headers": {
                "x-rapidapi-key": "b46144c31cmshdc3594cc2a07143p14a8fcjsn77474b4c6d9c",
                "x-rapidapi-host": "joke3.p.rapidapi.com"
                }
            })
            .then(resLike => resLike.json())
            .then(dataLike => {
                btnLike.innerHTML = dataLike.upvotes
                getJoke()
            })
        })
        //DisLike Button
        var btnDisLike = document.querySelector("#dislike")
        btnDisLike.addEventListener("click", () => {
            fetch(`https://joke3.p.rapidapi.com/v1/joke/${dataJokes.id}/downvote`, {
                "method": "POST",
                "headers": {
                "x-rapidapi-key": "b46144c31cmshdc3594cc2a07143p14a8fcjsn77474b4c6d9c",
                "x-rapidapi-host": "joke3.p.rapidapi.com"
                }
            })
            .then(resDisLike => resDisLike.json()) 
            .then(dataDisLike => {
                btnDisLike.innerHTML = dataDisLike.downvotes
                getJoke()
            })
        })
    })
}