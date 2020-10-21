import React from 'react'
import SbEditable from 'storyblok-react'
import Components from './components.js';
import { StoryblockFormatter } from '../utils/RichTextFormatter';
import "./layout.css";
import { Helmet } from "react-helmet";


const Feature = ({ blok, children }) => {
	
	return (
		<SbEditable content={blok}>
		<Helmet>
			<meta property="og:image" content={blok.cover_image?.filename || ""} />
			<meta property="og:image:width" content="400" />
			<meta property="og:image:width" content="50" />
		</Helmet>
		<div className="col-8">
			<h1>{blok.title}</h1>
			{/* 

				I am an inline image e.g. cover 
				<img src={blok.cover_image.filename} /> 
				
			*/}
			<div>{blok.caption}</div>
			<content dangerouslySetInnerHTML={{__html: StoryblockFormatter(blok.content)}}></content>
			<div>Tagged: {blok.tags}</div>
		</div>
		</SbEditable>
	)
}

export default Feature