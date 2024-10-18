import React from 'react';
import { CheckSquare } from 'lucide-react';

interface ToolSelectorProps {
  selectedTools: string[];
  setSelectedTools: (tools: string[]) => void;
}

const tools = [
  { id: 'nmap', name: 'Nmap' },
  { id: 'sqlmap', name: 'SQLMap' },
  { id: 'nikto', name: 'Nikto' },
  { id: 'dirb', name: 'Dirb' },
  { id: 'metasploit', name: 'Metasploit' },
];

const ToolSelector: React.FC<ToolSelectorProps> = ({ selectedTools, setSelectedTools }) => {
  const toggleTool = (toolId: string) => {
    if (selectedTools.includes(toolId)) {
      setSelectedTools(selectedTools.filter(id => id !== toolId));
    } else {
      setSelectedTools([...selectedTools, toolId]);
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Select Tools</h2>
      <div className="grid grid-cols-2 gap-2">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => toggleTool(tool.id)}
            className={`flex items-center justify-between p-2 border rounded-md transition-colors duration-200 ${
              selectedTools.includes(tool.id)
                ? 'bg-blue-100 border-blue-500 text-blue-700'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {tool.name}
            {selectedTools.includes(tool.id) && <CheckSquare className="w-5 h-5 text-blue-500" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToolSelector;