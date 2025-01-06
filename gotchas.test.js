import { test, expect } from "vitest";
import { nextTick, ref, watchEffect } from "vue";

// https://vuejs.org/guide/essentials/reactivity-fundamentals.html#dom-update-timing
test("Using watchEffect requires awaiting for next tick", async () => {
  const aNumber = ref(1);
  const doubled = ref();

  watchEffect(() => {
    doubled.value = aNumber.value * 2;
  });

  expect(doubled.value).toBe(2);
  aNumber.value = 3;
  expect(doubled.value).toBe(2); // not updated yet
  await nextTick();
  expect(doubled.value).toBe(6); // updated now
});
