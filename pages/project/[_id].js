export const getServerSideProps = async (context) => {
  const res = await fetch(
    `${process.env.HOSTED_API_URL}project/${context.params._id}`
  );
  const repo = await res.json();
  return { props: { repo } };
};

export default function Project({ repo }) {
  return <h1>My Project: {repo.name}</h1>;
}
