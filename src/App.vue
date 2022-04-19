<template>
  <Header :thisYear="thisYear"/>

  <div class="btns-container">
    <Button
        v-for="quarter in Quarters"
        :quarter="quarter"
        :activeQuarter="activeQuarter"
        :handler="getDaysInQuarter"/>
  </div>

  <Result :days="daysInQuarter" :quarter="activeQuarter"/>
</template>


<script lang="ts">
import {IMonthsIncludesInQuarter, Quarters} from "./models/app.model";
import {monthsInQuarter, monthsInYear, thisYear} from "./constants/app.constants";
import {defineComponent} from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      Quarters,
      thisYear,
      daysInQuarter: 0 as number,
      activeQuarter: null as Quarters | null,
      monthsIncludesInQuarter: {} as IMonthsIncludesInQuarter,
    };
  },
  methods: {
    addToArray(obj: IMonthsIncludesInQuarter, name: number, data: number) {
      (obj[name] ?? (obj[name] = [])).push(data);
    },
    smashMonthsToQuarters(): void {
      let utilityCount = 0;
      let quarterCount = 1;

      for (let i = 1; i <= monthsInYear; i++) {
        if (utilityCount < monthsInQuarter) {
          this.addToArray(this.monthsIncludesInQuarter, quarterCount, i);

          utilityCount++;
        } else {
          utilityCount = 1;
          quarterCount++;

          this.addToArray(this.monthsIncludesInQuarter, quarterCount, i);
        }
      }
    },
    getSumDaysInQuarter(months: number[]) {
      return months.reduce((acc, curr) => {
        return acc + new Date(thisYear, curr, 0).getDate();
      }, 0);
    },
    getDaysInQuarter(quarter: string) {
      switch (quarter) {
        case Quarters.Q1:
          this.daysInQuarter = this.getSumDaysInQuarter(this.monthsIncludesInQuarter[1]);
          this.activeQuarter = Quarters.Q1;
          return;
        case Quarters.Q2:
          this.activeQuarter = Quarters.Q2;
          this.daysInQuarter = this.getSumDaysInQuarter(this.monthsIncludesInQuarter[2]);
          return;
        case Quarters.Q3:
          this.activeQuarter = Quarters.Q3;
          this.daysInQuarter = this.getSumDaysInQuarter(this.monthsIncludesInQuarter[3]);
          return;
        case Quarters.Q4:
          this.activeQuarter = Quarters.Q4;
          this.daysInQuarter = this.getSumDaysInQuarter(this.monthsIncludesInQuarter[4]);
          return;
        default:
          return;
      }
    }
  },
  mounted() {
    this.smashMonthsToQuarters();
  },
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 960px;
  padding: 0 20px;
}

.btns-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}
</style>