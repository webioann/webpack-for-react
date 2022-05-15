import { useState,useEffect,useRef } from "react"
import { useSelector,useDispatch } from "react-redux"
import { slider_data } from '../data/slider_data'

const useSlideMaker = () => {

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

    return { desktopImg,tabletImg,mobileImg }
}
export default useSlideMaker;


