'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Globe, Database } from 'lucide-react'

export default function Hero() {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Lives impacted to date' },
    { icon: Globe, value: '5+', label: 'States via 30+ sites' },
    { icon: Database, value: '50M+', label: 'Training datasets' },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-white">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-primary-600">Healthcare AI</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transforming healthcare pathways with AI-powered diagnostic solutions, 
                medical imaging analysis, and care coordination tools to improve patient outcomes globally.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="btn-secondary">
                Explore Our Impact
              </button>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                  <span className="text-sm font-medium">Active AI Analysis</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Chest X-Ray Analysis</span>
                      <span className="text-xs bg-primary-400 text-primary-900 px-2 py-1 rounded">98% Accuracy</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-primary-400 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Lung Nodule Detection</span>
                      <span className="text-xs bg-blue-400 text-blue-900 px-2 py-1 rounded">95% Sensitivity</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Stroke Detection</span>
                      <span className="text-xs bg-primary-400 text-primary-900 px-2 py-1 rounded">92% Specificity</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-primary-400 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold">Real-time AI Processing</div>
                  <div className="text-sm opacity-90">Supporting clinicians nationwide</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 