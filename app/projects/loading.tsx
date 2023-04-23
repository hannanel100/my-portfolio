import LoadingSkeleton from "../LoadingSkeleton";

const LoadingProjects = () => {
  return (
    <div className="loading-projects">
      <LoadingSkeleton length={3} />
    </div>
  );
};

export default LoadingProjects;
