import { IChildUserModel, ILoginUserModel } from "./child-user.model";

export const USER: IChildUserModel = {
    id: 1,
    name: 'Admin',
    email: 'admin@sicpa.com',
    date: new Date(2023, 8, 15),
    status: true
};


export const LOGIN: ILoginUserModel = {
    email: 'admin@sicpa.com',
    password: 'admin123'
};

