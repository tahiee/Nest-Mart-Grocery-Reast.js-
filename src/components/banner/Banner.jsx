import React from 'react'
import './banner.css'
import Banner1 from '../../images/banner1.jpg'
import Banner2 from '../../images/banner2.jpg'
import Banner3 from '../../images/banner3.jpg'
const Banner = () => {



    return (
    <>
        <div className="bannerSection">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="box">
                            <img src={Banner1} className='w-100 transitions'/>
                        </div>

                    </div>
                    <div className="col">
                        <div className="box">
                            <img src={Banner2} className='w-100 transitions' />
                        </div>

                    </div>
                    <div className="col">
                        <div className="box">
                            <img src={Banner3} className='w-100 transitions' />
                        </div>

                    </div>
                </div>
            </div>
        </div>

    
    </>
  )
}

export default Banner