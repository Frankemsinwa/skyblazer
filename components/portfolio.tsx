const portfolioItems = [
  {
    title: "Tech Summit 2024",
    category: "Event Management",
    image: "/img-1.jpeg",
  },
  {
    title: "Digital Trends Magazine",
    category: "Magazine Publishing",
    image: "/img-2.jpeg",
  },
  {
    title: "Fashion Brand Campaign",
    category: "Advertising",
    image: "/img-3.jpeg",
  },
  {
    title: "Corporate Gala Event",
    category: "Event Management",
    image: "/video.mp4",
  },
  {
    title: "Lifestyle Publication",
    category: "Magazine Publishing",
    image: "/img-5.jpeg",
  },
  {
    title: "Product Launch Campaign",
    category: "Promotion",
    image: "/img-6.jpeg",
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
              {item.image.endsWith('.mp4') ? (
                <video
                  src={item.image}
                  controls
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              )}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
