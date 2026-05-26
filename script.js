const projects = {
  sincronia: {
    media: [
      'media/sincronia/sincronia_1.jpg',
      'media/sincronia/sincronia_1.2.jpg',
      'media/sincronia/sincronia_2.jpg',
      'media/sincronia/sincronia_3.jpg',
      'media/sincronia/sincronia_4.mp4'
    ]
  },
  adverb: {
    media: [
      'media/adverb/1_adverb_logo.jpeg',
      'media/adverb/2_zoomingly.jpeg',
      'media/adverb/3_zoomingly.jpeg',
      'media/adverb/4_yearningly.jpeg',
      'media/adverb/5_yearningly.jpeg',
      'media/adverb/6_xenially.jpeg',
      'media/adverb/7_xenially.jpeg',
      'media/adverb/8_whimsically.jpeg',
      'media/adverb/9_whimsically.jpeg'
    ]
  },
  sutura: {
    media: [
      'media/sutura/sutura_1.jpg',
      'media/sutura/sutura_1.5.mp4',
      'media/sutura/tipografia_sutura-02.png',
      'media/sutura/tipografia_sutura-03.png',
      'media/sutura/tipografia-sutura-04.png',
      'media/sutura/tipografia-sutura-05.png',
      'media/sutura/tipografia-sutura-06.png',
      'media/sutura/tipografia sutura-07.png',
      'media/sutura/tipografia sutura-08.png',
      'media/sutura/tipografia sutura-09.png',
      'media/sutura/tipografia sutura-10.png',
      'media/sutura/tipografia sutura-11.png',
      'media/sutura/tipografia sutura-12.png',
      'media/sutura/tipografia sutura-13.png',
      'media/sutura/tipografia sutura-14.png',
      'media/sutura/tipografia sutura-15.png',
      'media/sutura/tipografia sutura-16.png',
      'media/sutura/tipografia sutura-17.png',
      'media/sutura/tipografia sutura-18.png',
      'media/sutura/tipografia sutura-19.png',
      'media/sutura/tipografia sutura-20.png',
      'media/sutura/tipografia sutura-21.png',
      'media/sutura/tipografia sutura-22.png',
      'media/sutura/tipografia sutura-23.png',
      'media/sutura/tipografia sutura-24.png',
      'media/sutura/tipografia sutura-25.png',
      'media/sutura/tipografia sutura-26.png',
      'media/sutura/tipografia sutura-27.png'
    ],
    autoplay: true,
    autoplaySpeed: 500,
    autoplayStartIndex: 2
  },
  OO8: {
    media: [
      'media/OO8/1_OO8.jpg',
      'media/OO8/2_OO8.jpg',
      'media/OO8/3_OO8.mp4'
    ]
  },
  el_reino: {
    media: [
      'media/el_reino/el_reino_1.jpg',
      'media/el_reino/el_reino_2.jpg',
      'media/el_reino/el_reino_3.jpg',
      'media/el_reino/el_reino_4.mp4',
      'media/el_reino/el_reino_5.mp4',
      'media/el_reino/el_reino_6.jpg'
    ]
  },
  mfm: {
    media: [
      'media/mfm/mfm_1.png',
      'media/mfm/mfm_2.png'
    ]
  },
  contexto_sonoro: {
    media: [
      'media/contexto_sonoro/contexto_sonoro_1.png',
      'media/contexto_sonoro/contexto_sonoro_2.mp4',
      'media/contexto_sonoro/contexto_sonoro_3.mp4',
      'media/contexto_sonoro/contexto_sonoro_4.png',
      'media/contexto_sonoro/contexto_sonoro_5.mp4'
    ]
  },
  too_much: {
    media: [
      'media/too_much/too_much_1.jpg',
      'media/too_much/too_much_2.mp4',
      'media/too_much/too_much_3.mp4',
      'media/too_much/too_much_4.mp4'
    ]
  },
  moura: {
    media: [
      'media/moura/moura 1.jpg'
    ]
  }
};

function isVideoFile(path) {
  return path.match(/\.(mp4|mov|webm)$/i);
}

