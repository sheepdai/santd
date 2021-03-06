# 更新日志

`ant-design-san` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

- 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
- 次版本号：带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。

---

## 0.2.5

`2020-4-30`

- 🐞 修复 `Pagination` 组件中点击样式问题
- 🐞 修复 `List` 组件中slot renderItem没有对外暴露index问题

## 0.2.3

`2020-01-09`

- 🐞 修复 `Collapse` 组件中on-change没有被触发的问题

## 0.2.2

`2020-01-08`

- 🐞 修复 `Table` 组件中dropdown位置不正确的问题
- 🐞 修复 `Icon` 组件 `@ant-design/icons` 升级后无法使用问题

## 0.2.1

`2019-12-20`

- 🐞 修复 `Button` 组件存在 `shape` 属性时slot无效问题
- 🐞 修复 `Button` 组件 `shape` 为 `round` 时样式无效问题
- 🐞 修复 `Dropdown` 组件中 `menu` 默认点击不关闭问题
- 🐞 修复 `Dropdown` 组件中 `menu` 位置不正确问题
- 🐞 使用 `@ant-design/icons` 替换本地 `icons`

## 0.2.0

`2019-12-10`

#### Features

对外第一个版本，提供 61 个常用[组件](https://github.com/ecomfe/santd/blob/master/src/index.js)
