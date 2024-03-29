import PartitionFields from "../components/PartitionDetail/PartitionFields"

export default interface IPartition {
    id: string,
    name: string,
    mediaType: MediaType
    [PartitionFields.SlotIQ]: boolean
    [PartitionFields.BarcodeOptions]: IBarcodeOptions,
    [PartitionFields.Chambers]: IMediaChambers | ICleaningChambers,
    [PartitionFields.Drives]: Array<string>,
    [PartitionFields.CleaningPartition]: string | false
    [PartitionFields.MLMVerification]: IMLMVerificationConfig
    showAdvancedSettings?: boolean
    advancedSettingsConfrimed?: boolean
}

export enum MediaType {
    LTO = "LTO",
    LTOClean = "LTO Clean"
}

//Barcode Options 

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

//Chambers 

export interface IMediaChambers{
    storage: number,
    ee: number
}

export interface ICleaningChambers{
    clean: number
}

//MLM Verification 

export interface  IMLMVerificationConfig {
    preScan: boolean
    quickScan: boolean
}

//Advanced Settings 

interface IAdvancedSetting {
    isAdvanced: boolean
}

export interface IEmulationConfig extends IAdvancedSetting {
    Preset: string
}

export interface EmulationOptions extends IAdvancedSetting {
    inclTapeGen: boolean
}


