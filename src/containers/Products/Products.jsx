import React from 'react';
import images from '../../constants/images';
import './Products.css';
const Products = () => {
    return (
        <div className="app_product section__padding">
            < div className='app_product_title' > Beads Product</div >
            <div className='app_product-set_title'>Beads Jewelry Set</div>
            <div className="app_product-set">

                <div className="app_set" >
                    <img src={images.set} alt="Summer seedbeads jewelry set" />
                    <p>Summer seedbeads jewelry set</p>
                </div >
            </div >
            <div className='app_product-necklace_title'>Beads Necklace</div>
            <div className="app_product-necklace">

                <div className="app_pearlnecklace">
                    <img src={images.PearlNecklace} alt="Pearl Necklace" />
                    <p>Pearl Necklace</p>
                </div>
                <div className="app_greenbeads">
                    <img src={images.greenbeadsnecklace} alt="GreenBeads Necklace" />
                    <p>GreenBeads Necklace</p>
                </div>
                <div className="app_flowernecklace">
                    <img src={images.flowernecklace} alt="Flower Necklace" />
                    <p>Flower Necklace</p>
                </div>
            </div>
            <div className='app_product-bracelet_title'>Beads Bracelet</div>
            <div className="app_product-bracelet">

                <div className="app_blackbracelet">
                    <img src={images.BlackBracelet} alt="Black Bracelet" />
                    <p>Black bracelet</p>
                </div>
                <div className="app_flowerbracelet">
                    <img src={images.FlowerBracelet} alt="Flower Bracelet" />
                    <p>Flower Bracelet</p>
                </div>
                <div className="app_pearlbracelet">
                    <img src={images.pearlbracelet} alt="Pearl Bracelet" />
                    <p>Pearl Bracelet</p>
                </div>
            </div>
            <div className='app_product-charm_title'>Beads charm</div>
            <div className="app_product-charm">

                <div className="app_redcharm">
                    <img src={images.RedStrawberry} alt="Red Strawberry Charm" />
                    <p>Red Strawberry Charm</p>
                </div>
                <div className="app_pinkcharm">
                    <img src={images.PinkStrawberry} alt="Pink Strawberry Charm" />
                    <p>Pink Strawberry Charm</p>
                </div>
                <div className="app_snowcharm">
                    <img src={images.Snowflake} alt="Snow Flake Charm" />
                    <p>Snow Flake Charm</p>
                </div>
            </div>

        </div >
    )
}

export default Products