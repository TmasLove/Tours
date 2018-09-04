
  var swatchEnabled;
  var swatchPreference = /w_swatchEnabled=true/.test(document.referrer) || undefined;
  if (swatchPreference != null) {
    swatchEnabled = swatchPreference;
  } else {
    swatchEnabled = true;
  }
  if (swatchEnabled) {
    document.getElementById('wistia_video').innerHTML = '<div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.net/embed/medias/ba2tq8xb9s/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" onload="this.parentNode.style.opacity=1;" /></div>';
  }
</script>
<script>
  function addWindowListener (type, callback) {
    if (window.addEventListener) {
      window.addEventListener(type, callback, false);
    } else if (window.attachEvent) {
      window.attachEvent('on' + type, callback);
    }
  }

  window.wistiaPostMessageQueue = [];
  addWindowListener('message', function (event) {
    if (!window._wistiaHasInitialized) {
      wistiaPostMessageQueue.push(event);
    }
  });
