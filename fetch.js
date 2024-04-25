const searchBtn = document.querySelector('#search_btn')
const movie = document.querySelector('.movie')
const searchButton = document.querySelector('.search_button')


searchButton.addEventListener('click',()=>{
    const inpValue = searchBtn.value.trim()
    console.log(searchBtn.value);
    console.log(searchBtn.value.trim());
    // trim inputda de olan boslugu itizdirir
    // const apiKey = "f34d7d53"
    const apiUrl = "http://www.omdbapi.com/?apikey=f34d7d53" + "&t=" + inpValue

    fetch(apiUrl)
    .then((resp) => resp.json())
    .then((data) =>{
        if(data.Response == "True"){
            console.log(data);
            renderUI(data)
        }else{
            alert('Bele bir film yoxdur')
        }
    })
})

function renderUI(film){
    movie.innerHTML=''
    let btnsMovies = ''
    let janrs = film.Genre.split(',')
    for (let i = 0; i < janrs.length; i++) {
        btnsMovies+=`<button>${janrs[i]}</button>`
    }
    movie.innerHTML=`
    <div class="movie__description">
    <div class="movie__left">
        <img src="${film.Poster}" alt=""
            width="200px" height="300px">
    </div>
    <div class="right_movie">
        <h2>${film.Title}</h2>
        <div class="reyting">
            <i class="fa-solid fa-star"></i>
            <p>${film.imdbRating}</p>
        </div>
        <div class="btn_movie">
            ${btnsMovies}
        </div>
    </div>
</div>
<div class="alt_hisse">
    <h4>Plot</h4>
    <p>${film.Plot}</p>
    <h4>Cast</h4>
    <p>${film.Actors}</p>
</div>
    `
}

