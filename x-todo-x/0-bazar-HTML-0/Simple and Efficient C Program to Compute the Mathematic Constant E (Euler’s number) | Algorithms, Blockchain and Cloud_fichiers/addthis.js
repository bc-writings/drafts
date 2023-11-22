function sharedropdown_open(link,rss,dom){if(link){var title=encodeURIComponent(document.title);var url=encodeURIComponent(window.location);var x='';if(link=='milnk'){x='http://milnk.com/link/submit?u='+(url)+'&t='+(title);}
else if(link=='wayback'){x='http://web.archive.org/save/'+(url);}else if(link=='feedly'){x='https://feedly.com/i/subscription/feed/https://helloacm.com/feed';}else if(link=='qr'){x='https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl='+url;document.getElementById(dom).innerHTML='<img src="'+x+'">';return;}else if(link=='drawer'){x='http://dig.chouti.com/digg.action?newsURL='+(url)+'&title='+(title);}else if(link=='hacker'){x='https://news.ycombinator.com/submitlink?u='+(url)+'&t='+(title);}else if(link=='ino'){x='http://www.inoreader.com/feed/'+(url);}else if(link=='google'){x='https://plus.google.com/share?url='+(url);}else if(link=='twitter'){x='https://twitter.com/intent/tweet?url='+(url)+'&text='+(title);}else if(link=='facebook'){x='https://www.facebook.com/sharer/sharer.php?u='+(url)+'&t='+(title);}else if(link=='sina'){x='http://v.t.sina.com.cn/share/share.php?url='+(url)+'&title='+(title);}else if(link=='douban'){x='http://www.douban.com/share/service?href='+(url)+'&name='+(title);}else if(link=='evernote'){x='https://www.evernote.com/clip.action?url='+(url)+'&title='+(title);}else if(link=='linkedin'){x='https://www.linkedin.com/shareArticle?mini=true&url='+(url)+'&title='+(title);}else if(link=='tumblr'){x='http://www.tumblr.com/share/link?url='+(url)+'&name='+(title)+'&caption='+(title)+'&title='+(title);}else if(link=='rot47'){x='https://rot47.net/_url/add.php?p='+(url);}else if(link=='rss'){if((rss!=null)&&(rss.length!==0)){x=rss;}}
if(x){window.open(x);}}}
function sharedropdown(dom,dom2,rss,english){var s='';if(english){s='<select class="form-control" onchange="sharedropdown_open(this.value,\''+rss+'\',\''+dom2+'\')"><option selected="">Share This Article To...</option>';if((rss!=null)&&(rss.length!==0)){s+='<option value="rss">RSS Feed</option>';}
s+='<option value="qr">QR Code</option>'+
+'<option value="wayback">Wayback Machine</option>'
+'<option value="hacker">Hacker News</option>'
+'<option value="ino">Inoreader</option>'
+'<option value="linkedin">Linkedin</option>'
+'<option value="google">Google Plus</option>'
+'<option value="twitter">Twitter</option>'
+'<option value="facebook">Facebook</option>'
+'<option value="tumblr">Tumblr</option>'
+'<option value="sina">Sina</option>'
+'<option value="douban">Douban</option>'
+'<option value="evernote">Evernote</option>'
+'<option value="milnk">Milnk</option>'
+'<option value="drawer">Chouti</option>'
+'<option value="rot47">Make URL Shorter</option>'
+'</select>';}else{s='<select class="form-control" onchange="sharedropdown_open(this.value,\''+rss+'\',\''+dom2+'\')"><option selected="">求扩散...</option>';if((rss!=null)&&(rss.length!==0)){s+='<option value="rss">RSS 定阅</option>';}
s+='<option value="qr">QR 二维码 (微信)</option>'+
+'<option value="wayback">Wayback Machine</option>'
+'<option value="hacker">Hacker News</option>'
+'<option value="ino">Inoreader</option>'
+'<option value="linkedin">邻英</option>'
+'<option value="google">谷哥</option>'
+'<option value="twitter">推特</option>'
+'<option value="facebook">Facebook</option>'
+'<option value="tumblr">Tumblr</option>'
+'<option value="sina">新浪微博</option>'
+'<option value="douban">豆瓣</option>'
+'<option value="evernote">Evernote</option>'
+'<option value="milnk">觅链</option>'
+'<option value="drawer">抽屉</option>'
+'<option value="rot47">短地址</option>'
+'</select>';}
document.getElementById(dom).innerHTML=s;}
var sharedropdown_rss=sharedropdown_rss||null;var sharedropdown_dom=sharedropdown_dom||"sharedropdown";var sharedropdown_dom_qr=sharedropdown_dom_qr||"sharedropdown_qr";if(sharedropdown_english===undefined){sharedropdown_english=true;}
sharedropdown(sharedropdown_dom,sharedropdown_dom_qr,sharedropdown_rss,sharedropdown_english);