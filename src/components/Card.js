import Image from "next/image"
import Link from "next/link"
import { BiLike } from 'react-icons/bi';


export default function Card({result}) {
    
  return (
    <div className="group cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border border-slate-400 sm:m-2 transition-shadow duration-200 ">
        <Link href={`/movie/${result.id}`}>
            <Image className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200" src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} width={500} height={300}
            style={{
                maxWidth: '100%',
                height: 'auto',
            }}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="Image not available"
            ></Image>
            <div className="p-2">
                <p className="line-clamp-2 text-sm ">{result.overview}</p>
                <h2 className="truncate text-lg font-bold">{result.title || result.name}</h2>
                <p className="flex items-center">{result.release_date || result.first_air_date} <BiLike className="mr-1 ml-3"></BiLike>{result.vote_count}</p>
            </div>
        </Link>
    </div>
  )
}
