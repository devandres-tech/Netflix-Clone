declare module '*.svg';

declare module '*.png' {
  const content: string;
  export default content;
}