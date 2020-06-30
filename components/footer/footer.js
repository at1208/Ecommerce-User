import React, { Fragment, useEffect, useState } from 'react';
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
                        <svg class="footer-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 112.82">
                            <path class="footer-logo-path text" d="M109.06,110a6.87,6.87,0,0,1-4,1.34,6,6,0,0,1-4.4-1.77,6,6,0,0,1-1.76-4.43,5.87,5.87,0,0,1,1.65-4.29,5.63,5.63,0,0,1,4.19-1.68,7.84,7.84,0,0,1,4.29,1.37V110Zm0-11.18a9.63,9.63,0,0,0-4.35-1.18,7.1,7.1,0,0,0-5.32,2.17,8,8,0,0,0,0,10.85,7.1,7.1,0,0,0,5.29,2.21,7.32,7.32,0,0,0,4.35-1.44v1.15h1.58V90.28h-1.58v8.49ZM60,110a6.87,6.87,0,0,1-4,1.34,6,6,0,0,1-4.4-1.77,6,6,0,0,1-1.76-4.43,5.87,5.87,0,0,1,1.65-4.29,5.61,5.61,0,0,1,4.19-1.68A7.84,7.84,0,0,1,60,100.49V110Zm0-11.18a9.63,9.63,0,0,0-4.35-1.18,7.1,7.1,0,0,0-5.32,2.17,8,8,0,0,0,0,10.85,7.1,7.1,0,0,0,5.29,2.21A7.36,7.36,0,0,0,60,111.38v1.15h1.58V90.28H60v8.49Zm59.55,11.83a7.07,7.07,0,0,1-.34-2.76V99.13h4.12V97.86h-4.12V93s-1.57,0-1.57,2.06v2.8h-4v1.27h4v10.54a2.81,2.81,0,0,0,1,2.29,3.58,3.58,0,0,0,2.43.83,7,7,0,0,0,3-.75v-1.49a6.66,6.66,0,0,1-2.69.71c-1,0-1.62-.22-1.85-.66Zm-36.42-.45h0a2.29,2.29,0,0,1-.57,1.12,2.34,2.34,0,0,1-.59-1.09L78.55,100c-.58-1.74-1.39-2.11-2-2.11s-1.39.37-2,2.11l-3.41,10.2a2.21,2.21,0,0,1-.6,1.09,2.5,2.5,0,0,1-.57-1.12h0L66.2,97.87H64.67l4,12.72h0c.55,1.78,1.36,2.16,2,2.16h0c.59,0,1.4-.37,2-2.1L76,100.44a2.41,2.41,0,0,1,.59-1.1h0a2.31,2.31,0,0,1,.59,1.1l3.41,10.2c.59,1.73,1.4,2.1,2,2.1h0c.59,0,1.4-.38,2-2.16h0l4-12.72H87l-3.82,12.29Zm-57.88-.54a6.19,6.19,0,0,1-4.09,1.89,3.08,3.08,0,0,1-2.08-.7,2.16,2.16,0,0,1-.84-1.72,3.43,3.43,0,0,1,2-3,9,9,0,0,1,5-1.06v4.57Zm1.94,1.6c-.24,0-.35-.25-.35-.75v-9.07a3.35,3.35,0,0,0-1.3-2.84,5.32,5.32,0,0,0-3.3-1,9,9,0,0,0-4.75,1.56v1.61A7.58,7.58,0,0,1,22,98.87q3.26,0,3.26,3v1.86a13.42,13.42,0,0,0-6.35,1.59,4.22,4.22,0,0,0-2.22,3.76,3.47,3.47,0,0,0,1.15,2.63,4,4,0,0,0,2.81,1.08A7.48,7.48,0,0,0,25.25,111a4.09,4.09,0,0,0,.31,1.45.74.74,0,0,0,.72.36h.06a6.86,6.86,0,0,0,2.95-.75v-1.5a7.54,7.54,0,0,1-2.1.67Zm111.32-12a5.19,5.19,0,0,0-4-1.59,5.56,5.56,0,0,0-4.85,2.83h-.06V90.26h-1.57V112.5h1.57V102.24c1.3-2.1,2.9-3.14,4.81-3.14q4,0,4,5.06v8.34H140v-9a6.17,6.17,0,0,0-1.49-4.38ZM91.67,93h1.58V90.24H91.67V93Zm0,19.5h1.58V97.86H91.67V112.5ZM39.21,97.57a5.57,5.57,0,0,0-4.85,2.83H34.3V97.86H32.73V112.5H34.3V102.24c1.26-2.1,2.86-3.14,4.82-3.14,2.66,0,4,1.69,4,5.06v8.34h1.56v-8.93a6.21,6.21,0,0,0-1.48-4.41,5.21,5.21,0,0,0-4-1.59ZM9.9,109.44a6.47,6.47,0,0,1-4.72,1.82,10.34,10.34,0,0,1-3.61-.68v-8.87q2.49-2.83,5.12-2.84a4.58,4.58,0,0,1,3.63,1.68,6.28,6.28,0,0,1,1.44,4.26,6.22,6.22,0,0,1-1.86,4.63Zm-3-11.87A7.3,7.3,0,0,0,1.57,100v-9.7H0v21.43a14,14,0,0,0,5.22,1.1,8.16,8.16,0,0,0,6-2.2,7.85,7.85,0,0,0,2.25-5.87,7.29,7.29,0,0,0-1.84-5.15,6.14,6.14,0,0,0-4.72-2Z"
                            transform="translate(0 0)"></path>
                            <path class="footer-logo-path icon" d="M90,20.07c-2.77-.58-3.1.86-1.9,3.5,6.29,13.87.69,27.42-5.31,30.78A6.75,6.75,0,0,1,82.65,53c-.71-6.59-3.22-12.31-4.91-12.32-1.34,0-.5,5.63-.86,10.62-2.22-1.32-3.59-2.24-6-1.83-3.41.6-7.92,7.78-8.09,6.75-1.35-8.32,1.89-21.12,6.38-22.49.69-.27,1.91.78,4.65,1.81,2.13.8,1.86-1.31.88-2.1a10.29,10.29,0,0,0-10.95-.78C57,35.94,54,50.94,57.6,57.06a9.6,9.6,0,0,0,6.77,4.67c4.53.51,5.91-.43,9.57-4.9a4.16,4.16,0,0,0,1.72.84c-3,9.24-14.12,17-16.52,15.69-11.68-7.93-8.45-33.28-.2-55.58,1.34-3.63,3.55-10,4-12.35,1.22-6-6.38-7.17-11.58-2.77C47.61,5.86,44,13.32,41,22,31.59,49.5,35.6,72.76,52.49,77.8c19.43,5.8,28.67-6.29,30.11-18.44a25.68,25.68,0,0,0,3.58.18c6-.12,14.55-3.22,17.1-16.35C105.2,33.28,98.83,21.75,90,20.07Z"
                            transform="translate(0 0)"></path>
                        </svg>
                        </a>
                    </div>
                    <div class="footer-menu">
                        <h2 class="footer-menu-name"> About</h2>
                        <ul id="menu-get-started" class="footer-menu-list">
                        <li id="menu-item-173730" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-173730">
                            <a href="#">Contact Us</a>
                        </li>
                        <li id="menu-item-173728" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-173728">
                            <a href="#">About Us</a>
                        </li>
                        <li id="menu-item-173727" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-173727">
                            <a href="#">Careers</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div class="footer-content-column">
                    <div class="footer-menu">
                        <h2 class="footer-menu-name"> Help</h2>
                        <ul id="menu-company" class="footer-menu-list">
                        <li id="menu-item-167408" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-167408">
                            <a href="#">Payment</a>
                        </li>
                        <li id="menu-item-167409" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-167409">
                            <a href="#">Shipping</a>
                        </li>
                        <li id="menu-item-171917" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-171917">
                            <a href="#">Cancellation & Returns</a>
                        </li>
                        </ul>
                    </div>
                    <div class="footer-menu">
                        <h2 class="footer-menu-name"> Legal</h2>
                        <ul id="menu-legal" class="footer-menu-list">
                        <li id="menu-item-170434" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                            <a href="#">Return Policy</a>
                        </li>
                        <li id="menu-item-179115" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-179115">
                            <a href="#">Security</a>
                        </li>
                        <li id="menu-item-178960" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-178960">
                            <a href="#">Terms of Use</a>
                        </li>
                        <li id="menu-item-178960" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-178960">
                            <a href="#">Privacy</a>
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
