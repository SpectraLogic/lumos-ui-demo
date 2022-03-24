import * as React from 'react';
import OverlapPanel from '../../components/OverlapPanel/OverlapPanel';
import styled from 'styled-components';
import SlotFilter from './SlotFilter';

interface ISlotSelectionProps {
    selectionType: "source" | "destination"   
}

const SlotSelection: React.FunctionComponent<ISlotSelectionProps> = (props) => {
    const [filterIsOpen, setFilterOpenState] = React.useState( false );
    
  return (
      <OverlapPanel
        underSheetHeightTotal={ 213 }
        underSheetHeightPeek={ 40 }
        underSheetElement={ <SlotFilter isOpen={ filterIsOpen }onHeaderClicked={ setFilterOpenState.bind( undefined, !filterIsOpen ) }/> }
        overSheetElement={ <> hi </> }
        isOpen={ filterIsOpen }
      />
  ) ;
};

export default SlotSelection;
