const Vanish = () => {
  return (
    <div className="pt-10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg lg:text-2xl leading-relaxed tracking-wide mt-4">
            Vanish is a powerful app that guides you to take meaningful actions
            every day, helping you turn your ambitions into reality. You can
            review your progress, see how well you've tackled tasks and built
            habits, creating a powerful drive to take even better action.
          </p>

          <p className="text-lg leading-relaxed tracking-wide mt-8">
            This project is something I built for myself to stay focused and
            consistently move forward on my own goals. Stride Journal makes it
            easy to keep track of progress and form good habits, helping users
            stay motivated to keep improving each day.
          </p>
        </div>
      </div>

      <div className="bg-stone-900 p-4 mt-20 py-10 flex flex-col gap-y-8 pb-36">
        <div className="w-full md:max-w-3xl mx-auto">
          <iframe
            className="w-full h-[400px] md:h-[480px] 2xl:h-[540px]"
            src={`https://www.youtube.com/embed/${"a103ei5esOY"}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Vanish;
