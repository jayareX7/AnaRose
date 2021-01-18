import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer class="footer-accent">
  <div class="container mx-auto px-5"> 
  <div class="py-28 flex flex-col lg:flex-row items-center">
    <div class="tracking-tighter leading-tight justify-center items-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
      <h4 style={{color: '#fff'}}>Footer #1</h4>
      <ul class="p-0">
        <li>
          <a href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter" 
          class="font-bold hover:underline">View on GitHub</a>
        </li>
          
        <li>
          <a href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter" 
          class="font-bold hover:underline">View on GitHub</a>
        </li>      
      </ul>
    </div>
      
      <div class="tracking-tighter leading-tight justify-center items-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
      <h4 style={{color: '#fff'}}>Footer #2</h4>
        <ul class="p-0">
          <li>
            <a href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter"
            class="font-bold hover:underline">View on GitHub</a>
            </li>
            
          <li>
            <a href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter"
            class="font-bold hover:underline">View on GitHub</a></li>
        </ul>
        </div>
        
      <div class="tracking-tighter leading-tight justify-center items-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
      <h4 style={{color: '#fff'}}>Footer #3</h4>
        <ul class="p-0">
          <li>
            <a href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter"
            class="font-bold hover:underline">View on GitHub</a>
          </li>
            
          <li>
            <a href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter"
            class="font-bold hover:underline">View on GitHub</a>
          </li>
        </ul>
      </div>
        
      <div class="tracking-tighter leading-tight justify-center items-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
      <h4 style={{color: '#fff'}}>Footer #4</h4>
        <ul class="p-0">
          <li>
            <a href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter" 
            class="font-bold hover:underline">View on GitHub</a></li>
          <li>
            <a href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter"
            class="font-bold hover:underline">View on GitHub</a></li>
        </ul>
      </div>
            
  </div>   
  </div>
</footer>
  )
}