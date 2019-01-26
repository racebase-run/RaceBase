<style lang="less" scoped>

@import (reference) "~assets/less/colors.less";
@import (reference) "~assets/less/basics.less";

h1 {
  .name {
    font-weight: 400; 
    color: @bright-blue;
  }
  font-size: 35px;
  font-weight: 600;
}

h2 {
  font-size: 26px;
  font-weight: 500;
}

h3 {
  font-size: 23px;
  color: @bright-blue;
  font-weight: 500;
  text-align: left;
}

h4 {
  text-transform: uppercase;
  font-size: 14px;
  color: @label-grey;
  font-weight: 400;
}

.box {
  box-shadow: @shadow;
  border-radius: 7px;
  width: 100%;
  padding: 15px;
  margin-bottom: 25px;
}

.log-entry {
  box-shadow: @shadow;
  border-radius: 7px;

  .day {
    text-align: right;
    color: @medium-grey;
    text-transform: uppercase;
    font-size: 20px;
  }

  label {
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 500;
    display: inline-block;
    margin-bottom: 0;
    text-align: right;
  }

  input {
    border: none;
    vertical-align: middle;
  }

  input, input::placeholder {
    color: @bright-blue;
    font-size: 23px;
    font-weight: 500;
  }

  .sliders  {

    h4 {
      color: black;
    }

    .numbers {
      font-size: 18px;
      font-weight: 500;

      .col {
        text-align: center;
      }

      .one {
        color: @pink;
      }

      .two {
        color: @orange;
      }

      .three {
        color: @green;
      }

      .four {
        color: @bright-blue;
      }

      .five {
        color: @purple;
      }
    }

    .slider {
      display: block;
      width: 95%;
      margin: 0 auto;
      background: @light-grey + #111;
      border-radius: 20px;
      height: 7px;
    }

    .slider::-webkit-slider-thumb, .slider::-moz-range-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 100px;
      background: @bright-blue;
      border: none;
      cursor: pointer;
    }

  }

  .weights {

    th {
      color: @label-grey;
      text-transform: uppercase;
      font-weight: 400; 
      font-size: 15px;
      text-align: center;
    }

    td {
      padding: 7px;
      color: @bright-blue;
      font-weight: 500;
      text-align: center;

      input, input::placeholder {
        font-size: 20px;
        text-align: center;
      }
    }

    td.x {
      color: @label-grey;
    }

    td.exercise {
      color: black;
      font-weight: 500;
      text-align: right; 
      text-transform: uppercase;
    }
  }

  .bottom {
    .btn {
      position: absolute;
      right: 15px;
      text-transform: uppercase;
      font-size: 15px;
      font-weight: 500;
      padding: 4px 7px;
    }
  }
}

.trends {
  font-size: 17px;
  color: @medium-grey;

  .stat {
    background: @bright-blue;
    color: white;
    border-radius: 5px;
    padding: 2px 6px;
    box-shadow: @shadow;
    margin-right: 10px;
  }

  .stat-down {
    background: @pink;
  }

  .stat-up {
    background: @green;
  }

  .row {
    margin: 10px;
  }
}

.streaks, .schedule {
  h2 {
    text-transform: uppercase;
    font-size: 21px;
    font-weight: 400;
  }

  .num {
    color: @bright-blue;
  }

  .data {
    text-align: right;
    font-weight: 500;
    font-size: 21px;
    color: @medium-grey;
  }
}

.schedule {
  text-align: center;

  .day {
    text-align: left;
  }

  .reps {
    font-size: 21px;
    font-weight: 500;
    color: @label-grey;
  }
  .recovery {
    color: @medium-grey;
    text-transform: uppercase;
    font-weight: 400; 
    font-size: 16px;
  }

  .green {
    color: @green;
  }

  .workout {
    font-size: 19px;
    font-weight: 500;
    .num {
      font-weight: 600;
    }
    .box {
      height: 100%;
      margin-bottom: 0px;
    }
  }
}

