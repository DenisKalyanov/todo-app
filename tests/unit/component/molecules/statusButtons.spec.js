import { mount } from "@vue/test-utils";
import StatusButtons from "../../../../src/components/molecules/StatusButtons";

describe("unit tests for StatusButtons", () => {

    const wrapper = mount(StatusButtons);

    test("contain a StatusButtons wrapper of buttons", () => {
        expect(wrapper.contains("div")).toBeTruthy();
    })
    test("contain a StatusButtons Buttons component", () => {
        expect(wrapper.contains("Button")).toBeTruthy();
    })
})
