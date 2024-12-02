interface ProjectDetailsProps {
    projectName: string;
    framework: string;
    isDarkMode: boolean;  // Ensure isDarkMode is included here
  }
  
  const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectName, framework, isDarkMode }) => (
    <div className={`mt-8 text-center p-4 rounded-lg ${isDarkMode ? "text-white" : "text-black"}`}>
      <h3 className="text-xl">Project Details:</h3>
      <p><strong>Project Name:</strong> {projectName}</p>
      <p><strong>Framework:</strong> {framework}</p>
    </div>
  );
  
  export default ProjectDetails;
  