import React from 'react'

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center items-center sm:gap-x-6">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          We Love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore optio quasi nulla modi voluptate debitis libero suscipit, omnis repudiandae magnam exercitationem magni iure, sed, at dicta. Soluta nostrum iste quidem?
      </p>
    </>
  )
}

export default About