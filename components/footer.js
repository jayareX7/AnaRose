import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="footer-accent border-t" >
       
    <img src="assets/review-bg.jpg" className="footer-default" style={{position: 'absolute'}} />
      <div class="container mx-auto" style={{paddingLeft: 5 + "rem", paddingRight: 3 + "rem"}} > 
   

        <div className="py-28 flex flex-col lg:flex-row items-center">
      
          {/* Footer #1 */}
          
          <div className="tracking-tighter leading-tight justify-center items-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
         <h4>Footer #1</h4>
         <ul className="p-0">
          <li><a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="font-bold hover:underline"
            >
              View on GitHub
            </a></li>
            <li><a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="font-bold hover:underline"
            >
              View on GitHub
            </a></li>
            </ul>
          </div>


          {/* Footer #2 */}
          
          <div className="tracking-tighter leading-tight justify-center items-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          <h4>Footer #2</h4>
          <ul  className="p-0">
          <li><a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="font-bold hover:underline"
            >
              View on GitHub
            </a></li>
            <li><a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="font-bold hover:underline"
            >
              View on GitHub
            </a></li>
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
              View on GitHub
            </a></li>
            <li><a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="font-bold hover:underline"
            >
              View on GitHub
            </a></li>
            </ul>
          </div>
        
         

         
          {/* Footer #4 */}
          <div className="tracking-tighter leading-tight justify-center items-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          <h4>Footer #4</h4>
          <ul  className="p-0">
          <li><a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="font-bold hover:underline"
            >
              View on GitHub
            </a></li>
            <li><a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="font-bold hover:underline"
            >
              View on GitHub
            </a></li>
            </ul>
          </div>
          
        
        

        </div>
      </div>
    </footer>
  )
}
