import Link from 'next/link';
import React from 'react';

type navbarProps ={
    className?: string,
}

const Navbar:React.FC<navbarProps> = ({className}) => {

    const links = [
        { text: "About", path: "/about" },
        { text: "Project", path: "/project" },
        { text: "Experience", path: "/experience" },
    ];

    return (
        <div className={`w-[1100px] bg-transparent mx-auto flex items-center relative  justify-between ${className}`}>
            <p className='text-slate-100'>Franklin Mike</p>
            <ul className='flex items-center justify-center '>
                {links.map((link, index) => (
                    <li className='text-white mx-1 flex items-center justify-center hover:text-purple-500 h-[50px] w-[100px]' key={index}>
                        <Link href={link.path}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;