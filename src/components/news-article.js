import React from 'react'
import SbEditable from 'storyblok-react'
import Components from './components.js';

const StoryblokClient = require('storyblok-js-client')

const Feature = (props) => (
  <SbEditable content={props.blok}>
    <div className="col-8">
        <h1>{props.blok.title}</h1>
        <div>{props.blok.caption}</div>
        <div>{JSON.stringify(props.blok.content)}</div>
    </div>
  </SbEditable>
)

export default Feature