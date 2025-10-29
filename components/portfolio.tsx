const portfolioItems = [
  {
    title: "Tech Summit 2024",
    category: "Event Management",
    image: "/tech-conference-stage.jpg",
  },
  {
    title: "Digital Trends Magazine",
    category: "Magazine Publishing",
    image: "/magazine-cover.png",
  },
  {
    title: "Fashion Brand Campaign",
    category: "Advertising",
    image: "/fashion-advertisement.png",
  },
  {
    title: "Corporate Gala Event",
    category: "Event Management",
    image: "/elegant-corporate-event.jpg",
  },
  {
    title: "Lifestyle Publication",
    category: "Magazine Publishing",
    image: "/lifestyle-magazine.jpg",
  },
  {
    title: "Product Launch Campaign",
    category: "Promotion",
    image: "/product-launch-event.png",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing our most impactful projects and successful campaigns
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg h-64 cursor-pointer">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition flex flex-col justify-end p-6">
                <p className="text-accent text-sm font-semibold mb-2">{item.category}</p>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
