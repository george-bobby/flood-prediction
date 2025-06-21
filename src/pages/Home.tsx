import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, BookOpen, Code, Github, BarChart3, Target, Zap } from 'lucide-react';

const Home = () => {
  const researchPapers = [
    {
      title: "Climate Risk Assessment Study",
      description: "Springer Article - Natural Hazards Research",
      url: "https://link.springer.com/article/10.1007/s11069-021-04694-w",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "Climate Adaptation Strategies",
      description: "Springer Article - Environmental Management",
      url: "https://link.springer.com/article/10.1007/s11069-018-3456-z",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "UN SDG Goal 13: Climate Action",
      description: "United Nations Sustainable Development Goals",
      url: "https://sdgs.un.org/goals/goal13",
      icon: <Target className="w-5 h-5" />
    }
  ];

  const colabLinks = [
    {
      title: "Climate Data Analysis - Model 1",
      description: "Google Colab Notebook - Primary Analysis",
      url: "https://colab.research.google.com/drive/1Y1xurUQHVsMB_hu0UpQeXFd8UPo8NNTo?usp=sharing",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Climate Data Analysis - Model 2",
      description: "Google Colab Notebook - Secondary Analysis",
      url: "https://colab.research.google.com/drive/1D145yB779D0m17odxyU0qtZIJwSzkpnD?usp=sharing",
      icon: <Code className="w-5 h-5" />
    }
  ];

  const githubLinks = [
    {
      title: "GitHub Profile",
      description: "Complete source code and additional resources",
      url: "https://github.com/george-bobby/",
      icon: <Github className="w-5 h-5" />
    }
  ];

  const researchVisualizations = [
    {
      title: "Membership Functions",
      description: "Fuzzy logic membership function visualizations",
      path: "/functions",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Accuracy Graphs",
      description: "Model performance and accuracy metrics",
      path: "/accuracy",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Results",
      description: "Research findings and experimental results",
      path: "/results",
      icon: <Target className="w-5 h-5" />
    }
  ];

  const ExternalLinkCard = ({ link, colorScheme }) => (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${colorScheme}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-lg ${
              colorScheme.includes('blue') ? 'bg-blue-100 text-blue-600' : 
              colorScheme.includes('emerald') ? 'bg-emerald-100 text-emerald-600' :
              'bg-purple-100 text-purple-600'
            }`}>
              {link.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">
                {link.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{link.description}</p>
            </div>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </div>
      </div>
    </a>
  );

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Climate Research References
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive collection of research papers, code implementations, and experimental results for climate data analysis and modeling.
          </p>
        </div>

        {/* Research Paper References */}
        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Research Paper References</h2>
          {researchPapers.map((link, index) => (
            <ExternalLinkCard 
              key={index} 
              link={link} 
              colorScheme="bg-white border-blue-200 hover:border-blue-400 hover:bg-blue-50"
            />
          ))}
        </div>

        {/* Colab Links */}
        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Google Colab Notebooks</h2>
          {colabLinks.map((link, index) => (
            <ExternalLinkCard 
              key={index} 
              link={link} 
              colorScheme="bg-white border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50"
            />
          ))}
        </div>

        {/* GitHub Links */}
        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">GitHub Repository</h2>
          {githubLinks.map((link, index) => (
            <ExternalLinkCard 
              key={index} 
              link={link} 
              colorScheme="bg-white border-purple-200 hover:border-purple-400 hover:bg-purple-50"
            />
          ))}
        </div>

        {/* Research Visualizations */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Research Visualizations</h2>
          {researchVisualizations.map((page, index) => (
            <Link
              key={index}
              to={page.path}
              className="group block"
            >
              <div className="p-6 bg-white rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:bg-amber-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-amber-100 text-amber-600 rounded-lg">
                      {page.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">
                        {page.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">{page.description}</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors">
                    →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Research Paper References & Code Repository
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;