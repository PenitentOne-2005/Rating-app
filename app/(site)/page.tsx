import Link from 'next/link';
import { Button, Htag, Tag, TagP } from '@/components';
import classes from './page.module.css';

const Home = () => {
  return (
    <main className={classes.container}>
      <header className={classes.mainInfo}>
        <Htag tag="h1">Выбирайте лучшие курсы для развития вашей карьеры</Htag>

        <TagP size="large">
          OWL top — это независимый агрегатор образовательных программ. Мы
          собираем актуальные курсы по программированию, дизайну и аналитике,
          анализируем реальные отзывы пользователей и помогаем найти идеальное
          обучение по цене и сложности.
        </TagP>

        <Button appearance="primary" arrow="right" href="/courses">
          Перейти в каталог курсов
        </Button>
      </header>

      <hr
        aria-hidden="true"
        style={{
          border: 'none',
          borderTop: '1px solid #EAEAEA',
          marginBottom: '40px',
        }}
      />

      <section className={classes.popular} aria-labelledby="popular-title">
        <Htag tag="h2" id="popular-title">
          Популярные направления:
        </Htag>

        <ul className={classes.tags}>
          <li>
            <Link href="/courses/typescript">
              <Tag size="medium" color="primary">
                TypeScript
              </Tag>
            </Link>
          </li>
          <li>
            <Link href="/courses/react">
              <Tag size="medium" color="primary">
                React JS
              </Tag>
            </Link>
          </li>
          <li>
            <Link href="/books">
              <Tag size="medium" color="primary">
                Книги
              </Tag>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
