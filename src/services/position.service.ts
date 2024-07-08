import { Position, PositionToAdd, PositionToPatch } from '../models/position.model';
import { Applicant } from '../models/applicant.model';
import { sendEmail } from './email.service';
import { applicants } from './applicant.service';

const positions: Position[] = [];
let nextPositionId = 1;

export const addPosition = (positionToAdd: PositionToAdd): Position => {
    const position: Position = { id: nextPositionId++, ...positionToAdd };
    positions.push(position);
    notifyApplicants(position);
    return position;
};

export const getPositions = (): Position[] => positions;

export const getPositionById = (id: number): Position | undefined => {
    return positions.find(position => position.id === id);
};

export const updatePosition = (id: number, positionToPatch: PositionToPatch): Position | undefined => {
    const position = getPositionById(id);
    if (position) {
        Object.assign(position, positionToPatch);
        return position;
    }
    return undefined;
};

export const deletePosition = (id: number): boolean => {
    const index = positions.findIndex(position => position.id === id);
    if (index !== -1) {
        const [deletedPosition] = positions.splice(index, 1);
        notifyApplicantsAboutRemoval(deletedPosition);
        return true;
    }
    return false;
};

const notifyApplicants = (position: Position) => {
    applicants.forEach(applicant => {
        if (
            applicant.categories.includes(position.category) &&
            applicant.level === position.level &&
            (applicant.japaneseKnowledge || !position.japaneseRequired)
        ) {
            sendEmail(applicant.email, 'New Job Position', `A new job position has been added: ${JSON.stringify(position)}`);
        }
    });
};

const notifyApplicantsAboutRemoval = (position: Position) => {
    applicants.forEach(applicant => {
        if (
            applicant.categories.includes(position.category) &&
            applicant.level === position.level &&
            (applicant.japaneseKnowledge || !position.japaneseRequired)
        ) {
            sendEmail(applicant.email, 'Job Position Removed', `A job position has been removed: ${JSON.stringify(position)}`);
        }
    });
};
