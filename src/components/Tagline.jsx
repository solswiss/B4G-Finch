import brackets from "../assets/svg/Brackets";

const TagLine = ({ className, children }) => {
    return (
        <div className={`tagline flex items-center ${className || ""} dark:text-white/50`}>
            {brackets("left")}
            <div className="mx-3 text-n-3 dark:text-white/50">{children}</div>
            {brackets("right")}
        </div>
    );
};

export default TagLine;
