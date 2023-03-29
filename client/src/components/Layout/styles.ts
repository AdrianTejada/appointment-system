import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const Cont = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`

export const SideBar = styled(Paper)`
    background-color: #41AF89;
    margin-left: 24px;
    margin-top: 24px;
    margin-bottom: 24px;
    width: 250px;
`

export const Header = styled(Paper)`
    width: calc(100% - (24px * 2));
    color: black;
    margin: 24px;
    padding: 24px;
`

export const ChildrenCont = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Text = styled.div`
    color: ${props=>props.color};
    font-weight: 500;
    letter-spacing: 1px;
`;