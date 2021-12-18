import { NestMiddleware, Req } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

// export class Logger implements NestMiddleware{
//     use(req: Request, res: Response, next: NextFunction){
//         console.log(`We Got Request...`);

//         next();
//     }
// }
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('We got request');
  next();
}
