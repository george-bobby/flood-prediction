import React from 'react';
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
    },
    {
      title: "Seasonal Variation Functions",
      description: "Time-dependent membership functions capturing seasonal patterns and long-term climate trends."
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
          {functionTypes.map((func, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-1/2">
                  <img 
                    src={`https://images.pexels.com/photos/${[
                      '8386440', // Mathematical functions
                      '8386434', // Data analysis
                      '8386435', // Scientific graphs
                      '8386436', // Mathematical visualization
                      '8386437', // Function plots
                      '8386438'  // Statistical charts
                    ][index]}/pexels-photo-${[
                      '8386440', '8386434', '8386435', '8386436', '8386437', '8386438'
                    ][index]}.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop`}
                    alt={func.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {func.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {func.description}
                  </p>
                  <button className="flex items-center text-emerald-600 hover:text-emerald-800 transition-colors font-medium">
                    <Download className="w-5 h-5 mr-2" />
                    Download Plot
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Functions;