"use client";
import { builder } from "@builder.io/sdk";
import { registerPricingCards } from "./lib/components/PricingCards/registerPricingCards";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

registerPricingCards()
