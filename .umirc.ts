import { defineConfig } from 'dumi';
import { resolve } from 'path';

export default defineConfig({
  title: 'ife-common',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  alias: {
    '@ife/pro-components': resolve(
      __dirname,
      './packages/pro-components/src/index.ts',
    ),
    '@ife/hooks': resolve(__dirname, './packages/hooks/src/index.ts'),
  },
  resolve: {
    includes: [
      'docs',
      'packages/hooks/src',
      'packages/pro-components/src',
    ],
  },
  locales: [['zh-CN', '中文']],
  navs: {
    'en-US': [
      null,
      {
        title: 'GitLab',
        path: '',
      },
    ],
    'zh-CN': [
      null,
      {
        title: 'GitLab',
        path: '',
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
