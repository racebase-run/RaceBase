<template>
<div>
  <div class="page-header">
    <h1> Donate </h1>
  </div>

  <div class="page-content">
    <p>If you'd like to support our cause, we've included a donation link below that lets you donate money through PayPal. Every donation makes it easier for us to maintain and add new features to RaceBase. Thank you for visiting!
    <form action="https://www.paypal.com/cgi-bin/webscr" class="donate-button" method="post" target="_blank">
    <input type="hidden" name="cmd" value="_donations">
    <input type="hidden" name="business" value="rbreeze@mail.csuchico.edu">
    <input type="hidden" name="lc" value="US">
    <input type="hidden" name="item_name" value="RaceBase">
    <input type="hidden" name="currency_code" value="USD">
    <input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_LG.gif:NonHosted">
    <input type="submit" class="btn btn-primary" name="submit" value="Donate" alt="PayPal - The safer, easier way to pay online!">
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
    </form>
  </div>
</div>
</template>