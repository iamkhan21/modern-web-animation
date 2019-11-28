export default class WebAnimation {
  #element;
  #keyframeEffect;
  #animation;

  constructor(selector, keyframes, options) {
    this.#element = document.getElementById(selector);
    this.#keyframeEffect = new KeyframeEffect(
      this.#element,
      keyframes,
      options
    );
    this.#animation = new Animation(this.#keyframeEffect, document.timeline);
  }

  play() {
    this.#animation.play();
  }

  cancel() {
    this.#animation.cancel();
  }

  pause() {
    this.#animation.pause();
  }

  reverse() {
    this.#animation.reverse();
  }

  oncancel(cancelHandler) {
    this.#animation.oncancel = cancelHandler;
  }

  onfinish(finishHandler) {
    this.#animation.onfinish = finishHandler;
  }
}
