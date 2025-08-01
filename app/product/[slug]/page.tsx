import { ArrowLeft, CheckCircle, Users, Globe, Award } from 'lucide-react'
import Link from 'next/link'

// Product data - you can expand this or move to a separate data file
const productData = {
  'chest-xray': {
    title: 'Chest X-Ray Reporting',
    subtitle: 'AI-powered chest X-ray analysis for tuberculosis detection, lung cancer screening, and respiratory disease diagnosis.',
    description: 'Our advanced AI system provides comprehensive chest X-ray analysis with 98% accuracy, supporting clinicians in detecting tuberculosis, lung cancer, and various respiratory conditions. The system processes images in real-time and provides detailed reports with confidence scores.',
    image: '/assets/products/chest-xray.jpg',
    features: [
      'Tuberculosis detection with 98% accuracy',
      'Lung cancer screening and nodule detection',
      'Respiratory disease analysis',
      'Real-time processing and reporting',
      'Integration with existing PACS systems',
      'Comprehensive clinical documentation'
    ],
    stats: [
      { icon: Award, value: '98%', label: 'Accuracy Rate' },
      { icon: Users, value: '1M+', label: 'Scans Analyzed' },
      { icon: Globe, value: '5+', label: 'States Using' }
    ],
    useCases: [
      'Primary care screening programs',
      'Tuberculosis control initiatives',
      'Lung cancer screening protocols',
      'Emergency department triage',
      'Radiology workflow optimization'
    ]
  },
  'lung-nodule': {
    title: 'Lung Nodule Management',
    subtitle: 'End-to-end lung cancer care continuum with early detection, progression monitoring, and case management.',
    description: 'Our comprehensive lung nodule management system provides end-to-end care coordination from initial detection through treatment planning. The AI-powered platform tracks nodule progression, manages patient follow-ups, and supports clinical decision-making.',
    image: '/assets/products/lung-nodule.jpg',
    features: [
      'Early lung nodule detection',
      'Progression monitoring over time',
      'Automated case management',
      'Risk stratification algorithms',
      'Patient follow-up scheduling',
      'Treatment planning support'
    ],
    stats: [
      { icon: Award, value: '95%', label: 'Sensitivity' },
      { icon: Users, value: '5M+', label: 'Patients Monitored' },
      { icon: Globe, value: '30+', label: 'Healthcare Systems' }
    ],
    useCases: [
      'Lung cancer screening programs',
      'Pulmonary nodule clinics',
      'Oncology care coordination',
      'Preventive health initiatives',
      'Clinical research studies'
    ]
  },
  'stroke-care': {
    title: 'Stroke & TBI Care',
    subtitle: 'AI-powered care coordination suite for patient triage and real-time clinical coordination.',
    description: 'Our stroke and traumatic brain injury care platform enables rapid patient triage and seamless clinical coordination. The system supports hub-and-spoke networks, ensuring timely interventions and improved patient outcomes.',
    image: '/assets/products/stroke-care.jpg',
    features: [
      'Rapid patient triage and assessment',
      'Real-time clinical coordination',
      'Hub-and-spoke network support',
      'Treatment decision algorithms',
      'Outcome tracking and analytics',
      'Quality improvement metrics'
    ],
    stats: [
      { icon: Award, value: '92%', label: 'Specificity' },
      { icon: Users, value: '2M+', label: 'Cases Processed' },
      { icon: Globe, value: '25+', label: 'Stroke Networks' }
    ],
    useCases: [
      'Emergency department triage',
      'Stroke center coordination',
      'Trauma care management',
      'Neurology consultations',
      'Quality improvement programs'
    ]
  },
  'msk-xray': {
    title: 'MSK X-Ray Reporting',
    subtitle: 'Advanced musculoskeletal imaging analysis for fracture detection, joint assessment, and orthopedic diagnosis.',
    description: 'Our musculoskeletal X-ray analysis system provides comprehensive assessment of bones, joints, and soft tissues. The AI platform detects fractures, assesses joint conditions, and supports orthopedic diagnosis and treatment planning.',
    image: '/assets/products/msk-xray.jpg',
    features: [
      'Fracture detection and classification',
      'Joint assessment and arthritis evaluation',
      'Orthopedic diagnosis support',
      'Treatment planning assistance',
      'Follow-up monitoring',
      'Surgical planning tools'
    ],
    stats: [
      { icon: Award, value: '94%', label: 'Detection Rate' },
      { icon: Users, value: '8M+', label: 'Studies Analyzed' },
      { icon: Globe, value: '40+', label: 'Orthopedic Centers' }
    ],
    useCases: [
      'Emergency fracture assessment',
      'Orthopedic consultations',
      'Sports medicine clinics',
      'Rheumatology practices',
      'Rehabilitation planning'
    ]
  },
  'heart-failure': {
    title: 'Heart Failure Detection',
    subtitle: 'Comprehensive cardiac imaging analysis for early heart failure detection and cardiovascular disease management.',
    description: 'Our cardiac imaging analysis platform provides early detection of heart failure and comprehensive cardiovascular disease management. The system analyzes multiple imaging modalities to support cardiology decision-making.',
    image: '/assets/products/heart-failure.jpg',
    features: [
      'Early heart failure detection',
      'Cardiac function assessment',
      'Risk stratification',
      'Treatment response monitoring',
      'Predictive analytics',
      'Clinical decision support'
    ],
    stats: [
      { icon: Award, value: '96%', label: 'Detection Rate' },
      { icon: Users, value: '3M+', label: 'Cardiac Studies' },
      { icon: Globe, value: '35+', label: 'Cardiology Centers' }
    ],
    useCases: [
      'Cardiology practices',
      'Heart failure clinics',
      'Preventive cardiology',
      'Cardiac rehabilitation',
      'Clinical research'
    ]
  },
  'care-coordination': {
    title: 'Care Coordination Platform',
    subtitle: 'AI-powered reporting and seamless collaboration platform for screening programs and case management.',
    description: 'Our comprehensive care coordination platform streamlines healthcare workflows, enhances collaboration between care teams, and improves patient outcomes through intelligent automation and data-driven insights.',
    image: '/assets/products/care-coordination.jpg',
    features: [
      'Program management and oversight',
      'Custom dashboard creation',
      'Enhanced care coordination',
      'Quality metrics tracking',
      'Population health management',
      'Interoperability solutions'
    ],
    stats: [
      { icon: Award, value: '99%', label: 'Uptime' },
      { icon: Users, value: '15M+', label: 'Patients Managed' },
      { icon: Globe, value: '100+', label: 'Healthcare Organizations' }
    ],
    useCases: [
      'Population health management',
      'Screening program coordination',
      'Case management workflows',
      'Quality improvement initiatives',
      'Healthcare analytics'
    ]
  }
}

// Generate static params for all product slugs
export async function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({
    slug: slug,
  }))
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const product = productData[slug as keyof typeof productData]

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-max">
          <div>
            <Link 
              href="/" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>
                <p className="text-xl text-primary-600 font-semibold mb-6">
                  {product.subtitle}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {product.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <div className="bg-primary-100 p-2 rounded-full">
                          <stat.icon className="h-6 w-6 text-primary-600" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
                  <div className="aspect-video bg-white/10 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">AI-Powered</div>
                      <div className="text-lg opacity-90">Advanced Analytics</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span>Real-time processing</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span>Clinical validation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span>Regulatory compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive capabilities designed to enhance clinical workflows and improve patient outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed for various healthcare settings and clinical scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{useCase}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Healthcare Practice?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join thousands of healthcare providers worldwide who trust our AI solutions 
                to improve patient outcomes and streamline clinical workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Request Demo
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 