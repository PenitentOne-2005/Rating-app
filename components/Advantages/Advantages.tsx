import type { AdvantagesProps } from './interface';
import classes from './Advantages.module.css';

const Advantages = ({ advantages }: AdvantagesProps) => {
  if (!advantages || advantages.length === 0) return null;

  return (
    <div className={classes.advantagesSection}>
      <h2 className={classes.sectionTitle}>Преимущества</h2>

      <div className={classes.list}>
        {advantages.map((advantage, index) => {
          const isLast = index === advantages.length - 1;

          return (
            <div key={advantage.id} className={classes.item}>
              <div className={classes.leftColumn}>
                <div className={classes.iconWrapper}>
                  <svg
                    className={classes.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                <h3 className={classes.title}>{advantage.title}</h3>
                <p className={classes.description}>{advantage.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Advantages;
