import { test, expect } from "vitest";
import { ref } from "vue";

test("To access ref content, use .value property", () => {
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

test.todo("Assigning to refs in component templates", () => {
  // Component templates allow using a shorthand notation:
  // const count = ref(0);
  // <button @click="count++">Click count: {{ count }} </button>=
});
