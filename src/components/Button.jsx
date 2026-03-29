
const Button = ({ className, href, onClick, children, white }) => {
    const classes = `button text-center relative inline-flex items-center justify-center overflow-hidden group transition-colors ${white ? "text-n-8 bg-white dark:text-white dark:bg-n-6/50 dark:border dark:border-n-6" : "text-white bg-n-8/20 dark:bg-white/20 dark:hover:bg-white/30"} ${className || ""}`;

    const renderedButton = (
        <button className={`${classes} ${white ? '' : 'border border-n-8 dark:border-white/20'}`} onClick={onClick}>
            <span className={`relative z-10 px-7 py-4 ${white ? '' : (className && className.includes('text-') ? '' : 'text-n-8 dark:text-white')}`}>{children}</span>
        </button>
    );

    const renderedLink = (
        <a href={href} className={`${classes} ${white ? '' : 'border border-n-8 dark:border-white/20'}`}>
            <span className={`relative w-full px-7 py-4 ${white ? '' : (className && className.includes('text-') ? '' : 'text-n-8 dark:text-white')}`}>{children}</span>
        </a>
    );

    return href ? renderedLink : renderedButton;
};

export default Button;
