export interface Project {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    image?: string;
}

export interface Skill {
    name: string;
    category: string;
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
    type?: 'work' | 'education';
}

export interface Hobby {
    name: string;
    description?: string;
    icon?: string;
}

export interface PortfolioData {
    name: string;
    title: string;
    bio: string;
    email: string;
    github: string;
    linkedin: string;
    xing?: string;
    avatar?: string;
    hobbyImage?: string;
    aboutImage?: string;
    aboutBio?: string;
    projects: Project[];
    skills: Skill[];
    experience: Experience[];
    hobbies: Hobby[];
}
