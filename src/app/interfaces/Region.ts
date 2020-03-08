export interface Region {
    id: number;
    name:string;
    locations:any[];
}
export interface Location {
    areas:any[];
    id:number;
    name:string;
    region:any;
}