"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var OMDB_API_KEY = '7dac3bec';
var app = Vue.createApp({
  data: function data() {
    return {
      search: 'spider man',
      result: '',
      detail: '',
      // result:{"Search":[{"Title":"Spider-Man","Year":"2002","imdbID":"tt0145487","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"},{"Title":"The Amazing Spider-Man","Year":"2012","imdbID":"tt0948470","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg"},{"Title":"Spider-Man 2","Year":"2004","imdbID":"tt0316654","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Spider-Man: Homecoming","Year":"2017","imdbID":"tt2250912","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg"},{"Title":"Spider-Man 3","Year":"2007","imdbID":"tt0413300","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"},{"Title":"The Amazing Spider-Man 2","Year":"2014","imdbID":"tt1872181","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg"},{"Title":"Spider-Man: Into the Spider-Verse","Year":"2018","imdbID":"tt4633694","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg"},{"Title":"Spider-Man: Far from Home","Year":"2019","imdbID":"tt6320628","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"},{"Title":"Spider-Man: The Animated Series","Year":"1994–1998","imdbID":"tt0112175","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMmQ1NzBlYmItNmZkZi00OTZkLTg5YTEtNTI5YjczZjk3Yjc1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Spider-Man","Year":"2018","imdbID":"tt5807780","Type":"game","Poster":"https://m.media-amazon.com/images/M/MV5BNjYwYTJjMjQtNTM3OC00YmEwLTg5YzktY2FlNzUwMmNiYWI2XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_SX300.jpg"}],"totalResults":"255","Response":"True"},
      // detail:{"Title":"Spider-Man","Year":"2002","Rated":"PG-13","Released":"03 May 2002","Runtime":"121 min","Genre":"Action, Adventure, Sci-Fi","Director":"Sam Raimi","Writer":"Stan Lee (Marvel comic book), Steve Ditko (Marvel comic book), David Koepp (screenplay)","Actors":"Tobey Maguire, Willem Dafoe, Kirsten Dunst, James Franco","Plot":"Based on Marvel Comics' superhero character, this is a story of Peter Parker who is a nerdy high-schooler. He was orphaned as a child, bullied by jocks, and can't confess his crush for his stunning neighborhood girl Mary Jane Watson. To say his life is \"miserable\" is an understatement. But one day while on an excursion to a laboratory a runaway radioactive spider bites him... and his life changes in a way no one could have imagined. Peter acquires a muscle-bound physique, clear vision, ability to cling to surfaces and crawl over walls, shooting webs from his wrist ... but the fun isn't going to last. An eccentric millionaire Norman Osborn administers a performance enhancing drug on himself and his maniacal alter ego Green Goblin emerges. Now Peter Parker has to become Spider-Man and take Green Goblin to the task... or else Goblin will kill him. They come face to face and the war begins in which only one of them will survive at the end.","Language":"English","Country":"USA","Awards":"Nominated for 2 Oscars. Another 16 wins & 61 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"73/100"}],"Metascore":"73","imdbRating":"7.3","imdbVotes":"699,148","imdbID":"tt0145487","Type":"movie","DVD":"25 Apr 2013","BoxOffice":"$407,022,860","Production":"Marvel Films, Laura Ziskin Productions","Website":"N/A","Response":"True"},
      showModal: false,
      type: '',
      year: ''
    };
  },
  methods: {
    serchMovie: function serchMovie(e) {
      var _this = this;

      e.preventDefault();

      if (this.search !== '') {
        axios.get('http://www.omdbapi.com/?apikey=' + OMDB_API_KEY + '&s=' + this.search + '&type=' + this.type + '&y=' + this.year).then(function (resp) {
          _this.result = resp.data;
        });
      } else {
        console.warn('Enter Search Request');
      }
    },
    details: function details(imdbID) {
      var _this2 = this;

      axios.get('http://www.omdbapi.com/?apikey=' + OMDB_API_KEY + '&i=' + imdbID + '&plot=full').then(function (resp) {
        _this2.detail = resp.data;
        _this2.showModal = true;
      }); // this.showModal = true;
    }
  }
});
app.component('movie_ratings', {
  props: ['ratings'],
  data: function data() {
    return {
      ratings_list: [] // imdb_width:0,
      // rt_width:0,
      // mc_width:0

    };
  },
  watch: {
    ratings: function ratings(new_val) {
      this.ratings_list = _typeof(new_val) === "object" ? new_val : [];

      for (var i = 0; i < this.ratings_list.length; i++) {
        switch (this.ratings_list[i].Source) {
          case 'Internet Movie Database':
            this.ratings_list[i].Width = 100 - parseFloat(this.ratings_list[i].Value.split('/')[0]) * 10;
            break;

          case 'Rotten Tomatoes':
            this.ratings_list[i].Width = 100 - parseInt(this.ratings_list[i].Value);
            break;

          case 'Metacritic':
            this.ratings_list[i].Width = 100 - parseInt(this.ratings_list[i].Value.split('/')[0]);
            break;
        }
      }
    }
  },
  // mounted(){
  //     if(this.ratings_list.length!==0){
  //     }
  // this.imdb_width = 100 - parseFloat(this.ratings[0].Value.split('/')[0])*10;
  // this.rt_width=100-parseInt(this.ratings[1].Value);
  // this.mc_width = 100 - parseInt(this.ratings[2].Value.split('/')[0]);
  // },
  template: "\n    <div class=\"rating_wrap\">\n        <div class=\"rating_item\" v-for=\"rating in ratings_list\" :key=\"rating.Source\">\n            <div class=\"row\">\n                <div class=\"col-8\">\n                    {{rating.Source}}\n                </div>\n                <div class=\"col-4 text-end\">\n                    {{rating.Value}}\n                </div>\n            </div>\n            <div class=\"rating_scale\">\n                <span :style=\"'width: '+rating.Width+'%'\"></span>\n            </div>\n        </div>\n    </div>\n    "
});
app.mount("#app");