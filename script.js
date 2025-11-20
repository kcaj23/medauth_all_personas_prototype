document.addEventListener('DOMContentLoaded', () => {
  const screens = document.querySelectorAll('.screen');
  const hotspots = document.querySelectorAll('.hotspot');

  function showScreen(id){
    screens.forEach(s => s.classList.remove('active'));
    const t = document.getElementById(id);
    if (t) t.classList.add('active');
  }

  hotspots.forEach(h => {
    h.addEventListener('click', () => {
      const targetId = h.dataset.target;
      if (targetId) showScreen(targetId);
    });
  });
});