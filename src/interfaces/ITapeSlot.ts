export enum SlotType {
    DRIVE = "Drive",
    STORAGE = "Storage",
    EE = "Entry/Exit"
}

export interface ITapeSlot {
    id: string,
    type: "Drive" | "Storage" | "Entry/Exit",
    number: number,
    barcode?: string,
    location: string
}