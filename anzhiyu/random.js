var posts=["2025/03/29/Twikoo静态网站评论系统/","2025/03/19/Hexo基础使用介绍/","2025/03/18/hello-world/","2025/03/19/使用极空间部署MP/","2025/03/19/修复Github与Vercel数据不同步/","2025/03/29/使用极空间部署兰空图床/","2025/03/18/测试文章/","2025/04/02/好玩的PT常用词汇/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };