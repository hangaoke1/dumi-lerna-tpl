# ife-common 基于 dumi + father-build + lerna 多包管理模版

## feature

1. ✅ 多包管理
2. ✅ 单元测试
3. ✅ 文档阅读
4. ✅ eslint 规范
5. ✅ cjs + esm 编译
6. ✅ typescript

## 快速开始

依赖下载

```bash
$ npm i
$ npm run bootstrap
```

开发环境

```bash
$ npm start
```

文档打包

```bash
$ npm run docs:build
```

项目打包

```bash
$ npm run build
```

## 项目规范

- packages

  - hooks ---> @ife/hooks 通用 hooks，不涉及业务逻辑
  - pro-components ---> @ife/pro-components 通用 ppfish 增强组件，不涉及业务逻辑
    - Table
    - Form
    - ......

## lerna 的使用

为所有项目安装依赖，类似于 npm/yarn i

```bash
lerna bootstrap
```

使用 lerna 初始化项目

```bash
lerna init # 固定模式(Fixed mode)默认为固定模式，packages下的所有包共用一个版本号(version)
lerna init --independent # 独立模式(Independent mode)，每一个包有一个独立的版本号
```

为 packages 文件夹下的 package 安装依赖

```bash
lerna add <package>[@version] [--dev] # 命令签名

# 例如
lerna add module-1 --scope=module-2 # 将 module-1 安装到 module-2
lerna add module-1 --scope=module-2 --dev # 将 module-1 安装到 module-2 的 devDependencies 下
lerna add module-1 # 将 module-1 安装到除 module-1 以外的所有模块
lerna add babel-core # 将 babel-core 安装到所有模块
```

卸载依赖

```bash
lerna exec -- <command> [..args] # 在所有包中运行该命令

# 例如
lerna exec --scope=npm-list  yarn remove listr # 将 npm-list 包下的 listr 卸载
lerna exec -- yarn remove listr # 将所有包下的 listr 卸载
```

显示 packages 下的各个 package 的 version

```bash
lerna ls
```

清理 node_modules

```bash
lerna clean
```

lerna run

```
lerna run <script> -- [..args] # 在所有包下运行指定

# 例如
lerna run test # 运行所有包的 test 命令
lerna run build # 运行所有包的 build 命令
lerna run --parallel watch # 观看所有包并在更改时发报，流式处理前缀输出

lerna run --scope my-component test # 运行 my-component 模块下的 test
```

## 单元测试

### 测试框架

- @umijs/test，测试脚本，内置 jest 测试框架
- @testing-library/react，React 组件测试工具
- puppeteer，Headless 浏览器工具，用于 E2E 测试。

### 测试约定

目录规范

```
.
├── package.json
├── packages
│   ├── bs-components
│   │   └── src
│   │       └── YsHeader
│   │           └── __test__
│   │               └── index.test.tsx # 插件测试用例
├── tsconfig.json
├── .fatherrc.ts
└── yarn.lock
```

hooks 测试示例

```tsx
import { renderHook, act } from '@testing-library/react-hooks';
import useTest from '../index';

const setUp = (defaultValue?: any) => renderHook(() => useTest(defaultValue));

describe('useTest', () => {
  it('should be defined', () => {
    expect(useTest).toBeDefined();
  });

  it('test on methods', async () => {
    const { result } = setUp(false);
    expect(result.current[0]).toBeFalsy();
    act(() => {
      result.current[1](true);
    });
    expect(result.current[0]).toBeTruthy();
  });
});
```

组件测试示例

```tsx
import * as React from 'react';
import { render } from '@testing-library/react';
import TreeSelect from '../index';

test('TreeSelect test', () => {
  const wrapper = render(<TreeSelect />);
  const el = wrapper.queryByText('pro-components TreeSelect');
  expect(el).toBeTruthy();
});
```

#### 单元测试资料

1. [testing-library](https://testing-library.com/docs/)
2. [jests](https://www.jestjs.cn/docs/getting-started)
3. [@testing-library/react](https://www.npmjs.com/package/@testing-library/react)
4. [@testing-library/react-hooks](https://www.npmjs.com/package/@testing-library/react-hooks)
5. [学习 Jest——语法篇](https://www.jianshu.com/p/e54218d67628)
