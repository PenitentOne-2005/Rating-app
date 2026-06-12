import type { AdvantagesProps } from './interface';
import { Htag, TagP } from '@/components';
import classes from './Advantages.module.css';

const Advantages = ({ advantages }: AdvantagesProps) => {
  if (!advantages || advantages.length === 0) return null;

  return (
    <section
      className={classes.advantagesSection}
      aria-labelledby="advantages-title"
    >
      <Htag tag="h2" id="advantages-title" style={{ marginBottom: '15px' }}>
        Преимущества
      </Htag>

      <ul className={classes.list}>
        {advantages.map((advantage, index) => {
          const isLast = index === advantages.length - 1;

          return (
            <li key={advantage.id} className={classes.item}>
              <div className={classes.leftColumn}>
                <div className={classes.iconWrapper}>
                  <svg
                    className={classes.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="#10B981"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {!isLast && <div className={classes.line} />}
              </div>

              <div className={classes.rightColumn}>
                <Htag tag="h3" style={{ marginBottom: '5px' }}>
                  {advantage.title}
                </Htag>
                <TagP size="medium">{advantage.description}</TagP>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Advantages;
