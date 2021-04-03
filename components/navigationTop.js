import Container  from './container';

export default function NavigationTop() {
    return (

<div style={{backgroundColor: '#84AC7E', height: 2.5 + 'rem'}}> 
<Container>

<div className='mt_0 flex' style={{float: 'left'}}>
    <a href="/shop" className="body-color" style={{margin: '0.49rem 0.5rem 0rem' , padding: '0.1rem 0.3rem'}}>Register</a>
    <a href="/shop" className="body-color" style={{margin: '0.49rem 0.5rem 0rem' , padding: '0.1rem 0.3rem'}}>Link 2</a>
</div>

  <div className='mt_0 flex' style={{float: 'right'}}>

  <a href="/shop" ><button class="btn_three" style={{margin: '0.49rem 0.5rem 0rem' , padding: '0.1rem 0.3rem'}}>Store</button> </a>
      <div className="text-center account-tab">
      <button class="snipcart-customer-signin">
     <img src="assets/user-account.svg" style={{ width: 25 + 'px'}} />
       
      </button> 
      </div> 
      
      <div className="account-tab-span">|</div>  
      <div className="text-center account-tab">
      <button class="snipcart-checkout"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M9.939 0l-.939 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l2.996-4.971h1.943zm-3.052 0l-2.887 4.971v1.098c0 
            1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l4.874-4.971h2.013zm17.113 6.068c0 1.067-.933 1.932-2 1.932s-2-.933-2-2v-1.098l-2.887-4.902h2.014l4.873
            4.971v1.097zm-10-1.168v1.098c0 1.066-.933 2.002-2 2.002s-2-.933-2-2v-1.098l1.047-4.902h1.905l1.048 4.9zm2.004-4.9l2.993 5.002v1.098c.001 1.067-.93 1.9-1.997
            1.9s-2-.933-2-2v-1.098l-.939-4.902h1.943zm-15.004 10v14h10v-2h-8v-10h18v12h2v-14h-22zm18 4h-6v10h6v-10z"/>
        </svg>  
        </button>
      </div>
         
      <div className="text-center account-tab-price"> 
         <button class="snipcart-checkout">    
           (<span class="snipcart-items-count">0</span>)
           <span class="snipcart-total-price">0.00</span>
         </button>
     </div>

   </div>
   </Container>
   
    </div>

    )}