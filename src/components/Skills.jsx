import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Badge } from './ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'

const Skills = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"]
    },
    {
      title: "State Management",
      skills: ["Redux Toolkit", "Zustand", "Context API"]
    },
    {
      title: "UI & Styling",
      skills: ["Tailwind CSS", "Material UI", "ShadCN UI", "Responsive Design", "Flexbox", "Grid", "Figma"]
    },
    {
      title: "Performance",
      skills: ["Core Web Vitals", "Code Splitting", "Lazy Loading", "Bundle Optimization", "Lighthouse"]
    },
    {
      title: "API & Backend Basics",
      skills: ["REST APIs", "Axios", "Fetch", "Node.js", "Express.js", "MongoDB", "PostgreSQL"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "Jira", "Agile/Scrum", "CI/CD", "Vercel", "Railway", "Cross-Browser Testing"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Skills & Tooling</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit built over 3+ years of professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

