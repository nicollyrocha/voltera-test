export const getWordFromUrl = () => {
	const url = new URL(window.location.toString());
	return decodeURIComponent(url.search.substring(3));
};

export default getWordFromUrl;
