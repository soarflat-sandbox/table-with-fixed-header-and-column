const fixedColumnEl = document.getElementById('fixedColumn');
const fixedHeaderRightEl = document.getElementById('fixedHeaderRight');

document.getElementById('tableBody').addEventListener('scroll', e => {
  fixedColumnEl.scrollTop = e.target.scrollTop;
  fixedHeaderRightEl.scrollLeft = e.target.scrollLeft;
});
