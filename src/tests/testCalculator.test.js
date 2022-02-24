import Calculator from "../components/Calculator.vue";
import { mount } from '@vue/test-utils';

describe('Calculator', () => {
    test('4 + 3 = 7', () => {
        const wrapper = mount(Calculator)
        wrapper.vm.$data.operand1 = 4;
        wrapper.vm.$data.operand2 = 3;
        expect(wrapper.vm.$data.operand1).toBe(4);
        expect(wrapper.vm.$data.operand2).toBe(3);
        wrapper.vm.add();
        expect(wrapper.vm.$data.result).toBe(7);
    })
    test('fib(4) = 3; fib(3) = 2', () => {
        const wrapper = mount(Calculator)
        wrapper.vm.$data.operand1 = 4;
        wrapper.vm.$data.operand2 = 3;
        expect(wrapper.vm.fib(4)).toBe(3);
        expect(wrapper.vm.fib(3)).toBe(2);
    })
    test('fib(4) + fib(3) = 5', () => {
        const wrapper = mount(Calculator)
        wrapper.vm.$data.operand1 = 4;
        wrapper.vm.$data.operand2 = 3;
        wrapper.vm.add();
        expect(wrapper.vm.$data.fibResult).toBe(5);
    })
    test('4 - 3 = 1', () => {
        const wrapper = mount(Calculator)
        wrapper.vm.$data.operand1 = 4;
        wrapper.vm.$data.operand2 = 3;
        wrapper.vm.substract();
        expect(wrapper.vm.$data.result).toBe(1);
    })
    test('4 / 3 = 1.33', () => {
        const wrapper = mount(Calculator)
        wrapper.vm.$data.operand1 = 4;
        wrapper.vm.$data.operand2 = 3;
        wrapper.vm.divide();
        expect(wrapper.vm.$data.result).toBe("1.33");
    })
    test('4 * 3 = 12', () => {
        const wrapper = mount(Calculator)
        wrapper.vm.$data.operand1 = 4;
        wrapper.vm.$data.operand2 = 3;
        wrapper.vm.multiply();
        expect(wrapper.vm.$data.result).toBe(12);
    })
    test('4 ^ 3 = 64', () => {
        const wrapper = mount(Calculator)
        wrapper.vm.$data.operand1 = 4;
        wrapper.vm.$data.operand2 = 3;
        wrapper.vm.exponentiation();
        expect(wrapper.vm.$data.result).toBe(64);
    })
    test('4 : 3 = 1', () => {
        const wrapper = mount(Calculator)
        wrapper.vm.$data.operand1 = 4;
        wrapper.vm.$data.operand2 = 3;
        wrapper.vm.integerDivision();
        expect(wrapper.vm.$data.result).toBe(1);
    })
})
