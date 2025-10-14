import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';
import angularEslint from '@angular-eslint/eslint-plugin';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.html'],
    "parser": "@angular-eslint/template-parser",
    plugins: {
      '@angular-eslint': angularEslint,
    },
    rules: {
      '@angular-eslint/prefer-standalone': 'off',
      '@angular-eslint/template/click-events-have-key-events': 'off',
      '@angular-eslint/template/interactive-supports-focus': 'off'
    },
  },
];
