import Fade from 'react-reveal'

export default function ApplianceCleaning() {
    return (



<div className="col-lg-3">
  <div className=" mb-3 margin-auto price_content price_content_two">
    <Fade bottom>

        <div className="pr_list ">
            <div className="price_item">
                <div className="pr_title">Appliance Cleaning</div>
                <div className="price f_700 f_size_40 t_color2">$19.99
                <sub className="f_size_16 f_400"><br />hour</sub></div>
                <div className="mt-3 margin-auto">
                  <button class="snipcart-add-item btn_three"
                      data-item-id="appliance-cleaning"
                      data-item-price="19.99"
                      data-item-url="image-goes-here"
                      data-item-description="Place-Description-Here"
                      data-item-image="image-location-goes-here"
                      data-item-name="Appliance Cleaning">
                      Add to cart
                  </button> 
                </div>
            </div>
        </div>

    </Fade>
 
  </div>
</div> 



    )}