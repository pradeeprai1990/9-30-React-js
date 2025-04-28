import React from 'react'

export default function Team() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet the talented individuals who make our company great. Our diverse team brings together expertise from various fields to deliver exceptional results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Team Member 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
          <h3 className="text-xl font-semibold mb-2">John Doe</h3>
          <p className="text-gray-600 mb-2">Chief Executive Officer</p>
          <p className="text-sm text-gray-500">
            With over 15 years of experience in the industry, John leads our company with vision and expertise.
          </p>
        </div>

        {/* Team Member 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
          <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
          <p className="text-gray-600 mb-2">Chief Technology Officer</p>
          <p className="text-sm text-gray-500">
            Jane brings innovative solutions and technical excellence to our development team.
          </p>
        </div>

        {/* Team Member 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
          <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
          <p className="text-gray-600 mb-2">Head of Design</p>
          <p className="text-sm text-gray-500">
            Mike's creative vision and attention to detail ensure our products look and feel amazing.
          </p>
        </div>
      </div>
    </div>
  )
}
