import React from 'react';
import partIcon from 'img/Vectorparts.svg';
import sn from 'classnames';
import style from './SpinningPart.module.css';

function SpinningPart({ size = 'normal', styleInline }) {
  return (
    <img
      className={sn(
        style.icon,
        { [style.iconNormal]: size === 'normal' },
        { [style.iconBig]: size === 'big' },
      )}
      style={
        styleInline || {
          top: '229px',
          left: '10px',
          transform: 'rotate(-135deg)',
        }
      }
      src={partIcon}
      alt="icon part"
    />
  );
}

export default SpinningPart;
