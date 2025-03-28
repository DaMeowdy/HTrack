import type { Hormone } from "./Hormone";

export interface Dosage 
{
    dosageID: string
    isMainDosage: boolean
    concentration : string | null // can be null if not injection
    amount : number
    Hormone: Hormone
    Doses: []

};