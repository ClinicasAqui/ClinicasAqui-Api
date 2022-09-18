import { NextFunction, Request, Response } from 'express'
import { errorHandler } from '../../error/errorHandler'

export const verifyActiveMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	
	const { isActive } = req.user

	if (!isActive) {
		throw new errorHandler(401, 'user is not Active')
	}

	const { isVerify } = req.user

	if (!isVerify) {
		throw new errorHandler(401, 'user is not verified')
	}


	next()
}
