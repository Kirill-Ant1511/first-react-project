import { useState } from 'react'
import { MovieCard } from './MovieCard'
import { MOVIES } from './movies.data'
import { useDebounce } from './hooks/useDebounce';
import { useTheme } from './hooks/useTheme';
function App() {
  const {theme, toggleTheme} = useTheme();

  const [searchTerm, setSearchTerm] = useState('');
  const searchDebounce = useDebounce(searchTerm, 400);

  const movies = MOVIES.filter(movie => movie.name.toLowerCase().includes(searchDebounce.toLowerCase()));

  return (
    <div className='min-h-screen w-full dark:bg-black dark:text-white bg-white text-black px-6 transition-all duration-150'>
      <header className='flex justify-between items-center'>
        <img 
          src="./Netflix-big.png" 
          alt="Netflix" 
          className='h-20' 
        />
        <div className='flex gap-5'>
          <input 
            type="search" 
            placeholder='Search...'
            className='p-2 rounded-xl border-1 dark:border-white/30 border-black'
            value={searchTerm}
            onChange={e => {
              setSearchTerm(e.target.value)
            }}
          />
          <button 
            onClick={toggleTheme}
            className='rounded-xl border-1 p-1 w-20 hover:bg-white/50 transition-all duration-500'
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </header>

      <main className='flex gap-6'>
        {
          movies.length ? movies.map((movie) => (
            <MovieCard 
              key={movie.name}
              image={movie.image} 
              rating={movie.rating}
              youtubeVideoId={movie.youtubeVideoId}
            />
          )) : <p>Films not found!</p>
        }
        
      </main>
    </div>
  )
}

export default App
