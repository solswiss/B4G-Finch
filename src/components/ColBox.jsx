
const ColBox = ({ className, children, color, pattern }) => {
    const classes = `block p-4 text-start relative items-center justify-center overflow-hidden group transition-colors bg-${color} ${className || ""}`;

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default ColBox;
