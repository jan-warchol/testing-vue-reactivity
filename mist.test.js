import { test, expect } from "vitest";
import { ref, computed, toValue } from "vue";

test("Use toValue to normalize primitives and refs to values", () => {
  const numberPlain = 1;
  const numberRef = ref(1);
  expect(toValue(numberPlain)).toBe(1);
  expect(toValue(numberRef)).toBe(1);

  function doubleComputed(primitiveOrRef) {
    return computed(() => toValue(primitiveOrRef) * 2);
  }
  expect(toValue(doubleComputed(numberPlain))).toBe(2);
  expect(toValue(doubleComputed(numberRef))).toBe(2);

  // Not reactive, but works on both kinds of input:
  function doubleFunction(primitiveOrRef) {
    return toValue(primitiveOrRef) * 2;
  }
  expect(toValue(doubleFunction(numberPlain))).toBe(2);
  expect(toValue(doubleFunction(numberRef))).toBe(2);
});
