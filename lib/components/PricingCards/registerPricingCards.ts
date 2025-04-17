import { Builder } from '@builder.io/react';
import PricingCards from ".";

export const registerPricingCards = () => {
  Builder.registerComponent(PricingCards, {
    name: "PricingCards",
    inputs: [
      {
        name: "vehicleTypeSelection",
        type: "list",
        subFields: [
          {
            defaultValue: "Sedan",
            enum: ["Sedan", "SUV", "Truck"],
            name: "label",
            type: "string",
          },
          {
            defaultValue: "sedan",
            enum: ["sedan", "suv", "truck"],
            name: "value",
            type: "string",
          }
        ],
        defaultValue: [
          {
            label: "Sedan",
            value: "sedan"
          }
        ]
      },
      {
        name: "packages",
        type: "list",
        subFields: [
          {
            name: "title",
            type: "string",
          },
          {
            name: "price",
            type: "object",
            subFields: [
              {
                name: "sedan",
                type: "string",
              },
              {
                name: "suv",
                type: "string",
              },
              {
                name: "truck",
                type: "string",
              }
            ]
          },
          {
            name: "exterior",
            type: "list",
            subFields: [
              {
                name: "service",
                type: "string",
              }
            ],
            defaultValue: []
          },
          {
            name: "interior",
            type: "list",
            subFields: [
              {
                name: "service",
                type: "string",
              }
            ],
            defaultValue: []
          },
        ],
        defaultValue: [
          {
            title: "Basic",
            price: {
              sedan: "0",
              suv: "0",
              truck: "0"
            },
            exterior: [],
            interior: []
          }
        ]
      },
      {
        name: "addOns",
        type: "list",
        subFields: [
          {
            name: "interior",
            type: "list",
            subFields: [
              {
                name: "service",
                type: "string",
              },
              {
                name: "price",
                type: "string",
              }
            ]
          }, 
          {
            name: "exterior",
            type: "list",
            subFields: [
              {
                name: "service",
                type: "string",
              },
              {
                name: "price",
                type: "string",
              }
            ]
          }
        ],
        defaultValue: {
          interior: [],
          exterior: []
        }
      }
    ]
  });
}
