import Link from 'next/link';
import {Github, Linkedin, Instagram} from 'lucide-react';

const projects = [
    {
        title: 'Machine Learning on the Edge',
        description: 'ML-Powered Room Occupancy Tracking System for University Campuses',
        githubLink: 'https://github.com/ethan-id/sddec25-05-mirror'
    },
    {
        title: 'Find Your Park',
        link: 'https://www.find-your-park.com/',
        description: 'Explore all National Parks designated by the National Park Services.',
        githubLink: 'https://github.com/ethan-id/find-your-park'
    },
    {
        title: 'Dinder',
        link: 'https://www.youtube.com/watch?v=DoNjafJZINw&t=1s&ab_channel=EthanHancock',
        description: "Get matched with local restaurants based on your preferences or your group's.",
        githubLink: 'https://github.com/ethan-id/dinder'
    },
    {
        title: 'Scrabble Search',
        link: 'https://scrabble-search.vercel.app/',
        description: 'Search across 170k+ valid Scrabble words, see their point values, and calculate scores.',
        githubLink: 'https://github.com/ethan-id/scrabble-search'
    },
    {
        title: 'BizGlimpse',
        link: 'https://biz-glimpse.vercel.app/',
        description:
            'Get a glimpse of any publicly traded company via its ticker symbol, and chat with ChatGPT about the data.',
        githubLink: 'https://github.com/ethan-id/BizGlimpse'
    }
];

export default function Home() {
    return (
        <div className='flex bg-[#0a192f] text-white min-h-screen font-sans h-screen overflow-hidden'>
            {/* Hero Section - Sticky Left Column */}
            <aside className='hidden lg:flex w-1/2 flex-col justify-center items-start px-10 md:px-20 sticky top-0 h-screen overflow-hidden'>
                <div>
                    <p className='text-[#64ffda] mb-2 text-sm md:text-base'>Hi, my name is</p>
                    <h1 className='text-4xl md:text-7xl font-bold text-white mb-4'>Ethan Hancock.</h1>
                    <h2 className='text-3xl md:text-6xl font-bold text-gray-400 mb-6'>I build software.</h2>
                    <p className='max-w-xl text-gray-400 text-base md:text-lg'>
                        I'm a software engineer focused on building accessible, performant, and beautiful web and
                        backend systems. Currently I'm a senior at Iowa State University and a SWE Intern at Corteva
                        Agriscience.
                    </p>
                    <div className='mt-8 flex space-x-4'>
                        <a
                            href='https://github.com/ethan-id'
                            className='text-gray-400 hover:text-[#64ffda]'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/hancockethan/'
                            className='text-gray-400 hover:text-[#64ffda]'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href='https://www.instagram.com/ethan.idfk/'
                            className='text-gray-400 hover:text-[#64ffda]'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>
            </aside>

            {/* Scrollable Right Column */}
            <main className='w-full lg:w-1/2 h-screen overflow-y-auto'>
                {/* Experience Section */}
                <section
                    id='experience'
                    className='px-10 md:px-20 py-20'
                >
                    <h2 className='text-3xl font-semibold text-[#64ffda] mb-6'>Experience</h2>
                    <div className='space-y-8'>
                        <div>
                            <h3 className='text-xl font-bold text-white'>
                                Software Engineer Intern · Corteva Agriscience
                            </h3>
                            <span className='text-sm text-gray-400'>May 2025 – Aug 2025 · Johnston, IA</span>
                            <p className='mt-2 text-gray-300'>
                                Incoming Software Engineer Intern at Corteva Agriscience.
                            </p>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold text-white'>
                                Part-Time Student Software Engineer Apprentice · John Deere
                            </h3>
                            <span className='text-sm text-gray-400'>May 2021 – May 2025 · Ames, IA</span>
                            <ul className='mt-2 list-disc list-inside text-gray-300 space-y-1'>
                                <li>
                                    Engineered a React application to manage 500+ feature toggles, enhancing system
                                    scalability and developer experience
                                </li>
                                <li>
                                    Converted legacy CommonJS packages into Federated ES Modules, reducing consumer
                                    build times by 25%
                                </li>
                                <li>
                                    Refactored a package’s type-safety solution to TypeScript, improving code quality
                                    and reliability
                                </li>
                                <li>
                                    Integrated Java Spring endpoints with an agentic chat-bot using Python and OpenAI’s
                                    Assistants API
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold text-white'>Software Engineer Intern · ProMax</h3>
                            <span className='text-sm text-gray-400'>Jan 2020 – Apr 2020 · Bettendorf, IA</span>
                            <ul className='mt-2 list-disc list-inside text-gray-300 space-y-1'>
                                <li>
                                    Developed a mobile e-signature application using React Native for secure digital
                                    document signing
                                </li>
                                <li>
                                    Followed Agile development practices and methodologies to enhance iteration speed
                                    and divide tasks
                                </li>
                                <li>
                                    Presented project updates and prototypes to management, demonstrating strong
                                    communication and leadership as a team lead among six interns
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section
                    id='projects'
                    className='px-10 md:px-20 py-20'
                >
                    <h2 className='text-3xl font-semibold text-[#64ffda] mb-6'>Projects</h2>
                    <div className='grid md:grid-cols-2 gap-8'>
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className='bg-[#112240] p-6 rounded-lg shadow-md relative transform transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1'
                            >
                                <h3 className='text-xl font-semibold text-white'>{project.title}</h3>
                                <p className='text-gray-300 my-2'>{project.description}</p>
                                <div className='absolute bottom-4 right-4 flex space-x-4'>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            className='text-[#64ffda] hover:text-white'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                className='h-5 w-5'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke='currentColor'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth={2}
                                                    d='M14 3h7m0 0v7m0-7L10 14'
                                                />
                                            </svg>
                                        </a>
                                    )}
                                    <a
                                        href={project.githubLink}
                                        className='text-[#64ffda] hover:text-white'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section
                    id='education'
                    className='px-10 md:px-20 py-20'
                >
                    <h2 className='text-3xl font-semibold text-[#64ffda] mb-6'>Education</h2>
                    <div>
                        <h3 className='text-xl font-bold text-white'>
                            B.S. Software Engineering · Iowa State University
                        </h3>
                        <span className='text-sm text-gray-400'>Aug 2021 – Dec 2025</span>
                        <p className='mt-2 text-gray-300'>Pursuing a Bachelor of Science in Software Engineering.</p>
                    </div>
                </section>

                {/* Footer */}
                <footer className='text-center py-10 text-gray-500 text-sm'>
                    © {new Date().getFullYear()} Ethan Hancock. Built with Next.js & Tailwind CSS.
                </footer>
            </main>
        </div>
    );
}
