import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AssetDetail from '../components/AssetDetail.js';

export default {
    title: 'Components/AssetDetail',
    component: AssetDetail,
    argTypes: {
        data: {
            description: 'The asset data (name, description, collection, image_url, permalink)',
            table: {
                defaultValue: {
                    summary: {
                        name: 'Royal Card Back',
                        description: 'Card backs are collectible NFT cosmetic items.',
                        collection: {
                            name: 'Gods Unchained Collectibles'
                        },
                        image_url: 'https://lh3.googleusercontent.com/lYSQOB839XsE7hdv2q-gwMFea6IIN6wZbEtuikMlfzOVMq_OrXzfgR63E8WTpcXYGYEbydytbkCnPoKKYAevQa_h',
                        permalink: 'https://opensea.io/assets/0xfe707abaead863313d926f7b369977c3b626678f/787'
                    }
                }
            },
            control: 'object'
        }
    }
};

const Template = (args) => (
    <Router>
        <AssetDetail {...args} />
    </Router>
);

export const Primary = Template.bind({});

Primary.args = {
    data: {
        name: 'Royal Card Back',
        description: 'Card backs are collectible NFT cosmetic items.',
        collection: {
            name: 'Gods Unchained Collectibles'
        },
        image_url: 'https://lh3.googleusercontent.com/lYSQOB839XsE7hdv2q-gwMFea6IIN6wZbEtuikMlfzOVMq_OrXzfgR63E8WTpcXYGYEbydytbkCnPoKKYAevQa_h',
        permalink: 'https://opensea.io/assets/0xfe707abaead863313d926f7b369977c3b626678f/787'
    }
};
