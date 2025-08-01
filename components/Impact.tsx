'use client'

import { motion } from 'framer-motion'
import { Globe, Users, Activity, Award } from 'lucide-react'

export default function Impact() {
  const impactStories = [
    {
      title: 'Advancing Public Health Access',
      subtitle: 'Tuberculosis, Pediatric TB & Beyond',
      description: 'WHO-evaluated AI solutions to support clinicians in making quick and accurate diagnosis and treatment decisions. This provides global access to Tuberculosis, Silicosis, and Pediatric Tuberculosis care and real-time disease surveillance.',
      image: 'Global Health',
      stats: ['98%', 'Accuracy Rate', 'TB Detection'],
      color: 'from-primary-500 to-primary-600'
    },
    {
      title: 'Accelerating Early Detection',
      subtitle: 'Lung Cancer Management',
      description: 'The end-to-end Lung Cancer care continuum detects lung nodules early, measures for disease progression and manages cases to support clinicians, improving outcomes for patients.',
      image: 'Lung Cancer',
      stats: ['95%', 'Sensitivity', 'Early Detection'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Enabling Timely Intervention',
      subtitle: 'Stroke Care Coordination',
      description: 'An AI-powered care coordination suite to enable patient triage, ensuring seamless clinical coordination with real-time communication. It supports Hub & Spoke networks to facilitate timely stroke interventions.',
      image: 'Stroke',
      stats: ['92%', 'Specificity', 'Stroke Detection'],
      color: 'from-primary-500 to-primary-600'
    }
  ]

  const globalStats = [
    { icon: Globe, value: '5+', label: 'States Served' },
    { icon: Users, value: '10,000+', label: 'Lives Impacted' },
    { icon: Activity, value: '30+', label: 'Healthcare Sites' },
    { icon: Award, value: '98%', label: 'Accuracy Rate' }
  ]

  return (
    <section id="impact" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Global Impact of AI: Real Stories, Real Lives Transformed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From rural clinics to major hospitals, our AI solutions are making healthcare 
            more accessible and effective across the globe.
          </p>
        </motion.div>

        {/* Global Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {globalStats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Impact Stories */}
        <div className="space-y-16">
          {impactStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {story.title}
                    </h3>
                    <p className="text-xl text-primary-600 font-semibold">
                      {story.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {story.description}
                  </p>
                  
                  <div className="flex items-center space-x-6">
                    {story.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{stat}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="btn-primary">
                    See How
                  </button>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className={`bg-gradient-to-br ${story.color} rounded-2xl p-8 text-white h-80 flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-4">{story.stats[0]}</div>
                    <div className="text-xl font-semibold mb-2">{story.stats[1]}</div>
                    <div className="text-lg opacity-90">{story.stats[2]}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              From Aims to Achievements: Fulfilling Clinical & Business Goals
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our AI solutions are designed to meet the unique challenges of healthcare 
              providers while delivering measurable improvements in patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Explore Our Impact
              </button>
              <button className="btn-secondary">
                Client Success Stories
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 