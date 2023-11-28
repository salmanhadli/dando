import classes from './ProjectCard.module.css';

export default function ProjectCard({ title }) {
  return (
    <div className={classes.card}>
      <small className={classes.title}>{title}</small>
    </div>
  );
}
