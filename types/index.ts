export type PageProps<P extends Record<string, string | string[]>> = {
  params: Promise<P>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
