import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-10 bg-foreground/90 text-background/70 text-center">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Sidekick Air. All rights reserved.</p>
        <div className="mt-2 text-sm space-x-4">
          <Link href="#" className="hover:text-background transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-background transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-background transition-colors">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
