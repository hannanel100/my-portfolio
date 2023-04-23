// loading skeleton for loading data

const LoadingSkeleton = ({ length }: { length: number }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {Array.from({ length }).map((_, i) => (
        <div className="mx-4 my-4 h-8 rounded-md bg-white" key={i}></div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
