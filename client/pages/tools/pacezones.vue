<style lang="less" scoped>

th {
  td {
    font-weight: 500; 
    border-right: 1px solid black; 
    text-align: center;
    padding: 0px 10px;
  }
}
</style>
<template>
<div class="mx-auto w-95 mt-4">
  <h1> Pace Zone Calculator <fa icon="calculator"></fa></h1>
  <p> Enter your PR for any distance below: </p>
  <div class="container my-4">
    <div class="row">
      <input type="text" placeholder="Finishing Time" class="col mr-3 form-control"/>
      <input type="number" placeholder="Distance" class="col form-control"> 
    </div>
  </div>
  <table>
    <thead> 
      <th> 
        <td> Recovery / Regen Pace </td>
        <td> Aerobic Pace </td>
        <td> Marathon Pace </td>
        <td> Long Tempo Pace </td>
        <td> Lactate Threshold (LT / ~10 mi RP ) </td>
        <td> Critical Velocity (CV / 10k RP) </td>
        <td> 5k RP </td>
        <td> 3k RP </td>
        <td> 1500m RP </td>
      </th>
    </thead>
    <tbody>
      <tr> 
        <td> </td>
        <td>  </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
    </tbody>
  </table>

</div>
</template>