function setImageSrc(el) {
  if (el.tagName && el.tagName == 'IMG') {
    el.src = el.dataset.src;
  } else {
    el.style.backgroundImage = 'url(' + el.dataset.bg + ')';
  }
  el.classList.add('lazyload_complete');
}

function reset(el, binding) {
  let lazyImages = [].slice.call(el.querySelectorAll('.lazy'))
  let options = binding.value && binding.value.options;

  function callback(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        let lazyImage = entry.target;
        setImageSrc(lazyImage);
        lazyImageObserver.unobserve(lazyImage);
      }
    });
  }
  if ("IntersectionObserver" in window) {
    if (options && typeof options === 'object') {
      var lazyImageObserver = new IntersectionObserver(callback, options);
    } else {
      var lazyImageObserver = new IntersectionObserver(callback);
    }
    lazyImages.forEach(function (lazyImage, index) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    lazyImages.forEach(function (el) {
      setImageSrc(el);
    });
  }
}

export default {
  bind(el, binding, vnode) {
    let time = el.dataset.time || 100;
    let resetTimeout = setTimeout(function () {
      reset(el, binding);
    }, time);
  },
  update(el, binding, vnode){
    setTimeout(function(){
      reset(el, binding)
    }, 20)
  }
}
