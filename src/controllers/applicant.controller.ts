import { Router, Request, Response } from 'express';
import { addApplicant, getApplicants, getApplicantById, updateApplicant, deleteApplicant } from '../services/applicant.service';

const router = Router();

router.post('/applicants', (req: Request, res: Response) => {
    const applicant = addApplicant(req.body);
    res.status(201).location(`/applicants/${applicant.id}`).json(applicant);
});

router.put('/applicants/:id', (req: Request, res: Response) => {
    const applicant = updateApplicant(Number(req.params.id), req.body);
    if (applicant) {
        res.json(applicant);
    } else {
        res.sendStatus(404);
    }
});

router.delete('/applicants/:id', (req: Request, res: Response) => {
    const success = deleteApplicant(Number(req.params.id));
    if (success) {
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

export default router;
