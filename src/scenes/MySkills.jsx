import React from 'react'
import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion  } from 'framer-motion'

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px")
  return (
  
    <section id="skills" className="pt-10 pb-24">
        {/* HEADER AND IMAGE SECTION */}
        <div className='md:flex md:justify-between md:gap-16 mt-32'>
            <motion.div
            className='md:w-1/3'
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5}}
             variants={{
                 hidden:{ opacity: 0 , x: -50},
                 visible:{ opacity: 1 , x: 0}
             }}>
                <p className='font-playfair font-semibold text-4xl mb-5'>
                    My <span className='text-red'>Skills</span>
                </p>
                <LineGradient width='w-1/3' />
                <p className='mt-10 mb-7'>
                {/* Developed and maintained web applications utilising technologies such
as Reactjs, Nextjs,Javascript, Node.js, Postgresql, Express, Redux, Netlify, Heroku,MonGoDB and Git. */}
From front-end to back-end development, I possess a versatile skill set that enables me to tackle any challenge with confidence and precision. I have developed and maintained several web applications utilizing technologies such as Reactjs, Nextjs, Javascript, CSS Node.js, Postgresql, Express, Redux, Netlify, Heroku, MonGoDB and Git.
                </p>
            
            </motion.div>
            <div className='mt-16 md:mt-0'>
                {isAboveMediumScreens ? (
                      <div
                      className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
                      before:w-full before:h-full 
                      before:border-2 before:border-blue  before:z-[-1]" >
               
                     <img alt="skills"
                     className="z-10"
                     src="/assets/skills-image.png">
                     
                     </img>
                      </div>
                ): (
                    <img alt="skills"
                    className="z-10"
                    src="/assets/skills-image.png">
                    
                    </img>

                )}
            </div>
        </div>

        {/* skills */}
        <div className='md:flex md:justify-between mt-16 gap-32'>
        {/* innovative */}
        <motion.div
        className='md:w-1/3 mt-10' 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5}}
        variants={{
            hidden:{ opacity: 0 , y: 50},
            visible:{ opacity: 1 , y: 0}
        }}>
            <div className='relative h-32'>
                <div className='z-10'>
                 <p className='font-playfair font-semibold text-5xl'>01</p>
                 <p className='font-playfair font-semibold text-3xl mt-3'>Innovative</p>
                </div>
                <div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]' />
            </div>
            <p className='mt-5 '>
            {/* I am  constantly exploring new technologies, frameworks, and tools to create unique and cutting-edge web applications,always looking to  push the boundaries of what's possible on the web and finding creative solutions to complex problems. */}
            I am always looking to push the boundaries of what's possible on the web and finding creative solutions to complex problems.
            </p>

        </motion.div>
          {/* experience */}
          <motion.div
        className='md:w-1/3 mt-10' 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5}}
        variants={{
            hidden:{ opacity: 0 , y: 50},
            visible:{ opacity: 1 , y: 0}
        }}>
            <div className='relative h-32'>
                <div className='z-10'>
                 <p className='font-playfair font-semibold text-5xl'>02</p>
                 <p className='font-playfair font-semibold text-3xl mt-3'>Experience</p>
                </div>
                <div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]' />
            </div>
            <p className='mt-5'>
          {/* I have enjoyed working on complex but thrilling web applications which inlcludes end-to-end application software development with colorful user interface, that allows users to see and interact with them directly, */}
          {/* and also allows for storage of data in the database */}
          I have gained experience and enjoyed working on several complex but thrilling web applications.
            </p>
        </motion.div>
          {/* imaginative */}
          <motion.div
        className='md:w-1/3 mt-10' 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5}}
        variants={{
            hidden:{ opacity: 0 , y: 50},
            visible:{ opacity: 1 , y: 0}
        }}>
            <div className='relative h-32'>
                <div className='z-10'>
                 <p className='font-playfair font-semibold text-5xl'>03</p>
                 <p className='font-playfair font-semibold text-3xl mt-3'>Imaginative</p>
                </div>
                <div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]' />
            </div>
            <p className='mt-5 '>
            {/* In addition to my technical and creative skills, I am also able to stay up-to-date with the latest trends and technologies in the industry, and i'm always looking for new ways to improve my skills and knowledge. */}
            In addition to my technical skills, I also strive to utilize my creative skills and imagination to create intuitive web apps.
            </p>
        
        </motion.div>
        </div>
    </section>
  )
}

export default MySkills