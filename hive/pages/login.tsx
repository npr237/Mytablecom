'use client';
import { AuthService } from '../services/auth.service';
import { useRouter } from 'next/navigation';
import '../styles/globals.css';
import Head from 'next/head';
import '../styles/login.css';
import Image from 'next/image';
import hive from './hive.jpeg';
import Link from 'next/link';

import LoginPage from 'components/Login/loginPage';  

export default function LoginPageWrapper() {
  const authService = new AuthService();
  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (authService.login(username, password)) {
      router.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <LoginPage handleLogin={handleLogin} />
  );
}