import Fade from 'react-reveal/Fade';
import MoveBuy from './products/move-buy';
import OneTimeBuy from './products/one-time-buy';
import ScheduledBuy from './products/scheduled-buy';

const Index5 =() =>{
    return(

        <>

<section className="sec_pad wow fadeInUp">
                <div className="container">
                    <div className="row">
                    <Fade duration={1200}> 
                        <div className="sec_title mb_70 wow fadeInUp text-center"> 
                            <h2 className="  header-title "> The right price for you </h2> 
                            <p className="f_400 f_size_18 l_height34"> He lost his bottle squiffy bog bleeding hunky-dory wind up morish.! </p>
                        </div>
                    </Fade>

                    <div className="payment_price_info">  

                        <Fade bottom duration={1200}> 
                        <div className="payment_price_item mt-4">
                            <h2> Free </h2> 
                            <h6> For personal use </h6> 
                            <p>My lady bits and bobs cup of tea bubble and squeak brolly.</p> 
                             <OneTimeBuy />
                        </div>
                        </Fade>

                        <Fade bottom duration={1200}> 
                        <div className="payment_price_item center"> <h2> $29.00 </h2> 
                            <h6> For personal use </h6>
                            <p>My lady bits and bobs cup of tea bubble and squeak brolly.</p> 
                            <ScheduledBuy />
                        </div>
                        </Fade>

                        <Fade bottom duration={1200}> 
                        <div className="payment_price_item mt-4"> <h2> $59.00 </h2> 
                            <h6> For personal use </h6>
                            <p>My lady bits and bobs cup of tea bubble and squeak brolly.</p> 
                            <MoveBuy />
                        </div>
                        </Fade>

                    </div>
                </div>
            </div>

</section>

</>

    )}

    export default Index5;