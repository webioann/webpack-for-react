import { useState,useEffect,useRef } from "react"
import { useSelector,useDispatch } from "react-redux"
import { slider_data } from '../data/slider_data'

const useSlideMaker = () => {

    const dispatch = useDispatch()
    const slide_number = useSelector(state => state.redux.slide_number)
    const gallery_size = slider_data.length
    const[active_slide,setActiveSlide] = useState(slide_number)

    return active_slide
}
export default useSlideMaker;

// if(active_slide_number >= 1 && active_slide_number <= gallery_size) {
//     setActiveSlide(slider_data.filter(slide => slide.number === active_slide_number))
// }


