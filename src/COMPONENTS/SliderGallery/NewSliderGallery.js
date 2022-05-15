import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { slider_data } from '../../data/slider_data'
import './slider-gallery.scss'

function NewSliderGallery() {

    const slide_number = useSelector(state => state.redux.slide_number)
    const [desktopImg,setDesktopImg] = useState(slider_data[0].desktop_img)
    const [tabletImg,setTabletImg] = useState(slider_data[0].tablet_img)
    const [mobileImg,setMobileImg] = useState(slider_data[0].mobile_img)

    const [nextDesktopImg,setNextDesktopImg] = useState(slider_data[1].desktop_img)
    const [nextTabletImg,setNextTabletImg] = useState(slider_data[1].tablet_img)
    const [nextMobileImg,setNextMobileImg] = useState(slider_data[1].mobile_img)
    const [next_slide,setNextSlide] = useState(2)

    useEffect(() => {
        let raw = slider_data.find(data => slide_number === data.number)
        setDesktopImg(raw.desktop_img)
        setTabletImg(raw.tablet_img)
        setMobileImg(raw.mobile_img)

        let next = slider_data.find(data => next_slide === data.number)
        setDesktopImg(next.desktop_img)
        setTabletImg(next.tablet_img)
        setMobileImg(next.mobile_img)

        setNextSlide(slide_number + 2)

    },[slide_number])

    if(slide_number === 1 || slide_number === 7) {
        return (
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
            </div>
        )
    }
    else{
        return (
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
                        srcSet={nextDesktopImg} 
                        media="(min-width: 768px)" 
                        type='image/png'/>
                    <source 
                        srcSet={nextTabletImg} 
                        media="(min-width: 500px) and (max-width: 767.999px)"  
                        type='image/png'/>
                    <img 
                        src={nextMobileImg} alt='img'/>
                </picture> 
            </div>
        )
    }
}

export default NewSliderGallery;


