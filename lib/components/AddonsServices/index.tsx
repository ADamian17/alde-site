import React from 'react'
import { Card, CardSection, Group } from '@mantine/core';

import styles from './AddonsServices.module.scss'

type AddOnType = Array<{ service: string; price: string }>;

export type AddonsServicesProps = {
  addOnsList: AddOnType;
}

const AddonsServices: React.FC<AddonsServicesProps> = ({ addOnsList }) => (
  <Card shadow='sm' radius={8}>
    <CardSection className={styles.cardHeader}>
      <h2 className={styles.cardTitle}>ADD-ONS (Optional Services)</h2>
    </CardSection>

    <div className={styles.addOnContent}>
      <div className={styles.addOnSection}>
        <Group justify='space-between' className={styles.addOnSectionTitle}>
          <h3>Add on</h3>
          <p>price</p>
        </Group>

        <ul className={styles.addOnList}>
          {addOnsList.map((item, index) => (
            <li key={index} className={styles.addOnItem}>
              <span>{item?.service}</span>
              <span className={styles.addOnPrice}>{item?.price}$</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Card>
)

export default AddonsServices
