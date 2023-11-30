import classes from './ProjectCard.module.css';

export default function ProjectCard(props) {
  const title = props.title;
  return (
    <div className={classes.card} {...props}>
      <small className={classes.title}>{title}</small>
    </div>
  );
}
