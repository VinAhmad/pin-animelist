import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Link from "next/link";

const Page = async ({params}) => {
    const { keyword } = params // sama kek => const keyword = params.keyword
    const decodedKeyword = decodeURI(keyword)

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
    const searchAnime = await response.json()

    return (
        <>
            {/* searched anime */}
            <section>
                <Header title={`Search results for ${decodedKeyword} ...`}/>
                <AnimeList api={searchAnime}/>
            </section>
        </>
    );
}

export default Page