import React from 'react'
import { GraduationCap, Award, Users, Briefcase, Mail, Linkedin } from 'lucide-react'

const TeamExpertise = () => {
  const keyPersonnel = [
    {
      name: 'Dr. Sarah Wijaya',
      position: 'Animal Nutrition Scientist',
      credentials: 'PhD, 12 years experience',
      specialization: 'Ruminant Nutrition & Feed Formulation',
      education: 'PhD Animal Science - Universitas Gadjah Mada',
      experience: '12+ years dalam research dan development animal nutrition',
      achievements: [
        'Published 25+ research papers in international journals',
        'Developed Raffele Premium formulation',
        'Expert consultant untuk 100+ commercial farms',
        'Speaker di 15+ international conferences'
      ],
      expertise: ['Feed Formulation', 'Nutritional Research', 'Quality Control', 'Product Development'],
      image: '/images/team.png'
    },
    {
      name: 'Budi Santoso',
      position: 'Quality Control Manager',
      credentials: 'ISO 9001 Lead Auditor',
      specialization: 'Quality Assurance & Process Optimization',
      education: 'M.Sc Chemical Engineering - ITB',
      experience: '10+ years dalam quality management dan process optimization',
      achievements: [
        'Led ISO 9001 certification implementation',
        'Achieved 99.2% quality consistency score',
        'Developed automated quality testing protocols',
        'Zero defects track record for 8+ months'
      ],
      expertise: ['ISO Standards', 'Quality Systems', 'Process Optimization', 'Risk Management'],
      image: '/images/team.png'
    },
    {
      name: 'Lisa Permata',
      position: 'Customer Success Director',
      credentials: 'MBA, Agricultural Economics',
      specialization: 'Client Relationship & Business Development',
      education: 'MBA Agricultural Economics - IPB University',
      experience: '8+ years dalam customer success dan business development',
      achievements: [
        'Maintained 94% client retention rate',
        'Expanded market to 25+ countries',
        'Built strategic partnerships across Asia-Pacific',
        'Developed customer success methodology'
      ],
      expertise: ['Client Relations', 'Business Strategy', 'Market Expansion', 'Partnership Development'],
      image: '/images/team.png'
    }
  ]

  const teamStats = [
    { value: '25+', label: 'Expert Team Members', description: 'Diverse professional backgrounds' },
    { value: '200+', label: 'Years Combined Experience', description: 'Collective expertise' },
    { value: '8', label: 'PhDs on Team', description: 'Advanced academic credentials' },
    { value: '15', label: 'Masters Degrees', description: 'Specialized knowledge' },
    { value: '100%', label: 'Industry Certified', description: 'Professional certifications' },
    { value: '12', label: 'Languages Spoken', description: 'Global communication capability' }
  ]

  const departments = [
    {
      name: 'Research & Development',
      icon: <GraduationCap className="text-primary-500" size={24} />,
      teamSize: 8,
      description: 'Innovation dalam formulation dan product development',
      keyFocus: ['Product innovation', 'Nutritional research', 'Quality enhancement', 'Sustainability']
    },
    {
      name: 'Quality Assurance',
      icon: <Award className="text-primary-500" size={24} />,
      teamSize: 6,
      description: 'Ensuring consistent quality dan compliance standards',
      keyFocus: ['Quality control', 'Testing protocols', 'Compliance management', 'Continuous improvement']
    },
    {
      name: 'Customer Success',
      icon: <Users className="text-primary-500" size={24} />,
      teamSize: 5,
      description: 'Client relationship management dan support excellence',
      keyFocus: ['Client consultation', 'Technical support', 'Relationship building', 'Success monitoring']
    },
    {
      name: 'Operations & Export',
      icon: <Briefcase className="text-primary-500" size={24} />,
      teamSize: 6,
      description: 'Efficient operations dan global export management',
      keyFocus: ['Production management', 'Export logistics', 'Supply chain', 'International compliance']
    }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="team" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Team Expertise
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Tim ahli berpengalaman dengan kredensial akademik tinggi dan track record 
            proven dalam menghadirkan solusi nutrition excellence.
          </p>
        </div>

        {/* Key Personnel */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="font-heading text-3xl font-bold text-neutral-900 text-center mb-12">
            Key Personnel
          </h3>
          <div className="space-y-12">
            {keyPersonnel.map((person, index) => (
              <div key={index} className="bg-background-elevated rounded-lg shadow-card overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Person Image & Basic Info */}
                  <div className="lg:col-span-1 p-8">
                    <div className="text-center">
                      <div 
                        className="w-32 h-32 rounded-full bg-cover bg-center mx-auto mb-4 border-4 border-primary-100"
                        style={{ backgroundImage: `url('${person.image}')` }}
                      ></div>
                      <h4 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                        {person.name}
                      </h4>
                      <p className="text-primary-600 font-medium mb-1">
                        {person.position}
                      </p>
                      <p className="text-neutral-600 text-sm mb-4">
                        {person.credentials}
                      </p>
                      <div className="bg-primary-50 rounded-lg p-3">
                        <p className="text-primary-800 text-sm font-medium">
                          {person.specialization}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Experience & Achievements */}
                  <div className="lg:col-span-2 p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Education & Experience */}
                      <div>
                        <h5 className="font-semibold text-neutral-900 mb-3">Education & Experience</h5>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start gap-2">
                            <GraduationCap className="text-primary-500 flex-shrink-0 mt-0.5" size={16} />
                            <span className="text-neutral-600">{person.education}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Briefcase className="text-primary-500 flex-shrink-0 mt-0.5" size={16} />
                            <span className="text-neutral-600">{person.experience}</span>
                          </div>
                        </div>

                        <h5 className="font-semibold text-neutral-900 mb-3 mt-6">Key Expertise</h5>
                        <div className="flex flex-wrap gap-2">
                          {person.expertise.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h5 className="font-semibold text-neutral-900 mb-3">Key Achievements</h5>
                        <ul className="space-y-2">
                          {person.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-2 text-sm">
                              <Award className="text-green-600 flex-shrink-0 mt-0.5" size={14} />
                              <span className="text-neutral-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Statistics */}
        <div className="bg-background-elevated rounded-lg shadow-card p-8 mb-16">
          <h3 className="font-heading text-2xl font-bold text-neutral-900 text-center mb-8">
            Team Excellence by Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-neutral-900 text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-neutral-600 text-xs">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Department Structure */}
        <div className="mb-16">
          <h3 className="font-heading text-3xl font-bold text-neutral-900 text-center mb-12">
            Department Structure
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-background-elevated rounded-lg shadow-card p-6 hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  {dept.icon}
                  <div>
                    <h4 className="font-semibold text-neutral-900">{dept.name}</h4>
                    <p className="text-primary-600 text-sm">{dept.teamSize} team members</p>
                  </div>
                </div>
                <p className="text-neutral-600 text-sm mb-4">{dept.description}</p>
                <div>
                  <h5 className="font-medium text-neutral-900 mb-2 text-sm">Key Focus Areas:</h5>
                  <ul className="space-y-1">
                    {dept.keyFocus.map((focus, focusIndex) => (
                      <li key={focusIndex} className="text-neutral-600 text-xs flex items-center gap-1">
                        <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                        {focus}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Culture & Values */}
        <div className="bg-primary-500 rounded-lg p-8 text-white text-center">
          <Users className="mx-auto mb-4 text-primary-200" size={48} />
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Collaborative Excellence Culture
          </h3>
          <p className="text-primary-100 mb-6 max-w-3xl mx-auto leading-relaxed">
            Tim kami terdiri dari professionals berpengalaman yang berkomitmen pada excellence, 
            continuous learning, dan collaborative approach dalam menghadirkan solusi terbaik 
            untuk setiap klien.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">Continuous Learning</div>
              <div className="text-primary-200 text-sm">Regular training & development programs</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">Client-Centric</div>
              <div className="text-primary-200 text-sm">Every decision focuses on client success</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">Innovation Driven</div>
              <div className="text-primary-200 text-sm">Embracing new technologies & methodologies</div>
            </div>
          </div>
        </div>

        {/* Contact Team CTA */}
        <div className="text-center mt-16">
          <p className="text-neutral-600 mb-6">
            Ingin berkonsultasi langsung dengan expert team kami?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-cta-primary text-cta-text px-8 py-3 rounded-sm font-semibold hover:bg-cta-hover transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Schedule Expert Consultation
            </button>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-primary-500 text-primary-500 px-8 py-3 rounded-sm font-semibold hover:bg-primary-50 transition-colors duration-300"
            >
              Meet Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamExpertise