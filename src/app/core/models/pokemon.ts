export class Pokemon {
    id:number;
    name:string;
    height:number;
    weight:number;
    base_experience:number;
    types?:any[];
    abilities?:any[];
    moves?:any[];
    sprites:Sprites;
}

export interface Sprites {
    back_default: string;
    back_female?: string;
    back_shiny: string;
    back_shiny_female?: string;
    front_default: string;
    front_female?: string;
    front_shiny: string;
    front_shiny_female?:string;
    other: Other;
}

interface Other {
  dream_world: any;
  home:any;
  oficialArtwork: any;
}
