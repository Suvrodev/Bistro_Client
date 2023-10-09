import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
      <div className=" p-1 flex bg-green-500 text-neutral-content">
        <div className="bg-slate-600 w-1/2 flex justify-center text-center">
           <div className="flex flex-col">
              <h1 className="mb-5 font-extrabold">CONTACT US</h1>
              <div>
                <p className=""> 123 ABS Street, Uni 21, Bangladesh</p> 
                <p className="mt-1"> +88 123456789</p> 
                <p className="mt-1">Mon - Fri: 08:00 - 22:00 </p>
                <p className="mt-1">Sat - Sun: 10:00 - 23:00 </p><br />
              </div>
           </div>
        </div>
        <div className=" bg-slate-800 w-1/2 flex flex-col items-center justify-center">
           <div className="flex flex-col items-center  gap-2">
               <h1 className="text-2xl font-extrabold">Follow US</h1>
               <p>Join us on social media</p>
               <div className="flex gap-5 text-2xl">
                  <FaFacebookF/>
                  <FaInstagram/>
                  <FaTwitter/>
               </div>
           </div>
         
        </div>
      </div>

      <div className="footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;