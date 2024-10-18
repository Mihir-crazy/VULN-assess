import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import TargetInput from './components/TargetInput';
import ToolSelector from './components/ToolSelector';
import ResultsDisplay from './components/ResultsDisplay';

function App() {
  const [target, setTarget] = useState('');
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [results, setResults] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = async () => {
    setIsScanning(true);
    setResults(null);
    // Simulating API call for vulnerability assessment
    await new Promise(resolve => setTimeout(resolve, 3000));
    setResults('Vulnerabilities found: XSS in login form, Outdated SSL certificate');
    setIsScanning(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">AI-Powered Vulnerability Assessment</h1>
        <p className="text-gray-600">Secure your web applications with ease</p>
      </header>

      <main className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <TargetInput target={target} setTarget={setTarget} />
        <ToolSelector selectedTools={selectedTools} setSelectedTools={setSelectedTools} />
        
        <button
          onClick={handleScan}
          disabled={!target || selectedTools.length === 0 || isScanning}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed mt-4 flex items-center justify-center"
        >
          {isScanning ? (
            <>
              <Loader2 className="animate-spin mr-2" />
              Scanning...
            </>
          ) : (
            <>
              <AlertTriangle className="mr-2" />
              Start Scan
            </>
          )}
        </button>

        {results && <ResultsDisplay results={results} />}
      </main>

      <footer className="mt-8 text-center text-gray-600">
        <p>&copy; 2024 AI-Powered Vulnerability Assessment. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;