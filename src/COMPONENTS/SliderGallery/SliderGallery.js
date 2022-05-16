import React from 'react'
import useSlideMaker from '../../hooks/useSlideMaker'
import './slider-gallery.scss'

function SliderGallery() {

    const { desktopImg,tabletImg,mobileImg,slideClass } = useSlideMaker()

    return (
        <div className='gallery'>
            <picture className={slideClass}> 
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
    )
}

export default SliderGallery;


