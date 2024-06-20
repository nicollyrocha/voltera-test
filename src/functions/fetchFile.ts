import { getWordFromUrl } from './getWordFromUrl';
import { qnttWord } from './qnttWord';

export const fetchFile = async (url: string, word: string) => {
	let fileContent = '';
	let wordCount = 0;
	const response = await fetch(url);
	if (response.ok) {
		fileContent = await response.text();
		console.log('auihdiashd', fileContent);
		wordCount =
			qnttWord(fileContent, decodeURIComponent(getWordFromUrl())) ||
			qnttWord(fileContent, word);
		return {
			fileContent,
			wordCount,
		};
	} else {
		console.error('Erro ao carregar o arquivo');
	}
};

export default fetchFile;
