import React,{ useState } from 'react';
import { slider_data } from '../../data/slider_data'

// ======== image imports ==============================
import desktopDark from '../../assets/desktop-dk-eng.png';
import desktopLight from '../../assets/desktop-lt-rus.png';
import tabletDark from '../../assets/tablet-dk-eng.png';
import tabletLight from '../../assets/tablet-lt-rus.png';
import mobileDark from '../../assets/mobile-dk-eng.png';
import mobileLight from '../../assets/mobile-lt-eng.png';

import './slider.scss';

function Slider(props) {

    const [desktopImg,setDesktopImg] = useState(desktopDark)
    const [tabletImg,setTabletImg] = useState(tabletDark)
    const [mobileImg,setMobileImg] = useState(mobileDark)



    return (
        <div className='slider'>
            <div className='gallery'>
                <picture className='prev-slide'> 
                    <source  
                        srcSet={desktopImg} 
                        media="(min-width: 768px)" 
                        type='image/png'/>
                    <source 
                        srcSet={tabletImg} 
                        media="(min-width: 500px) and (max-width: 767.999px)"  
                        type='image/png'/>
                    <img 
                        src={mobileImg} alt='img'/>
                </picture>
                <picture className='next-slide'> 
                    <source  
                        srcSet={desktopImg} 
                        media="(min-width: 768px)" 
                        type='image/png'/>
                    <source 
                        srcSet={tabletImg} 
                        media="(min-width: 500px) and (max-width: 767.999px)"  
                        type='image/png'/>
                    <img 
                        src={mobileImg} alt='img'/>
                </picture>
            </div>
            { props.children }
        </div>
    );
}
export default Slider;
