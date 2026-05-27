import { Button, Htag, Tag, TagP } from '@/components';

const Home = () => {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <TagP size="large">Large</TagP>
      <TagP size="medium">Medium</TagP>
      <TagP size="small">Small</TagP>
      <Tag size="small">Ghost</Tag>
      <Tag size="medium" color="red">
        m
      </Tag>
      <Tag size="medium" color="green">
        m
      </Tag>
      <Tag size="medium" color="grey">
        m
      </Tag>
      <Tag color="primary">m</Tag>
      <Tag color="green">m</Tag>
    </>
  );
};

export default Home;
