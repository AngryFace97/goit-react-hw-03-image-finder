import React from 'react';
import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const ImageGallery = ({items, openModal}) => {
  const {gallery} = styles;

  return (
    <ul className={gallery}>
      {items.map(item => <ImageGalleryItem key={nanoid()} itemData={item} openModal={openModal}/>)}
    </ul>
  )
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired,
}

export default ImageGallery;