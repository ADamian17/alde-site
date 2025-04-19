import MainFooter from "@/lib/layouts/MainFooter";

const PageLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => (
  <>
    {children}
    <MainFooter />
  </>
);

export default PageLayout;
