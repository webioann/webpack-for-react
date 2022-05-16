import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { slider_data } from '../data/slider_data'
import './new-slider.scss'

function NewSliderGallery() {

    const slide_number = useSelector(state => state.redux.slide_number)

    const[offset,setOffset] = useState(0)

    // useEffect(() => {
    //     setOffset(+ 1000)
    // },[slide_number])

    return (
        <ul className='gallery'>
            { slider_data.map( data => (
                <picture className='slide' key={data.number}> 
                    <source  
                        srcSet={data.desktop_img} 
                        media="(min-width: 768px)" 
                        type='image/png'/>
                    <source 
                        srcSet={data.tablet_img} 
                        media="(min-width: 576px) and (max-width: 767.999px)"  
                        type='image/png'/>
                    <img 
                        src={data.mobile_img} alt='img'/>
                </picture>))
            }
        </ul>
    )
}

export default NewSliderGallery;


{/* <ul className='gallery'>
{ slider_data.map( data => (
    <img src={data.desktop_img}
        className='slide'
        alt='img'/>))
}
</ul> */}
