import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { slider_data } from '../../data/slider_data'
import './slider-gallery.scss'

function SliderGallery() {

    const slide_number = useSelector(state => state.redux.slide_number)
    const [desktopImg,setDesktopImg] = useState(slider_data[0].desktop_img)
    const [tabletImg,setTabletImg] = useState(slider_data[0].tablet_img)
    const [mobileImg,setMobileImg] = useState(slider_data[0].mobile_img)

    useEffect(() => {
        let raw = slider_data.find(data => slide_number === data.number)
        setDesktopImg(raw.desktop_img)
        setTabletImg(raw.tablet_img)
        setMobileImg(raw.mobile_img)
    },[slide_number])

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

export default SliderGallery;


