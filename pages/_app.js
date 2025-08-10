import '../styles.css';
import { useEffect, useState } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState('en');
  useEffect(()=>{ 
    const l = (typeof window !== 'undefined' && localStorage.getItem('cafex_lang')) || 'en'; setLang(l);
  },[]);
  const changeLang = (l) => { if(typeof window !== 'undefined'){ setLang(l); localStorage.setItem('cafex_lang', l); location.reload(); } };
  return (<>
    <Head><title>CAFEX Demo</title></Head>
    <header className="header">
      <img src="/logo.svg" alt="CAFEX" className="logo" />
      <div style={{flex:1}} />
      <div className="lang">
        <button onClick={()=>changeLang('fr')}>FR</button>
        <button onClick={()=>changeLang('en')}>EN</button>
        <button onClick={()=>changeLang('ar')}>AR</button>
      </div>
    </header>
    <main className={lang==='ar'?'rtl':''}>
      <Component {...pageProps} />
    </main>
  </>);
}

export default MyApp;