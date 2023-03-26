// import dependencies
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import Article from '../components/blogComponents/Article';


export default function BlogPage(){
    const [articles, setArticles] = useState([]);
    const [loading, setLoading]   = useState(true);
    const [genre, setGenre]       = useState("")
    useEffect(()=>{
        async function getArticles(){
        const {data} = await axios.get(`/api/posts?search=${genre}`);
        setArticles(data);
        setLoading(false);
    }
    getArticles();
    },[genre]);
    return(
        <section style={{gap:"0px"}}>
            <h1 style={{fontSize: "2.5rem"}}>
                The Blog
            </h1>
            <article>
                <nav className='blogNav'>
                    <Link onClick={()=>setGenre("")}> All </Link>
                    <Link onClick={()=>setGenre("Algorithms")}> Algorithms </Link>
                    <Link onClick={()=>setGenre("Projects")}> Projects </Link>
                    <Link onClick={()=>setGenre("Extras")}> Extras </Link>
                </nav>
                <div className="blogContainer">
                    <article className='blog'>
                            {loading && <Button isLoading = {loading}>Loading articles now...</Button>}
                            {!loading && articles.map((article)=>{
                              return(
                              <Article
                                title = {article.title}
                                content = {article.content}
                                author = {article.authorName}
                                pic = {article.pic}
                                date = {article.createdAt}
                                key = {article._id}
                                  />
                              )
                            })}
                    </article>
                </div>
            </article>
        </section>
  );
}