export default interface IPartition {
    id: string,
    name: string,
    mediaType: MediaType
    
}

export enum MediaType {
    LTO = "LTO",
    LTOClean = "LTO Clean"
}