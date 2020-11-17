import '../styles/index.css';
import '../styles/scss/style.scss';
import '../styles/assets/main.css'
import '../styles/assets/animate.css'
import '../styles/assets/responsive.css'
import "../styles/assets/themify-icon/themify-icons.css";
import "../styles/assets/simple-line-icon/simple-line-icons.css";
import "../styles/assets/font-awesome/css/all.css";
import "../styles/assets/elagent/style.css";
import app from 'next/app';
import Navigation from '../components/navigation';
import Layout from '../components/layout';
import Container from '../components/container';






export default class MyApp extends app {
  static getInitialProps({ Component, router, ctx }) {
    let pageProps = app.getInitialProps({ Component, router, ctx });


    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <section id="app">
        
        
        <Layout>
          <Navigation  />
          <Container/>
          <div style={{marginTop: 7 + 'em', marginBottom: 7 + 'em'}}>
          <Component {...pageProps} /> </div>
  
         
        </Layout>
       
      </section>
    );
  }
}