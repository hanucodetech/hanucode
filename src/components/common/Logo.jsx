import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ className = '' }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`} aria-label="HanuCode - Home">
      <Image
        src="/images/brand/hanucode-logo.svg"
        alt="HanuCode logo"
        width={190}
        height={60}
        priority
        className="h-12 w-auto"
      />
    </Link>
  );
}
