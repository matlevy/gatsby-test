import React from 'react'
import SbEditable from 'storyblok-react'
import Components from './components.js';
import { StoryblockFormatter } from '../utils/RichTextFormatter';



const Feature = (props) => {
	
	return (
		<SbEditable content={props.blok}>
		<div className="col-8">
			<h1>{props.blok.title}</h1>
			<div>{props.blok.caption}</div>
			<content dangerouslySetInnerHTML={{__html: StoryblockFormatter(props.blok.content)}}></content>
		</div>
		</SbEditable>
	)
}

export default Feature