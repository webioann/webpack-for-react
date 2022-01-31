import { useState,useEffect } from "react"
import { useSelector } from "react-redux"

const useTranslator = ( key ) => {

    const lang = useSelector((state) => state.redux.lang)
    const [translation,setTranslation] = useState('')

    useEffect(() => {
        lang === 'eng' ? setTranslation(key.eng) : setTranslation(key.rus) 
    },[lang])

    return translation
}
export default useTranslator;
