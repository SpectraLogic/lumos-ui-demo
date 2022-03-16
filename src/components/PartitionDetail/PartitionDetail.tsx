import { Divider } from '@mui/material';
import _ from 'lodash';
import * as React from 'react';
import styled from 'styled-components';
import IPartition, { IBarcodeOptions, IChambersConfig } from '../../interfaces/IPartition';
import BarcodeOptions from './FieldComponents/BarcodeOptions';
import Chambers from './FieldComponents/Chambers';
import MediaType from './FieldComponents/MediaType';
import Name from './FieldComponents/Name';
import SlotIQ from './FieldComponents/SlotIQ';
import PartitionFields from './PartitionFields';

interface IPartitionDetailProps {
    partition: IPartition
    partitionId: string
}

const Root = styled.div`
    width: 100%; 
    height: 100%;
    background-color: #fff;
    border-radius: 16px;
`;

const Header = styled.div`
    height: 50px; 
    width: auto;
    padding: 20px 13px 20px 13px;
    display: flex;
`;

const Body = styled.div`
    height: calc(100% - 90px);
    width: 100%;
    overflow-y: scroll;
`;

const HeaderLeft = styled.div`
    align-self: flex-start;
`;

const HeaderRight = styled.div`
    margin-left: auto;
`;

const stagedEditsReducer = ( state: Partial<IPartition>, newState: Partial<IPartition> ) => ({
    ...state,
    ...newState
})


const PartitionDetail: React.FunctionComponent<IPartitionDetailProps> = (props) => {
    const [stagedEditState, setStagedEditState] = React.useReducer( stagedEditsReducer as React.Reducer<Partial<IPartition>, Partial<IPartition>>, {} as Partial<IPartition> );
    const { 
        name, mediaType, 
        SlotIQ: 
        slotIq, 
        "Barcode Options": barcodeOptions,
        "Chambers": chambers
    } = props.partition;
    return (
      <Root>
        <Header>
            <HeaderLeft>
                <Name value={ _.get( stagedEditState, ["name"], name ) } onValueChange={ ( value ) => setStagedEditState({ name: value }) } />
            </HeaderLeft>
            <HeaderRight>
                right
            </HeaderRight>
        </Header>
        <Body>
            <Divider /> 
            <MediaType 
                value={ _.get( stagedEditState, ["mediaType"], mediaType ) } onValueChange={ value => setStagedEditState({ mediaType: value }) }
            />
            <SlotIQ 
                value={_.get( stagedEditState, [PartitionFields.SlotIQ], slotIq ) } onValueChange={ (value: boolean) => setStagedEditState({ SlotIQ: value }) } 
            /> 
            <BarcodeOptions 
                value={ _.get( stagedEditState, [PartitionFields.BarcodeOptions], barcodeOptions ) }
                onValueChange={ (value: IBarcodeOptions) => setStagedEditState({ "Barcode Options": value }) } 
            />
            <Chambers
                value={ _.get( stagedEditState, [PartitionFields.Chambers], chambers ) }
                onValueChange={ (value: IChambersConfig) => setStagedEditState({ Chambers: value }) } 
            />
        </Body>   
      </Root>
  ) ;
};

export default PartitionDetail;
