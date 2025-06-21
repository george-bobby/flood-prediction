import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

const Functions = () => {
  const functionTypes = [
    {
      title: "Temperature Membership Functions",
      description: "Fuzzy logic membership functions for temperature classification (Low, Medium, High) with trapezoidal and triangular shapes."
    },
    {
      title: "Precipitation Membership Functions",
      description: "Gaussian and sigmoid membership functions for rainfall intensity classification and drought assessment."
    },
    {
      title: "Humidity Level Functions",
      description: "Bell-shaped membership functions for atmospheric humidity levels with overlapping ranges for accurate classification."
    },
    {
      title: "Wind Speed Classification",
      description: "Piecewise linear membership functions for wind speed categorization from calm to extreme weather conditions."
    },
    {
      title: "Composite Weather Index",
      description: "Combined membership functions integrating multiple weather parameters for comprehensive climate assessment."
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link
            to="/"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Membership Functions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fuzzy logic membership functions used in climate data analysis and weather pattern classification.
          </p>
        </div>

        {/* Functions Grid - One per row */}
        <div className="space-y-8">
          {['/functions/temprature.png', '/functions/rainfall.png', '/functions/pressure.png', '/functions/windspeed.png', '/functions/change.png'].map((imgSrc, index) => (
            <ImageCard key={index} src={imgSrc} alt={`Function Graph ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

function ImageCard({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex justify-center cursor-pointer" onClick={() => setOpen(true)}>
        <img
          src={src}
          alt={alt}
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        />
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" onClick={() => setOpen(false)}>
          <img src={src} alt={alt} style={{ maxHeight: '90vh', maxWidth: '90vw' }} />
        </div>
      )}
    </>
  );
}

export default Functions;