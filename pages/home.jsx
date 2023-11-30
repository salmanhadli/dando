import { useRouter } from 'next/navigation';
import ProjectCard from '../components/UI/ProjectCard';

export default function Home() {
  const router = useRouter();
  const dummy_projects = [
    {
      id: 1,
      title: 'untitled 1'
    },
    {
      id: 2,
      title: 'test project'
    },
    {
      id: 3,
      title: 'test development'
    }
  ];

  const openProject = ({ id }) => {
    router.push({
      pathname: '/project/[_id]',
      query: { _id: id }
    });
  };
  return (
    <section>
      <h3 className="text-2xl font-bold my-2">Welcome back, User Name</h3>
      <h4 className="text-lg mt-8 mb-4">Your In-progress projects:</h4>
      <div className="flex">
        {dummy_projects.map((project, i) => (
          <ProjectCard
            title={project.title}
            key={i}
            onClick={() => openProject(project)}
          />
        ))}
      </div>
    </section>
  );
}
