import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';

/**
 * Primary UI component for user interaction
 */
export const Avatar = ({ src ,shapes, size, disabled, backgroundColor, label, content, ...props }) => {
    let hide = ''
    if(disabled){
      hide = 'hide'
    }
    return (
      <div class="containerBox">
        <div class="text-box">
          <h4>{content}</h4>
      </div>
        <img
          src={src}
          className={`storybook-avatar-${shapes} ${size} ${hide}`} 
          style={backgroundColor && { backgroundColor }}
          {...props}
        />
      </div>
    )
};

Avatar.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  shapes: PropTypes.oneOf(['round', 'square']),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  disabled: PropTypes.bool, 
};

Avatar.defaultProps = {
    src: 'https://files.monday.com/use1/photos/12322359/thumb/12322359-user_photo_2021_11_17_18_40_38.png?1637174438',
    backgroundColor: '#fff',
    shapes: 'round',
    content: 'picture',
    label: 'Avatar',
    size: 'large',
    disabled: false
};
