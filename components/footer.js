Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@jayareX7 
Learn Git and GitHub without any code!
Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.


jayareX7
/
AnaRose
1
00
Code
Issues
Pull requests
1
Actions
Projects
Wiki
Security
Insights
Settings
AnaRose/components/footer.js /
@jayareX7
jayareX7 Revert to Older Commit
Latest commit afdb01f 26 days ago
 History
 1 contributor
101 lines (84 sloc)  3.22 KB
  
import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
      
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
      </Container>
    </footer>
  )
}
