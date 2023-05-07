const button = document.querySelector('.gym__video-button');
const video = document.querySelector('.gym__video');
const iframeBlock = document.querySelector('[data-video-container]');

const createIframe = (block) => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('width', 364);
  iframe.setAttribute('height', 228);
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', block.dataset.src);

  return iframe;
};

button.addEventListener('click', () => {
  if (video && iframeBlock) {
    video.classList.add('gym__video-play');
    button.remove();
    const newIframe = createIframe(iframeBlock);
    iframeBlock.append(newIframe);
  }
});
