import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Item, StyledLink, Name } from './AssetItem.css.js';

export default function AssetItem({ data, index, style }) {
    const { hasNextPage, assetList } = data;
    const { name, image_thumbnail_url, asset_contract, token_id } = assetList[index] || {};
    const hasLoading = hasNextPage && index === assetList.length;

    return (
        <div style={style}>
            <Item>
                { hasLoading && <CircularProgress />}
                { !hasLoading &&
                    <StyledLink to={`/assetDetail/${asset_contract.address}/${token_id}`}>
                        <Avatar alt={name} src={image_thumbnail_url} />
                        <Name>{name}</Name>
                    </StyledLink>
                }
            </Item>
        </div>
    );
}

AssetItem.propTypes = {
    data: PropTypes.shape({
        hasNextPage: PropTypes.number.isRequired,
        assetList: PropTypes.array.isRequired
    }),
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired
};
