/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  /**
     * 内容JSON
     */
  var demoContent = [
    {
      demo_link: 'https://github.com/lichangke',
      img_link: 'https://github.com/lichangke/lichangke.github.io/blob/master/img/GitHub.jpg?raw=true',
      code_link: 'https://github.com/lichangke',
      title: 'GitHub Home',
      core_tech: 'GitHub',
      description: '我的GitHub<a href ="https://github.com/lichangke?tab=repositories/">这里</a>。'
    },
	{
      demo_link: 'https://www.zhihu.com/people/lichangke/',
      img_link: 'https://github.com/lichangke/lichangke.github.io/blob/master/img/zhihu.jpg?raw=true',
      code_link: 'https://www.zhihu.com/people/lichangke/',
      title: '知乎 Home',
      core_tech: '知乎',
      description: '我的知乎<a href ="https://www.zhihu.com/people/lichangke/">这里</a>。'
    },
	{
      demo_link: 'https://www.jianshu.com/u/3e95c7555dc7',
      img_link: 'https://github.com/lichangke/lichangke.github.io/blob/master/img/jianshu.jpg?raw=true',
      code_link: 'https://www.jianshu.com/u/3e95c7555dc7',
      title: '简书 Home',
      core_tech: '简书',
      description: '我的简书<a href ="https://www.jianshu.com/u/3e95c7555dc7">这里</a>。'
    },
	{
      demo_link: 'https://medium.com/',
      img_link: 'https://github.com/lichangke/lichangke.github.io/blob/master/img/medium.jpg?raw=true',
      code_link: 'https://medium.com/',
      title: 'Medium',
      core_tech: 'Read',
      description: 'a place to read, write, and interact with the stories that matter most to you'
    }
  ];
  contentInit(demoContent) //内容初始化
  waitImgsLoad() //等待图片加载，并执行布局初始化
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
  // var htmlArr = [];
  // for (var i = 0; i < content.length; i++) {
  //     htmlArr.push('<div class="grid-item">')
  //     htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
  //     htmlArr.push('<img src="'+content[i].img_link+'">')
  //     htmlArr.push('</a>')
  //     htmlArr.push('<h3 class="demo-title">')
  //     htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
  //     htmlArr.push('</h3>')
  //     htmlArr.push('<p>主要技术：'+content[i].core_tech+'</p>')
  //     htmlArr.push('<p>'+content[i].description)
  //     htmlArr.push('<a href="'+content[i].code_link+'">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>')
  //     htmlArr.push('</p>')
  //     htmlArr.push('</div>')
  // }
  // var htmlStr = htmlArr.join('')
  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
    htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <p>主要技术：' + content[i].core_tech + '</p>' + '   <p>' + content[i].description + '</p>' + '</div>'
  }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  //console.log(imgs)
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      //console.log('complete');
      count++
    } else {
      imgs[i].onload = function() {
        // alert('onload')
        count++
        //console.log('onload' + count)
        if (count == totalImgs) {
          //console.log('onload---bbbbbbbb')
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    //console.log('---bbbbbbbb')
    initGrid()
  }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    isFitWidth: true,
    gutter: 20
  })
}
