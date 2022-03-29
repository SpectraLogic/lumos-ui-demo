import * as React from 'react';
import { OuterSelection, InnerSelection } from '../Nav';
import ListButton  from './ListButton';
import styled from 'styled-components';
import * as _ from 'lodash';
interface INavInnerProps {
    outerSelection: OuterSelection;
    innerSelection: InnerSelection;
    onInnerSelectionChange: ( selection: InnerSelection ) => void;
}

const Background = styled.div`
    min-width: 205px;
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
                            to={ "./" + val }
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
                            to={ "/" + val}
                            key={ indx }
                            selection={ innerSelection }
                            which={ val } 
                            onClick={ getOnClickHandler( val, onInnerSelectionChange ) }/> ) 
                        )
                    }
                </ButtonList>
              ) : (
                  <ButtonList />
              )
          }
      </Background>
  )
};

export default NavInner;
