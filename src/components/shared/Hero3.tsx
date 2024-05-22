interface Hero3Props {
    h1: string;
    p: string;
    img: string;
  }


export default function Hero3({ h1, p, img }: Hero3Props) {
    return (
      <>
        {/* Hero */}
        <div className="relative overflow-hidden py-12 lg:py-24">
          <div className="container">
            <div className="max-w-2xl text-center mx-auto">
              <h1 className="scroll-m-20 text-5xl font-garamond text-cream1 tracking-wide lg:text-5xl">
                {h1}
              </h1>
              <p className="mt-3 text-lg font-garamond tracking-widest text-cream1">
                {p}
              </p>
            </div>
            <div className="mt-10 relative max-w-5xl mx-auto">
              <img
                src={img}
                className="rounded-lg"
                alt="Image Description"
              />
              <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
                <div className="w-48 h-48 rounded-lg bg-background/10" />
              </div>
              <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
                <div className="w-48 h-48 rounded-full bg-background/10" />
              </div>
            </div>
          </div>
        </div>
        {/* End Hero */}
      </>
    );
  }
  