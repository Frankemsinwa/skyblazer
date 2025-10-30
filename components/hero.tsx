export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Elevate Your <span className="text-accent">Brand</span> Presence
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Strategic events, compelling magazines, and innovative advertising solutions that transform your brand
              visibility and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-semibold">
                Get Started
              </button>
              <button className="px-8 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition font-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-96 bg-card rounded-lg overflow-hidden">
            <img src="/hero.jpeg" alt="Event showcase" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
