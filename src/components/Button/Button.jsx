import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({loadMore}) => {
  const {btn} = styles;

  return (
    <>
     <button 
      type="button" 
      className={btn} 
      onClick={loadMore}
    >
      Load more
    </button> 
    </>
  )
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
}

export default Button;