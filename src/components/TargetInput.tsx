import React from 'react';
import { Globe } from 'lucide-react';

interface TargetInputProps {
  target: string;
  setTarget: (target: string) => void;
}

const TargetInput: React.FC<TargetInputProps> = ({ target, setTarget }) => {
  return (
    <div className="mb-4">
      <label htmlFor="target" className="block text-sm font-medium text-gray-700 mb-1">
        Target Website (IP or Domain)
      </label>
      <div className="relative">
        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          id="target"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="Enter IP or domain (e.g., example.com)"
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default TargetInput;