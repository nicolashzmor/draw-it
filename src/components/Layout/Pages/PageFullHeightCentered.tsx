import './pages.scss';
import React from 'react';
import {PageProps} from "./pages.declarations";

const PageFullHeightCentered = ({className, children}: PageProps) => {
    return (
        <div className={`draw-it-page draw-it-page--full-height-centered ${className}`}>
            {children}
        </div>
    );
};

export default PageFullHeightCentered;
