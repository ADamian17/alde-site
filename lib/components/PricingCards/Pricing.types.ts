export type PricingCardType = {
  title: string;
  price: Record<string, string>;
  exterior: string[];
  interior: string[];
}

type AddOnType = Array<{ service: string; price: string }>;

export type PricingCardsProps = {
  addOns: Record<'exterior' | 'interior', AddOnType>;
  packages: Array<PricingCardType>;
}
