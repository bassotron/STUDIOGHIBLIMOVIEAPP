window.addEventListener('DOMContentLoaded', () => {
    // get movies and execute
    getMovies()





})

function getMovies() {

    let ul = document.getElementById('movie-list')

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


}

function getDirector() {

    let ul = document.getElementById('myDropdown')

    fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => {
            data.forEach(movie => {
                ul.innerHTML += `
                 <li><a href= "#" data-id=${movie.id}>${movie.director}</li>`
            })
            clickDropdownEvent()
        })

}