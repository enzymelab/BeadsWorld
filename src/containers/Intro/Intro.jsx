import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImYoutube2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import images from '../../constants/images';
import './Intro.css';

const Intro = () => {
    return (
        <div className="app_intro">
            <div className="app_facebook">
                <FaFacebook color='rgb(47,83,149)' size={27} />
                <p>Facebook</p>
            </div>
            <div className="app_twitter">
                <AiFillTwitterCircle color='rgb(29, 155, 240)' size={30} />
                <p>Twitter</p>
            </div>
            <div className="app_youtube">
                <ImYoutube2 color='red' size={48} />
                <p>Youtube</p>
            </div>
            <div className="app_instagram">
                <img src={images.instagramlogo} alt="Instagram" />
                <p>Instagram</p>
            </div>
        </div>
    )
}

export default Intro