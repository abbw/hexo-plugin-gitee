> Hexo 整合 gitee 组件实现博客评论功能

### 🏠 我的博客

- [https://abbw.ml](https://abbw.ml)

## 效果

![gitalk-use-preview.png](gitalk-use-preview.png)

## 用法

### #1 更新 `_config.yml` 配置文件

在 `_config.yml` 配置文件中,配置 `gitee` 插件相关信息,详情见 [gitalk](https://github.com/gitalk/gitalk).

```yml
gitalk:
    clientID: GitHub Application Client ID
    clientSecret: GitHub Application Client Secret
    repo: GitHub repo
    owner: GitHub repo owner
```

> 注意: 前往 [gitalk](https://github.com/gitalk/gitalk) 申请开通 `gitalk` 功能后,**一定要替换成自己的相关配置**!

其中,主要配置参数含义如下: 

- **clientID** `String` 

  **必须**. GitHub Application Client ID.

- **clientSecret** `String` 

  **必须**. GitHub Application Client Secret.

- **repo** `String` 

  **必须**. GitHub repository.

- **owner** `String` 

  **必须**. GitHub repository 所有者，可以是个人或者组织。

- **admin** `Array` 

  **必须**. GitHub repository 的所有者和合作者 (对这个 repository 有写权限的用户)。

- **distractionFreeMode** `Boolean` 
  
  Default: false。

  类似Facebook评论框的全屏遮罩效果.

### #2 - 运行 hexo 相关命令

- 运行 `npm install` 命令安装到本地项目

```bash
$ npm install hexo-plugin-gitee --save
```

- 运行 `hexo generate` 命令构建本地项目或者 `hexo server` 启动本地服务.

```bash
$ hexo generate
```

或者

```bash
$ hexo server
```

> 注意: 本地测试时无法正常运行,必须是线上环境才会生效,且必须由管理员登录github进行初始化.

## 作者

👤 **笨蛋海绵**

- Github: [@abbw](https://github.com/abbw)
- Email: [1037886804@qq.com](mailto:1037886804@qq.com)

## 🤝 贡献

如果你想贡献自己的一份力量,欢迎提交 [`Issues`](https://github.com/abbw/hexo-plugin-giftee/issues) 或者 `Pull Request` 请求!

## 支持

如果本项目对你有所帮助,欢迎 ⭐️ [hexo-plugin-gitalk](https://github.com/abbw/hexo-plugin-gitee) 项目,感谢你的支持与认可!
