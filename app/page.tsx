import { Card, Container, SimpleGrid, Space, Text, Title } from '@mantine/core';
import styles from './page.module.css';
import PricingCard from '@/components/PricingCard';

export default function Pricing() {
  const packageData = {
    standard: {
      title: "STANDARD",
      price: "$100",
      exterior: [
        "WHEELS / TIRES",
        "PRE WASH TREATMENT",
        "FOAM HAND WASH",
        "SPRAY WAX (1 MONTH)",
        "TIRE SHINE"
      ],
      interior: [
        "FULL VACUUM & AIR BLOWOUT",
        "FULL WIPE DOWN",
        "WINDOWS CLEANED",
        "DOOR JAMS CLEANED"
      ]
    },
    washWax: {
      title: "WASH & WAX",
      price: "$200",
      exterior: [
        "WHEELS / TIRES",
        "PRE WASH & HAND WASH",
        "PAINT DECONTAMINATION",
        "CLAY BAR",
        "CERAMIC PAINT PROTECTION (6 MONTH)",
        "TIRE SHINE"
      ],
      interior: [
        "FULL VACUUM & AIR BLOWOUT",
        "FULL WIPE DOWN",
        "WINDOWS CLEANED",
        "DOOR JAMS CLEANED"
      ]
    },
    fullDetail: {
      title: "FULL DETAIL",
      price: "$350",
      exterior: [
        "FULL WASH & WAX EXTERIOR PROCESS"
      ],
      interior: [
        "FULL VACUUM AND AIR BLOWOUT",
        "FULL LEATHER CLEANING OR FULL SHAMPOO CLEANING",
        "FULL INTERIOR PANELS STEAMED CLEANED & SCRUB DOWN",
        "WINDOWS CLEANED",
        "DOOR JAMS CLEANED"
      ]
    }
  };

  const addOns = {
    exterior: [
      { service: "HEADLIGHT RESTORATION", price: "$80" },
      { service: "ENGINE BAY CLEANING", price: "$60+" },
      { service: "WINDSHIELD CERAMIC COATING", price: "$75+" }
    ],
    interior: [
      { service: "SEAT SHAMPOO", price: "$100+" },
      { service: "STEAM CLEAN INTERIOR", price: "$75+" },
      { service: "LEATHER CLEANING", price: "$60+" },
      { service: "ODOR REMOVAL", price: "Call for pricing" },
      { service: "HEADLINER CLEANING", price: "Call for pricing" }
    ],
    additional: [
      "RIM COATING",
      "INTERIOR LEATHER COATING",
      "WINDOW COATING"
    ]
  };

  return (
    <Container size="xl">
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <img src="/alde-site.png" alt="Garcia's Detailing" className={styles.logo} />
          </div>

          <Title>PRICING GUIDE</Title>
          <p className={styles.subtitle}>Professional auto detailing services</p>
        </div>

        {/* Service Packages */}
        <SimpleGrid cols={{ base: 1, md: 3 }}>
          {Object.values(packageData).map((pkg) => (
            <PricingCard key={pkg.title} title={pkg.title} price={pkg.price} exterior={pkg.exterior} interior={pkg.interior} />
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
  );
}
