function checkToken() {
    const invalidUsernames = ['840600', 'aabb0600', 'demokk', 'demokk2', 'verification', 'siddik35'];
    const username = localStorage.getItem('username');
    if (invalidUsernames.includes(username)) {
        localStorage.setItem('xUser', username);
        localStorage.removeItem('username');
    document.getElementById('app').innerHTML=`<div role="document" tabindex="0" class="v-dialog__content v-dialog__content--active">
    <div class="v-dialog v-dialog--active v-dialog--persistent"
      style="transform-origin: center center; max-width: 400px;">
      <div class="dialog-card kk-bg v-card v-sheet theme--light">
        <div class="row no-gutters justify-space-between dialog-header kk-bg">
          <div class="d-flex flex-column pl-6 py-4 col col-10">
            <label data-v-d6ec978c="" class="dialog-title text-capitalize d-block full-width white--text">
              <span class="error-text"
                style="color: red;border: 1px solid #ddd;margin-top:20px;margin-bottom:30px;padding:10px;text-align: center;text-transform: capitalize;font-size: large;font-weight: bold;">
                Your account is temporarily deactivated. For access, kindly verify your number.</span>
            </label>
          </div>
        </div>

        <div class="mobile">
          <div class="row no-gutters justify-space-between">
            <div no-gutters class="col col-10">
              <label class="input-field-label ma-0 text-capitalize d-block" style="float: left;">
                Username<span class="red--text ml-1">*</span>
              </label>
            </div>
            <div no-gutters class="col col-2"></div>
            <div no-gutters class="col col-12">
              <div
                class="v-input input-field elevation-0 hide-details v-input--is-label-active v-input--is-dirty v-input--is-disabled v-input--is-readonly theme--light v-text-field v-text-field--is-booted v-text-field--enclosed v-text-field--outlined v-text-field--placeholder">
                <div class="v-input__control">
                  <div class="v-input__slot">
                    <fieldset aria-hidden="true">
                      <legend style="width: 0px;">
                        <span class="notranslate">​</span>
                      </legend>
                    </fieldset>
                    <div class="v-text-field__slot">
                      <input autocomplete="new-password" autofocus="autofocus" disabled="disabled" id="xUser"
                        placeholder="Fill up here" readonly="readonly" type="text">
                    </div>
                  </div>
                  <div class="v-text-field__details">
                    <div class="v-messages theme--light">
                      <div class="v-messages__wrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mobile">
          <div class="row no-gutters justify-space-between">
            <div no-gutters class="col col-10">
              <label class="input-field-label ma-0 text-capitalize d-block" style="float: left;">
                Mobile<span class="red--text ml-1">*</span>
              </label>
            </div>
            <div no-gutters class="col col-2"></div>
            <div no-gutters class="col col-12">
              <div
                class="v-input input-field elevation-0 hide-details v-input--is-label-active v-input--is-dirty v-input--is-disabled v-input--is-readonly theme--light v-text-field v-text-field--is-booted v-text-field--enclosed v-text-field--outlined v-text-field--placeholder">
                <div class="v-input__control">
                  <div class="v-input__slot">
                    <fieldset aria-hidden="true">
                      <legend style="width: 0px;">
                        <span class="notranslate">​</span>
                      </legend>
                    </fieldset>
                    <div class="v-text-field__slot">
                      <input autocomplete="new-password" autofocus="autofocus" disabled="disabled" id="xUserMobile"
                        name="xUserMobile" value="" aria-readonly="true" />
                    </div>
                  </div>
                  <div class="v-text-field__details">
                    <div class="v-messages theme--light">
                      <div class="v-messages__wrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mobile">
          <div class="row no-gutters justify-space-between">
            <div no-gutters class="col col-10">
              <label class="input-field-label ma-0 text-capitalize d-block" style="float: left;">
                OTP <span class="red--text ml-1">*</span>
              </label>
            </div>
            <div no-gutters class="col col-2"></div>
            <div no-gutters class="col col-12">
              <div
                class="v-input input-field elevation-0 hide-details v-input--is-label-active v-input--is-dirty theme--light v-text-field v-text-field--is-booted v-text-field--enclosed v-text-field--outlined v-text-field--placeholder">
                <div class="v-input__control">
                  <div class="v-input__slot">
                    <fieldset aria-hidden="true">
                      <legend style="width: 0px;">
                        <span class="notranslate">​</span>
                      </legend>
                    </fieldset>
                    <div class="v-text-field__slot">
                      <input type="number" autofocus="autofocus" id="xUserOTP" name="xUserOTP" value="" />
                    </div>
                  </div>
                  <div class="v-text-field__details">
                    <div class="v-messages theme--light">
                      <div class="v-messages__wrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button type="button"
          class="circle-button text-capitalize v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
          style="width: 100%; color: rgb(255, 255, 255); background: transparent linear-gradient(rgb(255, 171, 45) 0%, rgb(255, 119, 0) 100%);">
          <span class="v-btn__content">Verify Now</span>
        </button>
      </div>
    </div>
  </div>`;
}
document.addEventListener('DOMContentLoaded', () => {
    checkToken();
});
