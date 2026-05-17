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

export interface PortfolioData {
    name: string;
    title: string;
    bio: string;
    email: string;
    github: string;
    linkedin: string;
    avatar?: string;
    projects: Project[];
    skills: Skill[];
    experience: Experience[];
}
