import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div
      className="container min-h-[80vh] flex justify-center items-center"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="md:flex justify-center gap-10 items-center">
        <Skeleton
          className="h-[400px] w-[300px] rounded-xl"
          aria-label="Loading image placeholder"
        />
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Skeleton
              className="h-[40px] w-[100px] rounded-xl"
              aria-label="Loading title placeholder"
            />
            <Skeleton
              className="h-[40px] w-[300px] rounded-xl"
              aria-label="Loading subtitle placeholder"
            />
            <Skeleton
              className="h-[40px] w-[400px] rounded-xl"
              aria-label="Loading description placeholder"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Skeleton
              className="h-[20px] w-[100px] rounded-xl"
              aria-label="Loading small text placeholder"
            />
            <Skeleton
              className="h-[20px] w-[300px] rounded-xl"
              aria-label="Loading small text placeholder"
            />
            <Skeleton
              className="h-[20px] w-[400px] rounded-xl"
              aria-label="Loading small text placeholder"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Skeleton
            className="h-[20px] w-[100px] rounded-xl"
            aria-label="Loading small text placeholder"
          />
          <Skeleton
            className="h-[20px] w-[300px] rounded-xl"
            aria-label="Loading small text placeholder"
          />
          <Skeleton
            className="h-[20px] w-[400px] rounded-xl"
            aria-label="Loading small text placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
