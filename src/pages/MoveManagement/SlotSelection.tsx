import * as React from 'react';
import OverlapPanel from '../../components/OverlapPanel/OverlapPanel';
import styled from 'styled-components';
import SlotFilter from './SlotFilter';
import SlotTable from './SlotTable';
import { ITapeSlot } from '../../interfaces/ITapeSlot';
import * as _ from 'lodash';

interface ISlotSelectionProps {
    selectionType: "source" | "destination"   
    slots: Array<ITapeSlot>
}

const SlotSelection: React.FunctionComponent<ISlotSelectionProps> = (props) => {
    const [filterIsOpen, setFilterOpenState] = React.useState( false );
    
  return (
      <OverlapPanel
        underSheetHeightTotal={ 213 }
        underSheetHeightPeek={ 40 }
        underSheetElement={ <SlotFilter isOpen={ filterIsOpen }onHeaderClicked={ setFilterOpenState.bind( undefined, !filterIsOpen ) }/> }
        overSheetElement={ <SlotTable slots={ props.slots.filter( iter => !_.isUndefined(iter.barcode) ) } selectionType={ props.selectionType } /> }
        isOpen={ filterIsOpen }
      />
  ) ;
};

export default SlotSelection;
