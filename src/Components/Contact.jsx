import React from 'react'
import { Link } from 'react-router-dom';
import img from '../image/logo.png';

function Contact() {
  return (
    <div className='w-full max-h-full'>

        {/* navbar */}
        <div className='w-full h-[6vw] px-20 flex items-center justify-between shadow-md'>
           {/* Logo Section */}
           <div className='flex items-center gap-3'>
                <img src={img} alt="Logo" className='w-10 h-10' />
                <h1 className='text-xl'>Sajju Blog</h1>
            </div>

            {/* Navbar Links */}
            <div className='navbar'>
                <nav className='flex gap-12 text-xl'>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/single-post" className="nav-link">Single Post</Link>
                    <Link to="/pages" className="nav-link">Pages</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>
            </div>

            {/* Search Section */}
            <div className='relative'>
                <input type="search" className='pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500' placeholder='Search' />
                <i className="fa-solid fa-magnifying-glass absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            </div>
        </div>

        {/* Contact location */}
        <div className='contact-Form px-20 pt-10'>
            <div className="locatin-icon flex flex-col items-center justify-center leading-none">
                <h1 className='text-[4rem] font-bold'>Contact US</h1>
                <p className='text-center text-xl'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                <div className='pt-10 flex items-center justify-center gap-10'>
                    <a href=""><i class="fa-brands fa-facebook border border-none rounded-lg bg-[#696a75] p-4 text-white"></i></a>
                    <a href=""><i class="fa-solid fa-envelope border border-none rounded-lg bg-[#696a75] p-4 text-white"></i></a>
                    <a href=""><i class="fa-solid fa-location-dot border border-none rounded-lg bg-[#696a75] p-4 text-white"></i></a>
                    <a href=""><i class="fa-solid fa-phone border border-none rounded-lg bg-[#696a75] p-4 text-white"></i></a>
                </div>
            </div>
            {/* contact & form */}
            <div className='Contact pt-10 px-20 flex items-start justify-between gap-10'>
                <div className='contact-info p-10 w-full border border-[#f6f6f7] rounded-lg shadow-sm'>
                    <h1 className='text-2xl font-semibold'>Contact Information</h1>
                    <div className='pt-10 pl-5 flex items-start gap-2'>
                        <h1 className='font-semibold'>Phone:</h1> <span>+977-9817316003</span>                    
                    </div>
                    <div className='pt-5 pl-5 flex items-start gap-2'>
                        <h1 className='font-semibold'>Email:</h1> <span>sajjubhai212@gmail.com</span>                    
                    </div>
                    <div className='pt-5 pl-5 flex items-start gap-2'>
                        <h1 className='font-semibold'>Address:</h1> <span>Harinagar, Sunsari Nepal</span>                    
                    </div>
                </div>
                <div className="w-full p-10 caontact-form border border-[#f6f6f7] rounded-lg shadow-sm">
                    <h1 className='text-2xl font-semibold'>Contact Form</h1>
                    <div className='pt-10 pl-5 flex items-start justify-between gap-2'>
                        <div className='w-full'>
                            <h1 className='font-semibold'>First Name</h1> 
                            <input className='p-2 border border-[#a3a3a4] rounded-lg' type="text" placeholder='First Name'/> 
                        </div>
                        <div className='w-full'>
                            <h1 className='font-semibold'>Last Name</h1> 
                            <input className='p-2 border border-[#a3a3a4] rounded-lg' type="text" placeholder='Last Name'/> 
                        </div>                    
                    </div>
                    <div className='pt-5 pl-5 flex flex-col items-start gap-2'>
                        <h1 className='font-semibold'>Email</h1>
                        <input className='w-full p-2 border border-[#a3a3a4] rounded-lg' type="email" name="" id="" placeholder='Email'/>

                    </div>
                    <div className='pt-5 pl-5 flex flex-col items-start'>
                        <h1 className='font-semibold'>Message</h1>
                        <textarea className='w-full p-7 border border-[#a3a3a4] rounded-lg' name="text" id="" placeholder='Message'></textarea>                    
                    </div>
                    <div className='pt-5 pl-5'>
                        <button className='p-2 borde border-none rounded-lg bg-blue-700 text-white text-2xl'>Send</button>
                    </div>
                </div>
            </div>
            <div className='w-full '>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7143.239247419363!2d87.0588559!3d26.4679874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef0ec0c35c54a3%3A0xa85c575c291405e6!2sHarinagara!5e0!3m2!1sen!2snp!4v1728746810332!5m2!1sen!2snp" className='w-full h-[40vw]' style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>




      {/* footer */}
      <div className='pt-20'>
        <div className='w-full p-20 bg-[#f6f6f7]'>
        <div className='flex items-start justify-between gap-[12vw]'>
          <div className='about w-[30%]'>
            <h1 className='font-semibold text-[1.5vw]'>About</h1>
            <p className='pt-5 text-[1.2rem] text-[#696a75]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <div className='pt-8 flex gap-2'>
              <h1 className='font-bold'>Email:</h1> <span className='text-medium text-[#696a75]'> sajjubhai212@gmail.com</span>
            </div>
            <div className='flex gap-2'>
            <h1 className='font-bold'>Phone: </h1> <span className='text-medium text-[#696a75]'>+977-9817316003</span>
            </div>
          </div>
          <div className='w-[20%]'>
            <h1 className='font-semibold text-[1.5vw]'>Quick Links</h1>
            <ul className='pt-8 text-[1.3rem] text-[#696a75] flex flex-col gap-2'>
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Archived</li>
              <li>Author</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='w-[15%]'>
            <h1 className='font-semibold text-[1.5vw]'>Catogery</h1>
            <ul className='pt-8 text-[1.3rem] text-[#696a75] flex flex-col gap-2'>
              <li>Lifestyle</li>
              <li>Technology</li>
              <li>Travel</li>
              <li>Business</li>
              <li>Economy</li>
              <li>Sports</li>
            </ul>
          </div>
          <div className='w-[40%] p-5 border border-[#e8e8ea] rounded-lg bg-[#fff] flex flex-col items-center'>
            <h1 className='text-[1vw] font-semibold'>Weekly Newsletter</h1>
            <h5 className='text-[0.8vw]'>Get blog articles and offers via email</h5>
            <div className='relative pt-5 w-full'>
              <input className='w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500' type="email" placeholder='Your Email' />
              <i class="fa-regular fa-envelope absolute right-3 top-1/3 transform -translate-y-1/2 text-gray-500"></i>
              <div className='pt-5'>
                <button className='w-full p-2 border rounded-lg border-none bg-[#4b6bfb] text-[#fff]'>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className='w-full px-20 bg-[#f6f6f7]'>
          <div className='line border border-[#dcdddf]'></div>
          <div className='py-10 flex items-center justify-between '>
            <div className='flex items-start justify-center gap-2'>
              <img src={img} alt="" />
              <div>
                <h1 className='font-light'>Sajju Blog</h1>
                <p>&copy;Sajju Blog 2024. All Rights Reserved</p>
              </div>
            </div>
            <div className='flex gap-10 text-xl'>
              <a href="">Terms of Use</a>
              <a href="">Privacy Policy</a>
              <a href="">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
