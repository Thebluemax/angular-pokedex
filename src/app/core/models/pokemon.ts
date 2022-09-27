export class Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: BasicModel[];
  game_indices: Gameindex[];
  height: number;
  held_items: Helditem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: BasicModel;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}
interface BasicModel {
  name: string;
  url: string;
}

interface Gameindex {
  game_index: number;
  version: BasicModel;
}

interface Move {
  move: BasicModel;
  version_group_details: VersionGroupDetail[];
}


interface Type {
  slot: number;
  type: BasicModel;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: BasicModel;
}

interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: Other;
  versions: Versions;
}

interface Versions {

}



interface Redblue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

interface Other {
  dream_world: Dreamworld;
  home: Home;
  officialArtwork: OfficialArtwork;
}

interface OfficialArtwork {
  front_default: string;
}

interface Home {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

interface Dreamworld {
  front_default: string;
  front_female?: any;
}



interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: BasicModel;
  version_group: BasicModel;
}

interface Helditem {
  item: BasicModel;
  version_details: Versiondetail[];
}

interface Versiondetail {
  rarity: number;
  version: Ability;
}



interface Ability {
  ability: BasicModel;
  is_hidden: boolean;
  slot: number;
}

