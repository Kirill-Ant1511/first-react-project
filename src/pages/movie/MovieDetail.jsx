import { useMemo, useState } from "react";
import { useParams } from "react-router-dom"
import { MOVIES } from "../../constant/movies.data";
import { Modal } from "../../Components/ui/Modal";

export function MovieDetail() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const {id} = useParams();

  const movie = useMemo(() => {
    return MOVIES.find(movies => movies.youtubeVideoId === id);
  }, [id])

  if(!movie) return <div className="flex min-h-screen flex-col justify-center items-center">
      <p className="text-red-400 text-9xl">404</p>
      <p className="text-white text-2xl">Movie not found!</p>
    </div>
  

  return <div className="w-full dark:bg-black dark:text-white bg-white text-black px-6 transition-all duration-150">

    {isOpenModal && <Modal onClose={() => setIsOpenModal(false)}>
        <iframe 
          width="560" 
          height="315" 
          src={`https://www.youtube.com/embed/${movie.youtubeVideoId}?si=tmOotahOlYIu7Lis`}
          itle="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
        />
      </Modal>}

    <div className="flex justify-center h-full">
      <img src={movie.image} alt={movie.name} width={300}/>
    </div>  
    <div className="mt-10">
      <h2 className="text-4xl font-bold">{movie.name}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veniam reprehenderit enim consequuntur harum consequatur pariatur maiores temporibus illum minima.</p>
      <button
        className="w-10 p-2 rounded-2xl hover:border-2 hover:border-white/50 transition-all ease-in duration-100"
        onClick={() => setIsOpenModal(true)}
      >
        <img src="/camera.png" />
      </button>
    </div>
  </div>
}