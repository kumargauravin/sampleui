import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain } from '@teambit/react';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactWithMuiAspect } from './react-with-mui.aspect';
// import { previewConfigTransformer, devServerConfigTransformer } from './webpack/webpack-transformers';

export class ReactWithMuiMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const templatesReactEnv = envs.compose(react.reactEnv, [
      /**
       * override dependencies here
       */
      react.overrideDependencies({
        dependencies: {
          '@mui/material': '-',
          react: '-',
          'react-dom': '-',
          '@testing-library/react': '-',
          '@π': '-',
        },
        devDependencies: {
          '@mui/material': '-',
          react: '-',
          'react-dom': '-',
          '@testing-library/react': '-',
          '@kumargauravin/sampleui.mui.theme.theme-provider': '-',
        },
        peerDependencies: {
          '@mui/material': {
            version: '5.2.1',
            resolveFromEnv: true,
          },
          '@testing-library/react': {
            version: '^14.0.0',
            resolveFromEnv: true,
          },
          react: {
            version: '^18.2.0',
            resolveFromEnv: true,
          },
          'react-dom': {
            version: '^18.2.0',
            resolveFromEnv: true,
          },
          '@kumargauravin/sampleui.mui.theme.theme-provider': {
            version: 'latest',
            resolveFromEnv: true,
          },
        },
      }),
      /**
       * override the ESLint default config here then check your files for lint errors
       * @example
       * bit lint
       * bit lint --fix
       */
      react.useEslint({
        transformers: [
          (config) => {
            config.setRule('no-console', ['error']);
            return config;
          },
        ],
      }),

      /**
       * override the Prettier default config here the check your formatting
       * @example
       * bit format --check
       * bit format
       */
      react.usePrettier({
        transformers: [
          (config) => {
            config.setKey('tabWidth', 2);
            return config;
          },
        ],
      }),
    ]);
    envs.registerEnv(templatesReactEnv);
    return new ReactWithMuiMain();
  }
}

ReactWithMuiAspect.addRuntime(ReactWithMuiMain);
