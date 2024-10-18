import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ResultsDisplayProps {
  results: string;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  return (
    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md">
      <h3 className="flex items-center text-lg font-semibold text-red-800 mb-2">
        <AlertCircle className="w-5 h-5 mr-2" />
        Vulnerability Assessment Results
      </h3>
      <p className="text-red-700">{results}</p>
    </div>
  );
};

export default ResultsDisplay;