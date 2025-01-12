const Vanish = () => {
  return (
    <div className="pt-10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg lg:text-2xl leading-relaxed tracking-wide mt-4">
            Privacy is no longer a luxury—it’s a necessity. Vanish empowers you
            with a shield against surveillance, letting you communicate freely
            and securely. From sensitive information to casual chats, enjoy
            peace of mind knowing your conversations are truly yours.
          </p>

          <p className="text-lg leading-relaxed tracking-wide mt-8">
            <span className="font-semibold">
              Journalists & Whistleblowers:{" "}
            </span>
            Share sensitive information securely while protecting your sources.
            Say goodbye to the fear of surveillance or data breaches—your
            communications remain safe and confidential.
          </p>

          <p className="text-lg leading-relaxed tracking-wide mt-8">
            <span className="font-semibold">Business Professionals: </span>
            Exchange critical ideas, contracts, and documents with total peace
            of mind. Safeguard your intellectual property and sensitive business
            dealings, ensuring your information stays private and secure.
          </p>

          <p className="text-lg leading-relaxed tracking-wide mt-6">
            <span className="font-semibold">Everyday Users: </span>
            Keep your personal conversations and private data safe. Take control
            of your online privacy without sacrificing convenience, empowering
            you to communicate freely and securely in a digital world.
          </p>

          <p className="text-lg font-semibold leading-relaxed tracking-wide mt-8">
            This project was inspired by the growing wave of censorship and
            control over major social media platforms, chat apps, and news
            outlets. Elon Musk's move to purchase Twitter and champion free
            speech served as a catalyst, motivating me to create a solution that
            empowers people to communicate freely without fear of suppression or
            surveillance.
            <br />
            <br />
            Please watch the short overview video of Vanish below to gain a
            clear and comprehensive understanding of its features and purpose.
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
