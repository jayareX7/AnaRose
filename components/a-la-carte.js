import React, {Component} from 'react';
import Fade from 'react-reveal/Fade'
import ApplianceCleaning from './products/appliance-cleaning';
import Baseboards from './products/baseboards';
import CarpetCleaning from './products/carpet-cleaning';
import DishWash from './products/dishwash';
import Laundry from './products/Laundry';
import PetReset from './products/pet-reset';
import StovetopCleaning from './products/stovetop-cleaning'
import SweepMop from './products/sweep-mop';
import TrashRemoval from './products/trash-removal';
import VentDegreasing from './products/vent-degreasing';
import WindowCleaning from './products/window-cleaning';

export default function AlaCarte() {



        return(
<>

   
<Fade bottom>
          <div className=" text-center">
              <h2 className="wow fadeInUp mt-6 body-color mb-6 display-4 bison-bold" data-wow-delay="0.2s">
              <span className="sacramento">Looking for something else?</span> <br /> Check out our individual services!</h2>                
            </div>
    </Fade>
             
                <div className="container mx-auto">
                    <div className="row">
                        

<StovetopCleaning/>
<DishWash />
<VentDegreasing />
<TrashRemoval />
<DishWash />
<Laundry />
<Baseboards />
<CarpetCleaning />
<SweepMop />
<WindowCleaning />
<ApplianceCleaning />
<PetReset />
                                 
                       
                   
                </div>
               </div>
      
        </>

        )  
}
