import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Card, CardContent } from './ui/Card'
import { Zap, Target, Code2, Globe } from 'lucide-react'

const About = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const principles = [
    {
      icon: Zap,
      title: "Performance First",
      description: "Obsessed with Core Web Vitals, code splitting, and runtime optimization"
    },
    {
      icon: Code2,
      title: "Clean Architecture",
      description: "Building maintainable, scalable component systems that teams love to work with"
    },
    {
      icon: Target,
      title: "Pixel Perfect",
      description: "Translating Figma designs into responsive, accessible interfaces with precision"
    },
    {
      icon: Globe,
      title: "Global Mindset",
      description: "Experience building for international markets including Middle East regions"
    }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </motion.div>

        {/* Profile Card with Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img
                    src="/Portfolio/profile-photo.png"
                    alt="Fahad Kidwai"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/10 shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Fahad Kidwai</h3>
                  <p className="text-primary font-medium mb-4">Frontend Developer | React, Next.js, TypeScript</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Mid-level Frontend Developer with <strong className="text-foreground">3+ years of experience</strong> building 
                    scalable, high-performance web applications. Currently working remotely with{' '}
                    <strong className="text-foreground">Msarii Technologies in Dubai</strong>, specializing in 
                    transforming Figma designs into pixel-perfect interfaces with a strong focus on Core Web Vitals 
                    and performance optimization.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">What Drives Me</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm passionate about creating web experiences that are not just functional, but{' '}
                <strong className="text-foreground">fast, intuitive, and maintainable</strong>. Every line of code 
                I write is an opportunity to improve performance, enhance user experience, or make the codebase 
                more elegant.
              </p>
              <p>
                Working across diverse projects, from <strong className="text-foreground">AI-powered platforms</strong> to{' '}
                <strong className="text-foreground">e-commerce solutions</strong>, has taught me that great frontend 
                engineering is about balance: innovation with reliability, speed with quality, and complexity with simplicity.
              </p>
              <p>
                My approach combines technical excellence with user-centric thinking. I don't just write code, 
                I architect solutions that teams love to work with and users love to use.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">How I Work</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I believe great frontend engineering is about <strong className="text-foreground">balance</strong>; between 
                speed and quality, between innovation and reliability, between user needs and technical constraints.
              </p>
              <p>
                My workflow emphasizes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Component-first thinking with reusable architecture</li>
                <li>Performance monitoring and optimization from day one</li>
                <li>Collaborative code reviews and knowledge sharing</li>
                <li>Continuous learning and adapting to modern standards</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <principle.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-semibold mb-2">{principle.title}</h4>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

