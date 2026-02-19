import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span';
}

const GlitchText = ({ children, className = '', as: Component = 'h1' }: Props) => {
  return (
    <Component className={`glitch ${className}`} data-text={children}>
      {children}
    </Component>
  );
};

export default GlitchText;