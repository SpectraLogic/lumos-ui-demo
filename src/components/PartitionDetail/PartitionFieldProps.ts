export default interface PartitionFieldProps<T>{
    value: T,
    onValueChange: ( value: T ) => void;
    isAdvancedSetting?: boolean
}