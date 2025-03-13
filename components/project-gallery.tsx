"use client"

import Image from "next/image"
import { useState } from "react"

// Define the project type
type Project = {
  id: number
  title: string
  description: string
  imageSrc: string
  category: string
}

// Sample project data - replace with your actual projects
const projects: Project[] = [
  {
    id: 1,
    title: "Modern Stamped Concrete Patio",
    description: "Custom stamped concrete patio with decorative borders in North Atlanta",
    imageSrc: "/images/project1.jpg",
    category: "Patios",
  },
  {
    id: 2,
    title: "Exposed Aggregate Driveway",
    description: "Durable exposed aggregate driveway with decorative appeal",
    imageSrc: "/images/project2.jpg",
    category: "Driveways",
  },
  {
    id: 3,
    title: "Concrete Retaining Wall",
    description: "Engineered concrete retaining wall for slope stabilization",
    imageSrc: "/images/project3.jpg",
    category: "Retaining Walls",
  },
  {
    id: 4,
    title: "Decorative Concrete Walkway",
    description: "Custom walkway with stamped pattern and color accents",
    imageSrc: "/images/project4.jpg",
    category: "Walkways",
  },
  {
    id: 5,
    title: "Concrete Pool Deck",
    description: "Slip-resistant concrete pool deck with custom finish",
    imageSrc: "/images/project5.jpg",
    category: "Pool Decks",
  },
  {
    id: 6,
    title: "Concrete Steps and Landing",
    description: "Engineered concrete steps with decorative railing installation",
    imageSrc: "/images/project6.jpg",
    category: "Steps",
  },
]

// Get unique categories from projects
const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))]

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("All")

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="space-y-8">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
          >
            <div className="aspect-video overflow-hidden">
              <Image
                src={project.imageSrc || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <div className="mt-2">
                <span className="inline-block rounded-full bg-secondary px-2 py-1 text-xs font-medium">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

