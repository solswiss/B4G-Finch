import Button from "./Button";

const Email = ({ className, placeholder }) => {
    return (
        <div className="flex flex-col lg:min-w-[50%] gap-2">
            <span className="text-sm">Stay up to date with our newsletter</span>
            <div className={`${className} max-w-full w-full h-fit max-h-fit mx-auto flex-1 flex-row lg:mx-0`}>
                <input className="min-w-7 md:min-w-12 h-full lg:flex-1 px-3 bg-none border border-n-6 focus:outline-none" type="email" name="email" placeholder={placeholder}/>
                <Button className="min-h-full bg-none">Subscribe</Button>
            </div>
        </div>
    );
};

export default Email;
