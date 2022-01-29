window.addEventListener('DOMContentLoaded', () => {
    // get movies and execute
    getMovies()







})



function getMovies() {

    const ul = document.getElementById('movie-list')
    const main = document.getElementById('main')
    ul.innerHTML = ''
    main.innerHTML = ''
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

function returnToMovies() {

    let ul = document.getElementById('mybtn')


    fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => {
            data.forEach(movie => {

            })

        })
    document.addEventListener('click', getMovies)
}