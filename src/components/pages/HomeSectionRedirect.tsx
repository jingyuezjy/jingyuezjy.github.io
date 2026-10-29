'use client';

import { useEffect } from 'react';

export default function HomeSectionRedirect({ target, title }: { target: string; title: string }) {
  const href = `/#${target}`;

  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <a href={href} className="text-accent font-medium underline underline-offset-4">
        {title} →
      </a>
    </div>
  );
}
