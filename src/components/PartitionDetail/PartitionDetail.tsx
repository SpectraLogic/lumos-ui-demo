import { Divider } from '@mui/material';
import _ from 'lodash';
import * as React from 'react';
import styled from 'styled-components';
import IPartition from '../../interfaces/IPartition';
import MediaType from './MediaType';
import Name from './Name';
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
    height: 35px; 
    width: auto;
    padding: 20px 13px 20px 13px;
    display: flex;
`;

const Body = styled.div`
    height: calc(100% - 75px);
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
    const { name, mediaType } = props.partition;
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
        </Body>   
      </Root>
  ) ;
};

export default PartitionDetail;
