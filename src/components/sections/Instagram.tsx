import { useScript } from "@/hooks/useScript"

const Instagram: React.FC = () => {
    // URL to the Elfsight platform script
    
    const elfsightScriptUrl2 = "https://static.elfsight.com/platform/platform.js"
  
    // Use the custom hook to load the script
    useScript(elfsightScriptUrl2);
    
    
  
    return (
      <div className="bg-dark-1 flex justify-center items-center">
        <div className="w-full md:w-10/12 md:mt-8">
        <h1 className=" flex items-center justify-center mb-8 font-garamond text-2xl text-cream1">Check out our lastest buzz</h1>
        <div className="elfsight-app-8faeaca2-2701-445f-8d19-12b58d07fcd4" data-elfsight-app-lazy></div>  
      </div>
      </div>
      );
  };
  
  export default Instagram;