import { test, expect } from "vitest";
import { computed, ref } from "vue";

test("Expression results are not reactive", () => {
  let aNumber = 1;
  let doubled = aNumber * 2;
  expect(doubled).toBe(2);
  aNumber = 3;
  expect(doubled).not.toBe(6); // does not update automatically
});

test("Function calls are not reactive, either", () => {
  function makeDouble(num) {
    return num * 2;
  }
  let aNumber = 1;
  let doubled = makeDouble(aNumber);
  expect(doubled).toBe(2);
  aNumber = 3;
  expect(doubled).not.toBe(6); // does not update automatically
});

test("Functions called with refs are not reactive", () => {
  function makeDouble(num) {
    return num.value * 2;
  }
  const aNumber = ref(1);
  let doubled = makeDouble(aNumber);
  expect(doubled).toBe(2);
  aNumber.value = 3;
  expect(doubled).not.toBe(6); // does not update automatically;
});

test("Functions returning refs are not reactive", () => {
  function makeDouble(num) {
    return ref(num.value * 2);
  }
  const aNumber = ref(1);
  const doubled = makeDouble(aNumber);
  expect(doubled.value).toBe(2);
  aNumber.value = 3;
  expect(doubled.value).not.toBe(6); // does not update automatically;
});

test("Computed used with primitive values is not reactive", () => {
  let aNumber = 1;
  const doubled = computed(() => aNumber * 2);
  expect(doubled.value).toBe(2);
  aNumber = 3;
  expect(doubled.value).not.toBe(6); // does not update automatically;
});

test("Computed used with refs is reactive", () => {
  const aNumber = ref(1);
  const doubled = computed(() => aNumber.value * 2);
  expect(doubled.value).toBe(2);
  aNumber.value = 3;
  expect(doubled.value).toBe(6); // updates automatically.
});
