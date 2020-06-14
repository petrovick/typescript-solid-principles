// Patch existing data with my new data inserted below.
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
