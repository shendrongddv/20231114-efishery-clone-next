import Footer from "@/components/footer/footer";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
