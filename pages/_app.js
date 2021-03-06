import '../styles/global.scss';
import { Layout } from '../components';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
