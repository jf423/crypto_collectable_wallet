import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AssetList from '../components/AssetList.js';

export default {
    title: 'Components/AssetList',
    component: AssetList,
    argTypes: {
        list: {
            description: 'The list of asset data',
            table: {
                defaultValue: {
                    summary: []
                }
            },
            control: 'array'
        }
    }
};

const Template = (args) => (
    <Router>
        <AssetList {...args} />
    </Router>
);

export const Primary = Template.bind({});

Primary.args = { list: [] };
