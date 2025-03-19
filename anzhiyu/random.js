var posts=["2025/03/18/hello-world/","2025/03/19/Hexo常用命令/","2025/03/19/使用极空间部署MP/","2025/03/18/测试文章/","2025/03/19/修复不同步/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };