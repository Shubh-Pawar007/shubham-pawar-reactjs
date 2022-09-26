export interface Products{
    "_id"?: string,
    "name": string,
    "price": number,
    "category": string,
    "description": string,
    "avatar": string,
    "developerEmail": string
}

export interface Categories{
    "_id"?: string,
    "name": string,
    "createdAt": string,
    "updatedAt": string,
    "__v": number
}

export type paramType = {
    id: string;
  };