export interface ICharacter{
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    image: string,
    origin: {
        name:string,
        url: string
    },
    location: {
        name:string,
        url?: string
    },
    created: string,
    characters: string[]
}