import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_soeluyp', 'template_o10neec', form.current, 'user_hUriYfpRBIE4YNyyv6WTM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div>
        <Navbar></Navbar>
   
        <div class="hero bg-base-200" style={{ height: "calc(100vh - 133px)" }}> 
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Login now!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
                <form ref={form} onSubmit={sendEmail}>
                <div class="form-control">
                <label class="label">
                  <span class="label-text">name</span>
                </label>
                <input type="text" placeholder="name"  name="user_name" class="input input-bordered" />
              </div>
                <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="text" placeholder="email"  name="user_email" class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Comments</span>
                </label>
                <textarea placeholder="Comments" name="message"  class="input input-bordered"></textarea>
             
              </div>
              <div class="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Send" />
              </div>
                </form>
          
            </div>
          </div>
        </div>
      </div>

      
      <Footer></Footer>
        </div>
    );
}

export default Contact;