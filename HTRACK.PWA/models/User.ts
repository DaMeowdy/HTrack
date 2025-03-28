import type { Dosage } from "./Dosage"
import type { HRTDirection } from "./HRTDirection"
import type { Level } from "./Levels"
import type { Measurement } from "./MeasurementEnum"

export interface User {
    userId: string,
    username: string,
    pin : string // encrypted pin? salting? sha256hmac?
    recoveryPhrase : string
    preferredMeasurement: Measurement
    hrtDirection: HRTDirection
    dosages: Dosage[],
    levels: Level[]
};