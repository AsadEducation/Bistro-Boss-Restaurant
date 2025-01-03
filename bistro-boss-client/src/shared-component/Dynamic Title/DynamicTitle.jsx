import React from 'react';
import { Helmet } from 'react-helmet-async';

const DynamicTitle = ({subtitle}) => {
    return (
        <Helmet>
            <title>Bistro Boss || {subtitle}</title>
        </Helmet>
    );
};

export default DynamicTitle;