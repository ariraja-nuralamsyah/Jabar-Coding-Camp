export const MoviesComponent = {
    data(){
        return {
            domain: 'https://api.themoviedb.org/3/movie',
            domainImage: 'https://image.tmdb.org/t/p/w500',
            apiKey: '9f85f315309fd8607469257a6caf1fd2',
            movies: []
        }
    },
    template: `
        <table border="1">
        <tr v-for="(movie,index) in movies">
            <td style="text-align: center;">
            <img width=100 :src="movie.poster_path ? domainImage + movie.poster_path : 'https://dummyimage.com/600x400/bababa/000&text=Null'" alt="Image not found">
            </td>
            <td width="50%">
                <b>{{ movie.title }}</b><br>
                <p>Sinopsis:</p>
                {{ movie.overview }}
                
            </td>
            <td style="text-align: center;">
                <b>Rating : </b> {{ movie.vote_average}}
            </td>
        </tr>
        </table>
    `, 
    mounted(){
        const config = {
            method : "get",
            url : `${this.domain}/popular?api_key=${this.apiKey}`
        }
        axios(config)
        .then((response) => {
            this.movies = response.data.results
            console.log(this.movies)
        })
    }
    
}