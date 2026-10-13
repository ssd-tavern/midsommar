/*! 仲夏夜 前端 © ssd（类脑 @buyssdcom）保留一切权利。禁止复制、转载、修改、改编、借鉴、模仿、反混淆与任何商业用途，许可条款见仓库 README。All rights reserved. */
document.head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https://testingcf.jsdelivr.net/npm/@fontsource/noto-serif-sc@5.3.1/400.css\">\n<link rel=\"stylesheet\" href=\"https://testingcf.jsdelivr.net/npm/@fontsource/noto-serif-sc@5.3.1/700.css\">");
document.body.insertAdjacentHTML("afterbegin", "<div id=\"bar\">\n<nav class=\"tabs\"><button data-p=\"sched\" class=\"on\">仲夏节日程</button><button data-p=\"map\">哈尔加地图</button><button data-p=\"girls\">女主立绘</button></nav>\n<section class=\"pg on\" id=\"sched\"></section>\n<section class=\"pg\" id=\"map\"><div class=\"frame wide\"><svg class='map' viewBox='0 0 1000 660' preserveAspectRatio='xMidYMid slice' xmlns='http://www.w3.org/2000/svg'><image href='https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/map-village.webp' width='1000' height='660'/><g class='loc' data-loc='黄色神殿'><circle class='hit' cx='520' cy='92' r='34'/><g class='mk'><circle class='dot' cx='520' cy='92' r='5'/><text x='520' y='122'>黄色神殿</text></g></g><g class='loc' data-loc='祖先树'><circle class='hit' cx='725' cy='142' r='34'/><g class='mk'><circle class='dot' cx='725' cy='142' r='5'/><text x='725' y='172'>祖先树</text></g></g><g class='loc' data-loc='悬崖'><circle class='hit' cx='135' cy='106' r='34'/><g class='mk'><circle class='dot' cx='135' cy='106' r='5'/><text x='135' y='136'>悬崖</text></g></g><g class='loc' data-loc='厨房'><circle class='hit' cx='530' cy='188' r='34'/><g class='mk'><circle class='dot' cx='530' cy='188' r='5'/><text x='530' y='218'>厨房</text></g></g><g class='loc' data-loc='主屋'><circle class='hit' cx='462' cy='238' r='34'/><g class='mk'><circle class='dot' cx='462' cy='238' r='5'/><text x='462' y='268'>主屋</text></g></g><g class='loc' data-loc='青年宿舍'><circle class='hit' cx='310' cy='250' r='34'/><g class='mk'><circle class='dot' cx='310' cy='250' r='5'/><text x='310' y='280'>青年宿舍</text></g></g><g class='loc' data-loc='菜园'><circle class='hit' cx='395' cy='282' r='34'/><g class='mk'><circle class='dot' cx='395' cy='282' r='5'/><text x='395' y='312'>菜园</text></g></g><g class='loc' data-loc='五月柱草坪'><circle class='hit' cx='540' cy='348' r='34'/><g class='mk'><circle class='dot' cx='540' cy='348' r='5'/><text x='540' y='378'>五月柱草坪</text></g></g><g class='loc' data-loc='长老屋'><circle class='hit' cx='645' cy='270' r='34'/><g class='mk'><circle class='dot' cx='645' cy='270' r='5'/><text x='645' y='300'>长老屋</text></g></g><g class='loc' data-loc='藏书室'><circle class='hit' cx='740' cy='315' r='34'/><g class='mk'><circle class='dot' cx='740' cy='315' r='5'/><text x='740' y='345'>藏书室</text></g></g><g class='loc' data-loc='林边'><circle class='hit' cx='856' cy='346' r='34'/><g class='mk'><circle class='dot' cx='856' cy='346' r='5'/><text x='856' y='376'>林边</text></g></g><g class='loc' data-loc='药草房'><circle class='hit' cx='825' cy='525' r='34'/><g class='mk'><circle class='dot' cx='825' cy='525' r='5'/><text x='825' y='555'>药草房</text></g></g><g class='loc' data-loc='受孕仪式屋'><circle class='hit' cx='645' cy='590' r='34'/><g class='mk'><circle class='dot' cx='645' cy='590' r='5'/><text x='645' y='620'>受孕仪式屋</text></g></g><g class='loc' data-loc='宴席草坪'><circle class='hit' cx='440' cy='505' r='34'/><g class='mk'><circle class='dot' cx='440' cy='505' r='5'/><text x='440' y='535'>宴席草坪</text></g></g><g class='loc' data-loc='草地'><circle class='hit' cx='125' cy='345' r='34'/><g class='mk'><circle class='dot' cx='125' cy='345' r='5'/><text x='125' y='375'>草地</text></g></g><g class='loc' data-loc='河边'><circle class='hit' cx='165' cy='480' r='34'/><g class='mk'><circle class='dot' cx='165' cy='480' r='5'/><text x='165' y='510'>河边</text></g></g><g class='loc' data-loc='田间'><circle class='hit' cx='80' cy='555' r='34'/><g class='mk'><circle class='dot' cx='80' cy='555' r='5'/><text x='80' y='585'>田间</text></g></g></svg></div></section>\n<section class=\"pg\" id=\"girls\"></section>\n</div>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nhtml,body{overflow:hidden}\nbody{font-family:\"Noto Serif SC\",\"Source Han Serif SC\",\"Songti SC\",\"STSong\",\"SimSun\",serif;font-size:14px;line-height:1.7;color:#27302A;background:transparent}\n#bar{background:#FBFAF6;border:1px solid #E2DFD3;border-radius:12px;overflow:hidden}\n.tabs{display:flex;background:#F2F1EA;border-bottom:1px solid #E2DFD3}\n.tabs button{position:relative;flex:1;padding:10px 6px;border:0;background:none;font:inherit;color:#6B7166;cursor:pointer}\n.tabs button.on{color:#27302A;font-weight:700}\n.tabs button.on::after{content:\"\";position:absolute;left:28%;right:28%;bottom:0;height:3px;border-radius:3px 3px 0 0;background:#5E7E44}\n.pg{display:none;padding:14px 16px 16px}\n.pg.on{display:block}\n.bar{position:relative;height:10px;--g:linear-gradient(90deg,#5E7E44,#E8B923,#D8452F,#E48AA3,#8A6CB4,#3F6FB5)}\n.bar i{position:absolute;top:0;bottom:0;left:0;border-radius:5px;background-image:var(--g);background-repeat:no-repeat}\n.bar .rest{right:0;opacity:.22}\n.bar .fill{background-size:calc(100% / var(--p)) 100%}\n.folk{margin-bottom:4px;border-radius:10px;overflow:hidden;background:#F2F1EA}\n.folk .pic{position:relative;aspect-ratio:21/9;background:linear-gradient(160deg,#A9BC8E,#5E7E44) center/cover}\n.folk .pic::before{content:\"\";position:absolute;inset:0;background:linear-gradient(to top,rgba(36,28,20,.55),rgba(36,28,20,0) 55%)}\n.folk .cap{position:absolute;left:0;bottom:0;display:flex;align-items:baseline;gap:12px;padding:0 18px 12px;color:#fff;text-shadow:0 1px 8px rgba(30,22,14,.6)}\n.folk .cap b{font-size:20px;letter-spacing:.14em}\n.folk .cap .th{font-size:13px;letter-spacing:.12em;opacity:.92}\n.folk .txt{padding:10px 16px 12px;font-size:12.5px;line-height:1.75}\n.folk .txt b{display:block;margin-bottom:2px;font-size:14px;letter-spacing:.14em}\n.folk .seam{height:4px}\n.folk .seam i{border-radius:0}\n@media (max-width:520px){.folk .cap{padding:0 12px 9px}.folk .cap b{font-size:17px}.folk .txt{padding:8px 12px 10px;font-size:12px}}\n.slot{display:grid;grid-template-columns:3.4em 1fr;gap:10px;margin-top:8px;padding:9px 12px;border-left:3px solid var(--c);border-radius:0 8px 8px 0;background:#FFFFFF}\n.slot[data-s=\"0\"]{--c:#E8B923}\n.slot[data-s=\"1\"]{--c:#D8452F}\n.slot[data-s=\"2\"]{--c:#E48AA3}\n.slot[data-s=\"3\"]{--c:#27407A}\n.slot .t{font-weight:700;color:var(--c)}\n.slot.past{opacity:.42}\n.slot.soon{background:transparent;color:#6B7166;opacity:.75}\n.slot.now{background:color-mix(in srgb,var(--c) 16%,#FFFFFF)}\n.chips{display:flex;flex-wrap:wrap;justify-content:center;gap:4px 22px;margin-bottom:14px}\n.chips button{padding:2px 0;border:0;border-bottom:2px solid transparent;background:none;font:inherit;color:#6B7166;cursor:pointer}\n.chips button:hover{color:#27302A}\n.chips button.on{color:#27302A;font-weight:700;border-bottom-color:var(--c)}\n.frame{position:relative;aspect-ratio:832/1216;overflow:hidden;border:1px solid #E2DFD3;border-radius:10px;background:linear-gradient(170deg,#F2F1EA,#FBFAF6)}\n.frame.wide{width:100%;aspect-ratio:50/33;border:0;background:none}\n.frame img{display:block;width:100%;height:100%;object-fit:cover}\n.map{display:block;width:100%;height:100%}\n.map .loc{cursor:pointer}\n.map .hit{fill:#fff;fill-opacity:0;pointer-events:all}\n.map .mk{pointer-events:none;filter:drop-shadow(0 0 1.5px rgba(30,22,14,.8)) drop-shadow(0 1px 4px rgba(30,22,14,.45));transition:transform .2s,filter .2s}\n.map .dot{fill:#FBFAF6;transform-box:fill-box;transform-origin:center;transition:transform .2s}\n.map text{font-size:22px;font-weight:600;letter-spacing:.14em;fill:#fff;text-anchor:middle}\n.map .loc:hover .mk{transform:translateY(-3px)}\n.map .loc.cur .mk,.map .loc.sel .mk{transform:translateY(-8px);filter:drop-shadow(0 0 1.5px rgba(30,22,14,.8)) drop-shadow(0 9px 6px rgba(30,22,14,.5))}\n.map .loc.cur .dot,.map .loc.sel .dot{transform:scale(1.5)}\n.info{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;opacity:0;pointer-events:none;transition:opacity .2s;background:#FBFAF6;font-size:12.5px;line-height:1.75;color:#27302A}\n.info.on{opacity:1;pointer-events:auto}\n.info .pic{flex:1;min-height:0;background-size:cover;background-position:center}\n.info .txt{padding:10px 16px 12px}\n.info b{display:block;margin-bottom:2px;font-size:15px;letter-spacing:.14em}\n.info b::after{content:\"点按返回地图\";float:right;font-size:11px;font-weight:400;letter-spacing:.1em;color:#6B7166}\n@media (max-width:520px){.info{font-size:12px;line-height:1.65}.info b{font-size:14px}}\n.gview{--w:380px;display:flex;justify-content:center;gap:20px}\n.gview .frame{flex:none;align-self:flex-start;width:min(var(--w),55%)}\n.gview .cap{position:absolute;left:0;right:0;bottom:0;padding:28px 16px 10px;font-size:16px;letter-spacing:.14em;color:#fff;text-shadow:0 1px 8px rgba(30,22,14,.6);background:linear-gradient(to top,rgba(36,28,20,.5),rgba(36,28,20,0))}\n.side{flex:1;min-width:0;display:flex;flex-direction:column;gap:14px}\n.side b{font-size:24px;line-height:1.2;letter-spacing:.2em}\n.side b::after{content:\"\";display:block;width:32px;height:3px;margin-top:8px;border-radius:3px;background:var(--c)}\n.side p{font-size:14px;line-height:1.95;text-align:justify}\n.qa{display:flex;flex-direction:column;gap:12px}\n.qa .k{display:block;font-size:12px;line-height:1.6;letter-spacing:.08em;color:color-mix(in srgb,var(--c) 55%,#27302A)}\n.qa .k::before{content:\"\";display:inline-block;width:7px;height:7px;margin-right:8px;border-radius:50%;background:var(--c);vertical-align:1px}\n.qa .a{display:block;padding-left:15px;font-size:13.5px;line-height:1.7}\n.thumbs{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-top:6px}\n.thumbs button{flex:none;width:60px;aspect-ratio:832/1216;padding:0;border:2px solid transparent;border-radius:6px;overflow:hidden;background:none;opacity:.6;cursor:pointer;transition:opacity .15s}\n.thumbs button:hover,.thumbs button.on{opacity:1}\n.thumbs button.on{border-color:var(--c)}\n.thumbs img{display:block;width:100%;height:100%;object-fit:cover}\n@media (max-width:600px){.gview{flex-direction:column;align-items:center;gap:14px}.gview .frame{align-self:center;width:min(300px,100%)}.side{flex:none;width:100%}.side p{font-size:13px;line-height:1.85}.thumbs{order:-1;justify-content:center;margin:0 0 4px}}\n</style>");
const TABLE = [
  ['与莉妮娅一同飞抵斯德哥尔摩，在租车处取车。', '驱车北上，一路大半天，莉妮娅在路上讲起村子和盛宴。', '在村外草地会合外出归来的年轻人，英国情侣奥利弗和哈丽特也在其中。', '大家一起吃蘑菇、喝蘑菇茶，睡在草地上。'],
  ['步行入村，全村出来迎宾，族长西芙致辞，宣布九天盛宴开始。', '参观村子，有符文课、符文石碑和小水电站，远远看一眼不许进的神殿和笼里的熊。', '欢迎宴，长桌摆成符文形，全村祝酒、合唱感恩。', '在青年宿舍给外来者赠白衣、授符文，讲人生四季，看历届五月女王的照片。'],
  [['站着吃的庆典午宴，孩子们跳舞，穿蓝金礼服的伊尔娃与丹恩两位老人是主角。', '站着吃的庆典午宴，孩子们跳舞。'], ['全村列队上山，诵读圣书，伊尔娃与丹恩两位七十二岁的老人从崖上跳下，落地未咽气的由木槌击杀，全村齐声呼应惨叫。', '全村游行上山，到西北的悬崖去。'], ['命名礼，未出生的孩子继承两位逝者的名字；族长向外来者解释七十二岁。', '命名礼。'], ['草坪一角点起长明火，为逝者守夜，全村低声合唱。', '草坪上点起长明火，全村围火合唱。']],
  ['女人们去草地采花、编花冠，把花冠送给中意的人。', ['长老准许祝凛写论文，条件是用化名、隐去地点；同一个下午，美国姑娘在祖先树上小便，村民围着树痛哭。', '没有排定的节目，女人们在主屋后头做晚宴用的肉馅饼。'], ['晚宴上姑娘们暗中下爱情咒；美国姑娘饭后被人带走，再没出现。', '晚宴，桌上有姑娘们亲手做的肉馅饼。'], ['七种花放在枕下，姑娘们来找{{user}}；荷兰摄影师潜入神殿偷拍圣书，被杀。', '七种花之夜，姑娘们睡前采花放在枕下。']],
  ['立五月柱，围着柱子环舞，跳青蛙舞。', '五月柱舞蹈比赛，绕柱跳到最后一个还站着的人，当选五月女王。', ['女王加冕，被拍照，坐首位，吞下整条鲱鱼，全桌对她说「你是家人了」。', '女王加冕宴。'], ['长老召集外来者，宣布一册圣书从神殿失窃，追问荷兰摄影师的去向。', '加冕宴散后，没有排定的节目。']],
  ['女王独自骑行，祝福庄稼与牲畜。', '成年礼，春季结束的人领到符文，长老会宣布他们可以交配。', ['长老会按星象排配对，宣布{{user}}获批，星象与他最合的是布丽塔。', '长老会在长老屋召集外来者和刚成年的人。'], ['受孕仪式屋头一夜开放，举行第一场受孕仪式。', '没有排定的全村节目。']],
  [['有人在林边的旧木棚里发现奥利弗已成血鹰。', '没有排定的节目。'], '劳作日，亚麻、小水电、田间的活计，由姑娘们带着大家干。', '神谕者鲁本在长老屋画新的一册，长老们解读。', ['全村围着篝火合唱，受孕仪式屋照常开放。', '全村围着篝火合唱。']],
  [['哈丽特不见了，村里人说已经送她去了车站。', '没有排定的节目。'], '在林边采药草和蘑菇，晾晒配茶。', '宴席上有腌鲱鱼、莳萝新土豆和草莓蛋糕，大家举杯唱饮酒歌。', ['河边夜祭，孩子们演示自愿献身，众人喊停，他们才收手；受孕仪式屋照常开放。', '河边夜祭。']],
  [['宣布英格玛与乌尔夫两位本村人自愿献身。', '早饭后全村聚到主屋，长老有事宣布。'], ['全村准备祭典，编大花冠，打扫神殿，摆好符文桌，把熊牵出笼。', '全村为最后一天的祭典做准备。'], '最后一场长桌宴，全村合唱。', ['全村守夜等天亮，受孕仪式屋最后一夜开放。', '全村在草坪上守夜等天亮。']],
  [['在黄色神殿前举行九祭，长老斯滕摇滚筒抽出木匠托比约恩与织工卡琳，女王在两人之间选定第九位。', '黄色神殿前的祭典。'], ['九位祭品进入神殿，神殿焚烧，村民同声呼应志愿者的惨叫。', '祭典继续。'], ['全村围在余烬旁同声哭喊。', '祭典收尾。'], ['盛宴结束，{{user}}要在留下和离开之间拿定主意。', '盛宴结束。']],
];
const SLOTS = ['上午', '下午', '傍晚', '夜里'];
const DAYNAME = ['初到瑞典', '盛宴开幕', '午宴与游行', '采花与晚宴', '五月柱与加冕', '成年礼', '劳作日', '采药与夜祭', '祭典筹备', '神殿祭典'];
const ASK = ['爱吃什么', '藏得最深的小本事', '最怕的小东西', '最近一次出丑'];
const GIRLS = [
  { name: '洛槿', color: '#D8452F', intro: '21 岁，人类学大三，是你交往一年半的女友。安静敏感，在人群里话不多，却总是最先察觉谁的情绪不对；一到生地方总要先站在你身边，等熟悉了才放得开，爱说爱笑，也爱和你闹。',
    qa: ['炸鸡配可乐，吃相豪迈，被你笑过', '看恐怖片面不改色，还能点评打光', '气球，总觉得它下一秒就要爆', '访谈时把受访大爷的名字念成了导师的名字'],
    pics: [
      ['路上', 'https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/portrait-luo-jin-lu-shang.webp'],
      ['入村', 'https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/portrait-luo-jin-ru-cun.webp'],
      ['私下', 'https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/portrait-luo-jin-si-xia.webp']] },
  { name: '莉妮娅', color: '#E8B923', intro: '22 岁，在哈尔加长大的瑞典人，来中国读人类学，是洛槿无话不谈的闺蜜，也是这次邀你们回村的人。说话慢，爱听人说话，笑起来眼睛弯，待在她身边让人放松。',
    qa: ['毛肚火锅，辣到同桌流泪她还要再加一勺', '麻将，宿舍里没输过', '榴莲，隔着一条街闻到就要换方向', '食堂用刚学的方言点餐，阿姨愣了三秒，递来一碗不知道什么汤'],
    pics: [
      ['外面', 'https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/portrait-li-ni-ya-wai-mian.webp'],
      ['入村', 'https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/portrait-li-ni-ya-ru-cun.webp'],
      ['私下', 'https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/portrait-li-ni-ya-si-xia.webp']] },
  { name: '布丽塔', color: '#E48AA3', intro: '18 岁，哈尔加的姑娘，是莉妮娅从小带大的妹妹。直率热情，喜欢谁就让谁知道，对外面的世界有问不完的问题；你是她头一回这么近见到的外来男孩。',
    qa: ['草莓蘸盐，没人懂，她吃得很香', '两指口哨，隔着一片草坪能把羊吹回来', '村口那只大鹅，三年没打赢过', '穿着莉妮娅带回来的运动鞋，左右脚穿反了走一整天'],
    pics: [
      ['日常', 'https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/portrait-bu-li-ta-ri-chang.webp'],
      ['做饭', 'https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/portrait-bu-li-ta-zuo-fan.webp'],
      ['私下', 'https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/portrait-bu-li-ta-si-xia.webp']] },
  { name: '艾拉', color: '#8A6CB4', intro: '27 岁，哈尔加的药草师，在外面生活过几年，英语流利，这个夏天回村过节。沉静温柔，说话轻，村里的茶和外来者的饮食起居都由她照料，总在恰好的时候出现。',
    qa: ['深夜泡面加两个蛋，在城里学的坏习惯', '打鼓，在斯德哥尔摩的地下室乐队待过一年', '蛾子，明明天天和草药打交道', '第一次骑共享单车，骑进了喷泉'],
    pics: [
      ['外面', 'https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/portrait-ai-la-wai-mian.webp'],
      ['回村', 'https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/portrait-ai-la-hui-cun.webp'],
      ['私下', 'https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/portrait-ai-la-si-xia.webp']] },
  { name: '祝凛', color: '#3F6FB5', intro: '22 岁，人类学大四，毕业论文写的就是瑞典的仲夏节。大小姐出身，黑色长直发，身形高挑，言谈有分寸，一聊到民俗就两眼放光。查资料、记日程、和长辈打交道多由她出面，在队伍里是最靠谱的一个。',
    qa: ['话梅，论文卡住时一天一包', '模仿各地口音，导师的口头禅学得最像', '听自己的录音，每次都要捂耳朵', '对一位路过的村民鞠躬行礼，人家只是弯腰系鞋带'],
    pics: [
      ['日常', 'https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/portrait-zhu-lin-ri-chang.webp'],
      ['入村', 'https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/portrait-zhu-lin-ru-cun.webp'],
      ['私下', 'https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/portrait-zhu-lin-si-xia.webp']] }
];
const MAPINFO = {"五月柱草坪": ["https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/scene-maypole-lawn.webp", "村子正中修剪平整的大草坪，南沿立着刻符文的石碑。迎宾、舞蹈、守夜、篝火，村里的大事多在这里办。"], "宴席草坪": ["https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/scene-feast-lawn.webp", "五月柱草坪南面一片开阔的大草坪，四周不挨房子。办宴时铺白桌布的长桌拼成一个大大的符文形，全村在这里吃长桌宴。"], "主屋": ["https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/scene-main-house.webp", "草坪北侧上百年的长木屋，通长的大厅里铺着白桌布。全村在这里吃早饭，墙上挂着历届五月女王的照片。"], "厨房": ["https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/scene-kitchen.webp", "主屋大厅后头连着的大厨房，铁灶上坐着几口大锅，梁上挂着腌鱼和药草。宴席的菜都从这里端出去。"], "青年宿舍": ["https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/scene-dormitory.webp", "草坪西侧的高大木屋，墙面从地面到屋梁画满彩色壁画。年轻人和受邀的外来者睡在这里，白夜的光整夜照进来。"], "悬崖": ["https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/scene-cliff.webp", "村子西北山上的白色崖面，小径穿过松林盘上去，崖下是一片白沙地。从崖顶望下去，整个村子连成一个符文的形状。"], "黄色神殿": ["https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/scene-temple.webp", "全村唯一新建的明黄色尖顶木殿，屋顶从顶尖一直落到地面，专为这次盛宴盖了三年。平日禁入，外来者只能远远站着看。"], "祖先树": ["https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/scene-ancestor-tree.webp", "神殿下方土坡上的一棵大树，三四个人才能合抱，树根围着一圈长满青苔的碎石。村里人说它与所有逝者相连，路过常伸手摸一摸树干。"], "长老屋": ["https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/scene-elder-house.webp", "草坪东侧不开普通窗的老木屋，四壁全是黑白壁画，光从天窗落下。长老会在这里议事，屋旁木笼里关着村里养的熊。"], "藏书室": ["https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/scene-library.webp", "长老屋东侧刷着焦油的黑木矮屋，没有窗，只开一扇天窗。几百册圣书按年代排在架上，钥匙在长老手里。"], "菜园": ["https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/scene-garden.webp", "主屋与青年宿舍之间，菜畦按符文的形状排开，一片草莓正红。比草坪安静，外来者常坐在长凳上记笔记。"], "田间": ["https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/scene-field.webp", "村子南侧一直铺到山脚的平地，亚麻正开着淡蓝色的花，风吹过像水面起伏。田边是放牧的草场，劳作的人远看是一个个白点。"], "林边": ["https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/scene-forest-edge.webp", "房屋和田地到这里为止，再往东是云杉、松树和白桦混生的林子。向阳的草坡上长着药草，木棚里晾着蘑菇片。"], "药草房": ["https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/scene-herb-house.webp", "林边草坡下的小木屋，梁上倒挂药草，整面墙摆满贴着符文记号的陶罐。炉上常年煨着茶，村里的各样茶都在这里配。"], "河边": ["https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/scene-river.webp", "村子西南从山上流下来的河，清澈冰凉，上游一座小水电站给村里供电。下游拐弯处是一片浅滩，女人们在这里洗亚麻衣物。"], "受孕仪式屋": ["https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/scene-ritual-house.webp", "村子东南边缘的宽大老木屋，四周是高草和白桦，只有一条小径通过去。盛宴里只有几夜开放，日子由长老会定。"], "草地": ["https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/scene-meadow.webp", "村子西边的缓坡草地，野花开得一眼望不到头，草长到膝盖。姑娘们坐在草里编花冠，宴席上的野花也多出自这里。"]};
const FOLK = [["蘑菇茶", "进村前一夜，归来的年轻人在村外草地泡蘑菇茶请客人喝，喝下去草叶像在呼吸，颜色也浓起来。头一次喝的人身边总有人陪着，等他缓过来。", "https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/folk-mushroom-tea.webp"], ["白衣与符文", "村里人穿自己种、自己织的白色亚麻，领口袖口绣着各人的符文，没有两件一样。外来者入村当夜也领到一件白衣和一个符文，换上以后站在人群里就分不出谁是外来的。", "https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/folk-white-linen.webp"], ["命名礼", "村里人去世以后，名字不会跟着走，而是留给一个还没出生的孩子。命名礼上长者当众念出这个名字，全村齐声应和，孩子还没落地就有了来处。", "https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/folk-naming.webp"], ["花冠", "姑娘们在草地上采金凤花、三叶草、风铃草编成花冠，送给中意的年轻男子。收到的人当场戴上，就是领了这份心意。", "https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/folk-flower-crown.webp"], ["五月柱", "人们把缠满叶子和野花的五月柱立在草坪中央，十字横杆下挂着两个花环。全村手拉手绕着它环舞，再蹲下来学青蛙跳。", "https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/folk-maypole.webp"], ["成年礼", "十八岁的人换上新缝的白衣，领口空着一块，长者把新符文刻在木牌上交给他们，妇人当场绣上。孩子们唱着歌把他们送出春季，从此算作夏季之人。", "https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/folk-coming-of-age.webp"], ["共感", "一个人哭，身边的人跟着哭；一个人唱，全村跟着唱，高低长短都随着那个人走。围着篝火时全村站成几圈，唱一首没有词的调子。", "https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/folk-bonfire.webp"], ["仲夏宴席", "桌上摆着腌鲱鱼、撒莳萝的新土豆、酸奶油拌香葱和草莓蛋糕，酒是自家酿的啤酒和烈酒。每喝一口烈酒前，全桌先唱一段饮酒歌。", "https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/folk-feast.webp"], ["圣书", "圣书用哈尔加独有的十六个符文写成，每个符文对应一种情感，从最神圣排到最不神圣。几百册一册接一册，每册后面都留着空白页，因为它永远写不完。", "https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/folk-sacred-book.webp"], ["五月女王的花裙", "五月女王加冕时换上一条长裙，无数朵鲜花缀在上面，花叶层层叠叠垂到脚边。村里人说，这是把一整片草地穿在了身上。", "https://testingcf.jsdelivr.net/gh/ssd-tavern/midsommar@main/assets/folk-flower-gown.webp"]];
const el = (id) => document.getElementById(id);

