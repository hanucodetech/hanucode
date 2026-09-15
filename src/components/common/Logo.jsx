import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ className = '' }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`} aria-label="HanuCode - Home">
      <Image
        src="/images/brand/hanucode-logo.svg"
        alt="HanuCode logo"
        width={160}
        height={32}
        priority
        className="h-8 w-auto"
      />
    </Link>
  );
}
