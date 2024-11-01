/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from '../Navbar';
import Button from "@/components/global/Button";
import Image from 'next/image';
import Link from 'next/link';
const About = () => {
    const skills = [
        { id: 1, name: 'JavaScript', img: '/js.webp' },
        { id: 2, name: 'React', img: '/react.webp' },
        { id: 3, name: 'Next.js', img: '/next.webp' },
        { id: 4, name: 'Typescript', img: '/ts.webp' },
        { id: 5, name: 'Git', img: '/git.webp' },
        { id: 6, name: 'Sass', img: '/sass.webp' },
        { id: 7, name: 'Vue', img: '/vue.webp' },
        { id: 8, name: 'Mysql', img: '/mysql.webp' },
        { id: 9, name: 'PWA', img: '/pwa.webp' },
        { id: 10, name: 'Tailwind', img: '/tailwind.webp' },
        { id: 11, name: 'Redux', img: '/redux.webp' },
        { id: 12, name: 'Figma', img: '/figma.webp' },
        { id: 13, name: 'AWS', img: '/aws.webp' }

        // Add more skills here
    ];
    return (
        <div className="relative min-h-screen bg-cover bg-center">
            {/* Background Image */}
            <Image
                src="/peakpx.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="z-[-2]" // Lower z-index for background image
            />

            {/* Optional: Dark overlay to improve text readability */}
            <div className="absolute inset-0 bg-black opacity-30 z-[-1]"></div>

            {/* Navbar with higher z-index to ensure it's clickable */}
            <Navbar className="relative z-10" />

            {/* Content Section */}
            <div className="container mx-auto flex-col  items-center justify-center px-4 py-10 relative z-10">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-white text-[3.5rem]'> About Me.</h1>
                    <div className='border border-white w-[150px] h-[50px] text-white rounded-full text-sm flex items-center justify-around '>
                        <Link href="/" className="pl-3">home</Link>
                        <Link href="/about" className=' border-l-2 border-white pl-2 '>about me</Link>
                    </div>
                    <div className="flex items-center justify-between w-[800px] mt-8">
                        <Image src="/Man.jpeg" alt='me' width={300} height={600} />
                        <div className='text-white' >
                            <h1 className="text-3xl py-2">About Me</h1>
                            <div className="flex flex-col text-white gap-3 w-[400px] text-sm    ">
                                <p className=''>My name is <span className='font-bold'>Franklin Mike</span></p>

                                <p> As a Frontend Web Software Engineer with over 3 years of experience, I am skilled in using technologies such as React, Vue, and Nextjs with a strong foundation in Typescript.</p>
                                <p>
                                    I have a track record of delivering robust, visually appealing, and high-performing web  applications in a timely manner.</p>

                                <p>   My attention to detail and commitment to writing efficient code has allowed me to excel in every stage of the software development process, including agile methodologies, coding, debugging, testing, and maintenance. </p>

                                <p>  I'm always open to new projects and freelance collaborations,
                                    So if you want us to work together, get in touch! I don’t scratch!</p>
                            </div>
                            <div className="w-[350px] flex items-center justify-between mt-3">
                                <Button text="Hire Me" className="!bg-white !text-purple-600" />
                                <Button text="Resume" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* tools section  */}
                <div className="pt-20">
                    <h2 className="text-3xl text-white my-2 text-center">Stack and tools</h2>
                    {/* cards */}
                    <div className="grid grid-cols-6 gap-6">
                        {skills.map((skill) => (
                            <div
                                key={skill.id}
                                className="group text-center flex flex-col items-center justify-center p-4 bg-gray-100 h-[250px] rounded-sm shadow-md transition-all duration-300 transform hover:bg-purple-500 hover:scale-105"
                            >
                                <div className="mb-4">
                                    <Image
                                        src={skill.img}
                                        alt={`${skill.name} logo`}
                                        width={130}
                                        height={100}
                                        // className="mx-auto rounded-full transition-transform duration-500 ease-in-out group-hover:rotate-360"
                                        className="mx-auto rounded-full transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"
                                        style={{ transformOrigin: 'center' }}
                                    />
                                </div>
                                <p className="text-lg text-black group-hover:text-white transition-colors duration-300">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
        // </div >
    );
};

export default About;