"use client"
import React from 'react'
import { Button, Card, CardSection, Modal, Text, Title } from '@mantine/core'
import styles from "./PricingCard.module.scss"
import { useDisclosure } from '@mantine/hooks'
import BookNowForm from '../BookNowForm'

type PricingCardProps = {
  title: string;
  price: string;
  exterior: string[];
  interior: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, exterior, interior }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card shadow='sm' radius={8}>
        <CardSection className={styles.packageHeader}>
          <Title order={2} className={styles.packageTitle}>{title}</Title>
          <Text className={styles.packagePrice}>{price}</Text>
        </CardSection>

        <div className={styles.packageContent}>
          <div className={styles.packageSection}>
            <Title order={3} className={styles.sectionTitle}>EXTERIOR</Title>

            <ul className={styles.serviceList}>
              {exterior.map((item, index) => (
                <li key={index} className={styles.serviceItem}>
                  <span className={styles.checkmark}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.packageSection}>
            <Title order={3} className={styles.sectionTitle}>INTERIOR</Title>

            <ul className={styles.serviceList}>
              {interior.map((item, index) => (
                <li key={index} className={styles.serviceItem}>
                  <span className={styles.checkmark}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Button color='violet' onClick={open}>
          Book Now
        </Button>
      </Card>

      <Modal opened={opened} onClose={close} title="Book Now" centered size='lg'>
        <BookNowForm selectedPackage={title} />
      </Modal>
    </>
  )
}

export default PricingCard
