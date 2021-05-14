import React from 'react';
import './SelectLaguage.css';
import { AiOutlineArrowUp } from 'react-icons/ai';
import SingleLanguage from './SingleLanguage';
import { dataLocalStorage } from './dataLocalStorage';

import { ReactComponent as Ukflag } from '../../../assets/img/Footer/unitedStateFlag.svg';
import { ReactComponent as Germanyflag } from '../../../assets/img/Footer/germanyFlag.svg';
import { ReactComponent as Franceflag } from '../../../assets/img/Footer/france.svg';
import { ReactComponent as Albaniaflag } from '../../../assets/img/Footer/albania.svg';
import { ReactComponent as Spainflag } from '../../../assets/img/Footer/spain.svg';
import { ReactComponent as Italyflag } from '../../../assets/img/Footer/italy.svg';
import { ReactComponent as Chinaflag } from '../../../assets/img/Footer/china.svg';

import { useDispatch, useSelector } from 'react-redux';
import { chooseLanguage } from '../../../store/actions/chooseLanguageAction';

function SelectLanguage() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const languages = [
    { value: 'en-GB', lang: 'EN', flag: Ukflag },
    { value: 'sq-AL', lang: 'AL', flag: Albaniaflag },
    { value: 'de-DE', lang: 'DE', flag: Germanyflag },
    { value: 'fr-FR', lang: 'FR', flag: Franceflag },
    { value: 'it-IT', lang: 'IT', flag: Italyflag },
    { value: 'es-ES', lang: 'ES', flag: Spainflag },
    { value: 'zh-CN', lang: 'CH', flag: Chinaflag },
  ];

  const handleLanguageChange = (language, locale) => {
    dispatch(chooseLanguage(locale));
    dataLocalStorage.setLanguage(language);
    dataLocalStorage.setLocale(locale);
  };
  let Flag = null;
  switch (dataLocalStorage.getLocale()) {
    case 'en-GB':
      Flag = Ukflag;
      break;
    case 'sq-AL':
      Flag = Albaniaflag;
      break;
    case 'de-DE':
      Flag = Germanyflag;
      break;
    case 'fr-FR':
      Flag = Franceflag;
      break;
    case 'it-IT':
      Flag = Italyflag;
      break;
    case 'es-ES':
      Flag = Spainflag;
      break;
    case 'zh-CN':
      Flag = Chinaflag;
      break;
    default:
      Flag = Ukflag;
  }

  return (
    <div className='select-language'>
      {/* <img src={flag} alt='selected flag' className='smallFlag' /> */}
      <Flag className='smallFlag' />
      {dataLocalStorage.getLanguage() || 'EN'}
      <AiOutlineArrowUp className='arrow' styles='up' />

      <div className='dropdown'>
        {languages.map((thisLang, i) => {
          return (
            <SingleLanguage
              value={thisLang.value}
              key={i}
              handleLanguageChange={() =>
                handleLanguageChange(thisLang.lang, thisLang.value)
              }
              styles={thisLang.value === language && 'selected'}
              language={thisLang.lang}
              Flag={thisLang.flag}
            ></SingleLanguage>
          );
        })}
      </div>
    </div>
  );
}
export default SelectLanguage;
