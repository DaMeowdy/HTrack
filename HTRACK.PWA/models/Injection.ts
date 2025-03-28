import type { Hormone } from "./Hormone";
import type { HRTDirection } from "./HRTDirection";

export class Injection implements Hormone
{
    hormoneID: string;
    name: string;
    type: HRTDirection;
    constructor(hormoneID: string, name: string, type: HRTDirection)
    {
        this.hormoneID = hormoneID;
        this.name = name;
        this.type = type;
    }

}