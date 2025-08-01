'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "As part of the EDISON Alliance's 1 Billion Lives Challenge, we will be screening 5 million patients by 2025. We look forward to deepening collaboration to accelerate scalable and affordable digital solutions to help improve access to healthcare and transform patient outcomes, especially in underserved communities.",
      author: "Leif Johannsson",
      title: "Chairman at AstraZeneca",
      company: "AstraZeneca"
    },
    {
      quote: "We are thrilled to collaborate to support surgeons in diagnosing and treating stroke by enabling quicker decision-making, streamlining data sharing between two hospitals, and improving efficiencies so that more stroke patients can be treated within the critical time window.",
      author: "Michael Blackwell",
      title: "President and Managing Director",
      company: "Medtronic India"
    },
    {
      quote: "AI has the potential to power the early diagnosis of lung cancer, TB or Stroke giving the best chance of survival outcomes and improving quality of life for patients. Initial real-world studies and recent FDA clearances have provided compelling evidence for the potential of medical imaging AI innovations.",
      author: "David M. Rubin",
      title: "Managing Director",
      company: "Merck Global Health Innovation Fund LLC"
    },
    {
      quote: "AI technology fits in all kinds of machines, new or old, making sure that we can use the old hardware and save our resources. By integrating with our existing X-ray systems, we can now screen patients promptly, obtain immediate results, and promptly refer clients for further investigation.",
      author: "Llang Bridget M. Maama-Maime",
      title: "National TB Programme Manager",
      company: "Ministry of Health, Lesotho"
    },
    {
      quote: "AI solutions should improve the pathway logistics by flagging abnormalities on chest X-rays as soon as they are undertaken, helping patients progress rapidly to CT scanning.",
      author: "Prof. David Baldwin",
      title: "Respiratory Consultant",
      company: "Nottingham University Hospitals NHS Trust"
    },
    {
      quote: "We definitely need to have a quick movement on children. I think children are always left a bit behind. So, it's so exciting that we are really looking into and trying to find a way to include the children in the screening with modern digital platforms.",
      author: "Dr. Seraphine Kaminsa",
      title: "Senior Technical Tuberculosis Advisor",
      company: "Save The Children US"
    }
  ]

  return (
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
            Trusted by Healthcare Leaders Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from healthcare professionals and industry leaders who have experienced 
            the transformative impact of our AI solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-3 mb-4">
                <Quote className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.title}</div>
                <div className="text-sm text-primary-600 font-medium">{testimonial.company}</div>
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
            <h3 className="text-2xl font-bold mb-4">
              Join Thousands of Healthcare Providers
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Be part of the healthcare revolution. Our AI solutions are helping clinicians 
              nationwide deliver better care and improve patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Start Your Journey
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Schedule a Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 