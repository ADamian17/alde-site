"use client";
import { builder } from "@builder.io/sdk";
import { registerPricingCards } from "./lib/containers/PricingCardsContainer/registerPricingCards";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

registerPricingCards();
