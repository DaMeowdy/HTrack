import type { Hormone } from "models/Hormone";
import type { Dosage } from "models/Dosage";
import { OtherAnalogue } from "models/OtherAnalogues";
import { Injection } from "models/Injection";
import { GenerateID } from "./IDGeneration";

export const CreateDosage = (isMain:boolean, amount: number, concentration: string | undefined, hormone: Hormone) => {
    let id = GenerateID("DOSAGE")
    if(hormone instanceof OtherAnalogue)
    {
        let dosage: Dosage = {
            dosageID: "",
            isMainDosage: isMain,
            concentration: null,
            amount: amount,
            Hormone: hormone,
            Doses: []
        }
        return dosage;
    }
    if(hormone instanceof Injection)
    {
        let dosage: Dosage = {
            dosageID: "",
            isMainDosage: isMain,
            concentration: concentration as string | null,
            amount: amount,
            Hormone: hormone,
            Doses: []
        }
        return dosage;
    }
}