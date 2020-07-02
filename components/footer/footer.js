import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import Svg from './footer-svg'

const Footer = () => {
  return <Fragment>
            <div class="pg-footer">
                <footer class="footer">
                <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                    <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
                </svg>
                <div class="footer-content">
                    <div class="footer-content-column">
                    <div class="footer-logo">
                        <a class="footer-logo-link" href="#">
                        <span class="hidden-link-text">MummaChoice</span>
                         <Svg />
                        </a>
                    </div>
                    <div class="footer-menu">
                        <h2 class="footer-menu-name"> About</h2>
                        <ul id="menu-get-started" class="footer-menu-list">


                        <li id="menu-item-173730" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-173730">
                          <Link href="/contact-us">
                             <a>Contact Us</a>
                          </Link>
                        </li>
                        <li id="menu-item-173728" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-173728">
                            <Link href="/about-us">
                              <a>About Us</a>
                            </Link>
                        </li>
                       
                        </ul>
                    </div>
                    </div>
                    <div class="footer-content-column">
                    <div class="footer-menu">
                        <h2 class="footer-menu-name"> Help</h2>
                        <ul id="menu-company" class="footer-menu-list">
                        <li id="menu-item-167408" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-167408">
                           <Link href="/payment">
                            <a>Payment</a>
                           </Link>
                        </li>
                        <li id="menu-item-167409" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-167409">
                            <Link href="/shipping">
                              <a>Shipping</a>
                            </Link>
                        </li>
                        <li id="menu-item-171917" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-171917">
                              <Link href="/cancellation-and-returns">
                                <a>Cancellation & Returns</a>
                              </Link>
                        </li>
                        </ul>
                    </div>
                    <div class="footer-menu">
                        <h2 class="footer-menu-name"> Legal</h2>
                        <ul id="menu-legal" class="footer-menu-list">
                        <li id="menu-item-170434" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                            <Link href="/return-policy">
                              <a>Return Policy</a>
                            </Link>
                        </li>
                        <li id="menu-item-179115" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-179115">
                              <Link href="/security">
                                <a>Security</a>
                              </Link>
                        </li>
                        <li id="menu-item-178960" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-178960">
                              <Link href="/term-of-use">
                                <a>Terms of Use</a>
                              </Link>
                        </li>
                        <li id="menu-item-178960" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-178960">
                              <Link href="/policy">
                                <a href="#">Privacy</a>
                              </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div class="footer-content-column">
                    <div class="footer-menu">
                        <h2 class="footer-menu-name"> Quick Links</h2>
                        <ul id="menu-quick-links" class="footer-menu-list">
                        <li id="menu-item-168092" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-168092">
                            <a target="_blank" rel="noopener noreferrer" href="#">Support Center</a>
                        </li>
                        <li id="menu-item-167418" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-167418">
                            <a target="_blank" rel="noopener noreferrer" href="#">Service Status</a>
                        </li>
                        <li id="menu-item-167954" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-167954">
                            <a href="#">Security</a>
                        </li>
                        <li id="menu-item-167423" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-167423">
                            <a href="#">Blog</a>
                        </li>
                        <li id="menu-item-167955" class="menu-item menu-item-type-post_type_archive menu-item-object-customer menu-item-167955"><a href="#">Customers</a></li>
                        <li id="menu-item-170700" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-170700">
                            <a href="#">Reviews</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div class="footer-content-column">
                    <div class="footer-call-to-action">
                        <h2 class="footer-call-to-action-title"> Let's Chat</h2>
                        <p class="footer-call-to-action-description"> Have a support question? Want to add SMS to your app? Need to talk to legal? Whatever the reason you need to chat, let us know and we'll give you a call.</p>
                        <a class="footer-call-to-action-button button" href="#" target="_self"> Get in Touch </a>
                    </div>
                    <div class="footer-call-to-action">
                        <h2 class="footer-call-to-action-title"> You Call Us</h2>
                        <p class="footer-call-to-action-link-wrapper"> <a class="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self"> +91 XXXXXXXX </a></p>
                    </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="footer-copyright-wrapper">
                    <p class="footer-copyright-text">
                        <a class="footer-copyright-link" href="#" target="_self"> ©2020. | GeekStore. | All rights reserved. </a>
                    </p>
                    </div>
                </div>
                </footer>
            </div>
         </Fragment>
}

export default Footer;
