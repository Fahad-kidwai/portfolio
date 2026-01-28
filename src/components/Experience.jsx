import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/Card'
import { Badge } from './ui/Badge'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

const Experience = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      company: "Msarii Technologies",
      role: "Frontend Developer",
      location: "Dubai (Remote)",
      period: "Feb 2025 – Present",
      highlights: [
        "Led frontend development of high-traffic applications using React, Next.js, and TypeScript, building reusable component systems and improving development efficiency by 30%",
        "Optimized Core Web Vitals through code splitting, lazy loading, and state optimization with Zustand, achieving 25% faster LCP",
        "Standardized API integration patterns, reducing redundant API calls and improving data consistency across the application",
        "Translated Figma designs into responsive, accessible, and mobile-first user interfaces with pixel-perfect precision",
        "Enforced coding standards and conducted code reviews to improve team velocity and maintainability"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Zustand", "Tailwind CSS"]
    },
    {
      company: "Cloudfort Tech",
      role: "Web Developer",
      location: "Lucknow, India",
      period: "Dec 2022 – Jan 2025",
      highlights: [
        "Developed 7+ responsive web applications using React and modern JavaScript for diverse clients across industries",
        "Built dynamic UI components integrated with REST APIs for secure data handling and real-time updates",
        "Resolved complex UI, layout, and cross-browser compatibility issues, improving user experience and application stability",
        "Reduced deployment failures by 15% through structured Git workflows and comprehensive testing practices"
      ],
      technologies: ["React", "JavaScript", "REST APIs", "Git", "Responsive Design"]
    },
    {
      company: "Cloudfort Tech",
      role: "JavaScript Intern",
      location: "Lucknow, India",
      period: "Jun 2022 – Nov 2022",
      highlights: [
        "Built frontend interfaces using vanilla JavaScript, HTML5, and CSS3, establishing strong fundamentals",
        "Developed a MERN stack e-commerce platform focusing on UI implementation, shopping cart system, and API integration",
        "Gained hands-on experience with modern development workflows and version control systems"
      ],
      technologies: ["JavaScript", "HTML", "CSS", "MongoDB", "Express", "Node.js"]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-[26px] top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block"></div>

                <Card className="md:ml-20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{exp.role}</CardTitle>
                        <CardDescription className="text-base">
                          <div className="flex items-center gap-2 mb-2">
                            <Briefcase className="w-4 h-4" />
                            <span className="font-medium text-foreground">{exp.company}</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="text-primary mt-1.5">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

