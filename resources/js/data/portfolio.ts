import type { PortfolioData } from '@/types/portfolio';

export const portfolioData: Record<'en' | 'de', PortfolioData> = {
    en: {
        name: 'Moritz Fuchs',
        title: 'Lead Full Stack Developer',
        bio: 'Passionate lead developer with expertise in Laravel, Vue.js, and modern web technologies. I lead a team of developers and build scalable applications with a focus on clean code and user experience.',
        email: 'business@fox-byte.de',
        github: 'https://github.com/mrtzfchs',
        linkedin: 'https://linkedin.com/in/moritz-fuchs-327a61289',
        xing: 'https://www.xing.com/profile/Moritz_Fuchs099410/web_profiles',
        avatar: '/mfuchs_.jpeg',
        hobbyImage: '/mfuchs.jpeg',
        aboutImage: '/mfuchs_laracon.jpeg',
        aboutBio:
            'I love being part of the vibrant Laravel community. Attending conferences like Laracon Amsterdam helps me stay at the forefront of modern web development and connect with other passionate developers.',
        projects: [
            {
                title: 'Mittelfrankencup',
                description:
                    'A full-featured member management solution built with Laravel, Inertia, and Vue 3.',
                tech: ['Laravel', 'Vue 3', 'Tailwind CSS', 'PostgreSQL'],
            },
        ],
        skills: [
            { name: 'PHP / Laravel', category: 'Backend' },
            { name: 'Laravel', category: 'Backend' },
            { name: 'JavaScript', category: 'Frontend' },
            { name: 'TypeScript', category: 'Frontend' },
            { name: 'Vue.js', category: 'Frontend' },
            { name: 'Tailwind CSS', category: 'Frontend' },
            { name: 'Bootstrap', category: 'Frontend' },
            { name: 'PostgreSQL', category: 'Backend' },
            { name: 'DB2', category: 'Backend' },
            { name: 'MySQL', category: 'Backend' },
            { name: 'Docker', category: 'DevOps' },
            { name: 'CI/CD', category: 'DevOps' },
            { name: 'Linux', category: 'Server' },
            { name: 'Debian', category: 'Server' },
            { name: 'Ubuntu', category: 'Server' },
            { name: 'Docker', category: 'Server' },
        ],
        experience: [
            {
                company: 'Roland Meinl Musikinstrumente GmbH & Co. KG',
                role: 'Lead Full-Stack Developer',
                period: '08/2024 - Present',
                description: 'Team Lead Development, Deputy Department Lead',
                type: 'work',
            },
            {
                company: 'Roland Meinl Musikinstrumente GmbH & Co. KG',
                role: 'Junior Full-Stack Developer',
                period: '08/2017 - 07/2024',
                description: '',
                type: 'work',
            },
            {
                company: 'Roland Meinl Musikinstrumente GmbH & Co. KG',
                role: 'Apprenticeship Merchant for Wholesale and Foreign Trade Management',
                period: '09/2015 - 06/2018',
                description: 'Focus on Wholesale',
                type: 'work',
            },
            {
                company: 'Mittelschule am Turm, Neustadt an der Aisch',
                role: 'Secondary School Certificate',
                period: '07/2015',
                description:
                    'Specialization in Informatics (IT), Business English Certificate',
                type: 'education',
            },
            {
                company: 'Grund- und Mittelschule, Diespeck',
                role: 'Primary School',
                period: '09/2004',
                description: '',
                type: 'education',
            },
        ],
        hobbies: [
            { name: 'Gaming', description: '', icon: 'Gamepad2' },
            {
                name: 'Making Music',
                description: 'Guitarist with passion',
                icon: 'Music',
            },
            { name: 'Hiking', description: '', icon: 'Mountain' },
            {
                name: 'Bow Shooting',
                description: 'Purely on artificial targets',
                icon: 'Target',
            },
            {
                name: 'Fitness',
                description: 'At least i try',
                icon: 'Dumbbell',
            },
            {
                name: 'Programming',
                description: 'Yes, even in my free time...',
                icon: 'Code',
            },
        ],
    },
    de: {
        name: 'Moritz Fuchs',
        title: 'Lead Full-Stack Entwickler',
        bio: 'Leidenschaftlicher Lead-Entwickler mit Expertise in Laravel, Vue.js und modernen Webtechnologien. Ich leite ein Entwicklerteam und erstelle skalierbare Anwendungen mit Fokus auf Clean Code und User Experience.',
        email: 'business@fox-byte.de',
        github: 'https://github.com/mrtzfchs',
        linkedin: 'www.linkedin.com/in/moritz-fuchs-327a61289',
        xing: '#',
        avatar: '/mfuchs_.jpeg',
        hobbyImage: '/mfuchs.jpeg',
        aboutImage: '/mfuchs_laracon.jpeg',
        aboutBio:
            'Ich liebe es, Teil der lebendigen Laravel-Community zu sein. Der Besuch von Konferenzen wie der Laracon Amsterdam hilft mir, an der Spitze der modernen Webentwicklung zu bleiben und mich mit anderen leidenschaftlichen Entwicklern zu vernetzen.',
        projects: [
            {
                title: 'Mittelfrankencup',
                description:
                    'Eine umfassende Mitgliederverwaltungslösung, erstellt mit Laravel, Inertia und Vue 3.',
                tech: ['Laravel', 'Vue 3', 'Tailwind CSS', 'PostgreSQL'],
            },
        ],
        skills: [
            { name: 'PHP / Laravel', category: 'Backend' },
            { name: 'Laravel', category: 'Backend' },
            { name: 'JavaScript', category: 'Frontend' },
            { name: 'TypeScript', category: 'Frontend' },
            { name: 'Vue.js', category: 'Frontend' },
            { name: 'Tailwind CSS', category: 'Frontend' },
            { name: 'Bootstrap', category: 'Frontend' },
            { name: 'PostgreSQL', category: 'Backend' },
            { name: 'DB2', category: 'Backend' },
            { name: 'MySQL', category: 'Backend' },
            { name: 'Docker', category: 'DevOps' },
            { name: 'CI/CD', category: 'DevOps' },
            { name: 'Linux', category: 'Server' },
            { name: 'Debian', category: 'Server' },
            { name: 'Ubuntu', category: 'Server' },
            { name: 'Docker', category: 'Server' },
        ],
        experience: [
            {
                company: 'Roland Meinl Musikinstrumente GmbH & Co. KG',
                role: 'Lead Full-Stack Entwickler',
                period: '08/2024 - Heute',
                description:
                    'Teamleitung Entwicklung, Stellvertretende Abteilungsleitung',
                type: 'work',
            },
            {
                company: 'Roland Meinl Musikinstrumente GmbH & Co. KG',
                role: 'Junior Full-Stack Entwickler',
                period: '08/2017 - 07/2024',
                description: '',
                type: 'work',
            },
            {
                company: 'Roland Meinl Musikinstrumente GmbH & Co. KG',
                role: 'Ausbildung Kaufmann Groß- und Außenhandelsmanagement',
                period: '09/2015 - 06/2018',
                description: 'Schwerpunkt Großhandel',
                type: 'work',
            },
            {
                company: 'Mittelschule am Turm, Neustadt an der Aisch',
                role: 'Mittlere Reife',
                period: '07/2015',
                description:
                    'Fachrichtung Informatik (EDV), Business English Abschluss',
                type: 'education',
            },
            {
                company: 'Grund- und Mittelschule, Diespeck',
                role: 'Grundschule',
                period: '09/2004',
                description: '',
                type: 'education',
            },
        ],
        hobbies: [
            { name: 'Gaming', description: '', icon: 'Gamepad2' },
            {
                name: 'Musik machen',
                description: 'Gitarrist aus Leidenschaft',
                icon: 'Music',
            },
            { name: 'Wandern', description: '', icon: 'Mountain' },
            {
                name: 'Bogenschießen',
                description: 'Ausschließlich auf künstliche Ziele',
                icon: 'Target',
            },
            {
                name: 'Fitness',
                description: 'Ich versuchs zumindest',
                icon: 'Dumbbell',
            },
            {
                name: 'Programmieren',
                description: 'Ja, auch in meiner Freizeit...',
                icon: 'Code',
            },
        ],
    },
};
