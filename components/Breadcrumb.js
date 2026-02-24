'use client';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import useStore from '@/store/useStore';

const Breadcrumb = () => {
  const { selectedClass, selectedTopic } = useStore();
  const crumbs = [
    { label: 'Home', href: '/dashboard', show: true },
    { label: `Class ${selectedClass}`, href: '/classes', show: !!selectedClass },
    { label: selectedTopic, href: '/topics', show: !!selectedTopic },
  ].filter(c => c.show);

  if (crumbs.length <= 1) return null;

  return (
    <div className="bg-background/80 backdrop-blur-sm border-b px-4 py-2">
      <nav className="container mx-auto flex items-center gap-2 text-sm flex-wrap">
        {crumbs.map((crumb, i) => (
          <div key={crumb.label} className="flex items-center gap-2">
            {i === 0 && <Home className="h-4 w-4 text-purple-500" />}
            <Link href={crumb.href} className="text-muted-foreground hover:text-purple-600 transition-colors">
              {crumb.label}
            </Link>
            {i < crumbs.length - 1 && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
          </div>
        ))}
      </nav>
    </div>
  );
};
export default Breadcrumb;