await waitGlobalInitialized('Mvu');
const sd = Mvu.getMvuData({ type: 'message', message_id: 'latest' }).stat_data;
const day = Number(sd.时空.日期), slot = SLOTS.indexOf(sd.时空.时段);

// ==== 九天日程 ====
const p = (day + (slot + 1) / 4) / 10;
const rows = TABLE[day].map((x, s) => {
  const text = s > slot ? '尚未到来' : typeof x === 'string' ? x : x[0];
  return '<div data-s="' + s + '" class="slot ' + (s < slot ? 'past' : s === slot ? 'now' : 'soon') + '"><span class="t">' + SLOTS[s] + '</span><span>' + text + '</span></div>';
}).join('');
const seam = '<div class="bar seam"><i class="rest"></i><i class="fill" style="width:' + p * 100 + '%;--p:' + p + '"></i></div>';
el('sched').innerHTML = '<div class="folk"><div class="pic"' + (FOLK[day][2] ? ' style="background-image:url(' + FOLK[day][2] + ')"' : '') + '><div class="cap"><b>' + (day === 0 ? '抵达日' : '第 ' + day + ' 天') + '</b><span class="th">' + DAYNAME[day] + '</span></div></div>' + seam + '<div class="txt"><b>' + FOLK[day][0] + '</b>' + FOLK[day][1] + '</div></div>' + rows;

