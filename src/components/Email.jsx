import Button from "./Button";

const Email = ({ className, placeholder }) => {
    return (
        <div className={`${className} max-w-fit w-fit mx-auto flex flex-row gap-1em`}>
            <input className="min-w-[4em] lg:min-w-[6em]" type="email" name="email" placeholder={placeholder}/>
            <Button>Subscribe</Button>
        </div>
    );
};

export default Email;
