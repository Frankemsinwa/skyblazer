import { Sparkles, Calendar, BookOpen, Megaphone } from "lucide-react"

const services = [
  {
    icon: Calendar,
    title: "Event Management",
    description:
      "Concept development, venue sourcing, logistics coordination, and on-site management for impactful brand experiences.",
  },
  {
    icon: BookOpen,
    title: "Magazine Publishing",
    description:
      "Editorial planning, content creation, layout design, and multi-channel distribution to reach targeted audiences.",
  },
  {
    icon: Megaphone,
    title: "Advertising Strategies",
    description:
      "Media buying, placement optimization, influencer collaborations, and data-driven campaigns for maximum ROI.",
  },
  {
    icon: Sparkles,
    title: "Brand Promotion",
    description:
      "Creative innovation, social media campaigns, video content, and strategic partnerships to amplify your message.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate your brand and connect with your audience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg hover:border-accent transition group"
              >
                <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
