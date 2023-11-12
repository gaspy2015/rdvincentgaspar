import React from 'react'

function Header() {
  return (
    <header className='w-full h-[80px] leading-[80px] flex items-center'>
        <div className="container">
            <div className="flex items-center justify-between">
                {/* =====================logo===================== */}
                    <div className="flex items-center gap-[10px]">
                        <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[26px] font-[700] 
                            rounded-full flex items-center justify-center'>
                                G
                        </span>

                        <div className="leading-[20px]">
                            <h2 className='text-xl text-smallTextColor font-[700]'>Gaspy</h2>
                            <p className='text-smallTextColor text-[12px] font-[400]'><b>P</b>ixel<b>C</b>oder</p>
                        </div>
                    </div>
                {/* =====================end logo================= */}

                {/* =====================start nav================= */}
                    <div className="menu">
                        <ul className='flex items-center gap-10'>
                            <li>
                                <a className='text-smallTectColor font-[600]' href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className='text-smallTectColor font-[600]' href="#services">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a className='text-smallTectColor font-[600]' href="#portfolio">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a className='text-smallTectColor font-[600]' href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                {/* =====================end nav================= */}


                {/* =====================start nav right================= */}
                    <div className="flex items-center gap-4">
                        <button className='flex items-center gap-2 text-smallTextColor font-[600]
                                           border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px]
                                           hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300'>
                            <i class="ri-send-plane-line"></i> Let's Talk
                        </button>
                        <span className='text-2xl text-smallTextColor md:hidden cursor-pointer'><i class="ri-menu-fill"></i></span>
                    </div>
                {/* =====================end nav right================= */}


            </div>
        </div>
    </header>
  );
}

export default Header