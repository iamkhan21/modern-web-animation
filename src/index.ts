export function animate<K extends keyof HTMLElementTagNameMap>(
  selector: K,
  keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
  options?: number | KeyframeAnimationOptions
) {
  const element = document.querySelector(selector);

  if (!element) {
    throw new Error(`Can't find element with selector ${selector}`);
  }

  const keyframeEffect = new KeyframeEffect(element, keyframes, options);
  const animation = new Animation(keyframeEffect, document.timeline);

  return {
    play() {
      animation.play();
    },
    cancel() {
      animation.cancel();
    },
    pause() {
      animation.pause();
    },
    reverse() {
      animation.reverse();
    },
    oncancel(cancelHandler: () => void) {
      animation.oncancel = cancelHandler;
    },
    onfinish(finishHandler: () => void) {
      animation.onfinish = finishHandler;
    },
  };
}
