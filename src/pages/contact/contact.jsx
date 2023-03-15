import React from 'react';
import './contact.css';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle, AiOutlineCustomerService } from 'react-icons/ai';
import { ImYoutube2 } from 'react-icons/im';
import { BsInstagram, BsPhoneVibrate } from 'react-icons/bs';
import { HiOutlineCursorClick, HiOutlineMail } from 'react-icons/hi';
import { GrLocation } from 'react-icons/gr';
import { GiTalk } from 'react-icons/gi';

const Contact = () => {
    return (

        <div class="contact-container" id="/contact">
            <div class="main-title">
                <h2>Contact <span>Us</span> <span class="bg-text">Our contact</span></h2>
            </div>
            <div class="contact-content-con">
                <div class="left-contact">
                    <h4>Contact us</h4>
                    <p>
                        Please call or email us for immediate answers to questions regarding orders and shipping.
                    </p>
                    <div class="contact-info">
                        <div class="contact-item">
                            <div class="icon">
                                <GrLocation color='black' size={20} />
                                <span>Location:</span>
                            </div>
                            <p>
                                Texas, United States
                            </p>
                        </div>
                        <div class="contact-item">
                            <div class="icon">
                                <HiOutlineMail color='black' size={20} />
                                <span>Email:</span>
                            </div>
                            <p>
                                <span>info@beadsworld.com</span>
                            </p>
                        </div>
                        <div class="contact-item">
                            <div class="icon">
                                <AiOutlineCustomerService color='black' size={20} />
                                <span>Customer Service:</span>
                            </div>
                            <p>
                                <span>800-123-4567</span>
                            </p>
                        </div>
                        <div class="contact-item">
                            <div class="icon">
                                <BsPhoneVibrate size={20} />
                                <span>Mobile Number:</span>
                            </div>
                            <p>
                                <span>123-456-7890</span>
                            </p>
                        </div>
                        <div class="contact-item">
                            <div class="icon">
                                <GiTalk size={20} />
                                <span>Languages:</span>
                            </div>
                            <p>
                                <span>English, Chinese</span>
                            </p>
                        </div>
                        <div class="contact-icons">
                            <div class="contact-icon">
                                <a href="www.facebook.com" target="_blank">
                                    <FaFacebook color='rgb(47,83,149)' size={37} />
                                </a>
                                <a href="#" target="_blank">
                                    <AiFillTwitterCircle color='rgb(29, 155, 240)' size={37} />
                                </a>
                                <a href="#" target="_blank">
                                    <ImYoutube2 color='red' size={36} />
                                </a>
                                <a href="#" target="_blank">
                                    <BsInstagram color='rgb(219, 117, 241)' size={30} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-contact">
                    <form action="" class="contact-form">
                        <div class="input-control i-c-2">
                            <input type="text" required placeholder="YOUR NAME" />
                            <input type="email" required placeholder="YOUR EMAIL" />
                        </div>
                        <div class="input-control">
                            <input type="text" required placeholder="ENTER SUBJECT" />
                        </div>
                        <div class="input-control">
                            <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                        </div>
                        <div class="submit-btn">
                            <a href="#" class="main-btn">
                                <span class="btn-text">Submit</span>
                                <span class="btn-icon"><HiOutlineCursorClick color='white' size={27} /></span>
                            </a>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact