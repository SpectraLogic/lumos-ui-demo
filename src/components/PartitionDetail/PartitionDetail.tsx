import { CheckCircle, Clear } from '@mui/icons-material';
import { Button, ButtonGroup, Divider, FormControlLabel, FormGroup, Switch, Typography, Zoom } from '@mui/material';
import _ from 'lodash';
import * as React from 'react';
import styled from 'styled-components';
import IPartition, { IBarcodeOptions, ICleaningChambers, IMediaChambers, IMLMVerificationConfig, MediaType as MediaTypeEnum } from '../../interfaces/IPartition';
import BarcodeOptions from './FieldComponents/BarcodeOptions';
import Chambers from './FieldComponents/Chambers';
import CleaningPartition from './FieldComponents/CleaningPartition';
import Drives from './FieldComponents/Drives';
import MediaType from './FieldComponents/MediaType';
import MLMVerification from './FieldComponents/MLMVerification';
import Name from './FieldComponents/Name';
import SlotIQ from './FieldComponents/SlotIQ';
import PartitionFields from './PartitionFields';
import uniqid from 'uniqid';
import { useNavigate} from 'react-router-dom';
import Emulation from './FieldComponents/Emulation';
import Taos from './FieldComponents/Taos';
import EmulationOptions from './FieldComponents/EmulationOptions';
import SoftLoad from './FieldComponents/SoftLoad';
import RoboticLoadBalancing from './FieldComponents/RoboticLoadBalancing';
import MediaZoning from './FieldComponents/MediaZoning';
import AdvancedSettingsWarning from './Dialogs/AdvancedSettingsWarning';
import { motion } from 'framer-motion';
import { fadeInOutProps } from '../../assets/motion';

interface IPartitionDetailProps {
    availablePartitions: Array<IPartition>
    partition: IPartition
    partitionId: string
    onChange: ( partition: IPartition ) => void
}

const Root = styled( motion.div )`
    width: 100%; 
    height: 100%;
    background-color: #fff;
    border-radius: 8px;
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

const ForceExtraScroll = styled.div`
    width: 100%;
    height: 60px;
`;

const HeaderLeft = styled.div`
    align-self: flex-start;
`;

const HeaderRight = styled.div`
    margin-left: auto;
