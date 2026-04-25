import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Todos{
    id: string;
    title: string;
    completed: boolean;
    userId:string
}

export interface User {
    picture: {
        large: string |StaticImport |undefined;
    };
    name: {
        first: string;
        last: string;
    };
    location: {
        city: string;
        coordinates: {
            latitude: string;
            longitude: string;
        };
    };
    email: string;
    phone: string;
    login: {
        username: string;
    };
}