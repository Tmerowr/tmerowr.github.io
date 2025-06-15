var posts=["2025/03/19/Hexo基础使用介绍/","2025/06/02/MP订阅规则/","2025/04/23/MP进阶设置/","2025/05/06/Markdown基础语法/","2025/05/06/Markdown进阶语法/","2025/04/20/Studio本地部署蒸馏化模型/","2025/03/29/Twikoo静态网站评论系统/","2025/05/27/comfyui文生图节点对比/","2025/03/18/hello-world/","2025/05/31/obsidian同步方案及插件/","2025/03/29/使用极空间部署兰空图床/","2025/03/19/使用极空间部署MP/","2025/03/19/修复Github与Vercel数据不同步/","2025/04/23/初识ComfyUI/","2025/04/23/基础节点与插件/","2025/04/02/好玩的PT常用词汇/","2025/04/23/文生图工作流相关术语概念/","2025/03/18/测试文章/","2025/05/23/苔藓/","2025/05/08/记-第二曲线创新/","2025/05/14/记-长安的荔枝/","2025/06/04/世界三大电影运动/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"RMBG-2.0","link":"https://huggingface.co/spaces/briaai/BRIA-RMBG-2.0","avatar":"https://cdn-avatars.huggingface.co/v1/production/uploads/65659985cfbe8a857070d950/1HTn-HmGDwK53SSJ5dEYt.png","descr":"一键抠图，快速移除背景","recommend":true},{"name":"Al Art Generator","link":"https://www.ai-art-generator.net/playground","avatar":"https://www.ai-art-generator.net/logo.png","descr":"AI艺术,免费文生图","recommend":true},{"name":"Civitai","link":"https://civitai.com/","avatar":"https://registry.npmmirror.com/@lobehub/icons-static-png/1.45.0/files/dark/civitai-color.png","descr":"ComfyUI大模型","recommend":true},{"name":"Photopea","link":"https://www.photopea.com/","avatar":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Photopea_logo.svg/1200px-Photopea_logo.svg.png","descr":"免费在线PS,轻松在线修图","recommend":true},{"name":"傳統藝術色系","link":"https://nipponcolors.com/#shinbashi","avatar":"https://raw.githubusercontent.com/Tmerowr/pic/main/img/中国色.webp","descr":"傳統色系","recommend":true},{"name":"Fuun.fun","link":"https://fuun.fun/","avatar":"https://upload.wikimedia.org/wikipedia/commons/d/d0/DotFun_domain_logo.svg","descr":"奇趣网站","recommend":true},{"name":"Aha!Mega","link":"https://ahamega.com/?lang=cn","avatar":"https://download.logo.wine/logo/Aha!_(company)/Aha!_(company)-Logo.wine.png","descr":"在线解析下载及其他","recommend":true},{"name":"City Roads","link":"https://anvaka.github.io/city-roads/","avatar":"https://cityroads.org/wp-content/uploads/logo-city-roads.png","descr":"呈现城市内的每一条道路","recommend":true},{"name":"emojimix","link":"https://tikolu.net/emojimix/%F0%9F%90%A2+%F0%9F%90%B1","avatar":"https://www.gstatic.com/android/keyboard/emojikitchen/20201001/u1f614/u1f614_u1f614.png","descr":"混合表情","recommend":true},{"name":"渐变背景","link":"https://color.oulu.me/","avatar":"https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/02/Usign-Gradients-Featured-Image.jpg","descr":"免费的线性渐变网站","recommend":true},{"name":"Ilovepdf","link":"https://www.ilovepdf.com/zh-tw","avatar":"https://gw.alicdn.com/imgextra/i1/2206829797606/O1CN016tlGfv263bMtTfO1J_!!2206829797606.jpg_Q75.jpg_.webp","descr":"PDF愛好者的在線工具","recommend":true},{"name":"Peazip","link":"https://peazip.github.io/","avatar":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Peazip_ico.svg/1200px-Peazip_ico.svg.png","descr":"轻松解压、免费无广","recommend":true},{"name":"Listary","link":"https://www.listary.com/","avatar":"https://cdn2.portableapps.com/ListaryPortable_128.png","descr":"革命性文件搜索工具","recommend":true},{"name":"PixPin","link":"https://pixpin.cn/","avatar":"https://pixpinwebsite.cdn.dfyun.com.cn/images/logo.png","descr":"随心截图, 随意贴图","recommend":true},{"name":"小旺","link":"https://www.xiaowang.com/","avatar":"https://www.xiaowang.com/assis/img/logo.png","descr":"带壳截图, 截图翻译","recommend":true},{"name":"ITELLYOU","link":"https://next.itellyou.cn/","avatar":"https://static.itellyou.cn/images/logo.png","descr":"提供可靠的原版软件","recommend":true},{"name":"HEU_KMS_Activator","link":"https://github.com/zbezj/HEU_KMS_Activator","avatar":"https://avatars.githubusercontent.com/u/52116327?v=4","descr":"激活，无须多言","recommend":true},{"name":"SpaceSniffer","link":"http://www.uderzo.it/main_products/space_sniffer/download.html","avatar":"https://www.fosshub.com/media/img/project/icons/5b869076f9ee5a5c3e97a0a5.png","descr":"磁盘空间嗅探器","recommend":true},{"name":"IconViewer","link":"https://www.botproductions.com/iconview/iconview.html","avatar":"https://plugins.jetbrains.com/files/13995/725138/icon/default.png","descr":"图标提取","recommend":true},{"name":"FileTypesMan","link":"https://www.nirsoft.net/utils/file_types_manager.html","avatar":"https://www.drwindows.de/news/wp-content/uploads/2009/04/file-types-man_pgb.png","descr":"修改应用程序图标","recommend":true},{"name":"字体","link":"https://www.fontowns.com/","avatar":"https://cdn-icons-png.freepik.com/512/3541/3541201.png","descr":"免费字体,免登录下载","recommend":true},{"name":"小霸王","link":"https://www.yikm.net/","avatar":"https://www.yikm.net/logo.png","descr":"小霸王，其乐无穷","recommend":true},{"name":"特猫肉兒","link":"https://www.imsoso.cn/","avatar":"https://raw.githubusercontent.com/Tmerowr/pic/main/img/头像.webp","descr":"无所追求，亦无所得；心如止水，波澜不惊。","recommend":true},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"SanBai","link":"https://sanbaiblog.cn/","avatar":"https://s21.ax1x.com/2025/01/05/pE9CfDU.jpg","descr":"克己慎独，守心明性","recommend":true},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://zhheo.com/img/avatar.jpg","descr":"将世间万物化作电子木鱼","recommend":true},{"name":"安知鱼","link":"https://docs.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };