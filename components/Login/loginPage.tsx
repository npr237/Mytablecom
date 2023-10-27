import React, { FormEvent } from 'react'; 
import Link from 'next/link'; 
import Head from 'next/head';
import {getDictionary} from '../../getDictionary';
import {useParams} from '../../app/[lang]/ParamContext';
import {useEffect,useState} from 'react';


interface LoginPageProps {
  handleLogin: (e: FormEvent) => void;
}


 







const LoginPage: React.FC<LoginPageProps> = ({ handleLogin }) => {

const params = useParams();

const [lang, setLang] = useState<any>(null);
const [isLoading, setIsLoading] = useState(true);

 

  


  useEffect(() => {
    console.log('Params lang has changed', params.lang); // To debug
  
    const fetchData = async () => {
      setIsLoading(true);
      const result = await getDictionary(params.lang);
      setLang(result);  
      setIsLoading(false);
    };
  
    fetchData();
  }, [params.lang]);
  

  console.log(lang,"lang  from signIn");
  
  return (
    <div className="main-log">
      <Head>
        <title>{lang ? lang.form.title : 'Loading...'}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className="container" id="container">
        <div className="form-container log-in-container">
          <form onSubmit={handleLogin}>
            <h1>{lang ? lang.form.hive : 'Loading...'}</h1>
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="int"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="int"
            />
            <div style={{ display: 'flex', marginTop: '5px' }}>
              <input type="checkbox" />
              <label htmlFor="vehicle1">{lang ? lang.form.remember : 'Loading...'}</label>
            </div>
            <a href="#">{lang ? lang.form.forgot: 'Loading...'}</a>
            <button style={{ cursor: 'pointer' }}>{lang ? lang.form.signIn : 'Loading...'}</button>
            <Link href="/signup"> 
              <span>{lang ? lang.form.dont: 'Loading...'}</span>{' '}
              <span style={{ fontWeight: 'bold' }}>   {lang ? lang.form.signUp : 'Loading...'}</span>
            </Link> 
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
