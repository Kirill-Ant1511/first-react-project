import { memo } from "react";
import { Link } from "react-router-dom";

function FilmInfoButton({path}) {
  return <Link className="flex items-center justify-center p-2 rounded-xl h-[40px] w-[40px] hover:border-red-200 hover:border-2 transition-all duration-200 ease" to={path}>
    🔗
  </Link>
}

export default memo(FilmInfoButton);