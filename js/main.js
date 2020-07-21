$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
})

function getMovies(searchText){
    let pageNum = 1;
    //$("#movies").empty();
    axios.get(`http://www.omdbapi.com?s=${searchText}&apikey=b9f8113e&page=${pageNum}`)
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            //console.log(movies);
            let first = movies[0];

            
            console.log(first);

            for (i=0;i<movies.length;i++){
                let poster = movies[i].Poster;
                if (poster!="N/A"){
                    $(`#col${i}`).append(
                        `
                        
                        <img class="movie" src=${poster} alt="">
                        
                        `
                    );
                }
            }
            /*
            movies.forEach ((movie)=>{
                let poster = movie.Poster;
                if (poster!="N/A"){
                    let width = (screen.width/5)-3.5;
                    
                    $("#movies").append(
                        `
                        
                        <img class="movie" src=${poster} alt="" width=${width}">
                        
                        `
                    );
                    
                    

                }
                

            })
            */
            

            
        })
        .catch((err) => {
            console.log(err);
        })

}