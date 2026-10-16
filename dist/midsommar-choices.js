/*! 仲夏夜 前端 © ssd（类脑 @buyssdcom）保留一切权利。禁止复制、转载、修改、改编、借鉴、模仿、反混淆与任何商业用途，许可条款见仓库 README。All rights reserved. */
document.head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https://testingcf.jsdelivr.net/npm/@fontsource/noto-serif-sc@5.3.1/400.css\">\n<link rel=\"stylesheet\" href=\"https://testingcf.jsdelivr.net/npm/@fontsource/noto-serif-sc@5.3.1/700.css\">");
document.body.insertAdjacentHTML("afterbegin", "<div id=\"choices\">\n<div class=\"hd\"><b>接下来</b><span>点一条填入输入框，改完再发送</span></div>\n<div id=\"list\"></div>\n</div>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nhtml,body{overflow:hidden}\nbody{padding-bottom:10px;font-family:\"Noto Serif SC\",\"Source Han Serif SC\",\"Songti SC\",\"STSong\",\"SimSun\",serif;font-size:14px;line-height:1.7;color:#27302A;background:transparent}\n#choices{background:#FBFAF6;border:1px solid #E2DFD3;border-radius:12px;overflow:hidden}\n.hd{display:flex;align-items:baseline;justify-content:space-between;gap:12px;padding:9px 16px;background:#F2F1EA;border-bottom:1px solid #E2DFD3}\n.hd b{letter-spacing:.14em}\n.hd span{font-size:12px;color:#6B7166}\n#list{padding:2px 12px 12px}\n.opt{display:grid;grid-template-columns:1.4em 1fr;gap:10px;width:100%;margin-top:8px;padding:9px 12px;border:0;border-left:3px solid var(--c);border-radius:0 8px 8px 0;background:#FFFFFF;font:inherit;text-align:left;color:inherit;cursor:pointer;transition:background .15s}\n.opt .n{font-weight:700;color:var(--c)}\n.opt:hover{background:color-mix(in srgb,var(--c) 10%,#FFFFFF)}\n.opt.on{background:color-mix(in srgb,var(--c) 18%,#FFFFFF)}\n@media (max-width:520px){.hd{padding:8px 12px}.hd span{font-size:11.5px}#list{padding:2px 8px 10px}.opt{font-size:13px;line-height:1.75}}\n</style>");
// 选项由正则透传进来，是 body 里的四个 choice 元素；换成按钮，点一条填入酒馆输入框
const COLORS = ['#E8B923', '#D8452F', '#E48AA3', '#27407A'];
const NUM = '一二三四';
const list = document.getElementById('list');
document.querySelectorAll('choice').forEach((x, i) => {
  const b = list.appendChild(document.createElement('button'));
  b.className = 'opt';
  b.style.setProperty('--c', COLORS[i]);
  b.innerHTML = '<span class="n">' + NUM[i] + '</span><span></span>';
  b.lastChild.textContent = x.textContent.trim();
  x.remove();
});
list.addEventListener('click', (e) => {
  const b = e.target.closest('.opt');
  if (!b) return;
  list.querySelectorAll('.opt').forEach((x) => x.classList.toggle('on', x === b));
  const box = window.parent.document.getElementById('send_textarea');
  box.value = b.lastChild.textContent;
  box.dispatchEvent(new Event('input', { bubbles: true }));
  box.focus();
});
