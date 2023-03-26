// import dependencies
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, FormControl, FormLabel, Input, Box } from '@chakra-ui/react';
import Article from '../components/blogComponents/Article';


export default function BlogPage(){
    const [articles, setArticles] = useState([]);
    const [loading, setLoading]   = useState(true);
    const [genre, setGenre]       = useState("")
    const [query, setQuery] = useState('')
    function filterItems(items, query){
        return items.filter(item => item.title.includes(query))
    }
    function handleChange(e){
        setQuery(e.target.value);
    }
    const results = filterItems(articles, query)
    
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
                <nav className='blogNav'>
                    <Link onClick={()=>setGenre("")}> All </Link>
                    <Link onClick={()=>setGenre("Algorithms")}> Algorithms </Link>
                    <Link onClick={()=>setGenre("Projects")}> Projects </Link>
                    <Link onClick={()=>setGenre("Extras")}> Extras </Link>
                </nav>
                <div className="blogContainer">
                    
                <Container width="600px" centerContent>
                    <Box
                    padding= {1}
                    width = "100%"
                    margin= "40px 0 15px 0"
                    borderRadius="lg"
                    borderWidth="1px"
                    borderColor="black">
                        <FormControl>
                            <FormLabel>Search articles by title (case sensitive):</FormLabel>
                            <Input  id="filter_query" 
                                    type="text"
                                    placeholder='start typing here'
                                    ocusBorderColor='pink.400'
                                    value={query} 
                                    onChange={handleChange} 
                                    borderWidth = "1px"
                                    borderColor="black"
                                    size="sm"></Input>
                        </FormControl>
                    </Box>
                </Container>
                    <article className='blog'>
                            {loading && <Button isLoading = {loading}>Loading articles now...</Button>}
                            {!loading && results.map((article)=>{
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
        </section>
  );
}