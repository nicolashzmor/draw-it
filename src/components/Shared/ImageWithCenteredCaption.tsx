import './TitleWithBackground.scss';
import React, {CSSProperties} from 'react';

interface TitleWithBackgroundProps {
    background: string;
    styles?: CSSProperties
}

const ImageWithCenteredCaption: React.FC<TitleWithBackgroundProps> = ({background, styles, children}) => {
    return (
        <div className="draw-it-title-with-background"
             style={{...styles, backgroundImage: `url(${background})`}}>{children}</div>
    );
};

export default ImageWithCenteredCaption;
