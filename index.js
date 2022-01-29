window.addEventListener('DOMContentLoaded', () => {
    // get movies and execute
    getMovies()

    favoriteMovieButton()


})


function getMovies() {

    let ul = document.getElementById('movie-list')

    fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => {
            data.forEach(movie => {
                ul.innerHTML +=
                    `<div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src="${movie.image}">
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">Click here for more information<i class="material-icons right">more_vert</i></span>
                      
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">${movie.title}<i class="material-icons right">close</i></span>
                      <h2>Director: ${movie.director}</h2>
                      <p>Description: ${movie.description}</p>
                    </div>
                  </div>`

            })


        })

}

const linkButtonEvent = () => {
    const movies = document.querySelectorAll('a')
    movies.forEach((movie) => {
        movie.addEventListener('click')
    })
}






function favoriteMovieButton() {
    let text;
    let movieTitle = prompt("Please enter your favorite movie:", "");
    if (movieTitle == null) {
        text = "Oh no! You didn't answer!";
    } else {
        text = "Great choice! That is our favorite too!";
    }
    document.getElementById("demo").innerHTML = text;
}

document.addEventListener('click', function() {
    const elems = document.getElementByClassName('modal');
    const instances = M.Modal.init(elems, options);
})