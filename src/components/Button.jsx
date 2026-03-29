
const Button = ({ className, href, onClick, children, white }) => {
    const classes = `button text-center relative inline-flex items-center justify-center overflow-hidden group transition-colors ${white ? "text-n-8 bg-white" : "text-white"} ${className || ""}`;

    const renderedButton = (
        <button className={`${classes} ${white ? '' : 'border border-white'}`} onClick={onClick}>
            <span className={`relative z-10 px-7 py-4 ${white ? '' : 'text-white'}`}>{children}</span>
        </button>
    );

    const renderedLink = (
        <a href={href} className={`${classes} ${white ? '' : 'border border-white'}`}>
            <span className={`relative w-full px-7 py-4 ${white ? '' : 'text-white'}`}>{children}</span>
        </a>
    );

    return href ? renderedLink : renderedButton;
};

export default Button;
