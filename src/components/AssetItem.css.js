import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { flexStartCenter, flexCenterCenter } from '../style/flex.css.js';

export const Item = styled.div`
    ${flexCenterCenter};
    border: 1px solid #ddd;
    margin: 10px;
    cursor: pointer;
`;

export const StyledLink = styled(Link)`
    ${flexStartCenter};
    width: 100%;
`;

export const Name = styled.span`
    flex: 1;
    margin-left: 10px;
    text-align: center;
`;