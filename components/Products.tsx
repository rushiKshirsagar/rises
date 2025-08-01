'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Activity, Heart, Brain, Shield, Users, BarChart3 } from 'lucide-react'

export default function Products() {
  const products = [
    {
      icon: Activity,
      title: 'Chest X-Ray Reporting',
      description: 'AI-powered chest X-ray analysis for tuberculosis detection, lung cancer screening, and respiratory disease diagnosis with 98% accuracy.',
      features: ['TB Detection', 'Lung Cancer Screening', 'Respiratory Analysis'],
      color: 'from-primary-500 to-primary-600',
      image: null,
      slug: 'chest-xray'
    },
    {
      icon: Heart,
      title: 'Lung Nodule Management',
      description: 'End-to-end lung cancer care continuum with early detection, progression monitoring, and case management for improved patient outcomes.',
      features: ['Early Detection', 'Progression Monitoring', 'Case Management'],
      color: 'from-primary-500 to-primary-600',
      image: null, // No image - will show gradient background
      slug: 'lung-nodule'
    },
    {
      icon: Brain,
      title: 'Stroke & TBI Care',
      description: 'AI-powered care coordination suite for patient triage and real-time clinical coordination to enable timely stroke interventions.',
      features: ['Patient Triage', 'Real-time Coordination', 'Hub & Spoke Networks'],
      color: 'from-primary-500 to-primary-600',
      image: null,
      slug: 'stroke-care'
    },
    {
      icon: Shield,
      title: 'MSK X-Ray Reporting',
      description: 'Advanced musculoskeletal imaging analysis for fracture detection, joint assessment, and orthopedic diagnosis.',
      features: ['Fracture Detection', 'Joint Assessment', 'Orthopedic Analysis'],
      color: 'from-primary-500 to-primary-600',
      image: null, // No image - will show gradient background
      slug: 'msk-xray'
    },
    {
      icon: Users,
      title: 'Heart Failure Detection',
      description: 'Comprehensive cardiac imaging analysis for early heart failure detection and cardiovascular disease management.',
      features: ['Early Detection', 'Cardiac Analysis', 'Disease Management'],
      color: 'from-primary-500 to-primary-600',
      image: null,
      slug: 'heart-failure'
    },
    {
      icon: BarChart3,
      title: 'Care Coordination Platform',
      description: 'AI-powered reporting and seamless collaboration platform for screening programs and case management.',
      features: ['Program Management', 'Custom Dashboards', 'Enhanced Coordination'],
      color: 'from-primary-500 to-primary-600',
      image: null, // No image - will show gradient background
      slug: 'care-coordination'
    }
  ]

  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transforming Healthcare Pathways with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered solutions supports clinicians in making 
            quick and accurate diagnosis and treatment decisions across multiple specialties.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Product Image or Gradient Background */}
              {product.image ? (
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 p-6 text-white">
                    <product.icon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-white/90 text-sm">{product.description}</p>
                  </div>
                </div>
              ) : (
                <div className={`bg-gradient-to-r ${product.color} p-6 text-white`}>
                  <product.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-white/90 text-sm">{product.description}</p>
                </div>
              )}
              
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link 
                  href={`/product/${product.slug}`}
                  className="w-full btn-secondary flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Healthcare Practice?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of healthcare providers nationwide who trust our AI solutions 
              to improve patient outcomes and streamline clinical workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sales@rises.io"
                className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Request Demo
              </a>
              <a
                href="tel:+919822448602"
                className="border border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 