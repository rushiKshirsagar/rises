'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Calendar, MessageSquare } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'sales@rises.io',
      description: 'Get in touch with our sales team',
      action: 'mailto:sales@rises.io'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 9822448602',
      description: 'Speak directly with our team',
      action: 'tel:+919822448602'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Pune, Maharashtra, India',
      description: 'Our headquarters location',
      action: '#'
    },
    {
      icon: Calendar,
      title: 'Schedule Demo',
      value: 'Book a meeting',
      description: 'Request a personalized demo',
      action: '#'
    }
  ]

  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your healthcare practice? Contact our team to learn more 
            about our AI solutions and schedule a personalized demo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-primary-50 transition-colors duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <info.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-primary-600 font-medium mb-2">{info.value}</p>
                <p className="text-gray-600 text-sm mb-4">{info.description}</p>
                <a
                  href={info.action}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                >
                  {info.title === 'Schedule Demo' ? 'Book Now' : 'Contact'}
                  <MessageSquare className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join thousands of healthcare providers worldwide who trust our AI solutions 
            to improve patient outcomes and streamline clinical workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@rises.io"
              className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Request Demo
            </a>
            <a
              href="tel:+919822448602"
              className="border border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Sales
            </a>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
} 