import { Image, Box, Button } from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import DomPurify from "dompurify";

const Article = ({title, content, author, pic, date, deleteHandler, _id}) => {
    const [html, setHtml]       = useState("");
    const [isAuthor, setIsAuthor] = useState(false);
    // sanitize html content before rendering
    useEffect(()=>{
        function htmlSanitizer(){
            try{
                const sanitizedHtml = DomPurify.sanitize(content)
                setHtml(sanitizedHtml);
                const userObj = JSON.parse(localStorage.getItem("userInfo"));
                // avoid async state set for setting author info by using userObj 
                if (userObj && userObj.author){
                    setIsAuthor(true);
                }
            }catch(error){
                console.error(error);
            }
        }
        htmlSanitizer();
    },[])

    return (
    <>
    {isAuthor && <Button onClick={()=>deleteHandler(_id)}>Delete Message</Button>}
    <h1 style={{fontWeight: "700", fontSize:"2.5rem"}}>{title}</h1>
    <p> by {author} on {date.slice(0,10)}</p>
    <Box boxSize='cover'><Image src={pic}/></Box>
    {/* look into using a headless cms system */}
    <div dangerouslySetInnerHTML={{__html: html}}/>
    </>
  )
}

export default Article