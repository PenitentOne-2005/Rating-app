import type { SkillsProps } from './interface';
import { Htag } from '@/components';
import classes from './Skills.module.css';

const Skills = ({ skills }: SkillsProps) => {
  if (!skills || skills.length === 0) return null;

  return (
    <section className={classes.skillsSection} aria-labelledby="skills-title">
      <Htag tag="h2" id="skills-title" style={{ marginBottom: '10px' }}>
        Получаемые навыки
      </Htag>

      <ul className={classes.tagsContainer}>
        {skills.map((skill) => (
          <li key={skill} className={classes.tag}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
