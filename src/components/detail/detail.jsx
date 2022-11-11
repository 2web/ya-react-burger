import React from 'react';
import PropTypes from 'prop-types';
import { ingredientDetailsPropTypes,_calTitle,_prTitle,_faTitle,_carTitle } from '../../utils/const'

import styles from './detail.module.css';

function IngredientDetails({ card }) {
  const { name, image_large, calories, proteins, fat, carbohydrates } = card
  
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image_large} alt={name} title={name} />
      <p className='text text_type_main-medium mt-4 mb-8'>{name}</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className='text text_type_main-default'>{_calTitle}</p>
          <span className='text text_type_digits-default'>{calories}</span>
        </li>
        <li className={styles.item}>
          <p className='text text_type_main-default'>{_prTitle}</p>
          <span className='text text_type_digits-default'>{proteins}</span>
        </li>
        <li className={styles.item}>
          <p className='text text_type_main-default'>{_faTitle}</p>
          <span className='text text_type_digits-default'>{fat}</span>
        </li>
        <li className={styles.item}>
          <p className='text text_type_main-default'>{_carTitle}</p>
          <span className='text text_type_digits-default'>{carbohydrates}</span>
        </li>
      </ul>
    </div>
  )
}

IngredientDetails.propTypes = {
    card: PropTypes.shape({ingredientDetailsPropTypes}).isRequired
}

export default IngredientDetails;