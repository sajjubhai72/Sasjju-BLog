import React from 'react'
import { Link } from 'react-router-dom';
import img from '../image/logo.png';
import Sajjad from '../image/home-page/Sajjad.jpg'
import Image from '../image/Single-page/Image.png'
import Image01 from '../image/Single-page/Image01.png'

const SinglePost = () => {
  return (
    <div className='w-full max-h-full'>
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

      <div className='w-full px-40'>
        <div className='container pt-10 px-20'>
          <div className='w-[45vw]'>
            <button className='bg-[#4b6bfb] text-white p-2 border border-white rounded-lg'>Technology</button>
            <p className='text-[2vw] leading-none pt-4'>The Impact of Technology on the Workplace: How Technology is Changing</p>
            <div className='author flex gap-3 pt-4'>
              <img className='w-12 rounded-full' src={Sajjad} alt="" />
              <div className='flex gap-5 pt-5'>
                <h4>Sajjad Ansari</h4>
                <h3>October 11, 2024</h3>
              </div>
            </div>
          </div>

          <div className='Image'>
            <div className='w-full pt-10'>
              <img className='w-full' src={Image} alt="" />
              <div className='text pt-5'>
                <p className='text-[1.8vw] text-justify leading-none text-[#696a75]'>Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels. <br /><br /> One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
              </div>
              <div className='text pt-5'>
                <h1 className='text-[2vw] font-semibold'>Research Your Destination</h1>
                <p className='text-[1.8vw] text-justify leading-none text-[#696a75]'>Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas. <br /><br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.</p>
              </div>
              <div className='text pt-5'>
                <h1 className='text-[2vw] font-semibold'>Plan Your Itinerary</h1>
                <p className='text-[1.8vw] text-justify leading-none text-[#696a75]'>While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey. <br /><br /> Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.</p>
              </div>
            </div>
          </div>

          <div className='pt-10'>
            <div className='border border-none rounded-lg bg-[#f6f6f7] p-10'>
              <h1 className='text-4xl'>“ Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. ”</h1>
            </div>
          </div>

          <div className='Image01'>
            <div className='w-full pt-10'>
              <img className='w-full' src={Image01} alt="" />
              {/* Advertisement */}
              <div className='pt-[5vw] flex items-center justify-center'>
                <div className='w-[700px] h-100 border rounded-lg border-[#e8e8ea] bg-[#e8e8ea] flex flex-col items-center p-5'>
                  <h6 className='text-[13px]'>Advertisement</h6>
                  <h1 className='text-[20px]'>You can place ads</h1>
                  <h1>750x100</h1>
                </div>
              </div>
              <div className='text pt-5'>
                <h1 className='text-[2vw] font-semibold'>Pack Lightly and Smartly</h1>
                <p className='text-[1.8vw] text-justify leading-none text-[#696a75]'>Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.</p>
              </div>
              <div className='text pt-5'>
                <h1 className='text-[2vw] font-semibold'>Immerse Yourself in the Local Culture</h1>
                <p className='text-[1.8vw] text-justify leading-none text-[#696a75]'>One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
              </div>
              <div className='text pt-5'>
                <h1 className='text-[2vw] font-semibold'>Capture Memories</h1>
                <p className='text-[1.8vw] text-justify leading-none text-[#696a75]'>Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.</p>
              </div>
              <div className='text pt-5'>
                <h1 className='text-[2vw] font-semibold'>Conclusion:</h1>
                <p className='text-[1.8vw] text-justify leading-none text-[#696a75]'>Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.</p>
              </div>
            </div>
          </div>
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
                <p>&copy; Sajju Blog 2024. All Rights Reserved</p>
              </div>
            </div>
            <div className='flex gap-10 text-xl font-medium'>
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

export default SinglePost
