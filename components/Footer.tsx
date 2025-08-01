'use client'

import { Mail, Phone, MapPin, Globe, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const footerSections = [
    {
      title: 'Products',
      links: [
        'Chest X-ray Reporting',
        'TB Care Cascades',
        'Lung Nodule Management',
        'Stroke & TBI',
        'MSK X-Ray Reporting',
        'Heart Failure',
        'AI App'
      ]
    },
    {
      title: 'Focus Areas',
      links: [
        'Global Health',
        'Life Sciences',
        'Channel Partners'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Insights',
        'News and Press',
        'Impact',
        'Evidence',
        'Blogs'
      ]
    },
    {
      title: 'About',
      links: [
        'About Us',
        'Our Team',
        'Our Investors',
        'Client Success',
        'Contact Us',
        'Careers'
      ]
    },
    {
      title: 'Events',
      links: [
        'RSNA',
        'Union'
      ]
    },
    {
      title: 'Partnerships',
      links: [
        'India Health Fund',
        'CaritasKlinikum Saarbrücken',
        'AWS'
      ]
    }
  ]

  return (
    <footer  className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Rises</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Rises was founded in 2019. Our mission is to use artificial intelligence 
              to make healthcare more accessible and affordable.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-400">sales@rises.io</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-400">+91 9822448602</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-gray-400">Pune, Maharashtra, India.</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <span className="text-gray-400 text-sm">
                © 2024 Rises Healthcare AI. All rights reserved.
              </span>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Notice
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Security and Regulatory
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Legal
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us</span>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 