import { Request, Response } from 'express';
import { exampleService } from '../services/exampleService';

export const getExample = (req: Request, res: Response) => {
  const data = exampleService();
  res.json({ message: data });
};
