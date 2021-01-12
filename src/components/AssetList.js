import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';

import CircularProgress from '@material-ui/core/CircularProgress';

import { GET_ASSET_LIST_API } from '../config/api.js';

import AssetItem from './AssetItem.js';

import { Container, Header, Content, Loading } from './AssetList.css.js';

const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 20;
const ETHEREUM_ACCOUNT = '0x960DE9907A2e2f5363646d48D7FB675Cd2892e91';

export default function AssetList({ list }) {
    const [assetList, setAssetList] = useState(list);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [offset, setOffset] = useState(DEFAULT_OFFSET);
    console.log('assetList', assetList);
    const itemCount = hasNextPage ? assetList.length + 1 : assetList.length;
    const loadNextPage = () => {
        fetch(`${GET_ASSET_LIST_API}?owner=${ETHEREUM_ACCOUNT}&offset=${offset}&limit=${DEFAULT_LIMIT}`)
            .then(res => res.json())
            .then(({ assets }) => {
                if (assets.length > 0) {
                    setAssetList(assetList.concat(assets));
                    setOffset(offset + 1);
                }
                setHasNextPage(assets.length !== 0);
            });
    };
    
    useEffect(() => {
        loadNextPage();
    }, []);

    return (
        <Container>
            <Header>Assets List</Header>
            <Content>
                { assetList.length === 0 &&
                    <Loading>
                        <CircularProgress />
                    </Loading>
                }
                { assetList.length > 0 &&
                    <AutoSizer>
                        {({ width, height }) => (
                            <InfiniteLoader
                                isItemLoaded={index => !hasNextPage || index < assetList.length}
                                itemCount={itemCount}
                                loadMoreItems={loadNextPage}
                            >
                                {({ onItemsRendered, ref }) => (
                                    <List
                                        width={width}
                                        height={height}
                                        itemCount={itemCount}
                                        itemSize={50}
                                        itemData={{ hasNextPage, assetList }}
                                        onItemsRendered={onItemsRendered}
                                        ref={ref}
                                    >
                                        {AssetItem}
                                    </List>
                                )}
                            </InfiniteLoader>
                        )}
                    </AutoSizer>
                }
            </Content>
        </Container>
    );
}

AssetList.defaultProps = {
    list: []
};

AssetList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object)
};
