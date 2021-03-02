import { Container } from 'next/app';
import { EXAMPLE_PATH } from '../../lib/constants'
import SocialLinks from '../Body/social-links'
import {
  Row
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="new_footer_area border-t border-accent-2">
      <Container>
      <Row>
        <div className="pt-9 pb-5 flex flex-col lg:flex-row items-center">
      
          {/* Footer #1 */}
          
          <div className="tracking-tighter leading-tight justify-left items-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
         <h4>Ana Rose</h4>
         <ul className="p-0">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet facilisis magna etiam tempor orci eu lobortis elementum.
            </p>
            
            </ul>
          </div>


          {/* Footer #2 */}
          
          <div className="tracking-tighter leading-tight justify-center items-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
      
          <ul  className="p-0">
         
            </ul>
        
          </div>
         
          {/* Footer #3 */}
          <div className="tracking-tighter leading-tight justify-center items-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          <h4>Footer #3</h4>
          <ul  className="p-0">
          <li><a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="font-bold hover:underline"
            >
              Terms & Conditions
            </a></li>
            <li><a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="font-bold hover:underline"
            >
              Privacy Policy
            </a></li>
            </ul>
          </div>
        
         

         
          {/* Footer #4 */}
           
          <div className="tracking-tighter leading-tight justify-left items-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
         <h4>Links</h4>
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
 <SocialLinks />
      </div>
      </Row>
      </Container>
    </footer>
  )
}
