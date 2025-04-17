"use client";
import { ComponentProps } from "react";
import { notFound } from "next/navigation";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import "@/builder-registry";

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

export function RenderBuilderContent(props: BuilderPageProps) {
  // Call the useIsPreviewing hook to determine if 
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();
  // If `content` has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (props.content || isPreviewing) {
    return <BuilderComponent {...props} options={{ enrich: true }} />;
  }

  // If the `content` is falsy and the page is 
  // not being previewed in Builder, render the 
  // Render 404 page.
  return notFound();
}