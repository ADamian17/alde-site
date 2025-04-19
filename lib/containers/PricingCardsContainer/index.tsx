import React from 'react'
import Image from 'next/image'
import { Card, Container, Group, Space, Text, Title } from '@mantine/core'

import styles from './PricingCardsContainer.module.scss'
import AddonsServices, { AddonsServicesProps } from '@/lib/components/AddonsServices'
import PricingCards, { PricingCardsProps } from '@/lib/components/PricingCards'

interface PricingCardsContainerProps extends PricingCardsProps, AddonsServicesProps {
  headline: string;
}

const PricingCardsContainer: React.FC<PricingCardsContainerProps> = ({ packages, vehicleTypeSelection, addOnsList }) => (
  <Container size="xl">
    <div className={styles.header}>
      <Group justify='center'>
        <Image src="/alde-site.png" alt="Garcia's Detailing" width={158} height={160} />
      </Group>

      <Title tt="uppercase">PRICING GUIDE</Title>
      <Text mt={8} c="dimmed" fz="1.125rem">Professional auto detailing services</Text>
    </div>

    <PricingCards packages={packages} vehicleTypeSelection={vehicleTypeSelection} />

    <Space h="xl" />

    <AddonsServices addOnsList={addOnsList} />

    <Space h="xl" />

    <Card shadow='sm' radius={8} ta='center'>
      <Text>PRICE MAY VARY ON THE CONDITION OF THE VEHICLE</Text>
      <Text>FINAL PRICE IS CONFIRMED AFTER INSPECTION</Text>

      <div className={styles.phoneContainer}>
        CALL OR TEXT <a href="tel:5106808727" className={styles.phoneLink}>510-680-8727</a> TO REQUEST AN APPOINTMENT
      </div>
    </Card>
  </Container>
)

export default PricingCardsContainer
