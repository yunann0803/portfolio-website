import { IconType } from 'react-icons/lib';

export interface IService {
    title: string,
    about: string,
    Icon: IconType
}

export interface Iskill {
    name: string,
    level: string,
    Icon: IconType
}

export interface Iproarc {
    id: number,
    name: string,
    description: string,
    image_path: string,
    deployed_url: string,
    category: Category[],
    key_techs: string[],
}

export type Category = "Work Projects" | "Student Projects" | "Articles";