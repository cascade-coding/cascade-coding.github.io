import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-stone-900/30 py-6 px-6 rounded-md">
      <img
        className="w-24 h-24 object-cover rounded-full"
        src="/images/profile.jpg"
        alt="my-photo"
      />
      <p className="mt-6 leading-loose tracking-wide text-lg max-w-4xl">
        I’m Fahim, a web apps developer focused on delivering streamlined,
        high-performance solutions tailored to client needs. I specialize in
        crafting web apps, APIs, and frontend-to-backend systems that aren’t
        just optimized for speed and scalability but designed to enhance user
        experiences and drive results. Whether you’re looking to build from
        scratch or improve an existing platform, I’m here to create solutions
        ready to perform in today’s fast-paced digital landscape.
      </p>
      <p className="mt-6 text-blue-500 flex items-center gap-x-2">
        <Mail /> fahim.real.x@gmail.com
      </p>

      <div className="flex items-center gap-x-4 mt-4">
        <Link to="#">
          <span className="text-purple-500 font-bold">Linkedin</span>
        </Link>
        <Link to="https://github.com/cascade-coding" target="_blank">
          <span className="text-purple-500 font-bold">Github</span>
        </Link>
      </div>
    </div>
  );
};

export default About;
