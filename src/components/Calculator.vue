<template>
  <div>
    <div class="calculator">
      <div class="display">
        <h3>Калькулятор</h3>
        <div class="inputBr">
          fib(<input v-model.number="operand1" />) fib(<input
            v-model.number="operand2"
          />) = {{ fibResult }}
        </div>
      </div>
      <div class="strange-message">
        <template v-if="result < 0">Получилось отрицательное число</template>
        <template v-else-if="result <= 100">Результат в первой сотне</template>
        <template v-else>Получилось слишком большое число</template>
      </div>
      <div v-show="error">Ошибка! {{ error }}</div>
      <div class="keyboard">
        <button
          v-for="operand in operands"
          v-bind:key="operand"
          v-bind:title="operand"
          v-bind:disabled="operand1 === '' || operand2 === ''"
          @click="calculate(operand)"
        >
          {{ operand }}
        </button>
      </div>
      <div class="logs">
        <div v-for="(log, id) in logs" v-bind:key="id">{{ log }}</div>
      </div>
    </div>
    <div class="keyboard">
      <h3>Клавиатура</h3>
      <div class="checkbox-keyboard">
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{ checked }}</label>
      </div>
      <div v-if="checked">
        <div>
          <button
            v-for="keyoper in keyopers"
            v-bind:key="keyoper"
            @click="Typein(keyoper)"
          >
            {{ keyoper }}
          </button>
          <button @click="Delin()">DEL</button>
          <form class="radio">
            <br />
            <input
              type="radio"
              id="one"
              value="Input1"
              v-model="picked"
              name="question"
            />
            <label for="one">Операнд 1</label>

            <input
              type="radio"
              id="two"
              value="Input2"
              v-model="picked"
              name="question"
            />
            <label for="two">Операнд 2</label>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export const oper1 = document.getElementById("oper1");
export default {
  data() {
    return {
      operands: ["+", "-", "/", "*", "^", ":"],
      operand1: 0,
      operand2: 0,
      result: 0,
      fibResult: 0,
      error: "",
      logs: {}, // здесь будем хранить наши логи
      keyopers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      picked: "Input1",
      del: "",
    };
  },
  name: "Calculator",
  props: {
    checked: Boolean,
  },
  methods: {
    fib(n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    },
    add() {
      this.result = this.operand1 + this.operand2;
      this.fibResult = this.fibb1 + this.fibb2;
    },
    substract() {
      this.result = this.operand1 - this.operand2;
      this.fibResult = this.fibb1 - this.fibb2;
    },
    divide() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.error = "Делить на 0 нельзя!";
      } else {
        this.result = Number(operand1 / operand2).toFixed(2);
        this.fibResult = Number(this.fibb1 / this.fibb2).toFixed(2);
      }
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
      this.fibResult = this.fibb1 * this.fibb2;
    },
    exponentiation() {
      this.result = Math.pow(this.operand1, this.operand2);
      this.fibResult = Math.pow(this.fibb1, this.fibb2);
    },
    integerDivision() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.error = "Делить на 0 нельзя!";
      } else {
        this.result = operand1 / operand2;
        this.result = Math.trunc(this.result);
        this.fibResult = this.fibb1 / this.fibb2;
        this.fibResult = Math.trunc(this.fibResult);
      }
    },
    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.substract();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.divide();
          break;
        case "^":
          this.exponentiation();
          break;
        case ":":
          this.integerDivision();
          break;
      }
      if (this.error === "") {
        const key = Date.now();
        const value = `${this.operand1}${operation}${this.operand2}=${this.result}`;
        this.$set(this.logs, key, value);
      }
    },
    Typein(operation) {
      if (this.picked == "Input1") {
        this.operand1 = Number(String(this.operand1) + String(operation));
      } else {
        this.operand2 = Number(String(this.operand2) + String(operation));
      }
    },
    Delin() {
      if (this.picked == "Input1") {
        this.operand1 = Number(String(this.operand1).slice(0, -1));
      } else {
        this.operand2 = Number(String(this.operand2).slice(0, -1));
      }
    },
  },
  computed: {
    fibb1() {
      return this.fib(this.operand1);
    },
    fibb2() {
      return this.fib(this.operand2);
    },
  },
};
</script>

<style lang="scss">
.inputBr {
  margin-bottom: 20px;
}
input {
  margin-left: 10px;
  margin-right: 10px;
}
</style>