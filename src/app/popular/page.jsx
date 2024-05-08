import AnimeList from '@/components/AnimeList'
import Header from '@/components/AnimeList/Header'
import React from 'react'

export const Page = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
    const popularAnime = await response.json()
    
    return (
        <>
            <section>
                <Header title="Popular Anime" linkTitle="Dashboard" linkHref="/"/>
                <AnimeList api={popularAnime}/>
            </section>
        </>
    );
}

export default Page