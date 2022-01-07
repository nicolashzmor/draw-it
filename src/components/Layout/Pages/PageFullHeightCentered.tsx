import './pages.scss';
import styles from './PageFullHeightCentered.module.scss';
import React from 'react';
import {PageProps} from "./pages.declarations";



const PageFullHeightCentered: React.FC<PageProps> = ({className, children, customStyles}) => {
    return (
        <main className={`${styles.PageFullHeightCentered} ${className}`} style={customStyles}>
            <div className={styles.PageFullHeightCentered__container}>
                {children}
            </div>
        </main>
    );
};

export default PageFullHeightCentered;
