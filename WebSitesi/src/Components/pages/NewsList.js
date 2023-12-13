import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem.js'


const NewsList = () => {
    const [articles, setArticles] = useState([])

    const apiKey = 'efab3ac17d224ab9868b3a2491d77f38';
    const country = 'tr';

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=entertainment&apiKey=${apiKey}`);
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [])
    return (
        <div>
            {articles.map(article => {
                return(
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}
        </div>
    )
}

export default NewsList
