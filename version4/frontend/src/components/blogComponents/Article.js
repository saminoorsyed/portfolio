import { Image, Box } from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import DomPurify from "dompurify";

const Article = ({title, content, author, pic}) => {
    const [html, setHtml] = useState("");
    // sanitize html content before rendering
    useEffect(()=>{
        function htmlSanitizer(){
            try{
                const sanitizedHtml = DomPurify.sanitize(content)
                setHtml(sanitizedHtml);
            }catch(error){
                console.error(error);
            }
        }
        htmlSanitizer();
    },[])

    return (
    <>
    <h1>{title}</h1>
    <p> by {author}</p>
    <Box boxSize='md'><Image src={pic}/></Box>
    {/* look into using a headless cms system */}
    <div dangerouslySetInnerHTML={{__html: html}}/>
    </>
  )
}

export default Article