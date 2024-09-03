# LiteLoaderQQNT-KeywordReply
关键词回复

LiteLoaderQQNT本体：[LiteLoaderQQNT](https://github.com/LiteLoaderQQNT/LiteLoaderQQNT)

本项目是临时工具，将不会进行维护

# 安装方法

本插件依赖于 [LiteLoaderQQNT-Euphony](https://github.com/xtaw/LiteLoaderQQNT-Euphony)

1. 按照对应说明安装 [LiteLoaderQQNT](https://github.com/LiteLoaderQQNT/LiteLoaderQQNT)
2. 按照对应说明安装 [LiteLoaderQQNT-Euphony](https://github.com/xtaw/LiteLoaderQQNT-Euphony)
3. 在 `LiteLoaderQQNT/plugins/` 下创建一个目录，将本项目所有内容放入该目录（clone 与下载 release 都可）

完整路径应该像下面这样

```text
LiteLoaderQQNT/
├── 其他文件...
├── plugins/
│   ├── LiteLoaderQQNT-KeywordReply/
│   │   ├── LiteLoaderQQNT-Euphony/
│   │   ├── src/
│   │   ├── LICENSE
│   │   ├── manifest.json
│   │   └── NOTICE
│   ├── LiteLoaderQQNT-Euphony/
│   └── 其他插件...
└── 其他文件...
```

# 配置方法
需要一定 js 与正则表达式基础

编辑 [renderer.js](src/renderer.js) 中的 `REPLY_RULES` 变量

`REPLY_RULES` 是一个 map<pattern, list<string>> 类型，其中键是正则表达式，值是回复消息（每一个条目是一条消息，会批量发送）

正则表达式为模糊匹配，如需精准匹配请加上`^`和`$`