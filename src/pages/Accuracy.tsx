import React, { useState } from 'react';
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
          {['/accuracy/fuzzy.png', '/accuracy/hybrid.png', '/accuracy/neural.png'].map((imgSrc, index) => (
            <ImageCard key={index} src={imgSrc} alt={`Accuracy Graph ${index + 1}`} />
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

export default Accuracy;