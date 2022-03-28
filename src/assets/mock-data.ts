import uniqid from "uniqid";
import PartitionFields from "../components/PartitionDetail/PartitionFields";
import IPartition, { CheckSumBehavior, MediaType, TruncationOptions } from "../interfaces/IPartition";
import { ITapeSlot } from "../interfaces/ITapeSlot";

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


export const slots: Array<ITapeSlot> = [{
  "id": "ae9b8ce9-2752-4439-99ea-02329a0c6f8d",
  "type": "Entry/Exit",
  "number": 410,
  "barcode": "ULB15C0K13L68PZZ",
  "location": "Frame 2"
}, {
  "id": "6387ed97-fe30-4e25-ac7d-06973fd4d733",
  "type": "Drive",
  "number": 387,
  "barcode": "WCORQKHZ5GV0WWSB",
  "location": "Frame 1"
}, {
  "id": "87b2abde-35bf-4a23-b5ce-bcd57b8e3287",
  "type": "Storage",
  "number": 269,
  "location": "Frame 4"
}, {
  "id": "f898b8db-3266-4d1b-8de4-c43dfc229806",
  "type": "Storage",
  "number": 478,
  "location": "Frame 4"
}, {
  "id": "c5ceb80f-6e54-420f-9efa-f2ef80d2702a",
  "type": "Storage",
  "number": 54,
  "barcode": "UZUIUVAG3MX9UKIF",
  "location": "Frame 6"
}, {
  "id": "803d687a-99ad-4cd5-8d79-9de88d1fe929",
  "type": "Storage",
  "number": 85,
  "barcode": "8J6WVHCWTNZZJ6MY",
  "location": "Frame 6"
}, {
  "id": "b55ee1f1-3fa6-46f7-8cdc-052b6de9ff9d",
  "type": "Storage",
  "number": 93,
  "barcode": "YLOC58V4FMTAIS82",
  "location": "Frame 1"
}, {
  "id": "920a283d-6286-4a9c-b17e-16de612143da",
  "type": "Entry/Exit",
  "number": 405,
  "location": "Frame 1"
}, {
  "id": "4142b88d-c820-47d9-80d0-a8abe9a99850",
  "type": "Drive",
  "number": 455,
  "location": "Frame 3"
}, {
  "id": "fc4d135f-809b-4371-a65f-f36e18bdda06",
  "type": "Entry/Exit",
  "number": 304,
  "location": "Frame 5"
}, {
  "id": "72433425-8cd6-43f9-aedc-d6e97a78e337",
  "type": "Entry/Exit",
  "number": 417,
  "barcode": "UR16KJWZZAW7SI84",
  "location": "Frame 6"
}, {
  "id": "848eaef8-477b-44f7-97b9-1c08193359db",
  "type": "Drive",
  "number": 50,
  "barcode": "JP25FAQ2JVHEP6IQ",
  "location": "Frame 3"
}, {
  "id": "130126b1-79ee-49d1-a351-2f44b0d86b5b",
  "type": "Entry/Exit",
  "number": 236,
  "barcode": "CWJ1NWMBCNHTCS9H",
  "location": "Frame 1"
}, {
  "id": "3c2b101a-f00f-4de9-8ec6-bff15d7acce9",
  "type": "Drive",
  "number": 390,
  "barcode": "7SUXP1LIMJ0SEZHX",
  "location": "Frame 2"
}, {
  "id": "97b8a567-ce5f-4cbb-9dfa-95ca262122cd",
  "type": "Drive",
  "number": 104,
  "location": "Frame 6"
}, {
  "id": "afebef6a-e1ea-45ea-be50-715aa179b204",
  "type": "Storage",
  "number": 483,
  "location": "Frame 2"
}, {
  "id": "eedf6c0a-eb44-437b-97f2-6b568d18b72f",
  "type": "Drive",
  "number": 357,
  "location": "Frame 2"
}, {
  "id": "9631a177-ab0f-4b03-8a2a-a7e39a3cb3cd",
  "type": "Entry/Exit",
  "number": 455,
  "barcode": "PMVN9CNAMF8ZOZ23",
  "location": "Frame 4"
}, {
  "id": "cc562786-3537-4788-a067-78445829caa0",
  "type": "Drive",
  "number": 106,
  "barcode": "KU2XYK0EGXFLLHWU",
  "location": "Frame 2"
}, {
  "id": "ffbc517c-29d7-45fc-9eef-66fcd840c4b0",
  "type": "Entry/Exit",
  "number": 195,
  "location": "Frame 6"
}, {
  "id": "9c361dd2-83fd-4d19-bbbe-4e34ed62135f",
  "type": "Storage",
  "number": 381,
  "barcode": "HGEOBKJA06Y9WEQJ",
  "location": "Frame 4"
}, {
  "id": "f2d745cd-953f-4e94-83a2-f23860907001",
  "type": "Storage",
  "number": 195,
  "location": "Frame 6"
}, {
  "id": "a7311ca0-d9c2-4c08-a50c-14c016e0721b",
  "type": "Drive",
  "number": 419,
  "barcode": "BHGWWS8W3AFTIRN4",
  "location": "Frame 3"
}, {
  "id": "06921270-96d6-49a7-8d7b-d5f254cc5d56",
  "type": "Drive",
  "number": 497,
  "location": "Frame 3"
}, {
  "id": "8b4425f0-cf34-4bc1-9b3c-cffd3fed2b42",
  "type": "Entry/Exit",
  "number": 381,
  "location": "Frame 1"
}, {
  "id": "5893fb6d-e520-4692-8dab-012126952b49",
  "type": "Entry/Exit",
  "number": 104,
  "barcode": "FZWVYW9HV3SRLXTT",
  "location": "Frame 2"
}, {
  "id": "56491f56-5989-4612-a085-dd79e3b5709f",
  "type": "Drive",
  "number": 190,
  "location": "Frame 3"
}, {
  "id": "b4f47841-6e8d-443e-82fe-9fb9f10027ec",
  "type": "Drive",
  "number": 308,
  "location": "Frame 4"
}, {
  "id": "e7e1bd2e-315d-49d6-a855-caa049c62cd3",
  "type": "Drive",
  "number": 347,
  "barcode": "OHTPQPJTG0RBGCCS",
  "location": "Frame 6"
}, {
  "id": "b9f6ddbd-87f1-481a-9024-24302d6c9f54",
  "type": "Storage",
  "number": 256,
  "location": "Frame 4"
}, {
  "id": "1088d8da-9814-41d5-b8c3-c865845dc8cf",
  "type": "Storage",
  "number": 49,
  "barcode": "ELXGJVU7BY9ARSIB",
  "location": "Frame 2"
}, {
  "id": "5dd1ac2f-2aff-4bb4-a13b-7836c7e98144",
  "type": "Storage",
  "number": 129,
  "barcode": "48NVUNHJOAO4EBLE",
  "location": "Frame 3"
}, {
  "id": "ec8ce375-996a-45cb-b427-38df1af63497",
  "type": "Storage",
  "number": 409,
  "barcode": "4W3ZYHLVX9IC3PU8",
  "location": "Frame 3"
}, {
  "id": "19f2f2df-15a7-4758-b771-6cd31fd913c3",
  "type": "Entry/Exit",
  "number": 99,
  "barcode": "ARUZA52VMF2AKUE0",
  "location": "Frame 3"
}, {
  "id": "c58d3801-6f43-4b6b-91b2-09bb5dab9cf1",
  "type": "Drive",
  "number": 252,
  "barcode": "DA8JUJRHKBCJ5D0F",
  "location": "Frame 5"
}, {
  "id": "77c3a87d-dbf6-4ed9-ad5d-a34fc35cdd42",
  "type": "Entry/Exit",
  "number": 197,
  "location": "Frame 2"
}, {
  "id": "510b4912-78c7-4438-959e-ab29de0c16c0",
  "type": "Storage",
  "number": 65,
  "location": "Frame 2"
}, {
  "id": "32feb637-e686-4a6d-a07f-ea4631cc1768",
  "type": "Drive",
  "number": 196,
  "barcode": "MDTIFDXBJAXVOHJK",
  "location": "Frame 6"
}, {
  "id": "7cbe9663-0ccc-40da-a001-dfdf762eca88",
  "type": "Drive",
  "number": 37,
  "location": "Frame 2"
}, {
  "id": "a722fbc2-7ec5-41fb-bb01-f10fa3f05745",
  "type": "Drive",
  "number": 63,
  "location": "Frame 2"
}, {
  "id": "643e3a67-ed6e-4dac-8dce-d9a284c1f1e7",
  "type": "Entry/Exit",
  "number": 90,
  "barcode": "QFVBEH8IYGCFCQTT",
  "location": "Frame 2"
}, {
  "id": "b35add9b-f8e5-4d40-b79e-2bff843e3cbd",
  "type": "Entry/Exit",
  "number": 380,
  "location": "Frame 4"
}, {
  "id": "869e81ea-ee04-4b4e-9d45-af44e23eb42a",
  "type": "Entry/Exit",
  "number": 187,
  "barcode": "UP47NQWGQHDAMZ7N",
  "location": "Frame 2"
}, {
  "id": "07dcf434-cfb0-42d0-bb49-d093bacc94e1",
  "type": "Entry/Exit",
  "number": 206,
  "location": "Frame 6"
}, {
  "id": "a350e77c-1e4e-4be5-aa19-2b96e01ad07a",
  "type": "Storage",
  "number": 131,
  "barcode": "RRN7J9TVOP2ZQZCK",
  "location": "Frame 6"
}, {
  "id": "8cc25b77-b603-4a81-aa13-d65e2cfab80d",
  "type": "Entry/Exit",
  "number": 148,
  "barcode": "22BMUXIISLKA1VKD",
  "location": "Frame 3"
}, {
  "id": "c90cfb62-2df5-4967-a26e-63876c6e8508",
  "type": "Drive",
  "number": 270,
  "barcode": "DQ40QKG73DWPA3QB",
  "location": "Frame 2"
}, {
  "id": "874fe526-b818-4881-ba80-4fbe14dfcc16",
  "type": "Entry/Exit",
  "number": 141,
  "barcode": "WBPZ2IXK0RRIELB4",
  "location": "Frame 2"
}, {
  "id": "77e1558d-885e-469a-a191-8fb5182e458c",
  "type": "Drive",
  "number": 318,
  "barcode": "XET5VLIBEXSRWEJ3",
  "location": "Frame 3"
}, {
  "id": "8b91117e-6940-4364-ac6a-802c7d3e0fc3",
  "type": "Storage",
  "number": 467,
  "location": "Frame 2"
}, {
  "id": "dbd3f72f-2187-46b0-86ac-86f87485200c",
  "type": "Entry/Exit",
  "number": 319,
  "location": "Frame 2"
}, {
  "id": "d6340a20-b06a-40e7-8ddf-1705c5d236d9",
  "type": "Entry/Exit",
  "number": 315,
  "barcode": "XM9VUYVYWGXRXY8T",
  "location": "Frame 4"
}, {
  "id": "b848de82-1864-4ecd-b112-403e31a3d3d7",
  "type": "Entry/Exit",
  "number": 459,
  "location": "Frame 6"
}, {
  "id": "7e748685-c7c9-4bd2-ac0b-efd937bdd4f2",
  "type": "Entry/Exit",
  "number": 173,
  "location": "Frame 6"
}, {
  "id": "fdb35a36-cbc2-4c2b-ab79-1ecc9f317dba",
  "type": "Storage",
  "number": 483,
  "barcode": "MEWETLKZKXKGPPCK",
  "location": "Frame 5"
}, {
  "id": "ab4025f8-34be-4541-9a1d-b2e2d3837523",
  "type": "Storage",
  "number": 89,
  "barcode": "W5CVTYHTQGZ25DQD",
  "location": "Frame 6"
}, {
  "id": "cd03c6bf-02eb-4dea-87b6-e6856c814ef0",
  "type": "Entry/Exit",
  "number": 485,
  "location": "Frame 3"
}, {
  "id": "98191495-5633-4d1e-b846-181062465f08",
  "type": "Storage",
  "number": 102,
  "barcode": "8H9W5ZTJC5KVRV6L",
  "location": "Frame 4"
}, {
  "id": "f2f05395-ce48-4fd6-b448-de0b743461f3",
  "type": "Entry/Exit",
  "number": 309,
  "location": "Frame 2"
}, {
  "id": "f65aed05-6b76-4bc2-8c08-258bcb15f4b8",
  "type": "Entry/Exit",
  "number": 338,
  "barcode": "ZZCGTQBWZJRGLCHK",
  "location": "Frame 3"
}, {
  "id": "84f15717-c299-4607-8cc9-a956e4de0298",
  "type": "Drive",
  "number": 79,
  "barcode": "GNMQO1HLIVNUOOB8",
  "location": "Frame 5"
}, {
  "id": "abdfb06a-657b-447a-aa6f-45bf1e4468e7",
  "type": "Drive",
  "number": 101,
  "location": "Frame 4"
}, {
  "id": "46d29ceb-e993-457f-8fc8-50f229238e3d",
  "type": "Drive",
  "number": 137,
  "barcode": "QCMPZ3GMOXEIGTKU",
  "location": "Frame 5"
}, {
  "id": "599598ca-8a76-439e-b42a-30e133676938",
  "type": "Entry/Exit",
  "number": 387,
  "barcode": "ZAQKB22CBHSQ3GG7",
  "location": "Frame 1"
}, {
  "id": "73166311-dab2-480e-9dfb-e1d5b6c05110",
  "type": "Storage",
  "number": 217,
  "barcode": "VJUDOCUYSUKFTI29",
  "location": "Frame 2"
}, {
  "id": "da8e1d09-ddf2-4161-b8d3-9d28c1c52173",
  "type": "Entry/Exit",
  "number": 313,
  "barcode": "76HYEYBZBWTN8HFR",
  "location": "Frame 5"
}, {
  "id": "5bb951c0-4b71-4cf7-95ae-4411a484d693",
  "type": "Storage",
  "number": 214,
  "barcode": "SRA9LANGUSJTJEWV",
  "location": "Frame 6"
}, {
  "id": "7bf5048a-50cf-4eb5-9a89-3c7dbd5656c8",
  "type": "Drive",
  "number": 398,
  "location": "Frame 4"
}, {
  "id": "f46b19da-36bb-4a3a-8372-ac5be5059574",
  "type": "Entry/Exit",
  "number": 19,
  "location": "Frame 1"
}, {
  "id": "a504647f-036e-483c-8864-f08bc6ab1f49",
  "type": "Storage",
  "number": 447,
  "location": "Frame 2"
}, {
  "id": "3ac0c628-f48d-4e10-aa8a-52bf4f22dbc6",
  "type": "Entry/Exit",
  "number": 290,
  "location": "Frame 6"
}, {
  "id": "a9c3b5f2-6e09-4f92-8903-9b8b98cfcdcb",
  "type": "Storage",
  "number": 451,
  "barcode": "IQMBJVYD2UW2O1RB",
  "location": "Frame 6"
}, {
  "id": "7114c0c0-4b5e-4295-bca9-5d4220b43b70",
  "type": "Storage",
  "number": 331,
  "location": "Frame 3"
}, {
  "id": "c5b06ea5-d824-4abd-9124-844c4fab6b92",
  "type": "Drive",
  "number": 295,
  "location": "Frame 4"
}, {
  "id": "ffcf4841-f575-47c2-8a54-deb001a0ebb2",
  "type": "Storage",
  "number": 355,
  "location": "Frame 4"
}, {
  "id": "de1134f4-39f1-4ba9-8438-fa6028e838cd",
  "type": "Storage",
  "number": 34,
  "location": "Frame 2"
}, {
  "id": "d8141522-1395-400e-a31c-b10b20bd157b",
  "type": "Storage",
  "number": 128,
  "barcode": "YW3IIRLVRR2F3VGK",
  "location": "Frame 3"
}, {
  "id": "a76c70dd-f514-4452-adf6-729e806bff7d",
  "type": "Drive",
  "number": 342,
  "location": "Frame 2"
}, {
  "id": "0c8de3cc-9638-486c-b5f9-23c042558b66",
  "type": "Storage",
  "number": 101,
  "location": "Frame 1"
}, {
  "id": "571f3043-a558-47dc-a3c6-f5acb6799b6d",
  "type": "Drive",
  "number": 323,
  "location": "Frame 5"
}, {
  "id": "25d23601-8645-4f80-a80e-c276457b57ba",
  "type": "Storage",
  "number": 322,
  "location": "Frame 5"
}, {
  "id": "e8ee6fe6-6118-49c5-958c-596e8d67a904",
  "type": "Storage",
  "number": 320,
  "location": "Frame 6"
}, {
  "id": "9172c101-c340-4601-94f1-32008b5b1a2e",
  "type": "Entry/Exit",
  "number": 39,
  "location": "Frame 3"
}, {
  "id": "16827568-82b7-4fc7-9c9c-d3c26e32c796",
  "type": "Entry/Exit",
  "number": 61,
  "location": "Frame 2"
}, {
  "id": "09b4cf93-ee5b-4d3c-9712-be722c924026",
  "type": "Drive",
  "number": 334,
  "barcode": "2YEGRBEZXLTAGWJX",
  "location": "Frame 1"
}, {
  "id": "83eb9898-4924-4aa2-9774-dee346dd842f",
  "type": "Drive",
  "number": 75,
  "location": "Frame 6"
}, {
  "id": "16bc8732-9938-45fd-8dcf-9f6f788effa6",
  "type": "Entry/Exit",
  "number": 228,
  "barcode": "YNBYIDY3S5MDHI1T",
  "location": "Frame 5"
}, {
  "id": "334ed72d-8db2-4773-b139-54c42289a483",
  "type": "Entry/Exit",
  "number": 473,
  "location": "Frame 3"
}, {
  "id": "f2311023-bf67-4c3f-976b-a11d8ce4ad1d",
  "type": "Drive",
  "number": 186,
  "barcode": "O0OZRXK37II4NAW8",
  "location": "Frame 4"
}, {
  "id": "023d7977-92a4-40e9-b480-deaf7ec02d07",
  "type": "Storage",
  "number": 25,
  "location": "Frame 4"
}, {
  "id": "98b0ce94-df62-4b3e-9f73-0d0c0b5d8a3a",
  "type": "Storage",
  "number": 235,
  "location": "Frame 2"
}, {
  "id": "8d750ffc-4a30-44c0-a676-98bf8d6243b2",
  "type": "Entry/Exit",
  "number": 21,
  "location": "Frame 1"
}, {
  "id": "23c8b158-db2f-4801-8b14-ea5ee9f06af1",
  "type": "Storage",
  "number": 379,
  "barcode": "FHRKZZ6TDBXO9JS8",
  "location": "Frame 3"
}, {
  "id": "02a88e83-8f98-4eea-a4cd-52e685690661",
  "type": "Drive",
  "number": 104,
  "barcode": "GBPHEYNJJLXRFIY6",
  "location": "Frame 6"
}, {
  "id": "cc0fd4a3-a0ee-45d9-b94c-b5da079abc1a",
  "type": "Entry/Exit",
  "number": 478,
  "barcode": "TKG2ERU2DLMOYVRO",
  "location": "Frame 1"
}, {
  "id": "5cb2ec02-3dcc-4fba-ba8c-e5373a0ef9be",
  "type": "Drive",
  "number": 72,
  "barcode": "BMXKZ2MRGO9N30FF",
  "location": "Frame 2"
}, {
  "id": "62702051-07c7-45dd-9d1b-03e29c3b131e",
  "type": "Entry/Exit",
  "number": 434,
  "barcode": "DD6OJB2ZIMHRLKDK",
  "location": "Frame 2"
}, {
  "id": "94e3aab0-e19c-4a32-9d53-cd8422c87f25",
  "type": "Entry/Exit",
  "number": 180,
  "barcode": "IY5BFRSN6QTD71YW",
  "location": "Frame 2"
}, {
  "id": "49457e8e-6ce4-4e59-907c-a70ca986ad01",
  "type": "Entry/Exit",
  "number": 1,
  "location": "Frame 2"
}, {
  "id": "53da4566-42aa-4784-963a-3e10e5590b58",
  "type": "Entry/Exit",
  "number": 5,
  "barcode": "KMVMB04NKKD5EQX0",
  "location": "Frame 6"
}]
