export default function DarkModeToggle({mode, onClick}) {
    return(
        <button type="button" onClick={onClick} className="w-[60px] h-[60px]">
            {mode ? (<text>Light</text>) : (<text>Dark</text>)} 
        </button>
    );
}