import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

class PrimeCarousel extends Component {
  render () {
    return (
      <Carousel>
        <div>
          <img src='https://images-na.ssl-images-amazon.com/images/I/F1+gilDF-gS._SL500_PI_PJPrime-Sash-Extra-Large-2017,TopLeft,0,0_AA436_.jpg' />
          <p className='legend'>The Big Sick</p>
        </div>
        <div>
          <img src='https://images-na.ssl-images-amazon.com/images/I/51iR0rnPsGL._PI_PJPrime-Sash-Extra-Large-2017,TopLeft,0,0_AC_US218_.jpg' />
          <p className='legend'>No Body walks in L.A</p>
        </div>
        <div>
          <img src='https://images-na.ssl-images-amazon.com/images/I/51VCem3RroL._PI_PJPrime-Sash-Extra-Large-2017,TopLeft,0,0_AC_US218_.jpg' />
          <p className='legend'>What If</p>
        </div>
      </Carousel>
    )
  }
}

export default PrimeCarousel
