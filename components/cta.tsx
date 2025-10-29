export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to Elevate Your Brand?</h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Let's create something extraordinary together. Contact our team to discuss your next project and discover how
          Skyblazer can transform your vision into reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-semibold">
            Start Your Project
          </button>
          <button className="px-8 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition font-semibold">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  )
}
