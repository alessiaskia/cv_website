let selectedLanguage = 'en';

// eslint-disable-next-line import/prefer-default-export
export const getSelectedLanguage = () => selectedLanguage;

export const setSelectedLanguage = (newLanguage) => {
  selectedLanguage = newLanguage;
};
