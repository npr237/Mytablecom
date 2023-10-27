'use client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import React from 'react';
import Head from 'next/head';
import 'hive/styles/signup.css';
//import Image from 'next/image';
// import hive from '../../hive/pages/hive';
import Link from 'next/link';
import {getDictionary} from '../../../getDictionary';
import {useParams} from '../ParamContext';
import {useEffect} from 'react';


export default  function  SignUpPage() {
  console.log('SignUpPage is rendering');
  const params = useParams();
  
   // console.log("params from signup",params);
  

  //   const authService = new AuthService();
  // const router = useRouter();
  const [lang, setLang] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [img, setImg] = useState('hive.jpeg');

    // const handleLogin = (e: any) => {
    //   e.preventDefault();
    //   const username = e.target.username.value;
    //   const password = e.target.password.value;

    //   if (authService.login(username, password)) {
    //     router.push('/dashboard');
    //   } else {
    //     alert('Invalid credentials');
    //   }
    // };

    const getTranslation = (key: string, lang: any) => {
      const keys = key.split('.');
      let value = lang;
      
      for (const k of keys) {
        value = value[k];
        if (!value) return key; // Fallback to key if not found
      }
    
      return value;
    }



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


  console.log(lang,"lang  from signup");

  return (
    isLoading ? <p>Loading...</p> : 
    <div className="main-log">
      
      <Head>
        <title>{getTranslation('form.signUp', lang) || 'Loading...'}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <div className="container" id="container">
        <div className="form-container log-in-container">
          <form>
            <h1>{getTranslation('form.signUp', lang) || 'Loading...'}</h1>

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
            <input
              type="email"
              placeholder="Email"
              name="mail"
              className="int"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              name="mob"
              className="int"
            />

            <button style={{ cursor: 'pointer' }}>{getTranslation('form.signUp', lang) || 'Loading...'}</button>

            <Link href="/">
              <span>{getTranslation('form.title', lang)}</span>{' '}
              <span style={{ fontWeight: 'bold' }}>{getTranslation('form.signUp', lang) || 'Loading...'}</span>
            </Link>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              {/* <Image
                src={img}
                width={500}
                height={500}
                alt="Picture of the author"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}