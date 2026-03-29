import { FaSun, FaMoon } from 'react-icons/fa';

export default function DarkModeToggle({mode, onClick}) {
    return(
        <button type="button" onClick={onClick} className="w-[60px] h-[60px]">
            {mode ? (<FaSun></FaSun>) : (<FaMoon></FaMoon>)} 
        </button>
    );
}