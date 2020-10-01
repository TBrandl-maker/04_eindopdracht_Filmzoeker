const ul = document.getElementById('movies-in-general')
const radioButtons = document.querySelectorAll('input[name=film-filter]');
const searchField = document.getElementById('Search-Field')

console.log(searchField)
searchField.addEventListener('keyup', (e) => {
    const searchBar = e.target.value.toLowerCase();
    let filteredMovies = movies.filter(movie => {
        return (movie.Title.toLowerCase().includes(searchBar));
    });
    ul.innerHTML = "";
    addMoviestoDom(filteredMovies);
});

const imdbUrl = (imdbID) => {
    return "https://www.imdb.com/title/" + imdbID
}

const addMoviestoDom = (movies) => {
    let movieList = movies.map(function (item) {
        const li = document.createElement('li');
        li.innerHTML = '<a href="' + imdbUrl(item.imdbID) + '"><img src="' + item.Poster + '" /></a>'
        return li;
    });
    movieList.forEach(element => ul.appendChild(element));

}
addMoviestoDom(movies);

const filterMovies = (wordInMovieTitle) => {
    ul.innerHTML = "";
    let filteredMovies = movies.filter(movie => movie.Title.includes(wordInMovieTitle))
    addMoviestoDom(filteredMovies);
}

const filterLatestMovies = () => {
    ul.innerHTML = "";
    let filteredMovies = movies.filter(movie => movie.Year >= "2014")
    addMoviestoDom(filteredMovies);
}

const handleOnChangeEvent = (event) => {
    switch (event.target.value) {
        case 'nieuwste-films':
            filterLatestMovies()
            break;
        case 'avenger-films':
            filterMovies("Avengers")
            break;
        case 'x-men-films':
            filterMovies("X-Men")
            break;
        case 'princess-films':
            filterMovies("Princess")
            break;
        case 'batman-films':
            filterMovies("Batman")
            break;
    }
}

radioButtons.forEach(button => button.addEventListener('change', (event) => {
    handleOnChangeEvent(event)
}));

