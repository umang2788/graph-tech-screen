import type { Request, Response } from "express";

export const route = (req: Request, res: Response) => {
  // Sample array
  const sampleArray = [1, 2, 3, 4, 5];

  // Perform some array operations
  const doubledArray = sampleArray.map((num) => num * 2);
  const filteredArray = sampleArray.filter((num) => num > 2);
  const sum = sampleArray.reduce((acc, num) => acc + num, 0);

  // Send the results as a response
  res.json({
    original: sampleArray,
    doubled: doubledArray,
    filtered: filteredArray,
    sum: sum,
  });
};

export default route;
