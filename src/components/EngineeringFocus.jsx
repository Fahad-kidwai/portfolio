import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/Card'
import { Gauge, Layers, Wrench, TrendingUp } from 'lucide-react'

const EngineeringFocus = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const focusAreas = [
    {
      icon: Gauge,
      title: "Performance Optimization",
      description: "Core Web Vitals Mastery",
      points: [
        "Monitor LCP, FID, and CLS from development to production",
        "Implement code splitting and lazy loading strategies",
        "Optimize bundle sizes with tree shaking and dynamic imports",
        "Use React.memo, useMemo, and useCallback strategically"
      ]
    },
    {
      icon: Layers,
      title: "Component Architecture",
      description: "Scalable & Maintainable Systems",
      points: [
        "Design reusable, composable component libraries",
        "Enforce single responsibility and DRY principles",
        "Implement proper prop types and TypeScript interfaces",
        "Create custom hooks for shared logic and side effects"
      ]
    },
    {
      icon: Wrench,
      title: "Development Workflow",
      description: "Design-to-Code Excellence",
      points: [
        "Translate Figma designs with pixel-perfect precision",
        "Build mobile-first, responsive layouts systematically",
        "Ensure accessibility standards (WCAG) from the start",
        "Write self-documenting code with clear naming conventions"
      ]
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Learning & Adaptation",
      points: [
        "Stay updated with React ecosystem and best practices",
        "Conduct thorough code reviews for knowledge sharing",
        "Measure and optimize using Lighthouse and DevTools",
        "Document architectural decisions and patterns"
      ]
    }
  ]

  const avoidances = [
    "Premature optimization without profiling",
    "Prop drilling beyond 2-3 levels without context",
    "Excessive component re-renders from poor state management",
    "Hardcoded values instead of configuration or constants",
    "Skipping accessibility for 'quick wins'",
    "Over-engineering simple features"
  ]

  return (
    <section id="engineering" className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Engineering Focus</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            How I approach frontend engineering beyond writing code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <area.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{area.title}</CardTitle>
                      <CardDescription>{area.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-muted/50 to-background">
            <CardHeader>
              <CardTitle className="text-xl">Production Mistakes I Avoid</CardTitle>
              <CardDescription>
                Lessons learned from 3+ years of building real-world applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-3">
                {avoidances.map((mistake, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <span className="text-destructive mt-0.5">✗</span>
                    <span className="text-muted-foreground">{mistake}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">What I Care About Most</h3>
            <p className="text-muted-foreground leading-relaxed">
              Great frontend engineering isn't just about making things look good, it's about building 
              experiences that are <strong className="text-foreground">fast, accessible, maintainable, and delightful</strong>. 
              I focus on creating code that future developers (including myself) will appreciate, 
              and interfaces that users won't even think about because they just work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EngineeringFocus

