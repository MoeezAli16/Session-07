const ProjectDetails = ({ projectName, framework, isDarkMode }) => (
  <div
    className={`mt-8 text-center p-6 rounded-lg shadow-md ${isDarkMode ? " text-white" : "bg-white text-black"}`}
  >
    <h3 className="text-2xl font-semibold mb-4">Project Details</h3>
    <div className="space-y-2">
      <p className="text-lg"><strong>Project Name:</strong> {projectName}</p>
      <p className="text-lg"><strong>Framework:</strong> {framework}</p>
    </div>
  </div>
);

export default ProjectDetails;