// ==== 村子地图：点圆点整框换成场景图和介绍，点按收起 ====
const box = el('map').querySelector('.frame');
const map = box.querySelector('.map');
const info = box.appendChild(document.createElement('div'));
info.className = 'info';
map.querySelectorAll('.loc').forEach((g) => g.classList.toggle('cur', g.dataset.loc === sd.时空.地点));
let open = null;
box.addEventListener('click', (e) => {
  const g = e.target.closest('.loc');
  open = g && g !== open ? g : null;
  map.querySelectorAll('.loc').forEach((x) => x.classList.toggle('sel', x === open));
  info.classList.toggle('on', !!open);
  if (!open) return;
  const [img, text] = MAPINFO[open.dataset.loc];
  info.innerHTML = '<div class="pic" style="background-image:url(' + img + ')"></div><div class="txt"><b>' + open.dataset.loc + '</b>' + text + '</div>';
});

// ==== 女主立绘：左大图，右边名字、介绍与缩略图，点缩略图换大图 ====
const gp = el('girls');
let gi = 0;
function girl(i) {
  gi = i;
  const { name, color, intro, qa, pics } = GIRLS[i];
  gp.innerHTML = '<div class="chips">' + GIRLS.map((x, j) => '<button style="--c:' + x.color + '" class="' + (i === j ? 'on' : '') + '" data-i="' + j + '">' + x.name + '</button>').join('') + '</div>' +
    '<div class="gview" style="--c:' + color + '"><div class="frame"><img><div class="cap"></div></div><div class="side"><b>' + name + '</b><p>' + intro + '</p><div class="qa">' + ASK.map((q, k) => '<div><span class="k">' + q + '</span><span class="a">' + qa[k] + '</span></div>').join('') + '</div><div class="thumbs">' +
    pics.map((x, k) => '<button data-k="' + k + '"><img src="' + x[1] + '"></button>').join('') + '</div></div></div>';
  pick(0);
}
function pick(k) {
  const x = GIRLS[gi].pics[k];
  gp.querySelector('.frame img').src = x[1];
  gp.querySelector('.cap').textContent = x[0];
  gp.querySelectorAll('.thumbs button').forEach((b, j) => b.classList.toggle('on', j === k));
}
gp.addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.dataset.i) girl(Number(b.dataset.i));
  else pick(Number(b.dataset.k));
});
girl(0);

// ==== 切页 ====
document.querySelector('.tabs').addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  document.querySelectorAll('.tabs button').forEach((x) => x.classList.toggle('on', x === b));
  document.querySelectorAll('.pg').forEach((x) => x.classList.toggle('on', x.id === b.dataset.p));
});
