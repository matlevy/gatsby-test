import React from 'react'
import SbEditable from 'storyblok-react'

const Feature = (props) => (
  <SbEditable content={props.blok}>
    <div className="col-4">
        <h1>{props.blok.title}</h1>
        <div>
          {props.blok.content}
        </div>
    </div>
  </SbEditable>
)

export default Feature