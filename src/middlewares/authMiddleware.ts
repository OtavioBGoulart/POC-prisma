import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";


export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "").trim();
    if (!token) return res.sendStatus(401);


  try {
    const { id } = jwt.verify(token, process.env.TOKEN_KEY) as JwtPayload;
    req.userId = id;


    return next();
  } catch (err) {
    res.status(401).send("Token inválido");
  }
}

export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
  userId: number;
};
