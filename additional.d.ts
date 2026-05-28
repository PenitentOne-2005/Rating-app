declare module '*.svg' {
  import React from 'react';

  const content: React.FunctionComponent<React.SVGProps<SVGAElement>>;

  export default content;
}
declare module '*.css';
declare module '*.module.css';