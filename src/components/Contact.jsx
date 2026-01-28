import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from './ui/Card'
import { Button } from './ui/Button'
import { Mail, Linkedin, Github, MapPin, Phone, Download } from 'lucide-react'

const Contact = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "fahadkidwai27@gmail.com",
      href: "mailto:fahadkidwai27@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9151512705",
      href: "tel:+919151512705"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "fahad-kidwai-55482b216",
      href: "https://linkedin.com/in/fahad-kidwai-55482b216"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Fahad-kidwai",
      href: "https://github.com/Fahad-kidwai"
    }
  ]

  const locations = [
    { current: "Noida, India", status: "Current Location" },
    { current: "Riyadh, KSA", status: "Open to Relocation (within 15 days)" },
    { current: "Dubai, UAE", status: "Open to Relocation" }
  ]

  return (
    <section id="contact" className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Let's Connect</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Open to opportunities in India, Riyadh, and Dubai. Let's discuss how I can contribute to your team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                        <p className="text-sm truncate group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Location & Availability
                </h3>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <div
                      key={location.current}
                      className="p-4 bg-muted/50 rounded-lg"
                    >
                      <p className="font-medium mb-1">{location.current}</p>
                      <p className="text-sm text-muted-foreground">{location.status}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-background border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm currently open to frontend development opportunities where I can contribute 
                to building scalable, high-performance applications with modern tech stacks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:fahadkidwai27@gmail.com" className='flex items-center gap-2'>
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/Fahad_Kidwai_Frontend_Dev.pdf" download className='flex items-center gap-2'>
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

