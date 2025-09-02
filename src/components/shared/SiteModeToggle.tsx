import { useSiteMode } from '@/contexts/SiteModeContext';

const SiteModeToggle = () => {
  const { mode, toggleMode } = useSiteMode();

  return (
    <div className="flex items-center gap-3">
      <span className={`text-sm font-medium transition-colors ${mode === 'catering' ? 'text-white' : 'text-white/60'}`}>
        Catering
      </span>
      <button
        onClick={toggleMode}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            mode === 'store' ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`text-sm font-medium transition-colors ${mode === 'store' ? 'text-white' : 'text-white/60'}`}>
        Store
      </span>
    </div>
  );
};

export default SiteModeToggle;