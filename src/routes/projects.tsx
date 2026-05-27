import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Portfolio,
})

const categories = ['All', 'Branding', 'Print', 'Digital', 'Illustration', 'Packaging']

const projects = [
  {
    id: 'luminary-brand',
    title: 'Luminary Brand Identity',
    category: 'Branding',
    description: 'Complete visual identity system for a luxury wellness brand — including logo, color palette, typography, and brand guidelines.',
    tags: ['Logo Design', 'Brand System', 'Typography'],
    gradient: 'from-violet-600 via-purple-500 to-fuchsia-400',
    accentColor: '#a78bfa',
    year: '2024',
  },
  {
    id: 'urban-pulse',
    title: 'Urban Pulse Magazine',
    category: 'Print',
    description: 'Editorial layout and typographic system for a 96-page quarterly culture and lifestyle magazine.',
    tags: ['Editorial', 'Layout', 'Print'],
    gradient: 'from-orange-500 via-amber-400 to-yellow-300',
    accentColor: '#f59e0b',
    year: '2024',
  },
  {
    id: 'zephyr-app',
    title: 'Zephyr Mobile UI',
    category: 'Digital',
    description: 'Minimal and intuitive UI design for a weather and lifestyle app, covering 40+ screens with a complete design system.',
    tags: ['UI Design', 'Design System', 'Mobile'],
    gradient: 'from-cyan-500 via-sky-400 to-blue-300',
    accentColor: '#38bdf8',
    year: '2023',
  },
  {
    id: 'flora',
    title: 'Flora Illustration Series',
    category: 'Illustration',
    description: 'A series of 12 botanical illustrations commissioned for a premium stationery and homeware brand.',
    tags: ['Digital Illustration', 'Art Direction', 'Botany'],
    gradient: 'from-green-500 via-emerald-400 to-teal-300',
    accentColor: '#34d399',
    year: '2023',
  },
  {
    id: 'craft-coffee',
    title: 'Craft Coffee Packaging',
    category: 'Packaging',
    description: 'Sustainable packaging design for a specialty coffee brand — bags, boxes, and merchandise across 6 SKUs.',
    tags: ['Packaging', 'Branding', 'Sustainable Design'],
    gradient: 'from-amber-800 via-amber-600 to-yellow-500',
    accentColor: '#d97706',
    year: '2023',
  },
  {
    id: 'nexus-rebrand',
    title: 'Nexus Tech Rebrand',
    category: 'Branding',
    description: 'Full rebrand for a B2B SaaS company — strategy, visual identity, website direction, and employee brand kit.',
    tags: ['Rebranding', 'Tech', 'Brand Strategy'],
    gradient: 'from-slate-700 via-blue-600 to-indigo-500',
    accentColor: '#818cf8',
    year: '2022',
  },
  {
    id: 'solar-festival',
    title: 'Solar Festival Poster Series',
    category: 'Print',
    description: 'A 6-poster visual campaign for an outdoor music and arts festival, exploring bold typography and abstract sun motifs.',
    tags: ['Poster Design', 'Typography', 'Event'],
    gradient: 'from-red-500 via-rose-400 to-pink-300',
    accentColor: '#f43f5e',
    year: '2022',
  },
  {
    id: 'bloom-ecommerce',
    title: 'Bloom E-Commerce',
    category: 'Digital',
    description: 'Visual design and component library for a DTC floral e-commerce brand, including product photography art direction.',
    tags: ['Web Design', 'E-Commerce', 'Art Direction'],
    gradient: 'from-pink-500 via-rose-400 to-fuchsia-300',
    accentColor: '#e879f9',
    year: '2022',
  },
]

function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Portfolio</p>
        <h1 className="font-display font-extrabold text-5xl md:text-6xl mb-4">My Work</h1>
        <p className="text-muted-foreground text-lg max-w-xl">
          A curated selection of projects spanning brand identity, print, digital, and illustration.
        </p>
      </div>

      {/* Category Filter */}
      <div className="sticky top-16 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="project-card group rounded-2xl border border-border bg-card overflow-hidden flex flex-col"
            >
              {/* Visual */}
              <div className={`relative h-52 bg-gradient-to-br ${project.gradient}`}>
                {/* Decorative SVG pattern */}
                <div className="absolute inset-0 opacity-15 flex items-center justify-center">
                  <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
                    <rect x="20" y="20" width="120" height="120" stroke="white" strokeWidth="1" strokeDasharray="6 4" />
                    <circle cx="80" cy="80" r="45" stroke="white" strokeWidth="1" />
                    <circle cx="80" cy="80" r="20" stroke="white" strokeWidth="1.5" />
                    <line x1="80" y1="20" x2="80" y2="140" stroke="white" strokeWidth="0.75" />
                    <line x1="20" y1="80" x2="140" y2="80" stroke="white" strokeWidth="0.75" />
                  </svg>
                </div>
                <div className="absolute top-4 right-4">
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-black/30 text-white backdrop-blur-sm"
                  >
                    {project.year}
                  </span>
                </div>
                <div className="project-image-overlay absolute inset-0 flex items-center justify-center opacity-0 bg-black/50">
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium">
                    <ExternalLink size={14} />
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <span
                  className="inline-block self-start text-xs font-medium px-2.5 py-1 rounded-full mb-3"
                  style={{ backgroundColor: `${project.accentColor}20`, color: project.accentColor }}
                >
                  {project.category}
                </span>
                <h2 className="font-display font-semibold text-lg mb-2">{project.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            No projects in this category yet.
          </div>
        )}
      </div>
    </div>
  )
}
