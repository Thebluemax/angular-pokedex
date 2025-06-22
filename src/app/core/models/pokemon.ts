export interface Pokemon {
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

// Factory function to create a Pokemon with default values
export function createPokemon(): Pokemon {
  return {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: '',
    moves: [],
    name: '',
    order: 0,
    past_types: [],
    species: { name: '', url: '' },
    sprites: createSprites(),
    stats: [],
    types: [],
    weight: 0
  };
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
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: Other;
  versions: Versions;
}

// Factory function to create Sprites with default values
function createSprites(): Sprites {
  return {
    back_default: null,
    back_female: null,
    back_shiny: null,
    back_shiny_female: null,
    front_default: null,
    front_female: null,
    front_shiny: null,
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default: null,
        front_female: null
      },
      home: {
        front_default: '',
        front_female: null,
        front_shiny: '',
        front_shiny_female: null
      },
      officialArtwork: {
        front_default: ''
      }
    },
    versions: {}
  };
}

interface Versions {
  // Add your versions properties here
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
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

interface Dreamworld {
  front_default: string | null;
  front_female: string | null;
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

