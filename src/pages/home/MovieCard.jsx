import { memo, useCallback, useState } from 'react'
import FavoriteButton from './FavoriteButton'
import { Modal } from '../../Components/ui/Modal';
import { Link } from 'react-router-dom';
import FilmInfoButton from './FilmInfoButton';

function MovieCard({image, rating, youtubeVideoId}) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openTrailer = useCallback(() => {
    setIsOpenModal(true);
  }, [])

  return <div className='relative rounded-xl w-[200px] h-auto'>
    <img src={image} className='rounded-xl h-full'/>

    {
      isOpenModal && <Modal onClose={() => setIsOpenModal(false)}>
        <iframe 
          width="560" 
          height="315" 
          src={`https://www.youtube.com/embed/${youtubeVideoId}?si=tmOotahOlYIu7Lis`}
          itle="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
        />
      </Modal>
    }

    <div className='absolute right-0 top-0 m-2 flex flex-row-reverse'>
      <FavoriteButton />
      <button onClick={openTrailer} className="flex items-center justify-center p-2 rounded-xl h-[40px] w-[40px] hover:border-red-200 hover:border-2 transition-all duration-200 ease">
        <img src="/camera.png"/>
      </button>

      <FilmInfoButton path={`/movie/${youtubeVideoId}`}/>
    </div>
    <div className='absolute left-0 bottom-0 m-2 font-bold text-white'>IMBd: {rating}</div>
  </div>
}

export default memo(MovieCard);