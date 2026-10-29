'use client';

import ReactMarkdown from 'react-markdown';
import type { CardPageConfig } from '@/types/page';

interface TeachingListProps {
    config: CardPageConfig;
}

export default function TeachingList({ config }: TeachingListProps) {
    return (
        <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">{config.title}</h2>
            {config.description && (
                <p className="text-sm text-neutral-600 dark:text-neutral-500 mb-5">
                    {config.description}
                </p>
            )}
            <ul role="list" className="space-y-6">
                {config.items.map((item) => (
                    <li key={`${item.title}-${item.date}`}>
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                            <h3 className="font-semibold text-primary leading-snug">{item.title}</h3>
                            {item.date && (
                                <span className="shrink-0 text-sm text-neutral-500">{item.date}</span>
                            )}
                        </div>
                        {item.subtitle && (
                            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-500">{item.subtitle}</p>
                        )}
                        {item.content && (
                            <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-neutral-600 dark:text-neutral-500 leading-relaxed">
                                <ReactMarkdown
                                    components={{
                                        p: ({ children }) => <p>{children}</p>,
                                        a: ({ href, children }) => (
                                            <a
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-medium text-accent underline underline-offset-4 hover:text-accent-dark"
                                            >
                                                {children}
                                            </a>
                                        ),
                                    }}
                                >
                                    {item.content}
                                </ReactMarkdown>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
