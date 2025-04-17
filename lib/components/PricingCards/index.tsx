"use client"
import React, { useState } from 'react'
import { Card, Container, Group, SegmentedControl, SimpleGrid, Space, Text, Title } from '@mantine/core'
import styles from './PricingCards.module.scss'
import { PricingCardsProps } from './Pricing.types'
import PricingCard from '../PricingCard'

const PricingCards: React.FC<PricingCardsProps> = ({ packages, addOns }) => {
  const [value, setValue] = useState<string>('sedan');

  return (
    <Container size="xl">
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <img src="/alde-site.png" alt="Garcia's Detailing" className={styles.logo} />
          </div>

          <Title>PRICING GUIDE</Title>
          <Text className={styles.subtitle}>Professional auto detailing services</Text>
        </div>

        {/* Vehicle Type Selection */}
        <Group justify='center' mt='xl' mb='xl'>
          <SegmentedControl
            size='md'
            withItemsBorders={false}
            value={value}
            onChange={setValue}
            data={[
              { label: 'Sedan', value: 'sedan' },
              { label: 'SUV', value: 'suv' },
              { label: 'Truck', value: 'truck' },
            ]}
          />
        </Group>

        {/* Service Packages */}
        <SimpleGrid cols={{ base: 1, md: packages.length }}>
          {(packages ?? []).map((pkg) => (
            <PricingCard
              key={pkg.title}
              title={pkg.title}
              price={pkg.price[value as keyof typeof pkg.price]}
              exterior={pkg.exterior}
              interior={pkg.interior}
            />
          ))}
        </SimpleGrid>

        <Space h="xl" />

        {/* Add-On Services */}
        <div className={styles.addOnCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>ADD-ON SERVICES</h2>
          </div>

          <div className={styles.addOnContent}>
            <div className={styles.addOnGrid}>
              {/* Exterior Add-ons */}
              <div className={styles.addOnSection}>
                <h3 className={styles.addOnSectionTitle}>EXTERIOR</h3>
                <ul className={styles.addOnList}>
                  {addOns.exterior.map((item, index) => (
                    <li key={index} className={styles.addOnItem}>
                      <span>{item.service}</span>
                      <span className={styles.addOnPrice}>{item.price}</span>
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
                      <span className={styles.addOnPrice}>{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <Card shadow='sm' radius={8} ta='center'>
          <Text>PRICE MAY VARY ON THE CONDITION OF THE VEHICLE</Text>
          <Text>FINAL PRICE IS CONFIRMED AFTER INSPECTION</Text>

          <div className={styles.phoneContainer}>
            CALL OR TEXT <a href="tel:5106808727" className={styles.phoneLink}>510-680-8727</a> TO REQUEST AN APPOINTMENT
          </div>
        </Card>
      </main>
    </Container>
  )
}

export default PricingCards
