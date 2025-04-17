import { cache } from "react";
import { builder } from "@builder.io/sdk";
import { Metadata, ResolvingMetadata } from "next";
import { PageProps } from "@/types";
import { RenderBuilderContent } from "@/lib/components/RenderBuilderContent";

type HomePageLpProps = PageProps<{ page: string[] }>

const builderModel = "page";

const getPageContent = cache(async (pageModelName: string, urlPath: string) => {
  const content = await builder.get(pageModelName, {
    cachebust: true,
    enrich: true,
    userAttributes: {
      urlPath,
    },
  }).toPromise();

  return content;
})

const HomePageLp = async ({ params }: HomePageLpProps) => {
  const page = (await params).page;
  const urlPath = `/${(page?.join("/") ?? "")}`;

  const content = await getPageContent(builderModel, urlPath)

  return <RenderBuilderContent content={content} model={builderModel} />
}

export default HomePageLp;

/**
 * Dynamic metadata depends on dynamic information, such as the current route parameters, external data, or metadata in parent segments, can be set by exporting a generateMetadata function that returns a Metadata object.
 *
 * @param {HomePageLpProps} params - The parameters for the home page.
 * @param {ResolvingMetadata} parent - The parent metadata to resolve.
 * @returns {Promise<Metadata>} A promise that resolves to the generated metadata.
 * 
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 * 
 * We are getting the metadata from Builder.io Page model, metadata object field
 */
export const generateMetadata = async ({ params }: HomePageLpProps, parent: ResolvingMetadata): Promise<Metadata> => {
  const page = (await params).page;
  const urlPath = `/${(page?.join("/") ?? "")}`;
  const content = await getPageContent(builderModel, urlPath)
  const prevMetadata = await parent

  return {
    ...prevMetadata,
    ...content?.data?.metadata
  } as Metadata
}
