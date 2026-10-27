'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface OngoingProjectsProps {
    content: string;
    title?: string;
}

export default function OngoingProjects({ content, title }: OngoingProjectsProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            {title && <h2 className="text-2xl font-serif font-bold text-primary mb-4">{title}</h2>}
            <div>
                <ReactMarkdown
                    components={{
                        h3: ({ children }) => (
                            <h3 className="font-semibold text-primary mt-6 first:mt-0 mb-2 leading-tight">
                                {children}
                            </h3>
                        ),
                        p: ({ children }) => (
                            <p className="text-sm text-neutral-600 dark:text-neutral-500 leading-relaxed mb-2 last:mb-0">
                                {children}
                            </p>
                        ),
                        a: ({ ...props }) => (
                            <a
                                {...props}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-accent underline underline-offset-4 hover:text-accent-dark"
                            />
                        ),
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </motion.section>
    );
}
