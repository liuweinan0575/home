import React from 'react';

const Card = ({img, title, text, children}) => <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card" style={{float: 'left'}}>
    <div className="mdl-card__media">
        <img className="article-image" src={img} alt="" />
    </div>
    <div className="mdl-card__title">
        <h2 className="mdl-card__title-text">{title}</h2>
    </div>
    <div className="mdl-card__supporting-text">
        {text}
    </div>
    <div className="mdl-card__actions mdl-card--border">
        {children}
    </div>
</div>

export default Card;
