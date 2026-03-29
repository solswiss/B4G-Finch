import { FaSun, FaMoon } from 'react-icons/fa';

export default function DarkModeToggle({mode, onClick}) {
    return(
        <button type="button" onClick={onClick} className="w-[60px] h-[60px] flex items-center justify-center text-white hover:opacity-80 transition-opacity mx-2">
            {!mode ? (<FaSun size={24}></FaSun>) : (<FaMoon size={24}></FaMoon>)} 
        </button>
    );
}