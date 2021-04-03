import Fade from 'react-reveal'

export default function DishWash() {
    return (



<div className="col-lg-3">
  <div className=" mb-3 margin-auto price_content price_content_two">
    <Fade bottom>

        <div className="pr_list ">
            <div className="price_item">
                <div className="pr_title">Wash Dishes</div>
                <div className="price f_700 f_size_40 t_color2">$15.00
                <sub className="f_size_16 f_400"><br />load</sub></div>
                <div className="mt-3 margin-auto">
                  <button class="snipcart-add-item btn_three"
                      data-item-id="dish-wash"
                      data-item-price="15.00"
                      data-item-url="image-goes-here"
                      data-item-description="place-description-here"
                      data-item-image="image-location-goes-here"
                      data-item-name="Wash Dishes">
                      Add to cart
                  </button> 
                </div>
            </div>
        </div>

    </Fade>
 
  </div>
</div> 



    )}