import { Card } from '@mui/material'
import React from 'react'
import ExperienceCard from '../components/Experience/ExperienceCard'

function Experience() {
  const experienceData1 = {
    companyLogo: 'path/to/company-logo.png',
    position: 'Web Developerr',
    date: 'June 2023 - Aout 2023',
    description: `As a first-year intern, I actively contributed to the development of a dynamic web application aimed at revolutionizing restaurant management. My primary focus was on creating a comprehensive system that streamlines the process of managing restaurant menus and staff.

    Key Contributions:
    
    - Menu Customization: I played a pivotal role in developing features that allow users to easily customize menus, providing restaurants with the flexibility to tailor offerings to their unique preferences and seasonal changes.
    
    - Table Association with QR Codes: Implemented a seamless system enabling the association of menus with specific tables through QR codes. This innovative solution enhances the overall dining experience by simplifying menu access for patrons.
    
    - Frontend and Backend Development: Engaged in both frontend and backend development, honing skills in technologies such as React and Node.js. This comprehensive approach equipped me with a well-rounded understanding of full-stack development.`,
  };
  const experienceData2 = {
    companyLogo: 'path/to/company-logo.png',
    position: ' Head of IT Consulting Cell',
    date: 'June 2023 - Present',
    description: `Missions : 
    - Managing the technical needs of the Junior Enterprise
    - Collaborating with the IT Consulting team members to effectively allocate tasks and responsibilities based on their individual skills and interests, promoting a dynamic and engaged team environment.
    - Overseeing development teams and maintaining a detailed project tracking system to ensure the timely and successful completion of technical projects, with a focus on meeting deadlines and achieving project objectives.`,
  };
  return (
    <div>
      <section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
        Professional Experience 
				</p>
			</div>
      <div className='container'>
        <ExperienceCard {...experienceData1}></ExperienceCard>
      </div>
      </section>

      <section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
        Extracurricular activities
				</p>
			</div>
      <div className='container flex flex-col items-center justify-center'>
        <ExperienceCard {...experienceData2}></ExperienceCard>
      </div>
      </section>
    </div>
  )
}

export default Experience