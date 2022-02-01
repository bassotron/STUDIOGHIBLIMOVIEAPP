window.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM FULLY LOADED")
        // get movies on the page

    sayHello()
    getMovies()


    // event listener for return to movies button




})


function fetchMovies() {
    fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => {
            return data


        })
}

function getMovies() {

    const ul = document.getElementById('movie-list')


    fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => {
            data.forEach(movie => {


                ul.innerHTML += `
                
                <li><a href= "#" data-id=${movie.id}>${movie.title}</li>`
            })
            clickLinkEvent()
        })

}


const clickLinkEvent = () => {
    const movies = document.querySelectorAll('a')
    movies.forEach((movie) => {
        movie.addEventListener('click', showMovieInfo)
    })
}


const showMovieInfo = (event) => {

    const main = document.getElementById('main')
    const ul = document.getElementById('movie-list')
    ul.innerHTML = ''
    fetch('https://ghibliapi.herokuapp.com/films/' + `${event.target.dataset.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            main.innerHTML = `<h1>${data.title}</h1><br>
            <h2>${data.original_title}</h2><br>
                 <img src =${data.image} alt= ${data.title} width="500 height="600"> <br>
                 <h3>DESCRIPTION</h3><br>
                 <p> ${data.description} </p><br>
                  <h4>DIRECTOR: ${data.director} </h4><br>
                  <h5>RELEASE DATE:${data.release_date}</h5><br> 
                  <h5>ROTTEN TOMATOES SCORE:${data.rt_score}</h5>


                  `
        })


}

function returnToMovies() {

    window.location.reload(true)
}

document.getElementById('myButton').addEventListener('click', returnToMovies)

function sayHello() {
    let person = prompt("Hello! What is your name?")
    if (person != null) {
        document.getElementById('greeting').innerHTML =

            "Hello  " + person +
            "!   WELCOME TO THE STUDIO GHIBLI MOVIE DATABASE"
    }

}