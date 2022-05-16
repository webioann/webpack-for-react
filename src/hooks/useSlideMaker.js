import { useState,useEffect,useRef } from "react"
import { useSelector } from "react-redux"
import { slider_data } from '../data/slider_data'

const useSlideMaker = () => {

    const slide_number = useSelector(state => state.redux.slide_number)
    const [desktopImg,setDesktopImg] = useState(slider_data[0].desktop_img)
    const [tabletImg,setTabletImg] = useState(slider_data[0].tablet_img)
    const [mobileImg,setMobileImg] = useState(slider_data[0].mobile_img)
    const [animClass,setAnimClass] = useState('prev-slide')
    let countRef = useRef(1) // === countRef needed only for toggle from slide #2 on slide #1 with animation

    useEffect(() => {
        let raw = slider_data.find(data => slide_number === data.number)
        setDesktopImg(raw.desktop_img)
        setTabletImg(raw.tablet_img)
        setMobileImg(raw.mobile_img)
        if(slide_number === 1 && countRef.current === 1) {
            setAnimClass('prev-slide')
        }
        if(slide_number !== 1){
            setAnimClass('prev-slide next-slide')
            countRef.current = 2
            setTimeout(() => {
                setAnimClass('prev-slide') 
            },800)
        }   
        if(slide_number === 1 && countRef.current === 2){
            setAnimClass('prev-slide next-slide')
            countRef.current = 1
            setTimeout(() => {
                setAnimClass('prev-slide') 
            },800)
        }   

    },[slide_number])

    return { desktopImg,tabletImg,mobileImg,animClass }
}
export default useSlideMaker;


