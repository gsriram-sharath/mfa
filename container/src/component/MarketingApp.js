import React, { useRef, useEffect } from 'react';

const MarketingApp = () => {
    const ref = useRef(null);

    useEffect(() => {
        const { mount } = require('marketing/MarketingApp');
        mount(ref.current);
    }, []);

    return <div ref={ref} />;
};

export default MarketingApp;
