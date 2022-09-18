import { Response, Request } from 'express'
import { verifyUserEmailService } from '../../../../services/user/self/update/verifyEmail.service'

export const verifyUserEmailController = async (req: Request, res: Response) => {
	const id = req.user.id

	await verifyUserEmailService(id)
	
	return res.json({ message: 'Your email has been successfully confirmed' })
}
