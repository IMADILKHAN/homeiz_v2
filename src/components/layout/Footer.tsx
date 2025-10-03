import Link from 'next/link';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} HOMIZ Media. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
             <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="https://www.instagram.com/homiz.in/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=9156260436" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.06 21.94L7.31 20.55C8.75 21.33 10.35 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2M12.04 20.15C10.51 20.15 9.01 19.68 7.76 18.8L7.31 18.53L4.92 19.22L5.64 16.91L5.35 16.44C4.5 15.08 4.02 13.53 4.02 11.91C4.02 7.55 7.63 3.94 12.04 3.94C14.2 3.94 16.21 4.79 17.76 6.34C19.31 7.89 20.16 9.9 20.16 11.91C20.16 16.27 16.45 20.15 12.04 20.15M17.43 14.41C17.16 14.28 15.96 13.69 15.71 13.59C15.47 13.5 15.28 13.5 15.09 13.77C14.91 14.04 14.31 14.73 14.12 14.92C13.93 15.11 13.74 15.15 13.47 15.02C13.2 14.88 12.04 14.49 10.73 13.25C9.71 12.29 9.02 11.12 8.87 10.85C8.73 10.58 8.86 10.45 9 10.31C9.13 10.18 9.29 9.99 9.46 9.82C9.63 9.65 9.71 9.53 9.85 9.26C9.99 8.99 9.9 8.76 9.81 8.57C9.72 8.38 9.17 7.08 8.92 6.51C8.68 5.94 8.43 6.01 8.24 6.01C8.04 6.01 7.85 5.99 7.66 5.99C7.47 5.99 7.18 6.07 6.94 6.34C6.7 6.61 6.13 7.15 6.13 8.3C6.13 9.45 6.98 10.54 7.12 10.73C7.26 10.92 9.12 13.75 11.92 14.97C12.68 15.31 13.28 15.49 13.78 15.63C14.44 15.81 14.99 15.77 15.42 15.72C15.91 15.66 17.11 15.03 17.35 14.46C17.59 13.89 17.59 13.41 17.5 13.28C17.41 13.14 17.27 13.04 17.43 14.41Z" />
                </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
