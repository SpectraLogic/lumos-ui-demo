import * as React from 'react';
import OverlapPanel from '../../../components/OverlapPanel/OverlapPanel';
import styled from 'styled-components';
import SlotFilter from './SlotFilter';
import { default as SlotTableBase } from './SlotTable';
import { ITapeSlot } from '../../../interfaces/ITapeSlot';
import * as _ from 'lodash';
import { Button } from '@mui/material';

interface ISlotSelectionProps {
    selectionType: "source" | "destination"   
    slots: Array<ITapeSlot>
    onSlotSelect: ( slot: ITapeSlot ) => void
}

const SlotTable = styled( SlotTableBase )<{ fitButton: boolean}>`
  border-radius: ${ ({ fitButton }) => fitButton ? 'none' : '8px 8px 16px 16px' };
  height: ${ ({ fitButton }) => fitButton ? 'calc(100% - 40.5px)' : '100%' };
`

const ResetFilterButton = styled( Button )`
  border-radius: 0px 0px 16px 16px;
`; 

const SlotSelection: React.FunctionComponent<ISlotSelectionProps> = (props) => {
    const [filterIsOpen, setFilterOpenState] = React.useState( false );
    const [filterPredicate, setFilterPredicate] = React.useState( () => ( slot: ITapeSlot ) => true );
    const [filterResetFunc, setFilterResetFunc] = React.useState<(() => void) | undefined >( undefined );

  return (
      <OverlapPanel
        underSheetHeightTotal={ 255 }
        underSheetHeightPeek={ 35 }
        underSheetElement={ 
          <SlotFilter 
            isOpen={ filterIsOpen }
            onHeaderClicked={ setFilterOpenState.bind( undefined, !filterIsOpen ) }
            onChange={ ( func ) => setFilterPredicate( () => func ) }
            onResetChange={ ( func ) => setFilterResetFunc( () => func ) }
            /> }
        overSheetElement={ 
          <>
            <SlotTable 
              fitButton={ !_.isUndefined( filterResetFunc )}
              slots={ props.slots.filter( filterPredicate ) } 
              selectionType={ props.selectionType }
              onSlotSelect={ props.onSlotSelect } />
              {
                !_.isUndefined( filterResetFunc ) && (
                  <ResetFilterButton 
                    fullWidth 
                    onClick={ filterResetFunc }
                    color='error' 
                    variant='contained'>
                      Reset Filters
                  </ResetFilterButton>
                )
              }
          </> 
          }
          isOpen={ filterIsOpen }
      />
  ) ;
};

export default SlotSelection;
