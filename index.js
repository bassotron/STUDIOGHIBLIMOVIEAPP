baseURL = 'https://ghibliapi.herokuapp.com/films'


window.addEventListener('DOMContentLoaded', () => {
    // get movies and execute
    document.getElementById('myButton').addEventListener('click', getMovies)
    getMovies();

})


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
    console.log(event.target.dataset.id)
    const main = document.getElementById('main')
    const ul = document.getElementById('movie-list')
    ul.innerHTML = ''
    fetch('https://ghibliapi.herokuapp.com/films/' + `${event.target.dataset.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            main.innerHTML = `<h1>${data.title}</h1><br>
                 <img src =${data.image} alt= ${data.title} width="500 height="600"> <br>
                 <h3>DESCRIPTION</h3><br>
                 <p> ${data.description} </p><br>
                  <h4>DIRECTOR: ${data.director} </h4>`
        })
}

function returnToMovies(event) {
    const button = document.getElementsById("btn")
    button.addEventListener('click', event)
}