</style>
<template>
  <div class="mx-auto w-md-100 mx-md-0 pl-md-5 container">
    <div class="row">
      <h1 class="mt-3 col"> 
        <span class="name">John's</span>
        Training Log
      </h1>
      <div class="col d-flex align-items-center justify-content-end">
        <div class="btn btn-primary">Monthly View</div>
      </div>
    </div>

    <div class="row mt-4 mb-5">

      <div class="col-md-8">
        <h4>Log Entry</h4>

        <form class="log-entry p-4">
          <div class="row">
            <h2 class="col"> January 22 2019 </h2>
            <div class="col day">
              Tues
            </div>
          </div>

          <div class="run row mt-4">

            <div class="col-md row align-items-center">
              <label class="col-md-5"> Dist </label>
              <input type="text" placeholder="0.0" class="form-control col-md-7"/>
            </div>

            <div class="col-md row align-items-center">
              <label class="col-md-5"> Time </label>
              <input type="text" placeholder="0:00" class="form-control col-md-7"/>
            </div>

            <div class="col-md row align-items-center">
              <label class="col-md-5"> Pace </label>
              <input type="text" placeholder="0:00" class="form-control col-md-7"/>
            </div>

            <div class="col-md row align-items-center">
              <label class="col-md-5"> Elev </label>
              <input type="text" placeholder="0" class="form-control col-md-7"/>
            </div>

          </div>

          <div class="sliders row mt-3">
            <div class="col">
              <h4 class="mb-3"> Difficulty </h4>
              <input type="range" min="1" max="5" step="1" class="slider mb-2">
              <div class="numbers row">
                <div class="col one"> 1 </div>
                <div class="col two"> 2 </div>
                <div class="col three"> 3 </div>
                <div class="col four"> 4 </div>
                <div class="col five"> 5 </div>
              </div>
            </div>
            <div class="col">
              <h4 class="mb-3"> Feel </h4>
              <input type="range" min="1" max="5" step="1" class="slider mb-2">
              <div class="numbers row">
                <div class="col one"> 1 </div>
                <div class="col two"> 2 </div>
                <div class="col three"> 3 </div>
                <div class="col four"> 4 </div>
                <div class="col five"> 5 </div>
              </div>
            </div>
          </div>

          <h3 class="mt-4"> Weights </h3>

          <div class="weights row">

            <div class="col-md">
              <table> 
                <thead> 
                  <th> </th>
                  <th> Sets </th>
                  <th> </th>
                  <th> Reps </th>
                </thead>

                <tbody> 
                  <tr>
                    <td class="exercise"> Back Squat </td>
                    <td>
                      <input type="text" placeholder="0" class="form-control">
                    </td>
                    <td class="x"> x </td>
                    <td>
                      <input type="text" placeholder="0" class="form-control">
                    </td>
                  </tr>
                  <tr>
                    <td class="exercise"> Forward Lunge </td>
                    <td>
                      <input type="text" placeholder="0" class="form-control">
                    </td>
                    <td class="x"> x </td>
                    <td>
                      <input type="text" placeholder="0" class="form-control">
                    </td>
                  </tr>
                  <tr>
                    <td class="exercise"> Pull Up </td>
                    <td>
                      <input type="text" placeholder="0" class="form-control">
                    </td>
                    <td class="x"> x </td>
                    <td>
                      <input type="text" placeholder="0" class="form-control">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="col-md">
              <table> 
                <thead> 
                  <th> </th>
                  <th> Sets </th>
                  <th> </th>
                  <th> Reps </th>
                </thead>

                <tbody> 
                  <tr>
                    <td class="exercise"> Bent Over Row </td>
                    <td>
                      <input type="text" placeholder="0" class="form-control">
                    </td>
                    <td class="x"> x </td>
                    <td>
                      <input type="text" placeholder="0" class="form-control">
                    </td>
                  </tr>
                  <tr>
                    <td class="exercise"> Runner's Touch </td>
                    <td>
                      <input type="text" placeholder="0" class="form-control">
                    </td>
                    <td class="x"> x </td>
                    <td>
                      <input type="text" placeholder="0" class="form-control">
                    </td>
                  </tr>
                  <tr>
                    <td class="exercise"> Push Ups </td>
                    <td>
                      <input type="text" placeholder="0" class="form-control">
                    </td>
                    <td class="x"> x </td>
                    <td>
                      <input type="text" placeholder="0" class="form-control">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          <h3 class="mt-4"> Other </h3>

          <div class="other row">

            <div class="col-md row align-items-center">
              <label class="col-md-5"> Sleep </label>
              <input type="text" placeholder="0:00" class="form-control col-md-7"/>
            </div>

            <div class="col-md row align-items-center">
              <label class="col-md-5"> RHR </label>
              <input type="text" placeholder="0" class="form-control col-md-7"/>
            </div>

            <div class="col-md row align-items-center">
              <label class="mr-3"> Core </label>
              <input type="checkbox"/>
            </div>

            <div class="col-md row align-items-center">
              <label class="mr-3"> Stretching </label>
              <input type="checkbox"/>
            </div>

          </div>

          <div class="bottom row mt-3 mb-2">
            <div class="col">
              Add Note <fa icon="pencil-alt"></fa>
            </div>
            <div class="col">
              <div class="btn btn-primary"> Done </div>
            </div>
          </div>

        </form>
      </div>

      <div class="col-md-4">
        <h4> Trends </h4>
        <div class="trends box">
          <div class="row"> <span class="stat"> 8:10 hr </span> 5 day avg sleep</div>
          <div class="row"> <span class="stat stat-down"> 8.3% </span> less sleep than usual </div>
          <div class="row"> <span class="stat"> 49 bpm </span> 5 day avg RHR </div>
        </div>

        <h4> Streaks </h4>
        <div class="streaks box">

          <div class="row">
            <h2 class="col"> Core </h2>
            <div class="data col"><span class="num">7</span> day</div>
          </div>
          <div class="row">
            <h2 class="col"> Stretching </h2>
            <div class="data col"><span class="num">10</span> day</div>
          </div>

        </div>

        <h4> Schedule </h4>
        <div class="schedule box">

          <div class="day row mb-2">
            <h2 class="col"> Today </h2>
            <div class="data col"><span class="num">10.0</span> mi</div>
          </div>

          <div class="workout row no-gutters d-flex align-items-center mb-3">
            <div class="col-md-4 reps"><span class="num">6</span> x</div>
            <div class="col-md-8 box p-2">
              <div class="row">
                <div class="col num">800m</div>
                <div class="col">8k-10k</div>
              </div>
              <div class="recovery">2:00 standing</div>
            </div>
          </div>

          <div class="workout row mb-3">
            <div class="col-md-4 recovery">Rest</div>
            <div class="col-md-8 recovery green">3:30 standing</div>
          </div>

          <div class="workout row no-gutters d-flex align-items-center mb-3">
            <div class="col-md-4 reps"><span class="num">4</span> x</div>
            <div class="col-md-8 box p-2">
              <div class="row">
                <div class="col num">200m</div>
                <div class="col">1500m</div>
              </div>
              <div class="recovery">200m jog</div>
            </div>
          </div>

          <div class="row">
            <h2 class="col"> Tomorrow </h2>
            <div class="data col"><span class="num">11.0</span> mi</div>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>