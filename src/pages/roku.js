import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
class DemoCarousel extends Component {
  render () {
    return (
      <Carousel>
        <div>
          <img src='https://cigars.roku.com/v1/resize/384x216/https%3A%2F%2Fcigars.roku.com%2Fv1%2Fhttps%253A%252F%252Fedge.roku-vod.top.comcast.net%252F2700879181%252Fstatic%252Fnosec%252FRoku%252F1023%252F444%252FSocialNetwork_EN_1920x1080_DOM.jpg%3Fapp_id%3Dfreetv%26sig%3Dff11b4749b4a7a14f54a8ad75d35b2e023ef752caf523f64c953317e1f537289' />
          <p className='legend'>Social Network</p>
        </div>
        <div>
          <img src='https://cigars.roku.com/v1/resize/384x216/https%3A%2F%2Fcigars.roku.com%2Fv1%2Fhttp%253A%252F%252Fvidmark-mdc.akamaized.net%252Fimages%252F5121028927001%252F201801%252F1641%252F5121028927001_5723420679001_5704857915001-vs.jpg%253FpubId%253D5121028927001%3Fapp_id%3Dfreetv%26sig%3D2e2fb0896128b5a461e623df6dc0f9387064a867f54092529cd0eee90b001970' />
          <p className='legend'>The Hurt Locker</p>
        </div>
        <div>
          <img src='https://cigars.roku.com/v1/resize/384x216/https%3A%2F%2Fcigars.roku.com%2Fv1%2Fhttps%253A%252F%252Fedge.roku-vod.top.comcast.net%252F2700879181%252Fstatic%252Fnosec%252FRoku%252F542%252F565%252FParamount_SweeneyTodd_1920x1080.jpg%3Fapp_id%3Dfreetv%26sig%3De96103de459c63a7a45852e6cda4433fcc105f394fbc4936cd24a37448f8ea59' />
          <p className='legend'>Sweeny Todd</p>
        </div>
      </Carousel>
    )
  }
}

export default DemoCarousel
