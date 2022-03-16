import PartitionFields from "../components/PartitionDetail/PartitionFields"

export default interface IPartition {
    id: string,
    name: string,
    mediaType: MediaType
    [PartitionFields.SlotIQ]: boolean
    [PartitionFields.BarcodeOptions]: IBarcodeOptions,

    
}

export enum MediaType {
    LTO = "LTO",
    LTOClean = "LTO Clean"
}

export interface IBarcodeOptions {
    checkSumBehavior: CheckSumBehavior,
    truncationOption: TruncationOptions,
    numReportedChars: number
}

export enum CheckSumBehavior {
    IGNORE="Ignore check-sum barcodes",
    NON="Non-check-summed-barcodes",
    CHECK="Check-summed barcodes"

} 
export enum TruncationOptions {
    RIGHT = "Report right-hand characters",
    LEFT = "Report left-hand characters"
}


