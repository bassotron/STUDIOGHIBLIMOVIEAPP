baseURL = 'https://ghibliapi.herokuapp.com/films'


window.addEventListener('DOMContentLoaded', () => {
    // get movies and execute
    getMovies()







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
    fetch(`https://ghibliapi.herokuapp.com 
                `)
        .then(response => response.json())
        .then(data => {
            data => {
                console.log(data)
            }


        })
}

function returnToMovies(event) {
    const button = document.getElementsByClassName("btn")
    button.addEventListener('click', event)
}