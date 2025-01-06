import { test, expect } from "vitest";
import { computed, reactive, ref, toValue } from "vue";

test("Using refs vs using reactive", () => {
  const objRef = ref({ foo: "bar" });
  const objReactive = reactive({ foo: "bar" });
  // Ref requires access via .value property, reactive does not:
  expect(objRef.value.foo).toBe("bar");
  expect(objReactive.foo).toBe("bar");
});

test("Reactive proxy is not equal to the original", () => {
  const stuff = {};
  const proxy = reactive(stuff);
  expect(proxy === stuff).toBe(false);
});

test.todo("Reactive does not work with primitive types");

test.todo("destructuring refs vs destructuring reactive");
