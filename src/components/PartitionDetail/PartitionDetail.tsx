import _ from 'lodash';
import * as React from 'react';
import styled from 'styled-components';
import IPartition from '../../interfaces/IPartition';
import Name from './Name';
import PartitionFields from './PartitionFields';

interface IPartitionDetailProps {
    partition: IPartition
}

const Root = styled.div`
    width: 100%; 
    height: 100%;
    background-color: #fff;
    border-radius: 16px;
`;

const Header = styled.div`
    height: 71px; 
    width: auto;
    padding: 20px 13px 20px 13px;
    display: flex;
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
    const [stagedEditState, setStagedEditState] = React.useReducer( stagedEditsReducer as React.Reducer<Partial<IPartition>, Partial<IPartition>>, {} as Partial<IPartition> )
    const { name } = props.partition;
    return (
      <Root>
        <Header>
            <HeaderLeft>
                <Name editState value={ _.get( stagedEditState, ["name"], name ) } onValueChange={ ( value ) => setStagedEditState({ name: value }) } />
            </HeaderLeft>
            <HeaderRight>
                right
            </HeaderRight>
        </Header>              
      </Root>
  ) ;
};

export default PartitionDetail;
