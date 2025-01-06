import { test, expect } from "vitest";
import { ref, computed } from "vue";

test("To get ref content, use .value property", () => {
  const aNumber = ref(1);
  expect(aNumber).toBeTypeOf("object");
  expect(aNumber.value).toBe(1);
});

test("To update ref content, assign to .value property", () => {
  const aNumber = ref(1);
  // Variables holding refs shouldn't be assigned to directly, because that
  // would break reactivity. Because of that we declare them as consts, so
  // assingnig to them will error:
  expect(() => {
    aNumber = 5;
  }).toThrowError("Assignment to constant variable.");
  // Instead, assign to the .value property:
  aNumber.value = 5;
  expect(aNumber.value).toBe(5);
});

test.todo("Refs in component templates don't require using .value", () => {
  // Component templates allow using a shorthand notation:
  // const count = ref(0);
  // <button @click="count++">Click count: {{ count }} </button>
});

test("Use computed to create chained reactive values", () => {
  const aNumber = ref(1);
  const doubled = computed(() => aNumber.value * 2);
  expect(doubled.value).toBe(2);
  aNumber.value = 3;
  expect(doubled.value).toBe(6); // updates automagically
});

test("Simple expression assignment doesn't create a ref", async () => {
  const aNumber = ref(1);
  const doubled = aNumber.value * 2;
  // Doubled is just a number, not a ref:
  expect(doubled).toBe(2);
  expect(doubled.value).toBeUndefined();
});

test("Simply creating a ref from expression is not reactive", () => {
  const aNumber = ref(1);
  const doubled = ref(aNumber.value * 2); // this won't be reactive
  expect(doubled.value).toBe(2);
  aNumber.value = 3;
  expect(doubled.value).not.toBe(6);
});
