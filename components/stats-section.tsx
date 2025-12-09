"use client"

const stats = [
  { number: "15+", label: "Years Experience", description: "Setting industry standards" },
  { number: "98%", label: "Client Satisfaction", description: "Consistently exceeding expectations" },
  { number: "50+", label: "Grammy Nominations", description: "From our produced tracks" },
  { number: "24/7", label: "Support Available", description: "We're always here for you" },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold gradient-text">{stat.number}</div>
              <div className="text-lg font-semibold">{stat.label}</div>
              <p className="text-foreground/60">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
