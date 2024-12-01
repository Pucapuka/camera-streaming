document.addEventListener("DOMContentLoaded", () => {
    const videoElement = document.getElementById("camera-feed");
    
    // URL do stream HTTP/WebRTC configurado via FFmpeg ou outro media server
    const streamURL = "http://localhost/live/camera.m3u8"; // Substitua pelo URL correto
    
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(streamURL);
      hls.attachMedia(videoElement);
    } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
      videoElement.src = streamURL;
    } else {
      console.error("O navegador não suporta o streaming.");
    }
  });
  