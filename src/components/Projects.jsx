import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react'

const Projects = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedProject, setExpandedProject] = useState(null)

  const projects = [
    {
      id: 'quiz-platform',
      title: "AI-Based Quiz Platform",
      subtitle: "Intelligent Learning & Assessment System",
      description: "A performant web application leveraging AI for real-time quiz generation and adaptive learning experiences.",
      problem: "Traditional quiz platforms lack personalization and real-time content generation, limiting their effectiveness for modern learning needs.",
      solution: "Built a React-based platform integrated with OpenAI API for dynamic quiz generation, combined with optimized state management and performance-focused architecture.",
      role: "Lead Frontend Developer",
      responsibilities: [
        "Architected component structure with React and Redux for complex state management",
        "Implemented real-time quiz generation interface with OpenAI API integration",
        "Optimized rendering performance for large question sets using virtualization",
        "Built responsive, accessible UI with smooth user interactions",
        "Designed data flow patterns to minimize API calls and improve response times"
      ],
      challenges: [
        {
          challenge: "Managing complex quiz state across multiple components",
          solution: "Implemented Redux Toolkit with normalized state structure and custom selectors"
        },
        {
          challenge: "Slow initial load times with large quiz banks",
          solution: "Applied code splitting, lazy loading, and progressive enhancement strategies"
        },
        {
          challenge: "Real-time content generation lag",
          solution: "Added optimistic UI updates and skeleton loading states for perceived performance"
        }
      ],
      impact: [
        "Achieved <2s initial load time through optimization",
        "Reduced state-related bugs by 40% with Redux DevTools integration",
        "Improved user engagement with smooth, responsive interface"
      ],
      technologies: ["React", "Redux Toolkit", "OpenAI API", "Zustand", "JWT", "MongoDB", "Node.js"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 'ecommerce-platform',
      title: "MERN E-Commerce Platform",
      subtitle: "Full-Featured Shopping Experience",
      description: "A comprehensive e-commerce solution with modern UI, advanced filtering, and seamless checkout experience.",
      problem: "Small businesses need affordable, scalable e-commerce solutions with modern UX standards without expensive enterprise platforms.",
      solution: "Developed a full-stack MERN application with focus on performance, user experience, and mobile-first design principles.",
      role: "Full-Stack Developer (Frontend-focused)",
      responsibilities: [
        "Designed and implemented responsive product catalog with advanced filtering",
        "Built shopping cart system with persistent state and real-time updates",
        "Created multi-step checkout flow with form validation and payment integration",
        "Developed admin dashboard for product and order management",
        "Integrated REST APIs for secure data handling and authentication"
      ],
      challenges: [
        {
          challenge: "Complex product filtering with multiple criteria",
          solution: "Implemented debounced search with URL-based filter state for shareability"
        },
        {
          challenge: "Cart state persistence across sessions",
          solution: "Combined localStorage with MongoDB for authenticated users, ensuring data consistency"
        },
        {
          challenge: "Mobile-first responsive design for complex layouts",
          solution: "Used CSS Grid and Flexbox with mobile-first approach and progressive enhancement"
        }
      ],
      impact: [
        "Delivered fully functional e-commerce platform ready for production",
        "Achieved 95+ Lighthouse performance score on product pages",
        "Built reusable component library for future projects"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Vite", "ShadCN UI", "JWT"],
      githubLink: "#",
      liveLink: "#"
    }
  ]

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Real-world applications showcasing frontend engineering, performance optimization, and user-centric design
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base">{project.subtitle}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2'>
                          Code
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2'>
                          Live
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="w-1 h-5 bg-primary rounded"></span>
                        Problem
                      </h4>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="w-1 h-5 bg-primary rounded"></span>
                        Solution
                      </h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>

                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-6"
                      >
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <span className="w-1 h-5 bg-primary rounded"></span>
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {project.responsibilities.map((resp, i) => (
                              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                                <span className="text-primary mt-1">▸</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <span className="w-1 h-5 bg-primary rounded"></span>
                            Technical Challenges & Solutions
                          </h4>
                          <div className="space-y-3">
                            {project.challenges.map((item, i) => (
                              <div key={i} className="bg-muted/50 p-4 rounded-lg">
                                <p className="text-sm font-medium mb-1">Challenge: {item.challenge}</p>
                                <p className="text-sm text-muted-foreground">Solution: {item.solution}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <span className="w-1 h-5 bg-primary rounded"></span>
                            Impact & Outcomes
                          </h4>
                          <ul className="space-y-2">
                            {project.impact.map((item, i) => (
                              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                                <span className="text-green-600 mt-1">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="default">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      onClick={() => toggleProject(project.id)}
                      className="w-full mt-4"
                    >
                      {expandedProject === project.id ? (
                        <>
                          Show Less <ChevronUp className="ml-2 w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Show More Details <ChevronDown className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
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

export default Projects

