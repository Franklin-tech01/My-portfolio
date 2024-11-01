// // components/Typewriter.tsx
// "use client"
// import { useState, useEffect } from 'react';

// const Typewriter = () => {
//     const [text, setText] = useState('');
//     const fullText = "I am Franklin";

//     useEffect(() => {
//         let currentIndex = 0;

//         const intervalId = setInterval(() => {
//             setText((prev) => prev + fullText[currentIndex]);
//             currentIndex++;

//             if (currentIndex === fullText.length) {
//                 clearInterval(intervalId);
//             }
//         }, 150); // Adjust speed by changing the delay time

//         return () => clearInterval(intervalId);
//     }, []);

//     return (
//         <div className="typewriter">
//             <h1>{text}</h1>
//         </div>
//     );
// };

// export default Typewriter;
"use client";
import { useState, useEffect } from 'react';

const Typewriter = () => {
    const [text, setText] = useState('');
    const fullText = "Hi, I am Franklin";

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(intervalId);
            }
        }, 150); // Adjust speed by changing the delay time

        return () => clearInterval(intervalId);
    }, [fullText]);

    return (
        <div className="typewriter">
            <h1>{text}</h1>
        </div>
    );
};

export default Typewriter;