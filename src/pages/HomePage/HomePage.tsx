import React, { useContext } from 'react';
import { ComponentExample } from './components';
import { ComponentHeader } from '../../components';
import { translations } from '../../assets/lang/lang';
import { ThemeContext } from '../../common/ThemeProvider';
import { SvgIcons } from '../../assets/icons';

export function HomePage() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext); 
  return (
    <div className={`${
      isDarkMode ? 'bg-dark text-dark' : 'bg-white text-black'
     } w-full h-screen flex flex-cols text-center`}>
      <SvgIcons.CrossIcon />
      <div>{translations.HELLO_TEXT}</div>
      <ComponentExample />
      <ComponentHeader />
      <div className="grid-cols-1 gap-3 w-1/2 mx-auto h-1/2">
        <div className="text-4xl pt-10">HELLO WORLD</div>
        <div className="block">
          <button onClick={toggleTheme} className="bg-slate-100 shadow-md px-4 py-3">
            {' '}
            Switch Theme
          </button>
        </div>
      </div>
    </div>
  );
}
