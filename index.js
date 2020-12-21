let conJoke = document.getElementById("jokeCon")
let btnJoke = document.getElementById("btnJoke")

btnJoke.addEventListener("click", getJoke = () => {
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
        var dataJokesKu = dataJokes
        var getId = dataJokesKu.id
        console.log(dataJokesKu)
        console.log(dataJokesKu.id)
        var createJokesEl = document.createElement('div')
        createJokesEl.className = "content"
        var jokesContent = `
            <div> ${dataJokesKu.content} </div>
            <button class="btnAction" id="like"> ${dataJokesKu.upvotes}</button>
            <button class="btnAction" id="dislike"> ${dataJokesKu.downvotes} </button>
        `
        createJokesEl.innerHTML = jokesContent
        conJoke.append(createJokesEl)
        var btnLike = document.getElementById("like")
        btnLike.addEventListener("click", likeJoke())
    }) //bawah baru
    .then(likeJoke = () => {
         fetch(`https://joke3.p.rapidapi.com/v1/joke/${getId}/upvote`, {
        "method": "POST",
        "headers": {
            "x-rapidapi-key": "b46144c31cmshdc3594cc2a07143p14a8fcjsn77474b4c6d9c",
            "x-rapidapi-host": "joke3.p.rapidapi.com"
            }
        })
        .then(resLike => resLike.json())
        .then(dataLike => {
            console.log(dataLike);
        })
    })
})

// function likeJoke() {
    // fetch(`https://joke3.p.rapidapi.com/v1/joke/${dataJokesKu.id}/upvote`, {
    //     "method": "POST",
    //     "headers": {
    //         "x-rapidapi-key": "b46144c31cmshdc3594cc2a07143p14a8fcjsn77474b4c6d9c",
    //         "x-rapidapi-host": "joke3.p.rapidapi.com"
    //     }
    // })
    // .then(resLike => resLike.json())
    // .then(dataLike => {
    //     console.log(dataLike);
    // })
    // var btnLike = document.getElementById("like")
    //var btnDisLike = document.getElementById("dislike")
// }
// if (btnLike){
//     btnLike.addEventListener("click", likeJoke = () => {
//         fetch(`https://joke3.p.rapidapi.com/v1/joke/${getId}/upvote`, {
//             "method": "POST",
//             "headers": {
//                 "x-rapidapi-key": "b46144c31cmshdc3594cc2a07143p14a8fcjsn77474b4c6d9c",
//                 "x-rapidapi-host": "joke3.p.rapidapi.com"
//             }
//         })
//         .then(resLike => resLike.json())
//         .then(dataLike => {
//             console.log(getUpVotes);
//             document.getElementById("like").innerHTML = getUpVotes
//         })
//     })
//     // btnDisLike.addEventListener("click", likeDisLike())
// }

// var getId = dataJokesKu.id
// var getUpVotes = dataJokesKu.upvotes