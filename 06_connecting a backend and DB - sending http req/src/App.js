import React, { useEffect, useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMoviesHandelr = useCallback(async () => { 
    //브라우저가 제공한 함수
    // fetch("https://swapi.dev/api/films/").then((res) => {
    //   //응답값을 json객체로 변환하여 return
    //   //이 또한 promise를 반환하므로 then 추가 필요.
    //   return res.json(); 
    // }).then((data)=>{
    //   //json객체로 변형된 데이터를 가져옴
    //   const transformMovies = data.results.map((movieData)=>{
    //     return {
    //       id          : movieData.episode_id,
    //       title       : movieData.title,
    //       openingText : movieData.opening_crawl,
    //       release     : movieData.release_date
    //     }
    //   })

    //   setMovies(transformMovies)
    // })

    //then 체이닝 대체
    setIsLoading(true)
    setError(null)

    try {
      //const response = await fetch("https://swapi.dev/api/films")
      const response = await fetch("https://react-http-42cd7-default-rtdb.firebaseio.com/movie.json") //firebase 이용

      if (!response.ok) {
        //응답값에 'ok', 'status' 필드로 정상 거래 여부 판단함
        throw new Error('Somethin went wrong!')

      }

      const data = await response.json()

      const loadedMovies = []
      
      for (const key in data) {
        loadedMovies.push({
          id:key, 
          title: data[key].title,
          openingText:data[key].openingText,
          release: data[key].releaseDate
        })
      }

  
      //json객체로 변형된 데이터를 가져옴
      // const transformMovies = loadedMovies.map((movieData) => {
      //   console.log(movieData)
      //   return {
      //       id          : movieData.id,
      //       title       : movieData.title,
      //       openingText : movieData.openingText,
      //       release     : movieData.releaseDate
      //   }
      // })
  
      setMovies(loadedMovies)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }, [])


  useEffect(()=>{
    fetchMoviesHandelr()
  }, [fetchMoviesHandelr])

  async function addMovieHandler(movie) {
    const response = await fetch("https://react-http-42cd7-default-rtdb.firebaseio.com/movie.json", {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type' : 'application/json'
      }
    })

    const data = await response.json()
    console.log(data)

    fetchMoviesHandelr()
  }


  let content = <p>Found no movies.</p>

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchMoviesHandelr}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
