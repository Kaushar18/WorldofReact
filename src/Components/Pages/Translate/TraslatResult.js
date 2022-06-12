import React ,{useState,useEffect}from 'react'
import TranslateApi from '../../../api/TranslateApi'

function TraslatResult({language,text}) {
    const [translated,setTranslated] = useState('')
    const [debouncedText,setDebouncedText] = useState(text)
    useEffect(()=>{
        const timeoutid=setTimeout(() => {
            setDebouncedText(text)
        }, 500);
        return(()=>{
            clearTimeout(timeoutid)
        })

    },[text])
    useEffect(()=>{
        const dotranslation = async()=>{
            const response = await TranslateApi.post('',{},{
                params:{
                    q:debouncedText,
                    target:language.value
                }
            })
            setTranslated(response.data.data.translations[0].translatedText)

        }
        
        dotranslation()
    },[language,debouncedText])
    return (
        <div>
            <h3 className="ui header">{translated} </h3>
        </div>
    )
}

export default TraslatResult
