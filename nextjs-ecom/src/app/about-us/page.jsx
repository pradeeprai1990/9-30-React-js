import React from 'react'

export default function Aboutus() {
  return (
    <div>
       <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">About Our Company</h2>
          
          {/* Mission Statement */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              At our e-commerce platform, we strive to provide an exceptional shopping experience by offering high-quality products, 
              competitive prices, and outstanding customer service. Our mission is to make online shopping simple, enjoyable, and 
              accessible to everyone.
            </p>
          </div>

          {/* Company History */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2024, our company has grown from a small startup to a leading e-commerce platform. We started with a simple 
              idea: to make online shopping better. Today, we serve thousands of customers worldwide and continue to expand our 
              product range and services.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-blue-600">Quality</h4>
              <p className="text-gray-600">
                We carefully select each product to ensure it meets our high standards of quality and reliability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-blue-600">Innovation</h4>
              <p className="text-gray-600">
                We constantly innovate to provide better shopping experiences and stay ahead of market trends.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-blue-600">Customer First</h4>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We prioritize their needs and satisfaction.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Team</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our team consists of passionate professionals dedicated to providing the best shopping experience. 
              From customer service to product selection, each team member plays a crucial role in our success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">John Doe</h4>
                  <p className="text-gray-600">Founder & CEO</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Jane Smith</h4>
                  <p className="text-gray-600">Head of Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
