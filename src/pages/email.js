import React, { Component } from 'react'
import { render } from 'react-dom'
import invoice from '../data/invoice.json'

import EmailEditor from 'react-email-editor'

class App extends Component {
  render() {
    return <div>
      <h1>react-email-editor Demo</h1>

      <div>
        <button onClick={this.exportHtml}>Export HTML</button>
      </div>

      <div>
        <button onClick={this.onLoad}>Load HTML</button>
      </div>

      <EmailEditor
        ref={editor => this.editor = editor}
      />
    </div>
  }

  exportHtml = () => {
    this.editor.exportHtml(data => {
      const { design, html } = data
      console.log('exportHtml', html)
      console.log('exportJson', JSON.stringify(design))
    })
  }

  onLoad = () => {
    // this.editor.addEventListener('onDesignLoad', this.onDesignLoad)
    this.editor.loadDesign(invoice)
  }
}

export default App