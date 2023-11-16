import Blog from "./_components/blog";
import Hero from "./_components/hero";
import JoinUs from "./_components/join-us";
import OurMisions from "./_components/our-missions";
import OurSolutions from "./_components/our-solutions";
import Products from "./_components/products";
import Reviews from "./_components/reviews";
import WhyUs from "./_components/why-us";

const HomePage = () => {
  return (
    <>
      {/* Group */}
      <div className="relative flex bg-[url(/home-hero-hifi-1.webp)] bg-cover bg-[75%_50%] bg-no-repeat">
        {/* Overlay */}
        <span className="absolute inset-0 z-0 bg-black bg-opacity-30"></span>

        {/* Content */}
        <div className="z-10 w-full">
          {/* Hero */}
          <Hero />

          {/* WhyUs */}
          <WhyUs />
        </div>
      </div>

      {/* OurMisions */}
      <OurMisions />

      {/* Products */}
      <Products />

      {/* Reviews */}
      <Reviews />

      {/* JoinUs */}
      <JoinUs />

      {/* Blog */}
      <Blog />

      {/* OurSolutions */}
      <OurSolutions />
    </>
  );
};

export default HomePage;
