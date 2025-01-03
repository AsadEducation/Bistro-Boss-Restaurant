import React from 'react';

const Footer = () => {
    return (
        <div className='mt-12 lg:mt-20'>
            <footer>
                {/* Main Footer Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    {/* Contact Us Section */}
                    <div className="bg-gray-700 text-gray-400  px-4 py-8">
                        <h3 className="text-white text-lg font-semibold mb-2">CONTACT US</h3>
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                    {/* Follow Us Section */}
                    <div className="bg-gray-800 text-gray-400 px-4 py-8">
                        <h3 className="text-white text-lg font-semibold mb-2">Follow US</h3>
                        <p>Join us on social media</p>
                        <div className="flex space-x-4 mt-2">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Copyright Section */}
                <div className="bg-black text-center py-4 text-gray-400">
                    <p className="text-sm">
                        Copyright © CulinaryCloud. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;