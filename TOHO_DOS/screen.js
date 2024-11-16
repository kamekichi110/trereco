document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
  var OUT = document.getElementById('canvas');
  OUT.style.margin = "0px auto";
  OUT.style.height = "100%";
  OUT.style.aspectRatio = "4 / 3";
  OUT.style.imageRendering = 'pixelated';
  changeAspect(4, 3);
  },2560);
  document.body.style.width = "100%";
});
    
      // 無音の音声を生成して再生する関数
      function playSilentAudio() {
        try {
          const audioContext = new (window.AudioContext || window.webkitAudioContext)();
          
          // 1秒間の無音のバッファを生成
          const buffer = audioContext.createBuffer(1, audioContext.sampleRate, audioContext.sampleRate);
          const source = audioContext.createBufferSource();
          source.buffer = buffer;
          source.connect(audioContext.destination);
          gainNode.connect(audioCtx.destination);
          gainNode.gain.value = 20;

          // 無音の音声を再生
          source.start(0);
          console.log("無音の音声を再生しました。");
        } catch (error) {
          console.error("音声の再生中にエラーが発生しました:", error);
        }
      }

      // アラートを表示し、無音の音声を再生
      console.log("東方旧作エミュレーターです。\n音声が流れるため、注意してください。");
      playSilentAudio();
  

function applyStyles() {
        const fullscreenItem = document.getElementById('fullscreenItem');
        const fullscreenButtons = document.getElementById('fullscreenButtons');
        const canvas = document.querySelector('canvas.emscripten');

        if (document.getElementById('fullscreenItem')) {
            document.querySelectorAll('.softkbd, .keyboard').forEach(function(element) {
                element.style.display = 'none';
            });
        }

        // 全画面表示スタイルを適用
        fullscreenItem.style.position = 'relative';
        fullscreenItem.style.display = 'block';
        fullscreenItem.style.background = 'gray';
        fullscreenItem.style.width = '100vw';
        fullscreenItem.style.height = '100vh';
        fullscreenItem.style.willChange = 'transform';  // レンダリングのパフォーマンスを最適化
        fullscreenItem.style.zIndex = 100;

        // 横画面時のスタイルを適用
        if (window.matchMedia('(orientation: landscape)').matches) {
            // canvasのスタイルを変更
            canvas.style.position = 'absolute';
            canvas.style.top = '50%';
            canvas.style.left = '50%';
            canvas.style.transform = 'translate(-50%, -50%)';
            canvas.style.width = 'auto';
            canvas.style.height = '100%';
            
            canvas.style.aspectRatio = '4 / 3';
            canvas.style.willChange = 'transform, width, height'; // リサイズ時のレンダリング最適化
            canvas.style.zIndex = 50;
          document.getElementById('canvas').style.pointerEvents = 'none';
            // コントローラーのスタイルを変更
            fullscreenButtons.style.position = 'absolute';
            fullscreenButtons.style.margin = 'auto';
            fullscreenButtons.style.top = '0';
          fullscreenButtons.style.bottom = '0';
          fullscreenButtons.style.left = '0';
          fullscreenButtons.style.right = '0';
            fullscreenButtons.style.width = 'auto';
            fullscreenButtons.style.height = '100%';
            fullscreenButtons.style.background = 'none';
            fullscreenButtons.style.opacity = '1';
            fullscreenButtons.style.display = 'block';
            fullscreenButtons.style.aspectRatio = '4 / 3';
            fullscreenButtons.style.zIndex = 400;
        }
    }
function changeAspect(w, h) {
  applyStyles();
  console.log(w, h);
  var logs = `CHANGE-ASPECT-SIZE: canvasとコントロールエリアの比率 = 4:3, 画面エリアの比率 = 16:9.`;
}
