import stock1 from '../../../public/assets/images/site-images/stock1.jpeg';

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <div className="container py-24 lg:py-32">
        {/* Grid */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Elevate your home dining experience.
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Enjoy the taste of restaurant cuisine from the comfort of your own home or event space.
            </p>
          </div>
          {/* End Col */}
          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img
              className="w-full rounded-xl"
              src={stock1}
              alt="Image Description"
            />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
}
