import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Download, Figma, Layers, Palette, PenTool, Monitor, Package } from 'lucide-react'

export const Route = createFileRoute('/resume')({
  component: About,
})

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Building distinctive visual identities from the ground up — logo, color system, typography, and brand guidelines.',
    color: '#a78bfa',
  },
  {
    icon: PenTool,
    title: 'Print & Editorial',
    description: 'Magazines, books, brochures, and posters crafted with meticulous attention to layout and typography.',
    color: '#f59e0b',
  },
  {
    icon: Monitor,
    title: 'Digital Design',
    description: 'UI/UX design for web and mobile, from wireframes to high-fidelity prototypes and design systems.',
    color: '#38bdf8',
  },
  {
    icon: Layers,
    title: 'Illustration',
    description: 'Custom digital illustrations for editorial, branding, and product use, with a distinctive aesthetic.',
    color: '#34d399',
  },
  {
    icon: Package,
    title: 'Packaging Design',
    description: 'Shelf-ready packaging for consumer brands — structure, print-ready artwork, and production liaison.',
    color: '#d97706',
  },
  {
    icon: Figma,
    title: 'Design Systems',
    description: 'Scalable component libraries and design tokens for product teams using Figma and modern workflows.',
    color: '#e879f9',
  },
]

const tools = [
  { name: 'Adobe Illustrator', level: 95 },
  { name: 'Adobe Photoshop', level: 90 },
  { name: 'Figma', level: 92 },
  { name: 'CorelDraw', level: 85 },
  { name: 'Canva', level: 80 },
]

const experience = [
  {
    role: 'Lead Creative Director',
    company: 'F1 Team Associates, Nigeria',
    period: '2024 — Present',
    description: 'Built impactful brand identities and led creative direction focused on strengthening brand presence sectors.',
    tags: ['Brand Identity', 'Creative Direction', 'Team Lead'],
  },
  {
    role: 'Graphic Designer',
    company: 'Broadfield Agency',
    period: '2019 — 2021',
    description: 'Developed integrated campaigns for FMCG and lifestyle brands, including print, digital, and out-of-home materials.',
    tags: ['Campaigns', 'Print', 'Digital'],
  },
  {
    role: 'Renewable Energy Volunter/Junior Designer',
    company: 'Renew Watts Technologies, Florida, USA',
    period: '2024',
    description: 'Led creative direction for renewable energy awareness campaigns, Designed promotional flyers, social media graphics, and educational materials etc',
    tags: ['Editorial', 'Campaigns', 'Digital'],
  },
]

function About() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-4">About Me</p>
            <h1 className="font-display font-extrabold text-5xl md:text-6xl leading-tight mb-6">
              Hi, I'm<br />
              <span className="gradient-text">Clinton ThankGod</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I’m a Brand Designer and AI Automation Expert based in Nigeria, passionate about 
              building brands that resonate and creating smart systems that improve how businesses 
              work. I blend strategy, visual design, and automation to craft experiences that communicate 
              with clarity, beauty, and efficiency. Over the past 3years, I’ve helped businesses transformed
              ideas into compelling brand identities and streamlined digital solutions.

            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              When I'm not designing or interating smart solutions, I watch movies,
              play video games and visit the gym.
            </p>
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Work With Me <ArrowRight size={16} />
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>

          {/* Profile image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 via-card to-accent/10 border border-border flex items-center justify-center overflow-hidden">
              <div className="text-center p-12">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent/80 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display font-bold text-3xl text-white">AM</span>
                </div>
                <p className="text-muted-foreground text-sm">Clinton ThankGod</p>
                <p className="text-xs text-muted-foreground/60 mt-1">Brand Designer | AI Automation Expert</p>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 shadow-xl">
              <p className="font-display font-bold text-2xl text-primary">20+</p>
              <p className="text-xs text-muted-foreground">Projects</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-xl">
              <p className="font-display font-bold text-2xl text-accent">3+</p>
              <p className="text-xs text-muted-foreground">Years Exp.</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 border-t border-border">
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">What I Do</p>
          <h2 className="font-display font-bold text-4xl mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, description, color }) => (
              <div key={title} className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="py-16 border-t border-border">
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Toolbox</p>
          <h2 className="font-display font-bold text-4xl mb-10">Tools & Software</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            {tools.map(({ name, level }) => (
              <div key={name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{name}</span>
                  <span className="text-xs text-muted-foreground">{level}%</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent/80 transition-all duration-700"
                    style={{ width: `${level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="py-16 border-t border-border">
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Career</p>
          <h2 className="font-display font-bold text-4xl mb-10">Experience</h2>
          <div className="space-y-8">
            {experience.map(({ role, company, period, description, tags }) => (
              <div key={role} className="flex gap-6">
                <div className="flex-shrink-0 mt-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary mt-1" />
                  <div className="w-px h-full bg-border mx-auto mt-2" />
                </div>
                <div className="pb-8">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-display font-semibold text-lg">{role}</h3>
                      <p className="text-sm text-primary">{company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">{period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-border text-center mb-8">
          <h2 className="font-display font-bold text-3xl mb-4">Let's work together</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Have a project in mind? I'm currently accepting new clients.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </div>
  )
}
