import { SITE } from '../../data/site.js';

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={className}>
      <li><a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
      <li><a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
    </ul>
  );
}
