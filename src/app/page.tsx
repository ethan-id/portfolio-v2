'use client';

import {Github, Linkedin, Instagram, ExternalLink} from 'lucide-react';

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
        <div
            className='flex h-screen min-h-screen overflow-hidden text-white
      bg-[#0a192f] relative
      [--dot:rgba(255,255,255,0.05)]
      before:pointer-events-none before:absolute before:inset-0
      before:bg-[radial-gradient(var(--dot)_1px,transparent_1px)]
      before:[background-size:18px_18px]'
        >
            {/* Hero Section - Sticky Left Column */}
            <aside className='hidden lg:flex w-1/2 shrink-0'>
                <div className='sticky top-0 h-screen flex flex-col justify-center px-10 xl:px-20'>
                    <p className='text-[#64ffda] mb-3 text-sm md:text-base tracking-wide'>Hi, my name is</p>
                    <h1 className='text-4xl md:text-7xl font-bold mb-2 leading-tight'>Ethan Hancock.</h1>
                    <h2 className='text-3xl md:text-6xl font-semibold text-slate-300 mb-6 leading-tight'>
                        I build software.
                    </h2>
                    <p className='max-w-xl text-slate-300/90 text-base md:text-lg'>
                        I'm a software engineer focused on building accessible, performant, and beautiful web and
                        backend systems. Currently I'm a senior at Iowa State University and a SWE Intern at Corteva
                        Agriscience.
                    </p>

                    <div className='mt-8 flex items-center gap-3'>
                        <SocialLink
                            href='https://github.com/ethan-id'
                            label='GitHub'
                        >
                            <Github size={22} />
                        </SocialLink>
                        <SocialLink
                            href='https://www.linkedin.com/in/hancockethan/'
                            label='LinkedIn'
                        >
                            <Linkedin size={22} />
                        </SocialLink>
                        <SocialLink
                            href='https://www.instagram.com/ethan.idfk/'
                            label='Instagram'
                        >
                            <Instagram size={22} />
                        </SocialLink>
                    </div>
                </div>
            </aside>

            {/* Scrollable Right Column */}
            <main
                className='w-full lg:w-1/2 h-screen overflow-y-auto
        scroll-smooth [scrollbar-width:thin]
        [scrollbar-color:#64ffda_transparent]'
            >
                {/* Experience Section */}
                <section
                    id='experience'
                    className='px-6 md:px-10 xl:px-20 py-16 md:py-20'
                >
                    <SectionHeading>Experience</SectionHeading>

                    <ol className='relative border-l border-slate-700/60 pl-6 space-y-10'>
                        <li className='group'>
                            <span className='absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-[#64ffda] shadow-[0_0_0_4px_rgba(100,255,218,0.15)]' />
                            <h3 className='text-xl font-bold'>Software Engineer Intern · Corteva Agriscience</h3>
                            <p className='text-sm text-slate-400'>May 2025 – Aug 2025 · Johnston, IA</p>
                            <ul className='mt-3 space-y-2 text-slate-300 list-disc pl-4'>
                                <li>
                                    Developed <strong>Angular/.NET</strong> Web App for in-house Research Lab to track
                                    their projects' statuses, results, and other data
                                </li>
                                <li>
                                    Optimized .NET endpoint using split queries, cutting average request time by{' '}
                                    <strong>98.08%</strong> (18 seconds to 0.3 seconds)
                                </li>
                                <li>
                                    Built data migration service to migrate over <strong>2,000</strong> previous records
                                    into new database tables
                                </li>
                            </ul>
                        </li>

                        <li className='group'>
                            <span className='absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-[#64ffda] shadow-[0_0_0_4px_rgba(100,255,218,0.15)]' />
                            <h3 className='text-xl font-bold'>
                                Part-Time Student Software Engineer Apprentice · John Deere
                            </h3>
                            <p className='text-sm text-slate-400'>May 2021 – May 2025 · Ames, IA</p>
                            <ul className='mt-3 space-y-2 text-slate-300 list-disc pl-4'>
                                <li>
                                    Engineered a React app to manage 500+ feature toggles, improving scalability and DX.
                                </li>
                                <li>
                                    Converted legacy CommonJS packages into Federated ES Modules; cut consumer build
                                    times by 25%.
                                </li>
                                <li>
                                    Refactored a type-safety solution to TypeScript for better reliability and
                                    maintainability.
                                </li>
                                <li>
                                    Integrated Java Spring endpoints with an agentic chatbot using Python + OpenAI
                                    Assistants API.
                                </li>
                            </ul>
                        </li>

                        <li className='group'>
                            <span className='absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-[#64ffda] shadow-[0_0_0_4px_rgba(100,255,218,0.15)]' />
                            <h3 className='text-xl font-bold'>Software Engineer Intern · ProMax</h3>
                            <p className='text-sm text-slate-400'>Jan 2020 – Apr 2020 · Bettendorf, IA</p>
                            <ul className='mt-3 space-y-2 text-slate-300 list-disc pl-4'>
                                <li>
                                    Built a mobile e‑signature app in React Native for secure digital document signing.
                                </li>
                                <li>Worked within Agile practices to improve iteration speed and task ownership.</li>
                                <li>
                                    Presented updates and prototypes to leadership; acted as team lead among six
                                    interns.
                                </li>
                            </ul>
                        </li>
                    </ol>
                </section>

                {/* Projects Section */}
                <section
                    id='projects'
                    className='px-6 md:px-10 xl:px-20 py-16 md:py-20'
                >
                    <SectionHeading>Projects</SectionHeading>

                    <div className='grid md:grid-cols-2 gap-6 lg:gap-8'>
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className='group relative rounded-2xl p-[1px]
                  bg-gradient-to-br from-[#64ffda]/40 via-slate-700/20 to-transparent
                  hover:from-[#64ffda]/60 transition-colors'
                            >
                                <div
                                    className='rounded-2xl h-full bg-[#112240]/90 p-6
                  shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                  backdrop-blur-sm
                  motion-safe:transition
                  motion-safe:duration-300
                  motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1'
                                >
                                    <h3 className='text-lg md:text-xl font-semibold'>{project.title}</h3>
                                    <p className='text-slate-300 mt-2 mb-10'>{project.description}</p>

                                    <div className='absolute bottom-4 right-4 flex items-center gap-3'>
                                        {'link' in project && project.link && (
                                            <a
                                                href={project.link}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                aria-label={`Open ${project.title}`}
                                                className='text-[#64ffda] hover:text-white focus-visible:outline-none
                          focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2
                          focus-visible:ring-offset-[#0a192f] rounded-md
                          motion-safe:transition motion-safe:duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5'
                                            >
                                                <ExternalLink size={20} />
                                                <span className='sr-only'>External link</span>
                                            </a>
                                        )}
                                        <a
                                            href={project.githubLink}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            aria-label={`GitHub repo for ${project.title}`}
                                            className='text-[#64ffda] hover:text-white focus-visible:outline-none
                        focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2
                        focus-visible:ring-offset-[#0a192f] rounded-md
                        motion-safe:transition motion-safe:duration-200'
                                        >
                                            <Github size={20} />
                                            <span className='sr-only'>GitHub</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section
                    id='education'
                    className='px-6 md:px-10 xl:px-20 py-16 md:py-20'
                >
                    <SectionHeading>Education</SectionHeading>
                    <div className='rounded-xl border border-slate-700/50 bg-[#112240]/70 p-6 shadow-lg'>
                        <h3 className='text-xl font-bold'>B.S. Software Engineering · Iowa State University</h3>
                        <p className='text-sm text-slate-400'>Aug 2021 – Dec 2025</p>
                        <p className='mt-2 text-slate-300'>Pursuing a Bachelor of Science in Software Engineering.</p>
                    </div>
                </section>

                {/* Footer */}
                <footer className='text-center py-10 text-slate-400 text-sm'>
                    © {new Date().getFullYear()} Ethan Hancock. Built with Next.js & Tailwind CSS.
                </footer>
            </main>
        </div>
    );
}

function SectionHeading({children}: {children: React.ReactNode}) {
    return (
        <h2 className='text-2xl md:text-3xl font-semibold mb-8 tracking-tight flex items-center gap-3'>
            <span className='h-6 w-1 rounded bg-[#64ffda]' />
            <span className='text-[#64ffda]'>{children}</span>
        </h2>
    );
}

function SocialLink({href, label, children}: {href: string; label: string; children: React.ReactNode}) {
    return (
        <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={label}
            className='inline-flex items-center justify-center rounded-lg border border-slate-700/60
        bg-[#0f2146]/50 p-2 text-slate-300 hover:text-white hover:border-[#64ffda]/60
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2
        focus-visible:ring-offset-[#0a192f]
        motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5'
        >
            {children}
        </a>
    );
}
