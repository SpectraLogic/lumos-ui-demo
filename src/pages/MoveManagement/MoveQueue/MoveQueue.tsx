import { Queue, Send } from '@mui/icons-material';
import { Tab, Tabs } from '@mui/material';
import * as React from 'react';
import OverlapPanel from '../../../components/OverlapPanel/OverlapPanel';
import AddToQueuePanel from './AddToQueuePanel';

interface IMoveQueueProps {
}

const MoveQueue: React.FunctionComponent<IMoveQueueProps> = (props) => {
    const [tabValue, setTabValue] = React.useState( 0 );
  return(
    <OverlapPanel
        isOpen
        underSheetHeightPeek={ 143 }
        underSheetHeightTotal={ 143 }
        overSheetElement={ 
            <>
                <Tabs 
                    value={ tabValue } 
                    onChange={ (e, val) => setTabValue( val ) }
                    variant="fullWidth">
                        <Tab label="Move Queue" icon={ <Queue /> } />
                        <Tab label="Issued Moves" icon={ <Send /> } />
                </Tabs>
            </>
        }
        underSheetElement={ 
            <AddToQueuePanel
                onConfirmAdd={ () => {} }
            />
        }
    />
  );
};

export default MoveQueue;
