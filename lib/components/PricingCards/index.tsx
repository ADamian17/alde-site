"use client"
import React, { useState } from 'react'
import { Group, SegmentedControl, SimpleGrid } from '@mantine/core'

import { getPackagePrice } from './PricingCards.utils'
import PricingCard from '../PricingCard'

type PricingCardType = {
  title: string;
  price: Record<string, string>;
  exterior: Array<{ service: string }>;
  interior: Array<{ service: string }>;
}

export type PricingCardsProps = {
  packages: Array<PricingCardType>;
  vehicleTypeSelection: Array<Record<"label" | "value", string>>;
}


const PricingCards: React.FC<PricingCardsProps> = ({ packages, vehicleTypeSelection }) => {
  const [priceByVehicle, setPriceByVehicle] = useState<string>('sedan');

  return (
    <>
      {/* Vehicle Type Selection */}
      <Group justify='center' mt='xl' mb='xl'>
        <SegmentedControl
          data={vehicleTypeSelection}
          onChange={setPriceByVehicle}
          size='md'
          value={priceByVehicle}
          withItemsBorders={false}
        />
      </Group>

      <SimpleGrid cols={{ base: 1, md: packages.length }}>
        {(packages ?? []).map((pkg) => (
          <PricingCard
            key={pkg.title + Date.now()}
            title={pkg.title}
            price={getPackagePrice(pkg.price, priceByVehicle)}
            exterior={pkg.exterior}
            interior={pkg.interior}
          />
        ))}
      </SimpleGrid>
    </>
  )
}

export default PricingCards
