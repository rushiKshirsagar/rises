'use client'

import { motion } from 'framer-motion'
import { FileText, TrendingUp, Award, Users } from 'lucide-react'

export default function Evidence() {
  const studies = [
    {
      title: 'AI Helps Doctors Treat Stroke Faster: Study Reveals Significant Real-World Impact',
      authors: 'Justy Antony Chiramal, Jacob Johnson, Jemin Webster, D. Rachel Nag, Dennis Robert, Tamaghna Ghosh, Satish Golla, Saniya Pawar, Pranav Krishnan, Paul K. Drain, Stephen J. Mooney',
      date: '2024',
      impact: 'Significant improvement in stroke treatment times',
      category: 'Stroke Care'
    },
    {
      title: 'Enhanced Stroke Care with AI at Baptist Christian Hospital',
      authors: 'Clinical Research Team',
      date: '2024',
      impact: 'Improved patient outcomes and reduced treatment delays',
      category: 'Clinical Implementation'
    },
    {
      title: 'Real-World Validation of AI-Powered Chest X-Ray Analysis',
      authors: 'International Research Consortium',
      date: '2024',
      impact: '98% accuracy in TB detection across diverse populations',
      category: 'TB Detection'
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: 'TIME\'s 100 Most Influential Companies',
      description: 'Recognized among the world\'s most influential companies of 2025',
      date: '2025'
    },
    {
      icon: TrendingUp,
      title: 'FDA Clearances',
      description: 'Multiple FDA clearances for medical imaging AI solutions',
      date: '2024'
    },
    {
      icon: Users,
      title: 'Global Partnerships',
      description: 'Strategic partnerships with leading healthcare organizations nationwide',
      date: 'Ongoing'
    }
  ]

  return (
    <section id="evidence" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Latest Developments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evidence-based research and clinical studies demonstrating the real-world 
            impact of our AI solutions in healthcare.
          </p>
        </motion.div>

        {/* Featured Study */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 text-white mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="h-5 w-5" />
                <span className="text-sm font-medium">Featured Research</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                AI Helps Doctors Treat Stroke Faster: Study Reveals Significant Real-World Impact
              </h3>
              <p className="text-white/90 mb-6">
                Our latest study demonstrates how AI-powered stroke detection and care coordination 
                significantly reduces treatment times and improves patient outcomes in real-world clinical settings.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <div className="text-sm opacity-90">Treatment Time</div>
                  <div className="text-xl font-bold">-40%</div>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <div className="text-sm opacity-90">Accuracy</div>
                  <div className="text-xl font-bold">92%</div>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <div className="text-sm opacity-90">Patient Outcomes</div>
                  <div className="text-xl font-bold">+35%</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-semibold mb-4">Study Authors</h4>
              <p className="text-sm text-white/90 leading-relaxed">
                Justy Antony Chiramal, Jacob Johnson, Jemin Webster, D. Rachel Nag, 
                Dennis Robert, Tamaghna Ghosh, Satish Golla, Saniya Pawar, 
                Pranav Krishnan, Paul K. Drain, Stephen J. Mooney
              </p>
            </div>
          </div>
        </motion.div>

        {/* Research Studies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="h-5 w-5 text-primary-600" />
                <span className="text-sm font-medium text-primary-600">{study.category}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {study.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {study.authors}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{study.date}</span>
                <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Read Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Recognition & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-primary-100 p-4 rounded-full">
                    <achievement.icon className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 mb-2">
                  {achievement.description}
                </p>
                <span className="text-sm text-primary-600 font-medium">
                  {achievement.date}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              See More Evidence
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore our comprehensive research portfolio and clinical evidence 
              demonstrating the real-world impact of our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                View All Studies
              </button>
              <button className="btn-secondary">
                Download Research Papers
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 