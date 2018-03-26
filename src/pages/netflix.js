import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import ImageModal from '../components/ImageModal'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles1 from './about-css-modules.module.css'
import { connect } from 'react-redux'

class NetflixCarousel extends Component {
  
  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.showModal) return false
  }
  render () {
    console.log('rendered inside NetflixCarousel', this.props)
    return (
      <div>
        <div>
          <Carousel onClickItem={this.props.openModal}>
            <div>
              <img imdb='8.6' rottenTomatoes='100%' type='Documentary' format='Series;1 Season;6 Epsiodes;1 Hour'
                title='Wild Wild Country' src='https://occ-0-1340-1339.1.nflxso.net/art/2d457/cd3efb3ff3f8a4137c08fdf29f3d949ab082d457.jpg' />
              <p className='legend'>Wild Wild Country</p>
            </div>
            <div>
              <img imdb='5.7' rottenTomatoes='0%' type='Movie' format='Movie, 1 hr 41 minutes'
                title='Game Over Man' src='https://occ-0-1340-1339.1.nflxso.net/art/c4d0a/64311fdc42553164e0994406bf964ef58afc4d0a.jpg' />
              <p className='legend'>Game Over Man</p>
            </div>
            <div>
              <img imdb='8.4' rottenTomatoes='100%' type='Movie' format='Series;2 Seasons;10 Episodes;45 minutes'
                title='Master of None' src='https://occ-0-1340-1339.1.nflxso.net/art/95c25/1498e9f67b6fb913633e8375c9facb7722b95c25.jpg' />
              <p className='legend'>Master Of None</p>
            </div>
            <div>
              <img imdb='8.9' rottenTomatoes='94%' type='Movie' format='Series;2 Seasons;9 Episodes; 45 minutes'
                title='Stranger Things' src='https://occ-0-1340-1339.1.nflxso.net/art/72a05/1e4c89e701035924086eaa312a2ade1186d72a05.jpg' />
              <p className='legend'>Stranger Things</p>
            </div>
          </Carousel>
        </div>
        <div>
          <ImageModal />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (event, newval) => {
      console.log('event', event, 'newval', newval)
      dispatch({ type: 'OPEN_MODAL', payload: newval.props.children[0].props })
    },
    closeModal: () => dispatch({ type: 'CLOSE_MODAL' })
  }
}
const mapStateToProps = (state) => {
  // console.log('mapStateToProps', state)
  return {
    showModal: state.showModal
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NetflixCarousel)
