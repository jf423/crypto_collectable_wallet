import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link, useParams, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { isRequestSucceed, GET_ASSET_DETAIL_API } from '../config/api.js';

import {
    Container,
    Header,
    Content,
    Image,
    StyledButton,
    Name,
    Description
} from './AssetDetail.css.js';

export default function AssetDetail({ data }) {
    const [assetData, setAssetData] = useState(data);
    const { address, token } = useParams();
    const history = useHistory();
    const { name, description, collection = {}, image_url, permalink } = assetData;

    useEffect(() => {
        fetch(`${GET_ASSET_DETAIL_API}/${address}/${token}`)
            .then(res => isRequestSucceed(res.status) ? res.json() : null)
            .then((result) => {
                if (result) {
                    setAssetData(result);
                }
            })
            .catch((err) => {
                history.push('/assetList');
            });
    }, []);

    return (
        <Container>
            <Header>
                <Link to="/assetList">
                    <ArrowBackIosIcon/>
                </Link>
                {collection.name}
            </Header>
            <Content>
                <Image url={image_url} />
                <Name>{name}</Name>
                <Description>{description}</Description>
                <StyledButton variant="contained" color="primary" href={permalink}>Permalink</StyledButton>
            </Content>
        </Container>
    );
};

AssetDetail.defaultProps = {
    data: {
        name: '-',
        description: '',
        collection: {},
        image_url: '',
        permalink: ''
    }
};

AssetDetail.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        collection: PropTypes.object.isRequired,
        image_url: PropTypes.string.isRequired,
        permalink: PropTypes.string.isRequired
    })
};
