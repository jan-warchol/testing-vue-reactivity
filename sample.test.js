import { test, expect } from "vitest";
import { reactive, ref } from "vue";

test("properties of reactive objects can be assigned directly", () => {
  const state = reactive({
    count: 0,
  });

  expect(state.count).toBe(0);
  state.count = 1;
  expect(state.count).toBe(1);
});

test("refs can be used in reactive objects", () => {
  const count = ref(0);
  const state = reactive({
    count,
  });

  expect(state.count).toBe(0);
  state.count = 1;
  expect(count.value).toBe(1);
  expect(state.count).toBe(1);
  //   expect(state.count.value).toBe(1)  hmm undefined???
});

test("accessing members of reactive", () => {
  const state = reactive({
    count: 0,
  });

  expect(state.count).toBe(0);
  //   state.count.value = 1;   throws
});

test("brum", () => {
  const state = ref({
    count: 0,
  });

  //   state.count.value = 1;  // throws
  //   expect(state.count).toBe(0); // undefined
});

test.todo("unwrapping arguments with toValue");
