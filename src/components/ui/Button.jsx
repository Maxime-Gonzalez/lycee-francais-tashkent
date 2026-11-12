import { Link } from 'react-router-dom';
import './Button.css';

/** variant: primary (blue) | accent (red) | ghost (outlined) | light (on dark backgrounds) */
export default function Button({ to, href, variant = 'primary', children, ...rest }) {
  const className = `btn btn--${variant}`;
  if (to) return <Link className={className} to={to} {...rest}>{children}</Link>;
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
