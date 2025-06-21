import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

const Results = () => {
  const resultImages = [
    {
      title: "Test Case 4: Fuzzy Output (Defuzzified: 84.80)",
      description: "Inputs: Temp=32°C, Wind=9 Bft, Atm=29.5 inHg, Rate=0.2 inHg/3h. Output: 84.80 mm/h (Very High). Expected: High. Match: X. This test case demonstrates a very high rainfall prediction with a centroid at 84.80, but the expected value was 'High', resulting in a mismatch."
    },
    {
      title: "Test Case 2: Fuzzy Output (Defuzzified: 13.33)",
      description: "Inputs: Temp=18°C, Wind=3 Bft, Atm=30.5 inHg, Rate=0.01 inHg/3h. Output: 13.33 mm/h (Very Low). Expected: Low. Match: X. This test case shows a very low rainfall prediction, but the expected value was 'Low', resulting in a mismatch."
    },
    {
      title: "Test Case 5: Fuzzy Output (Defuzzified: 85.94)",
      description: "Inputs: Temp=38°C, Wind=12 Bft, Atm=28.5 inHg, Rate=0.9 inHg/3h. Output: 85.94 mm/h (Very High). Expected: Very High. Match: ✓. This test case demonstrates a very high rainfall prediction, matching the expected value."
    },
    {
      title: "Test Case 1: Fuzzy Output (Defuzzified: 13.33)",
      description: "Inputs: Temp=5°C, Wind=1 Bft, Atm=31.5 inHg, Rate=0.002 inHg/3h. Output: 13.33 mm/h (Very Low). Expected: Very Low. Match: ✓. This test case shows a very low rainfall prediction, matching the expected value."
    },
    {
      title: "Test Case 6: Fuzzy Output (Defuzzified: 13.33)",
      description: "Inputs: Temp=15°C, Wind=0.5 Bft, Atm=30.2 inHg, Rate=0.001 inHg/3h. Output: 13.33 mm/h (Very Low). Expected: Very Low. Match: ✓. This test case demonstrates a very low rainfall prediction, matching the expected value."
    },
    {
      title: "Test Case 3: Fuzzy Output (Defuzzified: 49.64)",
      description: "Inputs: Temp=25°C, Wind=5 Bft, Atm=30.0 inHg, Rate=0.05 inHg/3h. Output: 49.64 mm/h (Normal). Expected: Normal. Match: ✓. This test case shows a normal rainfall prediction, matching the expected value."
    },
    {
      title: "Test Case 7: Fuzzy Output (Defuzzified: 85.94)",
      description: "Inputs: Temp=40°C, Wind=14 Bft, Atm=28.0 inHg, Rate=1.0 inHg/3h. Output: 85.94 mm/h (Very High). Expected: Very High. Match: ✓. This test case demonstrates a very high rainfall prediction, matching the expected value."
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
            const resultImagesSrc = [
              '/results/1.png',
              '/results/2.png',
              '/results/3.png',
              '/results/4.png',
              '/results/5.png',
              '/results/6.png',
              '/results/7.png'
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