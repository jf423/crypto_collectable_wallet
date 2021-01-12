import styled from 'styled-components';

import { flexCenterCenter } from '../style/flex.css.js';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const Header = styled.header`
    ${flexCenterCenter};
    width: 100%;
    height: 50px;
`;

export const Content = styled.div`
    width: 100%;
    height: calc(100% - 50px);
`;

export const Loading = styled.div`
    ${flexCenterCenter};
    width: 100%;
    height: 100%;
`;
