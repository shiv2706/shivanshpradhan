import React from "react";
import { motion } from "framer-motion";

const educationData = [
    {
        degree: "Bachelor of Technology (B.Tech)",
        institution: "Manipal University Jaipur",
        year: "2022 - Present",
        description: "Pursuing Computer Science and Engineering with a strong focus on software development and problem-solving.",
    },
    {
        degree: "Senior Secondary (12th)",
        institution: "Salwan Public School Gurgaon",
        year: "2021 - 2022",
        description: "Studied Physics, Chemistry, Mathematics, and Computer Science. Scored 93.5% overall.",
    },
    {
        degree: "Secondary (10th)",
        institution: "Salwan Public School Gurgaon",
        year: "2019-2020",
        description: "Completed secondary education with 96.5% overall.",
    },
];

const EducationTimeline = () => {
    return (
        <section className="py-10 px-4  md:px-10 bg-gray-900 text-white">
            <div className="relative border-l-4 border-indigo-500 ml-4">
                {educationData.map((edu, index) => (
                    <div
                        key={index}
                        className="mb-10 ml-6 relative"

                    >
                        <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-8.5 top-1.5"></div>
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <p className="text-sm text-gray-400">{edu.institution} • {edu.year}</p>
                        <p className="mt-2 text-gray-300">{edu.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EducationTimeline;