/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/*.{html,ts}',
    './libs/**/*.{html,ts}',
    './libs/shared/ui/src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
      },
      spacing: {
        xxs: 'var(--sp-xxs)',
        xs: 'var(--sp-xs)',
        sm: 'var(--sp-sm)',
        md: 'var(--sp-md)',
        lg: 'var(--sp-lg)',
      },
      minHeight: {
        'screen-toolbar': 'calc(100vh - var(--toolbar-height))',
      },
    },
  },
  plugins: [],
};
