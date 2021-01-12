import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AssetItem from '../components/AssetItem.js';

export default {
    title: 'Components/AssetItem',
    component: AssetItem,
    argTypes: {
        data: {
            description: 'The data which comes from AssetList (hasNextPage, assetList)',
            table: {
                defaultValue: {
                    summary: {}
                }
            },
            control: 'object'
        },
        hasNextPage: {
            description: 'The flag to tell whether do we have the next page',
            table: {
                defaultValue: {
                    summary: false
                }
            },
            control: 'boolean'
        },
        assetList: {
            description: 'The list of asset data ({ name, image_thumbnail_url, asset_contract, token_id })',
            table: {
                defaultValue: {
                    summary: [{}]
                }
            },
            control: 'array'
        },
        index: {
            description: 'The asset index',
            table: {
                defaultValue: {
                    summary: 0
                }
            },
            control: 'number' 
        },
        style: {
            description: 'The position style from react-window calculation',
            table: {
                defaultValue: {
                    summary: {}
                }
            },
            control: 'object' 
        }
    }
};

const Template = (args) => (
    <Router>
        <AssetItem {...args} />
    </Router>
);

export const Primary = Template.bind({});

Primary.args = {
    data: {
        hasNextPage: false,
        assetList: [{
            name: 'Asset Name',
            image_thumbnail_url: 'https://lh3.googleusercontent.com/lYSQOB839XsE7hdv2q-gwMFea6IIN6wZbEtuikMlfzOVMq_OrXzfgR63E8WTpcXYGYEbydytbkCnPoKKYAevQa_h=s128',
            asset_contract: {
                address: ''
            },
            token_id: ''
        }]
    },
    index: 0,
    style: {}
};
