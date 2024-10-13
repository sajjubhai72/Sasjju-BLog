import React from 'react'
import { Link } from 'react-router-dom';
import img from '../image/logo.png';
import Home from '../image/home-page/Home.png'
import Sajjad from '../image/home-page/Sajjad.jpg'
import Rectangle1 from '../image/home-page/Rectangle-01.png'
import Rectangle2 from '../image/home-page/Rectangle-02.png'
import Rectangle3 from '../image/home-page/Rectangle-03.png'
import Rectangle4 from '../image/home-page/Rectangle-04.png'
import Rectangle5 from '../image/home-page/Rectangle-05.png'
import Rectangle6 from '../image/home-page/Rectangle-06.png'
import Rectangle7 from '../image/home-page/Rectangle-07.png'
import Rectangle8 from '../image/home-page/Rectangle-08.png'
import Rectangle9 from '../image/home-page/Rectangle-09.png'
import './Home.css';

const Blog = () => {
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
      
      <div className='home w-full px-20 pt-10 relative'>
        {/* Image Section */}
        <div className="img flex items-center justify-center relative">
          <img src={Home} alt="" className='w-full' />
    
          {/* Container positioned over the image */}
          <div className='container absolute top-[33vw] transform -translate-y-1/2 left-0 pl-20'>
            <div className='w-[45vw]'>
              <button className='bg-[#4b6bfb] text-white p-2 border border-white rounded-lg'>Technology</button>
              <h1 className='text-[2.6vw] pt-4 text-white'>The Impact of Technology on the Workplace: How Technology is Changing</h1>
              <div className='author flex gap-3 pt-4'>
                <img className='w-12 rounded-full' src={Sajjad} alt="" />
                <div className='flex gap-5 pt-5'>
                  <h4 className='text-white'>Sajjad Ansari</h4>
                  <h3 className='text-white'>October 11, 2024</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* latest post */}
      <div className='w-full px-20 pt-10'>
        <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          <div className='w-[28vw] border rounded-lg border-[#e8e8ea] p-3'>
            <img className='w-full' src={Rectangle1} alt="" />
            <div className='pt-5'>
              <button className='border border-none rounded-lg bg-[#f6f7ff] text-[#4b6bfb] p-3'>Technology</button>
            </div>
            <h1 className='pt-5 text-[1.8vw]'>The Impact of Technology on the Workplace: How Technology is Changing</h1>
            <div className='author flex gap-3 pt-4'>
                <img className='w-12 rounded-full' src={Sajjad} alt="" />
                <div className='flex gap-5 pt-5'>
                  <h4>Sajjad Ansari</h4>
                  <h3>October 11, 2024</h3>
                </div>
              </div>
          </div>
          <div className='w-[28vw] border rounded-lg border-[#e8e8ea] p-3'>
            <img className='w-full' src={Rectangle2} alt="" />
            <div className='pt-5'>
              <button className='border border-none rounded-lg bg-[#f6f7ff] text-[#4b6bfb] p-3'>Technology</button>
            </div>
            <h1 className='pt-5 text-[1.8vw]'>The Impact of Technology on the Workplace: How Technology is Changing</h1>
            <div className='author flex gap-3 pt-4'>
                <img className='w-12 rounded-full' src={Sajjad} alt="" />
                <div className='flex gap-5 pt-5'>
                  <h4>Sajjad Ansari</h4>
                  <h3>October 11, 2024</h3>
                </div>
              </div>
          </div>
          <div className='w-[28vw] border rounded-lg border-[#e8e8ea] p-3'>
            <img className='w-full' src={Rectangle3} alt="" />
            <div className='pt-5'>
              <button className='border border-none rounded-lg bg-[#f6f7ff] text-[#4b6bfb] p-3'>Technology</button>
            </div>
            <h1 className='pt-5 text-[1.8vw]'>The Impact of Technology on the Workplace: How Technology is Changing</h1>
            <div className='author flex gap-3 pt-4'>
                <img className='w-12 rounded-full' src={Sajjad} alt="" />
                <div className='flex gap-5 pt-5'>
                  <h4>Sajjad Ansari</h4>
                  <h3>October 11, 2024</h3>
                </div>
              </div>
          </div>
          <div className='w-[28vw] border rounded-lg border-[#e8e8ea] p-3'>
            <img className='w-full' src={Rectangle4} alt="" />
            <div className='pt-5'>
              <button className='border border-none rounded-lg bg-[#f6f7ff] text-[#4b6bfb] p-3'>Technology</button>
            </div>
            <h1 className='pt-5 text-[1.8vw]'>The Impact of Technology on the Workplace: How Technology is Changing</h1>
            <div className='author flex gap-3 pt-4'>
                <img className='w-12 rounded-full' src={Sajjad} alt="" />
                <div className='flex gap-5 pt-5'>
                  <h4>Sajjad Ansari</h4>
                  <h3>October 11, 2024</h3>
                </div>
              </div>
          </div>
          <div className='w-[28vw] border rounded-lg border-[#e8e8ea] p-3'>
            <img className='w-full' src={Rectangle5} alt="" />
            <div className='pt-5'>
              <button className='border border-none rounded-lg bg-[#f6f7ff] text-[#4b6bfb] p-3'>Technology</button>
            </div>
            <h1 className='pt-5 text-[1.8vw]'>The Impact of Technology on the Workplace: How Technology is Changing</h1>
            <div className='author flex gap-3 pt-4'>
                <img className='w-12 rounded-full' src={Sajjad} alt="" />
                <div className='flex gap-5 pt-5'>
                  <h4>Sajjad Ansari</h4>
                  <h3>October 11, 2024</h3>
                </div>
              </div>
          </div>
          <div className='w-[28vw] border rounded-lg border-[#e8e8ea] p-3'>
            <img className='w-full' src={Rectangle6} alt="" />
            <div className='pt-5'>
              <button className='border border-none rounded-lg bg-[#f6f7ff] text-[#4b6bfb] p-3'>Technology</button>
            </div>
            <h1 className='pt-5 text-[1.8vw]'>The Impact of Technology on the Workplace: How Technology is Changing</h1>
            <div className='author flex gap-3 pt-4'>
                <img className='w-12 rounded-full' src={Sajjad} alt="" />
                <div className='flex gap-5 pt-5'>
                  <h4>Sajjad Ansari</h4>
                  <h3>October 11, 2024</h3>
                </div>
              </div>
          </div>
          <div className='w-[28vw] border rounded-lg border-[#e8e8ea] p-3'>
            <img className='w-full' src={Rectangle7} alt="" />
            <div className='pt-5'>
              <button className='border border-none rounded-lg bg-[#f6f7ff] text-[#4b6bfb] p-3'>Technology</button>
            </div>
            <h1 className='pt-5 text-[1.8vw]'>The Impact of Technology on the Workplace: How Technology is Changing</h1>
            <div className='author flex gap-3 pt-4'>
                <img className='w-12 rounded-full' src={Sajjad} alt="" />
                <div className='flex gap-5 pt-5'>
                  <h4>Sajjad Ansari</h4>
                  <h3>October 11, 2024</h3>
                </div>
              </div>
          </div>
          <div className='w-[28vw] border rounded-lg border-[#e8e8ea] p-3'>
            <img className='w-full' src={Rectangle8} alt="" />
            <div className='pt-5'>
              <button className='border border-none rounded-lg bg-[#f6f7ff] text-[#4b6bfb] p-3'>Technology</button>
            </div>
            <h1 className='pt-5 text-[1.8vw]'>The Impact of Technology on the Workplace: How Technology is Changing</h1>
            <div className='author flex gap-3 pt-4'>
                <img className='w-12 rounded-full' src={Sajjad} alt="" />
                <div className='flex gap-5 pt-5'>
                  <h4>Sajjad Ansari</h4>
                  <h3>October 11, 2024</h3>
                </div>
              </div>
          </div>
          <div className='w-[28vw] border rounded-lg border-[#e8e8ea] p-3'>
            <img className='w-full' src={Rectangle9} alt="" />
            <div className='pt-5'>
              <button className='border border-none rounded-lg bg-[#f6f7ff] text-[#4b6bfb] p-3'>Technology</button>
            </div>
            <h1 className='pt-5 text-[1.8vw]'>The Impact of Technology on the Workplace: How Technology is Changing</h1>
            <div className='author flex gap-3 pt-4'>
                <img className='w-12 rounded-full' src={Sajjad} alt="" />
                <div className='flex gap-5 pt-5'>
                  <h4>Sajjad Ansari</h4>
                  <h3>October 11, 2024</h3>
                </div>
              </div>
          </div>
        </div>
        <div className='pt-10 flex items-center justify-center'>
          <button className='border rounded-lg border-[#d2d3d6] p-4 text-[1vw]'>View All Post</button>
        </div>
      </div>

      {/* Advertisement */}
      <div className='pt-[5vw] flex items-center justify-center'>
        <div className='w-[700px] h-100 border rounded-lg border-[#e8e8ea] bg-[#e8e8ea] flex flex-col items-center p-5'>
          <h6 className='text-[13px]'>Advertisement</h6>
          <h1 className='text-[20px]'>You can place ads</h1>
          <h1>750x100</h1>
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

export default Blog
