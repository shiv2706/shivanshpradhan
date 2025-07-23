'use client'
import '../index.css'
import { useState, useEffect } from 'react'
import {Link, Navigate} from "react-router-dom";
import {
    ArrowPathIcon,
    ChevronRightIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon, CheckIcon
} from '@heroicons/react/20/solid'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { BoltIcon, CalendarDaysIcon, UsersIcon } from '@heroicons/react/24/outline'
import { motion } from "framer-motion";
import ScrollAnimate from "../components/scrollanimation.jsx";
import ContactForm from "../components/form.jsx";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
import EducationTimeline from '../components/education';


const footerNavigation = {
    solutions: [
        { name: 'Hosting', href: '#' },
        { name: 'Data Services', href: '#' },
        { name: 'Uptime Monitoring', href: '#' },
        { name: 'Enterprise Services', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Reference', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    legal: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
    social: [
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/_shiivanxh_06/',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: 'https://github.com/shiv2706',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Linkedin',
            href: 'https://www.linkedin.com/in/shivansh-pradhan-31572625a/details',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.411c0-1.29-.026-2.953-1.8-2.953-1.801 0-2.078 1.406-2.078 2.86v5.504h-3v-10h2.877v1.368h.041c.4-.756 1.377-1.55 2.834-1.55 3.031 0 3.625 1.993 3.625 4.583v5.599z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}
const posts = [
    {
        id: 1,
        title: 'SKILLMATE',
        href: 'https://skill-mate-frontend.vercel.app/',
        description:
            'A MERN-based platform that helps users discover professionals, post jobs, and apply based on skills. Built with clean UI and smart filtering.',
        imageUrl:
            '/images/skillmate.png',
        date: 'April 2025',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        skills: ["React.js", "Node.js" , "Express.js", "MongoDB" , "Tailwind" , "Gemini"],
    },
    {
        id: 2,
        title: 'FinSmart',
        href: 'https://finance-management-portal-frontend.vercel.app/',
        description: 'An intelligent finance tracker using OCR for bill extraction, charts for visual analytics and a personalised chat-bot offering a smooth experience to manage income and expenses.',
        imageUrl:
            '/images/Finsmart.png',
        date: 'Feb 2025',
        datetime: '2020-03-10',
        category: { title: 'Sales', href: '#' },
        author: {
            name: 'Lindsay Walton',
            role: 'Front-end Developer',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        skills: ["React.js", "Node.js" , "Express.js", "MongoDB" , "Tesseract.js" , "Gemini" , "RAG" , "Chart.js"],
    },
    {
        id: 3,
        title: 'Portfolio website',
        href: '#',
        description:
            'A personal website built to highlight projects, showcase skills, and create a strong online presence with a clean and smooth ui built using React and Tailwind CSS.',
        imageUrl:
            '/images/portfoliosite.png',
        date: 'Jul 2025',
        datetime: '2020-02-12',
        category: { title: 'Business', href: '#' },
        author: {
            name: 'Tom Cook',
            role: 'Director of Product',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        skills: ["React.js", "Tailwind CSS", "Javascript" , "Framer Motion Library" ],
    },
]
const steps = [
    { name: 'Create account', description: 'Vitae sed mi luctus laoreet.', href: '#', status: 'complete' },
    {
        name: 'Profile information',
        description: 'Cursus semper viverra facilisis et et some more.',
        href: '#',
        status: 'current',
    },
    { name: 'Business information', description: 'Penatibus eu quis ante.', href: '#', status: 'upcoming' },
    { name: 'Theme', description: 'Faucibus nec enim leo et.', href: '#', status: 'upcoming' },
    { name: 'Preview', description: 'Iusto et officia maiores porro ad non quas.', href: '#', status: 'upcoming' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const HomePage = () =>{
    const [solved, setSolved] = useState(null)
    const [easySolved, setEasySolved] = useState(null)
    const [medSolved, setMedSolved] = useState(null)
    const [hardSolved, setHardSolved] = useState(null)

    const { ref, inView } = useInView({
        triggerOnce: false,     // Only trigger once
        threshold: 0.3,         // Percentage of the component in view before triggering
    });

    useEffect(() => {
        fetch(`https://leetcode-stats-api.herokuapp.com/shivanshhh_27`)
            .then(res => res.json())
            .then(data => {
                setSolved(data.totalSolved);
                setEasySolved(data.easySolved);
                setMedSolved(data.mediumSolved);
                setHardSolved(data.hardSolved);
            })
            .catch(err => console.error('Error fetching stats:', err));
    }, []);

    return (
        <div className="bg-gray-900">
            {/* Header */}
            <header className="absolute  border-gray-300 inset-x-0 top-0 z-50 ">
                {/*<Header/>*/}
                <nav aria-label="Global" className="flex items-center justify-center p-6 lg:px-8">
                    {/*<div className="flex lg:hidden">*/}
                    {/*    <button*/}
                    {/*        type="button"*/}
                    {/*        onClick={() => setMobileMenuOpen(true)}*/}
                    {/*        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer"*/}
                    {/*    >*/}
                    {/*        <span className="sr-only">Open main menu</span>*/}
                    {/*        <Bars3Icon aria-hidden="true" className="size-6"/>*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                    <div className="hidden lg:flex lg:gap-x-12">

                        <a href="#about-section" className="sm:text-xl font-semibold text-white transition-transform duration-300 hover:scale-110 cursor-pointer hover:text-indigo-500" onClick="">
                            About
                        </a>
                        <a href="/resume.pdf" target="_blank"  className="sm:text-xl font-semibold text-white cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-indigo-500" onClick="">
                            Resume
                        </a>
                        <a href="#project-section" className="sm:text-xl font-semibold text-white cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-indigo-500" onClick="">
                            Projects
                        </a>
                        <a href="#contact-section" className="sm:text-xl font-semibold text-white cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-indigo-500" onClick="">
                            Contact
                        </a>
                    </div>
                </nav>
                {/*<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">*/}
                {/*    <div className="fixed inset-0 z-50"/>*/}
                {/*    <DialogPanel*/}
                {/*        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">*/}
                {/*        <div className="flex items-center justify-between">*/}
                {/*            <button onClick="" className="-m-1.5 p-1.5">*/}
                {/*                <span className="sr-only">Your Company</span>*/}
                {/*                <h1 className="text-xl font-bold tracking-tight text-balance text-blue-900 cursor-pointer sm:text-2xl">SKILLMATE</h1>*/}
                {/*            </button>*/}
                {/*            <button*/}
                {/*                type="button"*/}
                {/*                onClick={() => setMobileMenuOpen(false)}*/}
                {/*                className="-m-2.5 rounded-md p-2.5 text-gray-700"*/}
                {/*            >*/}
                {/*                <span className="sr-only">Close menu</span>*/}
                {/*                <XMarkIcon aria-hidden="true" className="size-6"/>*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*        <div className="mt-6 flow-root">*/}
                {/*            <div className="-my-6 divide-y divide-gray-500/10">*/}
                {/*                <div className="space-y-2 py-6">*/}
                {/*                    <button*/}
                {/*                        className="sm:text-xl font-semibold text-gray-900 transition-transform duration-300 hover:scale-110 cursor-pointer hover:text-indigo-500"*/}
                {/*                        onClick="">*/}
                {/*                        About*/}
                {/*                    </button>*/}
                {/*                </div>*/}
                {/*                <div className="space-y-2 py-6">*/}
                {/*                    <button*/}
                {/*                        className="sm:text-xl font-semibold text-gray-900 cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-indigo-500"*/}
                {/*                        onClick="">*/}
                {/*                        Resume*/}
                {/*                    </button>*/}
                {/*                </div>*/}
                {/*                <div className="space-y-2 py-6">*/}
                {/*                    <button*/}
                {/*                        className="sm:text-xl font-semibold text-gray-900 cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-indigo-500"*/}
                {/*                        onClick="">*/}
                {/*                        Projects*/}
                {/*                    </button>*/}
                {/*                </div>*/}
                {/*                <div className="space-y-2 py-6">*/}
                {/*                    <button*/}
                {/*                        className="sm:text-xl font-semibold text-gray-900 cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-indigo-500"*/}
                {/*                        onClick="">*/}
                {/*                        Contact*/}
                {/*                    </button>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </DialogPanel>*/}
                {/*</Dialog>*/}

            </header>
            <main>
                {/* Hero section */}
                <div className="relative isolate overflow-hidden">
                    <svg
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-white/10"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={-1}
                                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0} />
                    </svg>
                    <div
                        aria-hidden="true"
                        className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                            }}
                            className="aspect-1108/632 w-277 bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                        />
                    </div>
                    <div id="about-section" className="mx-auto max-w-7xl border-b px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                        <ScrollAnimate
                            initial={{x: -50 , opacity: 0}}
                            animate={{x: 0, opacity: 1}}>
                            <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
                                <h1 className="mt-0 text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl text-center sm:text-left">
                                    Shivansh Pradhan
                                </h1>
                                <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8 text-center sm:text-left">
                                    I'm a passionate and driven full-stack developer with a strong foundation in the MERN stack and a deep interest in building real-world, user-focused web applications.
                                    I love crafting clean, efficient code and bringing ideas to life through intuitive, scalable digital experiences.
                                </p>
                                <div className="mt-10 flex justify-center sm:justify-start items-center gap-x-6 ">
                                    <a
                                        href="/resume.pdf" target="_blank"
                                        className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                                    >
                                        View Resume
                                    </a>
                                    <a href="#project-section" className="text-sm/6 font-semibold text-white">
                                        View Projects <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </ScrollAnimate>

                        <ScrollAnimate
                            initial={{y: 50 , opacity: 0}}
                            animate={{y: 0, opacity: 1}}>
                            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
                                <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                                    <img
                                        alt="Profile IMage"
                                        src="/images/profilepicss.jpg"
                                        width={243}
                                        height={144}
                                        className="w-80 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                                    />
                                </div>
                            </div>
                        </ScrollAnimate>

                    </div>
                </div>

                {/* Skills section */}

                <div className="mx-auto mt-20 max-w-7xl border-b px-6 lg:mt-20 lg:px-8 ">
                    <ScrollAnimate
                        initial={{y: -40 , opacity: 0}}
                        animate={{y: 0, opacity: 1}}>
                        <h2 className="text-center text-3xl font-semibold text-indigo-400">
                            SKILLS
                        </h2>
                    </ScrollAnimate>
                    <ScrollAnimate
                        initial={{y: 50 , opacity: 0}}
                        animate={{y: 0, opacity: 1}}>
                        <div className="mx-auto mt-10 flex max-w-lg mb-10 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl lg:mx-0 lg:max-w-none sm:gap-x-30">
                            <div className="hover:scale-110 transition-transform duration-300">
                                <img
                                    alt="Transistor"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
                                    width={158}
                                    height={48}
                                    className="col-span-2 max-h-12 w-full object-contain "
                                />
                                <p className="text-white text-center pt-2">
                                    React.js
                                </p>
                            </div>

                            <div className="hover:scale-110 transition-transform duration-300">
                                <img
                                    alt="Transistor"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Font_Awesome_5_brands_node-js.svg/640px-Font_Awesome_5_brands_node-js.svg.png"
                                    width={158}
                                    height={48}
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
                                />
                                <p className="text-white text-center pt-2">
                                    Node.js
                                </p>
                            </div>

                            <div className="hover:scale-110 transition-transform duration-300">
                                <img
                                    alt="Transistor"
                                    src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png?20170429090805"
                                    width={158}
                                    height={48}
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
                                />
                                <p className="text-white text-center pt-2 ">
                                    Express.js
                                </p>
                            </div>

                            <div className="hover:scale-110 transition-transform duration-300">
                                <img
                                    alt="Transistor"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Mongodb-icon.svg/640px-Mongodb-icon.svg.png"
                                    width={158}
                                    height={48}
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
                                />
                                <p className="text-white text-center pt-2">
                                    MongoDB
                                </p>
                            </div>

                            <div className="hover:scale-110 transition-transform duration-300">
                                <img
                                    alt="Transistor"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Javascript_Logo.png/640px-Javascript_Logo.png"
                                    width={158}
                                    height={48}
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
                                />
                                <p className="text-white text-center pt-2">
                                    Javascript
                                </p>
                            </div>

                            <div className="hover:scale-110 transition-transform duration-300">
                                <img
                                    alt="Transistor"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Devicon-html5-plain.svg/640px-Devicon-html5-plain.svg.png"
                                    width={158}
                                    height={48}
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
                                />
                                <p className="text-white text-center pt-2">
                                    HTML
                                </p>
                            </div>

                            <div className="hover:scale-110 transition-transform duration-300">
                                <img
                                    alt="Transistor"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                                    width={158}
                                    height={48}
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
                                />
                                <p className="text-white text-center pt-2">
                                    CSS
                                </p>
                            </div>

                            <div className="hover:scale-110 transition-transform duration-300">
                                <img
                                    alt="Transistor"
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
                                    width={158}
                                    height={48}
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
                                />
                                <p className="text-white text-center pt-2">
                                    JAVA
                                </p>
                            </div>

                            <div className="hover:scale-110 transition-transform duration-300">
                                <img
                                    alt="Transistor"
                                    src="https://img.icons8.com/?size=512&id=40669&format=png"
                                    width={158}
                                    height={48}
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
                                />
                                <p className="text-white text-center pt-2">
                                    C++
                                </p>
                            </div>


                        </div>
                    </ScrollAnimate>

                </div>

                {/* project section */}
                <div id="project-section" className="mx-auto mt-20 mb-20 lg:mb-30 border-b max-w-7xl px-6 sm:mt-30 lg:px-8">
                    <ScrollAnimate
                        initial={{y: 50 , opacity: 0}}
                        animate={{y: 0, opacity: 1}}>
                        <div className="mx-auto max-w-2xl text-center lg:text-center">
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-indigo-400 sm:text-5xl lg:text-balance">
                                Projects I've worked on
                            </p>
                        </div>
                    </ScrollAnimate>
                    <ScrollAnimate
                        initial={{y: 70 , opacity: 0}}
                        animate={{y: 0, opacity: 1}}>
                        <div className="mx-auto mt-16 mb-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {posts.map((post) => (
                                <article key={post.id} className="flex flex-col items-start justify-between">
                                    <a className="relative w-full hover:scale-105 transition-transform duration-300 cursor-pointer group block"
                                       href={post.href} target="_blank">
                                        <img
                                            alt=""
                                            src={post.imageUrl}
                                            className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                                        />
                                        <div className="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10" />
                                        <div className="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10 bg-black bg-opacity-10 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 ">
                                            <span className="text-white text-lg font-semibold">View Site</span>
                                        </div>
                                    </a>
                                    <div className="flex max-w-xl grow flex-col justify-between">
                                        <div className="group relative grow">
                                            <h3 className="mt-3 text-lg/6 font-semibold text-white ">
                                                <p className="text-center">{post.title}</p>
                                            </h3>

                                            <p className="mt-5  text-center text-sm/6 text-white">{post.description}</p>
                                        </div>
                                        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-4 justify-center">
                                            {post.skills.map((skill) => (
                                                <h1 className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                                                    {skill}
                                                </h1>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </ScrollAnimate>

                </div>
                {/*Leetcode section*/}
                <div className="border-b pb-30">
                    <ScrollAnimate
                        initial={{y: -50 , opacity: 0}}
                        animate={{y: 0, opacity: 1}}>
                        <div className="mx-auto max-w-2xl text-center lg:text-center mb-10 lg:mb-20">
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-indigo-400 sm:text-5xl lg:text-balance">
                                My Leetcode Stats 🔥
                            </p>
                            <p className="mt-4 text-xl font-semibold tracking-tight text-pretty text-gray-400 sm:text-xl lg:text-balance">
                                Solving real-world problems daily – here’s a glimpse of my LeetCode progress.
                            </p>
                        </div>
                    </ScrollAnimate>

                    <ScrollAnimate
                        initial={{y: 50 , opacity: 0}}
                        animate={{y: 0, opacity: 1}}>
                        <div className="bg-gray-900" ref={ref}>
                            <div className="mx-auto max-w-7xl">
                                <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

                                    <div className="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
                                        <p className="text-4xl font-medium text-gray-400">Total Solved</p>
                                        <p className="mt-2 flex items-baseline gap-x-2">
                                            <span className="text-4xl font-semibold tracking-tight text-white">{inView && <CountUp end={solved} duration={3}  />}</span>
                                        </p>
                                    </div>
                                    <div className="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
                                        <p className="text-4xl font-medium text-green-400">Easy</p>
                                        <p className="mt-2 flex items-baseline gap-x-2">
                                            <span className="text-4xl font-semibold tracking-tight text-green-400">{inView && <CountUp end={easySolved} duration={3} />}</span>
                                        </p>
                                    </div>
                                    <div className="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
                                        <p className="text-4xl font-medium text-yellow-600">Medium</p>
                                        <p className="mt-2 flex items-baseline gap-x-2">
                                            <span className="text-4xl font-semibold tracking-tight text-yellow-600">{inView && <CountUp end={medSolved} duration={3} />}</span>
                                        </p>
                                    </div>
                                    <div className="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
                                        <p className="text-4xl font-medium text-red-500">Hard</p>
                                        <p className="mt-2 flex items-baseline gap-x-2">
                                            <span className="text-4xl font-semibold tracking-tight text-red-500">{inView && <CountUp end={hardSolved} duration={3} />}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimate>

                </div>
                {/*education section*/}
                <div className="pb-0">
                    <ScrollAnimate
                        initial={{y: -50 , opacity: 0}}
                        animate={{y: 0, opacity: 1}}>
                        <div className="mx-auto max-w-2xl text-center mt-30 lg:text-center mb-10 lg:mb-20">
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-indigo-400 sm:text-5xl lg:text-balance">
                                Education
                            </p>
                        </div>
                    </ScrollAnimate>
                    <div>
                        <ScrollAnimate
                            initial={{x: -50 , opacity: 0}}
                            animate={{x: 0, opacity: 1}}>
                            <EducationTimeline/>
                        </ScrollAnimate>

                    </div>
                </div>

                {/*contact section*/}
                <div id="contact-section" className="relative border-t border-gray-800 isolate mt-30 bg-gray-900">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
                            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                                <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-900 ring-1 ring-white/10 lg:w-1/2">
                                    <svg
                                        aria-hidden="true"
                                        className="absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-white/10"
                                    >
                                        <defs>
                                            <pattern
                                                x="100%"
                                                y={-1}
                                                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                                width={200}
                                                height={200}
                                                patternUnits="userSpaceOnUse"
                                            >
                                                <path d="M130 200V.5M.5 .5H200" fill="none" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" strokeWidth={0} className="fill-gray-900" />
                                        <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                                            <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                        </svg>
                                        <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
                                    </svg>
                                    <div
                                        aria-hidden="true"
                                        className="absolute top-[calc(100%-13rem)] -left-56 block transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
                                    >
                                        <div
                                            style={{
                                                clipPath:
                                                    'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                                            }}
                                            className="aspect-1155/678 w-288.75 bg-linear-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                                        />
                                    </div>
                                </div>
                                <ScrollAnimate
                                    initial={{x: -50 , opacity: 0}}
                                    animate={{x: 0, opacity: 1}}>
                                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-indigo-400 sm:text-5xl">Get in touch</h2>
                                    <p className="mt-6 text-lg/8 text-gray-400">
                                        Whether you have an opportunity, a question, or just want to say hello — feel free to drop a message. I’ll get back to you as soon as possible!
                                    </p>
                                    <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
                                        <div className="flex gap-x-4">
                                            <dt className="flex-none">
                                                <span className="sr-only">Address</span>
                                                <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                            </dt>
                                            <dd>
                                                Gurugram, India
                                            </dd>
                                        </div>

                                        <div className="flex gap-x-4">
                                            <dt className="flex-none">
                                                <span className="sr-only">Email</span>
                                                <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                            </dt>
                                            <dd>
                                                <a href="mailto:hello@example.com" className="hover:text-white">
                                                    shivansh4858@gmail.com
                                                </a>
                                            </dd>
                                        </div>
                                        <div className="flex gap-x-4">
                                            <dt className="flex-none">
                                                <span className="sr-only">Email</span>
                                                <AcademicCapIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                            </dt>
                                            <dd>
                                                <a href="mailto:hello@example.com" className="hover:text-white">
                                                    Manipal University Jaipur
                                                </a>
                                            </dd>
                                        </div>
                                    </dl>
                                </ScrollAnimate>

                            </div>
                        </div>
                        <ScrollAnimate
                            initial={{y: 50 , opacity: 0}}
                            animate={{y: 0, opacity: 1}}>
                            <ContactForm/>
                        </ScrollAnimate>

                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="mx-auto max-w-7xl px-6  lg:px-8">
                <div className="border-t border-white/10 py-12 md:flex md:items-center md:justify-between">
                    <div className="flex justify-center gap-x-6 md:order-2">
                        {footerNavigation.social.map((item) => (
                            <a key={item.name} href={item.href} target="_blank" className="text-gray-400 hover:text-gray-300">
                                <span className="sr-only">{item.name}</span>
                                <item.icon aria-hidden="true" className="size-6" />
                            </a>
                        ))}
                    </div>
                    <p className="mt-8 text-center text-sm/6 text-gray-400 md:order-1 md:mt-0">
                        &copy; 2025 Shivansh Pradhan. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default HomePage;