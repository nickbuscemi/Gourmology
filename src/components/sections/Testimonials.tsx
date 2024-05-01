import { useScript } from "@/hooks/useScript"

const Testimonials: React.FC = () => {
    // URL to the Elfsight platform script
    const elfsightScriptUrl = "https://static.elfsight.com/platform/platform.js";
    
  
    // Use the custom hook to load the script
    
    useScript(elfsightScriptUrl);
    
  
    return (
        <div className="bg-dark-1">
      <div className="elfsight-app-813563ea-d810-482b-b1f8-b4ba18a296bb" data-elfsight-app-lazy></div>
      </div>
      );
  };
  
  export default Testimonials;