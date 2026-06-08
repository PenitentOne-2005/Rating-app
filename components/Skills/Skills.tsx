import type { SkillsProps } from './interface';
import classes from './Skills.module.css';

const Skills = ({ skills }: SkillsProps) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div className={classes.skillsSection}>
      <h2 className={classes.sectionTitle}>Получаемые навыки</h2>

      <div className={classes.tagsContainer}>
        {skills.map((skill) => (
          <span key={skill} className={classes.tag}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
