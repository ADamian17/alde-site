type PricingCardType = {
  title: string;
  price: Record<string, string>;
  exterior: Array<{ service: string}>;
  interior: Array<{ service: string}>;
}

type AddOnType = Array<{ service: string; price: string }>;

export type PricingCardsProps = {
  addOns: Record<'exterior' | 'interior', AddOnType>;
  packages: Array<PricingCardType>;
  vehicleTypeSelection: Array<Record<"label" | "value", string>>;
}
