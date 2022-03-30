import * as React from 'react';
import OverlapPanel from '../../../components/OverlapPanel/OverlapPanel';
import styled from 'styled-components';
import SlotFilter from './SlotFilter';
import SlotTable from './SlotTable';
import { ITapeSlot } from '../../../interfaces/ITapeSlot';
import * as _ from 'lodash';

interface ISlotSelectionProps {
    selectionType: "source" | "destination"   
    slots: Array<ITapeSlot>
    onSlotSelect: ( slot: ITapeSlot ) => void
}

const SlotSelection: React.FunctionComponent<ISlotSelectionProps> = (props) => {
    const [filterIsOpen, setFilterOpenState] = React.useState( false );
    const [filterPredicate, setFilterPredicate] = React.useState( () => ( slot: ITapeSlot ) => true );

  return (
      <OverlapPanel
        underSheetHeightTotal={ 255 }
        underSheetHeightPeek={ 35 }
        underSheetElement={ 
          <SlotFilter 
            isOpen={ filterIsOpen }
            onHeaderClicked={ setFilterOpenState.bind( undefined, !filterIsOpen ) }
            onChange={ ( func ) => setFilterPredicate( () => func ) }
            /> }
        overSheetElement={ 
          <SlotTable 
            slots={ props.slots.filter( filterPredicate ) } 
            selectionType={ props.selectionType }
            onSlotSelect={ props.onSlotSelect } /> 
          }
        isOpen={ filterIsOpen }
      />
  ) ;
};

export default SlotSelection;
