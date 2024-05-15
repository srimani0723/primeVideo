import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {data} = props
  const {thumbnailUrl, videoUrl} = data
  return (
    <>
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <div className="thumbnail-card">
              <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
            </div>
          }
          className="popup"
        >
          {close => (
            <div className="popup-box">
              <div className="btn-box">
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                  data-testid="closeButton"
                >
                  <IoMdClose
                    aria-label="close"
                    className="trigger-button-img"
                  />
                </button>
              </div>
              <div className="responsive-container">
                <ReactPlayer url={videoUrl} className="video" />
              </div>
            </div>
          )}
        </Popup>
      </div>
    </>
  )
}

export default MovieItem
