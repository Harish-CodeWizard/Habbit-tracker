import { Request, Response, NextFunction } from 'express';

// Development: allow all requests and set a fake user
export function authMiddleware(req: Request, res: Response, next: NextFunction) {
	req.user = { id: 1 }; // Simulate a logged-in user with id 1
	next();
}
