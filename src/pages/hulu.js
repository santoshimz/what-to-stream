import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

class HuluCarousel extends Component {
  render () {
    return (
      <Carousel>
        <div>
          <img src='https://a248.e.akamai.net/ib.huluim.com/show/16937?size=220x124&region=us' />
          <p className='legend'>Broad City</p>
        </div>
        <div>
          <img src='https://a248.e.akamai.net/ib.huluim.com/show/23170?size=220x124&region=us' />
          <p className='legend'>Casual</p>
        </div>
        <div>
          <img src='https://a248.e.akamai.net/ib.huluim.com/show/28927?size=220x124&region=us' />
          <p className='legend'>The Handmaids tale</p>
        </div>
      </Carousel>
    )
  }
}

export default HuluCarousel
