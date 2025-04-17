"use client";
import { ComponentProps } from "react";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import "@/builder-registry";

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

export function RenderBuilderSections(props: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();

  if (props.content || isPreviewing) {
    return <BuilderComponent {...props} options={{ enrich: true }} />;
  }

  return null;
}