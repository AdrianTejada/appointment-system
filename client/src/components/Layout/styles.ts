import styled from "@emotion/styled";

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
    justify-content: center;
`

export const Text = styled.div`
    color: ${props=>props.color};
    font-weight: 500;
    letter-spacing: 1px;
`;