function setupProject(projectId) {
  const project = document.querySelector('[data-project="' + projectId + '"]');
  if (!project) return;

  const state = projects[projectId];
  state.currentIndex = 0;
  state.lastInteraction = Date.now();

  const img = project.querySelector('.project-image');
  const video = project.querySelector('.project-video');
  const leftArrow = project.querySelector('.image-arrow-left');
  const rightArrow = project.querySelector('.image-arrow-right');

  let videoOverlay = null;
  if (video) {
    videoOverlay = document.createElement('div');
    videoOverlay.className = 'video-overlay';
    videoOverlay.innerHTML = '<svg width="36" height="36" viewBox="0 0 36 36"><path d="M12 9l16 9-16 9z" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linejoin="round"/></svg>';
    project.querySelector('.project-image-wrapper').appendChild(videoOverlay);

    videoOverlay.addEventListener('click', function(e) {
      e.stopPropagation();
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });

    video.addEventListener('play', function() {
      videoOverlay.innerHTML = '<svg width="36" height="36" viewBox="0 0 36 36"><path d="M13 9v18M23 9v18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>';
    });

    video.addEventListener('pause', function() {
      videoOverlay.innerHTML = '<svg width="36" height="36" viewBox="0 0 36 36"><path d="M12 9l16 9-16 9z" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linejoin="round"/></svg>';
    });
  }

  function showMedia(index) {
    var files = state.media || state.images || [];
    var total = files.length;
    var src = files[index];
    
    if (!src) return;
    
    if (isVideoFile(src)) {
      img.style.display = 'none';
      if (video && video.src !== src) {
        video.src = src;
      }
      if (video) {
        video.style.display = 'block';
        video.classList.add('active');
        video.currentTime = 0;
        video.play();
        if (videoOverlay) videoOverlay.classList.add('visible');
      }
    } else {
      if (video) {
        video.pause();
        video.style.display = 'none';
        video.classList.remove('active');
        if (videoOverlay) videoOverlay.classList.remove('visible');
      }
      img.style.display = 'block';
      img.classList.add('fade-out');
      setTimeout(function() {
        img.src = src;
        img.onload = function() {
          img.classList.remove('fade-out');
        };
        img.onerror = function() {
          img.classList.remove('fade-out');
        };
      }, 100);
    }
  }

  function handleLeftClick() {
    state.lastInteraction = Date.now();
    if (state.autoplay) {
      clearInterval(state.autoplayInterval);
      state.autoplayInterval = setInterval(autoplayFn, state.autoplaySpeed);
    }
    
    var files = state.media || state.images || [];
    var total = files.length;
    state.currentIndex = state.currentIndex > 0 ? state.currentIndex - 1 : total - 1;
    showMedia(state.currentIndex);
  }

  function handleRightClick() {
    state.lastInteraction = Date.now();
    if (state.autoplay) {
      clearInterval(state.autoplayInterval);
      state.autoplayInterval = setInterval(autoplayFn, state.autoplaySpeed);
    }
    
    var files = state.media || state.images || [];
    var total = files.length;
    state.currentIndex = state.currentIndex < total - 1 ? state.currentIndex + 1 : 0;
    showMedia(state.currentIndex);
  }

  var autoplayFn = function() {
    if (state.autoplay && Date.now() - state.lastInteraction > 3000) {
      var files = state.media || state.images || [];
      var total = files.length;
      var startIndex = state.autoplayStartIndex || 0;
      if (state.currentIndex < startIndex) return;
      var nextIndex = state.currentIndex + 1;
      state.currentIndex = nextIndex >= total ? startIndex : nextIndex;
      showMedia(state.currentIndex);
    }
  };

  leftArrow.addEventListener('click', handleLeftClick);
  rightArrow.addEventListener('click', handleRightClick);

  var touchStartX = 0;
  var touchEndX = 0;

  project.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) return;
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  project.addEventListener('touchend', function(e) {
    if (e.changedTouches.length > 1) return;
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      handleRightClick();
    }
    if (touchEndX - touchStartX > 50) {
      handleLeftClick();
    }
  }, false);

  if (state.autoplay) {
    state.autoplayInterval = setInterval(autoplayFn, state.autoplaySpeed);
  }
  
  return { project, showMedia, state };
}

var projectHandlers = [];

Object.keys(projects).forEach(function(projectId) {
  projectHandlers.push(setupProject(projectId));
});

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    var handler = projectHandlers.find(function(h) {
      return h.project === entry.target;
    });
    if (handler && !entry.isIntersecting) {
      var video = handler.project.querySelector('.project-video');
      if (video && video.style.display === 'block') {
        video.pause();
      }
    }
  });
}, { threshold: 0.1 });

projectHandlers.forEach(function(handler) {
  observer.observe(handler.project);
});

document.querySelector('.footer-arrow').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelector('[data-modal="imprint"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('imprint-modal').classList.add('active');
});

document.querySelector('[data-modal="about"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('about-modal').classList.add('active');
});

document.querySelector('[data-modal="cv"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('cv-modal').classList.add('active');
});

document.querySelectorAll('.modal-close').forEach(function(btn) {
  btn.addEventListener('click', function() {
    this.closest('.modal-overlay').classList.remove('active');
  });
});

document.querySelectorAll('.modal-overlay').forEach(function(overlay) {
  overlay.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('active');
    }
  });
});

function getVisibleProjectHandler() {
  var viewportCenter = window.innerHeight / 2;
  var closest = null;
  var closestDist = Infinity;

  projectHandlers.forEach(function(handler) {
    var rect = handler.project.getBoundingClientRect();
    var projectCenter = rect.top + rect.height / 2;
    var dist = Math.abs(projectCenter - viewportCenter);
    if (dist < closestDist) {
      closestDist = dist;
      closest = handler;
    }
  });

  return closest;
}

document.addEventListener('keydown', function(e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  var handler = getVisibleProjectHandler();
  if (!handler) return;

  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    var leftArrow = handler.project.querySelector('.image-arrow-left');
    if (leftArrow) leftArrow.click();
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    var rightArrow = handler.project.querySelector('.image-arrow-right');
    if (rightArrow) rightArrow.click();
  } else if (e.key === ' ') {
    e.preventDefault();
    var video = handler.project.querySelector('.project-video');
    if (video && video.classList.contains('active')) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  }
});