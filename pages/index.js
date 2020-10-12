import React from 'react';
import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Intro from '../components/intro'
import { CMS_NAME } from '../lib/constants'



export default function Index() {
  
  return (

  <>
<Layout>
        <Head>
          <title>Next.js Blog Example with { CMS_NAME } </title>
        </Head>
        <Container>
          <Intro />
        
         
        </Container>
      </Layout>
    </>
);


}