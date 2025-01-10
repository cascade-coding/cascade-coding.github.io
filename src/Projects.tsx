import { useParams } from "react-router-dom";
import { projects } from "./lib/context";
import slugify from "slugify";
import Nav from "./components/Nav";

const Projects = () => {
  const { name } = useParams();

  const project = projects.find(
    (p) => slugify(p.name, { lower: true }) === name
  );

  if (!project) return <>Project Not found</>;

  return (
    <div className="h-dvh">
      <Nav />
      <div className="pt-16">
        <project.component />
      </div>
    </div>
  );
};

export default Projects;
