'use client'

import TeamMember from '@/components/TeamMember'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Ajit Deshpande",
      role: "Founder & CEO",
      description: "Ajit has more than 24 years of experience in software industry, with finance domain and analytics working on multiple technologies including AI, Big Data Analytics, Blockchain, HPC and C++",
      image: "/assets/team/sarah.jpg",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
      website: "https://sarahjohnson.com"
    },
    {
      name: "Narayana Darapaneni, PhD",
      role: "Co-Founder",
      description: "Dr. Narayana has more than 14 years experience in data anlaytics and training. His expertise includes AI, Machine Learning, Deep Learning & statistical techniques, R, Python and Hadoop",
      image: "/assets/team/michael.jpg",
      linkedin: "https://linkedin.com/in/michaelchen",
      twitter: "https://twitter.com/michaelchen"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-600">Rises</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We're on a mission to transform healthcare through AI-powered solutions. 
              Our team combines deep expertise in artificial intelligence, medical imaging, 
              and healthcare delivery to create tools that improve patient outcomes globally.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">10,000+</div>
                <div className="text-gray-600">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-gray-600">States Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Rises, we believe that every healthcare provider should have access to 
                world-class AI diagnostic tools. Our solutions are designed to support 
                clinicians in making faster, more accurate decisions, ultimately improving 
                patient outcomes and reducing healthcare disparities globally.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through partnerships with leading healthcare institutions and continuous 
                innovation, we're building the future of healthcare AI - one that's 
                accessible, reliable, and truly transformative.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why We Do What We Do</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Democratizing access to advanced healthcare AI</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Supporting clinicians with accurate diagnostic tools</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Improving patient outcomes globally</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Advancing the field of medical AI</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in AI, 
              healthcare, and technology to drive innovation in medical diagnostics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                description={member.description}
                image={member.image}
                linkedin={member.linkedin}
                twitter={member.twitter}
                website={member.website}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Mission
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals who are passionate about 
                transforming healthcare through AI. If you share our vision, we'd love 
                to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  View Open Positions
                </button>
                <button className="btn-secondary">
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 