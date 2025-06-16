import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#1a1a1a',
            lineHeight: '1.6',
            fontSize: '1.25rem',
            a: {
              color: '#2C4F4F',
              textDecoration: 'underline',
              '&:hover': {
                textDecoration: 'none',
              },
            },
            'h1, h2, h3, h4': {
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h1: {
              fontSize: '2.5rem',
              marginBottom: '1rem',
            },
            h2: {
              fontSize: '2rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              fontSize: '1.5rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            code: {
              color: '#dd1144',
              backgroundColor: '#f3f4f6',
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
              fontSize: '0.875em',
            },
            pre: {
              backgroundColor: '#f8f9fa',
              padding: '1em',
              borderRadius: '0.5em',
              code: {
                backgroundColor: 'transparent',
                padding: '0',
                color: 'inherit',
              },
            },
            blockquote: {
              fontStyle: 'normal',
              fontWeight: '400',
              borderLeftWidth: '0.25em',
              borderLeftColor: '#e2e8f0',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              marginTop: '1.6em',
              marginBottom: '1.6em',
              paddingLeft: '1em',
            },
            img: {
              borderRadius: '0.5em',
            },
            strong: {
              fontWeight: '600',
            },
            ol: {
              paddingInlineStart: '1.325em',
            },
            ul: {
              paddingInlineStart: '1.325em',
            },
            'ul > li': {
              paddingLeft: '0.25em',
              marginBottom: '0.25em',
              marginTop: '0.25em',
              '&::before': {
                width: '0.5em',
                height: '0.5em',
                top: 'calc(0.875em - 0.125em)',
                left: '0.25em',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
}

export default config 
