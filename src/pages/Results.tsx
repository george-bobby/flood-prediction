import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

const Results = () => {
  const resultImages = [
    {
      title: "Climate Model Performance Comparison",
      description: "Comparative analysis of different climate prediction models showing accuracy metrics and performance indicators."
    },
    {
      title: "Regional Climate Impact Assessment",
      description: "Geographic visualization of climate change impacts across different regions with severity mapping."
    },
    {
      title: "Temporal Analysis Results",
      description: "Time-series analysis showing climate trends over the past decades with future projections."
    },
    {
      title: "Statistical Significance Testing",
      description: "Comprehensive statistical analysis results showing p-values and confidence intervals for climate predictions."
    },
    {
      title: "Model Validation Results",
      description: "Cross-validation results and model performance metrics across different climate datasets."
    },
    {
      title: "Prediction Accuracy Analysis",
      description: "Detailed analysis of prediction accuracy for various climate parameters and time horizons."
    },
    {
      title: "Model Validation Results",
      description: "Cross-validation results and model performance metrics across different climate datasets."
    },
    {
      title: "Prediction Accuracy Analysis",
      description: "Detailed analysis of prediction accuracy for various climate parameters and time horizons."
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
            Research Results
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive analysis results from climate data modeling and prediction experiments.
          </p>
        </div>

        {/* Results - One per row */}
        <div className="space-y-8">
          {resultImages.map((result, index) => {
            // Map images: 0 -> 1.png, 1 -> 2.png, ..., 5 -> 6.png
            const resultImagesSrc = [
              '/results/1.png',
              '/results/2.png',
              '/results/3.png',
              '/results/4.png',
              '/results/5.png',
              '/results/6.png'
            ];
            const imgSrc = resultImagesSrc[index];
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <img
                      src={imgSrc}
                      alt={result.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {result.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Results;