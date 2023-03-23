import Result from "@/components/Result";

const API_KEY = process.env.API_KEY
// console.log(API_KEY)


export default async function Home({searchParams}) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`, {next:{revalidate:10000}});
  
  if(!res.ok){
    throw new Error("Couldn't fetch");
  }
  
  const data = await res.json();
  const results = data.results;





  return (
    <div className="w-full">
      <h1 className="text-red-400">
        <Result results={results}></Result>
      </h1>
    </div>
    
  )
}


