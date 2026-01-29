import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { ArrowRight, Download, MapPin } from 'lucide-react'

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownloadResume = () => {
    // This would link to the actual resume file
    window.open('/portfolio/Fahad_Kidwai_Frontend_Dev.pdf', '_blank')
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
              <img
                src="/portfolio/profile-photo.png"
                alt="Fahad Kidwai - Frontend Developer"
                width={160}
                height={160}
                decoding="async"
                fetchPriority="high"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-xl"
              />
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              India | Open to Riyadh & Dubai
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            Frontend Developer focused on{' '}
            <span className="text-primary">scalable, high-performance</span>{' '}
            React applications
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Building modern web experiences with React, Next.js, and TypeScript. 
            Specialized in performance optimization, pixel-perfect UI implementation, 
            and maintainable component architecture.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="group"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleDownloadResume}
              className="group"
            >
              <Download className="mr-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16"
        >
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">3+</div>
              <div>Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">7+</div>
              <div>Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">2</div>
              <div>Countries</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

