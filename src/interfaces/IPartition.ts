import PartitionFields from "../components/PartitionDetail/PartitionFields"

export default interface IPartition {
    id: string,
    name: string,
    mediaType: MediaType
    [PartitionFields.SlotIQ]: boolean
    
}

export enum MediaType {
    LTO = "LTO",
    LTOClean = "LTO Clean"
}