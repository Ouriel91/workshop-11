import React from 'react';
import PropTypes from 'prop-types';
import './loader.css';

/**
 * Primary UI component for user interaction
 */
/* <div style="width:50px; height: 50px; position: relative;">
        <svg class="circle-loader-spinner" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
        </svg>
</div> */
export const Loader = ({xy, r, stroke, backgroundColor,varient, ...props}) => {
  return (
    <div className="svg-loader">
        <svg className="svg-container" viewBox="0 0 100 100" style={{backgroundColor: backgroundColor}}>
            {varient === 'with' && <circle class="loader-svg bg" cx={xy} cy={xy} r={r}></circle>}
            <circle className="loader-svg animate" cx={xy} cy={xy} r={r} stroke={stroke}></circle>
        </svg>
    </div>
  );
};

Loader.propTypes = {
  /**
   * What background color to use
   */
  stroke: PropTypes.string,
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['xs','s', 'm', 'l']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  state: PropTypes.oneOf(['dark','primary', 'secondary', 'oncolor']),
  varient: PropTypes.oneOf(['no', 'with']),
  /**
   * Optional click handler
   */
};

Loader.defaultProps = {
  backgroundColor: '#fff',
  size: 'xs',
  state: 'dark',
  label: 'loader',
  varient: 'no',
  stroke: 'black',
};
