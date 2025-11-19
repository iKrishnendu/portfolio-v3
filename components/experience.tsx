'use client'

import { useEffect, useState } from 'react'

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })

    const section = document.getElementById('experience')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      title: 'Software Development Intern',
      company: '0101digital',
      duration: 'Feb 2024 – May 2024',
      highlights: [
        'Developed and tested RESTful APIs for scalable web applications using Node.js, Express, and MongoDB',
        'Collaborated with the QA team to validate backend responses and perform manual testing using Postman',
        'Contributed to multiple real-world projects, improving data validation and debugging production issues',
        'Worked in Agile sprints, participating in daily stand-ups, sprint reviews, and retrospectives'
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'IBM SkillBuild',
      duration: 'Nov 2023 – Dec 2023',
      highlights: [
        'Participated in a one-month program organized by IBM SkillBuild and CSRBox, gaining foundational knowledge in data science and analytics',
        'Successfully completed the program and received a certificate of achievement',
        'Worked on practical data science projects, applying statistical analysis and machine learning techniques to real-world datasets'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Experience
        </h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-orange-500" />
          
          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <div 
                key={idx}
                className={`relative pl-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                {/* Circular node */}
                <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300">
                  <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center font-bold text-lg">
                    {idx + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-muted/50 border border-border/50 rounded-lg p-6 hover:border-cyan-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Date on the right */}
                  <div className="absolute top-6 right-6">
                    <p className="text-sm font-semibold text-orange-500">{exp.duration}</p>
                  </div>

                  {/* Title and Company */}
                  <div className="mb-4 pr-40">
                    <h3 className="text-xl font-bold text-cyan-500 mb-1">{exp.title}</h3>
                    <p className="text-foreground/80 font-medium">@{exp.company}</p>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-foreground/70 flex items-start gap-3">
                        <span className="text-cyan-500 font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
