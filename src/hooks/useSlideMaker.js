import { useState,useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import {  changeSliderNumber} from '../Redux-toolkit/reduxSlice'
import { slider_data } from '../../data/slider_data'


const useSlideMaker = () => {

    const dispatch = useDispatch()
    const slide_number = useSelector(state => state.redux.slide_number)
    const arrow_into = useSelector(state => state.redux.arrow_into)
    const gallery_size = slider_data.length
    const[active_slide,setActiveSlide] = useState(slider_data[0])

    useEffect(() => {
        while(slide_number >= 1 && slide_number <= gallery_size.length) {
            if(arrow_into === 'right') {

            }
            if(arrow_into === 'left')
        }

    },[arrow_into])


    return active_slide
}
export default useSlideMaker;

// if(active_slide_number >= 1 && active_slide_number <= gallery_size) {
//     setActiveSlide(slider_data.filter(slide => slide.number === active_slide_number))
// }


