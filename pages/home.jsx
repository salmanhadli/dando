import ProjectCard from '../components/Layout/UI/ProjectCard';

export default function Home() {
  const dummy_projects = [
    {
      title: 'untitled 1'
    },
    {
      title: 'test project'
    },
    {
      title: 'test development'
    }
  ];
  return (
    <>
      <h3 className="text-2xl font-bold my-2">Welcome back, User Name</h3>
      <h4 className="text-lg mt-8 mb-4">Your In-progress projects:</h4>
      <div className="flex">
        {dummy_projects.map((project, i) => (
          <ProjectCard title={project.title} key={i} />
        ))}
      </div>
    </>
  );
}
