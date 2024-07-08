import { Router, Request, Response } from 'express';
import { addPosition, getPositions, getPositionById, updatePosition, deletePosition } from '../services/position.service';

const router = Router();

router.get('/positions', (req: Request, res: Response) => {
    res.json(getPositions());
});

router.get('/positions/:id', (req: Request, res: Response) => {
    const position = getPositionById(Number(req.params.id));
    if (position) {
        res.json(position);
    } else {
        res.sendStatus(404);
    }
});

router.post('/positions', (req: Request, res: Response) => {
    const position = addPosition(req.body);
    res.status(201).location(`/positions/${position.id}`).json(position);
});

router.patch('/positions/:id', (req: Request, res: Response) => {
    const position = updatePosition(Number(req.params.id), req.body);
    if (position) {
        res.json(position);
    } else {
        res.sendStatus(404);
    }
});

router.delete('/positions/:id', (req: Request, res: Response) => {
    const success = deletePosition(Number(req.params.id));
    if (success) {
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

export default router;
