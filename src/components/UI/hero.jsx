import React from 'react'
import heroImg from '../../assets/images/about-1.png'
import CountUp from 'react-countup'

const hero = () => {
  return (
    <section className='pt-0' id='about'>
        <div className="container pt-14">
            <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                {/* ============hero left content start=========== */}
                    <div className="w-full md:basis-1/2">
                        <h5 
                            data-aos='fade-right' 
                            data-aos-duration='1500' 
                            className='text-headingColor font-[600] text-[16px]'
                        >
                            Hello, Welcome
                        </h5>
                        <h1 
                            data-aos='fade-up' 
                            data-aos-duration='1500' 
                            className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px]
                                         sm:leading-[46px] mt-5'
                        >
                            I'm RD Vincent Gaspar <br /> Full-Stack Web Developer
                        </h1>
                        <div
                             data-aos='fade-up' 
                             data-aos-duration='1800'
                             data-aos-delay='200'
                             className="flex items-center gap-6 mt-7"
                        >
                            <a href="#contact">
                                <button 
                                    className=' bg-smallTextColor text-white font-[500] 
                                    flex items-center gap-2 border border-solid border-smallTextColor hover:bg-white hover:text-smallTextColor ease-in duration-200
                                    py-2 px-4 rounded-[8px]'
                                >
                                    <i class="ri-mail-line"></i>
                                    Hire Me
                                </button>
                            </a>
                            <a 
                                href="#portfolio" 
                                className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'
                            >
                                See Portfolio
                            </a>
                            
                        </div>

                        <p 
                                data-aos='fade-left' 
                                data-aos-duration='1500'
                                className='flex gap-2 text-headingColor mt-4 font-[500] text-15px leading-6 sm:pl-14 sm:pr-10 '>
                                <span><i class="ri-apps-line"></i></span>
                                Greetings! I'm a passionate full-stack web developer who recently completed an intensive web development 
                                boot camp. Proficient in HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express, MySQL, and MongoDB, 
                                I bring a diverse skill set to crafting dynamic and responsive websites. Explore my portfolio and witness 
                                the fusion of creativity and technical expertise in every line of code. Let's embark on a journey to redefine 
                                digital experiences! 
                        </p>
                        <div className="flex items-center gap-9 mt-10">
                            <span className='text-smallTextColor text-[15px] font-[600]'>
                                Follow me:
                            </span>
                            <span className='text-smallTextColor text-[24px] font-[600]'>
                                <i class="ri-facebook-box-fill"></i>
                            </span>
                            <span className='text-smallTextColor text-[24px] font-[600]'>
                                <i class="ri-github-fill"></i>
                            </span>
                            <span className='text-smallTextColor text-[24px] font-[600]'>
                                <i class="ri-linkedin-box-fill"></i>
                            </span>
                            <span className='text-smallTextColor text-[24px] font-[600]'>
                                <i class="ri-instagram-fill"></i>
                            </span>
                            
                        </div>
                    </div>
                {/* ============hero left content end=========== */}


                {/* ============hero img start=========== */}

                <div className='basis-1/3 mt-10 sm:mt-0 h-[470px] bg-smallTextColor border-2 border-smallTextColor border-solid rounded-full overflow-hidden'>
                    <figure className='flex items-center justify-center'>
                        <img className='h-[530px]' src={heroImg} alt="" />
                    </figure>
                </div>
            
                {/* ============hero img end=========== */}


                {/* ============hero right content start=========== */}
                    <div 
                        className='basis-1/5 flex justify-between text-center mt-10 
                        flex-wrap gap-3 md:mt-0 mdLflex-col md:justify-end md:text-end'>
                            <div className="mb-10">
                                <h2 className='text-headingColor font=[700] text-[32px]'>
                                    <CountUp start={0} end={4} duration={2} suffix='+' />
                                </h2>
                                <h4 className='text-headingColor font=[600] text-[18px]'>
                                    Months of Experience
                                </h4>

                            </div>
                    </div>
                {/* ============hero right content end=========== */}
                
            </div>
        </div>
    </section>
  )
}

export default hero