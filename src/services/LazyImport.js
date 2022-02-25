import React from 'react';

const LazyImport = (key, path) => {
    return React.lazy(async () => {
        const Component = await import(`${path}`);
        return { default: Component[key] ? Component[key] : Component };
    });
};

export default LazyImport;
