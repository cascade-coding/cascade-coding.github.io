import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-stone-950 py-6 px-6 rounded-md">
      <img
        className="w-24 h-24 object-cover rounded-full"
        src="https://plus.unsplash.com/premium_photo-1689606093808-3cb4393248d2?q=80&w=120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
