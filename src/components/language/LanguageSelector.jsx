import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './language.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('es'); // Default to 'en' for English

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  const handleLanguageChange = (event) => {
    const selectedOption = event.target.value;
    changeLanguage(selectedOption);
  };

  return (
    <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 999 }}>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value='en'>English</option>
        <option value='es'>Español</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
