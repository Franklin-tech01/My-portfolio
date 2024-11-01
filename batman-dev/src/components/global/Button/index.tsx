type buttonProps = {
    text: string,
    className?: string;
};

const Button: React.FC<buttonProps> = ({ text, className }) => {
    return (
        <>
            <button className={`bg-purple-500 text-white rounded-full text-sm ${className}  w-[150px] h-[40px] flex items-center justify-center`} >
                {text}
            </button>
        </>
    );
};

export default Button;