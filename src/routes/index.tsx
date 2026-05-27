import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Sparkles } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const featuredProjects = [
  {
    id: 'luminary-brand',
    title: 'Luminary Brand Identity',
    category: 'Branding',
    description: 'Complete visual identity system for a luxury wellness brand.',
    gradient: 'from-violet-600 via-purple-500 to-fuchsia-400',
    accentColor: '#a78bfa',
  },
  {
    id: 'urban-pulse',
    title: 'Urban Pulse Magazine',
    category: 'Print',
    description: 'Editorial layout and typographic system for a culture magazine.',
    gradient: 'from-orange-500 via-amber-400 to-yellow-300',
    accentColor: '#f59e0b',
  },
  {
    id: 'zephyr-app',
    title: 'Zephyr Mobile UI',
    category: 'Digital',
    description: 'Clean interface design for a weather and lifestyle application.',
    gradient: 'from-cyan-500 via-sky-400 to-blue-300',
    accentColor: '#38bdf8',
  },
]

const skills = [
  'Brand Identity', 'Typography', 'Print Design', 'UI/UX Design',
  'Illustration', 'Packaging', 'Motion Graphics', 'Art Direction',
]

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-24 relative">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-up">
            <Sparkles size={14} className="text-primary" />
            <span>Available for new projects</span>
          </div>

          <h1 className="font-display font-extrabold text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8 animate-fade-up-delay-1">
            Crafting<br />
            <span className="gradient-text">Visual</span><br />
            Stories
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-up-delay-2">
            I'm Alex Morgan — a graphic designer with 6+ years of experience
            creating bold brand identities, editorial layouts, and digital experiences
            that leave a lasting impression.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View My Work
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Get In Touch
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 mt-20 animate-fade-up-delay-3">
            {[
              { value: '6+', label: 'Years Experience' },
              { value: '120+', label: 'Projects Delivered' },
              { value: '40+', label: 'Happy Clients' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display font-bold text-4xl gradient-text">{value}</p>
                <p className="text-sm text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm text-primary font-medium mb-2 uppercase tracking-widest">Selected Work</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl">Featured Projects</h2>
          </div>
          <Link
            to="/projects"
            className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            View all work <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <div
              key={project.id}
              className="project-card group rounded-2xl border border-border bg-card overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image placeholder with gradient */}
              <div className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
                    <circle cx="60" cy="60" r="30" stroke="white" strokeWidth="1.5" />
                    <line x1="10" y1="60" x2="110" y2="60" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="60" y1="10" x2="60" y2="110" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>
                </div>
                <div
                  className="project-image-overlay absolute inset-0 flex items-center justify-center opacity-0 bg-black/40"
                >
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg text-sm font-medium"
                  >
                    View Project <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="p-5">
                <span
                  className="inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3"
                  style={{ backgroundColor: `${project.accentColor}20`, color: project.accentColor }}
                >
                  {project.category}
                </span>
                <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-primary"
          >
            View all work <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-8">Areas of Expertise</p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-32 text-center">
        <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">Ready to collaborate?</p>
        <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">
          Let's create something<br />
          <span className="gradient-text">extraordinary</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10 text-lg">
          Whether you need a brand identity, editorial design, or a digital experience,
          let's bring your vision to life.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium text-lg hover:bg-primary/90 transition-colors"
        >
          Start a Project
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  )
}
