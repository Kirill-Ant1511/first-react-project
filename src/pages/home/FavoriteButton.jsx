import { memo, useState } from "react";

function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return <button 
      onClick={() => setIsFavorite(!isFavorite)} 
      className='flex items-center justify-center p-2 rounded-xl h-[40px] w-[40px] hover:border-red-200 hover:border-2 transition-all duration-200 ease'
    >
    {isFavorite ? '❤️' : '🤍'}
  </button>
}

export default memo(FavoriteButton);