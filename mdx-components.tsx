import type { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  h2: (props) => <h2 className="mt-10 font-display text-3xl font-semibold tracking-tight" {...props} />,
  p: (props) => <p className="leading-8 text-muted" {...props} />,
  ul: (props) => <ul className="space-y-3" {...props} />,
  li: (props) => <li className="leading-7 text-muted" {...props} />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  pre: (props) => <pre className="overflow-x-auto rounded-2xl" {...props} />,
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded-2xl" loading="lazy" {...props} alt={props.alt ?? ""} />
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components
  };
}
