import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )
  console.log(actionMoviesList)

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-img"
      />

      <div className="action-container">
        <h1>Action Movies</h1>
        <MoviesSlider list={actionMoviesList} />
      </div>

      <div className="action-container">
        <h1>Comedy Movies</h1>
        <MoviesSlider list={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
