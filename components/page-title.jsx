const PageTitle = ({ children }) => {
  return (
    <div className="md:text-5xl text-3xl flex justify-center my-1 font-bold">
      <div className="mb-3 pb-2 border-b border-deepAqua dark:border-aqua px-5 text-deepAqua dark:text-aqua relative">
        <div className="h-3 w-3 bg-deepAqua dark:bg-aqua rounded-full absolute right-0 -bottom-[6px]" />
        <div className="h-3 w-3 bg-deepAqua dark:bg-aqua rounded-full absolute left-0 -bottom-[6px]" />
        <h2 className="text-nowrap text-deepAqua dark:text-aqua">{children}</h2>
      </div>
    </div>
  );
};

export default PageTitle;
