import { Applicant, ApplicantToAdd, ApplicantToSet } from '../models/applicant.model';

export const applicants: Applicant[] = [];
let nextApplicantId = 1;

export const addApplicant = (applicantToAdd: ApplicantToAdd): Applicant => {
    const applicant: Applicant = { id: nextApplicantId++, ...applicantToAdd };
    applicants.push(applicant);
    return applicant;
};

export const getApplicants = (): Applicant[] => applicants;

export const getApplicantById = (id: number): Applicant | undefined => {
    return applicants.find(applicant => applicant.id === id);
};

export const updateApplicant = (id: number, applicantToSet: ApplicantToSet): Applicant | undefined => {
    const applicant = getApplicantById(id);
    if (applicant) {
        Object.assign(applicant, applicantToSet);
        return applicant;
    }
    return undefined;
};

export const deleteApplicant = (id: number): boolean => {
    const index = applicants.findIndex(applicant => applicant.id === id);
    if (index !== -1) {
        applicants.splice(index, 1);
        return true;
    }
    return false;
};
