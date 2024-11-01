"use client";
import { useState } from 'react';

const Tabs = () => {
    const experiences = [
        {
            tab: "Zarttech",
            title: "Frontend Engineer @ Zarttech (Netherlands)",
            period: "7/2024 - Present",
            details: [
                "Successfully launched Joble, resulting in a 25% increase in user engagement.",
                "Rebuilt and optimized the landing page, improving page load time by 30%.",
                "Received positive feedback from colleagues and managers for excellent teamwork and communication skills.",
            ],
        },
        {
            tab: "FirstaTech",
            title: "Frontend Engineer (Contract) @ FirstaTech (Calabar, Nigeria)",
            period: "05/2024 - 7/2024",
            details: [
                "Developed and maintained responsive web applications using React and TypeScript, improving user engagement by 30%.",
                "Integrated AWS services, decreasing API response times by 15%.",
                "Led development of products from system requirements to workload balancing and monitoring.",
                "Enriched system metrics with telemetry and correlation of APIs with vector contexts.",
                "Performed Continuous Integration/Deployment Pipeline Integration, code reviews, and various testing practices.",
            ],
        },
        {
            tab: "RealtorKingz",
            title: "Frontend Engineer (Contract) @ RealtorKingz (Abuja, Nigeria)",
            period: "03/2024 - Present",
            details: [
                "Developed and maintained responsive web applications using React and TypeScript, improving user engagement by 25%.",
                "Designed systems for marketing optimization experiments within the Prime ecosphere.",
                "Automated business logic for marketing experiments including A/B and Multivariate Testing.",
                "Improved application accessibility and cross-browser compatibility, expanding the user base by 10%.",
            ],
        },
        {
            tab: "Guru Innovation",
            title: "Lead Frontend Engineer @ Guru Innovation (Calabar, Nigeria)",
            period: "02/2023 - 05/2024",
            details: [
                "Collaborated with UX/UI designers, increasing user satisfaction by 30%.",
                "Led the development of an edtech platform, reporting directly to the COO.",
                "Optimized frontend performance, reducing page load times by 40%.",
                "Improved accessibility and cross-browser compatibility, expanding the user base by 10%.",
                "Automated UI testing, reducing manual testing time by 50% and increasing code reliability.",
            ],
        },
        {
            tab: "DevcirclesAfrica",
            title: "Software Engineer Intern @ DevcirclesAfrica (Lusaka, Zambia)",
            period: "06/2022 - 12/2022",
            details: [
                "Worked on the documentation sections of an edtech product.",
            ],
        },
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="flex flex-col md:flex-row gap-8">
            {/* Tabs on the left */}
            <div className="flex flex-col border-r-2 border-gray-200 pr-4">
                {experiences.map((experience, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`py-2 px-4 text-left hover:bg-gray-100 ${activeTab === index ? 'bg-gray-200 font-bold' : ''
                            }`}
                    >
                        {experience.tab}
                    </button>
                ))}
            </div>

            {/* Content on the right */}
            <div className="flex-1">
                <h3 className="text-xl font-bold">{experiences[activeTab].title}</h3>
                <p className="text-gray-500 mb-4">{experiences[activeTab].period}</p>
                <ul className="list-disc pl-5 space-y-2">
                    {experiences[activeTab].details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Tabs;
