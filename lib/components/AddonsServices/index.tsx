import React from 'react'
import { Card, CardSection } from '@mantine/core';

import styles from './AddonsServices.module.scss'

type AddOnType = Array<{ service: string; price: string }>;

export type AddonsServicesProps = {
  addOns: Record<'exterior' | 'interior', AddOnType>;
}

const AddonsServices: React.FC<AddonsServicesProps> = ({ addOns }) => (
  <Card shadow='sm' radius={8}>
    <CardSection className={styles.cardHeader}>
      <h2 className={styles.cardTitle}>ADD-ONS (Optional Services)</h2>
    </CardSection>

    <div className={styles.addOnContent}>
      <div className={styles.addOnGrid}>
        {/* Exterior Add-ons */}
        <div className={styles.addOnSection}>
          <h3 className={styles.addOnSectionTitle}>EXTERIOR</h3>
          <ul className={styles.addOnList}>
            {addOns.exterior.map((item, index) => (
              <li key={index} className={styles.addOnItem}>
                <span>{item.service}</span>
                <span className={styles.addOnPrice}>{item.price}$</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interior Add-ons */}
        <div className={styles.addOnSection}>
          <h3 className={styles.addOnSectionTitle}>INTERIOR</h3>
          <ul className={styles.addOnList}>
            {addOns.interior.map((item, index) => (
              <li key={index} className={styles.addOnItem}>
                <span>{item.service}</span>
                <span className={styles.addOnPrice}>{item.price}$</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Card>
)

export default AddonsServices
