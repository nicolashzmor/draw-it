import './TitleWithBackground.scss';
import React, {CSSProperties, ReactElement} from 'react';

interface TitleWithBackgroundProps {
    background: string;
    children: string | ReactElement
    styles?: CSSProperties
}

const TitleWithBackground = ({background, styles, children}: TitleWithBackgroundProps) => {
    return (
        <div className="draw-it-title-with-background" style={{...styles, backgroundImage: `url(${background})`}}>{children}</div>
    );
};

export default TitleWithBackground;
