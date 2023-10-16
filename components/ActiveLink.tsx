'use client'
import { useRouter, usePathname } from 'next/navigation';

interface ActiveLinkProps {
  children: React.ReactNode;
  href: string;
  className: any;
}

function ActiveLink({ children, href, className }: ActiveLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname === href;

  const style: React.CSSProperties = {
    display:'flex',
    justifyContent: 'center',
    transition: '0.3s ease-in-out',
    gap: '10px',
    background: isActive ? 'yellow': 'initial',
    padding: '8px',
    width: '110px',
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style} className={className}>
      {isActive && <p className='transition ease-in-out duration-300'>•</p>} {children}
    </a>
  );
}

export default ActiveLink;
