export interface Applicant {
    id: number;
    email: string;
    categories: string[];
    japaneseKnowledge: boolean;
    level: string;
}

export interface ApplicantToAdd {
    email: string;
    categories: string[];
    japaneseKnowledge: boolean;
    level: string;
}

export interface ApplicantToSet extends ApplicantToAdd {}
