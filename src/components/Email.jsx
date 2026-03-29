import Button from "./Button";

const Email = ({ className, placeholder }) => {
    return (
        <div className={`${className} max-w-fit w-fit h-fit max-h-fit mx-auto flex flex-row`}>
            <input className="min-w-7 lg:min-w-12 px-3 bg-none border border-white focus:outline-none" type="email" name="email" placeholder={placeholder}/>
            <Button className="min-h-full bg-none">Subscribe</Button>
        </div>
    );
};

export default Email;
