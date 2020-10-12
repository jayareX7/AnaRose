import Link from "next/link";
import fs from "fs";
import {getAllServiceTypes} from '../lib/services'
import Layout from '../components/layout'
import Container from '../components/container'

const Services = ({ slugs }) => (

 
  <Layout>
     <Container>
    <img src="/assets/blog/avx-studio-black.png" alt="my image" />
  <div>
    
    {slugs.map(slug => {
      return (

        <div key={slug}>
         
          <Link href={"/services/" + slug}>
            <a>{slug}</a>
          </Link>
      
         
        </div> 
        
      );
    })}
  </div>
</Container>
</Layout>
);

export const getStaticProps = async () => {
  const allServiceTypes = getAllServiceTypes([
  
    
  
    
    ]);

  const files = fs.readdirSync("data/_services");
  return {
    props: { title: '...' ,
    slugs: files.map(filename => filename.replace(".md", ""))
    }
  };
};




export default Services;