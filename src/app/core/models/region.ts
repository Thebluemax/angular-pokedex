export interface Region {
    id: number;
    name: string;
    locations: any[];
}

export interface Location {
    locations: any[];
    id: number;
    game_indices: any[];
    name: string;
    region: any;
}
