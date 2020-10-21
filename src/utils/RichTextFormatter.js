import Storyblock from "storyblok-js-client";
import { graphql, useStaticQuery } from "gatsby";

let StoryBlockInstance = new Storyblock({
	accessToken: "JDlvth1ny8Cm2IM78rCsYwtt"
});

export const StoryblockFormatter = (richTextContent) => {
	return StoryBlockInstance.richTextResolver.render(richTextContent);
};