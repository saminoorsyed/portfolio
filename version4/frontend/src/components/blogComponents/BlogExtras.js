import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import Article from './Article';

export default function Extras() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading]   = useState(true);
  useEffect(()=>{
    async function getArticles(){
      const {data} = await axios.get("/api/posts?search=Extras");
      setArticles(data);
      setLoading(false);
    }
    getArticles();
    },[]);
    return (
      <>
        {loading && <Button isLoading = {loading}>Loading articles now...</Button>}
        {!loading && articles.map((article)=>{
          return(
          <Article
            title = {article.title}
            content = {article.content}
            author = {article.authorName}
            pic = {article.pic}
            key = {article._id}
              />
          )
        })}
      </>
    );
  }