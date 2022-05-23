import * as React from 'react';
import styled from 'styled-components';
import { BaseTheme } from '../../../assets/theme';
import SpectraLogo from '../../../assets/sllogo-dark.gif';
import { InnerSelection, OuterSelection } from '../Nav';
import { SxProps, Typography, Stack, Grid } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import ListButtonBase from '../NavInner/ListButton';



interface INavSheetProps {
    isOpen: boolean
    onOpenToggle: () => void
    location: InnerSelection
    outerSelection: OuterSelection
    onOuterSelectionChange: (s: OuterSelection) => void
    onInnerSelectionChange: (s: InnerSelection ) => void
}

const Root = styled.div<{ theme: BaseTheme }>`
    padding: 10px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: ${ ({ theme }) => theme.colors.primaryMain };
`;

const AppBarLogo = styled.img`
  width: 145px;
`

const Toolbar = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    // padding: 10px 10px 10px 10px;
    align-items: center;
    :hover{
        cursor: pointer;
    }
`

const LocationContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX( -50% );
    & h5{
        color: #fff;
    }
`;

const ChevronContainer = styled.div`
    margin-left: auto;
    & svg{
        color: #fff;
        scale: 1.5;
    }
`;

const MainNav = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column; 
    padding-top: 2em;
`;

const OuterNavStack = styled( Stack )`
    height: auto;
    width: 100%;
`
const OuterNavItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 162px;
`;

const Triangle = styled.div`
    width: 15px;
    height: 15px;
    margin-top: 1em;
    background: #fff;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    align-self: center;
`;

const Divider = styled.div`
    background: #fff;
    height: 1px;
    width: 100%;
`;

const InnerNavContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    height: 100%;
    width: 100%;
`;

const ButtonList = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-left: 7px;
    padding-right: 7px;
    gap: 5px;
    position: absolute;
    top: 50%;
    transform: translateY( -100% );
    margin-left: 3em;
    margin-right: 3em;
`;

const InnerNavGrid = styled( Grid )`
    width: fit-content;
    height: 100%;
    align-items: center;
    // justify-content: center;
    align-content: center;
`;

const ListButton = styled( ListButtonBase )`
    width: 190px;
`;


const NavSheet: React.FunctionComponent<INavSheetProps> = (props) => {
  return(
      <Root>
        <Toolbar onClick={ props.onOpenToggle }>
            <AppBarLogo src={ SpectraLogo } />
            <LocationContainer>
                <Typography variant='h5'> { props.location.replace('-', ' ') } </Typography>
            </LocationContainer>
            <ChevronContainer>
                { props.isOpen ? <ExpandLess /> : <ExpandMore /> }
            </ChevronContainer>
        </Toolbar>
        <MainNav>
            <OuterNavStack
                direction='row'
                spacing={ 5 }
                justifyContent='space-around'>
            {
                [OuterSelection.Operations,
                OuterSelection.LibraryStatus, 
                OuterSelection.Config, 
                OuterSelection.Tools].map( item => {
                    const selected = props.outerSelection === item;
                    const style: SxProps = {
                        fontWeight: selected ? 'bold' : undefined,
                        color: '#fff',
                        ":hover": {
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        },
                        alignSelf: 'center'
                    }
                   return (
                        <OuterNavItem key={ item }>
                            <Typography 
                                variant='h5'
                                sx={ style } 
                                onClick={ props.onOuterSelectionChange.bind( undefined, item ) }>
                                { item }
                            </Typography>
                            { selected && <Triangle />}
                        </OuterNavItem>
                    )
                })
            }
            </OuterNavStack>
            <Divider />
            <InnerNavContainer>
                {
                props.outerSelection === OuterSelection.Config ? (
                    <InnerNavGrid container spacing={ 1 }>
                        { [InnerSelection.Partitions, InnerSelection.MediaLifecycle, InnerSelection.NetworkSettings, InnerSelection.UserAccounts, InnerSelection.MediaEncryption, InnerSelection.Updates].map( (val, indx) => (
                                <Grid item m={ 6 } key={ indx }>
                                    <ListButton
                                    to={ "/" + val }
                                    selection={ props.location } 
                                    which={ val }
                                    onClick={ () => { 
                                        props.onOpenToggle();
                                        props.onInnerSelectionChange( val )
                                    } }/> 
                                </Grid>) 
                            )
                        }
                    </InnerNavGrid>
                ) : props.outerSelection === OuterSelection.Operations ? (
                    <InnerNavGrid container rowSpacing={ 1 } >
                        { [InnerSelection.MoveMedia, InnerSelection.ImportExport, InnerSelection.ManageDrives].map( (val, indx) => (
                                <Grid item m={ 6 } key={ indx }>
                                    <ListButton 
                                    to={ "/" + val}
                                    selection={ props.location }
                                    which={ val } 
                                    onClick={ () => { 
                                        props.onOpenToggle();
                                        props.onInnerSelectionChange( val )
                                    } }/> 
                                </Grid>) 
                            )
                        }
                    </InnerNavGrid>
                ) : (
                    <ButtonList />
                )
            }
            </InnerNavContainer>
        </MainNav>
      </Root>
  );
};

export default NavSheet;
