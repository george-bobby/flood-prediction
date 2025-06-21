import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

const Accuracy = () => {
  const accuracyMetrics = [
    {
      title: "Model Training Accuracy",
      description: "Training accuracy progression over epochs showing convergence patterns and learning curves for climate prediction models."
    },
    {
      title: "Validation Performance",
      description: "Cross-validation results demonstrating model generalization capability across different climate datasets."
    },
    {
      title: "Confusion Matrix Analysis",
      description: "Detailed confusion matrices for classification tasks showing true vs predicted climate conditions."
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
            Accuracy Graphs
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive model performance analysis and accuracy metrics for climate prediction algorithms.
          </p>
        </div>

        {/* Accuracy Metrics - One per row */}
        <div className="space-y-8">
          {accuracyMetrics.map((metric, index) => {
            // Map images: 0 -> fuzzy.png, 1 -> hybrid.png, 2 -> neural.png
            const accuracyImages = [
              '/accuracy/fuzzy.png',
              '/accuracy/hybrid.png',
              '/accuracy/neural.png'
            ];
            const imgSrc = accuracyImages[index % accuracyImages.length];
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <img
                      src={imgSrc}
                      alt={metric.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {metric.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {metric.description}
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

export default Accuracy;