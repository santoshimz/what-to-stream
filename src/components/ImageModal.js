import React from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import styles from '../pages/about-css-modules.module.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    height: '500px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

class ImageModal extends React.Component {
  render () {
    const { closeModal, showModal, metadata } = this.props
    if (metadata) {
      return (
        <div>
          <Modal
            isOpen={showModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel='Details'
          >
            <span className={styles.close} onClick={closeModal} class='close'>&times;</span>
            <div>
              <b>{metadata.title}</b><br /><br />
              <img style={{'float': 'top'}} src={metadata.src} /> <br />
              <b>IMDB</b> {metadata.imdb} <br />
              <b>Rotten Tomatoes</b> {metadata.rottenTomatoes} <br />
              <b>Type</b> {metadata.type} <br />
              <b>Format</b> {metadata.format} <br />
            </div>
          </Modal>
        </div>
      )
    } else return null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch({ type: 'OPEN_MODAL' }),
    closeModal: () => dispatch({ type: 'CLOSE_MODAL' })
  }
}
const mapStateToProps = (state) => {
  return {
    showModal: state.showModal,
    metadata: state.metadata
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ImageModal)
