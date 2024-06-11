import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 999 }}>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('es')}>ES</button>
    </div>
  );
};

export default LanguageSelector;
