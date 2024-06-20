export const qnttWord = (content: string, word: string) => {
	const regex = new RegExp(`\\b${word}\\b`, 'gi');
	const matches = content.match(regex);
	return matches ? matches.length : 0;
};
