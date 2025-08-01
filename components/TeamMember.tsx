'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Globe } from 'lucide-react'

interface TeamMemberProps {
  name: string
  role: string
  description: string
  image: string
  linkedin?: string
  twitter?: string
  website?: string
}

export default function TeamMember({ 
  name, 
  role, 
  description, 
  image, 
  linkedin, 
  twitter, 
  website 
}: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-primary-600 font-semibold mb-3">{role}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
        
        {/* Social Links */}
        <div className="flex space-x-3">
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {website && (
            <a 
              href={website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
            >
              <Globe className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
} 