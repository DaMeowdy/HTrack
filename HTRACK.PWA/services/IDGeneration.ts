export const GenerateID = (prefix: string) =>
{
    let newUUID = crypto.randomUUID();
    let fullUUID = `${prefix}:${newUUID}`;
    return fullUUID
}