import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const usersRoute = Router()

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Malcolm' }];
    res.status(StatusCodes.OK).json(users);
});

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
});

usersRoute.post('/users/:uuid', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put('/users', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body

    modifiedUser.uuid = uuid
    res.status(StatusCodes.CREATED).send(modifiedUser);
});

usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    res.status(StatusCodes.OK);
});

export default usersRoute;