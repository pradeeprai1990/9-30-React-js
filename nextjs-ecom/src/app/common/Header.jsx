"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  let myCounter=useSelector((store)=>store.counter.count)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-gray-800">
            EcomStore
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href={'/'} className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link  href={'/about-us'} className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link  href={'/product'} className="text-gray-600 hover:text-gray-900">
              Product
            </Link>
            <Link href={'/contact-us'} className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
            
          </div>

         

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/cart" className="text-gray-600 hover:text-gray-900">
              Cart {myCounter}
            </a>
            <a href="/account" className="text-gray-600 hover:text-gray-900">
              Account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="/products" className="text-gray-600 hover:text-gray-900">
                Products
              </a>
              <a href="/categories" className="text-gray-600 hover:text-gray-900">
                Categories
              </a>
              <a href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                />
              </div>
              <div className="flex space-x-4">
                <a href="/cart" className="text-gray-600 hover:text-gray-900">
                  Cart
                </a>
                <a href="/account" className="text-gray-600 hover:text-gray-900">
                  Account
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
