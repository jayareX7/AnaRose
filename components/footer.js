import Container from './container';
import SocialLinks from './social-links'
import {
  Row
} from "reactstrap";
import Fade from 'react-reveal/Fade' ;

import { EXAMPLE_PATH } from '../lib/constants'
import SocialFeed from './social-feed';

export default function Footer() {
  return (
    <Fade bottom duration={1600}>
    <footer className="new_footer_area border-t border-accent-2">
      <Container>
    
        <div className="pt-6 pb-5 flex flex-col lg:flex-row">
      
          {/* Footer #1 */}
          
          <div className="tracking-tighter margin-auto leading-tight justify-left items-center lg:text-left lg:mb-0 lg:pr-4 lg:w-1/2">
         <img src="./assets/full-logo.png" style={{ marginBottom: 2 + 'rem'}} />
         <ul className="p-0" style={{ textAlign: 'justify'}}>
          <p>
          is here for your Residential cleaning needs.
           When serving our community we only use 100% homemade organic products.<br/>
           Our highest priority is cleanliness and safety for you and your family.<br/>
           Let's get cleaning. 
   </p>
            
            </ul>
          </div>


          {/* Footer #2 */}
          
          <div className="mt-8 tracking-tighter margin-auto leading-tight justify-center items-center lg:text-left  lg:mb-0 lg:pr-4 lg:w-1/4">
      
          <ul  className="p-0">
         
            </ul>
        
          </div>

             {/* Footer #3 */}
           
             <div className="mt-8 tracking-tighter margin-auto leading-tight justify-left items-center lg:text-left lg:mb-0 lg:pr-4 lg:w-1/4">
          <h4 className='display-5 spacing-1 sacramento'>Links</h4>
         <ul className="p-0">
          <p>
          <a href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="font-bold hover:underline">
              Facebook
            </a>
            </p>
            <p>
          <a href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="font-bold hover:underline">
              Twitter
            </a>
            </p>

            <p>
            <a href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="font-bold hover:underline">
              Instagram
            </a>
            </p>
           
            </ul>

        </div>
         
          {/* Footer #4 */}
          <div className="mt-8 tracking-tighter margin-auto leading-tight justify-center items-center lg:text-center lg:mb-0 lg:pr-4 lg:w-1/2">
          <h4 className='display-5 spacing-1 sacramento'>Social</h4>
   <SocialFeed />
          </div>
        
         

         
       
<SocialLinks  /> 
      </div>
      </Container>
    </footer>
    </Fade>
  )
}
