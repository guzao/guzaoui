import { mount } from "@vue/test-utils"
// import { ButtonType } from './types.ts'
import { describe, test, it, expect, vi } from "vitest"

import GZButton from "./Button.vue";

describe("Button.vue", () => {


  test("basic button", async () => {
    const wrapper = mount(() => (
      <GZButton type="primary">
        button content
      </GZButton>
    ));

    // class
    expect(wrapper.classes()).toContain("gz-button--primary");
   
    // slot
    expect(wrapper.get("button").text()).toBe("button content");
  });

});