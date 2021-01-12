import styled from 'styled-components';

import Button from '@material-ui/core/Button';

import { flexStartCenter, flexCenterCenter } from '../style/flex.css.js';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const Header = styled.header`
    ${flexStartCenter};
    width: 100%;
    height: 50px;
    padding-left: 15px;
`;

export const Image = styled.img`
    width: 100vw;
    height: 50vh;
    background-size: contain;
    background-image: url(${({ url }) => url});
    background-repeat: no-repeat;
    background-position: center center;
    background-color: #ddd;
`;

export const Item = styled.div`
    ${flexCenterCenter};
    border: 1px solid #ddd;
    margin: 10px;
    cursor: pointer;
`;

export const StyledButton = styled(Button)`
    width: 80%;
`;

export const Name = styled.h1`
    margin: 10px 0px;
`;

export const Description = styled.p`
    height: 25%;
    overflow: auto;
    margin: 15px;
    word-break: break-word;
`;

export const Content = styled.div`
    ${flexStartCenter};
    flex-direction: column;
    width: 100%;
    height: calc(100% - 50px);

    ${StyledButton} {
        margin-bottom: 20px;
    }
`;
