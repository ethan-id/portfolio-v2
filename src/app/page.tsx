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
        description: 'Explore all National Parks designated by the National Park Services.',
        githubLink: 'https://github.com/ethan-id/find-your-park'
    },
    {
        title: 'Dinder',
        description: "Get matched with local restaurants based on your preferences or your group's.",
        githubLink: 'https://github.com/ethan-id/dinder'
    },
    {
        title: 'Scrabble Search',
        description: 'Search across 170k+ valid Scrabble words, see their point values, and calculate scores.',
        githubLink: 'https://github.com/ethan-id/scrabble-search'
    },
    {
        title: 'BizGlimpse',
        description:
            'Get a glimpse of any publicly traded company via its ticker symbol, and chat with ChatGPT about the data.',
        githubLink: 'https://github.com/ethan-id/BizGlimpse'
    }
];

export default function Home() {
    return (
        <main className='bg-[#0a192f] text-white min-h-screen font-sans flex'>
            {/* Hero Section - Sticky Left Column */}
            <section className='hidden lg:flex w-1/2 h-screen flex-col justify-center items-start px-10 md:px-20 sticky top-0'>
                <p className='text-[#64ffda] mb-2 text-sm md:text-base'>Hi, my name is</p>
                <h1 className='text-4xl md:text-7xl font-bold text-white mb-4'>Ethan Hancock.</h1>
                <h2 className='text-3xl md:text-6xl font-bold text-gray-400 mb-6'>I build software.</h2>
                <p className='max-w-xl text-gray-400 text-base md:text-lg'>
                    I'm a software engineer focused on building accessible, performant, and beautiful web and backend
                    systems. Currently I'm a senior at Iowa State University and a SWE Intern at Corteva Agriscience.
                </p>
                <div className='mt-8 flex space-x-4'>
                    <Link
                        href='https://github.com/ethan-id'
                        className='text-gray-400 hover:text-[#64ffda]'
                    >
                        <Github size={24} />
                    </Link>
                    <Link
                        href='https://www.linkedin.com/in/hancockethan/'
                        className='text-gray-400 hover:text-[#64ffda]'
                    >
                        <Linkedin size={24} />
                    </Link>
                    <Link
                        href='https://www.instagram.com/ethan.idfk/'
                        className='text-gray-400 hover:text-[#64ffda]'
                    >
                        <Instagram size={24} />
                    </Link>
                </div>
            </section>

            {/* Scrollable Content - Right Column */}
            <div className='w-full lg:w-1/2 h-screen overflow-y-scroll'>
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
                            <span className='text-sm text-gray-400'>May 2025 – Aug 2025</span>
                            <p className='mt-2 text-gray-300'>
                                Incoming Software Engineer Intern at Corteva Agriscience.
                            </p>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold text-white'>
                                Part-Time Student Software Engineer Apprentice · John Deere
                            </h3>
                            <span className='text-sm text-gray-400'>May 2021 – May 2025</span>
                            <p className='mt-2 text-gray-300'>
                                Worked on various software engineering projects as a part-time student apprentice.
                            </p>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold text-white'>Software Engineering Intern · ProMax</h3>
                            <span className='text-sm text-gray-400'>Jan 2020 – Apr 2020</span>
                            <p className='mt-2 text-gray-300'>
                                Assisted in developing software solutions during internship tenure.
                            </p>
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
                                className='bg-[#112240] p-6 rounded-lg shadow-md'
                            >
                                <h3 className='text-xl font-semibold text-white'>{project.title}</h3>
                                <p className='text-gray-300 my-2'>{project.description}</p>
                                <a
                                    href={project.githubLink}
                                    className='text-[#64ffda] hover:underline'
                                >
                                    View source on GitHub
                                </a>
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
            </div>
        </main>
    );
}