`;

enum StagedEditsActions {
    UPDATE,
    CLEAR,
    CONFIRM_ADVANCED_SETTINGS
}

const stagedEditsReducer = ( state: Partial<IPartition>, action: { type: StagedEditsActions, payload?: Partial<IPartition> } ) => {
    switch( action.type ){
        case StagedEditsActions.CLEAR:
            return {}; 
        case StagedEditsActions.UPDATE:
            return {
                ...state,
                ...action.payload
            }
        case StagedEditsActions.CONFIRM_ADVANCED_SETTINGS:
            return{
                ...state,
                showAdvancedSettings: true,
                advancedSettingsConfrimed: true
            }
        default:
            return state;
    }
}
    
const PartitionDetail: React.FunctionComponent<IPartitionDetailProps> = (props) => {
    const [stagedEditState, setStagedEditState] = React.useReducer( stagedEditsReducer as React.Reducer<Partial<IPartition>, { type: StagedEditsActions, payload: Partial<IPartition> }>, {} as Partial<IPartition> );
    const [showAdvancedSettings, setShowAdvancedSettings] = React.useState( props.partition.showAdvancedSettings || false );
    const [advSettingsWarningOpen, setAdvSettingsWarningOpen] = React.useState( false );
    React.useEffect( () => {
        if( showAdvancedSettings && !props.partition.advancedSettingsConfrimed ){ 
            setAdvSettingsWarningOpen( true ); 
        }else{
            if( !isNewPartition ){
                props.onChange({ ...props.partition, showAdvancedSettings: false, advancedSettingsConfrimed: false });
            }else{
                setStagedEditState({ type: StagedEditsActions.CONFIRM_ADVANCED_SETTINGS, payload: {} })
            }
        }
    }, [showAdvancedSettings] )
    const isNewPartition = props.partitionId === "DEFAULT";
    const newPartitionId: Partial<IPartition> | undefined  = isNewPartition ? { id: uniqid() } : undefined; 
    const navigate = useNavigate();
    const { 
        name, mediaType, 
        SlotIQ: slotIq, 
        "Barcode Options": barcodeOptions,
        "Chambers": chambers,
        "Drives": drives,
        "Cleaning Partition": cleaningPartition,
        [PartitionFields.MLMVerification]: mlmVerification
    } = props.partition;
    
    return (
      <Root { ...fadeInOutProps }  >
        <Header>
            <HeaderLeft>
                <Name 
                editState={ isNewPartition ? true : undefined } 
                value={ _.get( stagedEditState, ["name"], name ) } 
                onValueChange={ ( value ) => setStagedEditState({ type: StagedEditsActions.UPDATE, payload: { name: value } }) } />
            </HeaderLeft>
            <HeaderRight>
                <FormGroup> 
                    <FormControlLabel 
                        control={ 
                            <Switch 
                            checked={ showAdvancedSettings }
                            onChange={ (e) => {
                                setShowAdvancedSettings( !showAdvancedSettings );
                            } }/> 
                        }
                        label="Show Advanced Settings"
                    />
                </FormGroup>
            </HeaderRight>
        </Header>
        <Body>
            <Divider /> 
            <MediaType 
                value={ _.get( stagedEditState, ["mediaType"], mediaType ) } onValueChange={ value => setStagedEditState({type: StagedEditsActions.UPDATE, payload: { mediaType: value } }) }
            />
            <SlotIQ 
                value={_.get( stagedEditState, [PartitionFields.SlotIQ], slotIq ) } onValueChange={ (value: boolean) => setStagedEditState({ type: StagedEditsActions.UPDATE, payload: { SlotIQ: value } }) } 
            /> 
            <BarcodeOptions 
                value={ _.get( stagedEditState, [PartitionFields.BarcodeOptions], barcodeOptions ) }
                onValueChange={ (value: IBarcodeOptions) => setStagedEditState({ type: StagedEditsActions.UPDATE, payload: { "Barcode Options": value } }) } 
            />
            <Chambers
                mediaType={ mediaType }
                value={ _.get( stagedEditState, [PartitionFields.Chambers], chambers ) }
                onValueChange={ (value: IMediaChambers | ICleaningChambers ) => setStagedEditState({ type: StagedEditsActions.UPDATE, payload: {Chambers: value} }) } 
            />
            <Drives 
                value={ _.get( stagedEditState, [PartitionFields.Drives], drives ) }
                onValueChange={ (value: Array<string>) => setStagedEditState({ type: StagedEditsActions.UPDATE, payload: {Drives: value} }) } 
            />
            { props.partition.mediaType !== MediaTypeEnum.LTOClean && (
                <CleaningPartition 
                    availablePartitions={ props.availablePartitions }
                    value={ _.get( stagedEditState, [PartitionFields.CleaningPartition], cleaningPartition ) }
                    onValueChange={ (value: string | false ) => setStagedEditState({ type: StagedEditsActions.UPDATE, payload: {"Cleaning Partition": value} }) } 
                />
            ) }
            <MLMVerification 
                value={ _.get( stagedEditState, [PartitionFields.MLMVerification], mlmVerification ) }
                onValueChange={ (value: IMLMVerificationConfig ) => setStagedEditState({  type: StagedEditsActions.UPDATE, payload: {[PartitionFields.MLMVerification]: value} }) } 

            />
            { showAdvancedSettings && (
                <>
                    <Emulation />
                    <EmulationOptions />
                    <Taos />
                    <SoftLoad />
                    <MediaZoning/>
                    <Taos />
                    <RoboticLoadBalancing />
                </>
            ) }
            { ( !_.isEmpty( stagedEditState ) || isNewPartition ) && ( <ForceExtraScroll /> ) } 
        </Body>
        <Zoom in={ !_.isEmpty( stagedEditState ) || isNewPartition }>
            <ButtonGroup fullWidth>
                { !isNewPartition && (
                    <Button 
                    sx={{ height: "56px", borderRadius: "0 0 0 16px", transform: "translateY(-56px)" }} 
                    onClick={ () => setStagedEditState( { type: StagedEditsActions.CLEAR, payload: {} } ) }
                    color='error'
                    variant='contained'
                    startIcon={ <Clear /> }>
                        <Typography variant='body1'>
                            Discard Changes
                        </Typography>
                    </Button>
                ) }
                <Button 
                sx={{ height: "56px", borderRadius: "0 0 16px 16px", transform: "translateY(-56px)" }} 
                onClick={ () => { 
                        props.onChange( { ...props.partition, ...stagedEditState, ...newPartitionId  } );
                        setStagedEditState( { type: StagedEditsActions.CLEAR, payload: {} } );
                        if( isNewPartition ){ navigate(`../${ newPartitionId?.id }`) };
                    }
                }
                color='success'
                variant='contained'
                endIcon={ <CheckCircle /> }>
                    <Typography variant='body1'>
                        { isNewPartition ? "Create Partition" : "Save Changes" }
                    </Typography>
                </Button>
            </ButtonGroup>   
        </Zoom>
        <AdvancedSettingsWarning 
            open={ advSettingsWarningOpen }
            onCancel={ () => {
                setShowAdvancedSettings( false );
                setAdvSettingsWarningOpen( false );
            } }
            onConfirm={ () => { 
                setAdvSettingsWarningOpen( false )
                if( !isNewPartition ){
                    props.onChange({ ...props.partition, showAdvancedSettings: true, advancedSettingsConfrimed: true })
                }
            } }
        />
      </Root>
  ) ;
};

export default PartitionDetail;
