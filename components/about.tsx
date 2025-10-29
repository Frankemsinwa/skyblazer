export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/creative-team-collaboration.png" alt="About Skyblazer" className="rounded-lg" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-accent">Skyblazer</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a creative powerhouse dedicated to transforming brands through strategic events, compelling
              publications, and innovative advertising solutions. Our mission is to elevate your presence in the market
              and create memorable experiences that resonate with your audience.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With expertise spanning event management, magazine publishing, and promotional strategies, we deliver
              tailored solutions that drive real business growth. Our team combines creative innovation with data-driven
              insights to ensure every campaign delivers measurable results.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-accent mb-2">500+</p>
                <p className="text-muted-foreground">Events Managed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent mb-2">50+</p>
                <p className="text-muted-foreground">Publications</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent mb-2">200+</p>
                <p className="text-muted-foreground">Brands Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
