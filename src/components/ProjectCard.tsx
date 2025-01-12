import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SquareArrowOutUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import slugify from "slugify";

interface ProjectCardProps {
  name: string;
  live?: string;
  description: string;
  featureImages: { large: string; medium: string }[];
  videoId?: string;
}

const ProjectCard = ({
  name,
  live = "",
  description,
  featureImages,
  videoId,
}: ProjectCardProps) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const navigate = useNavigate();

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-6 lg:gap-12">
      <div className="text-center lg:text-left pt-4 lg:pt-0 lg:max-w-md flex-1">
        <Link to={live} target={live !== "" ? "_blank" : "_self"}>
          <h4 className="text-2xl font-semibold flex items-center justify-center lg:justify-start gap-x-4 cursor-pointer">
            <span>{name}</span>
            {live && <SquareArrowOutUpRight />}
          </h4>
        </Link>
        <p className="text-lg mt-3 leading-relaxed px-8 sm:px-0">
          {description}
        </p>
        <button
          className="bg-green-950 px-4 py-2 rounded-md mt-5 hover:bg-green-900 transition-all"
          onClick={() => {
            const link = slugify(name, { lower: true });
            navigate(`projects/${link}`);
            window.scrollTo(0, 0);
          }}
        >
          View Details
        </button>
      </div>

      <div className="flex justify-center lg:justify-center mt-6 lg:mt-0 w-full flex-1">
        {videoId && videoId.trim() !== "" ? (
          <>
            <iframe
              className="w-full h-[400px] md:w-[90%] md:h-[480px] 2xl:h-[540px]"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </>
        ) : (
          <>
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {featureImages.map((featureImage, idx) => (
                  <CarouselItem key={idx}>
                    <div className="p-1">
                      <Card className="!bg-transparent border-none">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <picture>
                            <source
                              media="(min-width: 1024px)"
                              srcSet={`/images/${featureImage.large}`}
                              className="w-full max-w-[600px] rounded-lg glow-effect"
                            />
                            <img
                              src={`/images/${featureImage.medium}`}
                              alt="Responsive content"
                              className="w-full max-w-[600px] rounded-lg glow-effect"
                            />
                          </picture>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Add the navigation arrows here */}
              {/* <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2 bg-black/40 text-gray-400 rounded-full p-2 hover:bg-black/60 border-green-950" />
              <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2 bg-black/40 text-gray-400 rounded-full p-2 hover:bg-black/60 border-green-950" /> */}
            </Carousel>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
