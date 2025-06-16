import { useEffect } from "react";
import { createPortal } from "react-dom";

export function Modal({children, onClose}) {
  useEffect(() => {
    const handleEsc = e => {
      if(e.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    }
  }, [onClose]);

  return createPortal(
    <div className='fixed bg-black/70 flex justify-center items-center w-full h-full'>
      <div className="relative w-[70%] bg-neutral-900 text-white py-10">
        <button className='absolute w-10 h-10 border-0 right-0 top-0' onClick={onClose}>
          x
        </button>
        <div className='flex justify-center items-center'>
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}