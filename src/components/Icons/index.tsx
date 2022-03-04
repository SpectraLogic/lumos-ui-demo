import { SvgIcon, SvgIconProps } from "@mui/material";
import styled from 'styled-components';

const StyledSvgIcon = styled(SvgIcon)`
    height: 24px;
    width: 24px;
`;

export function PartitionIcon( props: SvgIconProps ){
    return (
        <SvgIcon  {...props}>
            <path d="M8 0C3.58 0 0 1.79 0 4C0 6.21 3.58 8 8 8C12.42 8 16 6.21 16 4C16 1.79 12.42 0 8 0ZM0 6V9C0 11.21 3.58 13 8 13C12.42 13 16 11.21 16 9V6C16 8.21 12.42 10 8 10C3.58 10 0 8.21 0 6ZM0 11V14C0 16.21 3.58 18 8 18C12.42 18 16 16.21 16 14V11C16 13.21 12.42 15 8 15C3.58 15 0 13.21 0 11Z"/>
        </SvgIcon>
    );
}

export function LifecycleIcon( props: SvgIconProps ){
    return (
    <SvgIcon {...props}>
        <path d="M8 5V8L12 4L8 0V3C3.58 3 0 6.58 0 11C0 12.57 0.46 14.03 1.24 15.26L2.7 13.8C2.25 12.97 2 12.01 2 11C2 7.69 4.69 5 8 5ZM14.76 6.74L13.3 8.2C13.74 9.04 14 9.99 14 11C14 14.31 11.31 17 8 17V14L4 18L8 22V19C12.42 19 16 15.42 16 11C16 9.43 15.54 7.97 14.76 6.74Z" />
    </SvgIcon>
)}


export function NetworkIcon( props: SvgIconProps ){
    return(
    <SvgIcon {...props}>
        <path d="M8 0C6.89 0 6 0.89 6 2V5C6 6.11 6.89 7 8 7H9V9H0V11H4V13H3C1.89 13 1 13.89 1 15V18C1 19.11 1.89 20 3 20H7C8.11 20 9 19.11 9 18V15C9 13.89 8.11 13 7 13H6V11H14V13H13C11.89 13 11 13.89 11 15V18C11 19.11 11.89 20 13 20H17C18.11 20 19 19.11 19 18V15C19 13.89 18.11 13 17 13H16V11H20V9H11V7H12C13.11 7 14 6.11 14 5V2C14 0.89 13.11 0 12 0H8ZM8 2H12V5H8V2ZM3 15H7V18H3V15ZM13 15H17V18H13V15Z" fill="#979797"/>
    </SvgIcon>
)}

