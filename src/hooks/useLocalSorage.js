import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) {
	// getting stored value
	const saved = localStorage.getItem(key);
	return saved || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
	const [bWtheme, setBWTheme] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	useEffect(() => {
		// storing input name
		localStorage.setItem(key, JSON.stringify(bWtheme));
	}, [key, bWtheme]);

	return [bWtheme, setBWTheme];
};
