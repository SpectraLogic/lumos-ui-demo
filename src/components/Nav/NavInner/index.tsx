import * as React from 'react';
import { OuterSelection, InnerSelection } from '../Navigator';
import ListButton  from './ListButton';
import styled from 'styled-components';
import { PartitionIcon , LifecycleIcon, NetworkIcon} from '../../Icons';
import { Button, Typography } from '@mui/material';
import * as _ from 'lodash';
import {
    Storage
} from '@mui/icons-material';

interface INavInnerProps {
    outerSelection: OuterSelection;
    innerSelection: InnerSelection;
    onInnerSelectionChange: ( selection: InnerSelection ) => void;
}

const Background = styled.div`
    width: 205px;
    height: 100%;
    background-color: #fff;
    padding-top: 8px;
    display: flex;
    flex-direction: row;
`;

const ButtonList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 7px;
    padding-right: 7px;
    gap: 8px;
`;

// const ListButton = styled(Button)<{selected: boolean}>`
//     height: 40px;
//     width: 100%;
//     justify-content: left; 
//     text-transform: none;
//     font-weight: bold;
//     box-shadow: none;
//     background-color: ${ ({selected}) => selected ? '#000' : '#fff' };
//     color: ${ ({selected}) => selected ? '#fff' : '#000' };
//     &:hover{
//         box-shadow: none;
//     }
// `;

const getOnClickHandler = ( which: InnerSelection,  onChangeFunction: (val: InnerSelection ) => void ) => {
    return onChangeFunction.bind( undefined, which );
}

const NavInner: React.FunctionComponent<INavInnerProps> = ({ innerSelection, outerSelection, onInnerSelectionChange }) => {

  return (
      <Background>
          {
              outerSelection === OuterSelection.Config ? (
                <ButtonList>
                    { [InnerSelection.Partitions, InnerSelection.MediaLifecycle, InnerSelection.NetworkSettings, InnerSelection.UserAccounts, InnerSelection.MediaEncryption, InnerSelection.Updates].map( (val, indx) => (
                            <ListButton 
                            key={ indx }
                            selection={ innerSelection } 
                            which={ val }
                            onClick={ getOnClickHandler( val, onInnerSelectionChange ) }/> ) 
                        )
                    }

                </ButtonList>
              ) : outerSelection === OuterSelection.Operations ? (
            <ButtonList>
                { [InnerSelection.MoveMedia, InnerSelection.ImportExport, InnerSelection.ManageDrives].map( (val, indx) => (
                        <ListButton 
                        key={ indx }
                        selection={ innerSelection } 
                        which={ val }
                        onClick={ getOnClickHandler( val, onInnerSelectionChange ) }/> ) 
                    )
                }
            </ButtonList>
              ) : (
                  "else"
              )
          }
      </Background>
  )
};

export default NavInner;
