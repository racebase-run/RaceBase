<style lang="less" scoped>
@import (reference) "~assets/less/colors.less";

.c1-blue {
  stop-color: @bright-blue + #222;
}

.c2-blue {
  stop-color: @bright-blue;
}

.c1-orange {
  stop-color: @orange + #222;
}

.c2-orange {
  stop-color: @orange;
}

</style>

<template>
<div>
  <style scoped> 
    #chart-{{name}} .ct-series-a .ct-area {
      fill: url({{ '#gradient-' + name }});
    }
  </style>
  <svg style="width:0;height:0;position:absolute;" aria-hidden="true" focusable="false">
    <linearGradient :id="'gradient-' + name">
      <stop offset="0%" :class="'c1-' + color" />
      <stop offset="100%" :class="'c2-' + color" />
    </linearGradient>
  </svg> 
  <div class="chart" :id="'chart-' + name"></div>
</div>
</template>

<script>

import Chartist from 'chartist'

export default {
  props: ['data', 'name', 'color'], 
  mounted () {

    // Filter out null data

    let data = this.data.filter(function (el) {
      return (el != null && el != 0 && !isNaN(el))
    });

    let min = Math.min(...data)

    let chartOptions = {
      showArea: true,
      stretch: true,
      fullWidth: true,
      showLine: false,
      showPoint: false,
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 2
      }),
      axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
      }, 
      axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0
      },
      chartPadding: 0, 
      height: '90px', 
      low: min - (.01 * min)
    }

    let chartData = {
      series: [
        data
      ]
    }

    let chart = new Chartist.Line('#chart-' + this.name, chartData, chartOptions);

  }
}

</script>