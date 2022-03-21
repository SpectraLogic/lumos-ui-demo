import uniqid from "uniqid";
import PartitionFields from "../components/PartitionDetail/PartitionFields";
import IPartition, { CheckSumBehavior, MediaType, TruncationOptions } from "../interfaces/IPartition";

const mediaCleanId = uniqid();

export const partitions: Array<IPartition> =  [
    { 
      id: uniqid(),
      name: "Media 1",
      mediaType: MediaType.LTO,
      [PartitionFields.SlotIQ]: false,
      [PartitionFields.BarcodeOptions]: {
        checkSumBehavior: CheckSumBehavior.CHECK,
        truncationOption: TruncationOptions.LEFT,
        numReportedChars: 16,
      },
      [PartitionFields.Chambers]: {
          storage: 20,
          ee: 0
      },
      [PartitionFields.Drives]: [],
      [PartitionFields.CleaningPartition]: mediaCleanId,
      [PartitionFields.MLMVerification]: {
        quickScan: true,
        preScan: true
      }
    },
    { 
      id: mediaCleanId,
      name: "Media Clean",
      mediaType: MediaType.LTOClean,
      [PartitionFields.SlotIQ]: true,
      [PartitionFields.BarcodeOptions]: {
        checkSumBehavior: CheckSumBehavior.CHECK,
        truncationOption: TruncationOptions.LEFT,
        numReportedChars: 16
      },
      [PartitionFields.Chambers]: {
        clean: 5
     },
     [PartitionFields.Drives]: [],
     [PartitionFields.CleaningPartition]: false,
     [PartitionFields.MLMVerification]: {
        quickScan: true,
        preScan: true
    }
    },
    { 
      id: uniqid(),
      name: "Auxillary Clean",
      mediaType: MediaType.LTOClean,
      [PartitionFields.SlotIQ]: true,
      [PartitionFields.BarcodeOptions]: {
        checkSumBehavior: CheckSumBehavior.CHECK,
        truncationOption: TruncationOptions.LEFT,
        numReportedChars: 16
      },
      [PartitionFields.Chambers]: {
        clean: 8
     },
     [PartitionFields.Drives]: [],
     [PartitionFields.CleaningPartition]: false,
     [PartitionFields.MLMVerification]: {
        quickScan: true,
        preScan: true
      }
    }
  ];