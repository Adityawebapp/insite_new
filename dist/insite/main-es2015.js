(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header ></app-header> -->\r\n<router-outlet></router-outlet>\r\n<!-- <app-footer></app-footer> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-12 col-lg-12 col-sm-12 col-md-12 col-xs-12\">\r\n      <div class=\"show-footer\">\r\n        <button class=\"toggle-footer\" id=\"scrollToBottom\"><i class=\"fa fa-angle-double-up\"></i></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<footer class=\"bottom section-padding\" id=\"footish\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-3 col-lg-3 col-sm-6 col-md-3 col-xs-12\">\r\n        <div class=\"bottom-list\">\r\n          <h6>GET TO KNOW US</h6>\r\n          <ul>\r\n            <li>\r\n              <!-- <a href=\"https://api.insite.city/admin_panel/settings_management/about_us/\" target=\"_blank\" title=\"\">About Us</a> -->\r\n              <a routerLink=\"/about-us\">About Us</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"\" data-target=\"#contact-modal\" data-toggle=\"modal\">Contact Us</a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"/disclaimer\" >Disclaimer</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-3 col-lg-3 col-sm-6 col-md-3 col-xs-12\">\r\n        <div class=\"bottom-list\">\r\n          <h6>LEGAL</h6>\r\n          <ul>\r\n            <li>\r\n              <!-- <a href=\"https://api.insite.city/admin_panel/settings_management/privacy_policy/\" target=\"_blank\" title=\"\">Legal Policy</a> -->\r\n              <a routerLink=\"/privacy-policy\">Privacy Policy</a>\r\n            </li>\r\n            <li>\r\n              <!-- <a href=\"https://api.insite.city/admin_panel/settings_management/terms_and_condition/\" target=\"_blank\" title=\"\">Terms & Conditions</a> -->\r\n              <a routerLink=\"/terms-&-conditions\" title=\"\">Terms & Conditions</a>\r\n            </li>\r\n            <!-- <li>\r\n              <a title=\"\" data-target=\"#send-feedback\" href=\"JavaScript:void(0);\">Send Feedback</a>\r\n            </li> -->\r\n          </ul>\r\n        </div>\r\n        <!--bottom-list end-->\r\n      </div>\r\n      <div class=\"col-xl-3 col-lg-3 col-sm-6 col-md-3 col-xs-12\">\r\n        <div class=\"bottom-list\">\r\n          <h6>CONNECT WITH US</h6>\r\n          <div class=\"ft-social\">\r\n            <a href=\"https://www.facebook.com/INSITE_theapp-108944610708510\" target=\"_blank\">\r\n              <i class=\"fa fa-facebook\"></i>\r\n            </a>\r\n            <a href=\"https://www.twitter.com/insite_theapp/\" target=\"_blank\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n            </a>\r\n            <a href=\"https://www.instagram.com/insite_theapp/\" target=\"_blank\">\r\n              <i class=\"fa fa-instagram\"></i>\r\n            </a>\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-google\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-3 col-lg-3 col-sm-6 col-md-3 col-xs-12\">\r\n        <div class=\"bottom-list\">\r\n          <h6>DOWNLOAD APP</h6>\r\n          <div class=\"app-link\">\r\n            <ul>\r\n              <li>\r\n                <a href=\"#\">\r\n                  <img src=\"assets/images/button-google-play.png\">\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\">\r\n                  <img src=\"assets/images/button-app-store.png\">\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n\r\n<!-----------------------OTP Modals Start --------------------->\r\n<div id=\"otp\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"text-center\"><strong>ENTER OTP</strong></h4>\r\n      </div>\r\n      <div class=\"modal-body my-otp-body otp\">\r\n        <ul>\r\n          <li class=\"otp-labl\"><input class=\"otp1\" type=\"text\" name=\"otp1\" maxlength=\"1\" placeholder=\"0\"></li>\r\n          <li class=\"otp-labl\"><input class=\"otp1\" type=\"text\" name=\"otp2\" maxlength=\"1\" placeholder=\"0\"></li>\r\n          <li class=\"otp-labl\"><input class=\"otp1\" type=\"text\" name=\"otp3\" maxlength=\"1\" placeholder=\"0\"></li>\r\n          <li class=\"otp-labl\"><input class=\"otp1\" type=\"text\" name=\"otp4\" maxlength=\"1\" placeholder=\"0\"></li>\r\n        </ul>\r\n        <div class=\"resend-otp\">\r\n          <a href=\"#\">Resend OTP?</a><span id=\"demo\"></span>\r\n        </div>\r\n        <button class=\"btn btn-simple btn-block\" data-dismiss=\"modal\" data-toggle=\"modal\"\r\n          data-target=\"#reset-password\">SUBMIT</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div id=\"contact-modal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"text-center\"><strong>CONTACT US</strong></h4>\r\n      </div>\r\n      <div class=\"modal-body my-otp-body otp\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6\">\r\n            <div class=\"form-group\" style=\"color: black;\">\r\n              <label class=\"d-block\" style>Christina Dragoi <br> Werastr. 6 <br> 70182 Stuttgart <br> Germany</label>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6\">\r\n            <div class=\"form-group mb-1\">\r\n              <label class=\"d-block\" style=\"color: black;\">Mobile Number</label>\r\n              <a href=\"tel:+49 176 30749384\">+49 176 307 49 384</a>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"d-block\" style=\"color: black;\">Email:</label>\r\n              <a href=\"mailto:info@insite.media\">info@insite.media</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Reset Password -->\r\n<div id=\"reset-password\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"text-center\"><strong>CHANGE PASSWORD</strong></h4>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\">\r\n        <div class=\"form-group\">\r\n          <input type=\"password\" name=\"password\" placeholder=\"Enter new password\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"password\" name=\"conf-password\" placeholder=\"Confirm new password\" class=\"form-control\">\r\n        </div>\r\n        <button class=\"btn btn-simple btn-block\" data-dismiss=\"modal\">SAVE</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Guest Otp -->\r\n<div id=\"guest-otp\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"text-center\"><strong>ENTER OTP</strong></h4>\r\n      </div>\r\n      <div class=\"modal-body my-otp-body otp\">\r\n        <ul>\r\n          <li class=\"otp-labl\"><input [(ngModel)]=\"otpverification.otp1\" class=\"otp1\" type=\"text\" name=\"otp\"\r\n              maxlength=\"1\" placeholder=\"0\"></li>\r\n          <li class=\"otp-labl\"><input [(ngModel)]=\"otpverification.otp2\" class=\"otp1\" type=\"text\" name=\"otp\"\r\n              maxlength=\"1\" placeholder=\"0\"></li>\r\n          <li class=\"otp-labl\"><input [(ngModel)]=\"otpverification.otp3\" class=\"otp1\" type=\"text\" name=\"otp\"\r\n              maxlength=\"1\" placeholder=\"0\"></li>\r\n          <li class=\"otp-labl\"><input [(ngModel)]=\"otpverification.otp4\" class=\"otp1\" type=\"text\" name=\"otp\"\r\n              maxlength=\"1\" placeholder=\"0\"></li>\r\n        </ul>\r\n        <div class=\"resend-otp\">\r\n          <a (click)=\"resend_otp()\" href=\"#\">Resend OTP?</a>\r\n          <!--<span id=\"guest-demo\"></span>-->\r\n          <!-- <button (click)=\"resend_otp()\" class=\"btn btn-simple btn-block\" data-toggle=\"modal\">Resend OTP?</button> -->\r\n        </div>\r\n        <button (click)=\"api_otp_verification()\" class=\"btn btn-simple btn-block\" data-toggle=\"modal\">SUBMIT</button>\r\n        <span style=\"color:red;\">{{errormessage}}</span>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-----------------------OTP Modals Start --------------------->\r\n\r\n<!--- Login Modal------>\r\n<div id=\"login\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" id=\"loginBtn\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h3 class=\"text-center\">LOGIN</h3>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <form [formGroup]=\"loginForm\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" name=\"username\" formControlName=\"email\" placeholder=\"Enter Username/Email ID\"\r\n                  class=\"form-control\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Enter password\"\r\n                  class=\"form-control\">\r\n              </div>\r\n            <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-simple btn-block\">LOGIN</button>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 alexa\">\r\n            <a href=\"JavaScript:void(0);\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#forgot-password\">Forgot\r\n              Password?</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <!-- <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-simple btn-block\">LOGIN</button> -->\r\n            <p>Or</p>\r\n            <!-- <button class=\"btn btn-block btn-third\" data-toggle=\"modal\" (click)=\"load_guest_number()\"\r\n              data-dismiss=\"modal\">CONTINUE AS GUEST</button> -->\r\n            <p class=\"body-para\">Not registered yet? <span style=\"cursor: pointer;color: #03649e;\"\r\n                (click)=\"load_guest_number()\">Create a new account</span></p>\r\n            <p class=\"body-para\">Connect with Google</p>\r\n            <ul>\r\n              <!-- <li>\r\n                <a><img style=\"width: 30px;height: 30px;\" src=\"assets/images/icon/facebook_color.png\"\r\n                    (click)=\"signInWithFB()\"></a>\r\n              </li> -->\r\n              <li>\r\n                <a><img style=\"width: 32px;height: 32px;\" src=\"assets/images/icon/google_color.png\"\r\n                    (click)=\"signInWithGoogle()\"></a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Forget password -->\r\n<div id=\"forgot-password\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h3 class=\"text-center\">ENTER EMAIL ID</h3>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <input id=\"forgotEmail\" type=\"email\" placeholder=\"Enter email\" class=\"form-control\">\r\n          </div>\r\n          <button (click)=\"forgotPass()\" class=\"btn btn-simple btn-block\" data-toggle=\"modal\">SEND LINK</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div id=\"guest-number\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"text-center\"><strong>ENTER YOUR EMAIL</strong></h4>\r\n      </div>\r\n      <div class=\"modal-body my-otp-body otp\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <input id=\"email\" type=\"email\" placeholder=\"Enter email\" class=\"form-control\">\r\n          </div>\r\n        </form>\r\n        <button class=\"btn btn-simple btn-block\" (click)=\"signUp()\">SUBMIT</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- guest number -->\r\n<!-- <div id=\"guest-number\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <form [formGroup]=\"gustregister\" (ngSubmit)=\"guest_register()\">\r\n        <div class=\"modal-header my-modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h3 class=\"text-center\">ENTER YOUR EMAIL</h3>\r\n        </div>\r\n        <div class=\"modal-body my-modal-body\">\r\n          <div class=\"form-group flex-me\"> -->\r\n<!-- <select formControlName=\"country_code\" style=\"width: 40%;\" class=\"select2\"> -->\r\n<!-- <option value=\"0\" selected>Country Code</option> -->\r\n<!-- <option *ngFor=\"let c of country_code; let i = index\" [value]=\"country_code[i].code\">\r\n                {{country_code[i].country}} {{country_code[i].code}}\r\n              </option> -->\r\n<!-- </select> -->\r\n<!-- <input [(ngModel)]=\"gustregister.mobile_number\" type=\"text\" name=\"number\" placeholder=\"Enter your mobile number\" class=\"form-control\"> -->\r\n<!-- <input type=\"text\" formControlName=\"mobile_number\" name=\"number\" placeholder=\"Enter your mobile number\"\r\n              class=\"form-control\" minlength=\"8\" maxlength=\"15\"> -->\r\n<!-- <input type=\"email\" class=\"form-control\"> -->\r\n\r\n\r\n<!-- </div> -->\r\n<!-- <button (click)=\"guest_register()\" name=\"button\" class=\"btn btn-simple btn-block\">SEND OTP</button> -->\r\n<!-- <input type=\"submit\" class=\"btn btn-simple btn-block\" value=\"SEND OTP\"> -->\r\n<!-- <span  style=\"color:red;\">{{errormessage}}</span> -->\r\n<!-- <div style=\"color:red;\">\r\n            <div *ngIf=\"submitted\">\r\n              <span *ngIf=\"gustregister.get('mobile_number').errors?.required; else elseblock1\">Mobile no is\r\n                required</span>\r\n              <ng-template #elseblock1>\r\n                <span *ngIf=\"gustregister.get('mobile_number').errors?.pattern; else elseblock2\">Only numbers are\r\n                  required</span>\r\n                <ng-template #elseblock2>\r\n                  <span *ngIf=\"gustregister.get('mobile_number').errors?.minlength\">Mobile number is not valid</span>\r\n                </ng-template>\r\n              </ng-template>\r\n              <span *ngIf=\"gustregister.get('mobile_number').errors?.maxlength\">Mobile number is not valid</span>\r\n            </div>\r\n            <span>{{errormessage}}</span>\r\n          </div> -->\r\n<!-- </div>\r\n\r\n      </form> -->\r\n<!-- </div>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n<!-- location modal signup time map -->\r\n<div id=\"location\" class=\"modal fade\" role=\"dialog\" style=\"z-index: 10000000;\">\r\n  <div class=\"modal-dialog\">\r\n\r\n\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\" style=\"width: 100%;height: 300px;display: none;\" id=\"create_company_profile\">\r\n      </div>\r\n      <div class=\"modal-body\" style=\"width: 100%;height: 300px;\" id=\"map2\">\r\n      </div>\r\n\r\n\r\n      <div class=\"modal-footer my-modal-footer\">\r\n        <button class=\"btn btn-simple btn-block\" data-dismiss=\"modal\" (click)=\"GetAddressEvent()\">SELECT\r\n          LOCATION</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- Gps Modal -->\r\n<div id=\"gps\" class=\"modal fade\" role=\"dialog\" style=\"z-index: 10000000;\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body my-modal-location\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <img src=\"assets/images/icon/pin_sm.png\">\r\n        <p>To use this feature the access of the GPS is required.</p>\r\n        <div class=\"location-bttn\">\r\n          <button class=\"btn btn-simple\" data-target=\"#location\" data-dismiss=\"modal\" data-toggle=\"modal\">AGREE</button>\r\n          <button data-dismiss=\"modal\" class=\"btn btn-third\">DENY</button>\r\n        </div>\r\n      </div>\r\n      <!-- <span  style=\"color:red;\">{{errormessage}}</span> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div id=\"gpsforlogin\" class=\"modal fade\" role=\"dialog\" style=\"z-index: 10000000;\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body my-modal-location\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <img src=\"assets/images/icon/pin_sm.png\">\r\n        <p>To use this feature the access of the GPS is required.</p>\r\n        <div class=\"location-bttn\">\r\n          <button (click)=\"getCurrentLocationForLogin()\" class=\"btn btn-simple\" data-dismiss=\"modal\"\r\n            data-toggle=\"modal\">AGREE</button>\r\n          <button (click)=\"deniedLocation()\" class=\"btn btn-third\">DENY</button>\r\n        </div>\r\n      </div>\r\n      <!-- <span  style=\"color:red;\">{{errormessage}}</span> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- Involvement Location Modal -->\r\n<!-- <div id=\"involvement-location\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\" style=\"width: 100%;height: 300px;\" id=\"create_post_map\">\r\n            </div>\r\n            <div class=\"modal-footer my-modal-footer\">\r\n                <button class=\"btn btn-simple btn-block\" data-dismiss=\"modal\" data-toggle=\"modal\"\r\n                    data-target=\"#involvement\">SELECT LOCATION</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n\r\n\r\n\r\n<!-- create profile -->\r\n<div id=\"create-profile\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h3 class=\"text-center\">CONTINUE AS</h3>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\">\r\n        <button (click)=\"open_create_company_profile_page1()\" class=\"btn btn-simple btn-block\" data-toggle=\"modal\">A\r\n          COMPANY</button>\r\n        <div class=\"guest-desc\">\r\n          <!-- <p>(This is for agencies, companies, photo studio, teaching institution etc.)</p> -->\r\n        </div>\r\n        <button (click)=\"open_create_personal_profile_page1()\" id=\"individualModalBtn\" class=\"btn btn-simple btn-block\" data-toggle=\"modal\">AN\r\n          INDIVIDUAL</button>\r\n        <div class=\"guest-desc\">\r\n          <!-- <p>(This is for individual users like photographers, manufacturers, architect etc.)</p> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- company profile page 1 -->\r\n<div id=\"company-profile-page1\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h3 class=\"text-center\">CREATE COMPANY PROFILE</h3>\r\n      </div>\r\n      <form [formGroup]=\"create_company_profile_page1\" (ngSubmit)=\"submit_create_company_profile_page1()\">\r\n        <div class=\"modal-body my-modal-body\">\r\n          <div class=\"form-group\">\r\n            <input formControlName=\"username\" type=\"text\"  placeholder=\"Enter username\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input formControlName=\"company_name\" type=\"text\" name=\"company-name\" placeholder=\"Enter company name\"\r\n              class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input formControlName=\"email\" type=\"email\" name=\"email\"  placeholder=\"Enter Email ID\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input formControlName=\"password\" type=\"password\" name=\"password\" placeholder=\"Create password\"\r\n              class=\"form-control\">\r\n          </div>\r\n<!-- \r\n          <div class=\"form-group\">\r\n            <input formControlName=\"description\" type=\"text\"  name=\"description\"\r\n              placeholder=\"Enter Description\" class=\"form-control\">\r\n          </div> -->\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <input formControlName=\"confirm_password\" type=\"password\"  name=\"confirm-password\"\r\n              placeholder=\"Confirm password\" class=\"form-control\">\r\n          </div>\r\n\r\n          \r\n\r\n          \r\n          <button type=\"submit\" class=\"btn btn-simple btn-block\" data-toggle=\"modal\">Next</button>\r\n          <!-- data-target=\"#company-profile-page2\" data-dismiss=\"modal\"  -->\r\n          <div style=\"color: red\">\r\n            <span>{{errormessage}}</span>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div id=\"company-profile-page2\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <span><a href=\"#company-profile-page1\" data-toggle=\"modal\" data-dismiss=\"modal\">\r\n            <img src=\"assets/images/icon/left_arrow.png\">Back</a></span>\r\n        <h3 class=\"text-center\">CREATE COMPANY PROFILE</h3>\r\n      </div>\r\n      <form [formGroup]=\"create_company_profile_page2\" (ngSubmit)=\"submit_create_company_profile_page3($event)\">\r\n        <div class=\"modal-body my-modal-body\">\r\n          <div class=\"form-group\">\r\n            <input formControlName=\"address_line1\" type=\"text\" name=\"address\" placeholder=\"Enter/Select Address\"\r\n              class=\"form-control\" id=\"inp-relate\">\r\n            <button data-toggle=\"modal\" (click)=\"checkGPSStatus()\" class=\"btn-in\"><i\r\n                class=\"fa fa-map-marker\"></i></button>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <input formControlName=\"address_line2\" type=\"text\" name=\"address-two\" placeholder=\"Enter address line 1\"\r\n              class=\"form-control\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <input formControlName=\"address_line3\" type=\"text\" name=\"address-three\" placeholder=\"Enter address line 2\"\r\n              class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\" >\r\n            <textarea formControlName=\"description\" type=\"text\" name=\"description\" placeholder=\"Add description\"\r\n              class=\"form-control\" style=\"height: 6rem;\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <select formControlName=\"bussiness_area\" (click)=\"getemp()\" id='seloption' class=\"form-control\">\r\n              <option hidden>Select Business Area</option>\r\n              <!-- <option value=\"\" disabled>Select Business Area</option> -->\r\n              <!-- <option [ngValue]=\"null\" selected>Selec</option> -->\r\n              <option *ngFor=\"let b of bussiness_area; let i = index\" [value]=\"bussiness_area[i].id\">\r\n                {{bussiness_area[i].type}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div *ngIf=\"emp == 1\" class=\"form-group flex-me\">\r\n            <input type=\"checkbox\" name=\"accept\" (change)=\"moreEmp($event)\"> <span> Need more than 5 Employee Accounts?\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group \">\r\n            <select formControlName=\"year_of_foundation\" class=\"form-control\">\r\n              <option hidden>Year Of Founding</option>\r\n              <!-- <option value=\"\" disabled>Select Business Area</option> -->\r\n              <!-- <option [ngValue]=\"null\" selected>Selec</option> -->\r\n              <option *ngFor=\"let y of allYears; let i = index\" [value]=\"allYears[i]\">\r\n                {{allYears[i]}}\r\n              </option>\r\n            </select>\r\n            <!-- <input formControlName=\"year_of_foundation\" placeholder=\"Year Of Founding\" id=\"year_of_foundation\" class=\"form-control\" type=\"number\"> -->\r\n            <!-- <button class=\"btn-in \"><i class=\"fa fa-calendar \"></i></button> -->\r\n          </div>\r\n          <label class=\"beech-me\" for=\"picCompany\">\r\n\r\n            <div class=\"prev-me-img\">\r\n              <img id=\"previewCompanyImg\" src=\"/assets/images/place_image.png\" alt=\" \">\r\n            </div>\r\n          </label>\r\n\r\n          <div class=\"form-group add-pic \">\r\n            <!-- <img src=\" \" id=\"imagefile \" class=\"d-none \" style=\"border-radius:100%;width:70px;height: 70px; \" /> -->\r\n            <input type=\"file\" id=\"picCompany\" class=\"hide-me\" formControlName=\"picture\"\r\n              (change)=\"CheckUploadedImage2($event)\">\r\n            <label for=\"picCompany\" class=\"btn btn-simple btn-block\">Add picture</label>\r\n          </div>\r\n          <div class=\"form-group flex-me\">\r\n            <input type=\"checkbox\" name=\"accept\" id=\"checkme1\" (change)=\"checkValue($event)\"><span> <a class=\"btn-terms\"\r\n                data-target=\"#terms\" data-toggle=\"modal\">Accept Terms & Conditions</a></span>\r\n            <!-- <input type=\"checkbox\" id=\"submitCheck\" name=\"accept\" onchange=\"document.getElementById( 'btnCompanyProfileSubmit').disabled=! this.checked;\"><span> Accept Terms & Conditions</span> -->\r\n          </div>\r\n\r\n          <button type=\"submit\" id=\"saves1\" class=\"btn btn-simple btn-block\">Save</button>\r\n          <button class=\"btn btn-third btn-block \" data-dismiss=\"modal\">Cancel</button>\r\n          <div style=\"color: red \">\r\n            <span>{{errormessage}}</span>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Individual profile modal -->\r\n\r\n<div id=\"individual-profile\" class=\"modal fade \" role=\"dialog \">\r\n  <div class=\"modal-dialog \">\r\n    <div class=\"modal-content \">\r\n      <div class=\"modal-header my-modal-header \">\r\n        <button type=\"button \" class=\"close \" data-dismiss=\"modal\">&times;</button>\r\n        <h3 class=\"text-center \">CREATE INDIVIDUAL PROFILE</h3>\r\n      </div>\r\n      <form [formGroup]=\"create_personal_profile_page1\" (ngSubmit)=\"submit_create_personal_profile_page1($event)\" #gfg = \"ngForm\">\r\n        <div class=\"modal-body my-modal-body \">\r\n          <div class=\"form-group \">\r\n            <input formControlName=\"username\" type=\"text\" name=\"username\" placeholder=\"Enter username\"  class=\"form-control \">\r\n          </div>\r\n          <div class=\"form-group \">\r\n            <input formControlName=\"email\" type=\"email\"    name=\"email\" placeholder=\"Enter Email ID\"  class=\"form-control \">\r\n          </div>\r\n          <div class=\"form-group \">\r\n            <input formControlName=\"password\" type=\"password\" name=\"password\" placeholder=\"Create password \"   class=\"form-control \">\r\n          </div>\r\n          <div class=\"form-group \">\r\n            <input formControlName=\"confirm_password\" type=\"password\" name=\"confirm-password\"\r\n              placeholder=\"Confirm password \" class=\"form-control \">\r\n          </div>\r\n          <div class=\"form-group \">\r\n            <input formControlName=\"name\"  type=\"text \" name=\"name\" placeholder=\"Enter your name\"  class=\"form-control \">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <textarea formControlName=\"description\"  type=\"text\" name=\"description\" placeholder=\"Add Description\"\r\n            class=\"form-control\" style=\"height: 6rem;\"></textarea>\r\n          </div>\r\n      \r\n          <div class=\"form-group \">\r\n            <select formControlName=\"profession\" class=\"form-control\">\r\n              <option hidden class=\"light-color-me\">Select Profession</option>\r\n              <option *ngFor=\"let b of profession; let i=index\" [value]=\"profession[i]?.id\">\r\n                {{profession[i].type}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <label for=\"createprofile\" class=\"beech-me\">\r\n\r\n            <div class=\"prev-me-img\">\r\n              <img id=\"previewPersonalImg\" src=\"/assets/images/place_image.png\" alt=\" \">\r\n            </div>\r\n          </label>\r\n          <div class=\"form-group \">\r\n\r\n            <input type=\"file\" id=\"createprofile\" placeholder=\"Add pic\" class=\"hide-me\" formControlName=\"picture\"\r\n              (change)=\"CheckUploadedImage($event)\">\r\n            <label for=\"createprofile\" class=\"btn btn-simple btn-block\">Add picture</label>\r\n          </div>\r\n\r\n          <div class=\"form-group flex-me \" id=\"ash\">\r\n            <input type=\"checkbox\" name=\"accept2\" id=\"checkme2\"><span><a class=\"btn-terms\" data-target=\"#terms\"\r\n                data-toggle=\"modal\">Accept Terms & Conditions</a></span>\r\n          </div>\r\n\r\n          <button type=\"submit\" id=\"saves2\" class=\"btn btn-simple btn-block\">SAVE</button>\r\n          <button class=\"btn btn-third btn-block \" data-dismiss=\"modal\">CANCEL</button>\r\n          <div style=\"color: red \">\r\n            <span>{{errormessage}}</span>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"terms\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h6>Terms & Conditions</h6>\r\n      </div>\r\n      <div class=\"modal-body insite-terms\">\r\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, soluta? Molestiae inventore dolores iste\r\n          labore quibusdam! Iusto necessitatibus adipisci molestiae veritatis facilis eaque. Corporis consequatur\r\n          perspiciatis eveniet, ratione sapiente mollitia.</p>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nesciunt est odio quasi beatae nihil\r\n          quisquam ipsa corrupti provident, inventore itaque, accusamus, facilis soluta eos et voluptates non assumenda\r\n          fugit?</p>\r\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero perspiciatis eaque iste recusandae odio\r\n          aspernatur, ad dolorem quae totam illum vitae explicabo amet reprehenderit consequatur iure fugiat eos alias\r\n          ut?</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--- Modals End------>\r\n\r\n<!--------------------------- Modal Start--------------------------------->\r\n<div id=\"send-feedback\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h3 class=\"text-center\">SEND US FEEDBACK</h3>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\">\r\n        <div class=\"form-group\">\r\n          <textarea name=\"feed-back\" [(ngModel)]=\"feedback\" rows=\"5\" placeholder=\"Send us mail\"\r\n            class=\"form-control\"></textarea>\r\n        </div>\r\n        <div class=\"feedback-para\">\r\n          <p>Thank you for sharing your thoughts, we value your opinion! INSITE was developed for all of you in the\r\n            architecture & design community. It is a work in progress and we are determined to keep improving it in\r\n            order to promote community, knowledge and discussion on all architecture and design related topics.\r\n            Learning about your experience using INSITE is enormously helpful.</p>\r\n        </div>\r\n        <button class=\"btn btn-simple btn-block\" (click)=\"sendFeedback()\">SEND</button>\r\n        <button class=\"btn btn-simple btn-block\" id=\"close-feedbackModal\" data-dismiss=\"modal\">CANCEL</button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--------------------------- Modal End-------------------------------->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"header shd\">\r\n    <div class=\"container\">\r\n      <div class=\"row pd-top-10\">\r\n        <div class=\"col-lg-2 desktop-header\">\r\n          <div class=\"insite-logo\">\r\n    \r\n            <a (click)=\"ifSubscribe()\" id=\"home_btn\"><img src=\"assets/images/logo.png\" alt=\"\" style=\"cursor: pointer;\"></a>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-10 desktop-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"insite-header\">\r\n                <ul>\r\n                  <li>\r\n                    <input type=\"text\" *ngIf=\"searching\" ngx-google-places-autocomplete [options]='options'\r\n                      #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" />\r\n                    <a href=\"javascript:void(0);\" *ngIf=\"!searching\" (click)=\"search()\"><img\r\n                        src=\"assets/images/icon/search.png\"></a>\r\n                    <!-- <a href=\"javascript:void(0);\"  *ngIf=\"!searching\"><img src=\"assets/images/icon/search.png\"></a> -->\r\n                  </li>\r\n                  <li *ngIf=\"this.isProfileCreated==true  && captured == 'true'\"><a routerLink=\"/chat\"><img\r\n                        src=\"assets/images/icon/chat.png\"></a></li>\r\n                  <li *ngIf=\"this.isProfileCreated==true && captured == 'true'\"><a routerLink=\"/notifications\"><img\r\n                        src=\"assets/images/icon/notification.png\"></a></li>\r\n                  <li *ngIf=\"this.isProfileCreated==true && captured == 'true' \"><a routerLink=\"/settings\"><img\r\n                        src=\"assets/images/icon/setting.png\"></a></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"insite-logout show-me\">\r\n                <ul>\r\n                  <li><a href=\"JavaScript:void(0);\" *ngIf=\"isProfileCreated==false && isLogined==true\"\r\n                      data-toggle=\"modal\" data-target=\"#create-profile\">CREATE PROFILE</a></li>\r\n                  <!-- <li><a href=\"JavaScript:void(0);\" *ngIf=\"isLogined == true\" data-toggle=\"modal\"\r\n                      data-target=\"#logout\">LOGOUT</a></li> -->\r\n                  <li>\r\n                    <a id=\"login_link\" class=\"margin-12 show-me\" *ngIf=\"isLogined==false\" href=\"JavaScript:void(0);\"\r\n                      data-toggle=\"modal\" data-target=\"#login\">LOGIN</a>\r\n                  </li>\r\n                  <!-- <li>\r\n                      <a id=\"login_link\" class=\"margin-12 show-me\" *ngIf=\"guestUser==true\" href=\"JavaScript:void(0);\" \r\n                        data-toggle=\"modal\" data-target=\"#login\">GUEST</a>\r\n                      </li> -->\r\n                  <li><a class=\"margin-12 c-pointer\" *ngIf=\"isLogined == true && captured == 'true'\"\r\n                      style=\"color: black;\" (click)=goToProfile()>WELCOME \r\n                     \r\n                       {{username | uppercase}}\r\n                      </a></li>\r\n                  <li><button class=\"btn-logout\" *ngIf=\"isLogined == true\" data-toggle=\"modal\"\r\n                      data-target=\"#logout\"><img src=\"assets/images/icon/logout.png\"></button></li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"insite-login hide-me\">\r\n                <ul>\r\n                  <li><a routerLink=\"/my-profile\">WELCOME ASHISH </a></li>\r\n                  <li>\r\n                    <button class=\"btn-logout\" data-toggle=\"modal\" data-target=\"#logout\">\r\n                      <img src=\"assets/images/icon/logout.png\">\r\n                    </button>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-12 mobile-header\">\r\n          <nav class=\"navbar navbar-expand-lg navbar-light\">\r\n            <a class=\"navbar-brand\">\r\n              <img src=\"assets/images/logo.png\" routerLink=\"/home\" alt=\"\">\r\n            </a>\r\n            <button class=\"menu-button\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n              aria-controls=\"navbarSupportedContent\">\r\n              <span class=\"icon-spar\"></span>\r\n              <span class=\"icon-spar\"></span>\r\n              <span class=\"icon-spar\"></span>\r\n            </button>\r\n\r\n            <div class=\"navbar-collapse\" id=\"navbarSupportedContent\">\r\n              <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-link active\">\r\n                  <a href=\"#\"><i class=\"fa fa-search\"></i></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a href=\"#\"><i class=\"fa fa-comment\"></i></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a routerLink=\"/notifications\"><i class=\"fa fa-bell\"></i></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a href=\"#\"><i class=\"fa fa-cog\"></i></a>\r\n                </li>\r\n                <li class=\"nav-item show-me\">\r\n                  <a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#login\"\r\n                    class=\"log-close\"><b>LOGIN</b></a>\r\n                </li>\r\n                <li class=\"nav-item hide-me\">\r\n                  <a href=\"JavaScript:void(0);\"><b>GUEST</b></a>\r\n                </li>\r\n                <li class=\"nav-item show-me\">\r\n                  <a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#create-profile\"\r\n                    class=\"log-close\"><b>CREATE PROFILE</b></a>\r\n                </li>\r\n                <li class=\"nav-item hide-me\">\r\n                  <a routerLink=\"/my-profile\"><b>WELCOME ASHISH</b></a>\r\n                </li>\r\n                <li class=\"nav-item hide-me\">\r\n                  <a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#logout\"\r\n                    class=\"log-close\"><b>LOGOUT</b></a>\r\n                </li>\r\n              </ul>\r\n              <a href=\"#\" title=\"\" class=\"close-menu\"><i class=\"la la-close\"></i></a>\r\n            </div>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<!--header end-->\r\n\r\n<!-- LogOut Modal -->\r\n\r\n<div id=\"logout\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body logout-modal-body\">\r\n        <h3 class=\"text-center\">Alert</h3>\r\n        <p>Do you really want to logout?</p>\r\n        <button class=\"btn btn-third\" data-dismiss=\"modal\">NO</button>\r\n        <button class=\"btn btn-simple\" data-dismiss=\"modal\" (click)=\"logout()\">YES</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/about-us/about-us.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/about-us/about-us.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row chat-wrap\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <div class=\"chat-heading\">\r\n                        <!-- <h3>Test Edit</h3> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                   \r\n                    <div [innerHTML]=\"htmlString\" style=\"color: black;\">\r\n                    </div>\r\n                    <!-- <div class=\"terms-conditions\">\r\n                        <p>Architecture and design are everywhere. Nothing has a greater impact on our wellbeing, on our mood and on our thoughts than the urban and interior spaces we find ourselves in every day. Yet, we know surprisingly little about them. And even if we wanted to learn about the creative minds behind our built environment, there is no easy way to find information.</p>   \r\n                        <p>We decided to change that.</p>\r\n                        <p>INSITE was created by architects not only for architects and designers but also for everyone who is interested in exploring the built environment – at home as well as when travelling. It was designed as an easy to use platform that invites architects and designers to put their projects on the map (literally) and to engage in the current discourse on all architecture and design related matters.</p>\r\n                        <p>Communication is the key to knowledge and appreciation – and INSITE is the space we created for it.</p>\r\n                    </div>\r\n                    <div class=\"my-social-link\">\r\n                            <div class=\"project-social\">\r\n                                <a href=\"#\">\r\n                                    <i class=\"fa fa-facebook\"></i>\r\n                                </a>\r\n                                <a href=\"#\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                </a>\r\n                                <a href=\"#\">\r\n                                    <i class=\"fa fa-instagram\"></i>\r\n                                </a>\r\n                                <a href=\"#\">\r\n                                    <i class=\"fa fa-google\"></i>\r\n                                </a>\r\n                            </div>\r\n                        </div> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/chat-insight/chat-insight.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/chat-insight/chat-insight.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row chat-wrap\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                    <div class=\"recent-btn\">\r\n                        <a routerLink=\"/chat\"><img src=\"assets/images/icon/chat.png\"> Recent Chat</a>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf = \"blockedByUser == userId || blockedByUser == '0' || !blockedByUser\"  class=\"col-lg-6\">\r\n                    <div class=\"cog\">\r\n                        <div  class=\"dropdown\">\r\n                            <button class=\"btn-setting\" type=\"button\" data-toggle=\"dropdown\">\r\n                                <i class=\"fa fa-ellipsis-v\"></i>\r\n                            </button>\r\n                            <div  class=\"dropdown-menu set-right\">\r\n                                <a class=\"dropdown-item\"    (click) = \"clearChat()\" href=\"JavaScript:void(0);\" >Clear Chat</a>\r\n                                <a class=\"dropdown-item\" *ngIf = \"blockedUser == '0' || !blockedUser\"   (click) = \"BlockChatUser('1')\"  >Block</a>\r\n                                <a  class=\"dropdown-item\"  *ngIf = \"blockedUser == '1'\" (click) = \"BlockChatUser('0')\"  >Unblock</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <!-- <div class=\"col-lg-4 col-md-5 col-sm-12 col-12\">\r\n                    <div class=\"chat-list chat-margin\">\r\n                        <ul>\r\n                            <li *ngFor = \"let user of chatUserarr\">\r\n                                <a href=\"JavaScript:void(0);\">\r\n                                    <div class=\"chat-user\">\r\n                                        <div class=\"chat-img\">\r\n                                            <img src=\"{{user?.profile_image}}\">\r\n                                            <i class=\"fa fa-circle active-user\"></i>\r\n                                        </div>\r\n                                        <div class=\"chat-user-name hvr-forward\">\r\n                                            <h6>{{user?.name}}</h6>\r\n                                            <p><span><img src=\"{{user?.profile_image}}\"></span> Lorem ipsum is dummy text.</p>\r\n                                        </div>\r\n                                        <div class=\"unread-msg\">\r\n                                            <p>{{user?.timeStamp | date:'shortTime'}}</p>\r\n                                            <p class=\"msg-count\">02</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"offset-lg-2 col-lg-8 offset-md-2 col-md-8 col-sm-12 col-12\">\r\n                    <div class=\"chatter\">\r\n                        <div class=\"chatter-img\">\r\n                            <img src=\"{{ProfileImage}}\"/>\r\n                            <i *ngIf = \"ProfileonlineStatus == 1\" class=\"fa fa-circle active-user\"></i>\r\n                            <i  *ngIf = \"ProfileonlineStatus == 0\" class=\"fa fa-circle inctive-user\"></i>\r\n                        </div>\r\n                        <div class=\"chatter-info\">\r\n                            <h6>{{ProfileName}}</h6>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"conversation-box\">\r\n                          <form  (ngSubmit) = \"sendMessage()\" >\r\n                        <div class=\"chatBoxed\">\r\n                            <div class=\"converstation\">\r\n                                <!-- <div id=\"neeche\"></div> -->\r\n                                <div class=\"chatRow\" *ngFor='let data of SingleUserChat' >\r\n                                    <div  class=\"sender\" *ngIf='chatId == data.senderId'>\r\n                                        <!-- <div class=\"sender-img d-none d-sm-block\">\r\n                                            <img src=\"{{data.profilePic}}\">\r\n                                        </div> -->\r\n                                        <div class=\"sender-msg\">\r\n                                            <div class=\"reply\">\r\n                                                <!-- <h6>How may i help you ?</h6> -->\r\n                                                <p *ngIf = \"data.mediaType == 'text'\">{{data.content}}</p>\r\n                                               <img (click)=\"zoomImg( imageUrl + data.thumnilImageurl)\" *ngIf = \"data.mediaType == 'image'\" [src]=\" imageUrl +  data.thumnilImageurl\">\r\n                                               <!-- <a   *ngIf = \"data.mediaType == 'Document'\" target=\"\" [href]=\"  +  data.thumnilImageurl\"> </a>   -->\r\n                                               <button   *ngIf = \"data.mediaType == 'Document'\" type=\"button\" (click)='openFile(imageUrl +  data.thumnilImageurl)' > Download File </button>\r\n                                               \r\n                                            </div>\r\n                                            <div class=\"sender-name\">\r\n                                                <p><span>{{data.timeStamp | date:'shortTime'}}</span></p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div  class=\"receiver\" *ngIf='userId == data.senderId'>\r\n                                        <div class=\"receiver-msg\">\r\n                                            <div class=\"reply-r\">\r\n                                                <!-- <h6>How may i help you ?</h6> -->\r\n                                                <p *ngIf = \"data.mediaType == 'text'\">{{data.content}}</p>\r\n                                                <img  (click)=\"zoomImg( imageUrl + data.thumnilImageurl)\" *ngIf = \"data.mediaType == 'image'\" [src]=\" imageUrl +  data.thumnilImageurl\"/>\r\n                                                \r\n                                                <button   *ngIf = \"data.mediaType == 'Document'\" type=\"button\" (click)='openFile(imageUrl +  data.thumnilImageurl)' > Download File </button>\r\n                                                <div class=\"tick-me\">\r\n                                                    <img src=\"assets/images/icon/grey_tick.png\"/>\r\n                                                   <!-- <img src=\"assets/images/icon/green_tick.png\"/> -->\r\n                                                 </div>\r\n                                            </div>\r\n                                            <div class=\"receiver-name\">\r\n                                                <p><span>{{data.timeStamp | date:'shortTime'}}</span></p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!-- <div class=\"receiver-img d-none d-sm-block\">\r\n                                            <img src=\"{{senderProfilePic}}\">\r\n                                        </div> -->\r\n                                    </div>\r\n                                </div>                               \r\n                            \r\n                              \r\n                               \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"chat-send\">\r\n                            <div class=\"d-flex pos-rel w-100\">\r\n                                <button type=\"button\" class=\"btn left\" data-toggle=\"modal\" data-target=\"#emoji\"><i *ngIf = \"recentMessage?.blocked != 1\" class=\"fa fa-smile-o\"></i>\r\n                                </button> \r\n                               \r\n                                <div class=\"get-img\" *ngIf=\"fileImg && Ftypes == 'image'\">\r\n                                    <i class=\"fa fa-image\"></i>\r\n                                    Image\r\n                                    <span><button type=\"button\" (click) = \"removeImage()\">&times;</button></span>\r\n                                </div>\r\n                                <div class=\"get-img\" *ngIf=\"fileImg && Ftypes != 'image'\">\r\n                                    <i class=\"fa fa-file\"></i>\r\n                                    File\r\n                                    <span><button type=\"button\" (click) = \"removeImage()\">&times;</button></span>\r\n                                </div>                       \r\n                                <input *ngIf = \"blockedUser != '1'\" class=\"msg-type\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]='_message' placeholder=\"Enter Text\"/>\r\n                                <input  *ngIf = \"blockedUser != '1'\" type=\"file\" (change)=\"singleFile($event)\" class=\"hide-me\" id=\"document-file\" name=\"document\" accept=\r\n                            \"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,\r\n                            text/plain, application/pdf/\"/>\r\n                            <input  *ngIf = \"blockedUser != '1' \" type=\"file\" (change)=\"singleFile($event)\" class=\"hide-me\"   id=\"gallery-file\" name=\"image\" accept=\"image/*\"/>\r\n                                <button *ngIf = \"blockedUser != '1'\"type=\"button\" class=\"btn right\" data-toggle=\"modal\" data-target=\"#file-attach\">\r\n                                    <i *ngIf = \"blockedUser != '1'\" class=\"fa fa-paperclip\"></i>\r\n                                </button>                   \r\n                            </div>\r\n                            <span>\r\n                                <button *ngIf = \"blockedUser != '1'\" class=\"btn-send\" type=\"submit\"><i class=\"fa fa-paper-plane\"></i></button>\r\n                            </span>\r\n                        </div>\r\n                    </form>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 col-sm-12 col-12\">\r\n                </div>\r\n               \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <app-footer></app-footer> -->\r\n<!--------------------------- Modal Start--------------------------------->\r\n<div class=\"modal fade\" id=\"file-attach\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n        <div class=\"modal-content content-edit\">\r\n            <div class=\"modal-body file-attach\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <ul>\r\n                    <li> \r\n                        \r\n                        <label for=\"document-file\"><img src=\"assets/images/icon/document.png\">\r\n                        <p>Document</p></label>\r\n                    </li>\r\n                    <li>\r\n                        <label for=\"gallery-file\"><img src=\"assets/images/icon/gallery_color.png\">\r\n                        <p>Gallery</p></label>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"zoom\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-md \" data-dismiss=\"modal\" role=\"document\">\r\n        <div class=\"modal-content content-edit\">\r\n            <div class=\"modal-body zooming-img\">\r\n                <img [src]=\"myKey\"/>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"emoji\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <!-- <emoji-mart title=\"\"  ></emoji-mart>  -->\r\n                 <!-- <emoji-mart set=\"emojione\"></emoji-mart> -->\r\n                <emoji-mart class=\"emoji-mart\" set=\"emojione\" [i18n]=\"{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }\"  title=\"Pick your emoji…\" (emojiClick)=\"addEmoji($event)\"></emoji-mart> \r\n                <!-- <emoji-mart\r\n                  [style]=\"{ position: 'absolute', bottom: '20px', right: '20px' }\"\r\n                ></emoji-mart>  -->\r\n                <!-- <emoji-mart\r\n                  [i18n]=\"{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }\"\r\n                >\r\n            </emoji-mart> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <div class=\"modal fade\" id=\"zoom\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-body\">\r\n            wlkdhfkweqhf\r\n            \r\n        </div>\r\n    </div>\r\n</div> -->\r\n<!--------------------------- Modal End-------------------------------->\r\n\r\n\r\n\r\n\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/chat/chat.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/chat/chat.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n   <div class=\"row chat-wrap\">\r\n      <div class=\"container\">\r\n         <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n               <div class=\"chat-heading\">\r\n                  <h3>CHAT</h3>\r\n                  <label>\r\n                     <input type=\"text\" (keyup)=\"applyFilter($event.target.value)\" class=\"my-search\" [(ngModel)]='searchUsers'\r\n                     name=\"search\" placeholder=\"search\">\r\n                     <img src=\"assets/images/icon/search.png\">\r\n                     <!-- <button type=\"button\"  class=\"btn btn-primary\"><i class=\"fa fa-repeat\"></i></button> -->\r\n                  </label>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n               <div class=\"chat-heading-btn\">\r\n                  <a data-toggle=\"modal\" data-target=\"#new-chat\" style=\"cursor: pointer;\"><img src=\"assets/images/icon/chat.png\"> Start New Chat</a>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n               <div class=\"form-group chat-user search_input\">\r\n                  <input type=\"text\" class=\"form-control\" (keyup)=\"searchmethod($event.target.value)\" autocomplete=\"off\" placeholder=\"  Search user\">\r\n               </div>\r\n               <div class=\"chat-list bg-white\">\r\n                  <!-- <h1>{{filterUser}}</h1> -->\r\n                  <ul>\r\n                     <li *ngFor=\"let list of chatUserarr\">\r\n                        <a (click)=chatInsight(list)>\r\n                           <div class=\"chat-user\">\r\n                              <div class=\"chat-img\">\r\n                                 <img src=\"{{list.profile_image}}\">\r\n                                 <i *ngIf=\"list.onlineState == 0\" class=\"fa fa-circle inctive-user\"> </i>\r\n                                 <i *ngIf=\"list.onlineState == 1\" class=\"fa fa-circle active-user\"> </i>\r\n                              </div>\r\n                              <div class=\"chat-user-name\">\r\n                                 <h6>{{list?.name}}</h6>\r\n                                 <p><span *ngIf=\"list.mediaType == 'image'\"><i class=\"fa fa-image\"></i></span> <span\r\n                                    *ngIf=\"list.mediaType == 'text'\">{{list?.lastMessage}}</span></p>\r\n                              </div>\r\n                              <div class=\"read-msg\">\r\n                                 <p>{{list?.timeStamp | date:'shortTime'}}</p>\r\n                                 <!-- <p class=\"msg-count\">2</p> -->\r\n                              </div>\r\n                           </div>\r\n                        </a>\r\n                     </li>\r\n                     <!-- <li>\r\n                        <a routerLink=\"/chat-insight\">\r\n                            <div class=\"chat-user\">\r\n                                <div class=\"chat-img\">\r\n                                    <img src=\"assets/images/1099386850.jpg\">\r\n                                    <i class=\"fa fa-circle active-user\"></i>\r\n                                </div>\r\n                                <div class=\"chat-user-name\">\r\n                                    <h6>Joy Edwards</h6>\r\n                                    <p><span><img src=\"assets/images/icon/grey_tick.png\"></span> Lorem ipsum is dummy text.</p>\r\n                                </div>\r\n                                <div class=\"read-msg\">\r\n                                    <p>11:00 AM</p>\r\n                                    <p class=\"msg-count\">2</p>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        </li>\r\n                        <li>\r\n                        <a routerLink=\"/chat-insight\">\r\n                            <div class=\"chat-user\">\r\n                                <div class=\"chat-img\">\r\n                                    <img src=\"assets/images/1099386850.jpg\">\r\n                                    <i class=\"fa fa-circle active-user\"></i>\r\n                                </div>\r\n                                <div class=\"chat-user-name\">\r\n                                    <h6>Joy Edwards</h6>\r\n                                    <p><span><img src=\"assets/images/icon/green_tick.png\"></span> Lorem ipsum is dummy text.</p>\r\n                                </div>\r\n                                <div class=\"read-msg\">\r\n                                    <p>11:00 AM</p>\r\n                                    <p class=\"msg-count\">2</p>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        </li>\r\n                        <li>\r\n                        <a routerLink=\"/chat-insight\">\r\n                            <div class=\"chat-user\">\r\n                                <div class=\"chat-img\">\r\n                                    <img src=\"assets/images/1099386850.jpg\">\r\n                                    <i class=\"fa fa-circle active-user\"></i>\r\n                                </div>\r\n                                <div class=\"chat-user-name\">\r\n                                    <h6>Joy Edwards</h6>\r\n                                    <p><span><img src=\"assets/images/icon/green_tick.png\"></span> Lorem ipsum is dummy text.</p>\r\n                                </div>\r\n                                <div class=\"read-msg\">\r\n                                    <p>11:00 AM</p>\r\n                                    <p class=\"msg-count\">2</p>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        </li>\r\n                        <li>\r\n                        <a routerLink=\"/chat-insight\">\r\n                            <div class=\"chat-user\">\r\n                                <div class=\"chat-img\">\r\n                                    <img src=\"assets/images/1099386850.jpg\">\r\n                                    <i class=\"fa fa-circle active-user\"></i>\r\n                                </div>\r\n                                <div class=\"chat-user-name\">\r\n                                    <h6>Joy Edwards</h6>\r\n                                    <p><span><img src=\"assets/images/icon/green_tick.png\"></span> Lorem ipsum is dummy text.</p>\r\n                                </div>\r\n                                <div class=\"read-msg\">\r\n                                    <p>11:00 AM</p>\r\n                                    <p class=\"msg-count\">2</p>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        </li>\r\n                        <li>\r\n                        <a routerLink=\"/chat-insight\">\r\n                            <div class=\"chat-user\">\r\n                                <div class=\"chat-img\">\r\n                                    <img src=\"assets/images/1099386850.jpg\">\r\n                                    <i class=\"fa fa-circle active-user\"></i>\r\n                                </div>\r\n                                <div class=\"chat-user-name\">\r\n                                    <h6>Joy Edwards</h6>\r\n                                    <p><span><img src=\"assets/images/icon/green_tick.png\"></span> Lorem ipsum is dummy text.</p>\r\n                                </div>\r\n                                <div class=\"read-msg\">\r\n                                    <p>11:00 AM</p>\r\n                                    <p class=\"msg-count\">2</p>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        </li>\r\n                        <li>\r\n                        <a routerLink=\"/chat-insight\">\r\n                            <div class=\"chat-user\">\r\n                                <div class=\"chat-img\">\r\n                                    <img src=\"assets/images/1099386850.jpg\">\r\n                                    <i class=\"fa fa-circle active-user\"></i>\r\n                                </div>\r\n                                <div class=\"chat-user-name\">\r\n                                    <h6>Joy Edwards</h6>\r\n                                    <p><span><img src=\"assets/images/icon/green_tick.png\"></span> Lorem ipsum is dummy text.</p>\r\n                                </div>\r\n                                <div class=\"read-msg\">\r\n                                    <p>11:00 AM</p>\r\n                                    <p class=\"msg-count\">2</p>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        </li>\r\n                        <li>\r\n                        <a routerLink=\"/chat-insight\">\r\n                            <div class=\"chat-user\">\r\n                                <div class=\"chat-img\">\r\n                                    <img src=\"assets/images/1099386850.jpg\">\r\n                                    <i class=\"fa fa-circle active-user\"></i>\r\n                                </div>\r\n                                <div class=\"chat-user-name\">\r\n                                    <h6>Joy Edwards</h6>\r\n                                    <p><span><img src=\"assets/images/icon/green_tick.png\"></span> Lorem ipsum is dummy text.</p>\r\n                                </div>\r\n                                <div class=\"read-msg\">\r\n                                    <p>11:00 AM</p>\r\n                                    <p class=\"msg-count\">2</p>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        </li>\r\n                        <li>\r\n                        <a routerLink=\"/chat-insight\">\r\n                            <div class=\"chat-user\">\r\n                                <div class=\"chat-img\">\r\n                                    <img src=\"assets/images/1099386850.jpg\">\r\n                                    <i class=\"fa fa-circle active-user\"></i>\r\n                                </div>\r\n                                <div class=\"chat-user-name\">\r\n                                    <h6>Joy Edwards</h6>\r\n                                    <p><span><img src=\"assets/images/icon/green_tick.png\"></span> Lorem ipsum is dummy text.</p>\r\n                                </div>\r\n                                <div class=\"read-msg\">\r\n                                    <p>11:00 AM</p>\r\n                                    <p class=\"msg-count\">2</p>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        </li>\r\n                        <li>\r\n                        <a routerLink=\"/chat-insight\">\r\n                            <div class=\"chat-user\">\r\n                                <div class=\"chat-img\">\r\n                                    <img src=\"assets/images/1099386850.jpg\">\r\n                                    <i class=\"fa fa-circle active-user\"></i>\r\n                                </div>\r\n                                <div class=\"chat-user-name\">\r\n                                    <h6>Joy Edwards</h6>\r\n                                    <p><span><img src=\"assets/images/icon/green_tick.png\"></span> Lorem ipsum is dummy text.</p>\r\n                                </div>\r\n                                <div class=\"read-msg\">\r\n                                    <p>11:00 AM</p>\r\n                                    <p class=\"msg-count\">2</p>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        </li>\r\n                        <li>\r\n                        <a routerLink=\"/chat-insight\">\r\n                            <div class=\"chat-user\">\r\n                                <div class=\"chat-img\">\r\n                                    <img src=\"assets/images/1099386850.jpg\">\r\n                                    <i class=\"fa fa-circle active-user\"></i>\r\n                                </div>\r\n                                <div class=\"chat-user-name\">\r\n                                    <h6>Joy Edwards</h6>\r\n                                    <p><span><img src=\"assets/images/icon/green_tick.png\"></span> Lorem ipsum is dummy text.</p>\r\n                                </div>\r\n                                <div class=\"read-msg\">\r\n                                    <p>11:00 AM</p>\r\n                                    <p class=\"msg-count\">2</p>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        </li>\r\n                        <li>\r\n                        <a routerLink=\"/chat-insight\">\r\n                            <div class=\"chat-user\">\r\n                                <div class=\"chat-img\">\r\n                                    <img src=\"assets/images/1099386850.jpg\">\r\n                                    <i class=\"fa fa-circle active-user\"></i>\r\n                                </div>\r\n                                <div class=\"chat-user-name\">\r\n                                    <h6>Joy Edwards</h6>\r\n                                    <p><span><img src=\"assets/images/icon/green_tick.png\"></span> Lorem ipsum is dummy text.</p>\r\n                                </div>\r\n                                <div class=\"read-msg\">\r\n                                    <p>11:00 AM</p>\r\n                                    <p class=\"msg-count\">2</p>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        </li> -->\r\n                  </ul>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n<!-- <app-footer></app-footer> -->\r\n<!--------------------------- Modal Start--------------------------------->\r\n<div class=\"modal fade\" id=\"new-chat\">\r\n   <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n         <div class=\"modal-header\">\r\n            <button class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h6>Users List</h6>\r\n         </div>\r\n         <div class=\"modal-body\">\r\n            <div class=\"new-start\">\r\n               <div class=\"form-group search_input\">\r\n                  <input autocomplete=\"off\" class=\"form-control\" (keyup)=\"applyModalFilter($event.target.value)\" placeholder=\"Search user\" type=\"text\">\r\n               </div>\r\n               <ul>\r\n                  <li *ngFor=\"let user of ChatUserList\" data-dismiss=\"modal\">\r\n                    <img [src]=\"imageUrl + user?.profile_image\" />\r\n                    <h6 routerLink=\"/chat-insight/{{user?.id}}\">{{user?.company_name}} <br> {{user?.username}}\r\n                        <span>\r\n                            <a routerLink=\"/chat-insight/{{user?.id}}\"><img src=\"assets/images/icon/chat.png\"></a>\r\n                        </span>\r\n                    </h6>\r\n                  </li>\r\n                  <!-- <li>\r\n                     <h6>Ashish Saxena <span><a routerLink=\"/chat-insight\"><img src=\"assets/images/icon/chat.png\"></a></span></h6>\r\n                     </li>\r\n                     <li>\r\n                     <h6>Ashish Saxena <span><a routerLink=\"/chat-insight\"><img src=\"assets/images/icon/chat.png\"></a></span></h6>\r\n                     </li>\r\n                     <li>\r\n                     <h6>Ashish Saxena <span><a routerLink=\"/chat-insight\"><img src=\"assets/images/icon/chat.png\"></a></span></h6>\r\n                     </li> -->\r\n               </ul>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n<!--------------------------- Modal End-------------------------------->\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/create-profile/create-profile.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/create-profile/create-profile.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<!-- <div class=\"container-fluid\"> -->\r\n    <div class=\"row mark-involvement-wrap\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <div class=\"card-involve\">\r\n                        <form [formGroup]= \"editForm\">\r\n                            <h3>CREATE PROFILE</h3>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-5 col-md-12 col-sm-12 col-12\" id=\"priority-second\">\r\n                                    <div class=\"some-gap\">\r\n                                        \r\n\r\n                                        <div class=\"form-group\">\r\n                                            <label>Name</label>\r\n\r\n                                            <input type=\"text\" formControlName = \"name\" \r\n                                                class=\"form-control\">\r\n                                        </div>\r\n                              \r\n                                        <div class=\"form-group\">\r\n                                            <label>Email</label>\r\n\r\n                                            <input type=\"text\" formControlName = \"email\" [readonly]=\"true\"\r\n                                                class=\"form-control\">\r\n                                        </div>\r\n\r\n                                        \r\n                                        <div class=\"form-group\">\r\n                                            <label>Password</label>\r\n\r\n                                            <input type=\"password\" formControlName = \"password\" \r\n                                                class=\"form-control\">\r\n                                        </div>\r\n\r\n                                        \r\n                                        <div class=\"form-group\">\r\n                                            <label>Mobile</label>\r\n\r\n                                            <input type=\"text\" formControlName = \"mobile_number\" \r\n                                                class=\"form-control\">\r\n                                        </div>\r\n\r\n                                        \r\n                                        <div class=\"form-group\">\r\n                                            <label>Company Name</label>\r\n                                            <input type=\"text\" formControlName = \"company_name\" \r\n                                                class=\"form-control\">\r\n                                        </div>\r\n\r\n                                        \r\n                                        <div class=\"form-group\">\r\n                                            <label>Address Lin1 1</label>\r\n                                            <input type=\"text\" formControlName = \"address_line1\" \r\n                                                class=\"form-control\">\r\n                                        </div>\r\n\r\n                                        \r\n                                        <div class=\"form-group\">\r\n                                            <label>Address Lin1 2</label>\r\n                                            <input type=\"text\" formControlName = \"address_line2\" \r\n                                                class=\"form-control\">\r\n                                        </div>\r\n\r\n                                        \r\n                                        <div class=\"form-group\">\r\n                                            <label>Address Lin1 3</label>\r\n                                            <input type=\"text\" formControlName = \"address_line3\" \r\n                                                class=\"form-control\">\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group\">\r\n                                            <label>Description</label>\r\n\r\n                                            <textarea type=\"text\" formControlName = \"description\" rows=\"10\"\r\n                                                placeholder=\"Type something..\" class=\"form-control\"></textarea>\r\n                                        </div>\r\n\r\n                                        \r\n                                        <div class=\"form-group\">\r\n                                            <label>Year Of Foundation</label>\r\n                                            <input type=\"number\" formControlName = \"year_of_foundation\" \r\n                                                class=\"form-control\">\r\n                                        </div>\r\n\r\n                                        \r\n                                    </div>\r\n                                </div>\r\n\r\n<!-- \r\n                                <div class=\"col-lg-7 col-md-12 col-sm-12 col-12\" id=\"priority-first\">\r\n                                    <div class=\"img-box\">\r\n                                        <div class=\"img\">\r\n                                          <img class=\"imagefile\" [src]=\"profiledata?.profile_image\"/>\r\n                                        </div>\r\n                                        <label class=\"fileInput\">\r\n                                          <span class=\"btn btn-primary btn-sm\">Upload File</span>\r\n                                          <input type=\"file\" (change)=\"singleFiles($event)\" hidden/>\r\n                                        </label>\r\n                                      </div>\r\n\r\n                                </div> -->\r\n                                \r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-12 col-12\">\r\n                                    <div class=\"text-center\">\r\n                                        <button class=\"btn btn-yellow\" (click) = \"editProfile()\"\r\n                                        >SUBMIT</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n<!-- </div> -->\r\n\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/disclaimer/disclaimer.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/disclaimer/disclaimer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n    <div class=\"row chat-wrap\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\n                    <div class=\"chat-heading\">\n                        <h3>Disclaimer</h3>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\n                    <div [innerHTML]=\"htmlString\" class=\"heading\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/edit-my-post/edit-my-post.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/edit-my-post/edit-my-post.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n<div class=\"row involvement-wrap\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-7 col-md-12 col-sm-12 col-12\">\r\n                <div class=\"inv-heading\">\r\n                    <h4>TYPE OF PROJECT | CATEGORY  <span>2 day ago</span></h4>\r\n                    <h4>FLUPER</h4>\r\n                    <h4>ARCHITECTURE</h4>\r\n                    <p>Noida, India | 2019</p>\r\n                </div>\r\n                <div class=\"inv-img\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                            <div class=\"red-submit\">\r\n                                <button class=\"btn btn-delete\" data-toggle=\"modal\" data-target=\"#cancel-editing\">Cancel</button>\r\n                                <button class=\"btn btn-black\" routerLink=\"/my-profile\">Submit</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                            <div class=\"mark-inv-img\">\r\n                                <ul class=\"pictures\">\r\n                                </ul>\r\n                                <label class=\"add-here\">\r\n                                    <input type=\"file\" name=\"pictures\" id=\"multiImageSelet\" multiple=\"\" class=\"hide-me\">\r\n                                    <i class=\"fa fa-plus\"></i>\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> \r\n                <div class=\"inv-details\">\r\n                    <div class=\"red-border\">\r\n                        <h6><strong>Description</strong></h6>\r\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n                    </div>\r\n                </div> \r\n            </div>\r\n            <div class=\"col-lg-5 col-md-12 col-sm-12 col-12\">\r\n                <div class=\"red-border\">\r\n                <div class=\"inv-right-heading\">\r\n                    <h6><strong>Involvement</strong></h6>\r\n                </div>\r\n                <div class=\"inv-right-details\">\r\n                    <h6><strong>Products Manufacturers</strong></h6>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a> \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"inv-right-details\">\r\n                    <h6><strong>Execution</strong></h6>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n<!-- <app-footer></app-footer> -->\r\n<!--------------------------- Modal Start--------------------------------->\r\n<div id=\"cancel-editing\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body my-modal-body\">\r\n                <button class=\"btn btn-simple btn-block\" data-dismiss=\"modal\" routerLink=\"/my-profile\">DISCARD CHANGES</button>\r\n                <button class=\"btn btn-third btn-block\" data-dismiss=\"modal\" routerLink=\"/my-profile\">SAVE CHANGES</button>\r\n                <button class=\"btn btn-simple btn-block\" data-dismiss=\"modal\">KEEP EDITING</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"my-pic\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content content-edit\">\r\n        <div class=\"modal-body img-modal\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <img src=\"assets/images/home.jpg\">\r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>\r\n<div id=\"enter-credit\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-header my-modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h3 class=\"text-center\">ENTER OWNER'S NAME</h3>\r\n        </div>\r\n        <div class=\"modal-body my-modal-body\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" name=\"credit\" placeholder=\"Type\" class=\"form-control\">\r\n            </div>\r\n            <button class=\"btn btn-simple btn-block\" data-dismiss=\"modal\">SAVE</button>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--------------------------- Modal End-------------------------------->\r\n\r\n\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/edit-profile/edit-profile.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/edit-profile/edit-profile.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row mark-involvement-wrap\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <div class=\"card-involve\">\r\n                        <form [formGroup]= \"editForm\">\r\n                            <h3>EDIT PROFILE</h3>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-5 col-md-12 col-sm-12 col-12\" id=\"priority-second\">\r\n                                    <div class=\"some-gap\">\r\n                                        <div  *ngIf = \"!Company\" class=\"form-group\">\r\n                                            <label> Name</label>\r\n                                            <input type=\"text\" [(ngModel)] = \"name\"  [ngModelOptions]=\"{standalone: true}\"placeholder=\"Enter Name\"\r\n                                             class=\"form-control\">\r\n                                                <!-- <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"f.name.errors.required\">Name is required</div>\r\n                                                  </div> -->\r\n\r\n                                        </div>\r\n\r\n                              \r\n                                        <div class=\"form-group\">\r\n                                            <label>Email</label>\r\n\r\n                                            <input type=\"text\" formControlName = \"email\" [readonly]=\"true\"\r\n                                                class=\"form-control\">\r\n                                        </div>\r\n\r\n                                        <!-- <div class=\"form-group\">\r\n                                            <label>Mobile Number</label>\r\n\r\n                                            <input type=\"text\" formControlName = \"mobile_number\" [readonly]=\"true\"\r\n                                                class=\"form-control\">\r\n                                        </div> -->\r\n\r\n                                        <div *ngIf = \"Company\" class=\"form-group\">\r\n                                            <label>Username</label>\r\n\r\n                                            <input  type=\"text\" [value]=\"username\"   class=\"form-control\">\r\n                                        </div>\r\n\r\n                                         <div *ngIf = \"Company\" class=\"form-group\">\r\n                                            <label>Company Name</label>\r\n\r\n                                            <input  type=\"text\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)] = \"companyname\" \r\n                                           class=\"form-control\">\r\n                                        </div>\r\n\r\n                                        <!-- <div *ngIf = \"Company\" class=\"form-group\">\r\n                                            <label>Company Name</label>\r\n\r\n                                            <input  type=\"text\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)] = \"companyDescription\" \r\n                                           class=\"form-control\">\r\n                                        </div> -->\r\n\r\n                                        <div class=\"form-group\">\r\n                                            <label>Profile Type</label>\r\n\r\n                                            <input type=\"text\" formControlName = \"ProfileType\" [readonly]=\"true\"\r\n                                                class=\"form-control\">\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group\">\r\n                                            <label>Facebook</label>\r\n\r\n                                            <input type=\"text\" formControlName = \"facebook\" \r\n                                                class=\"form-control\">\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group\">\r\n                                            <label>Twitter</label>\r\n\r\n                                            <input type=\"text\" formControlName = \"twitter\" \r\n                                                class=\"form-control\">\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group\">\r\n                                            <label>InstaGram</label>\r\n\r\n                                            <input type=\"text\" formControlName = \"insta\" \r\n                                                class=\"form-control\">\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group\">\r\n                                            <label>Google</label>\r\n\r\n                                            <input type=\"text\" formControlName = \"google\"  \r\n                                                class=\"form-control\">\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group\" *ngIf = \"Company\">\r\n                                            <label>Description</label>\r\n\r\n                                            <textarea type=\"text\" formControlName = \"description\" rows=\"10\"  [(ngModel)] = \"companyDescription\"\r\n                                                placeholder=\"Type something..\" class=\"form-control\"></textarea>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"col-lg-7 col-md-12 col-sm-12 col-12\" id=\"priority-first\">\r\n                                    <div class=\"img-box\">\r\n                                        <div class=\"img\">\r\n                                          <img class=\"imagefile\" [src]=\"profiledata?.profile_image\"/>\r\n                                        </div>\r\n                                        <label class=\"fileInput\">\r\n                                          <span class=\"btn btn-primary btn-sm\">Upload File</span>\r\n                                          <input type=\"file\" (change)=\"singleFiles($event)\" hidden/>\r\n                                        </label>\r\n                                      </div>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-12 col-12\">\r\n                                    <div class=\"text-center\">\r\n                                        <button class=\"btn btn-yellow\" (click) = \"editProfile()\"\r\n                                        >SUBMIT</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <app-footer></app-footer> -->\r\n<!--------------------------- Modal Start--------------------------------->\r\n<div class=\"modal fade\" id=\"my-pic\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content content-edit\">\r\n            <div class=\"modal-body img-modal\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <img src=\"assets/images/home.jpg\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"mark-involvement-location\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <iframe\r\n                    src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14009.988974783451!2d77.3862821!3d28.6148557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe81b4a8979aa533d!2sFluper%20-%20Mobile%20App%20Development%20Company!5e0!3m2!1sen!2sin!4v1568373293728!5m2!1sen!2sin\"\r\n                    width=\"100%\" height=\"300\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\r\n            </div>\r\n            <div class=\"modal-footer my-modal-footer\">\r\n                <button class=\"btn btn-simple btn-block\" data-dismiss=\"modal\">SELECT LOCATION</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"enter-credit\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header my-modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h3 class=\"text-center\">ENTER OWNER'S NAME</h3>\r\n            </div>\r\n            <div class=\"modal-body my-modal-body\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" name=\"credit\" placeholder=\"Type\" class=\"form-control\">\r\n                </div>\r\n                <button class=\"btn btn-simple btn-block\" data-dismiss=\"modal\">SAVE</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<!--------------------------- Modal End-------------------------------->\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/faq/faq.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/faq/faq.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row chat-wrap\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <div class=\"chat-heading\">\r\n                        <h3>FAQ</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n               \r\n           \r\n           <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\" *ngFor=\"let faq of faqdata; let i = index\" >\r\n            <div  style=\"color: black;\">\r\n\r\n\r\n                <p>\r\n                    <a class=\"btn btn-primary\" data-toggle=\"collapse\" [attr.data-target]=\"'#demo' + (i + 1)\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n                      {{faq.question}}\r\n                    </a>\r\n                   \r\n                  </p>\r\n                  <div class=\"collapse\" id=\"demo{{ i + 1 }}\">\r\n                    <div class=\"card card-body\">\r\n                      <p>{{faq.answer}}</p>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n            </div>\r\n           </div>\r\n            </div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            <app-header></app-header>\r\n\r\n\r\n\r\n            <section class=\"faq-section\">\r\n                <div class=\"container\">\r\n                  <div class=\"row\">\r\n                                    <!-- ***** FAQ Start ***** -->\r\n                                    <div class=\"col-md-6 offset-md-3\">\r\n                \r\n                                        <div class=\"faq-title text-center pb-3\">\r\n                                            <h2>FAQ</h2>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 offset-md-3\">\r\n                                        <div class=\"faq\" id=\"accordion\">\r\n\r\n                                            <div class=\"card\"  *ngFor=\"let faq of faqdata; let i = index\" >\r\n                                                <div class=\"card-header\" id=\"faqHeading-1\">\r\n                                                    <div class=\"mb-0\">\r\n                                                        <h5 class=\"faq-title\" data-toggle=\"collapse\" [attr.data-target]=\"'#collapse' + (i)\" data-aria-expanded=\"true\" data-aria-controls=\"faqCollapse-1\">\r\n                                                            <span class=\"badge font-weight-bold\">{{i+1}}</span>{{faq.question}}\r\n                                                        </h5>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div [id]=\"'collapse'+i\"  class=\"collapse\" aria-labelledby=\"faqHeading-1\" data-parent=\"#accordion\">\r\n                                                    <div class=\"card-body\">\r\n                                                        <p style=\"font-size: 16px; color: black; font-weight: bold\"> <span class=\"\"  ></span>  {{faq.answer}}</p>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                         \r\n                                           \r\n                                          \r\n                                           \r\n                                          \r\n                                         \r\n                                        </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                </section>\r\n\r\n\r\n                                <app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/home/home.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/home/home.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<section class=\"show-filters\">\r\n  <!-- <button type=\"button\" data-toggle=\"modal\" data-target=\"#involvement\" >&#43;</button> -->\r\n  <div class=\"container\">\r\n    <div class=\"row gutter-xs\">\r\n      <div\r\n        class=\"offset-lg-4 col-lg-8 col-md-8 col-sm-12 col-xs-12 filters-col\"\r\n      >\r\n        <div class=\"row gutter-xs\">\r\n          <div class=\"col\">\r\n            <div class=\"form-group\">\r\n              <button\r\n                id=\"filtersho_hide\"\r\n                class=\"lock pl-2 filter-desktop text-nowrap\"\r\n              >\r\n                SHOW FILTERS<i class=\"fa fa-angle-right\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col hide-this\">\r\n            <div class=\"form-group select dropdown-toggle1\">\r\n              <select\r\n                class=\"form-control color-black\"\r\n                [formControl]=\"countrylist\"\r\n                (change)=\"getCountryFilter($event)\"\r\n              >\r\n                <option hidden>Select Country</option>\r\n                <option\r\n                  *ngFor=\"let countryList of countryList\"\r\n                  [value]=\"countryList.country\"\r\n                >\r\n                  {{ countryList.country }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col hide-this\">\r\n            <div class=\"form-group input\">\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control color-black\"\r\n                [formControl]=\"FilterArch\"\r\n                placeholder=\"Architect/Desinger\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"col hide-this width-less\">\r\n                        <div class=\"form-group input\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"zip-code\" [formControl]=\"FilterCity_zip\"\r\n                                placeholder=\"City/Zip Code\">\r\n                        </div>\r\n                    </div> -->\r\n          <!-- <div class=\"col hide-this width-less\">\r\n                        <div class=\"form-group input\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"address\" placeholder=\"Address\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col hide-this\">\r\n                        <div class=\"form-group input\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"designer\" placeholder=\"Architect/Designer\">\r\n                        </div>\r\n                    </div> -->\r\n          <div class=\"col hide-this\">\r\n            <div class=\"form-group select\">\r\n              <div class=\"dropdown\">\r\n                <button\r\n                  class=\"form-control text-start dropdown-toggle1\"\r\n                  type=\"button\"\r\n                  id=\"menu1\"\r\n                  data-toggle=\"dropdown\"\r\n                  aria-haspopup=\"true\"\r\n                  aria-expanded=\"false\"\r\n                >\r\n                  {{ inputname }}\r\n                </button>\r\n\r\n                <ul\r\n                  class=\"dropdown-menu input_dropdown\"\r\n                  role=\"menu\"\r\n                  aria-labelledby=\"menu1\"\r\n                >\r\n                  <li\r\n                    class=\"px-2\"\r\n                    *ngFor=\"let projectType of project_typeList\"\r\n                    [ngSwitch]=\"projectType.type\"\r\n                    (click)=\"getProjecttypeFilter($event)\"\r\n                    [value]=\"projectType.id\"\r\n                  >\r\n                    <span\r\n                      *ngSwitchCase=\"'Refurbishment'\"\r\n                      class=\"box Refurbishment\"\r\n                    ></span>\r\n                    <span\r\n                      *ngSwitchCase=\"'New building'\"\r\n                      class=\"box newbuilding\"\r\n                    ></span>\r\n                    <span\r\n                      *ngSwitchCase=\"'Extension'\"\r\n                      class=\"box Extension\"\r\n                    ></span>\r\n                    <span\r\n                      *ngSwitchCase=\"'Urbanism'\"\r\n                      class=\"box Urbanism\"\r\n                    ></span>\r\n                    <span\r\n                      *ngSwitchCase=\"'Exhibition'\"\r\n                      class=\"box Exhibition\"\r\n                    ></span>\r\n                    <span\r\n                      *ngSwitchCase=\"'Teaching'\"\r\n                      class=\"box Teaching\"\r\n                    ></span>\r\n                    <span *ngSwitchCase=\"'Event'\" class=\"box Event\"></span>\r\n                    <span\r\n                      *ngSwitchCase=\"'Competition'\"\r\n                      class=\"box Competition\"\r\n                    ></span>\r\n                    <span *ngSwitchCase=\"'Job'\" class=\"box Job\"></span>\r\n                    <span *ngSwitchCase=\"'Thesis'\" class=\"box Thesis\"></span>\r\n                    <span\r\n                      *ngSwitchCase=\"'Interior'\"\r\n                      class=\"box Interior\"\r\n                    ></span>\r\n                    <span\r\n                      *ngSwitchCase=\"'Landscape'\"\r\n                      class=\"box Landscape\"\r\n                    ></span>\r\n                    {{ projectType.type }}\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col hide-this\">\r\n            <div class=\"form-group select\">\r\n              <!-- <select class=\"form-control color-black\" [formControl]=\"categoryfilter\"\r\n                (change)=\"getCategoryFilter($event)\">\r\n                <option hidden>Select Category</option>\r\n                <option style=\"background-image:url('../../../assets/images/icon/catagory/agricultural.png');\"\r\n                  [ngSwitch]=\"categoryList.category\" *ngFor=\"let categoryList of categoryList\"\r\n                  [value]=\"categoryList.id\">\r\n                  {{categoryList.category}}\r\n\r\n                  <div *ngSwitchCase=\"'Residential'\" data-thumbnail=\"../../../assets/images/icon/facebook_color.png\">\r\n                  </div>\r\n                  \r\n                </option>\r\n              </select> -->\r\n\r\n              <div class=\"dropdown\">\r\n                <button\r\n                  class=\"form-control text-start dropdown-toggle1\"\r\n                  type=\"button\"\r\n                  id=\"menu2\"\r\n                  data-toggle=\"dropdown\"\r\n                >\r\n                  {{ inputnametwo }} <span class=\"caret\"></span>\r\n                </button>\r\n                <ul\r\n                  class=\"dropdown-menu input_dropdown\"\r\n                  role=\"menu\"\r\n                  aria-labelledby=\"menu2\"\r\n                >\r\n                  <li\r\n                    class=\"px-2\"\r\n                    *ngFor=\"let categoryList of categoryList\"\r\n                    [ngSwitch]=\"categoryList.category\"\r\n                    (click)=\"getCategoryFilter($event)\"\r\n                    [value]=\"categoryList.id\"\r\n                  >\r\n                    <span *ngSwitchCase=\"'Residential'\" class=\"inputimage\">\r\n                      <img\r\n                        src=\"../../../assets/images/icon/catagory/residential.png\"\r\n                        alt=\"\"\r\n                      />\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'Retail'\" class=\"inputimage\">\r\n                      <img\r\n                        src=\"../../../assets/images/icon/catagory/retail.png\"\r\n                      />\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'Hotel'\" class=\"inputimage\">\r\n                      <img\r\n                        src=\"../../../assets/images/icon/catagory/hotel.png\"\r\n                      />\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'Health & Care'\" class=\"inputimage\">\r\n                      <img\r\n                        src=\"../../../assets/images/icon/catagory/health_care.png\"\r\n                      />\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'Educational'\" class=\"inputimage\">\r\n                      <img\r\n                        src=\"../../../assets/images/icon/catagory/education.png\"\r\n                      />\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'Office'\" class=\"inputimage\">\r\n                      <img\r\n                        src=\"../../../assets/images/icon/catagory/office.png\"\r\n                      />\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'Industrial'\" class=\"inputimage\">\r\n                      <img\r\n                        src=\"../../../assets/images/icon/catagory/industrial.png\"\r\n                      />\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'Agricultural'\" class=\"inputimage\">\r\n                      <img\r\n                        src=\"../../../assets/images/icon/catagory/agricultural.png\"\r\n                      />\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'Multi Purpose'\" class=\"inputimage\">\r\n                      <img\r\n                        src=\"../../../assets/images/icon/catagory/multi_purpose.png\"\r\n                      />\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'Special purpose'\" class=\"inputimage\">\r\n                      <img\r\n                        src=\"../../../assets/images/icon/catagory/special_purpose.png\"\r\n                      />\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'Civic'\" class=\"inputimage\">\r\n                      <img\r\n                        src=\"../../../assets/images/icon/catagory/civic.png\"\r\n                      />\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'Religious'\" class=\"inputimage\">\r\n                      <img\r\n                        src=\"../../../assets/images/icon/catagory/religious.png\"\r\n                      />\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'Transport'\" class=\"inputimage\">\r\n                      <img\r\n                        src=\"../../../assets/images/icon/catagory/transport.png\"\r\n                      />\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'Military'\" class=\"inputimage\">\r\n                      <img\r\n                        src=\"../../../assets/images/icon/catagory/military.png\"\r\n                      />\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'Government'\" class=\"inputimage\">\r\n                      <img\r\n                        src=\"../../../assets/images/icon/catagory/government.png\"\r\n                      />\r\n                    </span>\r\n                    {{ categoryList.category }}\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col hide-this\">\r\n            <div class=\"form-group input\">\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control color-black\"\r\n                [formControl]=\"FilterYear\"\r\n                placeholder=\"Enter Year\"\r\n              />\r\n            </div>\r\n          </div>\r\n\r\n          <!-- <div class=\"col hide-this\">\r\n            <div class=\"form-group input\">\r\n              <input type=\"text\" class=\"form-control color-black\" [formControl]=\"Architect\"\r\n                placeholder=\"Enter Architect\">\r\n            </div>\r\n          </div> -->\r\n\r\n          <div class=\"col hide-this\">\r\n            <div class=\"form-group input\">\r\n              <input\r\n                type=\"text\"\r\n                [formControl]=\"filterElement\"\r\n                placeholder=\"Enter Element\"\r\n                class=\"form-control color-black\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"col hide-this\">\r\n            <div class=\"form-group input\">\r\n              <input\r\n                type=\"text\"\r\n                [formControl]=\"filterMaterial\"\r\n                class=\"form-control\"\r\n                name=\"material\"\r\n                placeholder=\"Enter Material\"\r\n              />\r\n            </div>\r\n          </div>\r\n\r\n          <!-- enter tag  -->\r\n          <div class=\"col hide-this\">\r\n            <div class=\"form-group input\">\r\n              <input\r\n                type=\"text\"\r\n                [formControl]=\"enterTag\"\r\n                class=\"form-control\"\r\n                name=\"enterTag\"\r\n                placeholder=\"Enter tag\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <!-- enter tag  -->\r\n\r\n          <div class=\"col hide-this\">\r\n            <div class=\"form-group\">\r\n              <button\r\n                type=\"button\"\r\n                (click)=\"resetFilter()\"\r\n                class=\"btn btn-primary btn-sm btn-block\"\r\n              >\r\n                Clear All\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"show-mobile-filters\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"change-me offset-md-4 col-lg-12 col-md-8 col-sm-12 col-xs-12\">\r\n        <div class=\"click-filters\">\r\n          <button id=\"filter-mob\">\r\n            SHOW FILTERS <i class=\"fa fa-angle-right\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-10 col-md-8 col-sm-12 col-xs-12 hide-show-me\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n            <div class=\"my-form\">\r\n              <select\r\n                class=\"form-control color-black\"\r\n                [formControl]=\"countrylist\"\r\n                (change)=\"getCountryFilter($event)\"\r\n              >\r\n                <!-- <option>Country</option> -->\r\n                <option hidden>Select Country</option>\r\n                <option\r\n                  *ngFor=\"let countryList of countryList\"\r\n                  [value]=\"countryList.country\"\r\n                >\r\n                  {{ countryList.country }}\r\n                </option>\r\n              </select>\r\n              <i class=\"fa fa-caret-down\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n            <div class=\"my-form small-frm\">\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                name=\"zip-code\"\r\n                [formControl]=\"FilterCity_zip_mobile\"\r\n                placeholder=\"City/Zip Code\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                        <div class=\"my-form small-frm\">\r\n                            <input type=\"text\" name=\"address\" placeholder=\"Address\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                        <div class=\"my-form small-frm\">\r\n                            <input type=\"text\" name=\"designer\" placeholder=\"Architect/Designer\">\r\n                        </div>\r\n                    </div> -->\r\n          <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n            <div class=\"my-form\">\r\n              <select\r\n                class=\"form-control color-black\"\r\n                [formControl]=\"projectTypefilter\"\r\n                (change)=\"getProjecttypeFilter($event)\"\r\n              >\r\n                <option hidden>Select Project Type</option>\r\n                <option\r\n                  *ngFor=\"let projectType of project_typeList\"\r\n                  [value]=\"projectType.id\"\r\n                >\r\n                  {{ projectType.type }}\r\n                </option>\r\n              </select>\r\n              <i class=\"fa fa-caret-down\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n            <div class=\"my-form\">\r\n              <select\r\n                class=\"form-control color-black\"\r\n                [formControl]=\"categoryfilter\"\r\n                (change)=\"getCategoryFilter($event)\"\r\n              >\r\n                <option hidden>Select Category</option>\r\n                <option\r\n                  *ngFor=\"let categoryList of categoryList\"\r\n                  [value]=\"categoryList.id\"\r\n                >\r\n                  {{ categoryList.category }}\r\n                </option>\r\n              </select>\r\n              <i class=\"fa fa-caret-down\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n            <div class=\"my-form input\">\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control color-black\"\r\n                [formControl]=\"FilterYear_mobile\"\r\n                placeholder=\"Enter Year\"\r\n              />\r\n              <!-- <select class=\"color-black\">\r\n                                <option>Year/Date</option>\r\n                                <option>Lorem Ipsum</option>\r\n                                <option>Lorem Ipsum</option>\r\n                                <option>Lorem Ipsum</option>\r\n                                <option>Lorem Ipsum</option>\r\n                                <option>Lorem Ipsum</option>\r\n                                <option>Lorem Ipsum</option>\r\n                            </select>\r\n                            <i class=\"fa fa-caret-down\"></i> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n            <div class=\"my-form input\">\r\n              <input\r\n                type=\"text\"\r\n                [formControl]=\"filterElement_mobile\"\r\n                class=\"color-black\"\r\n                placeholder=\"Enter Element\"\r\n              />\r\n              <!-- <select [formControl]=\"filterElement_mobile\" class=\"color-black\">\r\n                                <option>Element</option>\r\n                                <option>Lorem Ipsum</option>\r\n                                <option>Lorem Ipsum</option>\r\n                                <option>Lorem Ipsum</option>\r\n                                <option>Lorem Ipsum</option>\r\n                                <option>Lorem Ipsum</option>\r\n                                <option>Lorem Ipsum</option>\r\n                            </select>\r\n                            <i class=\"fa fa-caret-down\"></i> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n            <div class=\"my-form small-frm\">\r\n              <input\r\n                type=\"text\"\r\n                [formControl]=\"filterMaterial_mobile\"\r\n                name=\"material\"\r\n                placeholder=\"Material\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n            <div class=\"clear-all\">\r\n              <button\r\n                type=\"reset\"\r\n                (click)=\"resetFilter()\"\r\n                class=\"btn btn-primary btn-sm\"\r\n              >\r\n                Clear All\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"mobile-view\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-sm-12 col-md-12 col-xs-12\">\r\n      <div class=\"row prop-card\" *ngFor=\"let r of recentPosts\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n          <div class=\"prop-img\">\r\n            <img [src]=\"r.post_image.image\" alt=\"\" class=\"img-responsive\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n          <a routerLink=\"/involvement/{{ r.id }}\">\r\n            <div class=\"prop-info\">\r\n              <h6>\r\n                <strong> {{ r?.name | titlecase }}</strong>\r\n              </h6>\r\n              <h6>\r\n                <strong>{{ r?.created_by_name | titlecase }}</strong>\r\n              </h6>\r\n              <!-- <h6> <strong>{{r?.project_category | titlecase}}</strong></h6> -->\r\n              <ul>\r\n                <li>{{ r?.city | titlecase }}, {{ r?.country | titlecase }}</li>\r\n                <li>{{ r?.year }}</li>\r\n              </ul>\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"mapBox\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"left-box col-sm-4 col-md-4\">\r\n        <!-- home page right text -->\r\n        <div class=\"boxright\">\r\n          <button type=\"button\" class=\"ourBtn mapOpen\">\r\n            <i class=\"fa fa-angle-double-left\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"ourBtn mapClose\">\r\n            <i class=\"fa fa-angle-double-right\"></i>\r\n          </button>\r\n\r\n          <div\r\n            class=\"row prop-card\"\r\n            *ngFor=\"let p of recentPosts\"\r\n            (mouseover)=\"getlatlong(p)\"\r\n          >\r\n            <div class=\"col-xl-6 col-lg-6\">\r\n              <!-- <div class=\"prop-img backgroundimg\" [ngStyle]=\"{'background-image': 'url(' + p.post_image.image + ')'}\"> -->\r\n              <div class=\"prop-img backgroundimg\">\r\n                <img\r\n                  style=\"cursor: pointer\"\r\n                  (click)=\"withoutLogin($event)\"\r\n                  name=\"{{ p.id }}\"\r\n                  [src]=\"p.post_image.image\"\r\n                  alt=\"\"\r\n                  class=\"img-responsive\"\r\n                  (contextmenu)=\"onRightClick($event)\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-6 col-lg-6 align-self-center\">\r\n              <!-- set condition  -->\r\n              <!-- for  involvement -->\r\n              <div class=\"prop-info pt-0\" (click)=\"withoutLogin()\">\r\n                <!-- <a routerLink=\"/involvement/{{p.id}}\"> -->\r\n                <h6><strong> </strong></h6>\r\n                <input\r\n                  type=\"text\"\r\n                  name=\"{{ p.id }}\"\r\n                  readonly\r\n                  (click)=\"withoutLogin($event)\"\r\n                  value=\"{{ p?.name | titlecase }}\"\r\n                  style=\"\r\n                    border: none;\r\n                    cursor: pointer;\r\n                    font-weight: 900;\r\n                    background-color: transparent;\r\n                    font-size: 1rem !important;\r\n                  \"\r\n                />\r\n                <!-- </a> -->\r\n                <!-- <a routerLink=\"/users-profile/{{p.created_by_name}}\"> -->\r\n                <!-- <h6 (click)=\"profilePage()\" > <strong >{{p?.created_by_name | titlecase}} </strong></h6> -->\r\n                <input\r\n                  style=\"font-size: 1rem\"\r\n                  type=\"text\"\r\n                  id=\"{{ p?.created_by }}\"\r\n                  readonly\r\n                  (click)=\"profilePage($event)\"\r\n                  value=\"{{ p?.created_by_name | titlecase }}\"\r\n                  style=\"\r\n                    border: none;\r\n                    cursor: pointer;\r\n                    font-weight: 900;\r\n                    background-color: transparent;\r\n                    font-size: 1rem !important;\r\n                  \"\r\n                />\r\n                <ul>\r\n                  <li>\r\n                    {{ p?.city | titlecase }}, {{ p?.country | titlecase }}\r\n                  </li>\r\n                  <li>{{ p?.year }}</li>\r\n                </ul>\r\n                <!-- </a> -->\r\n                <!-- for  my-profile -->\r\n                <!-- <a (click)=\"myprofileClick()\">\r\n                  <h6 id=\"demo1\"> <strong>{{p?.created_by_name | titlecase}} </strong></h6>\r\n                  <ul>\r\n                    <li>{{p?.city | titlecase}}, {{p?.country | titlecase}}</li>\r\n                    <li>{{p?.year}}</li>\r\n                  </ul>\r\n                </a> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"map open_create_post\">\r\n        <div class=\"some-bttn\">\r\n          <label class=\"switch\">\r\n            <input\r\n              type=\"checkbox\"\r\n              id=\"togglemap\"\r\n              (change)=\"changeSliderEvent($event)\"\r\n            />\r\n            <span class=\"slider round\" style=\"z-index: 999\"></span>\r\n          </label>\r\n          <!-- <label class=\"switch\">\r\n                            <input type=\"checkbox\" (change)=\"SetMapToCurrentLocationEvent($event)\">\r\n                            <span class=\"slider round\" style=\"z-index: 999;\"></span>\r\n                        </label> -->\r\n          <!-- <div class=\"dropdown\" style=\"z-index: 999;\">\r\n                        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></button>\r\n\r\n                        <div class=\"dropdown-menu my-dropdown\" aria-labelledby=\"dropdownMenuButton\">\r\n                            <h6>Sort post</h6>\r\n                            <ul>\r\n                                <li class=\"dropdown-item\"><label><input (click)=favoritePost() [(ngModel)]=\"fav\" name=\"fav\"\r\n                                            type=\"radio\" [value]=\"'0'\">Only Favourite Post</label></li>\r\n                                <li class=\"dropdown-item\"><label><input (click)=allPost() [(ngModel)]=\"fav\" name=\"fav\"\r\n                                            type=\"radio\" [value]=\"'1'\">All</label></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div> -->\r\n          <button\r\n            class=\"location-icon\"\r\n            (click)=\"SetMapToCurrentLocationEvent()\"\r\n          >\r\n            <img src=\"assets/images/icon_web/map_locate.png\" />\r\n          </button>\r\n        </div>\r\n        <!-- <div class=\"post-question\" style=\"z-index: 999;\">\r\n                    <button type=\"button\" data-toggle=\"modal\" (click)=\"openQuestionDialog()\"><img\r\n                            src=\"assets/images/icon/pin_red.png\" /></button>\r\n                </div> -->\r\n        <div id=\"map\"></div>\r\n        <!-- <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.497244281992!2d79.3840934150822!3d29.6148556824248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd677aaaaa9f%3A0xe81b4a8979aa533d!2sFluper%20-%20Mobile%20App%20Development%20Company!5e0!3m2!1sen!2sin!4v1568633603059!5m2!1sen!2sin\" width=\"100%\" height=\"800\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- <button data-toggle=\"modal\" data-target=\"#post\">Post</button>\r\n<button data-toggle=\"modal\" data-target=\"#create-post\">Create Post</button>\r\n<button data-toggle=\"modal\" data-target=\"#involvement\">Involvement</button>\r\n<button data-toggle=\"modal\" data-target=\"#involvement-location\">Involvement Location</button> -->\r\n\r\n<!-- Post Modal -->\r\n<div id=\"post\" class=\"modal fade\" role=\"dialog \">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body my-modal-body\">\r\n        <!-- <button class=\"btn btn-simple btn-block \" data-dismiss=\"modal\" data-toggle=\"modal\"\r\n                    data-target=\"#create-profile\">CREATE A POST</button> -->\r\n        <button class=\"btn btn-simple btn-block\" id=\"crt-post\">\r\n          CREATE A POST\r\n        </button>\r\n        <button\r\n          class=\"btn btn-third btn-block\"\r\n          data-dismiss=\"modal\"\r\n          data-toggle=\"modal\"\r\n          data-target=\"#create-post\"\r\n        >\r\n          UPLOAD A PHOTO\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Create Post Modal -->\r\n<div id=\"create-post\" class=\"modal fade\" role=\"dialog \">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button \" class=\"close\" data-dismiss=\"modal \">\r\n          &times;\r\n        </button>\r\n        <h3 class=\"text-center\">CREATE PUBLIC POST</h3>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"form-group\">\r\n              <input\r\n                type=\"text \"\r\n                name=\"nickname \"\r\n                placeholder=\"Enter your nickname(Optional) \"\r\n                class=\"form-control\"\r\n              />\r\n            </div>\r\n            <div class=\"input-group mar\">\r\n              <label class=\"form-control file\">\r\n                <span>Upload an image</span>\r\n                <input\r\n                  type=\"file \"\r\n                  name=\"upload-img \"\r\n                  placeholder=\"Upload an image \"\r\n                  class=\" \"\r\n                  id=\"inp-photo \"\r\n                />\r\n                <label for=\"inp-photo \" class=\"btn-in\"\r\n                  ><i class=\"fa fa-upload\"></i\r\n                ></label>\r\n              </label>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <textarea\r\n                type=\"text \"\r\n                name=\"question \"\r\n                rows=\"5 \"\r\n                placeholder=\"Enter a question \"\r\n                class=\"form-control\"\r\n              ></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-7 col-md-6 col-sm-4 col-3\">\r\n            <div class=\"loc-icon\">\r\n              <img src=\"assets/images/icon/pin_sm.png \" />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-5 col-md-6 col-sm-8 col-9\">\r\n            <button class=\"btn btn-yellow btn-block\" data-dismiss=\"modal \">\r\n              SUBMIT\r\n            </button>\r\n          </div>\r\n          <div style=\"color: red\">\r\n            <span>{{ errormessage }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Create Post -->\r\n<div id=\"involvement\" class=\"modal fade\" role=\"dialog \">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          &times;\r\n        </button>\r\n        <h3 class=\"text-center\">CREATE POST</h3>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\">\r\n        <form [formGroup]=\"postForm\" (ngSubmit)=\"submit_create_posts($event)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      formControlName=\"name\"\r\n                      type=\"text\"\r\n                      name=\"post-name\"\r\n                      placeholder=\"Enter post name\"\r\n                      class=\"form-control\"\r\n                    />\r\n                  </div>\r\n                  <!-- =================================== -->\r\n                  <div class=\"form-group\">\r\n                    <select\r\n                      formControlName=\"project_type\"\r\n                      (click)=\"getType()\"\r\n                      id=\"selType\"\r\n                      class=\"form-control ash-select\"\r\n                    >\r\n                      <option hidden>Select Project Type</option>\r\n                      <option\r\n                        *ngFor=\"let b of project_typeData; let i = index\"\r\n                        [value]=\"project_typeData[i]?.id\"\r\n                      >\r\n                        {{ project_typeData[i].type }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n\r\n                  <div *ngIf=\"hideCat == 0\" class=\"form-group\">\r\n                    <select\r\n                      formControlName=\"project_category\"\r\n                      class=\"form-control ash-select\"\r\n                    >\r\n                      <option class=\"light-color-me\" hidden>\r\n                        Select Project Category\r\n                      </option>\r\n                      <option\r\n                        *ngFor=\"let c of project_categoryData; let i = index\"\r\n                        [value]=\"project_categoryData[i]?.id\"\r\n                      >\r\n                        {{ project_categoryData[i].category }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n\r\n                  <!-- <div class=\"form-group\">\r\n                                                <input type=\"text\" name=\"year\" placeholder=\"Select year\" class=\"yearselect form-control\">\r\n                                            </div> -->\r\n\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      formControlName=\"year\"\r\n                      placeholder=\"Enter Year in YYYY\"\r\n                      value=\"{{ currentYear }}\"\r\n                      id=\"yearpicker\"\r\n                      class=\"form-control\"\r\n                      type=\"number\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf=\"typ == 1\" class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      formControlName=\"t_type_start_date\"\r\n                      id=\"start-date\"\r\n                      placeholder=\"Enter start-date\"\r\n                      type=\"text\"\r\n                      onfocus=\"(this.type='date')\"\r\n                      class=\"form-control\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      type=\"text\"\r\n                      onfocus=\"(this.type='date')\"\r\n                      formControlName=\"t_type_end_date\"\r\n                      id=\"end-date\"\r\n                      placeholder=\"Enter end-date\"\r\n                      class=\"form-control\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                  <div class=\"form-group\">\r\n                    <mat-chip-list #chipList aria-label=\"Taggs selection\">\r\n                      <mat-chip\r\n                        *ngFor=\"let tagg of taggs\"\r\n                        [selectable]=\"selectable\"\r\n                        [removable]=\"removable\"\r\n                        (removed)=\"remove(tagg)\"\r\n                      >\r\n                        {{ tagg.name }}\r\n                        <mat-icon matChipRemove *ngIf=\"removable\"\r\n                          >cancel</mat-icon\r\n                        >\r\n                      </mat-chip>\r\n                    </mat-chip-list>\r\n                    <br />\r\n                    <label\r\n                      formControlName=\"tags\"\r\n                      data-toggle=\"modal\"\r\n                      data-target=\"#enter-tags\"\r\n                      placeholder=\"Enter tags\"\r\n                      class=\"form-control tagcss\"\r\n                    >\r\n                      Enter Tags</label\r\n                    >\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      type=\"hidden\"\r\n                      id=\"map-lat\"\r\n                      name=\"lat\"\r\n                      placeholder=\"Enter lat\"\r\n                      class=\"form-control\"\r\n                    />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      type=\"hidden\"\r\n                      id=\"map-lon\"\r\n                      name=\"lon\"\r\n                      placeholder=\"Enter long\"\r\n                      class=\"form-control\"\r\n                    />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      type=\"hidden\"\r\n                      id=\"myimg\"\r\n                      name=\"imgg\"\r\n                      placeholder=\"get image\"\r\n                      class=\"form-control\"\r\n                    />\r\n                  </div>\r\n\r\n                  <div class=\"form-group abtpst\">\r\n                    <textarea\r\n                      formControlName=\"about_post\"\r\n                      type=\"text\"\r\n                      name=\"question\"\r\n                      rows=\"5\"\r\n                      placeholder=\"Type something.. \"\r\n                      class=\"form-control\"\r\n                    ></textarea>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n              <div class=\"some-gap\">\r\n                <div class=\"mark-inv-img\">\r\n                  <ul class=\"pictures\">\r\n                    <li\r\n                      class=\"marks\"\r\n                      *ngFor=\"let img of base64Image; let i = index\"\r\n                    >\r\n                      <a\r\n                        href=\"JavaScript:void(0);\"\r\n                        data-toggle=\"modal\"\r\n                        data-target=\"#my-pic\"\r\n                      >\r\n                        <img [src]=\"img\" />\r\n                      </a>\r\n                      <button class=\"remove-pic\" (click)=\"removeImage(img, i)\">\r\n                        &#10006;\r\n                      </button>\r\n                      <input\r\n                        class=\"credit-field\"\r\n                        [attr.id]=\"'imgTag' + i\"\r\n                        type=\"text\"\r\n                        placeholder=\"Enter Credit\"\r\n                      />\r\n                    </li>\r\n                  </ul>\r\n                  <!-- <button (click)=\"addInput()\">Add Input</button>\r\n                                    <div *ngFor=\"let input of inputs\">\r\n                                        <input [(ngModel)]=\"input.value\">\r\n                                    </div>\r\n                                    {{inputs | json}} -->\r\n\r\n                  <!-- <label class=\"add-here\">\r\n                                            <input type=\"file\" name=\"pictures\" id=\"multiImageSelet\" multiple=\"\" class=\"hide-me\">\r\n                                            <i class=\"fa fa-plus\"></i>\r\n                                        </label> -->\r\n                </div>\r\n\r\n                <div *ngIf=\"otherOption == true\" class=\"mark-inv-info\">\r\n                  <!-- <button class=\"btn btn-normal btn-block\" data-toggle=\"modal\"\r\n                                        data-target=\"#enter-credit\">{{postImageTag}}</button> -->\r\n                  <div class=\"form-group flex-me\">\r\n                    <input\r\n                      id=\"post_perms\"\r\n                      name=\"accept\"\r\n                      type=\"checkbox\"\r\n                    /><span>\r\n                      I here by confirm that the content uploaded here is\r\n                      original and i have rights to post them.\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-7 col-md-7 col-sm-6 col-6\">\r\n              <div class=\"loc-icon\">\r\n                <ul>\r\n                  <li>\r\n                    <label class=\"my-add-img\"\r\n                      ><input\r\n                        type=\"file\"\r\n                        id=\"multiImageSelet\"\r\n                        (change)=\"chooseImage($event)\"\r\n                        multiple\r\n                        class=\"hide-me\" /><i class=\"fa fa-image\"></i\r\n                    ></label>\r\n                  </li>\r\n                  <li>\r\n                    <a\r\n                      href=\"JavaScript:void(0);\"\r\n                      data-dismiss=\"modal\"\r\n                      data-toggle=\"modal\"\r\n                      data-target=\"#involvement-location\"\r\n                      ><i class=\"fa fa-map-marker\"></i\r\n                    ></a>\r\n                  </li>\r\n                  <!-- <li><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#enter-user-tags\">@</a></li> -->\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-5 col-sm-6 col-6\">\r\n              <button class=\"btn btn-yellow btn-block\" id=\"post_btn\">\r\n                SUBMIT\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <div style=\"color: red\">\r\n            <span>{{ errormessage }}</span>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Involvement Location Modal -->\r\n<div id=\"involvement-location\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"map-rel\">\r\n        <div\r\n          class=\"modal-body\"\r\n          style=\"width: 100%; height: 300px; display: none\"\r\n          id=\"create_post_map\"\r\n        ></div>\r\n        <div\r\n          class=\"modal-body\"\r\n          style=\"width: 100%; height: 300px\"\r\n          id=\"map1\"\r\n        ></div>\r\n        <!-- <button class=\"map-absol\"><img src=\"assets/images/icon/pin_red.png\" /></button> -->\r\n      </div>\r\n      <div class=\"modal-footer my-modal-footer\">\r\n        <button\r\n          style=\"background: #ffd705 !important\"\r\n          class=\"btn btn-simple btn-block\"\r\n          data-dismiss=\"modal\"\r\n          data-toggle=\"modal\"\r\n          data-target=\"#involvement\"\r\n          (click)=\"GetCenterLocation()\"\r\n        >\r\n          SELECT LOCATION\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <app-footer></app-footer> -->\r\n\r\n<!-- Post Question Modal -->\r\n<div id=\"post-question\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          &times;\r\n        </button>\r\n        <h3 class=\"text-center\">POST A QUESTION</h3>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\" [formGroup]=\"QuestCreateForm\">\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"text\"\r\n            formControlName=\"nickName\"\r\n            placeholder=\"Enter your nickname (optional)\"\r\n            class=\"form-control\"\r\n          />\r\n        </div>\r\n        <div *ngIf=\"isNickname == true\" class=\"text-danger\">\r\n          {{ message }}\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <textarea\r\n            formControlName=\"description\"\r\n            placeholder=\"Write description\"\r\n            class=\"form-control\"\r\n          ></textarea>\r\n        </div>\r\n        <div *ngIf=\"isDescription == true\" class=\"text-danger\">\r\n          {{ message }}\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"file\"\r\n            accept=\"image/*\"\r\n            style=\"display: none\"\r\n            name=\"image\"\r\n            id=\"questimg\"\r\n            class=\"form-control\"\r\n            (change)=\"onFileChanged($event)\"\r\n          />\r\n          <label for=\"questimg\" class=\"btn btn-simple btn-block\"\r\n            >Add picture</label\r\n          >\r\n        </div>\r\n\r\n        <div class=\"location-img\">\r\n          <img id=\"imagefile\" src=\"/assets/images/place_image.png\" />\r\n        </div>\r\n\r\n        <div *ngIf=\"isImage == true\" class=\"text-danger\">\r\n          {{ message }}\r\n        </div>\r\n        <button\r\n          type=\"submit\"\r\n          (click)=\"saveQuestion($event)\"\r\n          class=\"btn btn-simple btn-block\"\r\n        >\r\n          Submit\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"enter-credit\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          &times;\r\n        </button>\r\n        <h3 class=\"text-center\">ENTER OWNER'S NAME</h3>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\">\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"text\"\r\n            id=\"creditt\"\r\n            name=\"credit\"\r\n            placeholder=\"Type\"\r\n            class=\"form-control\"\r\n          />\r\n        </div>\r\n        <button\r\n          class=\"btn btn-simple btn-block\"\r\n          (click)=\"hit()\"\r\n          data-dismiss=\"modal\"\r\n        >\r\n          SAVE\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- enter  Tags Model  popup-->\r\n\r\n<div id=\"enter-tags\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          &times;\r\n        </button>\r\n        <h3 class=\"text-center\">ENTER TAGS</h3>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\">\r\n        <div class=\"form-group\">\r\n          <mat-chip-list #chipList aria-label=\"Taggs selection\">\r\n            <mat-chip\r\n              *ngFor=\"let tagg of taggs\"\r\n              id=\"mtChip\"\r\n              [selectable]=\"selectable\"\r\n              [removable]=\"removable\"\r\n              (removed)=\"remove(tagg)\"\r\n            >\r\n              {{ tagg.name }}\r\n              <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n            </mat-chip>\r\n            <input\r\n              [formControl]=\"new_tag\"\r\n              (keyup.enter)=\"onEnter()\"\r\n              placeholder=\"New tagg...\"\r\n              [matChipInputFor]=\"chipList\"\r\n              [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n              [matChipInputAddOnBlur]=\"addOnBlur\"\r\n              (matChipInputTokenEnd)=\"add($event)\"\r\n              class=\"form-control\"\r\n            />\r\n          </mat-chip-list>\r\n        </div>\r\n        <div class=\"form-group\" style=\"height: 11rem; overflow: auto\">\r\n          <ul *ngFor=\"let t of tagsList\" class=\"tag-ul\">\r\n            <li (click)=\"addTag($event)\">{{ t }}</li>\r\n          </ul>\r\n        </div>\r\n        <button\r\n          class=\"btn btn-simple btn-block\"\r\n          (click)=\"saveTag()\"\r\n          data-dismiss=\"modal\"\r\n        >\r\n          SAVE\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"enter-user-tags\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          &times;\r\n        </button>\r\n        <h3 class=\"text-center\">Select Users</h3>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\">\r\n        <div class=\"form-group\">\r\n          <mat-chip-list #chipList aria-label=\"userTaggs selection\">\r\n            <mat-chip\r\n              *ngFor=\"let u of userTaggs\"\r\n              [selectable]=\"selectable\"\r\n              [removable]=\"removable\"\r\n              (removed)=\"remove2(u)\"\r\n            >\r\n              {{ u.username }}\r\n              <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n            </mat-chip>\r\n            <input\r\n              [formControl]=\"userTag\"\r\n              placeholder=\"Tag...\"\r\n              [matChipInputFor]=\"chipList\"\r\n              [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n              [matChipInputAddOnBlur]=\"addOnBlur\"\r\n              (matChipInputTokenEnd)=\"add2($event)\"\r\n              class=\"form-control\"\r\n            />\r\n          </mat-chip-list>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <!-- <ul *ngFor=\" let t of userTagsList\" class=\"tag-ul\">\r\n                        <li (click)=\"addUserTag($event)\">{{t.username}}</li>\r\n                        <span class=\"tag-span\">{{t.email}}</span>\r\n                    </ul> -->\r\n          <mat-list>\r\n            <mat-list-item\r\n              *ngFor=\"let user of userTagsList\"\r\n              (click)=\"addUserTag(user)\"\r\n            >\r\n              <img mat-list-avatar [src]=\"user.profile_image\" />\r\n              <h4 mat-line>{{ user.username }}</h4>\r\n              <h6 class=\"em-color\" mat-line>{{ user.email }}</h6>\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </div>\r\n        <button\r\n          class=\"btn btn-simple btn-block\"\r\n          (click)=\"saveTag()\"\r\n          data-dismiss=\"modal\"\r\n        >\r\n          SAVE\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  class=\"modal fade\"\r\n  id=\"exampleModalCenter\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"exampleModalCenterTitle\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Modal title</h5>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          data-dismiss=\"modal\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row other-wrap\">\r\n          <div class=\"col-lg-4 col-md-5 col-sm-12 col-12\">\r\n            <div class=\"public-detail\">\r\n              <div class=\"dropdown flag-drop\" *ngIf=\"!is_reported\">\r\n                <button\r\n                  class=\"dropdown-toggle\"\r\n                  type=\"button\"\r\n                  id=\"dropdownMenuButton\"\r\n                  data-toggle=\"dropdown\"\r\n                  aria-haspopup=\"true\"\r\n                  aria-expanded=\"false\"\r\n                >\r\n                  <img class=\"flag\" src=\"assets/images/icon/flag.png\" />\r\n                </button>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                  <label\r\n                    *ngFor=\"let reason of report_reasons\"\r\n                    class=\"dropdown-item\"\r\n                    ><input\r\n                      type=\"radio\"\r\n                      (click)=\"reportPost(reason.id)\"\r\n                      name=\"choose\"\r\n                    />{{ reason.reason }}</label\r\n                  >\r\n                </div>\r\n              </div>\r\n              <div class=\"user-details\">\r\n                <div class=\"form-group\">\r\n                  <input\r\n                    type=\"text\"\r\n                    readonly=\"true\"\r\n                    class=\"form-control\"\r\n                    placeholder=\"{{ questionDetail?.nickname }}\"\r\n                  />\r\n                </div>\r\n                <p>{{ questionDetail?.question_text }}</p>\r\n                <ul>\r\n                  <li>\r\n                    <a\r\n                      href=\"JavaScript:void(0);\"\r\n                      data-toggle=\"modal\"\r\n                      data-target=\"#comment\"\r\n                      ><img src=\"assets/images/icon/qa.png\" />\r\n                      <p class=\"padding-0\">\r\n                        {{ questionDetail?.total_comments }}\r\n                      </p>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                      <div class=\"dropdown flag-drop flag-margn\">\r\n                        <button\r\n                          class=\"dropdown-toggle\"\r\n                          type=\"button\"\r\n                          id=\"dropdownMenuButton\"\r\n                          data-toggle=\"dropdown\"\r\n                          aria-haspopup=\"true\"\r\n                          aria-expanded=\"false\"\r\n                        >\r\n                          <a href=\"JavaScript:void(0);\"\r\n                            ><img src=\"assets/images/icon/share.png\" />\r\n                            <p class=\"padding-0\"></p>\r\n                          </a>\r\n                        </button>\r\n                        <div\r\n                          class=\"dropdown-menu\"\r\n                          aria-labelledby=\"dropdownMenuButton\"\r\n                        >\r\n                          <a\r\n                            routerLink=\"https://www.linkedin.com/shareArticle?mini=true&url=https://insite.fluper.in/public-detailed-view/{{\r\n                              post_id\r\n                            }}\"\r\n                            target=\"_blank\"\r\n                          >\r\n                            <label class=\"dropdown-item\">\r\n                              Share on linkedin</label\r\n                            >\r\n                          </a>\r\n                          <a\r\n                            routerLink=\"https://www.facebook.com/sharer/sharer.php?u=https://insite.fluper.in/public-detailed-view/{{\r\n                              post_id\r\n                            }}\"\r\n                            target=\"_blank\"\r\n                          >\r\n                            <label class=\"dropdown-item\">\r\n                              Share on Facebook</label\r\n                            >\r\n                          </a>\r\n                          <a\r\n                            routerLink=\"https://twitter.com/intent/tweet?original_referer=https://insite.fluper.in/public-detailed-view/{{\r\n                              post_id\r\n                            }}\"\r\n                            target=\"_blank\"\r\n                          >\r\n                            <label class=\"dropdown-item\">\r\n                              Share on twitter</label\r\n                            >\r\n                          </a>\r\n                          <a></a>\r\n                          <label (click)=\"copyLink()\" class=\"dropdown-item\"\r\n                            >Copy link</label\r\n                          >\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <a routerLink=\"JavaScript:void(0);\"\r\n                      ><img\r\n                        (click)=\"likeDislikePost(questionDetail?.is_liked)\"\r\n                        src=\"assets/images/icon/like.png\"\r\n                      />\r\n                      <p class=\"padding-0\">{{ questionDetail?.total_likes }}</p>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a routerLink=\"JavaScript:void(0);\"\r\n                      ><img\r\n                        (click)=\"\r\n                          navigateOnMap(\r\n                            questionDetail?.lat,\r\n                            questionDetail?.lon\r\n                          )\r\n                        \"\r\n                        src=\"assets/images/icon/sent_mail.png\"\r\n                      />\r\n                      <p class=\"padding-0\"></p>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-8 col-md-7 col-sm-12 col-12\">\r\n            <a\r\n              routerLink=\"{{ questionDetail?.picture }}\"\r\n              target=\"_blank\"\r\n              rel=\"noopener noreferrer\"\r\n            >\r\n              <div\r\n                class=\"destroted\"\r\n                [ngStyle]=\"{\r\n                  'background-image': 'url(' + questionDetail?.picture + ')'\r\n                }\"\r\n              ></div>\r\n            </a>\r\n            <div class=\"cover-pic\">\r\n              <img src=\"{{ questionDetail?.picture }}\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\r\n          Close\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- =============================================== -->\r\n<!------------- Manufacture Modal  ----------------->\r\n\r\n<div id=\"manufacture\" class=\"modal fade\" role=\"dialog \">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          &times;\r\n        </button>\r\n        <h3 class=\"text-center\">Invite Users</h3>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\">\r\n        <form\r\n          #userlogin=\"ngForm\"\r\n          (ngSubmit)=\"manufactureSubmit(userlogin.value)\"\r\n        >\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      type=\"text\"\r\n                      name=\"email_id\"\r\n                      ngModel\r\n                      placeholder=\"Enter email / username\"\r\n                      class=\"form-control\"\r\n                    />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      type=\"text\"\r\n                      ngModel\r\n                      name=\"project_name\"\r\n                      placeholder=\"Project Name\"\r\n                      class=\"form-control\"\r\n                    />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <p\r\n                      style=\"\r\n                        text-align: start;\r\n                        padding: 5px;\r\n                        border: 1px solid #cdcfd2 !important;\r\n                      \"\r\n                    >\r\n                      Please register on INSITE and post 'Project Name' here.\r\n                      The community will be happy to learn about it!\r\n                    </p>\r\n                  </div>\r\n                  <div class=\"mb-3\">\r\n                    <textarea\r\n                      class=\"form-control\"\r\n                      name=\"text\"\r\n                      ngModel\r\n                      placeholder=\"Additional text\"\r\n                      rows=\"3\"\r\n                    ></textarea>\r\n                  </div>\r\n                  <!-- =================================== -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div style=\"color: red\">\r\n            <span>{{ errormessage }}</span>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-secondary\"\r\n              data-dismiss=\"modal\"\r\n            >\r\n              Close\r\n            </button>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Send</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          &times;\r\n        </button>\r\n        <h4 class=\"modal-title\">Modal Header</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Some text in the modal.</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\r\n          Close\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- ===========Manufacture Modal end  ============ -->\r\n\r\n<app-footer></app-footer>\r\n\r\n<div\r\n  class=\"modal fade\"\r\n  id=\"demomodal\"\r\n  data-bs-backdrop=\"static\"\r\n  data-bs-keyboard=\"false\"\r\n  tabindex=\"-1\"\r\n  aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModal\">Modal title</h5>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn-close\"\r\n          data-bs-dismiss=\"modal\"\r\n          aria-label=\"Close\"\r\n        ></button>\r\n      </div>\r\n      <div class=\"modal-body\">...</div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">\r\n          Close\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Understood</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  style=\"z-index: 99999; position: absolute; top: 10%; right: 0\"\r\n  class=\"alert alert-warning alert-dismissible fade show\"\r\n  role=\"alert\"\r\n  *ngIf=\"alertnotification\"\r\n>\r\n  <strong>Holy guacamole!</strong> You should check in on some of those fields\r\n  below.\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/involvement/involvement.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/involvement/involvement.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row involvement-wrap\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-11 col-md-11 col-sm-11 col-11\">\r\n          <div\r\n            *ngIf=\"!is_reported\"\r\n            class=\"dropdown flag-drop flag-margn flag-1\"\r\n          >\r\n            <button\r\n              class=\"dropdown-toggle\"\r\n              type=\"button\"\r\n              id=\"dropdownMenuButton\"\r\n              data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\"\r\n              aria-expanded=\"false\"\r\n            >\r\n              <img class=\"flag\" src=\"assets/images/icon/flag.png\" />\r\n            </button>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n              <label *ngFor=\"let reason of report_reasons\" class=\"dropdown-item\"\r\n                ><input\r\n                  type=\"radio\"\r\n                  (click)=\"reportPost(reason.id)\"\r\n                  name=\"choose\"\r\n                />{{ reason.reason }}</label\r\n              >\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div>\r\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-6 text-right\">\r\n            <div class=\"dropdown\">\r\n              <a\r\n                *ngIf=\"postDetail['created_by'] == username\"\r\n                class=\"btn btn-more dropdown-toggle\"\r\n                routerLink=\"#\"\r\n                role=\"button\"\r\n                id=\"dropdownMenuLink\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                aria-expanded=\"false\"\r\n              >\r\n                <i class=\"fa fa-ellipsis-v\"></i>\r\n              </a>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n                <a\r\n                  *ngIf=\"postDetail['created_by'] == username\"\r\n                  class=\"dropdown-item\"\r\n                  routerLink=\"javascript:void(0);\"\r\n                  data-target=\"#remove\"\r\n                  data-toggle=\"modal\"\r\n                  >Remove Post</a\r\n                >\r\n                <a\r\n                  *ngIf=\"postDetail['created_by'] == username\"\r\n                  class=\"dropdown-item\"\r\n                  routerLink=\"javascript:void(0);\"\r\n                  [routerLink]=\"['/edit-post', this.post_id]\"\r\n                  >Edit Post</a\r\n                >\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-7 col-md-12 col-sm-12 col-12\">\r\n          <div class=\"inv-heading\">\r\n            <h4>\r\n              {{ projectType }} {{ project_category }}\r\n              <span>{{ created_on }}</span>\r\n            </h4>\r\n            <h4>\r\n              {{ postname }} |\r\n              <span class=\"cursor fw-500-in\" (click)=\"navigateProfile()\">\r\n                {{ created_by }}\r\n              </span>\r\n            </h4>\r\n            <!-- <h4> {{userData.username}}</h4> <h4> {{userData.company_detail.name}}</h4> -->\r\n            <!-- <h4>ARCHITECTURE</h4> -->\r\n            <p>{{ postlocation }}</p>\r\n          </div>\r\n          <div class=\"inv-img\" *ngIf=\"post_images.length > 0\">\r\n            <ul>\r\n              <li *ngFor=\"let image of _albums; let i = index\">\r\n                <a routerLink=\"JavaScript:void(0);\" data-toggle=\"modal\">\r\n                  <img [src]=\"image.src\" (click)=\"open(i)\" />\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"inv-details\">\r\n            <h6><strong>Description</strong></h6>\r\n            <p>{{ description }}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-5 col-md-12 col-sm-12 col-12 rep-me\">\r\n          <div class=\"inv-right-heading\">\r\n            <h6>\r\n              <strong>Involvement</strong>\r\n              <span *ngIf=\"isMarkInv\"\r\n                ><button\r\n                  type=\"button\"\r\n                  class=\"btn-yellow-circle\"\r\n                  data-toggle=\"modal\"\r\n                  (click)=\"openMarkInvDialog()\"\r\n                >\r\n                  +\r\n                </button></span\r\n              >\r\n            </h6>\r\n          </div>\r\n\r\n          <div\r\n            class=\"inv-right-details\"\r\n            *ngFor=\"let allinvolvement of involvements_Arraykeys\"\r\n          >\r\n            <h6 class=\"iran\">\r\n              <strong>{{ allinvolvement }}</strong>\r\n            </h6>\r\n            <div class=\"row\">\r\n              <div\r\n                class=\"col-lg-2 col-md-2 col-sm-2 col-2\"\r\n                *ngFor=\"let involvement of involvements[allinvolvement]\"\r\n              >\r\n                <a\r\n                  routerLink=\"JavaScript:void(0);\"\r\n                  (click)=\"getName(involvement?.name)\"\r\n                >\r\n                  <div class=\"product-img\">\r\n                    <img\r\n                      src=\"{{\r\n                        involvement?.profile_image ||\r\n                          '/assets/images/logo-collapse.png'\r\n                      }}\"\r\n                    />\r\n                  </div>\r\n                  <div class=\"product-info\">\r\n                    <h6>\r\n                      {{ involvement?.company_name }} {{ involvement?.name }}\r\n                    </h6>\r\n                    <!-- [routerLink]='[\"/users-profile\", involvement?.name]' -->\r\n                  </div>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n          <div class=\"bottom-comment\">\r\n            <ul>\r\n              <li>\r\n                <a\r\n                  routerLink=\"JavaScript:void(0);\"\r\n                  data-toggle=\"modal\"\r\n                  data-target=\"#likes\"\r\n                  ><img src=\"assets/images/icon/chat.png\" />\r\n                  <p class=\"padding-0\">{{ total_comments }}</p>\r\n                </a>\r\n              </li>\r\n\r\n              <li>\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                  <div class=\"dropdown flag-drop flag-margn\">\r\n                    <button\r\n                      class=\"dropdown-toggle\"\r\n                      type=\"button\"\r\n                      id=\"dropdownMenuButton\"\r\n                      data-toggle=\"dropdown\"\r\n                      aria-haspopup=\"true\"\r\n                      aria-expanded=\"false\"\r\n                    >\r\n                      <a routerLink=\"JavaScript:void(0);\"\r\n                        ><img src=\"assets/images/icon/share.png\" />\r\n                        <p class=\"padding-0\"></p>\r\n                      </a>\r\n                    </button>\r\n                    <div\r\n                      class=\"dropdown-menu\"\r\n                      aria-labelledby=\"dropdownMenuButton\"\r\n                    >\r\n                      <a\r\n                        href=\"https://www.linkedin.com/shareArticle?mini=true&url=https://insite.city/involvement/{{\r\n                          post_id\r\n                        }}\"\r\n                        target=\"_blank\"\r\n                      >\r\n                        <label class=\"dropdown-item\"> Share on linkedin</label>\r\n                      </a>\r\n                      <a\r\n                        href=\"https://www.facebook.com/sharer/sharer.php?u=https://insite.city/involvement/{{\r\n                          post_id\r\n                        }}\"\r\n                        target=\"_blank\"\r\n                      >\r\n                        <label class=\"dropdown-item\"> Share on Facebook</label>\r\n                      </a>\r\n                      <a\r\n                        href=\"https://twitter.com/intent/tweet?original_referer=https://insite.city/involvement/{{\r\n                          post_id\r\n                        }}\"\r\n                        target=\"_blank\"\r\n                      >\r\n                        <label class=\"dropdown-item\"> Share on twitter</label>\r\n                      </a>\r\n                      <a></a>\r\n                      <label (click)=\"copyLink()\" class=\"dropdown-item\"\r\n                        >Copy link</label\r\n                      >\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n\r\n              <!-- like  unlike  -->\r\n              <li>\r\n                <a\r\n                  href=\"javascript:void(0)\"\r\n                  [ngStyle]=\"is_liked ? { color: 'blue' } : { color: 'black' }\"\r\n                >\r\n                  <!-- <img\r\n                    (click)=\"likeDislikePost(is_liked)\"\r\n                    src=\"assets/images/icon/like.png\"\r\n                  /> -->\r\n                  <i\r\n                    class=\"bi bi-hand-thumbs-up-fill\"\r\n                    style=\"font-size: 25px\"\r\n                    (click)=\"likeDislikePost(is_liked)\"\r\n                  ></i>\r\n                  <p class=\"padding-0\">{{ total_likes }}</p>\r\n                </a>\r\n              </li>\r\n\r\n              <!-- like  unlike end  -->\r\n\r\n              <li *ngIf=\"createdByuser == false\">\r\n                <a routerLink=\"JavaScript:void(0);\"\r\n                  ><img\r\n                    (click)=\"navigateOnMap(lat, lon)\"\r\n                    src=\"assets/images/icon/sent_mail.png\"\r\n                  />\r\n                  <p class=\"padding-0\"></p>\r\n                </a>\r\n              </li>\r\n              <li *ngIf=\"createdByuser == true\">\r\n                <a\r\n                  data-toggle=\"modal\"\r\n                  data-target=\"#enter-user-tags\"\r\n                  routerLink=\"JavaScript:void(0);\"\r\n                  ><img src=\"assets/images/icon/megaphone.png\" />\r\n                  <p class=\"padding-0\"></p>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- ================================ -->\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <div class=\"likes-list\" style=\"height: 300px; overflow-y: auto\">\r\n            <ul *ngFor=\"let c of comments; let i = index\">\r\n              <li>\r\n                <div class=\"likes-flex\">\r\n                  <div class=\"likes-img\">\r\n                    <img\r\n                      src=\"{{\r\n                        comments[i].comment_by.profile_image ||\r\n                          'assets/images/1099386850.jpg'\r\n                      }}\"\r\n                    />\r\n                  </div>\r\n                  <div class=\"likes-name\">\r\n                    <h6>{{ comments[i].comment_by.company_name }}</h6>\r\n                    <h6>{{ comments[i].comment_by.name }}</h6>\r\n                    <p>{{ comments[i].created }}</p>\r\n                  </div>\r\n\r\n                  <div class=\"likes\">\r\n                    <a routerLink=\"JavaScript:void(0);\">\r\n                      <img\r\n                        (click)=\"\r\n                          likeDislikeComment(\r\n                            comments[i].id,\r\n                            comments[i].is_liked\r\n                          )\r\n                        \"\r\n                        src=\"assets/images/icon/like.png\"\r\n                      /><span>{{ comments[i].total_like }}</span>\r\n                    </a>\r\n\r\n                    <!-- ================================== -->\r\n                    <div class=\"pt-2 reply\" style=\"cursor: pointer\">\r\n                      <p data-toggle=\"modal\" data-target=\"#reply\">Reply</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"likes-info\">\r\n                  <p>{{ comments[i].content }}</p>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- ===================== -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- <app-footer></app-footer> -->\r\n\r\n<!--------------------------- Modal Start--------------------------------->\r\n<div\r\n  class=\"modal fade\"\r\n  id=\"my-pic\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content content-edit\">\r\n      <div class=\"modal-body img-modal\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          data-dismiss=\"modal\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <img id=\"show_img\" src=\"\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  class=\"modal fade\"\r\n  id=\"my-videos\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content content-edit\">\r\n      <div class=\"modal-body img-modal\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          data-dismiss=\"modal\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <video controls>\r\n          <source src=\"assets/images/my-video.mp4\" type=\"video/mp4\" />\r\n        </video>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"likes\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <button\r\n        class=\"close\"\r\n        id=\"comment_close\"\r\n        style=\"text-align: right; margin-right: 10px\"\r\n        data-dismiss=\"modal\"\r\n      >\r\n        &times;\r\n      </button>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n            <div class=\"likes-list\" style=\"height: 350px; overflow-y: scroll\">\r\n              <ul *ngFor=\"let c of comments; let i = index\">\r\n                <li>\r\n                  <div class=\"likes-flex\">\r\n                    <div class=\"likes-img\">\r\n                      <img\r\n                        src=\"{{\r\n                          comments[i].comment_by.profile_image ||\r\n                            'assets/images/1099386850.jpg'\r\n                        }}\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"likes-name\">\r\n                      <h6>{{ comments[i].comment_by.company_name }}</h6>\r\n                      <h6>{{ comments[i].comment_by.name }}</h6>\r\n                      <p>{{ comments[i].created }}</p>\r\n                    </div>\r\n\r\n                    <div class=\"likes\">\r\n                      <a routerLink=\"JavaScript:void(0);\">\r\n                        <img\r\n                          (click)=\"\r\n                            likeDislikeComment(\r\n                              comments[i].id,\r\n                              comments[i].is_liked\r\n                            )\r\n                          \"\r\n                          src=\"assets/images/icon/like.png\"\r\n                        /><span>{{ comments[i].total_like }}</span>\r\n                      </a>\r\n\r\n                      <!-- ================================== -->\r\n                      <div class=\"pt-2 reply\" style=\"cursor: pointer\">\r\n                        <p data-toggle=\"modal\" data-target=\"#reply\">Reply</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"likes-info\">\r\n                    <p>{{ comments[i].content }}</p>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"comment\">\r\n              <div class=\"form-group\">\r\n                <textarea\r\n                  type=\"text\"\r\n                  id=\"content\"\r\n                  [formControl]=\"content\"\r\n                  class=\"form-control\"\r\n                  placeholder=\"Write a comment\"\r\n                ></textarea>\r\n              </div>\r\n              <div style=\"color: red\">\r\n                <span>{{ errormessage }}</span>\r\n              </div>\r\n              <button class=\"btn btn-yellow\" (click)=\"commentPost()\">\r\n                Submit\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- =================reply================= -->\r\n<div\r\n  class=\"modal fade\"\r\n  id=\"reply\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          data-dismiss=\"modal\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"modal-body\">\r\n        <form\r\n          novalidate\r\n          [formGroup]=\"replayForm\"\r\n          (ngSubmit)=\"replySubmit(replayForm.value)\"\r\n        >\r\n          <textarea class=\"form-control\" formControlName=\"name\"></textarea>\r\n          <button type=\"submit\" class=\"btn btn-warning mt-2\">Replay</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--------------------------- Modal End-------------------------------->\r\n\r\n<!-- Post Question Modal -->\r\n<div id=\"involvement\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          &times;\r\n        </button>\r\n        <h3 class=\"text-center\">MARK INVOLVEMENT</h3>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\" [formGroup]=\"markinvolvementForm\">\r\n        <div class=\"form-group\">\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            placeholder=\"{{ isFullMarkForm ? 'Product Manufacturers' : 'Execution' }}\"\r\n            readonly\r\n          />\r\n          <!-- <select disabled formControlName=\"involvement_type\" class=\"form-control\">\r\n            <option   class=\"light-color-me\">Execution</option>\r\n            <option *ngFor=\"let type of involvements_types\" value=\"{{type?.id}}\">{{type?.type}}</option>\r\n          </select> -->\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"text\"\r\n            formControlName=\"element\"\r\n            placeholder=\"Enter keyword for element\"\r\n            class=\"form-control\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"text\"\r\n            formControlName=\"material\"\r\n            placeholder=\"Enter keyword for material\"\r\n            class=\"form-control\"\r\n          />\r\n        </div>\r\n    <div *ngIf=\"isFullMarkForm\">\r\n        <label class=\"beech-me\" for=\"addpic\">\r\n          <div class=\"prev-me-img\">\r\n            <img id=\"previewImg\" src=\"/assets/images/place_image.png\" alt=\" \" />\r\n          </div>\r\n        </label>\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"file\"\r\n            id=\"addpic\"\r\n            placeholder=\"Add pic\"\r\n            class=\"hide-me\"\r\n            (change)=\"CheckUploadedImage($event)\"\r\n          />\r\n          <label for=\"addpic\" class=\"btn btn-simple btn-block\"\r\n            >Upload picture</label\r\n          >\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"text\"\r\n            formControlName=\"link\"\r\n            placeholder=\"Embed the link with the picture\"\r\n            class=\"form-control\"\r\n          />\r\n        </div>\r\n\r\n        </div>\r\n\r\n        <div style=\"color: red\">\r\n          <span>{{ errormessage }}</span>\r\n        </div>\r\n\r\n        <button\r\n          type=\"submit\"\r\n          (click)=\"submitMarkInvolvementForm()\"\r\n          class=\"btn btn-simple btn-block\"\r\n          data-toggle=\"modal\"\r\n        >\r\n          SAVE\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"remove\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body logout-modal-body\">\r\n        <h3 class=\"text-center\">Alert</h3>\r\n        <p>Do you really want to remove this post</p>\r\n        <button class=\"btn btn-third\" data-dismiss=\"modal\">NO</button>\r\n        <button\r\n          class=\"btn btn-simple\"\r\n          data-dismiss=\"modal\"\r\n          (click)=\"removePost()\"\r\n        >\r\n          YES\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"enter-user-tags\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <form [formGroup]=\"inviteForm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header my-modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n            &times;\r\n          </button>\r\n          <h3 class=\"text-center\">Select Users</h3>\r\n        </div>\r\n        <div class=\"modal-body my-modal-body\">\r\n          <div class=\"form-group col-md-6 mb-1\">\r\n            <label class=\"\">Add UserTags </label>\r\n\r\n            <ng-multiselect-dropdown\r\n              style=\"padding: 20px\"\r\n              (change)=\"selectedTags()\"\r\n              [ngModelOptions]=\"{ standalone: true }\"\r\n              [placeholder]=\"'All UserTags'\"\r\n              [data]=\"taggedUsrsList\"\r\n              [(ngModel)]=\"selectedTagsss\"\r\n              [settings]=\"dropdownSettings\"\r\n              (onSelect)=\"onItemSelect($event)\"\r\n            >\r\n            </ng-multiselect-dropdown>\r\n            <!-- (onSelectAll)=\"onSelectAll($event)\" -->\r\n          </div>\r\n          <div class=\"form-group col-md-6 mb-1\" style=\"padding-left: 10px\">\r\n            <label>Email</label>\r\n            <input\r\n              type=\"text\"\r\n              formControlName=\"email\"\r\n              placeholder=\"Email\"\r\n              class=\"form-control\"\r\n            />\r\n          </div>\r\n          <!-- <div class=\"form-group\">\r\n                    <mat-chip-list #chipList aria-label=\"userTaggs selection\">\r\n                        <mat-chip *ngFor=\"let u of userTaggs\" [selectable]=\"selectable\"\r\n                        [removable]=\"removable\" (removed)=\"remove2(u)\" >\r\n                            {{u?.username}}\r\n                            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                        </mat-chip>\r\n                        <input  [formControl]=\"userTag\" placeholder=\"Tag...\"\r\n                            [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                            [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add2($event)\"\r\n                            class=\"form-control\">\r\n                    </mat-chip-list>\r\n                </div> -->\r\n          <!-- <div class=\"form-group\">\r\n                \r\n                    <mat-list >\r\n                        <mat-list-item *ngFor=\"let user of userTagsList\" (click)=\"addUserTag(user)\">\r\n                            <img mat-list-avatar [src]=\"user.profile_image\" >\r\n                          <h4 mat-line >{{user.username}}</h4>\r\n                          <h6 class=\"em-color\" mat-line> {{user.email}} </h6>\r\n                        </mat-list-item>\r\n                    </mat-list>\r\n                </div> -->\r\n          <button\r\n            class=\"btn btn-simple btn-block\"\r\n            (click)=\"invite()\"\r\n            data-dismiss=\"modal\"\r\n          >\r\n            Invite\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/legal-policy/legal-policy.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/legal-policy/legal-policy.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row chat-wrap\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <div class=\"chat-heading\">\r\n                        <h3>LEGAL POLICY</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <div class=\"terms-conditions\">\r\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/mark-involvement-gallery/mark-involvement-gallery.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/mark-involvement-gallery/mark-involvement-gallery.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row mark-involvement-wrap\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n          <div class=\"card-involve\">\r\n            <form [formGroup]=\"editForm\">\r\n              <h3>EDIT POST</h3>\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-5 col-md-12 col-sm-12 col-12\" id=\"priority-second\">\r\n                  <div class=\"some-gap\">\r\n                    <div class=\"form-group\">\r\n                      <label> Name</label>\r\n                      <input type=\"text\" formControlName=\"name\" placeholder=\"Enter project name\" class=\"form-control\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label> Project Type</label>\r\n                      <select formControlName=\"projectType\" (click)=\"getType()\" id='selType'\r\n                        class=\"form-control ash-select\">\r\n                        <option disabled>Select Project Type</option>\r\n                        <option *ngFor=\"let b of project_typeData; let i=index\" [value]=\"project_typeData[i]?.id\">\r\n                          {{project_typeData[i].type}}\r\n                        </option>\r\n                      </select>\r\n                      <!-- <input type=\"text\" formControlName=\"projectType\" placeholder=\"Enter project type\"\r\n                        class=\"form-control\"> -->\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label> Project Category</label>\r\n                      <select class=\"form-control ash-select\" [(ngModel)]=\"project_category\"\r\n                        [ngModelOptions]=\"{standalone: true}\">\r\n                        <option class=\"light-color-me\" hidden>Select Project Category\r\n                        </option>\r\n                        <option *ngFor=\"let c of project_categoryData; let i=index\"\r\n                          [value]=\"project_categoryData[i]?.id\">\r\n                          {{project_categoryData[i].category}}\r\n                        </option>\r\n                      </select>\r\n                      <!-- <input type=\"text\" formControlName=\"projectCategory\" placeholder=\"Enter project category\"\r\n                        class=\"form-control\"> -->\r\n                    </div>\r\n\r\n                    <!-- <div class=\"form-group\">\r\n                      <label> Name</label>\r\n                      <input type=\"text\" formControlName=\"name\" placeholder=\"Enter project name\" class=\"form-control\">\r\n                    </div> -->\r\n                    <!-- <div class=\"form-group\">\r\n                                            <label>Tags</label>\r\n\r\n                                            <input type=\"text\" formControlName = \"tags\" placeholder=\"Enter Project category\"\r\n                                                class=\"form-control\">\r\n\r\n                                        </div> -->\r\n\r\n                    <div class=\"form-group\">\r\n\r\n                      <mat-chip-list #chipList aria-label=\"Taggs selection\">\r\n                        <mat-chip *ngFor=\"let tagg of taggs\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n                          (removed)=\"remove(tagg)\">\r\n                          {{tagg.name}}\r\n                          <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                        </mat-chip>\r\n                      </mat-chip-list> <br>\r\n                      <input type=\"text\" formControlName=\"tags\" data-toggle=\"modal\" data-target=\"#enter-tags\"\r\n                        placeholder=\"Enter tags\" class=\"form-control tagcss\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label>Created On</label>\r\n                      <input disabled type=\"text\"  [(ngModel)]=\"FinalDate\" [ngModelOptions]=\"{standalone: true}\"\r\n                        class=\"form-control\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label>Country</label>\r\n                      <input type=\"text\" formControlName=\"country\" class=\"form-control\" disabled>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label>City</label>\r\n                      <input type=\"text\" formControlName=\"city\" [formControl]=\"city\" class=\"form-control\" disabled>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label>Year</label>\r\n                      <input type=\"text\" formControlName=\"year\" class=\"form-control\">\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group\">\r\n                      <label>Total Likes</label>\r\n                      <input type=\"text\" formControlName=\"likes\" class=\"form-control\" readonly>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label>Total Comment</label>\r\n                      <input type=\"text\" formControlName=\"comment\" class=\"form-control\" readonly>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label>Total Share</label>\r\n                      <input type=\"text\" formControlName=\"share\" class=\"form-control\" readonly>\r\n                    </div>\r\n\r\n\r\n\r\n                    <div class=\"form-group\">\r\n                      <label>Description</label>\r\n\r\n                      <textarea type=\"text\" formControlName=\"description\" name=\"question\" rows=\"10\"\r\n                        placeholder=\"Type something..\" class=\"form-control\"></textarea>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-5 col-md-7 col-sm-6 col-6\">\r\n                        <div class=\"loc-icon\">\r\n                          <!-- <ul>\r\n                                            <li><a href=\"JavaScript:void(0);\" routerLink=\"/mark-involvement-gallery\"><i class=\"fa fa-image\"></i></a></li>\r\n                                            <li><a href=\"JavaScript:void(0);\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#mark-involvement-location\"><i class=\"fa fa-map-marker\"></i></a></li>\r\n                                            <li><a href=\"JavaScript:void(0);\">@</a></li>\r\n                                        </ul> -->\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-7 col-md-5 col-sm-6 col-6\">\r\n                        <button class=\"btn btn-yellow btn-block\" (click)=editPost() data-dismiss=\"modal\">SUBMIT</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-lg-5 col-md-12 col-sm-12 col-12 rep-me\">\r\n\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"col-lg-7 col-md-12 col-sm-12 col-12\" id=\"priority-first\">\r\n                  <div class=\"some-gap\">\r\n                    <div class=\"mark-inv-img\">\r\n                      <ul class=\"pictures\">\r\n                        <li class=\"marks\" *ngFor=\"let img of post_images;let i=index\">\r\n                          <a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#my-pic\">\r\n                            <img class=\"imageToZoom\" src={{img.image}}>  </a>\r\n                          \r\n                          <button class=\"remove-pic\" (click)=\"removeImage(img, i)\" >&#10006;</button>\r\n                          <label class=\"d-block\">\r\n                            <input type=\"text\" [(ngModel)]=\"img.image_tag\"\r\n                              [ngModelOptions]=\"{standalone: true}\"></label>\r\n                        </li>\r\n                        <!-- <li class=\"marks\" *ngFor=\"let img of post_images\">\r\n                          <a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#my-pic\">\r\n                            <img class=\"imageToZoom\" [src]='img.image' (click)=\"imgget(img.image)\">\r\n                          </a>image\r\n                          <button class=\"remove-pic\">&#10006;</button>\r\n                          <label class=\"d-block\">\r\n                            <span class=\"btn-gray btn-block\"></span>\r\n                          </label>\r\n                        </li> -->\r\n                      </ul>\r\n                      <label class=\"add-here\">\r\n                        <input type=\"file\" (change)=\"chooseImage($event)\" formControlName=\"image\" name=\"pictures\"\r\n                          id=\"multiImageSelet\" multiple=\"\" class=\"hide-me\">\r\n                        <i class=\"fa fa-plus\"></i>\r\n                      </label>\r\n                    </div>\r\n                    <!-- <div class=\"mark-inv-info\">\r\n                                            <button class=\"btn btn-normal btn-block\"  data-toggle=\"modal\"\r\n                                                data-target=\"#enter-credit\">Enter the credit</button>\r\n                                            <div class=\"form-group flex-me\">\r\n                                                <input name=\"accept\" type=\"checkbox\"><span> I here by confirm that the\r\n                                                    content uploaded here is original and i have rights to post them.\r\n                                                </span>\r\n                                            </div>\r\n                                        </div> -->\r\n                  </div>\r\n\r\n                  <div class=\"inv-right-heading\">\r\n                    <h6><strong>Involvement</strong></h6>\r\n                  </div>\r\n\r\n                  <div class=\"inv-right-details\" *ngFor=\"let allinvolvement of involvements_Arraykeys\">\r\n                    <h6 class='iran'><strong>{{allinvolvement}}</strong></h6>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\"\r\n                        *ngFor=\"let involvement of involvements[allinvolvement]\">\r\n                        <a href=\"JavaScript:void(0);\" (click)='getName(involvement?.name)'>\r\n                          <div class=\"product-img\">\r\n                            <img src=\"{{involvement?.profile_image || '/assets/images/logo-collapse.png'}}\">\r\n                          </div>\r\n                          <div class=\"product-info\">\r\n\r\n                            <h6>{{involvement?.company_name}} {{involvement?.name}}</h6>\r\n                            <!-- [routerLink]='[\"/users-profile\", involvement?.name]' -->\r\n                          </div>\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- <app-footer></app-footer> -->\r\n<!--------------------------- Modal Start--------------------------------->\r\n<div class=\"modal fade\" id=\"my-pic\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content content-edit\">\r\n      <div class=\"modal-body img-modal\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <img id=\"zoomedImage\" src=\"\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"mark-involvement-location\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <iframe\r\n          src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14009.988974783451!2d77.3862821!3d28.6148557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe81b4a8979aa533d!2sFluper%20-%20Mobile%20App%20Development%20Company!5e0!3m2!1sen!2sin!4v1568373293728!5m2!1sen!2sin\"\r\n          width=\"100%\" height=\"300\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\r\n      </div>\r\n      <div class=\"modal-footer my-modal-footer\">\r\n        <button class=\"btn btn-simple btn-block\" data-dismiss=\"modal\">SELECT LOCATION</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"enter-credit\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h3 class=\"text-center\">ENTER OWNER'S NAME</h3>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" name=\"credit\" placeholder=\"Type\" class=\"form-control\">\r\n        </div>\r\n        <button class=\"btn btn-simple btn-block\" data-dismiss=\"modal\">SAVE</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- Enter TAGS -->\r\n\r\n<div id=\"enter-tags\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h3 class=\"text-center\">ENTER TAGS</h3>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\">\r\n        <div class=\"form-group\">\r\n          <mat-chip-list #chipList aria-label=\"Taggs selection\">\r\n            <mat-chip *ngFor=\"let tagg of taggs\" id=\"mtChip\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n              (removed)=\"remove(tagg)\">\r\n              {{tagg.name}}\r\n              <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n            </mat-chip>\r\n            <input [formControl]=\"new_tag\" (keyup.enter)=\"onEnter()\" placeholder=\"New tagg...\"\r\n              [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n              [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\" class=\"form-control\">\r\n          </mat-chip-list>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <ul *ngFor=\" let t of tagsList\" class=\"tag-ul\">\r\n            <li (click)=\"addTag($event)\">{{t}}</li>\r\n          </ul>\r\n        </div>\r\n        <button class=\"btn btn-simple btn-block\" (click)=\"saveTag()\" data-dismiss=\"modal\">SAVE</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--------------------------- Modal End-------------------------------->\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/my-profile/my-profile.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/my-profile/my-profile.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row profile-wrap\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-7 col-md-12 col-sm-12 col-12 border-right-gray\">\r\n          <div class=\"profile-flex\">\r\n            <div class=\"profile-img img-box\">\r\n              <label class=\"fileInput\" for=\"profile-pic\">\r\n                <div class=\"img\">\r\n                  <img\r\n                    class=\"imagefile\"\r\n                    src=\"{{ profiledata?.profile_image }}\"\r\n                  />\r\n                </div>\r\n                <!-- <input type=\"file\" onChange=\"singleFiles(event)\" id=\"profile-pic\" name=\"profile-img\" class=\"hide-me\"> -->\r\n                <!-- <i class=\"fa fa-pencil\"></i> -->\r\n              </label>\r\n            </div>\r\n            <div class=\"profile-heading\">\r\n              <h6 class=\"fw-600 text-uppercase\">{{ showName }}</h6>\r\n              <h6 class=\"fw-600 text-uppercase\">{{ profiledata?.username }}</h6>\r\n            </div>\r\n          </div>\r\n          <div class=\"inv-details\">\r\n            <p>{{ profiledata?.about }}</p>\r\n          </div>\r\n          <div class=\"followers\">\r\n            <ul>\r\n              <!-- <li><button class=\"btn btn-primary btn-sm\" (onClick)=\"postFollow()\">Follow</button></li> -->\r\n              <!-- <li><button class=\"btn btn-primary btn-sm\">Unfollow</button></li> -->\r\n              <li>\r\n                <img src=\"assets/images/icon/hearts.png\" /><span>{{\r\n                  profiledata?.total_likes\r\n                }}</span>\r\n              </li>\r\n              <li>\r\n                Followers\r\n                <span>{{\r\n                  profiledata?.total_follow_to + followdata?.followed\r\n                }}</span>\r\n              </li>\r\n              <li>\r\n                Following <span>{{ profiledata?.total_follow_by }}</span>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"my-details\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-borderless\">\r\n                <tbody>\r\n                  <tr>\r\n                    <th>Type of Account</th>\r\n                    <td>{{ profiledata?.profile_type }}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>Email ID</th>\r\n                    <td>{{ profiledata?.email }}</td>\r\n                  </tr>\r\n                  <!-- <tr>\r\n                                      <th>Mobile Number</th>\r\n                                      <td>{{profiledata?.mobile_number}}</td>\r\n                                  </tr> -->\r\n                  <tr *ngIf=\"companyname\">\r\n                    <th>Year of Founding</th>\r\n                    <td>\r\n                      {{ profiledata?.company_detail?.year_of_foundation }}\r\n                    </td>\r\n                  </tr>\r\n                  <!-- <tr>\r\n                                      <th>Occupation</th>\r\n                                      <td>{{profiledata?.company_detail?.description}}</td>\r\n                                  </tr> -->\r\n                  <tr *ngIf=\"companyname\">\r\n                    <th>Address</th>\r\n                    <td>\r\n                      {{ profiledata?.company_detail?.address_line1 }},{{\r\n                        profiledata?.company_detail?.address_line2\r\n                      }},{{ profiledata?.company_detail?.address_line3 }}\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"companyname\" class=\"my-projects\">\r\n            <div class=\"add-projects\">\r\n              <h6>\r\n                My Projects\r\n                <!-- <span\r\n                  ><button\r\n                    type=\"button\"\r\n                    data-toggle=\"modal\"\r\n                    data-target=\"#involvement\"\r\n                  >\r\n                    &#43;\r\n                  </button></span\r\n                > -->\r\n              </h6>\r\n              <h6>Total Projects {{ profiledata?.total_projects }}</h6>\r\n            </div>\r\n            <div class=\"project-list\">\r\n              <!-- <button type=\"button\" data-toggle=\"modal\"\r\n                                      data-target=\"#enter-user-tags\" >&#43;</button> -->\r\n              <ul class=\"scroll-width myprofileli\">\r\n                <li class=\"main_li\" *ngFor=\"let projectdata of projectdata\">\r\n                  <div class=\"box-shadow\">\r\n                    <a\r\n                      [routerLink]=\"['involvement/' + projectdata?.id]\"\r\n                      class=\"project-view\"\r\n                    >\r\n                      <img\r\n                        src=\"{{ projectdata?.post_image?.image }}\"\r\n                        (contextmenu)=\"onRightClick($event)\"\r\n                      />\r\n                      <div class=\"clip-head\">\r\n                        <h6>\r\n                          {{ projectdata?.name }}'s Projects |\r\n                          {{ projectdata?.project_type?.type }}\r\n                        </h6>\r\n                      </div>\r\n                      <div class=\"bottom-info\">\r\n                        <ul>\r\n                          <li class=\"my-para\">\r\n                            <p>\r\n                              {{ projectdata?.city }},\r\n                              {{ projectdata?.country }}\r\n                            </p>\r\n                            <p>{{ projectdata?.year }}</p>\r\n                          </li>\r\n                          <li class=\"my-plane\">\r\n                            <button routerLink=\"/involvement\">\r\n                              <i class=\"fa fa-paper-plane\"></i>\r\n                            </button>\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </a>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <div class=\"my-social-link d-block\">\r\n              <div class=\"project-social\">\r\n                <a\r\n                  (click)=\"openLink(socialLinks1)\"\r\n                  ngDefaultControl\r\n                  [ngModel]=\"socialLinks1\"\r\n                  style=\"color: black\"\r\n                >\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a\r\n                  (click)=\"openLink(socialLinks2)\"\r\n                  ngDefaultControl\r\n                  [ngModel]=\"socialLinks2\"\r\n                  style=\"color: black\"\r\n                >\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a\r\n                  (click)=\"openLink(socialLinks3)\"\r\n                  ngDefaultControl\r\n                  [ngModel]=\"socialLinks3\"\r\n                  style=\"color: black\"\r\n                >\r\n                  <i class=\"fa fa-instagram\"></i>\r\n                </a>\r\n                <a\r\n                  (click)=\"openLink(socialLinks4)\"\r\n                  ngDefaultControl\r\n                  [ngModel]=\"socialLinks4\"\r\n                  style=\"color: black\"\r\n                >\r\n                  <i class=\"fa fa-google\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"inv-details\">\r\n            <h6 class=\"fw-600 text-uppercase\"> Description</h6>\r\n            <!-- <h6>{{ profiledata?.company_detail?.name }}</h6> -->\r\n            <p>{{ profiledata?.company_detail?.description }}</p>\r\n            <p></p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-5 col-md-12 col-sm-12 col-12 text-right\">\r\n          <div class=\"dropdown\">\r\n            <a\r\n              class=\"btn btn-more dropdown-toggle\"\r\n              href=\"#\"\r\n              role=\"button\"\r\n              id=\"dropdownMenuLink\"\r\n              data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\"\r\n              aria-expanded=\"false\"\r\n            >\r\n              <i class=\"fa fa-ellipsis-v\"></i>\r\n            </a>\r\n\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n              <a\r\n                class=\"dropdown-item\"\r\n                href=\"javascript:void(0);\"\r\n                routerLink=\"/edit-profile\"\r\n                >Edit Profile</a\r\n              >\r\n            </div>\r\n          </div>\r\n          \r\n\r\n          <!-- ====================   new   ========================= -->\r\n\r\n          <div id=\"main\">\r\n            <div class=\"container\">\r\n\r\n              <h6 class=\"fw-600 text-uppercase\" style=\"margin-left: 1rem;text-align: start;\">COLLEAGUE LIST</h6>\r\n              \r\n              <div class=\"accordion\" id=\"faq\" style=\"height: 25rem;overflow:auto;\">\r\n                \r\n                <div class=\"card\" *ngFor=\"let c of colleagues; let i = index\">\r\n                  <div class=\"card-header\" id=\"faqhead1\">\r\n                    <a\r\n                      href=\"#\"\r\n                      class=\"btn btn-header-link fw-bold\"\r\n                      data-toggle=\"collapse\"\r\n                      [attr.data-target]=\"'#demo' + (i + 1)\"\r\n                      aria-expanded=\"true\"\r\n                      aria-controls=\"faq1\"\r\n                    >        {{ i + 1 }}. {{ c.username }}  \r\n\r\n                    <div class=\"\">\r\n                    <i class=\"bi bi-caret-down-fill\"></i></div>\r\n                    \r\n              </a\r\n                    >\r\n                  </div>\r\n\r\n                  <div\r\n                    id=\"demo{{ i + 1 }}\"\r\n                    class=\"collapse\"\r\n                    aria-labelledby=\"faqhead1\"\r\n                    data-parent=\"#faq\"\r\n                  >\r\n                    <div class=\"card-body d-flex\">\r\n                      <div class=\"accordion_card_title text-start w-50\">\r\n                        <p>{{ c.username }}</p>\r\n                        <p>{{ c.email }}</p>\r\n                        <p>{{ c.colleague_password }}</p>\r\n                      </div>\r\n                      <div class=\"w-50\">\r\n                        <button \r\n                          class=\"btn btn-danger\"\r\n                          (click)=\"getColleagueId(c.id)\"\r\n                          data-toggle=\"modal\"\r\n                          data-target=\"#delete\"\r\n                        >\r\n                          <i class=\"fa fa-trash\"></i> Delete Account\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n\r\n                    \r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <h1>\r\n\r\n                <button\r\n                *ngIf=\"checkToshow\"\r\n                  type=\"button\"\r\n                  data-target=\"#add-colleague\"\r\n                  data-toggle=\"modal\"\r\n                  class=\"add-colleague pull-right\"\r\n                >\r\n                  &#43;\r\n                </button>\r\n              </h1>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- =================================================== -->\r\n\r\n          <!-- <div class=\"colleague-profile\">\r\n            <h6>Colleague Profile</h6>\r\n            <ul>\r\n              <li\r\n                *ngFor=\"let c of colleagues; let i = index\"\r\n                class=\"colleagueView\"\r\n              >\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-info\"\r\n                  data-toggle=\"collapse\"\r\n                  [attr.data-target]=\"'#demo' + (i + 1)\"\r\n                >\r\n                  {{ i + 1 }} {{ c.username }}\r\n                </button>\r\n        \r\n                <div id=\"demo{{ i + 1 }}\" class=\"collapse\">\r\n                  <ul>\r\n                    <li>{{ c.username }}</li>\r\n                    <li>{{ c.email }}</li>\r\n                    <li>{{ c.colleague_password }}</li>\r\n                  </ul>\r\n                  <button class=\"btn btn-delete\" (click)=\"getColleagueId(c.id)\">\r\n                    <i class=\"fa fa-trash\"></i> Delete Account\r\n                  </button>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n            <button\r\n              type=\"button\"\r\n              data-target=\"#add-colleague\"\r\n              data-toggle=\"modal\"\r\n              class=\"add-colleague pull-right\"\r\n            >\r\n              &#43;\r\n            </button>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- <app-footer></app-footer> -->\r\n<!--------------------------- create post profile  --------------------------------->\r\n\r\n<div id=\"involvement\" class=\"modal fade\" role=\"dialog \">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          &times;\r\n        </button>\r\n        <h3 class=\"text-center\">CREATE POST by profile</h3>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\">\r\n        <form [formGroup]=\"postForm\" (ngSubmit)=\"submit_create_posts($event)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      formControlName=\"name\"\r\n                      type=\"text\"\r\n                      name=\"post-name\"\r\n                      placeholder=\"Enter post name\"\r\n                      class=\"form-control\"\r\n                    />\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <select\r\n                      formControlName=\"project_type\"\r\n                      (click)=\"getType()\"\r\n                      id=\"selType\"\r\n                      class=\"form-control ash-select\"\r\n                    >\r\n                      <option hidden>Select Project Type</option>\r\n                      <option\r\n                        *ngFor=\"let b of project_typeData; let i = index\"\r\n                        [value]=\"project_typeData[i]?.id\"\r\n                      >\r\n                        {{ project_typeData[i].type }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n\r\n                  <div *ngIf=\"hideCat == 0\" class=\"form-group\">\r\n                    <select\r\n                      formControlName=\"project_category\"\r\n                      class=\"form-control ash-select\"\r\n                    >\r\n                      <option class=\"light-color-me\" hidden>\r\n                        Select Project Category\r\n                      </option>\r\n                      <option\r\n                        *ngFor=\"let c of project_categoryData; let i = index\"\r\n                        [value]=\"project_categoryData[i]?.id\"\r\n                      >\r\n                        {{ project_categoryData[i].category }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n\r\n                  <!-- <div class=\"form-group\">\r\n                                                <input type=\"text\" name=\"year\" placeholder=\"Select year\" class=\"yearselect form-control\">\r\n                                            </div> -->\r\n\r\n                  <div *ngIf=\"typ == 0\" class=\"form-group\">\r\n                    <input\r\n                      formControlName=\"year\"\r\n                      placeholder=\"Enter Year in YYYY\"\r\n                      id=\"yearpicker\"\r\n                      class=\"form-control\"\r\n                      type=\"number\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf=\"typ == 1\" class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      formControlName=\"t_type_start_date\"\r\n                      id=\"start-date\"\r\n                      placeholder=\"Enter start-date\"\r\n                      type=\"text\"\r\n                      onfocus=\"(this.type='date')\"\r\n                      class=\"form-control\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      type=\"text\"\r\n                      onfocus=\"(this.type='date')\"\r\n                      formControlName=\"t_type_end_date\"\r\n                      id=\"end-date\"\r\n                      placeholder=\"Enter end-date\"\r\n                      class=\"form-control\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                  <div class=\"form-group\">\r\n                    <mat-chip-list #chipList aria-label=\"Taggs selection\">\r\n                      <mat-chip\r\n                        *ngFor=\"let tagg of taggs\"\r\n                        [selectable]=\"selectable\"\r\n                        [removable]=\"removable\"\r\n                        (removed)=\"remove(tagg)\"\r\n                      >\r\n                        {{ tagg.name }}\r\n                        <mat-icon matChipRemove *ngIf=\"removable\"\r\n                          >cancel</mat-icon\r\n                        >\r\n                      </mat-chip>\r\n                    </mat-chip-list>\r\n                    <br />\r\n                    <input\r\n                      type=\"text\"\r\n                      formControlName=\"tags\"\r\n                      data-toggle=\"modal\"\r\n                      data-target=\"#enter-tags\"\r\n                      placeholder=\"Enter tags\"\r\n                      class=\"form-control tagcss\"\r\n                    />\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      type=\"hidden\"\r\n                      id=\"map-lat\"\r\n                      name=\"lat\"\r\n                      placeholder=\"Enter tags\"\r\n                      class=\"form-control\"\r\n                    />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      type=\"hidden\"\r\n                      id=\"map-lon\"\r\n                      name=\"lon\"\r\n                      placeholder=\"Enter tags\"\r\n                      class=\"form-control\"\r\n                    />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      type=\"hidden\"\r\n                      id=\"myimg\"\r\n                      name=\"imgg\"\r\n                      placeholder=\"get image\"\r\n                      class=\"form-control\"\r\n                    />\r\n                  </div>\r\n\r\n                  <div class=\"form-group abtpst\">\r\n                    <textarea\r\n                      formControlName=\"about_post\"\r\n                      type=\"text\"\r\n                      name=\"question\"\r\n                      rows=\"5\"\r\n                      placeholder=\"Type something.. \"\r\n                      class=\"form-control\"\r\n                    ></textarea>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n              <div class=\"some-gap\">\r\n                <div class=\"mark-inv-img\">\r\n                  <ul class=\"pictures\">\r\n                    <li\r\n                      class=\"marks\"\r\n                      *ngFor=\"let img of base64Image; let i = index\"\r\n                    >\r\n                      <a\r\n                        href=\"JavaScript:void(0);\"\r\n                        data-toggle=\"modal\"\r\n                        data-target=\"#my-pic\"\r\n                      >\r\n                        <img [src]=\"img\" />\r\n                      </a>\r\n                      <button class=\"remove-pic\" (click)=\"removeImage(img, i)\">\r\n                        &#10006;\r\n                      </button>\r\n                      <input\r\n                        class=\"credit-field\"\r\n                        [attr.id]=\"'imgTag' + i\"\r\n                        type=\"text\"\r\n                        placeholder=\"Enter Credit\"\r\n                      />\r\n                    </li>\r\n                  </ul>\r\n                  <!-- <button (click)=\"addInput()\">Add Input</button>\r\n                                    <div *ngFor=\"let input of inputs\">\r\n                                        <input [(ngModel)]=\"input.value\">\r\n                                    </div>\r\n                                    {{inputs | json}} -->\r\n\r\n                  <!-- <label class=\"add-here\">\r\n                                            <input type=\"file\" name=\"pictures\" id=\"multiImageSelet\" multiple=\"\" class=\"hide-me\">\r\n                                            <i class=\"fa fa-plus\"></i>\r\n                                        </label> -->\r\n                </div>\r\n\r\n                <div *ngIf=\"otherOption == true\" class=\"mark-inv-info\">\r\n                  <!-- <button class=\"btn btn-normal btn-block\" data-toggle=\"modal\"\r\n                                        data-target=\"#enter-credit\">{{postImageTag}}</button> -->\r\n                  <div class=\"form-group flex-me\">\r\n                    <input\r\n                      id=\"post_perms\"\r\n                      name=\"accept\"\r\n                      type=\"checkbox\"\r\n                    /><span>\r\n                      I here by confirm that the content uploaded here is\r\n                      original and i have rights to post them.\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-7 col-md-7 col-sm-6 col-6\">\r\n              <div class=\"loc-icon\">\r\n                <ul>\r\n                  <li>\r\n                    <label class=\"my-add-img\"\r\n                      ><input\r\n                        type=\"file\"\r\n                        id=\"multiImageSelet\"\r\n                        (change)=\"chooseImage($event)\"\r\n                        multiple\r\n                        class=\"hide-me\" /><i class=\"fa fa-image\"></i\r\n                    ></label>\r\n                  </li>\r\n                  <li>\r\n                    <a\r\n                      href=\"JavaScript:void(0);\"\r\n                      data-dismiss=\"modal\"\r\n                      data-toggle=\"modal\"\r\n                      data-target=\"#involvement-location\"\r\n                      ><i class=\"fa fa-map-marker\"></i\r\n                    ></a>\r\n                  </li>\r\n                  <!-- <li><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#enter-user-tags\">@</a></li> -->\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-5 col-md-5 col-sm-6 col-6\">\r\n              <button class=\"btn btn-yellow btn-block\">SUBMIT</button>\r\n            </div>\r\n          </div>\r\n          <div style=\"color: red\">\r\n            <span>{{ errormessage }}</span>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Involvement Location Modal -->\r\n<div id=\"involvement-location\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"map-rel\">\r\n        <div\r\n          class=\"modal-body\"\r\n          style=\"width: 100%; height: 300px; display: none\"\r\n          id=\"create_post_map\"\r\n        ></div>\r\n        <div\r\n          class=\"modal-body\"\r\n          style=\"width: 100%; height: 300px\"\r\n          id=\"map1\"\r\n        ></div>\r\n        <!-- <button class=\"map-absol\"><img src=\"assets/images/icon/pin_red.png\" /></button> -->\r\n      </div>\r\n      <div class=\"modal-footer my-modal-footer\">\r\n        <button\r\n          style=\"background: #ffd705 !important\"\r\n          class=\"btn btn-simple btn-block\"\r\n          data-dismiss=\"modal\"\r\n          data-toggle=\"modal\"\r\n          data-target=\"#involvement\"\r\n        >\r\n          SELECT LOCATION\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"enter-tags\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          &times;\r\n        </button>\r\n        <h3 class=\"text-center\">ENTER TAGS</h3>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\">\r\n        <div class=\"form-group\">\r\n          <mat-chip-list #chipList aria-label=\"Taggs selection\">\r\n            <mat-chip\r\n              *ngFor=\"let tagg of taggs\"\r\n              id=\"mtChip\"\r\n              [selectable]=\"selectable\"\r\n              [removable]=\"removable\"\r\n              (removed)=\"remove(tagg)\"\r\n            >\r\n              {{ tagg.name }}\r\n              <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n            </mat-chip>\r\n            <input\r\n              [formControl]=\"new_tag\"\r\n              (keyup.enter)=\"onEnter()\"\r\n              placeholder=\"New tagg...\"\r\n              [matChipInputFor]=\"chipList\"\r\n              [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n              [matChipInputAddOnBlur]=\"addOnBlur\"\r\n              (matChipInputTokenEnd)=\"add($event)\"\r\n              class=\"form-control\"\r\n            />\r\n          </mat-chip-list>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <ul *ngFor=\"let t of tagsList\" class=\"tag-ul\">\r\n            <li (click)=\"addTag($event)\">{{ t }}</li>\r\n          </ul>\r\n        </div>\r\n        <button\r\n          class=\"btn btn-simple btn-block\"\r\n          (click)=\"saveTag()\"\r\n          data-dismiss=\"modal\"\r\n        >\r\n          SAVE\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--------------------------- create post profile end --------------------------------->\r\n\r\n<div id=\"add-colleague\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          &times;\r\n        </button>\r\n        <h3 class=\"text-center\">CREATE COLLEAGUE PROFILE</h3>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\">\r\n        <form\r\n          [formGroup]=\"colleagueForm\"\r\n          (ngSubmit)=\"createColleague(colleagueForm.value)\"\r\n        >\r\n          <div class=\"form-group\">\r\n            <input\r\n              type=\"text\"\r\n              formControlName=\"username\"\r\n              ngModel\r\n              name=\"username\"\r\n              placeholder=\"User Name\"\r\n              class=\"form-control\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input\r\n              type=\"email\"\r\n              formControlName=\"email\"\r\n              ngModel\r\n              name=\"email\"\r\n              placeholder=\"Email ID\"\r\n              class=\"form-control\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group country-code-list\">\r\n            <!-- <input type=\"text\" ng2TelInput [ng2TelInputOptions]=\"{initialCountry: 'in'}\"\r\n                          (hasError)=\"hasError($event)\" (ng2TelOutput)=\"getNumber($event)\"\r\n                          (intlTelInputObject)=\"telInputObject($event)\" (countryChange)=\"onCountryChange($event)\"\r\n                          formControlName=\"mobile_number\" class=\"form-control ccode\" style=\"width: 165%;\" /> -->\r\n\r\n            <!-- <div class=\"input-group-prepend\">\r\n                          <button class=\"btn btn-outline-secondary dropdown-toggle\" type=\"button\"\r\n                              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</button>\r\n                          <div class=\"dropdown-menu\">\r\n                              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                          </div>\r\n                      </div>\r\n                      <input type=\"text\" formControlName=\"mobile_number\" class=\"form-control\"\r\n                          placeholder=\"Mobile Number\" aria-label=\"Text input with dropdown button\"> -->\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <input\r\n              type=\"password\"\r\n              formControlName=\"password\"\r\n              ngModel\r\n              name=\"conf-password\"\r\n              placeholder=\"Enter password\"\r\n              class=\"form-control\"\r\n            />\r\n          </div>\r\n          <button\r\n            class=\"btn btn-block btn-simple\"\r\n            type=\"submit\"\r\n            [disabled]=\"!colleagueForm.valid\"\r\n          >\r\n            SAVE\r\n          </button>\r\n          <button class=\"btn btn-block btn-third\" data-dismiss=\"modal\">\r\n            CANCEL\r\n          </button>\r\n        </form>\r\n        <div style=\"color: red\">\r\n          <span>{{ errormessage }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"delete\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          &times;\r\n        </button>\r\n        <h3 class=\"text-center\">ALERT</h3>\r\n      </div>\r\n      <div class=\"modal-body modal-delete\">\r\n        <h6>Do you really want to delete this account ?</h6>\r\n        <button\r\n          onClick=\"window.location.reload();\"\r\n          class=\"btn btn-third\"\r\n          data-dismiss=\"modal\"\r\n        >\r\n          NO\r\n        </button>\r\n        <button class=\"btn btn-simple\" (click)=\"deleteColleague()\">YES</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- enter-user-tags Modal -->\r\n\r\n<!--------------------------- Modal End-------------------------------->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/my-settings/my-settings.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/my-settings/my-settings.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n<div class=\"row involvement-wrap\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                <div class=\"cog\">\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn-setting\" type=\"button\" data-toggle=\"dropdown\">\r\n                            <i class=\"fa fa-ellipsis-v\"></i>\r\n                        </button>\r\n                        <div class=\"dropdown-menu set-right\">\r\n                            <a class=\"dropdown-item\" href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#remove-post\">Remove Post</a>\r\n                            <a class=\"dropdown-item\" href=\"JavaScript:void(0);\" routerLink=\"/edit-my-post\">Edit Post</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-7 col-md-12 col-sm-12 col-12\">\r\n                <div class=\"inv-heading\">\r\n                    <h4>TYPE OF PROJECT | CATEGORY  <span>2 day ago</span></h4>\r\n                    <h4>FLUPER</h4>\r\n                    <h4>ARCHITECTURE</h4>\r\n                    <p>Noida, India | 2019</p>\r\n                </div>\r\n                <div class=\"inv-img\">\r\n                    <ul>\r\n                        <li><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#my-pic\"><img src=\"assets/images/home.jpg\"></a></li>\r\n                        <li><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#my-pic\"><img src=\"assets/images/1.jpg\"></a></li>\r\n                        <li class=\"videos\"><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#my-videos\"><video controls><source src=\"assets/images/my-video.mp4\" type=\"video/mp4\"></video></a></li>\r\n                        <li><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#my-pic\"><img src=\"assets/images/thumb1.jpg\"></a></li>\r\n                        <li><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#my-pic\"><img src=\"assets/images/thumb1.jpg\"></a></li>\r\n                        <li><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#my-pic\"><img src=\"assets/images/thumb1.jpg\"></a></li>\r\n                        <li class=\"videos\"><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#my-videos\"><video controls><source src=\"assets/images/my-video.mp4\" type=\"video/mp4\"></video></a></li>\r\n                        <li><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#my-pic\"><img src=\"assets/images/thumb1.jpg\"></a></li>\r\n                    </ul>\r\n                </div> \r\n                <div class=\"inv-details \">\r\n                    <h6><strong>Description</strong></h6>\r\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n                </div> \r\n            </div>\r\n            <div class=\"col-lg-5 col-md-12 col-sm-12 col-12\">\r\n                <div class=\"inv-right-heading\">\r\n                    <h6><strong>Involvement</strong></h6>\r\n                </div>\r\n                <div class=\"inv-right-details\">\r\n                    <h6><strong>Products Manufacturers</strong></h6>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a> \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"inv-right-details\">\r\n                    <h6><strong>Execution</strong></h6>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                <div class=\"bottom-comment\">\r\n                    <ul>\r\n                        <li><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#likes\"><img src=\"assets/images/icon/chat.png\"><p class=\"padding-0\">10</p></a></li>\r\n                        <li><a href=\"JavaScript:void(0);\"><img src=\"assets/images/icon/share.png\"><p class=\"padding-0\">12</p></a></li>\r\n                        <li><a href=\"JavaScript:void(0);\"><img src=\"assets/images/icon/like.png\"><p class=\"padding-0\">12</p></a></li>\r\n                        <li><a href=\"JavaScript:void(0);\"><img src=\"assets/images/icon/megaphone.png\"><p class=\"padding-0\">Invite</p></a></li>\r\n                    </ul>\r\n                </div>  \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n<!-- <app-footer></app-footer> -->\r\n<!--------------------------- Modal Start--------------------------------->\r\n<div class=\"modal fade\" id=\"my-pic\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content content-edit\">\r\n        <div class=\"modal-body img-modal\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <img src=\"assets/images/home.jpg\">\r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"my-videos\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content content-edit\">\r\n            <div class=\"modal-body img-modal\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <video controls><source src=\"assets/images/my-video.mp4\" type=\"video/mp4\"></video>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"likes\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <div class=\"likes-list\">\r\n                        <ul>\r\n                            <li>\r\n                                <div class=\"likes-flex\">\r\n                                    <div class=\"likes-img\">\r\n                                        <img src=\"assets/images/1099386850.jpg\">\r\n                                    </div>\r\n                                    <div class=\"likes-name\">\r\n                                        <h6>Fluper </h6>\r\n                                        <h6>Ashish Saxena</h6>\r\n                                        <p>8 Hrs Ago</p>\r\n                                    </div>\r\n                                    <div class=\"likes\">\r\n                                        <img src=\"assets/images/icon/like.png\"><span>10</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"likes-info\">\r\n                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\r\n                                </div>\r\n                            </li>\r\n                            <li>\r\n                                <div class=\"likes-flex\">\r\n                                    <div class=\"likes-img\">\r\n                                        <img src=\"assets/images/1099386850.jpg\">\r\n                                    </div>\r\n                                    <div class=\"likes-name\">\r\n                                        <h6>HCL </h6>\r\n                                        <h6>Ashish Saxena</h6>\r\n                                        <p>8 Hrs Ago</p>\r\n                                    </div>\r\n                                    <div class=\"likes\">\r\n                                        <img src=\"assets/images/icon/like.png\"><span>10</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"likes-info\">\r\n                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\r\n                                </div>\r\n                            </li>\r\n                            <li>\r\n                                <div class=\"likes-flex\">\r\n                                    <div class=\"likes-img\">\r\n                                        <img src=\"assets/images/1099386850.jpg\">\r\n                                    </div>\r\n                                    <div class=\"likes-name\">\r\n                                        <h6>Fluper </h6>\r\n                                        <h6>Ashish Saxena</h6>\r\n                                        <p>8 Hrs Ago</p>\r\n                                    </div>\r\n                                    <div class=\"likes\">\r\n                                        <img src=\"assets/images/icon/like.png\"><span>10</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"likes-info\">\r\n                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"comment\">\r\n                        <div class=\"form-group\">\r\n                            <textarea type=\"text\" name=\"comment\" class=\"form-control\" placeholder=\"Write a comment\"></textarea>\r\n                        </div>\r\n                        <button class=\"btn btn-yellow\" data-dismiss=\"modal\">Submit</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"remove-post\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header my-modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h3 class=\"text-center\">ALERT</h3>\r\n            </div>\r\n            <div class=\"modal-body modal-delete\">\r\n                <h6>You're just going to remove one of your post, do you really want to do this ?</h6>\r\n                <button class=\"btn btn-third\" data-dismiss=\"modal\">NO</button>\r\n                <button class=\"btn btn-simple\" data-dismiss=\"modal\" routerLink=\"/my-profile\">YES</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--------------------------- Modal End-------------------------------->\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/notifications-setting/notifications-setting.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/notifications-setting/notifications-setting.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row chat-wrap\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <div class=\"chat-heading pb-5\">\r\n                        <h3>NOTIFICATION SETTINGS</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\r\n                    <div class=\"settings-list\">\r\n                        <ul>\r\n                            <li>\r\n                                <p>Web Notifications\r\n                                    <span>\r\n                                        <label class=\"switch\">\r\n                                            <input  name=\"toggle\" checked (change) = \"notificationOff($event)\"type=\"checkbox\">\r\n                                            <span   class=\"slider round\"></span>\r\n                                        </label>\r\n                                    </span>\r\n                                <p>\r\n                            </li>\r\n                            <!-- <li>\r\n                                <p>New post in my surrounding\r\n                                    <span>\r\n                                        <label class=\"switch\">\r\n                                            <input type=\"checkbox\">\r\n                                            <span class=\"slider round\"></span>\r\n                                        </label>\r\n                                    </span>\r\n                                <p>\r\n                            </li>\r\n                            <li>\r\n                                <p>New posts by followed users\r\n                                    <span>\r\n                                        <label class=\"switch\">\r\n                                            <input type=\"checkbox\">\r\n                                            <span class=\"slider round\"></span>\r\n                                        </label>\r\n                                    </span>\r\n                                <p>\r\n                            </li>\r\n                            <li>\r\n                                <p>Chat notifications\r\n                                    <span>\r\n                                        <label class=\"switch\">\r\n                                            <input type=\"checkbox\">\r\n                                            <span class=\"slider round\"></span>\r\n                                        </label>\r\n                                    </span>\r\n                                <p>\r\n                            </li>\r\n                            <li>\r\n                                <p>Post updates(comments, like and mark involvement)\r\n                                    <span>\r\n                                        <label class=\"switch\">\r\n                                            <input type=\"checkbox\">\r\n                                            <span class=\"slider round\"></span>\r\n                                        </label>\r\n                                    </span>\r\n                                <p>\r\n                            </li> -->\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <app-footer></app-footer> -->\r\n\r\n\r\n<!--------------------------- Modal Start--------------------------------->\r\n<div id=\"send-feedback\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-header my-modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h3 class=\"text-center\">SEND US FEEDBACK</h3>\r\n        </div>\r\n        <div class=\"modal-body my-modal-body\">\r\n            <div class=\"form-group\">\r\n                <textarea name=\"feed-back\" rows=\"5\" placeholder=\"Send us mail\" class=\"form-control\"></textarea>\r\n            </div>\r\n            <div class=\"feedback-para\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\r\n            </div>\r\n            <button class=\"btn btn-simple btn-block\" data-dismiss=\"modal\">SEND</button>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"change-password\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-header my-modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            <h3 class=\"text-center\">CHANGE PASSWORD</h3>\r\n        </div>\r\n        <div class=\"modal-body my-modal-body\">\r\n            <div class=\"form-group\">\r\n                <input type=\"password\" name=\"old-password\" placeholder=\"Current Password\" class=\"form-control\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"password\" name=\"new-password\" placeholder=\"New Password\" class=\"form-control\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"password\" name=\"confirm-password\" placeholder=\"Confirm New Password\" class=\"form-control\"/>\r\n            </div>\r\n            <button class=\"btn btn-simple btn-block\" data-dismiss=\"modal\">SAVE</button>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--------------------------- Modal End-------------------------------->\r\n\r\n\r\n\r\n\r\n\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/notifications-view/notifications-view.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/notifications-view/notifications-view.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>notifications-view works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/notifications/notifications.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/notifications/notifications.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row chat-wrap\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <div class=\"chat-heading\">\r\n                        <h3>NOTIFICATIONS</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <div class=\"notifications\">\r\n                        <table class=\"table table-striped\">\r\n                            <tbody>\r\n                                <tr *ngFor=\"let list of notificationList\">\r\n\r\n                                    <!-- For Involvement,Commen,Like,New Post on a Post-->\r\n                                    <td *ngIf=\"list?.notification_context?.notification_type == '1' || list?.notification_context?.notification_type == '2' || list?.notification_context?.notification_type == '3' || list?.notification_context?.notification_type == '4'\" >\r\n                                        <a routerLink=\"/involvement/{{list?.notification_context?.id}}\">{{list?.notification_context?.body}}</a>\r\n                                    </td>\r\n                                    <td *ngIf=\"list?.notification_context?.notification_type == '1' || list?.notification_context?.notification_type == '2' || list?.notification_context?.notification_type == '3' || list?.notification_context?.notification_type == '4'\">{{list?.created_at\r\n                                        | date}}</td>\r\n\r\n\r\n                                    <!-- For New Question  -->\r\n                                    <td *ngIf=\"list?.notification_context?.notification_type == '5'\"><a\r\n                                            routerLink=\"/public-detailed-view/{{list?.notification_context?.id}}\">{{list?.notification_context?.body}}</a>\r\n                                    </td>\r\n                                    <td *ngIf=\"list?.notification_context?.notification_type == '5'\">\r\n                                        {{list?.created_at | date}}\r\n                                    </td>\r\n\r\n                                    <!-- For New Chat  -->\r\n                                    <td *ngIf=\"list?.notification_context?.notification_type == '7'\"><a\r\n                                            routerLink=\"/chat-insight/{{list?.notification_context?.id}}\">{{list?.notification_context?.body}}</a>\r\n                                    </td>\r\n                                    <td *ngIf=\"list?.notification_context?.notification_type == '7'\">\r\n                                        {{list?.created_at | date}}\r\n                                    </td>\r\n\r\n\r\n                                </tr>\r\n\r\n\r\n\r\n\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/post-detail/post-detail.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/post-detail/post-detail.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n<div class=\"row involvement-wrap\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                <div class=\"cog\">\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn-setting\" type=\"button\" data-toggle=\"dropdown\">\r\n                            <i class=\"fa fa-ellipsis-v\"></i>\r\n                        </button>\r\n                        <div class=\"dropdown-menu set-right\">\r\n                            <a class=\"dropdown-item\" href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#remove-post\">Remove Post</a>\r\n                            <a class=\"dropdown-item\" href=\"JavaScript:void(0);\" routerLink=\"/edit-my-post\">Edit Post</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-7 col-md-12 col-sm-12 col-12\">\r\n                <div class=\"inv-heading\">\r\n                    <h4>TYPE OF PROJECT | CATEGORY  <span>2 day ago</span></h4>\r\n                    <h4>FLUPER</h4>\r\n                    <h4>ARCHITECTURE</h4>\r\n                    <p>Noida, India | 2019</p>\r\n                </div>\r\n                <div class=\"inv-img\">\r\n                    <ul>\r\n                        <li><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#my-pic\"><img src=\"assets/images/home.jpg\"></a></li>\r\n                        <li><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#my-pic\"><img src=\"assets/images/1.jpg\"></a></li>\r\n                        <li class=\"videos\"><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#my-videos\"><video controls><source src=\"assets/images/my-video.mp4\" type=\"video/mp4\"></video></a></li>\r\n                        <li><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#my-pic\"><img src=\"assets/images/thumb1.jpg\"></a></li>\r\n                        <li><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#my-pic\"><img src=\"assets/images/thumb1.jpg\"></a></li>\r\n                        <li><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#my-pic\"><img src=\"assets/images/thumb1.jpg\"></a></li>\r\n                        <li class=\"videos\"><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#my-videos\"><video controls><source src=\"assets/images/my-video.mp4\" type=\"video/mp4\"></video></a></li>\r\n                        <li><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#my-pic\"><img src=\"assets/images/thumb1.jpg\"></a></li>\r\n                    </ul>\r\n                </div> \r\n                <div class=\"inv-details \">\r\n                    <h6><strong>Description</strong></h6>\r\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n                </div> \r\n            </div>\r\n            <div class=\"col-lg-5 col-md-12 col-sm-12 col-12\">\r\n                <div class=\"inv-right-heading\">\r\n                    <h6><strong>Involvement</strong></h6>\r\n                </div>\r\n                <div class=\"inv-right-details\">\r\n                    <h6><strong>Products Manufacturers</strong></h6>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a> \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"inv-right-details\">\r\n                    <h6><strong>Execution</strong></h6>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 col-sm-2 col-2\">\r\n                            <a href=\"JavaScript:void(0);\" routerLink=\"/unfollowed-profile\">\r\n                                <div class=\"product-img\">\r\n                                    <img src=\"assets/images/logo-collapse.png\">\r\n                                </div>\r\n                                <div class=\"product-info\">\r\n                                    <h6>Fluper Marjorie</h6>\r\n                                    <p>Lorem Ipsum</p>\r\n                                    <p>Lorem Ipsum</p>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                <div class=\"bottom-comment\">\r\n                    <ul>\r\n                        <li><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#likes\"><img src=\"assets/images/icon/chat.png\"><p class=\"padding-0\">10</p></a></li>\r\n                        <li><a href=\"JavaScript:void(0);\"><img src=\"assets/images/icon/share.png\"><p class=\"padding-0\">12</p></a></li>\r\n                        <li><a href=\"JavaScript:void(0);\"><img src=\"assets/images/icon/like.png\"><p class=\"padding-0\">12</p></a></li>\r\n                        <li><a href=\"JavaScript:void(0);\"><img src=\"assets/images/icon/megaphone.png\"><p class=\"padding-0\">Invite</p></a></li>\r\n                    </ul>\r\n                </div>  \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n<!-- <app-footer></app-footer> -->\r\n<!--------------------------- Modal Start--------------------------------->\r\n<div class=\"modal fade\" id=\"my-pic\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content content-edit\">\r\n        <div class=\"modal-body img-modal\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <img src=\"assets/images/home.jpg\">\r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"my-videos\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content content-edit\">\r\n            <div class=\"modal-body img-modal\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <video controls><source src=\"assets/images/my-video.mp4\" type=\"video/mp4\"></video>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"likes\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <div class=\"likes-list\">\r\n                        <ul>\r\n                            <li>\r\n                                <div class=\"likes-flex\">\r\n                                    <div class=\"likes-img\">\r\n                                        <img src=\"assets/images/1099386850.jpg\">\r\n                                    </div>\r\n                                    <div class=\"likes-name\">\r\n                                        <h6>Fluper </h6>\r\n                                        <h6>Ashish Saxena</h6>\r\n                                        <p>8 Hrs Ago</p>\r\n                                    </div>\r\n                                    <div class=\"likes\">\r\n                                        <img src=\"assets/images/icon/like.png\"><span>10</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"likes-info\">\r\n                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\r\n                                </div>\r\n                            </li>\r\n                            <li>\r\n                                <div class=\"likes-flex\">\r\n                                    <div class=\"likes-img\">\r\n                                        <img src=\"assets/images/1099386850.jpg\">\r\n                                    </div>\r\n                                    <div class=\"likes-name\">\r\n                                        <h6>HCL </h6>\r\n                                        <h6>Ashish Saxena</h6>\r\n                                        <p>8 Hrs Ago</p>\r\n                                    </div>\r\n                                    <div class=\"likes\">\r\n                                        <img src=\"assets/images/icon/like.png\"><span>10</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"likes-info\">\r\n                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\r\n                                </div>\r\n                            </li>\r\n                            <li>\r\n                                <div class=\"likes-flex\">\r\n                                    <div class=\"likes-img\">\r\n                                        <img src=\"assets/images/1099386850.jpg\">\r\n                                    </div>\r\n                                    <div class=\"likes-name\">\r\n                                        <h6>Fluper </h6>\r\n                                        <h6>Ashish Saxena</h6>\r\n                                        <p>8 Hrs Ago</p>\r\n                                    </div>\r\n                                    <div class=\"likes\">\r\n                                        <img src=\"assets/images/icon/like.png\"><span>10</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"likes-info\">\r\n                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"comment\">\r\n                        <div class=\"form-group\">\r\n                            <textarea type=\"text\" name=\"comment\" class=\"form-control\" placeholder=\"Write a comment\"></textarea>\r\n                        </div>\r\n                        <button class=\"btn btn-yellow\" data-dismiss=\"modal\">Submit</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"remove-post\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header my-modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h3 class=\"text-center\">ALERT</h3>\r\n            </div>\r\n            <div class=\"modal-body modal-delete\">\r\n                <h6>You're just going to remove one of your post, do you really want to do this ?</h6>\r\n                <button class=\"btn btn-third\" data-dismiss=\"modal\">NO</button>\r\n                <button class=\"btn btn-simple\" data-dismiss=\"modal\" routerLink=\"/my-profile\">YES</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--------------------------- Modal End-------------------------------->\r\n\r\n\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/privacy-policy/privacy-policy.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/privacy-policy/privacy-policy.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row chat-wrap\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <div class=\"chat-heading\">\r\n                        <h3>PRIVACY POLICY</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <div class=\"terms-conditions\">\r\n                        <p>Privacy Policy</p>\r\n\r\n<p>Last updated: July 03, 2020</p>\r\n\r\n<p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>\r\n\r\n<p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>\r\n\r\n<p>Interpretation and Definitions</p>\r\n\r\n<h2>Interpretation</h2>\r\n\r\n<p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>\r\n\r\n<h2>Definitions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>\r\n\r\n<p>For the purposes of this Privacy Policy:</p>\r\n\r\n<p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>\r\n\r\n<p>Under GDPR (General Data Protection Regulation), You can be referred to as the Data Subject or as the User as you are the individual using the Service.</p>\r\n\r\n<p><strong>Company</strong> (referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to Christina Dragoi, Werastr. 6, 70182 Stuttgart.</p>\r\n\r\n<p>For the purpose of the GDPR, the Company is the Data Controller.</p>\r\n\r\n<p><strong>Application</strong> means the software program provided by the Company downloaded by You on any electronic device, named INSITE</p>\r\n\r\n<p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>\r\n\r\n<p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>\r\n\r\n<p><strong>Website</strong> refers to INSITE, accessible from <a href=\"http://www.insite.media/\">http://www.insite.media/</a></p>\r\n\r\n<p><strong>Service</strong> refers to the Application or the Website or both.</p>\r\n\r\n<p><strong>Country</strong> refers to: Baden-Württemberg, Germany</p>\r\n\r\n<p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used. For the purpose of the GDPR, Service Providers are considered Data Processors.</p>\r\n\r\n<p><strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.</p>\r\n\r\n<p><strong>Facebook Fan Page</strong> is a public profile named INSITE_theapp specifically created by the Company on the Facebook social network, accessible from <a href=\"https://www.facebook.com/INSITE_theapp-108944610708510/?modal=admin_todo_tour\">https://www.facebook.com/INSITE_theapp-108944610708510/?modal=admin_todo_tour</a></p>\r\n\r\n<p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>\r\n\r\n<p>For the purposes for GDPR, Personal Data means any information relating to You such as a name, an identification number, location data, online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity.</p>\r\n\r\n<p>For the purposes of the CCPA, Personal Data means any information that identifies, relates to, describes or is capable of being associated with, or could reasonably be linked, directly or indirectly, with You.</p>\r\n\r\n<p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>\r\n\r\n<p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>\r\n\r\n<p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>\r\n\r\n<p><strong>Data Controller</strong>, for the purposes of the GDPR (General Data Protection Regulation), refers to the Company as the legal person which alone or jointly with others determines the purposes and means of the processing of Personal Data.</p>\r\n\r\n<p><strong>Do Not Track</strong> (DNT) is a concept that has been promoted by US regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing internet users to control the tracking of their online activities across websites.</p>\r\n\r\n<p><strong>Business</strong>, for the purpose of the CCPA (California Consumer Privacy Act), refers to the Company as the legal entity that collects Consumers' personal information and determines the purposes and means of the processing of Consumers' personal information, or on behalf of which such information is collected and that alone, or jointly with others, determines the purposes and means of the processing of consumers' personal information, that does business in the State of California.</p>\r\n\r\n<p><strong>Consumer</strong>, for the purpose of the CCPA (California Consumer Privacy Act), means a natural person who is a California resident. A resident, as defined in the law, includes (1) every individual who is in the USA for other than a temporary or transitory purpose, and (2) every individual who is domiciled in the USA who is outside the USA for a temporary or transitory purpose.</p>\r\n\r\n<p><strong>Sale</strong>, for the purpose of the CCPA (California Consumer Privacy Act), means selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a Consumer's Personal information to another business or a third party for monetary or other valuable consideration.</p>\r\n\r\n<p>Collecting and Using Your Personal Data</p>\r\n\r\n<h2>Types of Data Collected</h2>\r\n\r\n<h3>Personal Data</h3>\r\n\r\n<p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>\r\n\r\n<p>Email address</p>\r\n\r\n<p>First name and last name</p>\r\n\r\n<p>Phone number</p>\r\n\r\n<p>Address, State, Province, ZIP/Postal code, City</p>\r\n\r\n<p>Usage Data</p>\r\n\r\n<h3>Usage Data</h3>\r\n\r\n<p>Usage Data is collected automatically when using the Service.</p>\r\n\r\n<p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>\r\n\r\n<p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>\r\n\r\n<p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>\r\n\r\n<h3>Information from Third-Party Social Media Services</h3>\r\n\r\n<p>The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:</p>\r\n\r\n<ul>\r\n\t<li>Google</li>\r\n\t<li>Facebook</li>\r\n\t<li>Twitter</li>\r\n</ul>\r\n\r\n<p>If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.</p>\r\n\r\n<p>You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.</p>\r\n\r\n<h3>Information Collected while Using the Application</h3>\r\n\r\n<p>While using Our Application, in orders to provide features of Our Application, We may collect, with your prior permission:</p>\r\n\r\n<p>Information regarding your location</p>\r\n\r\n<p>Pictures and other information from your Device's camera and photo library</p>\r\n\r\n<p>We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it be simply stored on Your device.</p>\r\n\r\n<p>You can enable or disable access to this information at any time, through Your Device settings.</p>\r\n\r\n<h3>Tracking Technologies and Cookies</h3>\r\n\r\n<p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.</p>\r\n\r\n<p>You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.</p>\r\n\r\n<p>Cookies can be \"Persistent\" or \"Session\" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser. Learn more about cookies: <a href=\"https://www.termsfeed.com/blog/cookies/\">All About Cookies</a>.</p>\r\n\r\n<p>We use both session and persistent Cookies for the purposes set out below:</p>\r\n\r\n<p><strong>Necessary / Essential Cookies</strong></p>\r\n\r\n<p>Type: Session Cookies</p>\r\n\r\n<p>Administered by: Us</p>\r\n\r\n<p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>\r\n\r\n<p><strong>Cookies Policy / Notice Acceptance Cookies</strong></p>\r\n\r\n<p>Type: Persistent Cookies</p>\r\n\r\n<p>Administered by: Us</p>\r\n\r\n<p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>\r\n\r\n<p><strong>Functionality Cookies</strong></p>\r\n\r\n<p>Type: Persistent Cookies</p>\r\n\r\n<p>Administered by: Us</p>\r\n\r\n<p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>\r\n\r\n<p><strong>Tracking and Performance Cookies</strong></p>\r\n\r\n<p>Type: Persistent Cookies</p>\r\n\r\n<p>Administered by: Third-Parties</p>\r\n\r\n<p>Purpose: These Cookies are used to track information about traffic to the Website and how users use the Website. The information gathered via these Cookies may directly or indirectly identify you as an individual visitor. This is because the information collected is typically linked to a pseudonymous identifier associated with the device you use to access the Website. We may also use these Cookies to test new advertisements, pages, features or new functionality of the Website to see how our users react to them.</p>\r\n\r\n<p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>\r\n\r\n<h2>Use of Your Personal Data</h2>\r\n\r\n<p>The Company may use Personal Data for the following purposes:</p>\r\n\r\n<ul>\r\n\t<li><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</li>\r\n\t<li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>\r\n\t<li><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>\r\n\t<li><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>\r\n\t<li><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>\r\n\t<li><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</li>\r\n</ul>\r\n\r\n<p>We may share your personal information in the following situations:</p>\r\n\r\n<ul>\r\n\t<li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, for payment processing, to contact You.</li>\r\n\t<li><strong>For Business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of our business to another company.</li>\r\n\t<li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>\r\n\t<li><strong>With Business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>\r\n\t<li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.</li>\r\n</ul>\r\n\r\n<h2>Retention of Your Personal Data</h2>\r\n\r\n<p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>\r\n\r\n<p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>\r\n\r\n<h2>Transfer of Your Personal Data</h2>\r\n\r\n<p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>\r\n\r\n<p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>\r\n\r\n<p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>\r\n\r\n<h2>Disclosure of Your Personal Data</h2>\r\n\r\n<h3>Business Transactions</h3>\r\n\r\n<p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>\r\n\r\n<h3>Law enforcement</h3>\r\n\r\n<p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>\r\n\r\n<h3>Other legal requirements</h3>\r\n\r\n<p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>\r\n\r\n<ul>\r\n\t<li>Comply with a legal obligation</li>\r\n\t<li>Protect and defend the rights or property of the Company</li>\r\n\t<li>Prevent or investigate possible wrongdoing in connection with the Service</li>\r\n\t<li>Protect the personal safety of Users of the Service or the public</li>\r\n\t<li>Protect against legal liability</li>\r\n</ul>\r\n\r\n<h2>Security of Your Personal Data</h2>\r\n\r\n<p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>\r\n\r\n<p>Detailed Information on the Processing of Your Personal Data</p>\r\n\r\n<p>Service Providers have access to Your Personal Data only to perform their tasks on Our behalf and are obligated not to disclose or use it for any other purpose.</p>\r\n\r\n<h2>Analytics</h2>\r\n\r\n<p>We may use third-party Service providers to monitor and analyze the use of our Service.</p>\r\n\r\n<p><strong>Google Analytics</strong></p>\r\n\r\n<p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>\r\n\r\n<p>You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js and dc.js) from sharing information with Google Analytics about visits activity.</p>\r\n\r\n<p>You may opt-out of certain Google Analytics features through your mobile device settings, such as your device advertising settings or by following the instructions provided by Google in their Privacy Policy: <a href=\"https://policies.google.com/privacy\">https://policies.google.com/privacy</a></p>\r\n\r\n<p>For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web page: <a href=\"https://policies.google.com/privacy\">https://policies.google.com/privacy</a></p>\r\n\r\n<h2>Email Marketing</h2>\r\n\r\n<p>We may use Your Personal Data to contact You with newsletters, marketing or promotional materials and other information that may be of interest to You. You may opt-out of receiving any, or all, of these communications from Us by following the unsubscribe link or instructions provided in any email We send or by contacting Us.</p>\r\n\r\n<p>We may use Email Marketing Service Providers to manage and send emails to You.</p>\r\n\r\n<p><strong>Mailchimp</strong></p>\r\n\r\n<p>Mailchimp is an email marketing sending service provided by The Rocket Science Group LLC.</p>\r\n\r\n<p>For more information on the privacy practices of Mailchimp, please visit their Privacy policy: <a href=\"https://mailchimp.com/legal/privacy/\">https://mailchimp.com/legal/privacy/</a></p>\r\n\r\n<h2>Payments</h2>\r\n\r\n<p>We may provide paid products and/or services within the Service. In that case, we may use third-party services for payment processing (e.g. payment processors).</p>\r\n\r\n<p>We will not store or collect Your payment card details. That information is provided directly to Our third-party payment processors whose use of Your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.</p>\r\n\r\n<p><strong>Stripe</strong></p>\r\n\r\n<p>Their Privacy Policy can be viewed at <a href=\"https://stripe.com/us/privacy\">https://stripe.com/us/privacy</a></p>\r\n\r\n<h2>Usage, Performance and Miscellaneous</h2>\r\n\r\n<p>We may use third-party Service Providers to provide better improvement of our Service.</p>\r\n\r\n<p><strong>Invisible reCAPTCHA</strong></p>\r\n\r\n<p>We use an invisible captcha service named reCAPTCHA. reCAPTCHA is operated by Google.</p>\r\n\r\n<p>The reCAPTCHA service may collect information from You and from Your Device for security purposes.</p>\r\n\r\n<p>The information gathered by reCAPTCHA is held in accordance with the Privacy Policy of Google: <a href=\"https://www.google.com/intl/en/policies/privacy/\">https://www.google.com/intl/en/policies/privacy/</a></p>\r\n\r\n<p><strong>Google Places</strong></p>\r\n\r\n<p>Google Places is a service that returns information about places using HTTP requests. It is operated by Google</p>\r\n\r\n<p>Google Places service may collect information from You and from Your Device for security purposes.</p>\r\n\r\n<p>The information gathered by Google Places is held in accordance with the Privacy Policy of Google: <a href=\"https://www.google.com/intl/en/policies/privacy/\">https://www.google.com/intl/en/policies/privacy/</a></p>\r\n\r\n<p>GDPR Privacy</p>\r\n\r\n<h2>Legal Basis for Processing Personal Data under GDPR</h2>\r\n\r\n<p>We may process Personal Data under the following conditions:</p>\r\n\r\n<ul>\r\n\t<li><strong>Consent:</strong> You have given Your consent for processing Personal Data for one or more specific purposes.</li>\r\n\t<li><strong>Performance of a contract:</strong> Provision of Personal Data is necessary for the performance of an agreement with You and/or for any pre-contractual obligations thereof.</li>\r\n\t<li><strong>Legal obligations:</strong> Processing Personal Data is necessary for compliance with a legal obligation to which the Company is subject.</li>\r\n\t<li><strong>Vital interests:</strong> Processing Personal Data is necessary in order to protect Your vital interests or of another natural person.</li>\r\n\t<li><strong>Public interests:</strong> Processing Personal Data is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Company.</li>\r\n\t<li><strong>Legitimate interests:</strong> Processing Personal Data is necessary for the purposes of the legitimate interests pursued by the Company.</li>\r\n</ul>\r\n\r\n<p>In any case, the Company will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.</p>\r\n\r\n<h2>Your Rights under the GDPR</h2>\r\n\r\n<p>The Company undertakes to respect the confidentiality of Your Personal Data and to guarantee You can exercise Your rights.</p>\r\n\r\n<p>You have the right under this Privacy Policy, and by law if You are within the EU, to:</p>\r\n\r\n<ul>\r\n\t<li><strong>Request access to Your Personal Data.</strong> The right to access, update or delete the information We have on You. Whenever made possible, you can access, update or request deletion of Your Personal Data directly within Your account settings section. If you are unable to perform these actions yourself, please contact Us to assist You. This also enables You to receive a copy of the Personal Data We hold about You.</li>\r\n\t<li><strong>Request correction of the Personal Data that We hold about You.</strong> You have the right to to have any incomplete or inaccurate information We hold about You corrected.</li>\r\n\t<li><strong>Object to processing of Your Personal Data.</strong> This right exists where We are relying on a legitimate interest as the legal basis for Our processing and there is something about Your particular situation, which makes You want to object to our processing of Your Personal Data on this ground. You also have the right to object where We are processing Your Personal Data for direct marketing purposes.</li>\r\n\t<li><strong>Request erasure of Your Personal Data.</strong> You have the right to ask Us to delete or remove Personal Data when there is no good reason for Us to continue processing it.</li>\r\n\t<li><strong>Request the transfer of Your Personal Data.</strong> We will provide to You, or to a third-party You have chosen, Your Personal Data in a structured, commonly used, machine-readable format. Please note that this right only applies to automated information which You initially provided consent for Us to use or where We used the information to perform a contract with You.</li>\r\n\t<li><strong>Withdraw Your consent.</strong> You have the right to withdraw Your consent on using your Personal Data. If You withdraw Your consent, We may not be able to provide You with access to certain specific functionalities of the Service.</li>\r\n</ul>\r\n\r\n<h2>Exercising of Your GDPR Data Protection Rights</h2>\r\n\r\n<p>You may exercise Your rights of access, rectification, cancellation and opposition by contacting Us. Please note that we may ask You to verify Your identity before responding to such requests. If You make a request, We will try our best to respond to You as soon as possible.</p>\r\n\r\n<p>You have the right to complain to a Data Protection Authority about Our collection and use of Your Personal Data. For more information, if You are in the European Economic Area (EEA), please contact Your local data protection authority in the EEA.</p>\r\n\r\n<p>Facebook Fan Page</p>\r\n\r\n<h2>Data Controller for the Facebook Fan Page</h2>\r\n\r\n<p>The Company is the Data Controller of Your Personal Data collected while using the Service. As operator of the Facebook Fan Page <a href=\"https://www.facebook.com/INSITE_theapp-108944610708510/?modal=admin_todo_tour\">https://www.facebook.com/INSITE_theapp-108944610708510/?modal=admin_todo_tour</a>, the Company and the operator of the social network Facebook are Joint Controllers.</p>\r\n\r\n<p>The Company has entered into agreements with Facebook that define the terms for use of the Facebook Fan Page, among other things. These terms are mostly based on the Facebook Terms of Service: <a href=\"https://www.facebook.com/terms.php\">https://www.facebook.com/terms.php</a></p>\r\n\r\n<p>Visit the Facebook Privacy Policy <a href=\"https://www.facebook.com/policy.php\">https://www.facebook.com/policy.php</a> for more information about how Facebook manages Personal data or contact Facebook online, or by mail: Facebook, Inc. ATTN, Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025, United States.</p>\r\n\r\n<h2>Facebook Insights</h2>\r\n\r\n<p>We use the Facebook Insights function in connection with the operation of the Facebook Fan Page and on the basis of the GDPR, in order to obtain anonymized statistical data about Our users.</p>\r\n\r\n<p>For this purpose, Facebook places a Cookie on the device of the user visiting Our Facebook Fan Page. Each Cookie contains a unique identifier code and remains active for a period of two years, except when it is deleted before the end of this period.</p>\r\n\r\n<p>Facebook receives, records and processes the information stored in the Cookie, especially when the user visits the Facebook services, services that are provided by other members of the Facebook Fan Page and services by other companies that use Facebook services.</p>\r\n\r\n<p>For more information on the privacy practices of Facebook, please visit Facebook Privacy Policy here: <a href=\"https://www.facebook.com/full_data_use_policy\">https://www.facebook.com/full_data_use_policy</a></p>\r\n\r\n<p>CCPA Privacy</p>\r\n\r\n<h2>Your Rights under the CCPA</h2>\r\n\r\n<p>Under this Privacy Policy, and by law if You are a resident of California, You have the following rights:</p>\r\n\r\n<ul>\r\n\t<li><strong>The right to notice.</strong> You must be properly notified which categories of Personal Data are being collected and the purposes for which the Personal Data is being used.</li>\r\n\t<li><strong>The right to access / the right to request.</strong> The CCPA permits You to request and obtain from the Company information regarding the disclosure of Your Personal Data that has been collected in the past 12 months by the Company or its subsidiaries to a third-party for the third party's direct marketing purposes.</li>\r\n\t<li><strong>The right to say no to the sale of Personal Data.</strong> You also have the right to ask the Company not to sell Your Personal Data to third parties. You can submit such a request by visiting our \"Do Not Sell My Personal Information\" section or web page.</li>\r\n\t<li><strong>The right to know about Your Personal Data.</strong> You have the right to request and obtain from the Company information regarding the disclosure of the following:</li>\r\n</ul>\r\n\r\n<ul>\r\n\t<li>The categories of Personal Data collected</li>\r\n\t<li>The sources from which the Personal Data was collected</li>\r\n\t<li>The business or commercial purpose for collecting or selling the Personal Data</li>\r\n\t<li>Categories of third parties with whom We share Personal Data</li>\r\n\t<li>The specific pieces of Personal Data we collected about You</li>\r\n</ul>\r\n\r\n<ul>\r\n\t<li><strong>The right to delete Personal Data.</strong> You also have the right to request the deletion of Your Personal Data that have been collected in the past 12 months.</li>\r\n\t<li><strong>The right not to be discriminated against.</strong> You have the right not to be discriminated against for exercising any of Your Consumer's rights, including by:</li>\r\n</ul>\r\n\r\n<ul>\r\n\t<li>Denying goods or services to You</li>\r\n\t<li>Charging different prices or rates for goods or services, including the use of discounts or other benefits or imposing penalties</li>\r\n\t<li>Providing a different level or quality of goods or services to You</li>\r\n\t<li>Suggesting that You will receive a different price or rate for goods or services or a different level or quality of goods or services.</li>\r\n</ul>\r\n\r\n<h2>Exercising Your CCPA Data Protection Rights</h2>\r\n\r\n<p>In order to exercise any of Your rights under the CCPA, and if you are a California resident, You can email or call us or visit our \"Do Not Sell My Personal Information\" section or web page.</p>\r\n\r\n<p>The Company will disclose and deliver the required information free of charge within 45 days of receiving Your verifiable request. The time period to provide the required information may be extended once by an additional 45 days when reasonable necessary and with prior notice.</p>\r\n\r\n<h2>Do Not Sell My Personal Information</h2>\r\n\r\n<p>We do not sell personal information. However, the Service Providers we partner with (for example, our advertising partners) may use technology on the Service that \"sells\" personal information as defined by the CCPA law.</p>\r\n\r\n<p>If you wish to opt out of the use of your personal information for interest-based advertising purposes and these potential sales as defined under CCPA law, you may do so by following the instructions below.</p>\r\n\r\n<p>Please note that any opt out is specific to the browser You use. You may need to opt out on every browser that you use.</p>\r\n\r\n<h3>Website</h3>\r\n\r\n<p>You can opt out of receiving ads that are personalized as served by our Service Providers by following our instructions presented on the Service:</p>\r\n\r\n<ul>\r\n\t<li>From Our \"Cookie Consent\" notice banner</li>\r\n\t<li>Or from Our \"CCPA Opt-out\" notice banner</li>\r\n\t<li>Or from Our \"Do Not Sell My Personal Information\" notice banner</li>\r\n\t<li>Or from Our \"Do Not Sell My Personal Information\" link</li>\r\n</ul>\r\n\r\n<p>The opt out will place a cookie on Your computer that is unique to the browser You use to opt out. If you change browsers or delete the cookies saved by your browser, you will need to opt out again.</p>\r\n\r\n<h3>Mobile Devices</h3>\r\n\r\n<p>Your mobile device may give you the ability to opt out of the use of information about the apps you use in order to serve you ads that are targeted to your interests:</p>\r\n\r\n<ul>\r\n\t<li>\"Opt out of Interest-Based Ads\" or \"Opt out of Ads Personalization\" on Android devices</li>\r\n\t<li>\"Limit Ad Tracking\" on iOS devices</li>\r\n</ul>\r\n\r\n<p>You can also stop the collection of location information from Your mobile device by changing the preferences on your mobile device.</p>\r\n\r\n<p>\"Do Not Track\" Policy as Required by California Online Privacy Protection Act (CalOPPA)</p>\r\n\r\n<p>Our Service does not respond to Do Not Track signals.</p>\r\n\r\n<p>However, some third party websites do keep track of Your browsing activities. If You are visiting such websites, You can set Your preferences in Your web browser to inform websites that You do not want to be tracked. You can enable or disable DNT by visiting the preferences or settings page of Your web browser.</p>\r\n\r\n<p>Your California Privacy Rights (California's Shine the Light law)</p>\r\n\r\n<p>Under California Civil Code Section 1798 (California's Shine the Light law), California residents with an established business relationship with us can request information once a year about sharing their Personal Data with third parties for the third parties' direct marketing purposes.</p>\r\n\r\n<p>If you'd like to request more information under the California Shine the Light law, and if you are a California resident, You can contact Us using the contact information provided below.</p>\r\n\r\n<p>California Privacy Rights for Minor Users (California Business and Professions Code Section 22581)</p>\r\n\r\n<p>California Business and Professions Code section 22581 allow California residents under the age of 18 who are registered users of online sites, services or applications to request and obtain removal of content or information they have publicly posted.</p>\r\n\r\n<p>To request removal of such data, and if you are a California resident, You can contact Us using the contact information provided below, and include the email address associated with Your account.</p>\r\n\r\n<p>Be aware that Your request does not guarantee complete or comprehensive removal of content or information posted online and that the law may not permit or require removal in certain circumstances.</p>\r\n\r\n<p>Links to Other Websites</p>\r\n\r\n<p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>\r\n\r\n<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>\r\n\r\n<p>Changes to this Privacy Policy</p>\r\n\r\n<p>We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>\r\n\r\n<p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the \"Last updated\" date at the top of this Privacy Policy.</p>\r\n\r\n<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>\r\n\r\n<p>Contact Us</p>\r\n\r\n<p>If you have any questions about this Privacy Policy, You can contact us:</p>\r\n\r\n<ul>\r\n\t<li>By email: info@insite.media</li>\r\n</ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/public-detailed-view/public-detailed-view.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/public-detailed-view/public-detailed-view.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row other-wrap\">\r\n        <div class=\"col-lg-4 col-md-5 col-sm-12 col-12\">\r\n            <div class=\"public-detail\">\r\n\r\n                <div class=\"dropdown flag-drop\" *ngIf=\"!is_reported\">\r\n                    <button class=\"dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <img class=\"flag\" src=\"assets/images/icon/flag.png\">\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <label *ngFor=\"let reason of questionDetail?.report_reasons\" class=\"dropdown-item\"><input\r\n                                type=\"radio\" (click)=\"reportPost(reason.id)\" name=\"choose\" />{{reason.reason}}</label>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"user-details\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" readonly=true class=\"form-control\"\r\n                            placeholder=\"{{questionDetail?.nickname}}\">\r\n                    </div>\r\n                    <p>{{questionDetail?.question_text}}</p>\r\n                    <ul>\r\n                        <li><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" data-target=\"#comment\">\r\n                                <img src=\"assets/images/icon/qa.png\">\r\n                                <p class=\"padding-0\">{{questionDetail?.total_comments}}</p>\r\n                            </a></li>\r\n                        <li>\r\n                            <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                                <div class=\"dropdown flag-drop flag-margn\">\r\n                                    <button class=\"dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                        <a href=\"JavaScript:void(0);\"><img src=\"assets/images/icon/share.png\">\r\n                                            <p class=\"padding-0\"></p>\r\n                                        </a>\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                                        <a href=\"https://www.linkedin.com/shareArticle?mini=true&url=https://insite.fluper.in/public-detailed-view/{{post_id}}\"\r\n                                            target=\"_blank\">\r\n                                            <label class=\"dropdown-item\"> Share on linkedin</label>\r\n                                        </a>\r\n                                        <a href=\"https://www.facebook.com/sharer/sharer.php?u=https://insite.fluper.in/public-detailed-view/{{post_id}}\"\r\n                                            target=\"_blank\">\r\n                                            <label class=\"dropdown-item\"> Share on Facebook</label>\r\n                                        </a>\r\n                                        <a href=\"https://twitter.com/intent/tweet?original_referer=https://insite.fluper.in/public-detailed-view/{{post_id}}\"\r\n                                            target=\"_blank\">\r\n                                            <label class=\"dropdown-item\"> Share on twitter</label>\r\n                                        </a>\r\n                                        <a></a>\r\n                                        <label (click)=\"copyLink()\" class=\"dropdown-item\">Copy link</label>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </li>\r\n                        <li><a href=\"JavaScript:void(0);\"><img (click)=\"likeDislikePost(questionDetail?.is_liked)\"\r\n                                    src=\"assets/images/icon/like.png\">\r\n                                <p class=\"padding-0\">{{questionDetail?.total_likes}}</p>\r\n                            </a></li>\r\n                        <li><a href=\"JavaScript:void(0);\"><img\r\n                                    (click)=\"navigateOnMap(questionDetail?.lat,questionDetail?.lon)\"\r\n                                    src=\"assets/images/icon/sent_mail.png\">\r\n                                <p class=\"padding-0\"></p>\r\n                            </a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- ====================== -->\r\n            <!-- <div class=\"border container\">\r\n                <div class=\"d-flex\">\r\n                    <div class=\"\">\r\n                        <ul *ngFor=\"let c of commentname\">\r\n                            <li><img class=\"img rounded-circle\" width=\"20%\" height=\"20%\"\r\n                                    src=\"{{c.comment_by.profile_image}}\"></li>\r\n                            <li>Company Name : {{c.comment_by.company_name}}</li>\r\n                            <li>{{c.content}}</li>\r\n                        </ul>\r\n                    </div>\r\n\r\n                </div>\r\n            </div> -->\r\n            <!-- =============================================== -->\r\n\r\n            <!-- ======================================================== -->\r\n            <div style=\"height: 300px;\r\n            border: 1px solid gainsboro;\r\n            overflow-x: hidden;\r\n            overflow-y: auto;\">\r\n                <div class=\"likes-list\">\r\n                    <ul *ngFor=\"let c of comments; let i =index;\">\r\n                        <li>\r\n                            <div class=\"likes-flex\">\r\n                                <div class=\"likes-img\">\r\n                                    <img src=\"{{comments[i].comment_by.profile_image||'assets/images/1099386850.jpg'}}\">\r\n                                </div>\r\n                                <div class=\"likes-name\">\r\n                                    <h6>{{comments[i].comment_by.company_name}}</h6>\r\n                                    <h6>{{comments[i].comment_by.name}}</h6>\r\n                                    <p>{{comments[i].created}}</p>\r\n                                </div>\r\n                                <div class=\"likes\">\r\n                                    <a href=\"JavaScript:void(0);\">\r\n                                        <img (click)=\"likeDislikeComment(comments[i].id,comments[i].is_liked)\"\r\n                                            src=\"assets/images/icon/like.png\"><span>{{comments[i].total_like}}</span>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"likes-info\">\r\n                                <p>{{comments[i].content}}</p>\r\n                            </div>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- ==================================================================== -->\r\n\r\n\r\n\r\n        </div>\r\n        <div class=\"col-lg-8 col-md-7 col-sm-12 col-12\">\r\n            <a href=\"{{questionDetail?.picture}}\" target=\"_blank\" rel=\"noopener noreferrer\">\r\n                <div class=\"destroted\" [ngStyle]=\"{'background-image': 'url(' + questionDetail?.picture + ')'}\"></div>\r\n            </a>\r\n            <!-- <div class=\"cover-pic\" >\r\n            <img src=\"{{questionDetail?.picture}}\">\r\n        </div> -->\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <app-footer></app-footer> -->\r\n\r\n<div id=\"comment\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n\r\n            <button class=\"close\" style=\"text-align: right; margin-right: 10px;\" data-dismiss=\"modal\">&times;</button>\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n\r\n                        <div class=\"likes-list\">\r\n                            <ul *ngFor=\"let c of comments; let i =index;\">\r\n                                <li>\r\n                                    <div class=\"likes-flex\">\r\n                                        <div class=\"likes-img\">\r\n                                            <img\r\n                                                src=\"{{comments[i].comment_by.profile_image||'assets/images/1099386850.jpg'}}\">\r\n                                        </div>\r\n                                        <div class=\"likes-name\">\r\n                                            <h6>{{comments[i].comment_by.company_name}}</h6>\r\n                                            <h6>{{comments[i].comment_by.name}}</h6>\r\n                                            <p>{{comments[i].created}}</p>\r\n                                        </div>\r\n                                        <div class=\"likes\">\r\n                                            <a href=\"JavaScript:void(0);\">\r\n                                                <img (click)=\"likeDislikeComment(comments[i].id,comments[i].is_liked)\"\r\n                                                    src=\"assets/images/icon/like.png\"><span>{{comments[i].total_like}}</span>\r\n                                            </a>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"likes-info\">\r\n                                        <p>{{comments[i].content}}</p>\r\n                                    </div>\r\n                                </li>\r\n\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"comment\">\r\n                            <div class=\"form-group\">\r\n                                <textarea type=\"text\" id=\"content\" [formControl]=\"content\" class=\"form-control\"\r\n                                    placeholder=\"Write a comment\"></textarea>\r\n                            </div>\r\n                            <div style=\"color: red \">\r\n                                <span>{{errormessage}}</span>\r\n                            </div>\r\n                            <button class=\"btn btn-yellow\" (click)=\"commentPost()\">Submit</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/settings/settings.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/settings/settings.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row chat-wrap\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n          <div class=\"chat-heading pb-5\">\r\n            <h3>SETTINGS</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\r\n          <div class=\"settings-list\">\r\n            <ul>\r\n              <!-- <li class=\"hvr-icon-wobble-horizontal w-100\"><a class=\"w-100\"\r\n                  routerLink=\"/notifications-setting\">Notifications Settings<span><img class=\"hvr-icon\"\r\n                      src=\"assets/images/icon/arrow_with_circle.png\"></span></a></li> -->\r\n              <li class=\"hvr-icon-wobble-horizontal w-100\">\r\n                <a\r\n                  class=\"w-100\"\r\n                  data-toggle=\"modal\"\r\n                  data-target=\"#send-feedback\"\r\n                  href=\"JavaScript:void(0);\"\r\n                  >Send Feedback<span\r\n                    ><img\r\n                      class=\"hvr-icon\"\r\n                      src=\"assets/images/icon/arrow_with_circle.png\" /></span\r\n                ></a>\r\n              </li>\r\n              <li [hidden]=\"true\" class=\"hvr-icon-wobble-horizontal w-100\">\r\n                <a class=\"w-100\" routerLink=\"/terms-&-conditions\"\r\n                  >Terms and Conditions<span\r\n                    ><img\r\n                      class=\"hvr-icon\"\r\n                      src=\"assets/images/icon/arrow_with_circle.png\" /></span\r\n                ></a>\r\n              </li>\r\n              <!-- <li class=\"hvr-icon-wobble-horizontal w-100\"><a class=\"w-100\" routerLink=\"/legal-policy\">Legal Policy<span><img class=\"hvr-icon\" src=\"assets/images/icon/arrow_with_circle.png\"></span></a></li> -->\r\n              <li [hidden]=\"true\" class=\"hvr-icon-wobble-horizontal w-100\">\r\n                <a class=\"w-100\" routerLink=\"/about-us\"\r\n                  >About US<span\r\n                    ><img\r\n                      class=\"hvr-icon\"\r\n                      src=\"assets/images/icon/arrow_with_circle.png\" /></span\r\n                ></a>\r\n              </li>\r\n              <!-- <li class=\"hvr-icon-wobble-horizontal w-100\">\r\n                <a\r\n                  class=\"w-100\"\r\n                  href=\"https://api.insite.city/admin_panel/settings_management/faq/\"\r\n                  target=\"_blank\"\r\n                  >FAQ<span\r\n                    ><img\r\n                      class=\"hvr-icon\"\r\n                      src=\"assets/images/icon/arrow_with_circle.png\" /></span\r\n                ></a>\r\n              </li> -->\r\n\r\n              <li class=\"hvr-icon-wobble-horizontal w-100\"><a class=\"w-100\"\r\n                        routerLink=\"/faq\" target=\"_blank\">FAQ<span><img\r\n                            class=\"hvr-icon\" src=\"assets/images/icon/arrow_with_circle.png\"></span></a></li>\r\n\r\n              <li class=\"hvr-icon-wobble-horizontal w-100\">\r\n                <a\r\n                  class=\"w-100\"\r\n                  data-toggle=\"modal\"\r\n                  (click)=\"clearForm()\"\r\n                  data-target=\"#change-password\"\r\n                  href=\"JavaScript:void(0);\"\r\n                  >Change Password<span\r\n                    ><img\r\n                      class=\"hvr-icon\"\r\n                      src=\"assets/images/icon/arrow_with_circle.png\" /></span\r\n                ></a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-12\">\r\n          <!-- <div class=\"settings-list\">\r\n            <ul>\r\n              <li class=\"hvr-icon-wobble-horizontal w-100\"><a class=\"w-100\" routerLink=\"/privacy-policy\">Privacy and\r\n                  Safety<span><img class=\"hvr-icon\" src=\"assets/images/icon/arrow_with_circle.png\"></span></a></li>\r\n              <li class=\"hvr-icon-wobble-horizontal w-100\"><a class=\"w-100\" data-toggle=\"modal\" (click)=\"clearForm()\"\r\n                  data-target=\"#change-password\" href=\"JavaScript:void(0);\">Change Password<span><img class=\"hvr-icon\"\r\n                      src=\"assets/images/icon/arrow_with_circle.png\"></span></a></li>\r\n\r\n            </ul>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>\r\n<!--------------------------- Modal Start--------------------------------->\r\n<div id=\"send-feedback\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header my-modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          &times;\r\n        </button>\r\n        <h3 class=\"text-center\">SEND US FEEDBACK</h3>\r\n      </div>\r\n      <div class=\"modal-body my-modal-body\">\r\n        <div class=\"form-group\">\r\n          <textarea\r\n            name=\"feed-back\"\r\n            [(ngModel)]=\"feedback\"\r\n            rows=\"5\"\r\n            placeholder=\"Send us mail\"\r\n            class=\"form-control\"\r\n          ></textarea>\r\n        </div>\r\n        <div class=\"feedback-para\">\r\n          <p>\r\n            Thank you for sharing your thoughts, we value your opinion! INSITE\r\n            was developed for all of you in the architecture & design community.\r\n            It is a work in progress and we are determined to keep improving it\r\n            in orders to promote community, knowledge and discussion on all\r\n            architecture and design related topics. Learning about your\r\n            experience using INSITE is enormously helpful.\r\n          </p>\r\n        </div>\r\n        <button class=\"btn btn-simple btn-block\" (click)=\"sendFeedback()\">\r\n          SEND\r\n        </button>\r\n        <button\r\n          class=\"btn btn-simple btn-block\"\r\n          id=\"close-feedbackModal\"\r\n          data-dismiss=\"modal\"\r\n        >\r\n          CANCEL\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"change-password\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <form [formGroup]=\"changePasswordForm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header my-modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n            &times;\r\n          </button>\r\n          <h3 class=\"text-center\">CHANGE PASSWORD</h3>\r\n        </div>\r\n        <div class=\"modal-body my-modal-body\">\r\n          <div class=\"form-group\">\r\n            <input\r\n              type=\"password\"\r\n              formControlName=\"oldPassword\"\r\n              placeholder=\"Current Password\"\r\n              class=\"form-control\"\r\n            />\r\n            <div\r\n              *ngIf=\"submitted && f.oldPassword.errors\"\r\n              class=\"invalid-feedback text-center\"\r\n            >\r\n              <div *ngIf=\"f.oldPassword.errors.required\">\r\n                Current Password is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input\r\n              type=\"password\"\r\n              formControlName=\"newPassword\"\r\n              placeholder=\"New Password\"\r\n              class=\"form-control\"\r\n            />\r\n            <div\r\n              *ngIf=\"submitted && f.newPassword.errors\"\r\n              class=\"invalid-feedback text-center\"\r\n            >\r\n              <div *ngIf=\"f.newPassword.errors.required\">\r\n                New Password is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input\r\n              type=\"password\"\r\n              formControlName=\"confirmPassword\"\r\n              placeholder=\"Confirm New Password\"\r\n              class=\"form-control\"\r\n            />\r\n            <div\r\n              *ngIf=\"submitted && f.confirmPassword.errors\"\r\n              class=\"invalid-feedback text-center\"\r\n            >\r\n              <div *ngIf=\"f.confirmPassword.errors.required\">\r\n                Confirm Password is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button\r\n            class=\"btn btn-simple btn-block\"\r\n            (click)=\"changeUserPassword()\"\r\n          >\r\n            SAVE\r\n          </button>\r\n          <button\r\n            class=\"btn btn-simple btn-block\"\r\n            id=\"cancel\"\r\n            data-dismiss=\"modal\"\r\n          >\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<!--------------------------- Modal End-------------------------------->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/subscription/subscription.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/subscription/subscription.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-header *ngIf=false></app-header>\r\n<section class=\"subscription-section\">\r\n    <div class=\"container subsText\">\r\n        <div class=\"row\">\r\n            <div class=\"offset-lg-2 offset-md-2 col-lg-8 col-md-8 col-sm-12 col-xs-12\">\r\n                <div class=\"form-group account-name\">\r\n                    <h6>Account Type</h6>\r\n                    <p> {{account_type}} - {{plan_name}}</p>\r\n                </div>\r\n                <h6 class=\"include\">Features Include</h6>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-bordered\">\r\n                        <tbody>\r\n                            <!-- <tr *ngFor=\"let f of features\">\r\n                                <th *ngFor=\"let feat of f | keyvalue\">{{feat.key}}</th>\r\n                                <td *ngFor=\"let feat of f | keyvalue\">\r\n                                    <input type=\"checkbox\" [checked]=\"feat.value\" readonly/>\r\n                                </td>\r\n                            </tr> -->\r\n                            <tr>\r\n                                <th>Users Or Account</th>\r\n                                <td><label>{{users_or_account}}</label></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th>Add Pictures Link To Others Posts </th>\r\n                                <td><input type=\"checkbox\" [checked]=\"add_pictures_link_to_others_posts\"  onclick=\"return false\" />\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th>Comment On Existing Posts</th>\r\n                                <td><input type=\"checkbox\" [checked]=\"comment_on_existing_posts\"  onclick=\"return false\" /></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th>Create Posts</th>\r\n                                <td><input type=\"checkbox\" [checked]=\"create_posts\"  onclick=\"return false\" /></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th>Mark Involvement In Others Posts</th>\r\n                                <td><input type=\"checkbox\" [checked]=\"mark_involvement_in_others_posts\"  onclick=\"return false\" /></td>\r\n                            </tr>\r\n                            \r\n\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div class=\"subscription-desc\">\r\n                    <p>Amount to be paid: <span class=\"payble\"> ${{subscriptiondata?.price}}</span></p>\r\n                </div>\r\n                <div class=\"checkout text-center\">\r\n                    <button class=\"btn btn-black btn-block\"  (click)=\"Pricecheck()\" > PROCEED TO PAY</button>\r\n  \r\n                       \r\n                       \r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<div id=\"checkout\" class=\"modal fade\" role=\"dialog\" style=\"z-index: 10000000;\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n                <div class=\"modal-body my-modal-location\">\r\n                <div class=\"container card\">\r\n                    <form novalidate (ngSubmit)=\"proceedtopay()\" [formGroup]=\"stripeTest\">\r\n                        <!-- <div class=\"form-group\"> -->\r\n                            <input class=\"form-control\" type=\"text\" onkeypress=\"return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)\" formControlName=\"name\" placeholder=\"Enter card holder name\" />\r\n                        <!-- </div> -->\r\n                        <div id=\"card-element\" class=\"field\"></div>\r\n                        <button type=\"submit\" class=\"btn btn-black btn-block\">\r\n                            PROCEED TO PAY\r\n                        </button>\r\n                    </form> <br>\r\n                    <div style=\"color: red;\" ><span>{{errormessage}}</span></div>\r\n                </div> \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"paidsuccess\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header my-modal-header\">\r\n                    <h3 class=\"text-center\">SUCCESS</h3>\r\n                </div>\r\n                <div  class=\"modal-body modal-delete\">\r\n                        <h6 class=\"text-center\">Paid Successfully</h6>\r\n                </div>\r\n                <div class=\"modal-body modal-delete\">\r\n                    <button style=\"width: 50%; margin-left: 25%;\" class=\"btn btn-black btn-block\" data-dismiss=\"modal\" (click) = \"setHome()\" [routerLink]=\"'/home'\">OK</button>\r\n                    <!-- <button class=\"btn btn-simple\" (click)=\"deleteColleague()\" >YES</button> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/terms-conditions/terms-conditions.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/terms-conditions/terms-conditions.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row chat-wrap\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <div class=\"chat-heading\">\r\n                        <h3>TERMS AND CONDITIONS</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <div [innerHTML]=\"htmlString\" style=\"color: black;\">\r\n\r\n                    </div>\r\n                 </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/unfollowed-profile/unfollowed-profile.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/unfollowed-profile/unfollowed-profile.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row profile-wrap\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-12\">\r\n                    <div class=\"fix-middle\">\r\n                        <img src=\"{{profiledata?.profile_image}}\">\r\n                        <h6><strong>{{profiledata?.company_detail?.name}} </strong></h6>\r\n                        <h6><strong>{{profiledata?.name}}</strong></h6>\r\n                    </div>\r\n                    <div class=\"inv-details\">\r\n                        <p>{{profiledata?.about}}</p>\r\n                    </div>\r\n                    <div class=\"followers more-add\">\r\n                        <ul>\r\n                            <li><a href=\"JavaScript:void(0);\" data-toggle=\"modal\" (click)=\"followUnfollow()\"><img\r\n                                        src=\"assets/images/icon/add_user.png\"></a></li>\r\n                            <!-- routerLink=\"/chat\" -->\r\n                            <li *ngIf=\"profile_type == 2\"><a href=\"JavaScript:void(0);\"><img\r\n                                        routerLink='/chat-insight/{{id}}' src=\"assets/images/icon/chat.png\"></a></li>\r\n                            <li *ngIf=\"profiledata?.is_liked == false\"><img src=\"assets/images/icon/hearts.png\"\r\n                                    (click)=likeDIslike()><span>{{profiledata?.total_likes}}</span></li>\r\n                            <li *ngIf=\"profiledata?.is_liked == true\"><img src=\"assets/images/icon/Likehearts.png\"\r\n                                    (click)=likeDIslike()><span>{{profiledata?.total_likes}}</span></li>\r\n                            <li>Followers <span>{{profiledata?.total_follow_to}}</span></li>\r\n                            <li>Following <span>{{profiledata?.total_follow_by}}</span></li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"my-projects\">\r\n                        <div class=\"add-projects\">\r\n                            <h6><strong>My Projects</strong></h6>\r\n                            <h6><strong>Total Projects {{projectdata.length}}</strong></h6>\r\n                        </div>\r\n                        <div class=\"project-list\">\r\n                            <ul class=\"scroll-width myprofileli\">\r\n                               \r\n                                    <li class=\"main_li \"\r\n                                        *ngFor=\"let projectdata of projectdata\">\r\n                                        <div class=\"box-shadow\">\r\n                                            <a routerLink=\"/involvement/{{projectdata.id}}\" class=\"project-view\">\r\n                                                <img src={{projectdata.post_image.image}}>\r\n                                                <div class=\"clip-head\">\r\n                                                    <h6>{{projectdata?.name}}'s Projects |\r\n                                                        {{projectdata?.project_type?.type}}</h6>\r\n                                                    <ul>\r\n                                                        <li class=\"my-para\">\r\n                                                            <p>{{projectdata?.city}}, {{projectdata?.country}}</p>\r\n                                                            <p>{{projectdata?.year}}</p>\r\n                                                        </li>\r\n                                                        <li class=\"my-plane\">\r\n                                                            <button routerLink=\"/involvement\"><i\r\n                                                                    class=\"fa fa-paper-plane\"></i></button>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </a>\r\n                                        </div>\r\n                                    </li>\r\n                              \r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"my-social-link\">\r\n                            <div class=\"project-social cursor\">\r\n                                <a (click)='openLink(socialLinks1)' ngDefaultControl [ngModel]=\"socialLinks1\"\r\n                                    style=\"color: black;\">\r\n                                    <i class=\"fa fa-facebook\"></i>\r\n                                </a>\r\n                                <a (click)='openLink(socialLinks2)' ngDefaultControl [ngModel]=\"socialLinks2\"\r\n                                    style=\"color: black;\">\r\n                                    <i class=\"fa fa-twitter cursor\"></i>\r\n                                </a>\r\n                                <a (click)='openLink(socialLinks3)' ngDefaultControl [ngModel]=\"socialLinks3\"\r\n                                    style=\"color: black;\">\r\n                                    <i class=\"fa fa-instagram cursor\"></i>\r\n                                </a>\r\n                                <a (click)='openLink(socialLinks4)' ngDefaultControl [ngModel]=\"socialLinks4\"\r\n                                    style=\"color: black;\">\r\n                                    <i class=\"fa fa-google cursor\"></i>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"inv-details\">\r\n                        <h6><strong>Detail Description</strong></h6>\r\n                        <p>{{description}}</p>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>\r\n<!--------------------------- Modal Start--------------------------------->\r\n<div class=\"modal fade\" id=\"follow\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\" role=\"document\">\r\n        <div class=\"modal-content content-edit\">\r\n            <div class=\"modal-body follow-modal\">\r\n                <p><strong>YOU JUST FOLLOWED THIS USER</strong></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"Unfollow\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\" data-dismiss=\"modal\" role=\"document\">\r\n        <div class=\"modal-content content-edit\">\r\n            <div class=\"modal-body follow-modal\">\r\n                <p><strong>YOU JUST UNFOLLOWED THIS USER</strong></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--------------------------- Modal End-------------------------------->"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layout_notifications_view_notifications_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/notifications-view/notifications-view.component */ "./src/app/layout/notifications-view/notifications-view.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/home/home.component */ "./src/app/layout/home/home.component.ts");
/* harmony import */ var _layout_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/subscription/subscription.component */ "./src/app/layout/subscription/subscription.component.ts");
/* harmony import */ var _layout_public_detailed_view_public_detailed_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/public-detailed-view/public-detailed-view.component */ "./src/app/layout/public-detailed-view/public-detailed-view.component.ts");
/* harmony import */ var _layout_involvement_involvement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/involvement/involvement.component */ "./src/app/layout/involvement/involvement.component.ts");
/* harmony import */ var _layout_mark_involvement_gallery_mark_involvement_gallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/mark-involvement-gallery/mark-involvement-gallery.component */ "./src/app/layout/mark-involvement-gallery/mark-involvement-gallery.component.ts");
/* harmony import */ var _layout_unfollowed_profile_unfollowed_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/unfollowed-profile/unfollowed-profile.component */ "./src/app/layout/unfollowed-profile/unfollowed-profile.component.ts");
/* harmony import */ var _layout_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/my-profile/my-profile.component */ "./src/app/layout/my-profile/my-profile.component.ts");
/* harmony import */ var _layout_my_settings_my_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/my-settings/my-settings.component */ "./src/app/layout/my-settings/my-settings.component.ts");
/* harmony import */ var _layout_edit_my_post_edit_my_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/edit-my-post/edit-my-post.component */ "./src/app/layout/edit-my-post/edit-my-post.component.ts");
/* harmony import */ var _layout_chat_chat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/chat/chat.component */ "./src/app/layout/chat/chat.component.ts");
/* harmony import */ var _layout_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/edit-profile/edit-profile.component */ "./src/app/layout/edit-profile/edit-profile.component.ts");
/* harmony import */ var _layout_chat_insight_chat_insight_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/chat-insight/chat-insight.component */ "./src/app/layout/chat-insight/chat-insight.component.ts");
/* harmony import */ var _layout_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/notifications/notifications.component */ "./src/app/layout/notifications/notifications.component.ts");
/* harmony import */ var _layout_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layout/settings/settings.component */ "./src/app/layout/settings/settings.component.ts");
/* harmony import */ var _layout_notifications_setting_notifications_setting_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layout/notifications-setting/notifications-setting.component */ "./src/app/layout/notifications-setting/notifications-setting.component.ts");
/* harmony import */ var _layout_legal_policy_legal_policy_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layout/legal-policy/legal-policy.component */ "./src/app/layout/legal-policy/legal-policy.component.ts");
/* harmony import */ var _layout_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./layout/privacy-policy/privacy-policy.component */ "./src/app/layout/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _layout_faq_faq_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./layout/faq/faq.component */ "./src/app/layout/faq/faq.component.ts");
/* harmony import */ var _layout_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./layout/terms-conditions/terms-conditions.component */ "./src/app/layout/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var _layout_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./layout/about-us/about-us.component */ "./src/app/layout/about-us/about-us.component.ts");
/* harmony import */ var _layout_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./layout/create-profile/create-profile.component */ "./src/app/layout/create-profile/create-profile.component.ts");
/* harmony import */ var _layout_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./layout/disclaimer/disclaimer.component */ "./src/app/layout/disclaimer/disclaimer.component.ts");


























const routes = ([
    { path: '', component: _layout_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'home', component: _layout_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    // For Notifications View 
    { path: 'subscription', component: _layout_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_5__["SubscriptionComponent"] },
    { path: 'public-detailed-view/:post_id', component: _layout_public_detailed_view_public_detailed_view_component__WEBPACK_IMPORTED_MODULE_6__["PublicDetailedViewComponent"] },
    { path: 'involvement/:post_id', component: _layout_involvement_involvement_component__WEBPACK_IMPORTED_MODULE_7__["InvolvementComponent"] },
    { path: 'my-profile/involvement/:post_id', component: _layout_involvement_involvement_component__WEBPACK_IMPORTED_MODULE_7__["InvolvementComponent"] },
    { path: 'edit-post/:post_id', component: _layout_mark_involvement_gallery_mark_involvement_gallery_component__WEBPACK_IMPORTED_MODULE_8__["MarkInvolvementGalleryComponent"] },
    { path: 'users-profile/:name', component: _layout_unfollowed_profile_unfollowed_profile_component__WEBPACK_IMPORTED_MODULE_9__["UnfollowedProfileComponent"] },
    { path: 'my-profile', component: _layout_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_10__["MyProfileComponent"] },
    { path: 'edit-profile', component: _layout_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_14__["EditProfileComponent"] },
    { path: 'create-profile', component: _layout_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_24__["CreateProfileComponent"] },
    { path: 'my-settings', component: _layout_my_settings_my_settings_component__WEBPACK_IMPORTED_MODULE_11__["MySettingsComponent"] },
    { path: 'edit-my-post', component: _layout_edit_my_post_edit_my_post_component__WEBPACK_IMPORTED_MODULE_12__["EditMyPostComponent"] },
    { path: 'chat', component: _layout_chat_chat_component__WEBPACK_IMPORTED_MODULE_13__["ChatComponent"] },
    { path: 'notifications', component: _layout_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"] },
    { path: 'settings', component: _layout_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SettingsComponent"] },
    { path: 'notifications-setting', component: _layout_notifications_setting_notifications_setting_component__WEBPACK_IMPORTED_MODULE_18__["NotificationsSettingComponent"] },
    { path: 'legal-policy', component: _layout_legal_policy_legal_policy_component__WEBPACK_IMPORTED_MODULE_19__["LegalPolicyComponent"] },
    { path: 'privacy-policy', component: _layout_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_20__["PrivacyPolicyComponent"] },
    { path: 'faq', component: _layout_faq_faq_component__WEBPACK_IMPORTED_MODULE_21__["FaqComponent"] },
    { path: 'terms-&-conditions', component: _layout_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_22__["TermsConditionsComponent"] },
    { path: 'about-us', component: _layout_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_23__["AboutUsComponent"] },
    { path: 'chat-insight/:id', component: _layout_chat_insight_chat_insight_component__WEBPACK_IMPORTED_MODULE_15__["ChatInsightComponent"] },
    { path: 'notificationView/:id', component: _layout_notifications_view_notifications_view_component__WEBPACK_IMPORTED_MODULE_1__["NotificationsViewComponent"] },
    { path: 'disclaimer', component: _layout_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_25__["DisclaimerComponent"] }
]);
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'insite';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var _layout_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/home/home.component */ "./src/app/layout/home/home.component.ts");
/* harmony import */ var _layout_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/subscription/subscription.component */ "./src/app/layout/subscription/subscription.component.ts");
/* harmony import */ var _layout_public_detailed_view_public_detailed_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/public-detailed-view/public-detailed-view.component */ "./src/app/layout/public-detailed-view/public-detailed-view.component.ts");
/* harmony import */ var _layout_involvement_involvement_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/involvement/involvement.component */ "./src/app/layout/involvement/involvement.component.ts");
/* harmony import */ var _layout_mark_involvement_gallery_mark_involvement_gallery_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/mark-involvement-gallery/mark-involvement-gallery.component */ "./src/app/layout/mark-involvement-gallery/mark-involvement-gallery.component.ts");
/* harmony import */ var _layout_unfollowed_profile_unfollowed_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layout/unfollowed-profile/unfollowed-profile.component */ "./src/app/layout/unfollowed-profile/unfollowed-profile.component.ts");
/* harmony import */ var _layout_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layout/my-profile/my-profile.component */ "./src/app/layout/my-profile/my-profile.component.ts");
/* harmony import */ var _layout_my_settings_my_settings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layout/my-settings/my-settings.component */ "./src/app/layout/my-settings/my-settings.component.ts");
/* harmony import */ var _layout_edit_my_post_edit_my_post_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./layout/edit-my-post/edit-my-post.component */ "./src/app/layout/edit-my-post/edit-my-post.component.ts");
/* harmony import */ var _layout_chat_chat_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./layout/chat/chat.component */ "./src/app/layout/chat/chat.component.ts");
/* harmony import */ var _layout_chat_insight_chat_insight_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./layout/chat-insight/chat-insight.component */ "./src/app/layout/chat-insight/chat-insight.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _layout_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./layout/post-detail/post-detail.component */ "./src/app/layout/post-detail/post-detail.component.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/esm2015/ng2-tel-input.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm2015/ngx-stripe.js");
/* harmony import */ var _layout_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./layout/edit-profile/edit-profile.component */ "./src/app/layout/edit-profile/edit-profile.component.ts");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/fire/messaging */ "./node_modules/@angular/fire/messaging/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ "./node_modules/@ctrl/ngx-emoji-mart/fesm2015/ctrl-ngx-emoji-mart.js");
/* harmony import */ var _service_messaging_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./service/messaging.service */ "./src/app/service/messaging.service.ts");
/* harmony import */ var _layout_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./layout/notifications/notifications.component */ "./src/app/layout/notifications/notifications.component.ts");
/* harmony import */ var _layout_settings_settings_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./layout/settings/settings.component */ "./src/app/layout/settings/settings.component.ts");
/* harmony import */ var _layout_faq_faq_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./layout/faq/faq.component */ "./src/app/layout/faq/faq.component.ts");
/* harmony import */ var _layout_notifications_setting_notifications_setting_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./layout/notifications-setting/notifications-setting.component */ "./src/app/layout/notifications-setting/notifications-setting.component.ts");
/* harmony import */ var _layout_legal_policy_legal_policy_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./layout/legal-policy/legal-policy.component */ "./src/app/layout/legal-policy/legal-policy.component.ts");
/* harmony import */ var _layout_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./layout/privacy-policy/privacy-policy.component */ "./src/app/layout/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _layout_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./layout/terms-conditions/terms-conditions.component */ "./src/app/layout/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var _layout_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./layout/about-us/about-us.component */ "./src/app/layout/about-us/about-us.component.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _layout_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./layout/create-profile/create-profile.component */ "./src/app/layout/create-profile/create-profile.component.ts");
/* harmony import */ var _layout_notifications_view_notifications_view_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./layout/notifications-view/notifications-view.component */ "./src/app/layout/notifications-view/notifications-view.component.ts");
/* harmony import */ var _layout_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./layout/disclaimer/disclaimer.component */ "./src/app/layout/disclaimer/disclaimer.component.ts");
























































function getAuthServiceConfigs() {
    let config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_49__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_49__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_49__["FacebookLoginProvider"]("483602063110307"),
        },
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_49__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_49__["GoogleLoginProvider"]("763270833053-757ul2ps7a0kd5upn8f8dtldlv4vjo9i.apps.googleusercontent.com"),
        },
    ]);
    return config;
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _common_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _layout_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _layout_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_13__["SubscriptionComponent"],
            _layout_public_detailed_view_public_detailed_view_component__WEBPACK_IMPORTED_MODULE_14__["PublicDetailedViewComponent"],
            _layout_involvement_involvement_component__WEBPACK_IMPORTED_MODULE_15__["InvolvementComponent"],
            _layout_mark_involvement_gallery_mark_involvement_gallery_component__WEBPACK_IMPORTED_MODULE_16__["MarkInvolvementGalleryComponent"],
            _layout_unfollowed_profile_unfollowed_profile_component__WEBPACK_IMPORTED_MODULE_17__["UnfollowedProfileComponent"],
            _layout_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_18__["MyProfileComponent"],
            _layout_my_settings_my_settings_component__WEBPACK_IMPORTED_MODULE_19__["MySettingsComponent"],
            _layout_edit_my_post_edit_my_post_component__WEBPACK_IMPORTED_MODULE_20__["EditMyPostComponent"],
            _layout_chat_chat_component__WEBPACK_IMPORTED_MODULE_21__["ChatComponent"],
            _layout_chat_insight_chat_insight_component__WEBPACK_IMPORTED_MODULE_22__["ChatInsightComponent"],
            _layout_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_29__["PostDetailComponent"],
            _layout_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_32__["EditProfileComponent"],
            _layout_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_40__["NotificationsComponent"],
            _layout_settings_settings_component__WEBPACK_IMPORTED_MODULE_41__["SettingsComponent"],
            _layout_faq_faq_component__WEBPACK_IMPORTED_MODULE_42__["FaqComponent"],
            _layout_notifications_setting_notifications_setting_component__WEBPACK_IMPORTED_MODULE_43__["NotificationsSettingComponent"],
            _layout_legal_policy_legal_policy_component__WEBPACK_IMPORTED_MODULE_44__["LegalPolicyComponent"],
            _layout_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_45__["PrivacyPolicyComponent"],
            _layout_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_46__["TermsConditionsComponent"],
            _layout_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_47__["AboutUsComponent"],
            _layout_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_50__["CreateProfileComponent"],
            _layout_notifications_view_notifications_view_component__WEBPACK_IMPORTED_MODULE_51__["NotificationsViewComponent"],
            _layout_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_52__["DisclaimerComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_33__["AngularFireMessagingModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_34__["AngularFireDatabaseModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_38__["PickerModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_35__["AngularFireAuthModule"],
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__["LightboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ng2_tel_input__WEBPACK_IMPORTED_MODULE_30__["Ng2TelInputModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_28__["NgMultiSelectDropDownModule"].forRoot(),
            _angular_fire__WEBPACK_IMPORTED_MODULE_36__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_37__["environment"].firebase),
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
                preventDuplicates: true,
            }),
            ngx_stripe__WEBPACK_IMPORTED_MODULE_31__["NgxStripeModule"].forRoot("pk_test_AY7BoqlbrA4ys7EjUpYuhkDd00oyvOEvqy"),
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_48__["GooglePlaceModule"],
            angular_6_social_login__WEBPACK_IMPORTED_MODULE_49__["SocialLoginModule"],
        ],
        providers: [
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
            _service_messaging_service__WEBPACK_IMPORTED_MODULE_39__["MessagingService"],
            {
                provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_49__["AuthServiceConfig"],
                useFactory: getAuthServiceConfigs,
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footish {\r\n    display: none;\r\n}\r\n\r\n.ui-datepicker-calendar {\r\n    display: none;\r\n}\r\n\r\n.ui-datepicker-month {\r\n    display: none;\r\n}\r\n\r\n.ui-datepicker-prev {\r\n    display: none;\r\n}\r\n\r\n.ui-datepicker-next {\r\n    display: none;\r\n}\r\n\r\n.fb-icon {\r\n    width: 28 !important;\r\n    height: 28 !important;\r\n}\r\n\r\n#scrollToBottom{\r\n  cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3Rpc2gge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnVpLWRhdGVwaWNrZXItY2FsZW5kYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnVpLWRhdGVwaWNrZXItbW9udGgge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnVpLWRhdGVwaWNrZXItcHJldiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udWktZGF0ZXBpY2tlci1uZXh0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmZiLWljb24ge1xyXG4gICAgd2lkdGg6IDI4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDI4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNzY3JvbGxUb0JvdHRvbXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/common/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let FooterComponent = class FooterComponent {
    constructor(fb, ApiService, af, toast, router, authService, http) {
        this.fb = fb;
        this.ApiService = ApiService;
        this.af = af;
        this.toast = toast;
        this.router = router;
        this.authService = authService;
        this.http = http;
        //---------------------------DECLARATION CODE------------------------------
        this.companyAddress = "";
        this.bussiness_area = [];
        this.morethanfive = "0";
        this.profession = [];
        this.country_code = [];
        this.submitted = false;
        this.allYears = [];
    }
    ngOnInit() {
        $("#scrollToBottom").bind("click", function () {
            $("html, body").animate({ scrollTop: $(document).height() }, 1200);
            return false;
        });
        // this.userData = JSON.parse(localStorage.getItem('userData'));
        // this.userId = this.userData.id
        var d = new Date();
        var yyyy = d.getFullYear();
        for (var y = yyyy; y >= yyyy - 50; y--) {
            this.allYears.push(y);
        }
        console.log(this.allYears, "allYears");
        $("#moreEmp").click(function () {
            if (this.checked) {
                this.morethanfive = "1";
            }
            else {
                this.morethanfive = "0";
            }
        });
        $(".toggle-footer").click(function () {
            $("#footish").slideToggle();
            $(".toggle-footer .fa")
                .toggleClass("fa-angle-double-down")
                .toggleClass("fa-angle-double-up");
        });
        $(".otp .otp-labl .otp1").keyup(function (e) {
            var key = e.which || e.keyCode || e.charCode;
            if (key == 8 || key == 46) {
                let is_first_child = $($(this).parent(".otp-labl")).is(":first-child");
                if (!is_first_child)
                    $(this)
                        .parent(".otp-labl")
                        .prev(".otp-labl")
                        .children(".otp1")
                        .trigger("select");
                return;
            }
            $(this)
                .parent(".otp-labl")
                .next(".otp-labl")
                .children(".otp1")
                .trigger("select");
            if (String.fromCharCode(e.keyCode).match(/[^0-9]/g))
                return false;
        });
        //---------------------------INITIALIZATION CODE----------------------------
        this.loginForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.gustregister = this.fb.group({
            mobile_number: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")],
            ],
            country_code: "",
            social_id: "",
            email: "",
        });
        this.otpverification = {
            otp1: "",
            otp2: "",
            otp3: "",
            otp4: "",
            orginal_verification_code: "",
        };
        this.errormessage = "";
        this.submitted = false;
        this.create_company_profile_page1 = this.fb.group({
            username: "",
            company_name: "",
            email: "",
            password: "",
            confirm_password: "",
        });
        this.create_company_profile_page2 = this.fb.group({
            address_line1: this.companyAddress,
            address_line2: "",
            address_line3: "",
            description: "",
            bussiness_area: "Select Business Area",
            year_of_foundation: "Year Of Founding",
            picture: null,
        });
        // forget_pass_form(){
        //   this.forget_pass_form = this.fb.group({
        //     email: ['', [Validators.email, Validators.required]],
        //   });
        // }
        // this.create_company_profile_page2.controls['year_of_founding'].setValue(document.getElementById('date-own'));
        this.create_personal_profile_pageform();
    }
    onFileChanged(event) {
        this.selectedFile = event.target.files[0];
    }
    moreEmp($event) {
        if ($event.target.checked) {
            this.morethanfive = "1";
        }
        else {
            this.morethanfive = "0";
        }
    }
    onUpload() {
        const uploadData = new FormData();
        uploadData.append("myFile", this.selectedFile, this.selectedFile.name);
        // console.log(this.selectedFile.name+ "selected file")
        // console.log(uploadData+ "upload data")
    }
    create_personal_profile_pageform() {
        this.create_personal_profile_page1 = this.fb.group({
            username: [""],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirm_password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            profession: ["Select Profession", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            picture: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    onSubmit() {
        let datoToSend = {
            email: this.loginForm.get("email").value,
            password: this.loginForm.get("password").value,
            social_id: "",
            account_type: "1",
            device_type: "1",
            device_token: "123",
        };
        // console.log(localStorage.getItem("NToken"), "nnn")
        this.ApiService.login(datoToSend).subscribe((response) => {
            this.toast.success("You are successfully logged in");
            localStorage.setItem("Notification", "true");
            this.ApiService.setUserData(response.data);
            // localStorage.setItem("captured",response.captured)
            localStorage.setItem("captured", "true");
            // localStorage.setItem("captured", response.captured);
            setTimeout(function () {
                window.location.reload();
            }, 500);
            if (response.captured == false) {
                this.router.navigate(["/subscription"]);
                return;
            }
            else {
                this.userState();
            }
        }, (error) => {
            this.toast.error(error.error.message);
        });
    }
    //--------------------------LOADING CODE--------------------------------------
    load_guest_number() {
        console.log("calling");
        $("#login").modal("hide");
        this.submitted = false;
        this.api_get_country_code();
        this.gustregister.setValue({
            mobile_number: "",
            country_code: "",
            social_id: "",
            email: "",
        });
        $("#create-profile").modal("show");
    }
    load_guest_otp() {
        this.otpverification.otp1 = "";
        this.otpverification.otp2 = "";
        this.otpverification.otp3 = "";
        this.otpverification.otp4 = "";
    }
    load_create_company_profile_page1() {
        this.create_company_profile_page1.setValue({
            username: "",
            company_name: "",
            email: "",
            password: "",
            confirm_password: "",
        });
    }
    load_create_company_profile_page2() {
        this.api_get_bussiness_area();
    }
    getemp() {
        var a = $("#seloption :selected").val();
        if (a == 8) {
            this.emp = 1;
        }
        else {
            this.emp = 0;
        }
        // console.log(a)
    }
    load_create_personal_profile_page1() {
        //HERE******************
        this.create_personal_profile_pageform();
        this.api_get_profession();
        console.log(this.api_get_profession(), "303  page  ");
    }
    // forget_pass(){
    // }
    //-------------------------VALIDATION CODE--------------------------------
    validate_create_company_profile_page1() {
        var username = this.create_company_profile_page1.value.username;
        var company_name = this.create_company_profile_page1.value.company_name;
        var email = this.create_company_profile_page1.value.email;
        var password = this.create_company_profile_page1.value.password;
        var confirm_password = this.create_company_profile_page1.value.confirm_password;
        var picture = this.create_company_profile_page1.value.picture;
        // if (!username || username == "") {
        //   this.loginError("Username can not be empty");
        //   return false;
        // }
        if (!company_name || company_name == "") {
            this.loginError("Company name can not be blank");
            return false;
        }
        // else if (/\d/.test(company_name)) {
        //   this.loginError("Company name can not have numbers");
        //   return false;
        // }
        else if (/[~`@!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(company_name)) {
            this.loginError("Company name can not have special characters");
            return false;
        }
        if (!email || email == "") {
            this.loginError("email can not be blank");
            return false;
        }
        else if (/[^@]+@[^\.]+\..+/.test(email) == false) {
            this.loginError("email id is not valid");
            return false;
        }
        if (!password || password == "") {
            this.loginError("Please provide password");
            return false;
        }
        else if (password.length < 8) {
            this.loginError("Password must have atleast 8 characters");
            return false;
        }
        if (!confirm_password || confirm_password == "") {
            this.loginError("Please provide confirm password");
            return false;
        }
        else if (confirm_password.length < 8) {
            this.loginError("Confirm password must have atleast 8 characters");
            return false;
        }
        if (confirm_password != password) {
            this.loginError("Password and Confirm password not matching");
            return false;
        }
        if ((picture = "")) {
            this.loginError("please select picture");
            return false;
        }
        return true;
    }
    validate_create_company_profile_page2() {
        var address_line1 = this.create_company_profile_page2.value.address_line1;
        var address_line2 = this.create_company_profile_page2.value.address_line2;
        var address_line3 = this.create_company_profile_page2.value.address_line3;
        var description = this.create_company_profile_page2.value.description;
        var bussiness_area = this.create_company_profile_page2.value.bussiness_area;
        this.Bussiness_Area = bussiness_area;
        var year_of_foundation = this.create_company_profile_page2.value.year_of_foundation;
        console.log(year_of_foundation);
        var picture = this.selectedFile;
        if (!address_line1 || address_line1 == "") {
            this.loginError("Please provide address line1");
            $("#submitCheck").prop("checked", false);
            $("#btnCompanyProfileSubmit").prop("disabled", true);
            return false;
        }
        if (!bussiness_area || bussiness_area == "") {
            this.loginError("Please provide bussiness area");
            $("#submitCheck").prop("checked", false);
            $("#btnCompanyProfileSubmit").prop("disabled", true);
            return false;
        }
        if (!year_of_foundation || year_of_foundation == "") {
            this.loginError("Please provide year of foundation");
            $("#submitCheck").prop("checked", false);
            $("#btnCompanyProfileSubmit").prop("disabled", true);
            return false;
        }
        // console.log(picture)
        if (!$("#picCompany").val() || $("#picCompany").val() == null) {
            this.loginError("Please provide picture");
            return false;
        }
        if (!$("#checkme1").is(":checked")) {
            this.loginError("Please accept terms and conditions");
            return false;
        }
        return true;
    }
    // on image select
    CheckUploadedImage(event) {
        var file = event.target.files[0];
        var fileType = file["type"];
        var validImageTypes = ["image/gif", "image/jpeg", "image/png"];
        if ($.inArray(fileType, validImageTypes) < 0) {
            this.loginError("Whoops! That is not an image!");
            $("#createprofile").val("");
            // $("#picCompany").val("");
            $("#previewPersonalImg").attr("src", "/assets/images/place_image.png");
        }
        else {
            var singleFiles = event.target.files;
            if (singleFiles) {
                for (let file of singleFiles) {
                    let singleReader = new FileReader();
                    singleReader.onload = (e) => {
                        $("#previewPersonalImg").attr("src", e.target.result);
                    };
                    singleReader.readAsDataURL(file);
                }
            }
            this.selectedFile = file;
        }
    }
    CheckUploadedImage2(event) {
        var file = event.target.files[0];
        var fileType = file["type"];
        var validImageTypes = ["image/gif", "image/jpeg", "image/png"];
        if ($.inArray(fileType, validImageTypes) < 0) {
            this.loginError("Whoops! That is not an image!");
            // $("#createprofile").val("");
            $("#picCompany").val("");
            $("#previewCompanyImg").attr("src", "/assets/images/place_image.png");
        }
        else {
            var singleFiles = event.target.files;
            if (singleFiles) {
                for (let file of singleFiles) {
                    let singleReader = new FileReader();
                    singleReader.onload = (e) => {
                        $("#previewCompanyImg").attr("src", e.target.result);
                    };
                    singleReader.readAsDataURL(file);
                }
            }
            this.selectedFile = file;
        }
    }
    validate_create_personal_profile_page1() {
        var username = this.create_personal_profile_page1.value.username;
        var email = this.create_personal_profile_page1.value.email;
        var password = this.create_personal_profile_page1.value.password;
        var confirm_password = this.create_personal_profile_page1.value.confirm_password;
        var name = this.create_personal_profile_page1.value.name;
        var profession = this.create_personal_profile_page1.value.profession;
        var description = this.create_personal_profile_page1.value.description;
        var picture = this.selectedFile;
        this.email = email;
        this.password = password;
        // if (!username || username == "") {
        //   this.loginError("username can not be empty");
        //   return false;
        // } else if (/[~`@!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(username)) {
        //   this.loginError("Username can not contain special characters");
        //   return false;
        // } else if (/\s/g.test(username)) {
        //   this.loginError("Username can not contain space");
        //   return false;
        // }
        // if (!description || description == "") {
        //   this.loginError("Username can not be empty");
        //   return false;
        // }
        if (!email || email == "") {
            this.loginError("email can not be blank");
            return false;
        }
        else if (/[^@]+@[^\.]+\..+/.test(email) == false) {
            this.loginError("email id is not valid");
            return false;
        }
        if (!password || password == "") {
            this.loginError("Please provide password");
            return false;
        }
        else if (password.length < 8) {
            this.loginError("Password must have atleast 8 characters");
            return false;
        }
        if (!confirm_password || confirm_password == "") {
            this.loginError("Please provide confirm password");
            return false;
        }
        else if (confirm_password.length < 8) {
            this.loginError("Confirm password must have atleast 8 characters");
            return false;
        }
        if (confirm_password != password) {
            this.loginError("Password and Confirm password not matching");
            return false;
        }
        if (!name || name == "") {
            this.loginError("Name can not be blank");
            return false;
        }
        else if (/\d/.test(name)) {
            this.loginError("Name can not have numbers");
            return false;
        }
        else if (/[~`@!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(name)) {
            this.loginError("Name can not have special characters");
            return false;
        }
        if (!profession || profession == "") {
            this.loginError("Please provide profession");
            return false;
        }
        if (!$("#createprofile").val() || $("#createprofile").val() == null) {
            this.loginError("Please provide picture");
            return false;
        }
        if (!$("#checkme2").is(":checked")) {
            this.loginError("Please accept terms and conditions");
            return false;
        }
        return true;
    }
    //---------------------------------API CALLING CODE----------------------------------
    api_get_auto_detect_country_code() { }
    api_get_country_code() {
        this.ApiService.get_country_code().subscribe((response) => {
            console.log(response.data);
            this.country_code = response.data;
            // Auto Detect country code-----------------------------------
            this.ApiService.auto_detect_country_code().subscribe((response2) => {
                console.log(response2);
                response.data.forEach((element) => {
                    if (element.country_code == response2.countryCode) {
                        console.log(response2.countryCode, "sdasdad----------------");
                        this.gustregister.patchValue({ country_code: element.code });
                    }
                });
            }, (error) => {
                console.log("error", error);
                // this.loginError(error.error.message);
            });
            // response.data.forEach(element => {
            // if(element.country_code==countryCode){
            //   console.log(countryCode,'sdasdad----------------');
            //   this.gustregister.patchValue({country_code: countryCode});
            // }
            // });
            // this.gustregister.patchValue({country_code: '+49'});
        }, (error) => {
            console.log("error", error);
            this.loginError(error.error.message);
        });
    }
    guest_register() {
        this.submitted = true;
        if (this.gustregister.valid) {
            console.log(this.gustregister);
            this.ApiService.guest_login(this.gustregister.value).subscribe((response) => {
                // this.toast.success(response.message)
                if (response.data.verification_code) {
                    this.load_guest_otp();
                    this.otpverification.orginal_verification_code =
                        response.data.verification_code;
                    $("#guest-number").modal("hide");
                    $("#guest-otp").modal("show");
                    this.ApiService.setUserData(response.data);
                }
                else {
                    if (response.data.is_num_verify &&
                        !response.data.is_profile_created) {
                        this.toast.success("OTP verified");
                        $("#guest-number").modal("hide");
                        $("#create_profile_link").removeClass("hide-me");
                        $("#login_link").removeClass("show-me").addClass("hide-me");
                        $("#gpsforlogin").modal("show");
                        this.ApiService.setUserData(response.data);
                    }
                    else if (response.data.is_num_verify &&
                        response.data.is_profile_created) {
                        $("#guest-number").modal("hide");
                        // $("#create_profile_link").removeClass('hide-me')
                        this.toast.success("You are successfully logged in");
                        location.reload();
                        $("#login_link").removeClass("show-me").addClass("hide-me");
                        // $("#gps").modal('show');
                        this.ApiService.setUserData(response.data);
                    }
                    this.loginError(response.message);
                }
            }, (error) => {
                console.log("error", error);
                this.loginError(error.error.message);
            });
        }
    }
    api_otp_verification() {
        var otp1 = this.otpverification.otp1;
        var otp2 = this.otpverification.otp2;
        var otp3 = this.otpverification.otp3;
        var otp4 = this.otpverification.otp4;
        var otp = otp1 + otp2 + otp3 + otp4;
        console.log(this.gustregister.value);
        var send_data = {
            country_code: this.gustregister.value.country_code,
            mobile_number: this.gustregister.value.mobile_number,
            verification_code: otp,
        };
        this.ApiService.otp_verify(send_data).subscribe((response) => {
            this.otpverification.otp1 = "";
            this.otpverification.otp2 = "";
            this.otpverification.otp3 = "";
            this.otpverification.otp4 = "";
            $("#create_profile_link").removeClass("hide-me");
            $("#login_link").removeClass("show-me").addClass("hide-me");
            $("#gpsforlogin").modal("show");
            $("#guest-otp").modal("hide");
            this.toast.success("You are successfully logged in");
        }, (error) => {
            console.log("error", error);
            this.loginError(error.error.message);
        });
    }
    api_get_bussiness_area() {
        this.ApiService.get_bussiness_area().subscribe((response) => {
            console.log(response.data, "select area");
            this.bussiness_area = response.data;
        }, (error) => {
            console.log("error", error);
            this.loginError(error.error.message);
        });
    }
    api_get_profession() {
        this.ApiService.get_profession().subscribe((response) => {
            console.log(response.data);
            this.profession = response.data;
        }, (error) => {
            console.log("error", error);
            this.loginError(error.error.message);
        });
    }
    api_create_company_profile() {
        const data = new FormData();
        data.append("username", this.create_company_profile_page1.value.username),
            data.append("name", this.create_company_profile_page1.value.username),
            data.append("email", this.create_company_profile_page1.value.email),
            data.append("password", this.create_company_profile_page1.value.password),
            data.append("profession", ""),
            data.append("country_code", ""),
            data.append("mobile_number", ""),
            data.append("profile_image", this.selectedFile, this.selectedFile.name);
        data.append("account_type", "1"),
            data.append("profile_type", "2"),
            data.append("social_id", ""),
            data.append("device_token", "temporary_device_token"),
            data.append("device_type", "1"),
            data.append("company_name", this.create_company_profile_page1.value.company_name),
            data.append("address_line1", this.create_company_profile_page2.value.address_line1),
            data.append("address_line2", this.create_company_profile_page2.value.address_line2),
            data.append("address_line3", this.create_company_profile_page2.value.address_line3),
            data.append("description", this.create_company_profile_page2.value.description),
            data.append("bussiness_area", this.create_company_profile_page2.value.bussiness_area),
            data.append("is_more_than_5", this.morethanfive),
            data.append("year_of_foundation", this.create_company_profile_page2.value.year_of_foundation),
            data.append("lat", localStorage.getItem('newCompanyMapLat')),
            data.append("lon", localStorage.getItem('newCompanyMapLng'));
        // console.log(this.create_company_profile_page2.value.picture)
        this.ApiService.postCreateProfile(data).subscribe((response) => {
            console.log(response);
            $("#company-profile-page2").modal("hide");
            localStorage.setItem("Notification", "true");
            this.ApiService.setUserData(response.data);
            localStorage.setItem("captured", "true");
            this.router.navigate(["/subscription"]);
        }, (error) => {
            console.log("error", error);
            this.toast.error(error.error.message);
            this.loginError(error.error.message);
        });
        //       data.get('year_of_foundation')
        // console.log(this.year_of_founding)
    }
    userState() {
        this.userData = JSON.parse(localStorage.getItem("userData"));
        this.userId = this.userData.id;
        let timestamp = new Date().getTime().toString();
        let dataTOSave = {
            id: this.userId,
            name: this.userData.company_detail["name"],
            onlineState: "1",
            profile_image: this.userData.company_detail["picture"],
            username: this.userData.username,
            timeStamp: timestamp,
        };
        this.af.database.ref("/userState/" + this.userId).set(dataTOSave);
    }
    api_get_address_from_lat_long(lat, long) {
        // console.log(lat);
        // console.log(long);
        this.lat_toSend = lat;
        this.lon_toSend = long;
        this.ApiService.getAddressFromLatLng(lat + "," + long).then((result) => {
            var locations = result;
            console.log(result);
            // console.log(locations[0].Location.Address)
            // this.address_line1 = locations[0].Location.Address.Street+','+locations[0].Location.Address.District;
            // this.address_line2 = locations[0].Location.Address.City+','+locations[0].Location.Address.State;
            // this.address_line3 = locations[0].Location.Address.Country+','+locations[0].Location.Address.PostalCode;
            this.create_company_profile_page2.controls["address_line1"].setValue(locations[0].Location.Address.Label);
            // this.create_company_profile_page2.controls['address_line2'].setValue(
            //   locations[0].Location.Address.District + ', '+locations[0].Location.Address.City+','+locations[0].Location.Address.State
            // );
            // this.create_company_profile_page2.controls['address_line3'].setValue(
            //   locations[0].Location.Address.PostalCode + ', '+ locations[0].Location.Address.Country
            // );
        }, (error) => {
            console.log("error", error);
            // this.loginError(error.error.message);
        });
    }
    api_create_personal_profile() {
        console.log("line no 814", this.create_personal_profile_page1.value);
        // *********************
        // console.log(this.create_personal_profile_page1.value.password);
        // console.log(this.create_personal_profile_page1.value.conf_password);
        const data = new FormData();
        data.append("username", this.create_personal_profile_page1.value.username),
            data.append("name", this.create_personal_profile_page1.value.name),
            data.append("email", this.email),
            data.append("password", this.password),
            // data.append("country_code", this.ApiService.getUserData().country_code),
            // data.append("mobile_number", this.ApiService.getUserData().mobile_number),
            data.append("profession", this.create_personal_profile_page1.value.profession),
            data.append("description", this.create_personal_profile_page1.value.description),
            data.append("profile_image", this.selectedFile, this.selectedFile.name);
        // data.append('profile_image',this.create_personal_profile_page1.value.picture),
        data.append("account_type", "1"),
            data.append("profile_type", "1"),
            data.append("social_id", "0"),
            data.append("device_token", "123"),
            data.append("device_type", "1"),
            data.append("company_name", ""),
            data.append("address_line1", ""),
            data.append("address_line2", ""),
            data.append("address_line3", ""),
            data.append("bussiness_area", ""),
            data.append("year_of_foundation", ""),
            data.append("lat", ""),
            data.append("lon", "");
        this.ApiService.postCreateProfile(data).subscribe((response) => {
            console.log(response, "This is map postCreateProfile response -----845------");
            this.toast.success(response.message);
            this.ApiService.setUserData(response.data);
            setTimeout(function () {
                location.reload();
            }, 1000);
            localStorage.setItem("captured", "true");
            $("#individual-profile").modal("hide");
            $("#login_link").removeClass("show-me").addClass("hide-me");
        }, (error) => {
            console.log("error", error);
            this.toast.error(error.error.message);
            // this.loginError(error.error.message);
        });
    }
    //-------------------------OPERATION PERFORM CODE--------------------------
    // google.maps.event.addListener(this.post_marker, 'dragend', function()
    //     {
    //         console.log( this.getPosition().lat(), this.getPosition().lng())
    //         $('#map-lat').val(this.getPosition().lat())
    //         $('#map-lon').val(this.getPosition().lng())
    //     });
    GetAddressEvent(event) {
        console.log(event, "click to res location");
        $("#custom_location").html("");
        window.navigator.geolocation.getCurrentPosition((data = {}) => {
            console.log("==884=======", data.coords, data.coords.latitude, data.coords.longitude);
            this.ApiService.getAddressNew({
                lat: localStorage.getItem('newCompanyMapLat'),
                lon: localStorage.getItem('newCompanyMapLng'),
            }).subscribe((res) => {
                let address = res["results"][1].formatted_address;
                console.log("======888===========", address);
                this.companyAddress = address;
                this.create_company_profile_page2.patchValue({
                    address_line1: this.companyAddress,
                });
            });
            let myCord = JSON.parse(JSON.stringify(data.coords));
            console.log("=====886======", myCord);
            var lat = data.coords.latitude;
            var long = data.coords.longitude;
            // var lat = $("#map-lat").val();
            // var long = $("#map-lon").val();
            var lat = data.latitude;
            var long = data.longitude;
            if (lat && long) {
                console.log(lat);
                console.log(long);
                this.api_get_address_from_lat_long(lat, long);
            }
            else {
                console.log("no lat long found");
                // $("#gps").modal("show");
                this.loginError("Unable to access your location");
                // window.location.reload();
                $("#location").modal("hide");
            }
        });
    }
    getCurrentLocation() {
        $("#custom_location").html("");
        window.navigator.geolocation.getCurrentPosition((data) => {
            console.log(data);
            var lat = data.coords.latitude;
            var long = data.coords.longitude;
            if (lat && long) {
                console.log(lat);
                console.log(long);
                this.api_get_address_from_lat_long(lat, long);
            }
            else {
                console.log("no lat long found");
                $("#gps").modal("show");
                this.loginError("Unable to access your location");
            }
        });
    }
    getCurrentLocationForLogin() {
        $("#custom_location").html("");
        window.navigator.geolocation.getCurrentPosition((data) => {
            console.log(data);
            var lat = data.coords.latitude;
            var long = data.coords.longitude;
            if (lat && long) {
                console.log(lat);
                console.log(long);
                this.api_get_address_from_lat_long(lat, long);
                console.log("Function");
                setTimeout(() => {
                    console.log("Reload");
                    location.reload();
                }, 500);
            }
            else {
                console.log("Else");
                location.reload();
            }
        });
        location.reload();
    }
    deniedLocation() {
        location.reload();
    }
    checkGPSStatus() {
        this.ApiService.getCurrentLocation().then((data) => {
            console.log(data, "======958 click to location=============");
            $("#location").modal("show");
        }, (error) => {
            console.log(error);
            this.toast.error("Unable to access your current location Because you blocked it. Please set marker manually to current location");
            // $('#location').modal('show')
        });
    }
    resend_otp() {
        $("#guest-number").modal("show");
        $("#guest-otp").modal("hide");
    }
    open_create_company_profile_page1() {
        this.profile_type = 2;
        localStorage.setItem("profile_type", String(this.profile_type));
        console.log(this.profile_type);
        $("#create-profile").modal("hide");
        this.load_create_company_profile_page1();
        $("#company-profile-page1").modal("show");
    }
    submit_create_company_profile_page1() {
        // this.profile_type = 1
        // localStorage.setItem('profile_type', String(this.profile_type))
        if (this.validate_create_company_profile_page1()) {
            console.log("hello");
            $("#company-profile-page2").modal("show");
            this.load_create_company_profile_page2();
            $("#company-profile-page1").modal("hide");
            $("#imagefile").src = "";
        }
    }
    submit_create_company_profile_page2(e) {
        console.log(this.profile_type, this.create_company_profile_page1.value, this.create_company_profile_page2.value);
        let newObj1 = JSON.parse(JSON.stringify(this.create_company_profile_page1.value));
        let newObj2 = JSON.parse(JSON.stringify(this.create_company_profile_page2.value));
        let newObj = Object.assign({}, newObj1, newObj2);
        newObj["account_type"] = 1;
        newObj["name"] = this.create_company_profile_page1.value.username;
        newObj["profile_type"] = localStorage.getItem("profile_type");
        newObj["device_token"] = 123;
        newObj["device_type"] = 1;
        newObj["email"] = this.create_company_profile_page1.value.email;
        newObj["is_more_than_5"] = true;
        newObj["lat"] = localStorage.getItem('newCompanyMapLat');
        newObj["lon"] = localStorage.getItem('newCompanyMapLng');
        newObj["profession"] = 1;
        newObj["social_id"] = 0;
        newObj["username"] = this.create_company_profile_page1.value.username;
        if (this.checkValueStatus == false) {
            this.loginError("Please accept terms and conditions");
            return false;
        }
        this.ApiService.guest_signup(newObj).subscribe((res) => {
            console.log(res, "this is also from subcription");
            // this.toast.success("Your account has created successfully please login.")
            $("#company-profile-page2").modal("hide");
            localStorage.setItem("Notification", "true");
            this.ApiService.setUserData(res.data);
            localStorage.setItem("captured", "true");
            this.router.navigate(["/subscription"]);
        }, (error) => {
            // this.toast.error("Something went wrong or credentials already registered or map in progress")
            console.log(error);
        });
        // if (this.validate_create_company_profile_page2()) {
        //   this.api_create_company_profile();
        //   this.create_company_profile_page2.setValue({
        //     address_line1: "",
        //     address_line2: "",
        //     address_line3: "",
        //     description: "",
        //     bussiness_area: "",
        //     year_of_foundation: "",
        //     picture: null,
        //   });
        // }
    }
    submit_create_company_profile_page3(e) {
        if (this.validate_create_company_profile_page1()) {
            if (this.validate_create_company_profile_page2()) {
                this.api_create_company_profile();
            }
        }
    }
    checkValue(event) {
        console.log(event.target.checked);
        this.checkValueStatus = event.target.checked;
    }
    open_create_personal_profile_page1() {
        this.profile_type = 1;
        console.log(this.profile_type);
        localStorage.setItem("profile_type", String(this.profile_type));
        console.log(this.profile_type);
        $("#create-profile").modal("hide");
        this.load_create_personal_profile_page1();
        $("#individual-profile").modal("show");
        $("#imagefile2").src = "";
    }
    submit_create_personal_profile_page1(e) {
        if (this.validate_create_personal_profile_page1()) {
            this.api_create_personal_profile();
        }
    }
    //-------------------------------API ERROR HANDLING CODE---------------------------------
    loginError(e) {
        console.log(e);
        this.errormessage = e;
        setTimeout(() => {
            this.errormessage = "";
        }, 4000);
    }
    sendFeedback() {
        if (Boolean(this.feedback) == false) {
            this.toast.error("feedback is required");
            return;
        }
        this.ApiService.sendUserFeedback({ feedback: this.feedback }).subscribe((res) => {
            this.toast.success(res["message"]);
            this.feedback = "";
            $("#close-feedbackModal").click();
        }, (error) => {
            this.toast.error(error.error.feedback);
        });
    }
    signInWithGoogle() {
        this.authService
            .signIn(angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID)
            .then((userData) => {
            console.log(userData, "google data");
            $("#individualModalBtn").trigger('click');
            $("#loginBtn").trigger('click');
            this.contact = {
                email: userData.email,
                name: userData.name,
            };
        });
    }
    signInWithFB() {
        // this.authService
        //   .signIn(FacebookLoginProvider.PROVIDER_ID)
        //   .then((userData) => {
        //     $("#individualModalBtn").trigger('click')
        //     $("#loginBtn").trigger('click')
        //     this.contact = {
        //      email: userData.email,
        //      name: userData.name,
        //     };
        //   });
    }
    // add gmail add
    signUp() {
        let email = $("#email").val();
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let status = re.test(String(email).toLowerCase());
        if (status == false) {
            this.toast.error("Please enter valid email");
        }
        else {
            localStorage.setItem("email", email);
            $("#guest-number").modal("hide");
            this.router.navigate(["/create-profile"]);
            // this.ApiService.guest_signup({email : email}).subscribe(res => {
            //   this.toast.success(res)
            // }, error =>{
            //   this.toast.error(error.message);
            // })
        }
    }
    forgotPass() {
        let email = $("#forgotEmail").val();
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let status = re.test(String(email).toLowerCase());
        if (status == false) {
            this.toast.error("Please enter valid email");
        }
        else {
            this.ApiService.guest_resetPassword({ email: email }).subscribe((res) => {
                this.toast.success("Password rest link sent");
                $("#forgot-password").modal("hide");
            }, (error) => {
                this.toast.error("Email not registered");
            });
        }
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-footer",
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/footer/footer.component.html"),
        providers: [_service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]],
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/common/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/common/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");







// declare var $:any;
let HeaderComponent = class HeaderComponent {
    constructor(ApiService, toast, router, af, dataSource) {
        this.ApiService = ApiService;
        this.toast = toast;
        this.router = router;
        this.af = af;
        this.dataSource = dataSource;
        this.hide = true;
        this.isLogined = false;
        this.isProfileCreated = false;
        this.guestUser = false;
        this.searching = false;
    }
    ngOnInit() {
        if (this.ApiService.checkIsLogin()) {
            this.isLogined = true;
            this.FullUserData = this.ApiService.getUserData();
            this.username = this.FullUserData.username;
            // if (this.FullUserData.profile_type == "2") {
            // } else {
            //   this.username = this.FullUserData.name;
            // }
            this.isProfileCreated = this.FullUserData.is_profile_created;
        }
        this.captured = localStorage.getItem("captured");
        this.profile_type = this.FullUserData ? this.FullUserData.profile_type : "";
        this.subscription = this.dataSource.currentData.subscribe((message) => (this.message = message));
    }
    searchPost() {
        let ss;
        this.ApiService.searchPost(ss).subscribe((res) => {
            this.searchList = res["data"];
        });
    }
    ifSubscribe() {
        this.router.navigate(["/home"]);
        if (this.captured == "true") {
            this.router.navigate(["/home"]);
        }
        else {
            // this.router.navigate(['/subscription'])
        }
    }
    logout() {
        this.userData = JSON.parse(localStorage.getItem("userData"));
        this.userId = this.userData.id;
        this.ApiService.getlogout().subscribe((res) => {
            this.ApiService.logout();
            this.isLogined = false;
            localStorage.removeItem("loggedIn");
            localStorage.removeItem("userData");
            localStorage.removeItem("token");
            localStorage.removeItem("Ntoken");
            localStorage.removeItem("captured");
            localStorage.removeItem("Notification");
            this.toast.success("Logout Successfully");
            let timestamp = new Date().getTime().toString();
            let dataTosaveRecent = {
                id: this.userId,
                name: this.userData.company_detail["name"],
                profile_image: this.userData.company_detail["picture"],
                onlineState: "0",
                timeStamp: timestamp,
            };
            this.af.database
                .ref("/userState/" + this.userId.toString())
                .set(dataTosaveRecent);
            setTimeout(() => {
                this.router.navigate(["/"]);
            }, 200);
        }, (err) => {
            this.isLogined = false;
            localStorage.removeItem("loggedIn");
            localStorage.removeItem("userData");
            this.toast.success("Logout Successfully");
            setTimeout(() => {
                this.router.navigate(["/"]);
            }, 200);
        });
    }
    goToProfile() {
        if (this.isProfileCreated == false) {
            this.toast.error("Create your Profile");
            this.router.navigate["/home"];
        }
        else {
            this.router.navigate(["/my-profile"]);
        }
    }
    search() {
        return (this.searching = true);
    }
    handleAddressChange(address) {
        this.lat = address.geometry.location.lat();
        this.lng = address.geometry.location.lng();
        console.log(`latitude = ${this.lat}, longitude = ${this.lng}`);
        let data = { lat: this.lat, lng: this.lng, searched: true };
        this.dataSource.changeData(data);
        this.router
            .navigateByUrl("/home", { skipLocationChange: true })
            .then(() => this.router.navigate(["/"]));
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("placesRef", { static: true })
], HeaderComponent.prototype, "placesRef", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-header",
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/common/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/layout/about-us/about-us.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/about-us/about-us.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/about-us/about-us.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/about-us/about-us.component.ts ***!
  \*******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");



let AboutUsComponent = class AboutUsComponent {
    constructor(api) {
        this.api = api;
    }
    ngOnInit() {
        this.api.a().subscribe(x => {
            this.htmlString = x.data[0].content;
            // console.log(this.htmlString)
        }, err => {
            console.log(err);
        });
    }
};
AboutUsComponent.ctorParameters = () => [
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: __webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/about-us/about-us.component.html"),
        styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/layout/about-us/about-us.component.css")]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/layout/chat-insight/chat-insight.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/chat-insight/chat-insight.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .conversation-box{\r\n    padding: 20px 15px;\r\n    border: 1px solid #EAEAEA;\r\n    width: 100%;\r\n    float: left;\r\n  }\r\n  .conversation-box .chatBoxed{\r\n    max-height: calc(100vh - 250px);\r\n    min-height: calc(75vh - 250px);\r\n    overflow: auto;\r\n    margin-bottom: 15px;\r\n    width: 100%;\r\n    float: left;\r\n    /* display: flex;\r\n    align-items: flex-end; */\r\n  }\r\n  /* .conversation-box .chatBoxed::-webkit-scrollbar{\r\n    width: 0;\r\n  } */\r\n  .converstation{\r\n    height: auto;\r\n    width: 100%;\r\n    float: left;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n  }\r\n  .pos-rel{position: relative;}\r\n  .chat-send{\r\n    width: 100%;\r\n    float: left;\r\n  }\r\n  .chat-send .btn{\r\n    position: absolute;\r\n    overflow: hidden;\r\n    padding: 5px 10px 5px 8px;\r\n    line-height: 28px;\r\n    top: 0px;\r\n    font-size: 28px;\r\n    left: 0;\r\n    z-index: 11;\r\n    color: #9a9a9e !important;\r\n    background-color: transparent!important;\r\n  }\r\n  .chat-send .msg-type +.btn{\r\n    padding: 5px 20px 5px 10px!important;\r\n  }\r\n  .chat-send .btn.right{\r\n    left: auto;\r\n    right: 0;\r\n    font-size: 22px !important;\r\n    padding: 5px 12px !important;\r\n  }\r\n  .chat-send .btn input[type=file]{\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0;\r\n  }\r\n  .msg-type{\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 8px 50px;\r\n    border-radius: 50px!important;\r\n    border: 1px solid #c5c5c5;\r\n    outline: none!important;\r\n    border: 1px solid #EAEAEA;\r\n  }\r\n  .attch-file{\r\n    position: absolute;\r\n  }\r\n  .btn-send{\r\n    cursor: pointer !important;\r\n    width: 40px;\r\n    height: 40px;\r\n    display: inline-block;\r\n    margin-left: 15px;\r\n    background: #FFF100;\r\n    border: none;\r\n    font-size: 17px;\r\n    color: #1e1e20;\r\n    border-radius: 50%;\r\n  }\r\n  .chat-send{\r\n    display: -webkit-box;\r\n    display: flex;\r\n  }\r\n  .hvr-forward{\r\n    display: block;\r\n  }\r\n  .file-attach{\r\n    text-align: center;\r\n  }\r\n  .file-attach ul li{\r\n    padding: 5px 15px;\r\n    display: inline-block;\r\n    color: #1e1e20;\r\n  }\r\n  .file-attach ul li label{\r\n    border: none;\r\n    background-color: transparent;\r\n  }\r\n  .file-attach ul li label img{\r\n    width: 45px;\r\n    height: 45px;\r\n  }\r\n  .sender-img{\r\n    width: 55px;\r\n    height: 55px;\r\n    text-align: center;\r\n  }\r\n  .sender-img img{\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n  }\r\n  .receiver-img{\r\n    width: 55px;\r\n    height: 55px;\r\n    text-align: center;\r\n  }\r\n  .receiver-img img{\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n  }\r\n  .reply{\r\n    border: 1px solid #EAEAEA;\r\n    border-radius: 8px;\r\n    padding: 15px;\r\n    position: relative;\r\n  }\r\n  .reply h6{\r\n    font-size: 14px;\r\n    padding-bottom: 5px;\r\n  }\r\n  .reply p{\r\n    font-weight: 12px;\r\n    color: #000;\r\n  }\r\n  .reply::before{\r\n    content: \"\";\r\n    position: absolute;\r\n    -webkit-transform: skewX(24deg);\r\n            transform: skewX(24deg);\r\n    top: -1px;\r\n    left: -5px;\r\n    width: 17px;\r\n    height: 18px;\r\n    border-radius: 4px 0 0 0;\r\n    border-top: 1px solid #EAEAEA;\r\n    border-left: 1px solid #EAEAEA;\r\n    background: #fff;\r\n  }\r\n  .reply-r{\r\n    border: 1px solid #EAEAEA;\r\n    border-radius: 8px;\r\n    padding: 15px;\r\n    position: relative;\r\n  }\r\n  .reply-r h6{\r\n    font-size: 14px;\r\n    padding-bottom: 5px;\r\n  }\r\n  .reply-r p{\r\n    font-weight: 12px;\r\n    color: #000;\r\n  }\r\n  .reply-r::after{\r\n    content: \"\";\r\n    position: absolute;\r\n    -webkit-transform: skewX(-24deg);\r\n            transform: skewX(-24deg);\r\n    top: -1px;\r\n    right: -5px;\r\n    width: 17px;\r\n    height: 18px;\r\n    border-radius: 0 4px 0 0;\r\n    border-top: 1px solid #EAEAEA;\r\n    border-right: 1px solid #EAEAEA;\r\n    background: #fff;\r\n  }\r\n  .sender-name{\r\n    padding: 10px 5px;\r\n  }\r\n  .sender-name p{\r\n    font-weight: 12px;\r\n    color: #36BD9E;\r\n  }\r\n  .sender-name p span{\r\n    float: right;\r\n    font-weight: 12px;\r\n    color: #C3C7C6;\r\n  }\r\n  .sender{  \r\n    display: -webkit-box;  \r\n    display: flex;\r\n    width: 100%;\r\n  }\r\n  .sender-msg{\r\n    max-width: 100%;\r\n    padding: 5px;\r\n    margin: 0 20px;\r\n  }\r\n  .receiver-name{\r\n    padding: 10px 5px;\r\n  }\r\n  .receiver-name p{\r\n    font-weight: 12px;\r\n    color: #36BD9E;\r\n  }\r\n  .receiver-name p span{\r\n    float: right;\r\n    font-weight: 12px;\r\n    color: #C3C7C6;\r\n  }\r\n  .receiver{\r\n    clear: both;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    float: right;\r\n  }\r\n  .receiver-msg{\r\n    max-width: 100%;\r\n    padding: 5px;\r\n    margin: 0 20px;\r\n  }\r\n  .pos-rel{position: relative;}\r\n  .chat-send .btn{\r\n    position: absolute;\r\n    overflow: hidden;\r\n    padding: 5px 10px 5px 8px;\r\n    line-height: 28px;\r\n    top: 0px;\r\n    font-size: 28px;\r\n    left: 0;\r\n    z-index: 11;\r\n    color: #9a9a9e !important;\r\n    background-color: transparent!important;\r\n  }\r\n  .chat-send .msg-type +.btn{\r\n    padding: 5px 20px 5px 10px!important;\r\n  }\r\n  .chat-send .btn.right{\r\n    left: auto;\r\n    right: 0;\r\n    font-size: 22px !important;\r\n    padding: 5px 12px !important;\r\n  }\r\n  .chat-send .btn input[type=file]{\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0;\r\n  }\r\n  .msg-type{\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 8px 50px;\r\n    border-radius: 50px!important;\r\n    border: 1px solid #c5c5c5;\r\n    outline: none!important;\r\n    border: 1px solid #EAEAEA;\r\n  }\r\n  .attch-file{\r\n    position: absolute;\r\n  }\r\n  .unread-msg {\r\n    width: 88px;\r\n    text-align: right;\r\n}\r\n  .read-msg p {\r\n    color: #AFAFAF;\r\n}\r\n  .read-msg {\r\n    width: 88px;\r\n    text-align: right;\r\n}\r\n  .recent-btn{\r\n    margin-top: 10px;\r\n}\r\n  .recent-btn>a>img{\r\n    margin-right: 5px;\r\n}\r\n  .chatter{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  border: 1px solid #e6e6e6;\r\n}\r\n  .chatter-img{\r\n  width: 50px;\r\n  position: relative;\r\n}\r\n  .chatter-img>img{\r\n  width: 45px;\r\n  height: 45px;\r\n    min-width: 45px;\r\n    min-height: 45px;\r\n  border-radius: 50%;\r\n}\r\n  .chatter-img>i{\r\n  position: absolute;\r\n  bottom: 5px;\r\n  right: 2px;\r\n}\r\n  .chatter-info{\r\n  margin-left: 10px;\r\n}\r\n  .chatter-info>h6{\r\n  color: #000;\r\n    padding: 10px 0 0 5px;\r\n    font-size: 18px;\r\n}\r\n  .reply-r img{\r\n  width: 130px;\r\n  height: auto;\r\n}\r\n  .reply img{\r\n  width: 130px;\r\n  height: auto;\r\n}\r\n  .zooming-img>img{\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n  .emoji-mart{\r\n  width: 100% !important;\r\n}\r\n  /* .emoji-mart {\r\n  position: fixed;\r\n  bottom: 70px;\r\n  right: 20px;\r\n  width: 100% !important;\r\n} */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NoYXQtaW5zaWdodC9jaGF0LWluc2lnaHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztJQUNHLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7RUFDYjtFQUNBO0lBQ0UsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0lBQ1g7NEJBQ3dCO0VBQzFCO0VBQ0E7O0tBRUc7RUFDSDtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQSxTQUFTLGtCQUFrQixDQUFDO0VBQzVCO0lBQ0UsV0FBVztJQUNYLFdBQVc7RUFDYjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixlQUFlO0lBQ2YsT0FBTztJQUNQLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsdUNBQXVDO0VBQ3pDO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1IsMEJBQTBCO0lBQzFCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0VBQ1o7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtFQUNBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsV0FBVztFQUNiO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsV0FBVztJQUNYLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0VBQ2hCO0VBRUEsU0FBUyxrQkFBa0IsQ0FBQztFQUM1QjtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsZUFBZTtJQUNmLE9BQU87SUFDUCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHVDQUF1QztFQUN6QztFQUNBO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLDBCQUEwQjtJQUMxQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtFQUNaO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2Qix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtFQUNBO0lBQ0ksY0FBYztBQUNsQjtFQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtFQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0VBR0E7SUFDSSxpQkFBaUI7QUFDckI7RUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjtFQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtFQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCLGtCQUFrQjtBQUNwQjtFQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7RUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtFQUNBO0VBQ0UsV0FBVztJQUNULHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0VBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkO0VBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkO0VBQ0E7QUFDQSxXQUFXO0FBQ1gsWUFBWTtBQUNaO0VBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7RUFFQTs7Ozs7R0FLRyIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jaGF0LWluc2lnaHQvY2hhdC1pbnNpZ2h0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLmNvbnZlcnNhdGlvbi1ib3h7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUFFQUVBO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgLmNvbnZlcnNhdGlvbi1ib3ggLmNoYXRCb3hlZHtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTBweCk7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDc1dmggLSAyNTBweCk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLyogZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgKi9cclxuICB9XHJcbiAgLyogLmNvbnZlcnNhdGlvbi1ib3ggLmNoYXRCb3hlZDo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgICB3aWR0aDogMDtcclxuICB9ICovXHJcbiAgLmNvbnZlcnN0YXRpb257XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB9XHJcbiAgLnBvcy1yZWx7cG9zaXRpb246IHJlbGF0aXZlO31cclxuICAuY2hhdC1zZW5ke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgLmNoYXQtc2VuZCAuYnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCA4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDExO1xyXG4gICAgY29sb3I6ICM5YTlhOWUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNoYXQtc2VuZCAubXNnLXR5cGUgKy5idG57XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggMTBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jaGF0LXNlbmQgLmJ0bi5yaWdodHtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogNXB4IDEycHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNoYXQtc2VuZCAuYnRuIGlucHV0W3R5cGU9ZmlsZV17XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAubXNnLXR5cGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDhweCA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzVjNWM1O1xyXG4gICAgb3V0bGluZTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUFFQUVBO1xyXG4gIH1cclxuICAuYXR0Y2gtZmlsZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9ICAgIFxyXG4gIC5idG4tc2VuZHtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkYxMDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzFlMWUyMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgLmNoYXQtc2VuZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5odnItZm9yd2FyZHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuZmlsZS1hdHRhY2h7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5maWxlLWF0dGFjaCB1bCBsaXtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICMxZTFlMjA7XHJcbiAgfVxyXG4gIC5maWxlLWF0dGFjaCB1bCBsaSBsYWJlbHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuZmlsZS1hdHRhY2ggdWwgbGkgbGFiZWwgaW1ne1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgfVxyXG5cclxuICAuc2VuZGVyLWltZ3tcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuc2VuZGVyLWltZyBpbWd7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgLnJlY2VpdmVyLWltZ3tcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAucmVjZWl2ZXItaW1nIGltZ3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAucmVwbHl7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUFFQUVBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnJlcGx5IGg2e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICB9XHJcbiAgLnJlcGx5IHB7XHJcbiAgICBmb250LXdlaWdodDogMTJweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICAucmVwbHk6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDI0ZGVnKTtcclxuICAgIHRvcDogLTFweDtcclxuICAgIGxlZnQ6IC01cHg7XHJcbiAgICB3aWR0aDogMTdweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgMDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUFFQUVBO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRUFFQUVBO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB9XHJcbiAgLnJlcGx5LXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUFFQUVBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnJlcGx5LXIgaDZ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAucmVwbHktciBwe1xyXG4gICAgZm9udC13ZWlnaHQ6IDEycHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgLnJlcGx5LXI6OmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogc2tld1goLTI0ZGVnKTtcclxuICAgIHRvcDogLTFweDtcclxuICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgd2lkdGg6IDE3cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCAwIDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0VBRUFFQTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFQUVBRUE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICAuc2VuZGVyLW5hbWV7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICB9XHJcbiAgLnNlbmRlci1uYW1lIHB7XHJcbiAgICBmb250LXdlaWdodDogMTJweDtcclxuICAgIGNvbG9yOiAjMzZCRDlFO1xyXG4gIH1cclxuICAuc2VuZGVyLW5hbWUgcCBzcGFue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEycHg7XHJcbiAgICBjb2xvcjogI0MzQzdDNjtcclxuICB9XHJcbiAgLnNlbmRlcnsgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuc2VuZGVyLW1zZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gIH1cclxuICAucmVjZWl2ZXItbmFtZXtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gIH1cclxuICAucmVjZWl2ZXItbmFtZSBwe1xyXG4gICAgZm9udC13ZWlnaHQ6IDEycHg7XHJcbiAgICBjb2xvcjogIzM2QkQ5RTtcclxuICB9XHJcbiAgLnJlY2VpdmVyLW5hbWUgcCBzcGFue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEycHg7XHJcbiAgICBjb2xvcjogI0MzQzdDNjtcclxuICB9XHJcbiAgLnJlY2VpdmVye1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICAucmVjZWl2ZXItbXNne1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3MtcmVse3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbiAgLmNoYXQtc2VuZCAuYnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCA4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDExO1xyXG4gICAgY29sb3I6ICM5YTlhOWUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNoYXQtc2VuZCAubXNnLXR5cGUgKy5idG57XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggMTBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jaGF0LXNlbmQgLmJ0bi5yaWdodHtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogNXB4IDEycHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNoYXQtc2VuZCAuYnRuIGlucHV0W3R5cGU9ZmlsZV17XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAubXNnLXR5cGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDhweCA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzVjNWM1O1xyXG4gICAgb3V0bGluZTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUFFQUVBO1xyXG4gIH1cclxuICAuYXR0Y2gtZmlsZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcblxyXG4gIC51bnJlYWQtbXNnIHtcclxuICAgIHdpZHRoOiA4OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnJlYWQtbXNnIHAge1xyXG4gICAgY29sb3I6ICNBRkFGQUY7XHJcbn1cclxuLnJlYWQtbXNnIHtcclxuICAgIHdpZHRoOiA4OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnJlY2VudC1idG57XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLnJlY2VudC1idG4+YT5pbWd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uY2hhdHRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbn1cclxuLmNoYXR0ZXItaW1ne1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2hhdHRlci1pbWc+aW1ne1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICAgIG1pbi13aWR0aDogNDVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5jaGF0dGVyLWltZz5pe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDVweDtcclxuICByaWdodDogMnB4O1xyXG59XHJcbi5jaGF0dGVyLWluZm97XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmNoYXR0ZXItaW5mbz5oNntcclxuICBjb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnJlcGx5LXIgaW1ne1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLnJlcGx5IGltZ3tcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi56b29taW5nLWltZz5pbWd7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmVtb2ppLW1hcnR7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLmVtb2ppLW1hcnQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDcwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSAqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/chat-insight/chat-insight.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/chat-insight/chat-insight.component.ts ***!
  \***************************************************************/
/*! exports provided: ChatInsightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatInsightComponent", function() { return ChatInsightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");








let ChatInsightComponent = class ChatInsightComponent {
    constructor(af, api, Toast, activatedRoute) {
        this.af = af;
        this.api = api;
        this.Toast = Toast;
        this.activatedRoute = activatedRoute;
        this.fileImg = false;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"];
        this.msgVal = "";
        // Recent Messages
        this.AllMessagelists = [];
        this.blocked = "blocked";
        this.blockedBy = "blockedBy";
        //Users Chat Messages
        this.SingleUserChat = [];
        // users List with whoom User did chatting
        this.chatUserarr = [];
        this.userStateData = [];
        console.log("This image in const:", this.galleryFile);
    }
    ngOnInit() {
        this.imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl.slice(0, -1);
        console.log(this.imageUrl, "imageurl");
        this.activatedRoute.params.subscribe((a) => {
            this.chatId = a.id;
        });
        this.userData = JSON.parse(localStorage.getItem("userData"));
        this.userId = this.userData.id;
        // let dataTosaveRecent = {
        //   readState: '1',
        // }
        // this.af.database.ref('/recentMessage/' + this.userId + '/' + this.chatId).update(dataTosaveRecent)
        // this.af.database.ref('/recentMessage/' + this.chatId + '/' + this.userId).update(dataTosaveRecent)
        this.getRecent();
        this.getChatUserList();
        this.getList();
        this.getChatUser();
        this.getSingleUserChat();
        this.getProfile();
        setTimeout(function () {
            $(".chatBoxed").scrollTop($(".converstation").height());
        }, 2000);
    }
    singleFile(event) {
        this.file = event.target.files[0];
        console.log(this.file, "filess");
        this.fileType = this.file["type"];
        this.Ftypes = this.fileType.slice(0, 5);
        console.log(this.Ftypes, "ggg");
        $("#file-attach").modal("hide");
        // this._message = this.file['name'];
        this.fileImg = true;
        console.log("This image in constfunction:", this.galleryFile);
        $(".msg-type").attr("readonly", true);
        this.sendFilesInChat();
    }
    sendFilesInChat() {
        var data = new FormData();
        data.append("file", this.file);
        // if(this.file){
        //   this._message = "Image File"
        // }
        this.api.sendImageInChat(data).subscribe((res) => {
            this.imageChatResponse = res["data"];
            this.fileName = this.imageChatResponse["file"].toString();
            // (environment.baseUrl  + this.imageChatResponse['file'].toString().slice(1, )).toString()
            console.log(this.fileName, "gggg");
        });
    }
    removeImage() {
        this.file = null;
        this.fileImg = false;
        this.fileName = null;
        this.galleryFile = null;
        console.log("This image :", this.galleryFile);
        this._message = "";
    }
    getRecent() {
        let that = this;
        this.af.database
            .ref("/recentMessage/" + this.userId + "/" + this.chatId)
            .on("value", function (data) {
            var recentmessage = data.val();
            that.recentMessage = recentmessage;
            that.blockedUser = recentmessage ? recentmessage.blocked : "";
            that.blockedByUser = recentmessage ? recentmessage.blockedBy : "";
            // if(Boolean(this.blockedByUser) == false){
            //   that.blockedByUser = '0'
            //   that.blockedUser = '0'
            // }
            console.log(that.blockedUser, "000000000");
            console.log(that.recentMessage, "RecentMessage");
        });
    }
    // ngOnDestroy(){
    //   let  timestamp = new Date().getTime().toString()
    //   let dataTosaveRecent = {
    //     id: this.userId,
    //     name: this.userData.company_detail['name'],
    //     profile_image:this.userData.company_detail['picture'],
    //     onlineState:"0",
    //     timeStamp:timestamp,
    // }
    // this.af.database.ref('/userState/' + this.userId.toString()).set(dataTosaveRecent)
    // }
    sendMessage() {
        let timestamp = new Date().getTime().toString();
        let toName = this.ChatUserList.find((a) => {
            return a.id == this.chatId;
        });
        console.log(toName, "Toname ppppppppppppppppppppppppp");
        // if(this.file){
        //   this.sendFilesInChat()
        // }
        // If UserId is smaller than Chat Id
        $(".msg-type").attr("readonly", false);
        if (this.fileImg == false && this._message) {
            this._message = this._message.trim();
        }
        if (this.userId < parseInt(this.chatId)) {
            if (this.fileName) {
                let dataTOSave = {
                    chat_id: this.userId + "_" + parseInt(this.chatId),
                    content: "",
                    deleted: "",
                    mediaType: this.Ftypes == "image" ? "image" : "Document",
                    receiverId: this.chatId,
                    senderId: this.userId.toString(),
                    senderName: this.userData.username,
                    status: "sent",
                    thumnilImageurl: this.fileName,
                    timeStamp: timestamp,
                    to_name: toName.username,
                };
                // this.af.list('/message/' + this.userId + '_' + this.chatId).push(dataTOSave)
                var key = this.af
                    .list("/message/" + this.userId + "_" + this.chatId)
                    .push(dataTOSave).key;
                let dataTosaveRecent = {
                    id: this.chatId,
                    lastMessage: "",
                    mediaType: this.Ftypes == "image" ? "image" : "Document",
                    name: toName.username,
                    profile_image: "",
                    readState: "0",
                    receiverId: this.chatId,
                    senderId: this.userId.toString(),
                    timeStamp: timestamp,
                    uid: key,
                };
                this.af.database
                    .ref("/recentMessage/" + this.userId + "/" + this.chatId)
                    .update(dataTosaveRecent);
                this.af.database
                    .ref("/recentMessage/" + this.chatId + "/" + this.userId)
                    .update(dataTosaveRecent);
                //  this.af.list('/recentMessage/' + this.userId + '/' + this.chatId).set()
                // this.af.list('/recentMessage/' + this.chatId + '/' + this.userId).push(dataTosaveRecent)
                this.file = null;
                this._message = "";
                this.fileName = null;
            }
            else {
                let dataTOSave = {
                    chat_id: this.userId + "_" + parseInt(this.chatId),
                    content: Boolean(this._message) == true ? this._message : undefined,
                    deleted: "",
                    mediaType: "text",
                    receiverId: this.chatId,
                    senderId: this.userId.toString(),
                    senderName: this.userData.username,
                    status: "sent",
                    thumnilImageurl: "",
                    timeStamp: timestamp,
                    to_name: toName.username,
                };
                // this.af.list('/message/' + this.userId + '_' + this.chatId).push(dataTOSave)
                var key = this.af
                    .list("/message/" + this.userId + "_" + this.chatId)
                    .push(dataTOSave).key;
                let dataTosaveRecent = {
                    id: this.chatId,
                    lastMessage: this._message,
                    mediaType: "text",
                    name: toName.username,
                    profile_image: "",
                    readState: "0",
                    receiverId: this.chatId,
                    senderId: this.userId.toString(),
                    timeStamp: timestamp,
                    uid: key,
                };
                this.af.database
                    .ref("/recentMessage/" + this.userId + "/" + this.chatId)
                    .update(dataTosaveRecent);
                this.af.database
                    .ref("/recentMessage/" + this.chatId + "/" + this.userId)
                    .update(dataTosaveRecent);
                //  this.af.list('/recentMessage/' + this.userId + '/' + this.chatId).set()
                // this.af.list('/recentMessage/' + this.chatId + '/' + this.userId).push(dataTosaveRecent)
                this._message = "";
            }
            setTimeout(function () {
                $(".chatBoxed").scrollTop($(".converstation").height());
            }, 200);
        }
        // If Chat Id is smaller than User Id
        if (parseInt(this.chatId) < this.userId) {
            if (this.fileName) {
                let dataTOSave = {
                    chat_id: parseInt(this.chatId) + "_" + this.userId,
                    content: "",
                    deleted: "",
                    mediaType: this.Ftypes == "image" ? "image" : "Document",
                    receiverId: this.chatId,
                    senderId: this.userId.toString(),
                    senderName: this.userData.username,
                    status: "sent",
                    thumnilImageurl: this.fileName,
                    timeStamp: timestamp,
                    to_name: toName.username,
                };
                // this.af.list('/message/' + this.userId + '_' + this.chatId).push(dataTOSave)
                var key = this.af
                    .list("/message/" + this.chatId + "_" + this.userId)
                    .push(dataTOSave).key;
                let dataTosaveRecent = {
                    id: this.chatId,
                    lastMessage: "",
                    mediaType: this.Ftypes == "image" ? "image" : "Document",
                    name: toName.username,
                    profile_image: "",
                    readState: "0",
                    receiverId: this.chatId,
                    senderId: this.userId.toString(),
                    timeStamp: timestamp,
                    uid: key,
                };
                this.af.database
                    .ref("/recentMessage/" + this.userId + "/" + this.chatId)
                    .update(dataTosaveRecent);
                this.af.database
                    .ref("/recentMessage/" + this.chatId + "/" + this.userId)
                    .update(dataTosaveRecent);
                //  this.af.list('/recentMessage/' + this.userId + '/' + this.chatId).set()
                // this.af.list('/recentMessage/' + this.chatId + '/' + this.userId).push(dataTosaveRecent)
                this.file = null;
                this._message = "";
                this.fileName = null;
            }
            else {
                let dataTOSave = {
                    chat_id: parseInt(this.chatId) + "_" + this.userId,
                    content: Boolean(this._message) == true ? this._message : undefined,
                    deleted: "",
                    mediaType: "text",
                    receiverId: this.chatId,
                    senderId: this.userId.toString(),
                    senderName: this.userData.username,
                    status: "sent",
                    thumnilImageurl: "",
                    timeStamp: timestamp,
                    to_name: toName.username,
                };
                // this.af.list('/message/' + this.userId + '_' + this.chatId).push(dataTOSave)
                var key = this.af
                    .list("/message/" + this.chatId + "_" + this.userId)
                    .push(dataTOSave).key;
                let dataTosaveRecent = {
                    id: this.chatId,
                    lastMessage: this._message,
                    mediaType: "text",
                    name: toName.username,
                    profile_image: "",
                    readState: "0",
                    receiverId: this.chatId,
                    senderId: this.userId.toString(),
                    timeStamp: timestamp,
                    uid: key,
                };
                this.af.database
                    .ref("/recentMessage/" + this.userId + "/" + this.chatId)
                    .update(dataTosaveRecent);
                this.af.database
                    .ref("/recentMessage/" + this.chatId + "/" + this.userId)
                    .update(dataTosaveRecent);
                //  this.af.list('/recentMessage/' + this.userId + '/' + this.chatId).set()
                // this.af.list('/recentMessage/' + this.chatId + '/' + this.userId).push(dataTosaveRecent)
                this._message = "";
                //   function scrollToBottomFunc() {
                //     $('.chatBoxed').animate({
                //         scrollTop: $('.converstation').get(0).scrollHeight
                //     }, 50);
                // }
            }
            setTimeout(function () {
                $(".chatBoxed").scrollTop($(".converstation").height());
            }, 200);
        }
        this.fileImg = false;
        // this.getSingleUserChat()
        // setTimeout(function () {
        //   $(".chatBoxed").scrollTop($('.converstation').height());
        // }, 200);
    }
    getList() {
        this.userData = JSON.parse(localStorage.getItem("userData"));
        this.userId = this.userData.id;
        this.senderProfilePic = this.userData.profile_image;
        this.af
            .list("/recentMessage/" + this.userId)
            .valueChanges()
            .subscribe((data) => {
            this.AllMessagelists = data;
            //this.userChat = data;
            console.log(this.AllMessagelists, "AllMessageList");
        });
    }
    BlockChatUser(val) {
        if (val == "1") {
            this.dataBlocked = {
                blocked: val,
            };
        }
        if (val == "0") {
            this.dataBlocked = {
                blocked: val,
            };
        }
        // let dataBlocked = {
        //   blocked: "1",
        // }
        if (val == "0") {
            this.dataBlockedBy = {
                blockedBy: "0",
            };
        }
        if (val == "1") {
            this.dataBlockedBy = {
                blockedBy: this.userId.toString(),
            };
        }
        this.af.database
            .ref("/recentMessage/" + this.userId.toString() + "/" + this.chatId)
            .update(this.dataBlocked);
        this.af.database
            .ref("/recentMessage/" + this.userId.toString() + "/" + this.chatId)
            .update(this.dataBlockedBy);
        this.af.database
            .ref("/recentMessage/" + this.chatId + "/" + this.userId.toString())
            .update(this.dataBlocked);
        this.af.database
            .ref("/recentMessage/" + this.chatId + "/" + this.userId.toString())
            .update(this.dataBlockedBy);
        window.location.reload();
    }
    getProfile() {
        this.af
            .list("/userState/" + this.chatId)
            .valueChanges()
            .subscribe((data) => {
            this.ProfileData = data;
            this.ProfileName = this.ProfileData[1];
            this.ProfileonlineStatus = this.ProfileData[2];
            this.ProfileImage = this.ProfileData[3];
            //this.userChat = data;
            console.log(this.ProfileData, "ProfileData");
        });
    }
    getSingleUserChat() {
        this.userData = JSON.parse(localStorage.getItem("userData"));
        this.userId = this.userData.id;
        if (this.userId < this.chatId) {
            this.af
                .list("/message/" + this.userId + "_" + this.chatId)
                .valueChanges()
                .subscribe((data) => {
                this.SingleUserChat = data;
                // for (let index = 0; index < this.chatUserarr.length; index++) {
                //   this.SingleUserChat.map((a) => {
                //     if ((this.chatUserarr[index].id == a.receiverId) || (this.chatUserarr[index].id == a.senderId)) {
                //       this.SingleUserChat[index]['profilePic'] = this.chatUserarr[index].profile_image ? this.chatUserarr[index].profile_image : ''
                //     }
                //   })
                // }
                //this.userChat = data;
                setTimeout(function () {
                    $(".chatBoxed").scrollTop($(".converstation").height());
                }, 200);
                console.log(this.SingleUserChat, "SingleUserChat");
            });
        }
        if (this.userId > this.chatId) {
            this.af
                .list("/message/" + this.chatId + "_" + this.userId)
                .valueChanges()
                .subscribe((data) => {
                this.SingleUserChat = data;
                // for (let index = 0; index < this.chatUserarr.length; index++) {
                //   this.SingleUserChat.map((a) => {
                //     if ((this.chatUserarr[index].id == a.receiverId) || (this.chatUserarr[index].id == a.senderId)) {
                //       this.SingleUserChat[index]['profilePic'] = this.chatUserarr[index].profile_image ?  this.chatUserarr[index].profile_image : ''
                //     }
                //   })
                // }
                //this.userChat = data;
                setTimeout(function () {
                    $(".chatBoxed").scrollTop($(".converstation").height());
                }, 200);
                console.log(this.SingleUserChat, "SingleUserChat");
            });
        }
    }
    addEmoji(event) {
        if (this._message) {
            this._message = this._message + event.emoji.native;
        }
        else {
            this._message = event.emoji.native;
        }
    }
    getChatUser() {
        this.af
            .list("/userState")
            .valueChanges()
            .subscribe((data) => {
            this.chatUserarr = [];
            this.userStateData = data;
            for (let index = 0; index < (this.AllMessagelists || []).length; index++) {
                var x = this.userStateData.find((f) => {
                    return this.AllMessagelists[index].id == f.id;
                });
                if (x)
                    this.chatUserarr.push(x);
            }
            var arr = this.AllMessagelists.filter((e) => this.userStateData.filter((f) => {
                return e.id == f.id;
            }));
        });
        console.log(this.chatUserarr, "chatUserarr");
    }
    getChat(user) {
        this.userData = user;
        this.userData = JSON.parse(localStorage.getItem("userData"));
        this.path = "message/";
        this.db
            .list(this.path)
            .valueChanges()
            .subscribe((data) => {
            this.userChat = data;
            console.log(this.userChat, "asdddddddddd");
            $("#chatUser").show();
        });
    }
    getChatUserList() {
        this.api.getChatUsers().subscribe((a) => {
            this.ChatUserList = a["data"];
            console.log(this.ChatUserList, "ChatUserList");
        });
    }
    zoomImg(key) {
        this.myKey = key;
        $("#zoom").modal("show");
    }
    openFile(val) {
        window.open(val);
    }
    clearChat() {
        if (this.userId < this.chatId) {
            let dataTosaveRecent = {
                lastMessage: "",
            };
            this.af.list("/message/" + this.userId + "_" + this.chatId).remove();
            this.af.database
                .ref("/recentMessage/" + this.userId.toString() + "/" + this.chatId)
                .update(dataTosaveRecent);
            this.af.database
                .ref("/recentMessage/" + this.chatId + "/" + this.userId.toString())
                .update(dataTosaveRecent);
            window.location.reload();
        }
        else {
            let dataTosaveRecent = {
                lastMessage: "",
            };
            this.af.list("/message/" + this.chatId + "_" + this.userId).remove();
            this.af.database
                .ref("/recentMessage/" + this.userId.toString() + "/" + this.chatId)
                .update(dataTosaveRecent);
            this.af.database
                .ref("/recentMessage/" + this.chatId + "/" + this.userId.toString())
                .update(dataTosaveRecent);
            window.location.reload();
        }
    }
};
ChatInsightComponent.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
    { type: src_app_service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ChatInsightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-chat-insight",
        template: __webpack_require__(/*! raw-loader!./chat-insight.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/chat-insight/chat-insight.component.html"),
        styles: [__webpack_require__(/*! ./chat-insight.component.css */ "./src/app/layout/chat-insight/chat-insight.component.css")]
    })
], ChatInsightComponent);



/***/ }),

/***/ "./src/app/layout/chat/chat.component.css":
/*!************************************************!*\
  !*** ./src/app/layout/chat/chat.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-heading-btn{\r\n    margin: 25px 0;\r\n}\r\n\r\n.chat-heading-btn>a{\r\n    color: #000;\r\n  }\r\n\r\n.chat-heading-btn>a>img{\r\n    margin-right: 5px;\r\n}\r\n\r\n.new-start{\r\n    height: 300px;\r\n    overflow: auto;\r\n}\r\n\r\n.new-start ul li{\r\n  border: 1px solid #e6e6e6;  \r\n  padding: 14px 10px;\r\n  margin: 3px 0;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.new-start ul li>h6>span{\r\n   float: right;\r\n  }\r\n\r\n.new-start ul li>h6{\r\n    font-size: 14px;\r\n    width: 100%;\r\n   }\r\n\r\n.new-start li>img{\r\n     width: 35px;\r\n     min-width: 35px;\r\n     height: 35px;\r\n     margin-right: 10px;\r\n     border-radius: 50%;\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7RUFDYjs7QUFDRjtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFDQTtHQUNHLFlBQVk7RUFDYjs7QUFDQTtJQUNFLGVBQWU7SUFDZixXQUFXO0dBQ1o7O0FBRUE7S0FDRSxXQUFXO0tBQ1gsZUFBZTtLQUNmLFlBQVk7S0FDWixrQkFBa0I7S0FDbEIsa0JBQWtCO0dBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtaGVhZGluZy1idG57XHJcbiAgICBtYXJnaW46IDI1cHggMDtcclxufVxyXG5cclxuLmNoYXQtaGVhZGluZy1idG4+YXtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuLmNoYXQtaGVhZGluZy1idG4+YT5pbWd7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4ubmV3LXN0YXJ0e1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5uZXctc3RhcnQgdWwgbGl7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjsgIFxyXG4gIHBhZGRpbmc6IDE0cHggMTBweDtcclxuICBtYXJnaW46IDNweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubmV3LXN0YXJ0IHVsIGxpPmg2PnNwYW57XHJcbiAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgLm5ldy1zdGFydCB1bCBsaT5oNntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICB9XHJcblxyXG4gICAubmV3LXN0YXJ0IGxpPmltZ3tcclxuICAgICB3aWR0aDogMzVweDtcclxuICAgICBtaW4td2lkdGg6IDM1cHg7XHJcbiAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/layout/chat/chat.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/chat/chat.component.ts ***!
  \***********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");









let ChatComponent = class ChatComponent {
    constructor(af, activatedRoute, router, api, Toast, fb) {
        this.af = af;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.api = api;
        this.Toast = Toast;
        this.fb = fb;
        this.masterCopy = [];
        // ngOnDestroy(){
        //   let  timestamp = new Date().getTime().toString()
        //   let dataTosaveRecent = {
        //     id: this.userId,
        //     name: this.userData.company_detail['name'],
        //     profile_image:this.userData.company_detail['picture'],
        //     onlineState:"0",
        //     timeStamp:timestamp,
        // }
        // this.af.database.ref('/userState/' + this.userId.toString()).set(dataTosaveRecent)
        // }
        this.AllMessagelists = [];
        this.userStateData = [];
        this.chatUserarr = [];
        this.childKey1 = [];
        this.childData1 = [];
        this.masterArr = [];
        this.tempArr = [];
    }
    ngOnInit() {
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl.slice(0, -1);
        this.getList();
        this.getChatUserList();
        //  let  timestamp = new Date().getTime().toString()
        //   let dataTosaveRecent = {
        //     id: this.userId,
        //     name: this.userData.company_detail['name'],
        //     profile_image:this.userData.company_detail['picture'],
        //     onlineState:"1",
        //     timeStamp:timestamp,
        // }
        // this.af.database.ref('/userState/' + this.userId.toString()).set(dataTosaveRecent)
        // =========================modal popup code====================
        this.postForm = this.fb.group({
            name: "",
            project_type: "Select Project Type",
            project_category: "Select Project Category",
            year: "",
            t_type_start_date: "",
            t_type_end_date: "",
            tags: "",
            about_post: "",
            images: null,
        });
    }
    getList() {
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.userId = this.userData.id;
        let ref = this.af.database.ref('/recentMessage/' + this.userId);
        let that = this;
        ref.once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                let childKey = childSnapshot.key;
                let childData = childSnapshot.val();
                that.childKey1.push(childKey);
                that.childData1.push(childData);
            });
        });
        // this.af.list('/userState').valueChanges().subscribe(
        //   data => {
        //     this.userStateData = data
        //     console.log(this.userStateData,"userStatedata");
        //   }
        // );
        this.af.list('/recentMessage/' + this.userId).valueChanges().subscribe(data => {
            this.AllMessagelists = data;
        });
        setTimeout(() => {
            this.GetListfromUserState();
        }, 1500);
        this.af.list('/userState').valueChanges().subscribe((data) => {
            this.userStateData = data;
            // console.log(this.userStateData, "userStates");
        });
        // setTimeout(() => {
        //   this.setProfileImage()
        // }, 2000);
    }
    //   searchClick(){
    //      
    //   this.chatUserarr =   this.masterCopy.filter((a)=>{
    //       if(a.name == this.searchUsers){
    // return true
    //       } else{
    //         this.chatUserarr = this.masterCopy
    //       }
    //     })
    //   }
    searchmethod(filterVal) {
        this.filterUser = filterVal;
        console.log(filterVal);
        this.chatUserarr = this.masterCopy.filter((a) => {
            return a.name.toLowerCase().includes(filterVal.toLowerCase());
            // return a.name.toLowerCase() == filterValue.toLowerCase()
        });
    }
    // ========= main serching chat page =
    applyFilter(filterValue) {
        this.chatUserarr = this.masterCopy.filter((a) => {
            return a.name.toLowerCase().includes(filterValue.toLowerCase());
            // return a.name.toLowerCase() == filterValue.toLowerCase()
        });
    }
    // filterValue.trim().toLowerCase();
    // resetSearch(){
    //   this.chatUserarr = this.masterCopy
    // }
    GetListfromUserState() {
        for (let index = 0; index < (this.childKey1 || []).length; index++) {
            var x = this.userStateData.find((f) => {
                return this.childKey1[index] == f.id;
            });
            if (x)
                this.chatUserarr.push(x);
        }
        for (let index = 0; index < (this.chatUserarr || []).length; index++) {
            this.AllMessagelists.find((b) => {
                if (this.chatUserarr[index].id == b.id) {
                    this.chatUserarr[index]['lastMessage'] = b.lastMessage;
                    this.chatUserarr[index]['mediaType'] = b.mediaType;
                    this.chatUserarr[index]['LastMessageTime'] = b.timeStamp;
                }
            });
        }
        this.masterCopy = JSON.parse(JSON.stringify(this.chatUserarr));
        console.log(this.masterCopy, "masterCopy");
        var arr = this.childKey1.filter((e) => this.userStateData.filter((f) => {
            return e.id == f.id;
        }));
    }
    chatInsight(data) {
        this.router.navigate(['chat-insight/' + data.id]);
    }
    getChatUserList() {
        this.api.getChatUsers().subscribe((a) => {
            this.ChatUserList = a['data'];
            this.masterArr = this.ChatUserList;
            console.log(this.ChatUserList, "ChatUserList");
        });
    }
    applyModalFilter(filterValues) {
        if (filterValues === '') {
            this.chatUserarr = this.masterArr;
        }
        else {
            this.tempArr = this.masterArr.filter((ab) => ab.company_name.toLocaleLowerCase().includes(filterValues.toLocaleLowerCase()));
            // return a.name.toLowerCase() == filterValue.toLowerCase()
            this.ChatUserList = this.tempArr;
        }
        // if (this.dataSource.paginator) {
        //   this.dataSource.paginator.firstPage();
        // }
    }
};
ChatComponent.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/chat/chat.component.html"),
        styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/layout/chat/chat.component.css")]
    })
], ChatComponent);



/***/ }),

/***/ "./src/app/layout/create-profile/create-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/layout/create-profile/create-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jcmVhdGUtcHJvZmlsZS9jcmVhdGUtcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/create-profile/create-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/create-profile/create-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProfileComponent", function() { return CreateProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let CreateProfileComponent = class CreateProfileComponent {
    constructor(router, service, Form, toast) {
        this.router = router;
        this.service = service;
        this.Form = Form;
        this.toast = toast;
        this.email = '';
    }
    ngOnInit() {
        this.email = localStorage.getItem('email');
        console.log(this.email);
        this.editForm = this.Form.group({
            name: ['',],
            email: [this.email,],
            username: [this.email,],
            password: ['',],
            country_code: ['',],
            mobile_number: ['',],
            profession: [1,],
            account_type: [1, '',],
            company_name: ['',],
            profile_type: ['1',],
            address_line1: ['',],
            address_line2: ['',],
            address_line3: ['',],
            bussiness_area: ['test',],
            description: ['',],
            year_of_foundation: ['',],
            device_token: ['123',],
            device_type: ['1',],
            is_more_than_5: [true,],
            lat: [0,],
            lon: [0,],
            social_id: ['no',]
        });
    }
    editProfile() {
        console.log(this.editForm.value);
        this.service.guest_signup(this.editForm.value).subscribe(res => {
            console.log(res);
            this.toast.success("Your account has created successfully please login.");
            this.router.navigate(['/']);
        }, error => {
            this.toast.error(error.message);
            console.log(error);
        });
    }
};
CreateProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
CreateProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-profile',
        template: __webpack_require__(/*! raw-loader!./create-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/create-profile/create-profile.component.html"),
        providers: [_service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]],
        styles: [__webpack_require__(/*! ./create-profile.component.css */ "./src/app/layout/create-profile/create-profile.component.css")]
    })
], CreateProfileComponent);



/***/ }),

/***/ "./src/app/layout/disclaimer/disclaimer.component.css":
/*!************************************************************!*\
  !*** ./src/app/layout/disclaimer/disclaimer.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading{\r\n    color: black!important;\r\n    margin: 1.5rem 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rpc2NsYWltZXIvZGlzY2xhaW1lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kaXNjbGFpbWVyL2Rpc2NsYWltZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5ne1xyXG4gICAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMS41cmVtIDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/disclaimer/disclaimer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/disclaimer/disclaimer.component.ts ***!
  \***********************************************************/
/*! exports provided: DisclaimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisclaimerComponent", function() { return DisclaimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");



let DisclaimerComponent = class DisclaimerComponent {
    constructor(api) {
        this.api = api;
    }
    ngOnInit() {
        this.api.disclaimer().subscribe(x => {
            this.htmlString = x.data[0].content;
            console.log(this.htmlString);
        }, err => {
            console.log(err);
        });
    }
};
DisclaimerComponent.ctorParameters = () => [
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
DisclaimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-disclaimer',
        template: __webpack_require__(/*! raw-loader!./disclaimer.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/disclaimer/disclaimer.component.html"),
        styles: [__webpack_require__(/*! ./disclaimer.component.css */ "./src/app/layout/disclaimer/disclaimer.component.css")]
    })
], DisclaimerComponent);



/***/ }),

/***/ "./src/app/layout/edit-my-post/edit-my-post.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/edit-my-post/edit-my-post.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9lZGl0LW15LXBvc3QvZWRpdC1teS1wb3N0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/edit-my-post/edit-my-post.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/edit-my-post/edit-my-post.component.ts ***!
  \***************************************************************/
/*! exports provided: EditMyPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMyPostComponent", function() { return EditMyPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditMyPostComponent = class EditMyPostComponent {
    constructor() { }
    ngOnInit() {
        var imagesPreview = function (input, placeToInsertImagePreview) {
            if (input.files) {
                var filesAmount = input.files.length;
                var i;
                for (i = 0; i < filesAmount; i++) {
                    var reader, target;
                    reader = new FileReader();
                    reader.onload = function (event) {
                        var html = $('<li class="marks"><a href="JavaScript:void(0);" data-toggle="modal" data-target="#my-pic"><img src=' + event.target.result + '></a><button class="remove-pic">&#10006;</button><label class="d-block"><button class="btn-gray-2 btn-block" data-toggle="modal" data-target="#enter-credit">Give Credit</button></label></li>');
                        $(html).appendTo(placeToInsertImagePreview);
                        $('.remove-pic').click(function () {
                            $(this).closest('li').remove();
                        });
                    };
                    reader.readAsDataURL(input.files[i]);
                }
            }
        };
        $('#multiImageSelet').on('change', function () {
            imagesPreview(this, 'ul.pictures');
        });
    }
};
EditMyPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-my-post',
        template: __webpack_require__(/*! raw-loader!./edit-my-post.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/edit-my-post/edit-my-post.component.html"),
        styles: [__webpack_require__(/*! ./edit-my-post.component.css */ "./src/app/layout/edit-my-post/edit-my-post.component.css")]
    })
], EditMyPostComponent);



/***/ }),

/***/ "./src/app/layout/edit-profile/edit-profile.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/edit-profile/edit-profile.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img{\r\n    width: 150px;\r\n    min-width: 150;\r\n}\r\n.img img{\r\n    width: 100%;\r\n    border-radius: 8px;\r\n    min-width: 100%;\r\n}\r\n.fileInput{\r\n    margin: 15px 32px;\r\n}\r\n.img-box{\r\n    width: 180px;\r\n    margin-top: 20px;\r\n    min-width: 180px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ3tcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1pbi13aWR0aDogMTUwO1xyXG59XHJcbi5pbWcgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbn1cclxuLmZpbGVJbnB1dHtcclxuICAgIG1hcmdpbjogMTVweCAzMnB4O1xyXG59XHJcblxyXG4uaW1nLWJveHtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/edit-profile/edit-profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/edit-profile/edit-profile.component.ts ***!
  \***************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let EditProfileComponent = class EditProfileComponent {
    constructor(route, api, toast, Form, router) {
        this.route = route;
        this.api = api;
        this.toast = toast;
        this.Form = Form;
        this.router = router;
        this.single = new Array();
        this.submitted = false;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"];
        this.username = localStorage.getItem("userData") != undefined
            ? JSON.parse(localStorage.getItem("userData")).username
            : "";
    }
    singleFiles(event) {
        this.file = event.target.files[0];
        this.single = [];
        let singleFiles = event.target.files;
        if (singleFiles) {
            for (let file of singleFiles) {
                let singleReader = new FileReader();
                singleReader.onload = (e) => {
                    this.single.push(e.target.result);
                    $(event.target)
                        .closest(".img-box")
                        .find(".imagefile")
                        .attr("src", e.target.result);
                };
                singleReader.readAsDataURL(file);
            }
        }
    }
    ngOnInit() {
        // this.route.params.subscribe(data => {
        //   console.log(data, 'datassss');
        //   this.userId = data['post_id'];
        //   console.log(this.userId, "hhh")
        // })
        this.getProfileData();
        this.editForm = this.Form.group({
            email: [""],
            ProfileType: [""],
            facebook: [""],
            twitter: [""],
            insta: [""],
            google: [""],
            description: [""],
        });
        // setTimeout(() => {
        //   this.name = this.profiledata ? this.profiledata["name"] : "";
        // }, 300);
        this.name = localStorage.getItem("userData");
        console.log(this.name, "sfdasfdsafssfsf");
    }
    getProfileData() {
        this.api.getProfileData(this.username).subscribe((d) => {
            this.profiledata = d["data"];
            console.log(this.profiledata, "profiledata23");
            console.log(this.profiledata.name, "profile name 9999999999");
            this.typeOfProfile = this.profiledata.profile_type;
            if (this.profiledata.profile_type == 1)
                this.profiledata.profile_type = "Personal";
            else if (this.profiledata.profile_type == 2) {
                this.profiledata.profile_type = "Company";
                this.Company = this.profiledata.profile_type;
                console.log(this.Company, "thiscompany");
            }
            else if (this.profiledata.profile_type == 2)
                this.profiledata.profile_type = "Company colleague";
            console.log();
            this.companyname = this.profiledata
                ? this.profiledata.company_detail
                    ? this.profiledata.company_detail["name"]
                    : ""
                : "";
            console.log(this.companyname, "dfggggggggggggggggg");
            this.companyDescription = this.profiledata
                ? this.profiledata.company_detail
                    ? this.profiledata.company_detail["description"]
                    : ""
                : "";
            this.editForm.patchValue({
                // name: this.profiledata ? this.profiledata.name : '',
                email: this.profiledata ? this.profiledata.email : "",
                mobile_number: this.profiledata ? this.profiledata.mobile_number : "",
                ProfileType: this.profiledata ? this.profiledata.profile_type : "",
                facebook: this.profiledata ? this.profiledata.social_links[1] : "",
                twitter: this.profiledata ? this.profiledata.social_links[2] : "",
                google: this.profiledata ? this.profiledata.social_links[4] : "",
                insta: this.profiledata ? this.profiledata.social_links[3] : "",
                description: this.profiledata ? this.profiledata.about : "",
            });
        }, (err) => {
            console.log(err);
        });
    }
    get f() {
        return this.editForm.controls;
    }
    editProfile() {
        this.submitted = true;
        if (this.editForm.invalid)
            return;
        const editData = new FormData();
        if (this.profiledata.profile_type != "Company") {
            editData.append("name", this.name);
        }
        editData.append("about", this.editForm.value.description);
        editData.append("fb", this.editForm.value.facebook ? this.editForm.value.facebook : "");
        editData.append("google", this.editForm.value.google ? this.editForm.value.google : "");
        editData.append("twitter", this.editForm.value.twitter ? this.editForm.value.twitter : "");
        editData.append("insta", this.editForm.value.insta ? this.editForm.value.insta : "");
        if (this.Company) {
            editData.append("company_name", this.companyname);
            editData.append("company_desc", this.companyDescription);
        }
        if (this.file != undefined) {
            editData.append("profile_image", this.file);
        }
        console.log(this.editForm.value.description, "Line number 161");
        this.api.editprofile(editData).subscribe((res) => {
            this.toast.success("Profile Updated Successfully");
            setTimeout(() => {
                this.router.navigate(["/my-profile"]);
            }, 500);
        }, (error) => {
            this.toast.error(error.error.message);
        });
    }
};
EditProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-edit-profile",
        template: __webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/edit-profile/edit-profile.component.html"),
        styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/layout/edit-profile/edit-profile.component.css")]
    })
], EditProfileComponent);



/***/ }),

/***/ "./src/app/layout/faq/faq.component.css":
/*!**********************************************!*\
  !*** ./src/app/layout/faq/faq.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.faq-section {\r\n    min-height: 100vh;\r\n    padding: 10vh 0 0;\r\n}\r\n.faq-title h2 {\r\n  position: relative;\r\n  margin-bottom: 45px;\r\n  display: inline-block;\r\n  font-weight: 900;\r\n  line-height: 1;\r\n}\r\n/* .faq-title h2::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 50%;\r\n    width: 60px;\r\n    height: 2px;\r\n    background: #000000;\r\n    bottom: -25px;\r\n    margin-left: -30px;\r\n} */\r\n.faq-title p {\r\n  padding: 0 190px;\r\n  margin-bottom: 10px;\r\n}\r\nbody{\r\n    background-color: #f5f5f5!important;\r\n}\r\n.faq {\r\n\r\n  border-radius: 4px;\r\n}\r\n.faq .card {\r\n  border: none;\r\n  background: none;\r\n  border-bottom: 1px dashed #CEE1F8;\r\n  background-color: #ffffff;\r\n  margin: 20px 0;\r\n  border-radius: 10px;\r\n}\r\n.faq .card .card-header {\r\n  padding: 0px;\r\n  border: none;\r\n  background: none;\r\n  -webkit-transition: all 0.3s ease 0s;\r\n  transition: all 0.3s ease 0s;\r\n}\r\n.faq .card .card-header:hover {\r\n    background: rgba(233, 30, 99, 0.1);\r\n    padding-left: 10px;\r\n}\r\n.faq .card .card-header .faq-title {\r\n  width: 100%;\r\n  text-align: left;\r\n  padding: 0px;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  letter-spacing: 1px;\r\n  color: #3B566E;\r\n  text-decoration: none !important;\r\n  -webkit-transition: all 0.3s ease 0s;\r\n  transition: all 0.3s ease 0s;\r\n  cursor: pointer;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  font-size: 20px;\r\n}\r\n.faq .card .card-header .faq-title .badge {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  line-height: 14px;\r\n  border-radius: 100px;\r\n  text-align: center;\r\n  /* background: #ddf75b; */\r\n  color: rgb(0, 0, 0);\r\n  font-size: 12px;\r\n  font-weight: 900;\r\n  margin-right: 20px;\r\n}\r\n.faq .card .card-body {\r\n  padding: 30px;\r\n  padding-left: 35px;\r\n  padding-bottom: 16px;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  color: #6F8BA4;\r\n  line-height: 28px;\r\n  letter-spacing: 1px;\r\n  border-top: 1px solid #F3F8FF;\r\n}\r\n.faq .card .card-body p {\r\n  margin-bottom: 14px;\r\n}\r\n@media (max-width: 991px) {\r\n  .faq {\r\n    margin-bottom: 30px;\r\n  }\r\n  .faq .card .card-header .faq-title {\r\n    line-height: 26px;\r\n    margin-top: 10px;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2ZhcS9mYXEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBOzs7Ozs7Ozs7R0FTRztBQUNIO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBR3BDLDRCQUE0QjtBQUM5QjtBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUdwQyw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBR2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mYXEvZmFxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZhcS1zZWN0aW9uIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZzogMTB2aCAwIDA7XHJcbn1cclxuLmZhcS10aXRsZSBoMiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuLyogLmZhcS10aXRsZSBoMjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgIGJvdHRvbTogLTI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbn0gKi9cclxuLmZhcS10aXRsZSBwIHtcclxuICBwYWRkaW5nOiAwIDE5MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1IWltcG9ydGFudDtcclxufVxyXG5cclxuLmZhcSB7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmZhcSAuY2FyZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjQ0VFMUY4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmZhcSAuY2FyZCAuY2FyZC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG5cclxuLmZhcSAuY2FyZCAuY2FyZC1oZWFkZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzMsIDMwLCA5OSwgMC4xKTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4uZmFxIC5jYXJkIC5jYXJkLWhlYWRlciAuZmFxLXRpdGxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGNvbG9yOiAjM0I1NjZFO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5mYXEgLmNhcmQgLmNhcmQtaGVhZGVyIC5mYXEtdGl0bGUgLmJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLyogYmFja2dyb3VuZDogI2RkZjc1YjsgKi9cclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmZhcSAuY2FyZCAuY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzZGOEJBNDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRjNGOEZGO1xyXG59XHJcblxyXG4uZmFxIC5jYXJkIC5jYXJkLWJvZHkgcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmZhcSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICAuZmFxIC5jYXJkIC5jYXJkLWhlYWRlciAuZmFxLXRpdGxlIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/faq/faq.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/faq/faq.component.ts ***!
  \*********************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");



let FaqComponent = class FaqComponent {
    constructor(api) {
        this.api = api;
    }
    ngOnInit() {
        // this.api.faq().subscribe(x => {
        //   this.htmlString = x.data['data'].content;
        //   console.log(this.htmlString)
        // }, err => {
        //   console.log(err);
        // });
        this.api.faq().subscribe((x) => {
            console.log(x["data"]);
            this.faqdata = x.data;
        });
    }
};
FaqComponent.ctorParameters = () => [
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faq',
        template: __webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/faq/faq.component.html"),
        styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/layout/faq/faq.component.css")]
    })
], FaqComponent);



/***/ }),

/***/ "./src/app/layout/home/home.component.css":
/*!************************************************!*\
  !*** ./src/app/layout/home/home.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder{\r\n    color: #1E1E20 !important;\r\n}\r\n.my-form input{\r\n    padding-left: 3px;\r\n    border: 1px solid #E6E6E6;\r\n}\r\n.my-form select{\r\n    position: relative;\r\n    border: 1px solid #E6E6E6;\r\n}\r\n.my-form{\r\n    position: relative;\r\n}\r\nselect{\r\n    padding: 3px;\r\n}\r\nselect + i.fa {\r\n    padding: 6px 0 5px 4px;\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    pointer-events: none;\r\n    background-color: #E6E6E6;\r\n    color: #1e1e20 !important;\r\n    padding-right: 5px;\r\n    font-size: 16px;\r\n }\r\nselect {\r\n    -moz-appearance: none;\r\n    -webkit-appearance: none;\r\n }\r\nselect::-ms-expand {\r\n    display: none;\r\n }\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 24px;\r\n  }\r\n.switch input { \r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 17px;\r\n    width: 17px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\ninput:checked + .slider {\r\n    background-color: #FFD705;\r\n  }\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px #50A208;\r\n  }\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(15px);\r\n    transform: translateX(15px);\r\n  }\r\n/* Rounded sliders */\r\n.slider.round {\r\n    border-radius: 34px;\r\n  }\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n.post-question{\r\n    position: absolute;\r\n  }\r\n.post-question button{\r\n    background: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n.post-question button img{\r\n    width: 28px;\r\n  }\r\n.location-img{\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n.location-img img{\r\n    width: 100px;\r\n    height: 100px;\r\n  }\r\n#map{\r\n    height: 780px;\r\n    width: 100%;  \r\n  }\r\n.my-add-img i{\r\n    color: #4b4947 !important;\r\n    font-size: 16px;\r\n  }\r\n.abtpst{\r\n    margin-top: -10%;\r\n  }\r\n.ash-select{\r\n    padding-left: 12px;\r\n  }\r\n::-webkit-input-placeholder{\r\n    color: #495057 !important;\r\n  }\r\n.map-rel{\r\n    position: relative;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: flex;\r\n  }\r\n.map-absol{\r\n    position: absolute;\r\n    background: transparent;\r\n    border: none;\r\n  }\r\n.map-absol img{\r\n    width: 28px;\r\n  }\r\n.tag-ul{\r\n  text-align: left;\r\n  color: black;\r\n  width: 50px;\r\n}\r\n.tag-span{\r\n  color: blue;\r\n  width: 50px;\r\n}\r\n.tagcss{\r\n  margin-top: -3%;\r\n}\r\n.em-color{\r\n  color: blueviolet;\r\n}\r\n/* \r\n.my-img{\r\n  object-fit: cover; \r\n  width: 10%; \r\n  height: 10%;\r\n} */\r\n.location-icon{\r\n  background: white;\r\n}\r\n.prop-img a{\r\n  display: none;\r\n  background-size:cover;\r\n  height: 150px;\r\n}\r\n/* .prop-img img{\r\n  display: none;\r\n} */\r\n.gm-style-iw{\r\n  padding: 0 !important;\r\n}\r\n.displaynone{\r\n  display: none;\r\n}\r\n.backgroundimg{\r\n  /* height: 15vh; */\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n@media(max-width:480px){\r\n  .dropdown{\r\n    display: none;\r\n  }\r\n}\r\n.responsive{\r\n  height: auto !important;\r\n  width: 100% !important;\r\n}\r\n.prop-card{\r\n  width: 400px;\r\n  height: 150px;\r\n}\r\n.prop-img.backgroundimg{\r\n  overflow: hidden;\r\n}\r\n.prop-img.backgroundimg img{\r\n width: 100%;\r\n margin: 0 auto; \r\n -o-object-fit: contain; \r\n    object-fit: contain;\r\n}\r\n.box {\r\n  float: right;\r\n  height: 15px;\r\n  width: 15px;\r\n  clear: both;\r\n}\r\n.Refurbishment {\r\n  background-color: #da0000;\r\n}\r\n.Event {\r\n  background-color: #Ff7B00;\r\n}\r\n.Urbanism {\r\n  background-color: #315a81;\r\n}\r\n.Extension{\r\n  background-color: #ff1212;\r\n}\r\n.Job {\r\n  background-color: #1845aa;\r\n}\r\n.newbuilding {\r\n  background-color: #ae0000;\r\n}\r\n.Thesis {\r\n  background-color: #523dbd;\r\n}\r\n.Competition {\r\n  background-color: #0075ce;\r\n}\r\n.Teaching {\r\n  background-color: #cc8e00;\r\n}\r\n.Interior{\r\n  background-color: #c541c5;\r\n\r\n}\r\n.Landscape{\r\n  background-color: #497c7d;\r\n}\r\n.Exhibition{\r\n  background-color: #Feaf00;\r\n}\r\n/* dropdown input field  */\r\n.input_dropdown li{\r\n  color: #999!important;\r\n}\r\n.input_dropdown .box{\r\n  margin-top: 5px;\r\n}\r\n.inputimage > img{\r\n  width: 80%;\r\n}\r\n.input_dropdown li:hover{\r\n  background-color: #007bff;\r\n  cursor: pointer;\r\n  color: white!important;\r\n}\r\n.text-start{\r\n  text-align: start;\r\n  font-size: 12px!important;\r\n}\r\n.inputimage{\r\n  float: right;\r\n}\r\n.gm-style img{\r\n  max-width: none;\r\n  -o-object-fit: contain!important;\r\n     object-fit: contain!important;\r\n}\r\n#homeInputDesing:focus{\r\n  outline:none;\r\n}\r\ninput:focus, textarea:focus, select:focus{\r\n  outline: none;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtDQUNsQjtBQUNBO0lBQ0cscUJBQXFCO0lBQ3JCLHdCQUF3QjtDQUMzQjtBQUFFO0lBQ0MsYUFBYTtDQUNoQjtBQUVBO0lBQ0csa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBRUE7SUFDRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7RUFDWDtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBRUE7SUFDRSxtQ0FBbUM7SUFFbkMsMkJBQTJCO0VBQzdCO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7QUFHQTtJQUNFLGFBQWE7SUFDYixXQUFXO0VBQ2I7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLG9CQUFhO0lBQWIsYUFBYTtFQUNmO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDtBQUNBO0lBQ0UsV0FBVztFQUNiO0FBRUY7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7Ozs7O0dBS0c7QUFDSDtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7QUFDQTs7R0FFRztBQUNIO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxjQUFjO0NBQ2Qsc0JBQW1CO0lBQW5CLG1CQUFtQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztBQUNiO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7O0FBRTNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBLDBCQUEwQjtBQUUxQjtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQTZCO0tBQTdCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBSUE7RUFDRSxhQUFhOztBQUVmIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6ICMxRTFFMjAgIWltcG9ydGFudDtcclxufVxyXG4ubXktZm9ybSBpbnB1dHtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U2RTZFNjtcclxufVxyXG4ubXktZm9ybSBzZWxlY3R7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTZFNkU2O1xyXG59XHJcblxyXG4ubXktZm9ybXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5zZWxlY3R7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuc2VsZWN0ICsgaS5mYSB7XHJcbiAgICBwYWRkaW5nOiA2cHggMCA1cHggNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2O1xyXG4gICAgY29sb3I6ICMxZTFlMjAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuIH1cclxuIHNlbGVjdCB7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiB9IHNlbGVjdDo6LW1zLWV4cGFuZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gfVxyXG5cclxuIC5zd2l0Y2gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zd2l0Y2ggaW5wdXQgeyBcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICB3aWR0aDogMTdweDtcclxuICAgIGxlZnQ6IDRweDtcclxuICAgIGJvdHRvbTogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDcwNTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzUwQTIwODtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcclxuICB9XHJcbiAgXHJcbiAgLyogUm91bmRlZCBzbGlkZXJzICovXHJcbiAgLnNsaWRlci5yb3VuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5wb3N0LXF1ZXN0aW9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICAucG9zdC1xdWVzdGlvbiBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnBvc3QtcXVlc3Rpb24gYnV0dG9uIGltZ3tcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gIH1cclxuICAubG9jYXRpb24taW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5sb2NhdGlvbi1pbWcgaW1ne1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcblxyXG5cclxuICAjbWFwe1xyXG4gICAgaGVpZ2h0OiA3ODBweDtcclxuICAgIHdpZHRoOiAxMDAlOyAgXHJcbiAgfVxyXG4gIC5teS1hZGQtaW1nIGl7XHJcbiAgICBjb2xvcjogIzRiNDk0NyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAuYWJ0cHN0e1xyXG4gICAgbWFyZ2luLXRvcDogLTEwJTtcclxuICB9XHJcbiAgLmFzaC1zZWxlY3R7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG4gIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiAjNDk1MDU3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tYXAtcmVse1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLm1hcC1hYnNvbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICAubWFwLWFic29sIGltZ3tcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gIH1cclxuXHJcbi50YWctdWx7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLnRhZy1zcGFue1xyXG4gIGNvbG9yOiBibHVlO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcbi50YWdjc3N7XHJcbiAgbWFyZ2luLXRvcDogLTMlO1xyXG59XHJcbi5lbS1jb2xvcntcclxuICBjb2xvcjogYmx1ZXZpb2xldDtcclxufVxyXG4vKiBcclxuLm15LWltZ3tcclxuICBvYmplY3QtZml0OiBjb3ZlcjsgXHJcbiAgd2lkdGg6IDEwJTsgXHJcbiAgaGVpZ2h0OiAxMCU7XHJcbn0gKi9cclxuLmxvY2F0aW9uLWljb257XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLnByb3AtaW1nIGF7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG4vKiAucHJvcC1pbWcgaW1ne1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0gKi9cclxuLmdtLXN0eWxlLWl3e1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG4uZGlzcGxheW5vbmV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uYmFja2dyb3VuZGltZ3tcclxuICAvKiBoZWlnaHQ6IDE1dmg7ICovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6NDgwcHgpe1xyXG4gIC5kcm9wZG93bntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVzcG9uc2l2ZXtcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvcC1jYXJke1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4ucHJvcC1pbWcuYmFja2dyb3VuZGltZ3tcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5wcm9wLWltZy5iYWNrZ3JvdW5kaW1nIGltZ3tcclxuIHdpZHRoOiAxMDAlO1xyXG4gbWFyZ2luOiAwIGF1dG87IFxyXG4gb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTVweDtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLlJlZnVyYmlzaG1lbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYTAwMDA7XHJcbn1cclxuXHJcbi5FdmVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZmN0IwMDtcclxufVxyXG5cclxuLlVyYmFuaXNtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE1YTgxO1xyXG59XHJcblxyXG4uRXh0ZW5zaW9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjEyMTI7XHJcbn1cclxuXHJcbi5Kb2Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODQ1YWE7XHJcbn1cclxuLm5ld2J1aWxkaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWUwMDAwO1xyXG59XHJcbi5UaGVzaXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjNkYmQ7XHJcbn1cclxuLkNvbXBldGl0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NWNlO1xyXG59XHJcbi5UZWFjaGluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjOGUwMDtcclxufVxyXG4uSW50ZXJpb3J7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1NDFjNTtcclxuXHJcbn1cclxuLkxhbmRzY2FwZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk3YzdkO1xyXG59XHJcblxyXG4uRXhoaWJpdGlvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRmVhZjAwO1xyXG59XHJcblxyXG4vKiBkcm9wZG93biBpbnB1dCBmaWVsZCAgKi9cclxuXHJcbi5pbnB1dF9kcm9wZG93biBsaXtcclxuICBjb2xvcjogIzk5OSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dF9kcm9wZG93biAuYm94e1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uaW5wdXRpbWFnZSA+IGltZ3tcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uaW5wdXRfZHJvcGRvd24gbGk6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtc3RhcnR7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0aW1hZ2V7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uZ20tc3R5bGUgaW1ne1xyXG4gIG1heC13aWR0aDogbm9uZTtcclxuICBvYmplY3QtZml0OiBjb250YWluIWltcG9ydGFudDtcclxufVxyXG5cclxuI2hvbWVJbnB1dERlc2luZzpmb2N1c3tcclxuICBvdXRsaW5lOm5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCBzZWxlY3Q6Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_messaging_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/messaging.service */ "./src/app/service/messaging.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");












let HomeComponent = class HomeComponent {
    constructor(fb, ApiService, toast, http, route, router, auth, messagingService, dataSource) {
        this.fb = fb;
        this.ApiService = ApiService;
        this.toast = toast;
        this.http = http;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.messagingService = messagingService;
        this.dataSource = dataSource;
        this.filt = true;
        this.recentPosts = [];
        this.isImage = false;
        this.isDescription = false;
        this.isNickname = false;
        this.project_typeData = [];
        this.project_categoryData = [];
        this.markersArray = [];
        this.long_name = [];
        this.postImageTag = "Enter Credit";
        this.otherOption = false;
        this.new_tag = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.userTag = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.alertnotification = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["COMMA"]];
        this.tagsList = [];
        this.taggs = [];
        this.userTagsList = [];
        this.userTaggs = [];
        this.selectedProjecttypeFilter = "";
        this.selectedCategoryFilter = "";
        this.selectedCountryFilter = "";
        this.FilterYear = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.FilterArch = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.FilterYear_mobile = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.FilterCity_zip = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.FilterCity_zip_mobile = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.filterMaterial = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.enterTag = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.filterMaterial_mobile = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.Architect = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.filterElement = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.filterElement_mobile = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.countrylist = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Select Country");
        this.projectTypefilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Select Project Type");
        this.categoryfilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Select Category");
        this.selectedYearFilter = "";
        this.selectedCity_zip = "";
        this.selectedMaterialFilter = "";
        this.selectedArchFilter = "";
        this.selectedElementFilter = "";
        this.selectEnterTag = "";
        this.fav = 0;
        this.inputnametwo = "Select category";
        this.inputname = "Select Project Type";
        this.commandNotification = false;
        // mat chip end
        this.selectedImages = [];
        this.base64Image = [];
        this.imageTags = [];
        // filterResponse
        // filterApi(){
        //   let datToSend = {
        //     country:   this.selectedCountryFilter,
        //     city_or_zipcode: '',
        //     project_type:  this.selectedProjecttypeFilter ,
        //     project_category:  this.selectedCategoryFilter,
        //     year:  this.selectedYearFilter,
        //     material: '',
        //     element : '',
        //     sort_projects: '',
        //     filter_projects: ''
        //   }
        //   this.ApiService.filterHomePgae(datToSend).subscribe((res)=>{
        //     this.filterResponse = res['data']
        //   })
        // }
        this.favoriteList = "false";
        this.stylez = [
            {
                elementType: "geometry",
                stylers: [
                    {
                        color: "#f5f5f5",
                    },
                ],
            },
            {
                elementType: "labels.icon",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#616161",
                    },
                ],
            },
            {
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        color: "#f5f5f5",
                    },
                ],
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#bdbdbd",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#eeeeee",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#757575",
                    },
                ],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#e5e5e5",
                    },
                ],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#9e9e9e",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#ffffff",
                    },
                ],
            },
            {
                featureType: "road.arterial",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#757575",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#dadada",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#616161",
                    },
                ],
            },
            {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#9e9e9e",
                    },
                ],
            },
            {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#e5e5e5",
                    },
                ],
            },
            {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#eeeeee",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#c9c9c9",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#9e9e9e",
                    },
                ],
            },
        ];
        this.loc = { lat: 28.60986453001585, lng: 77.3846419721832 };
        this.loc2 = { lat: 28.854161458374126, lng: 77.33640512525938 };
        this.sendingtags = [];
        this.sendingUsertags = [];
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
        document.getElementById("home_btn").click();
        if (!navigator.geolocation) {
            console.log("location in not support");
        }
        navigator.geolocation.getCurrentPosition((position) => {
            this.cur_lat = position.coords.latitude;
            this.cur_lng = position.coords.longitude;
        });
        $(document).on("click", ".test_element", function () {
            var value = $(this).attr("value");
            var abc = localStorage.getItem("token");
            // alert(abc)
            if (abc == null) {
                // this.toast.error("Please try again");
                this.commandNotification = true;
                alert("Please register to continue");
            }
            else {
                window.open(`/involvement/${value}`, "_blank");
            }
        });
        var langArray = [];
        $(".vodiapicker option").each(function () {
            var img = $(this).attr("data-thumbnail");
            var text = this.innerText;
            var value = $(this).val();
            var item = '<li><img src="' +
                img +
                '" alt="" value="' +
                value +
                '"/><span>' +
                text +
                "</span></li>";
            langArray.push(item);
        });
        $("#a").html(langArray);
        //Set the button value to the first el of the array
        $(".btn-select").html(langArray[0]);
        $(".btn-select").attr("value", "en");
        //change button stuff on click
        $("#a li").click(function () {
            var img = $(this).find("img").attr("src");
            var value = $(this).find("img").attr("value");
            var text = this.innerText;
            var item = '<li><img src="' + img + '" alt="" /><span>' + text + "</span></li>";
            $(".btn-select").html(item);
            $(".btn-select").attr("value", value);
            $(".b").toggle();
            //console.log(value);
        });
        $(".btn-select").click(function () {
            $(".b").toggle();
        });
        //check local storage for the lang
        var sessionLang = localStorage.getItem("lang");
        if (sessionLang) {
            //find an item with value of sessionLang
            var langIndex = langArray.indexOf(sessionLang);
            $(".btn-select").html(langArray[langIndex]);
            $(".btn-select").attr("value", sessionLang);
        }
        else {
            var langIndex = langArray.indexOf("ch");
            console.log(langIndex);
            $(".btn-select").html(langArray[langIndex]);
            //$('.btn-select').attr('value', 'en');
        }
        $(document).ready(function () {
            $(".open_create_post").dblclick(function () {
                let userData = JSON.parse(localStorage.getItem("userData"));
                // For Manufacture Modal
                if (userData.business_type == "3" ||
                    userData.business_type == "4" ||
                    userData.business_type == "5") {
                    this.othersModal = false;
                    $("#manufacture").modal("show");
                }
                else if (JSON.parse(localStorage.getItem("profile_type")) == "1") {
                    alert("You need to be registered as a company in order to post a project");
                    $("#add-colleague").modal("hide");
                }
                else {
                    $("#add-colleague").modal("show");
                }
            });
        });
        // const popup = document.getElementsByClassName('.prop-card m-0');
        // popup.classList.add('displaynone');
        this.infowindow = new google.maps.InfoWindow({
            content: "",
        });
        this.resetFilter();
        // window.location.reload()
        let geodata;
        this.subscription = this.dataSource.currentData.subscribe((data) => (geodata = data));
        //
        if (geodata.searched) {
            this.current_lat = geodata.lat;
            this.current_long = geodata.lng;
            localStorage.setItem("lat", this.current_lat);
            localStorage.setItem("long", this.current_long);
            console.log(`lat  - ${this.current_lat}, long - ${this.current_long}`);
        }
        else {
            if (navigator.geolocation) {
                // Call getCurrentPosition with success and failure callbacks
                navigator.geolocation.getCurrentPosition((data) => {
                    console.log(data, "line no 183");
                    this.current_lat = data.coords.latitude;
                    this.current_long = data.coords.longitude;
                    localStorage.setItem("lat", this.current_lat);
                    localStorage.setItem("long", this.current_long);
                    console.log(`lat  - ${this.current_lat}, long - ${this.current_long}`);
                });
            }
            else {
                alert("Sorry, your browser does not support geolocation services.");
            }
        }
        let userData = JSON.parse(localStorage.getItem("userData"));
        console.log(userData, "userData Home");
        console.log(userData.business_type, "userData Home");
        let userId = userData ? userData["id"] : "123";
        setTimeout(() => {
            this.messagingService.requestPermission(userId);
            this.messagingService.receiveMessage();
            this.message = this.messagingService.currentMessage;
        }, 5000);
        var imagesPreview = function (input, placeToInsertImagePreview) {
            if (input.files) {
                var filesAmount = input.files.length;
                var i;
                for (i = 0; i < filesAmount; i++) {
                    var reader, target;
                    reader = new FileReader();
                    reader.onload = function (event) {
                        var html = $('<li class="marks"><a href="JavaScript:void(0);" data-toggle="modal" data-target="#my-pic"><img src=' +
                            event.target.result +
                            '></a><button class="remove-pic">&#10006;</button><input class="credit-field" id="creditt" type="text" placeholder="Enter Credit"/></li>');
                        $(html).appendTo(placeToInsertImagePreview);
                        $(".remove-pic").click(function () {
                            $(this).closest("li").remove();
                        });
                    };
                    reader.readAsDataURL(input.files[i]);
                    $("#myimg").val(reader);
                }
            }
        };
        for (var i = new Date().getFullYear(); i > 1900; i--) {
            $("#yearpicker").append($("<option />").val(i).html(i));
        }
        // $('#multiImageSelet').on('change', function () {
        //   imagesPreview(this, 'ul.pictures');
        // });
        this.QuestCreateForm = this.fb.group({
            nickName: [""],
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.postForm = this.fb.group({
            name: "",
            project_type: "Select Project Type",
            project_category: "Select Project Category",
            year: "",
            t_type_start_date: "",
            t_type_end_date: "",
            tags: "",
            about_post: "",
            images: null,
        });
        // hit api on every single input on enter tags
        this.new_tag.valueChanges.subscribe((val) => {
            this.message = val;
            this.tagsList = [];
            this.ApiService.getTagsList(this.message).subscribe((x) => {
                if (val != "") {
                    var data = x["data"];
                    console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        this.d = data[i].tag;
                        this.tagsList.push(this.d);
                    }
                }
                else {
                    this.tagsList = [];
                }
            });
        });
        // hit api on every single input on enter User Tags
        this.userTag.valueChanges.subscribe((val) => {
            this.taggedUsers = val;
            this.userTagsList = [];
            this.ApiService.getUserTagList(this.taggedUsers).subscribe((x) => {
                if (val != "") {
                    var data = x["data"];
                    console.log(data, "full data");
                    for (var i = 0; i < data.length; i++) {
                        this.userTagsList.push(data[i]);
                    }
                }
                else {
                    this.userTagsList = [];
                }
            });
        });
        // hit api on filter year
        this.FilterYear.valueChanges.subscribe((val) => {
            this.selectedYearFilter = val;
            if (this.selectedYearFilter.length == 4) {
                this.getHomePagedata();
            }
        });
        this.FilterArch.valueChanges.subscribe((val) => {
            this.selectedArchFilter = val;
            if (this.selectedArchFilter.length == 4) {
                this.getHomePagedata();
            }
        });
        this.FilterYear_mobile.valueChanges.subscribe((val) => {
            this.selectedYearFilter = val;
            if (this.selectedYearFilter.length == 4) {
                this.getHomePagedata();
            }
        });
        // filter material
        this.filterMaterial.valueChanges.subscribe((val) => {
            this.selectedMaterialFilter = val;
            if (this.selectedMaterialFilter.length > 3) {
                this.getHomePagedata();
            }
        });
        // enter tag
        this.enterTag.valueChanges.subscribe((val) => {
            this.selectEnterTag = val;
            if (this.selectEnterTag.length > 3) {
                this.getHomePagedata();
            }
        });
        this.filterMaterial_mobile.valueChanges.subscribe((val) => {
            this.selectedMaterialFilter = val;
            if (this.selectedMaterialFilter.length > 3) {
                this.getHomePagedata();
            }
        });
        // filter material
        this.filterElement.valueChanges.subscribe((val) => {
            this.selectedElementFilter = val;
            if (this.selectedElementFilter.length > 3) {
                this.getHomePagedata();
            }
        });
        this.filterElement_mobile.valueChanges.subscribe((val) => {
            this.selectedElementFilter = val;
            if (this.selectedElementFilter.length > 3) {
                this.getHomePagedata();
            }
        });
        this.FilterCity_zip.valueChanges.subscribe((val) => {
            this.selectedCity_zip = val;
            if (this.selectedCity_zip.length > 4) {
                this.getHomePagedata();
            }
        });
        this.FilterCity_zip_mobile.valueChanges.subscribe((val) => {
            this.selectedCity_zip = val;
            if (this.selectedCity_zip.length > 4) {
                this.getHomePagedata();
            }
        });
        this.Architect.valueChanges.subscribe((val) => {
            this.Architect_name = val;
            console.log(this.Architect_name);
        });
        $("#filter-mob").click(function () {
            $(".hide-show-me").slideToggle();
            $(".change-me")
                .toggleClass("col-md-12")
                .toggleClass("col-md-8")
                .toggleClass("col-lg-12")
                .toggleClass("col-lg-2")
                .toggleClass("offset-md-4");
        });
        $("#crt-post").click(function () {
            if (localStorage.getItem("userData")) {
                $("#involvement").modal("show");
                $("#post").modal("hide");
            }
            else {
                $("#create-profile").modal("show");
                $("#post").modal("hide");
            }
        });
        $(".mapClose").click(function () {
            $(".mapBox").removeClass("slide-left");
            if ($(".filters-col").hasClass("full-width")) {
                $(".filters-col").addClass("full-width");
            }
            else {
                $(".filters-col").removeClass("full-width");
            }
        });
        // $('#map').click(()=> {
        //   this.infowindow.close();
        // })
        $(".mapOpen").click(function () {
            $(".mapBox").addClass("slide-left");
            $(".filters-col").addClass("full-width");
        });
        $(".filter-desktop").click(function () {
            $(".filters-col").toggleClass("full-width");
            var value = document.getElementById("filtersho_hide").textContent;
            console.log(value);
            if (value == "SHOW FILTERS") {
                document.getElementById("filtersho_hide").innerHTML = "HIDE FILTERS";
            }
            else {
                document.getElementById("filtersho_hide").innerHTML = "HIDE FILTERS";
            }
            if ($(".filters-col").hasClass("full-width")) {
                $(".filter-desktop").innerHTML = "Hide Filter";
                $(this)
                    .closest(".filters-col")
                    .find(".col:not(:first-child)")
                    .removeClass("hide-this");
            }
            else {
                $(".filter-desktop").innerHTML = "Show Filter";
                $(this)
                    .closest(".filters-col")
                    .find(".col:not(:first-child)")
                    .addClass("hide-this");
            }
        });
        this.load_create_posts();
        // get home page data
        // this.getHomePagedata();
        setTimeout(() => {
            this.getFilterListData();
        }, 3000);
    }
    // save tags on click save button
    saveTag() {
        $("#mtChip").value = "";
    }
    // For demo Function
    demoFunction() {
        // var value = e.target.id;
        alert("");
        // this.nullName = localStorage.getItem("token");
        // var abc = localStorage.getItem("token");
        // if (abc == null) {
        //   this.toast.error("Please register to continue");
        // } else {
        //   window.open(`/involvement/${value}`, "_blank");
        // }
    }
    // add tag on select from list
    addTag(event) {
        var tagName = event.target.textContent;
        let flag = false;
        for (var i = 0; i < this.taggs.length; i++) {
            if (this.taggs[i].name == tagName) {
                flag = true;
                break;
            }
            else {
                flag = false;
            }
        }
        if (flag) {
            this.toast.error("Tag already inserted");
        }
        else {
            this.taggs.push({ name: tagName });
            var index = this.tagsList.indexOf(event.target.textContent);
            if (index > -1) {
                this.tagsList.splice(index, 1);
            }
        }
    }
    // add tag on hit enter
    onEnter() {
        let flag = false;
        if (this.message.length > 3 && this.message != "") {
            for (var i = 0; i < this.taggs.length; i++) {
                if (this.taggs[i].name == this.message) {
                    flag = true;
                    break;
                }
                else {
                    flag = false;
                }
            }
            if (flag) {
                this.toast.error("Tag already inserted");
            }
            else {
                this.taggs.push({ name: this.message });
                this.new_tag.setValue("");
            }
        }
    }
    // mat chip
    add(event) {
        const input = event.input;
        const value = event.value;
        // if ((value || '').trim()) {
        //   this.taggs.push({name: value.trim()});
        // }
        // Reset the input value
        if (input) {
            input.value = "";
        }
    }
    remove(tagg) {
        const index = this.taggs.indexOf(tagg);
        if (index >= 0) {
            this.taggs.splice(index, 1);
            if (this.tagsList.includes(tagg.name)) {
                return;
            }
            else {
                this.tagsList.push(tagg.name);
            }
        }
    }
    // mat chip end
    // add user tag on select from list
    addUserTag(user) {
        var userName = user.username;
        let flag = false;
        for (var i = 0; i < this.userTaggs.length; i++) {
            if (this.userTaggs[i].username == userName) {
                flag = true;
                break;
            }
            else {
                flag = false;
            }
        }
        if (flag) {
            this.toast.error("Tag already inserted");
        }
        else {
            this.userTaggs.push(user);
            var index = this.userTagsList.indexOf(user.username);
            if (index > -1) {
                this.userTagsList.splice(index, 1);
            }
        }
    }
    // add tag on hit enter
    // onEnter2() {
    //   let flag = false;
    //   if ((this.taggedUsers.length > 3 && this.taggedUsers != '')) {
    //   for (var i = 0; i < this.userTaggs.length; i++) {
    //     if (this.userTaggs[i].name == this.taggedUsers) {
    //       flag = true;
    //       break;
    //     } else {
    //       flag = false;
    //     }
    //   }
    //   if (flag) {
    //     this.toast.error("Tag already inserted")
    //   } else {
    //     this.userTaggs.push({ name: this.taggedUsers });
    //     this.userTag.setValue('');
    //   }
    //   }
    // }
    // mat chip
    add2(event) {
        const input = event.input;
        const value = event.value;
        // if ((value || '').trim()) {
        //   this.taggs.push({name: value.trim()});
        // }
        // Reset the input value
        if (input) {
            input.value = "";
        }
    }
    remove2(user) {
        const index = this.userTaggs.indexOf(user);
        if (index >= 0) {
            this.userTaggs.splice(index, 1);
            if (this.userTagsList.includes(user.username)) {
                return;
            }
            else {
                this.userTagsList.push(user);
            }
        }
    }
    chooseImage(event) {
        var that = this;
        this.otherOption = true;
        for (let i = 0; i < event.target.files.length; i++) {
            let img = event.target.files[i];
            const reader = new FileReader();
            reader.onload = function () {
                that.base64Image.push(reader.result);
            };
            reader.readAsDataURL(img);
            this.selectedImages.push(img);
        }
        // let file = event.target.files[0];
        // var that = this;
        // const reader = new FileReader();
        // reader.onload = function() {
        //   that.base64Image.push(reader.result);
        // };
        // reader.readAsDataURL(event.target.files[0]);
        // this.selectedImages.push(event.target.files[0]);
    }
    getImageTag() {
        for (var i = 0; i < this.base64Image.length; i++) {
            this.imageTags.push($("#imgTag" + i).val());
        }
        // console.log(this.imageTags)
    }
    removeImage(image, index) {
        this.base64Image.splice(index, 1);
        this.imageTags.splice(index, 1);
        this.selectedImages.splice(index, 1);
        if (this.selectedImages.length == 1) {
            this.otherOption = true;
            // console.log(this.selectedImages.length)
        }
    }
    getCountryFilter(event) {
        this.selectedCountryFilter = event.target.value;
        this.getHomePagedata();
    }
    // 3rd catagory option start
    getProjecttypeFilter(event) {
        //
        event.target.value;
        this.selectedProjecttypeFilter = event.target.value;
        if (this.selectedProjecttypeFilter == "1") {
            this.inputname = "New building";
        }
        if (this.selectedProjecttypeFilter == "2") {
            this.inputname = "Refurbishment";
        }
        if (this.selectedProjecttypeFilter == "3") {
            this.inputname = "Extension";
        }
        if (this.selectedProjecttypeFilter == "4") {
            this.inputname = "Interior";
        }
        if (this.selectedProjecttypeFilter == "5") {
            this.inputname = "Urbanism";
        }
        if (this.selectedProjecttypeFilter == "6") {
            this.inputname = "Exhibition";
        }
        if (this.selectedProjecttypeFilter == "7") {
            this.inputname = "Teaching";
        }
        if (this.selectedProjecttypeFilter == "8") {
            this.inputname = "Event";
        }
        if (this.selectedProjecttypeFilter == "9") {
            this.inputname = "Competition";
        }
        if (this.selectedProjecttypeFilter == "10") {
            this.inputname = "Job";
        }
        if (this.selectedProjecttypeFilter == "11") {
            this.inputname = "Thesis";
        }
        if (this.selectedProjecttypeFilter == "12") {
            this.inputname = "Landscape";
        }
        // console.log(this.selectedProjecttypeFilter)
        this.getHomePagedata();
    }
    // 4rd catagory option start
    getCategoryFilter(event) {
        this.selectedCategoryFilter = event.target.value;
        // console.log(this.selectedCategoryFilter)
        if (this.selectedCategoryFilter == "1") {
            this.inputnametwo = "Residential";
        }
        if (this.selectedCategoryFilter == "2") {
            this.inputnametwo = "Office";
        }
        if (this.selectedCategoryFilter == "3") {
            this.inputnametwo = "Retail";
        }
        if (this.selectedCategoryFilter == "4") {
            this.inputnametwo = "Hotel";
        }
        if (this.selectedCategoryFilter == "5") {
            this.inputnametwo = "Health & Care";
        }
        if (this.selectedCategoryFilter == "6") {
            this.inputnametwo = "Educational";
        }
        if (this.selectedCategoryFilter == "7") {
            this.inputnametwo = "Industrial";
        }
        if (this.selectedCategoryFilter == "8") {
            this.inputnametwo = "Agricultural";
        }
        if (this.selectedCategoryFilter == "9") {
            this.inputnametwo = "Multi Purpose";
        }
        if (this.selectedCategoryFilter == "10") {
            this.inputnametwo = "Special purpose";
        }
        if (this.selectedCategoryFilter == "11") {
            this.inputnametwo = "Civic";
        }
        if (this.selectedCategoryFilter == "12") {
            this.inputnametwo = "Religious";
        }
        if (this.selectedCategoryFilter == "13") {
            this.inputnametwo = "Transport";
        }
        if (this.selectedCategoryFilter == "14") {
            this.inputnametwo = "Military";
        }
        if (this.selectedCategoryFilter == "15") {
            this.inputnametwo = "Government";
        }
        this.getHomePagedata();
    }
    favoritePost() {
        this.favoriteList = "true";
        this.getHomePagedata();
    }
    allPost() {
        this.favoriteList = "false";
        this.getHomePagedata();
    }
    resetFilter() {
        this.FilterYear.patchValue("");
        this.FilterArch.patchValue("");
        this.FilterCity_zip.patchValue("");
        this.FilterYear_mobile.patchValue("");
        this.FilterCity_zip_mobile.patchValue("");
        this.inputnametwo = "Select Category";
        this.inputname = "Select Project Type";
        this.filterMaterial.patchValue("");
        this.filterMaterial_mobile.patchValue("");
        this.filterElement.patchValue("");
        this.filterElement_mobile.patchValue("");
        this.enterTag.patchValue("");
        this.countrylist.patchValue("Select Country");
        this.projectTypefilter.patchValue("Select Project Type");
        this.categoryfilter.patchValue("Select Category");
        this.selectedCity_zip = "";
        this.selectedYearFilter = "";
        this.selectedMaterialFilter = "";
        this.selectedArchFilter = "";
        this.selectedElementFilter = "";
        this.selectedCountryFilter = "";
        this.selectedProjecttypeFilter = "";
        this.selectedCategoryFilter = "";
        this.selectEnterTag = "";
        this.getHomePagedata();
    }
    getHomePagedata() {
        $("#togglemap").removeAttr("checked");
        this.clearQuestionFromMap();
        if (this.auth.isLoggedIn()) {
            this.ApiService.getHomePageData({
                country: this.selectedCountryFilter,
                city_or_zipcode: this.selectedCity_zip,
                project_type: this.selectedProjecttypeFilter,
                project_category: this.selectedCategoryFilter,
                year: this.selectedYearFilter,
                material: this.selectedMaterialFilter,
                architect: this.selectedArchFilter,
                element: this.selectedElementFilter,
                sort_projects: this.favoriteList,
                tags: this.selectEnterTag,
            }).subscribe((response) => {
                if (response["data"].posts.length === 0) {
                    $(".prop-card").css("display", "none");
                    // alert("There is no Post")
                    this.toast.error("There is no posts");
                    this.map.setZoom(7);
                    // for getting lat and of country
                    this.ApiService.get_latlng(this.selectedCountryFilter).subscribe((response) => {
                        console.log(response, "lat and lng from country");
                        var lat = response.results[0].geometry.location.lat;
                        var lon = response.results[0].geometry.location.lng;
                        var filterLocation = new google.maps.LatLng(lat, lon);
                        this.map.setCenter(filterLocation);
                    });
                }
                else {
                    $(".prop-card").css("display", "block");
                    this.recentPosts = response["data"].latest_post;
                    this.recentPosts = response["data"].posts;
                    this.posts = response.data.posts;
                    this.business_pins = response.data.business_pins;
                    this.questionPosts = response.data.questions;
                    console.log(response["data"], "FULL DATA");
                    if (this.selectedCountryFilter != "") {
                        this.initMap(5);
                    }
                    else {
                        this.initMap("");
                    }
                    setTimeout(() => {
                        if (this.selectedCountryFilter != "") {
                            var lat = this.posts[0].lat;
                            var lon = this.posts[0].lon;
                            var filterLocation = new google.maps.LatLng(lat, lon);
                            this.map.setCenter(filterLocation);
                        }
                    }, 500);
                }
                console.log(response["data"], "original full post data");
            });
        }
        else {
            this.ApiService.getHomePageDataa({
                country: this.selectedCountryFilter,
                city_or_zipcode: this.selectedCity_zip,
                project_type: this.selectedProjecttypeFilter,
                project_category: this.selectedCategoryFilter,
                year: this.selectedYearFilter,
                material: this.selectedMaterialFilter,
                architect: this.selectedArchFilter,
                element: this.selectedElementFilter,
                tags: this.selectEnterTag,
            }).subscribe((response) => {
                // console.log(response,"total record");
                this.recentPosts = response["data"].latest_post;
                console.log(this.recentPosts, "selected post line no 944 ");
                this.posts = response.data.posts;
                this.business_pins = response.data.business_pins;
                console.log(this.business_pins, "this is from somitra area(bussiness pins)");
                this.questionPosts = response.data.questions;
                // console.log(lon +"filter location")
                if (this.selectedCountryFilter != "") {
                    this.initMap(5);
                }
                else {
                    this.initMap("");
                }
                setTimeout(() => {
                    if (this.selectedCountryFilter != "") {
                        var lat = this.posts[0].lat;
                        var lon = this.posts[0].lon;
                        var filterLocation = new google.maps.LatLng(lat, lon);
                        // console.log(filterLocation)
                        this.map.setCenter(filterLocation);
                    }
                }, 500);
            });
        }
    }
    profilePage(event) {
        var loginCheck = localStorage.getItem("token");
        if (loginCheck == null) {
            this.toast.error("Please login first");
        }
        else {
            // var elem2 = event.target.value;
            var elem2 = event.target.id;
            var elem1 = elem2.toLowerCase();
            var userRes = localStorage.getItem("userData");
            var userRes1 = JSON.parse(userRes);
            var userRes2 = userRes1.company_detail.name;
            var userRes3 = userRes2.toLowerCase();
            if (elem1 == userRes3) {
                window.open("/my-profile", "_blank");
            }
            else {
                window.open(`users-profile/${elem2}`, "_blank");
            }
        }
    }
    getFilterListData() {
        this.ApiService.getFilterListData().subscribe((x) => {
            var data = x["data"];
            // console.log(data)
            this.project_typeList = data.project_type;
            console.log(this.project_typeList, " line no 786 data");
            this.categoryList = data.category;
            console.log(this.categoryList, "444444444444444444444444444");
            this.countryList = data.country;
        });
    }
    getBusinessflag(type) {
        var baseIcon = "/assets/images/";
        if (type == 2) {
            return baseIcon + "business_free.png";
        }
        else if (type == 3) {
            return baseIcon + "business_basic.png";
        }
        else if (type == 4) {
            return baseIcon + "business_premium.png";
        }
        else if (type == 5) {
            return baseIcon + "business_premium.png";
        }
    }
    getflag(type, cat) {
        var baseIcon = "/assets/images/icon_web/";
        if (type == "Refurbishment" && cat == "Agricultural") {
            return baseIcon + "agricultural_refurbishment.png";
        }
        else if (type == "Refurbishment" && cat == "Civic") {
            return baseIcon + "civic_refurbishment.png";
        }
        else if (type == "Refurbishment" && cat == "Educational") {
            return baseIcon + "education_refurbishment.png";
        }
        else if (type == "Refurbishment" && cat == "Government") {
            return baseIcon + "government_refurbishment.png";
        }
        else if (type == "Refurbishment" && cat == "Health & Care") {
            return baseIcon + "health_care_refurbishment.png";
        }
        else if (type == "Refurbishment" && cat == "Hotel") {
            return baseIcon + "hotel_refurbishment.png";
        }
        else if (type == "Refurbishment" && cat == "Industrial") {
            return baseIcon + "industrial_refurbishment.png";
        }
        else if (type == "Refurbishment" && cat == "Military") {
            return baseIcon + "military_refurbishment.png";
        }
        else if (type == "Refurbishment" && cat == "Multi Purpose") {
            return baseIcon + "multi_purpose_refurbishment.png";
        }
        else if (type == "Refurbishment" && cat == "Office") {
            return baseIcon + "office_refurbishment.png";
        }
        else if (type == "Refurbishment" && cat == "Religious") {
            return baseIcon + "religious_refurbishment.png";
        }
        else if (type == "Refurbishment" && cat == "Residential") {
            return baseIcon + "residential_refurbishment.png";
        }
        else if (type == "Refurbishment" && cat == "Retail") {
            return baseIcon + "retail_refurbishment.png";
        }
        else if (type == "Refurbishment" && cat == "Special purpose") {
            return baseIcon + "special_purpose_refurbishment.png";
        }
        else if (type == "Refurbishment" && cat == "Transport") {
            return baseIcon + "transport_refurbishment.png";
        }
        else if (type == "Extension" && cat == "Transport") {
            return baseIcon + "transport_extension.png";
        }
        else if (type == "Extension" && cat == "Special purpose") {
            return baseIcon + "special_purpose_extension.png";
        }
        else if (type == "Extension" && cat == "Retail") {
            return baseIcon + "retail_extension.png";
        }
        else if (type == "Extension" && cat == "Residential") {
            return baseIcon + "residential_extension.png";
        }
        else if (type == "Extension" && cat == "Religious") {
            return baseIcon + "religious_extension.png";
        }
        else if (type == "Extension" && cat == "Office") {
            return baseIcon + "office_extension.png";
        }
        else if (type == "Extension" && cat == "Multi Purpose") {
            return baseIcon + "multi_purpose_extension.png";
        }
        else if (type == "Extension" && cat == "Military") {
            return baseIcon + "military_extension.png";
        }
        else if (type == "Extension" && cat == "Industrial") {
            return baseIcon + "industrial_extension.png";
        }
        else if (type == "Extension" && cat == "Hotel") {
            return baseIcon + "hotel_extension.png";
        }
        else if (type == "Extension" && cat == "Health & Care") {
            return baseIcon + "health_care_extension.png";
        }
        else if (type == "Extension" && cat == "Government") {
            return baseIcon + "government_extension.png";
        }
        else if (type == "Extension" && cat == "Educational") {
            return baseIcon + "education_extension.png";
        }
        else if (type == "Extension" && cat == "Civic") {
            return baseIcon + "civic_extension.png";
        }
        else if (type == "Extension" && cat == "Agricultural") {
            return baseIcon + "agricultural_extension.png";
        }
        else if (type == "New building" && cat == "Transport") {
            return baseIcon + "transport_new_building.png";
        }
        else if (type == "New building" && cat == "Special purpose") {
            return baseIcon + "special_purpose_new_building.png";
        }
        else if (type == "New building" && cat == "Retail") {
            return baseIcon + "retail_new_building.png";
        }
        else if (type == "New building" && cat == "Residential") {
            return baseIcon + "residential_new_building.png";
        }
        else if (type == "New building" && cat == "Religious") {
            return baseIcon + "religious_new_building.png";
        }
        else if (type == "New building" && cat == "Office") {
            return baseIcon + "office_new_building.png";
        }
        else if (type == "New building" && cat == "Multi Purpose") {
            return baseIcon + "multi_purpose_new_building.png";
        }
        else if (type == "New building" && cat == "Military") {
            return baseIcon + "military_new_building.png";
        }
        else if (type == "New building" && cat == "Industrial") {
            return baseIcon + "industrial_care_new_building.png";
        }
        else if (type == "New building" && cat == "Hotel") {
            return baseIcon + "hotel_care_new_building.png";
        }
        else if (type == "New building" && cat == "Health & Care") {
            return baseIcon + "health_care_new_building.png";
        }
        else if (type == "New building" && cat == "Government") {
            return baseIcon + "government_new_building.png";
        }
        else if (type == "New building" && cat == "Educational") {
            return baseIcon + "education_new_building.png";
        }
        else if (type == "New building" && cat == "Civic") {
            return baseIcon + "civic_new_building.png";
        }
        else if (type == "New building" && cat == "Agricultural") {
            return baseIcon + "agricultural_new_building.png";
        }
        else if (type == "Interior" && cat == "Transport") {
            return baseIcon + "transport_interiour.png";
        }
        else if (type == "Interior" && cat == "Special purpose") {
            return baseIcon + "special_purpose_interiour.png";
        }
        else if (type == "Interior" && cat == "Retail") {
            return baseIcon + "retail_interiour.png";
        }
        else if (type == "Interior" && cat == "Residential") {
            return baseIcon + "residential_interiour.png";
        }
        else if (type == "Interior" && cat == "Religious") {
            return baseIcon + "religious_interiour.png";
        }
        else if (type == "Interior" && cat == "Office") {
            return baseIcon + "office_interiour.png";
        }
        else if (type == "Interior" && cat == "Multi Purpose") {
            return baseIcon + "multi_purpose_interiour.png";
        }
        else if (type == "Interior" && cat == "Military") {
            return baseIcon + "military_interiour.png";
        }
        else if (type == "Interior" && cat == "Industrial") {
            return baseIcon + "industrial_interiour.png";
        }
        else if (type == "Interior" && cat == "Hotel") {
            return baseIcon + "hotel_interiour.png";
        }
        else if (type == "Interior" && cat == "Health & Care") {
            return baseIcon + "health_care_interiour.png";
        }
        else if (type == "Interior" && cat == "Government") {
            return baseIcon + "government_interiour.png";
        }
        else if (type == "Interior" && cat == "Educational") {
            return baseIcon + "education_interiour.png";
        }
        else if (type == "Interior" && cat == "Civic") {
            return baseIcon + "civic_interiour.png";
        }
        else if (type == "Interior" && cat == "Agricultural") {
            return baseIcon + "agricultural_interiour.png";
        }
        else if (type == "Competition" && cat == "Transport") {
            return baseIcon + "transport_competition.png";
        }
        else if (type == "Competition" && cat == "Special purpose") {
            return baseIcon + "special_competition.png";
        }
        else if (type == "Competition" && cat == "Retail") {
            return baseIcon + "retail_competition.png";
        }
        else if (type == "Competition" && cat == "Residential") {
            return baseIcon + "residential_competition.png";
        }
        else if (type == "Competition" && cat == "Religious") {
            return baseIcon + "religious_competition.png";
        }
        else if (type == "Competition" && cat == "Office") {
            return baseIcon + "office_competition.png";
        }
        else if (type == "Competition" && cat == "Multi Purpose") {
            return baseIcon + "multi_purpose_competition.png";
        }
        else if (type == "Competition" && cat == "Military") {
            return baseIcon + "military_competition.png";
        }
        else if (type == "Competition" && cat == "Industrial") {
            return baseIcon + "industrial_competition.png";
        }
        else if (type == "Competition" && cat == "Hotel") {
            return baseIcon + "hotel_competition.png";
        }
        else if (type == "Competition" && cat == "Health & Care") {
            return baseIcon + "health_care_competition.png";
        }
        else if (type == "Competition" && cat == "Government") {
            return baseIcon + "government_competition.png";
        }
        else if (type == "Competition" && cat == "Educational") {
            return baseIcon + "education_competition.png";
        }
        else if (type == "Competition" && cat == "Civic") {
            return baseIcon + "civic_competition.png";
        }
        else if (type == "Competition" && cat == "Agricultural") {
            return baseIcon + "agricultural_competition.png";
        }
        else if (type == "Thesis" && cat == "Transport") {
            return baseIcon + "transport_thesis.png";
        }
        else if (type == "Thesis" && cat == "Special purpose") {
            return baseIcon + "special_thesis.png";
        }
        else if (type == "Thesis" && cat == "Retail") {
            return baseIcon + "retail_thesis.png";
        }
        else if (type == "Thesis" && cat == "Residential") {
            return baseIcon + "residential_thesis.png";
        }
        else if (type == "Thesis" && cat == "Religious") {
            return baseIcon + "religious_thesis.png";
        }
        else if (type == "Thesis" && cat == "Office") {
            return baseIcon + "office_thesis.png";
        }
        else if (type == "Thesis" && cat == "Multi Purpose") {
            return baseIcon + "multi_purpose_thesis.png";
        }
        else if (type == "Thesis" && cat == "Military") {
            return baseIcon + "military_thesis.png";
        }
        else if (type == "Thesis" && cat == "Industrial") {
            return baseIcon + "industrial_thesis.png";
        }
        else if (type == "Thesis" && cat == "Hotel") {
            return baseIcon + "hotel_thesis.png";
        }
        else if (type == "Thesis" && cat == "Health & Care") {
            return baseIcon + "health_care_thesis.png";
        }
        else if (type == "Thesis" && cat == "Government") {
            return baseIcon + "government_thesis.png";
        }
        else if (type == "Thesis" && cat == "Educational") {
            return baseIcon + "education_thesis.png";
        }
        else if (type == "Thesis" && cat == "Civic") {
            return baseIcon + "civic_thesis.png";
        }
        else if (type == "Thesis" && cat == "Agricultural") {
            return baseIcon + "agricultural_thesis.png";
        }
        else if (type == "Job" && cat != "") {
            return baseIcon + "job.png";
        }
        else if (type == "Landscape" && cat != "") {
            return baseIcon + "landscape.png";
        }
        else if (type == "Urbanism" && cat != "") {
            return baseIcon + "urbanism.png";
        }
        else if (type == "Exhibition" && cat != "") {
            return baseIcon + "exhibition.png";
        }
        else if (type == "Teaching" && cat != "") {
            return baseIcon + "teaching.png";
        }
        else if (type == "Event" && cat != "") {
            return baseIcon + "event.png";
        }
    }
    initMap(searchzoomView) {
        //
        this.zoomView = 16;
        if (searchzoomView != "") {
            this.zoomView = searchzoomView;
        }
        // console.log(this.current_lat);
        // console.log(this.current_long);
        // console.log(this.current_postion)
        var that = this;
        var options = {
            // center: { lat: 28.6056448, lng: 70.38982399999999 },
            center: { lat: this.current_lat, lng: this.current_long },
            zoom: this.zoomView,
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            disableDoubleClickZoom: true,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, "tehgrayz"],
            },
            gestureHandling: "greedy",
        };
        var options1 = {
            // center: { lat: 28.6056448, lng: 70.38982399999999 },
            center: { lat: this.cur_lat, lng: this.cur_lng },
            zoom: this.zoomView,
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            disableDoubleClickZoom: true,
            gestureHandling: "greedy",
        };
        var options2 = {
            // center: { lat: 28.6056448, lng: 70.38982399999999 },
            center: { lat: this.cur_lat, lng: this.cur_lng },
            zoom: this.zoomView,
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            disableDoubleClickZoom: true,
            gestureHandling: "greedy",
        };
        this.map = new google.maps.Map(document.getElementById("map"), options);
        this.map1 = new google.maps.Map(document.getElementById("map1"), options1);
        this.map2 = new google.maps.Map(document.getElementById("map2"), options1);
        this.map2.addListener("click", (mapsMouseEvent) => {
            var lat = mapsMouseEvent.latLng.toJSON().lat;
            var lng = mapsMouseEvent.latLng.toJSON().lng;
            $("#map-lat").val(lat);
            $("#map-lon").val(lng);
            var latlng = mapsMouseEvent.latLng;
            marker2.setPosition(latlng);
            localStorage.setItem("newCompanyMapLat", lat);
            localStorage.setItem("newCompanyMapLng", lng);
            this.map2.infowindow.close();
        });
        this.map1.addListener("click", (mapsMouseEvent) => {
            var lat = mapsMouseEvent.latLng.toJSON().lat;
            var lng = mapsMouseEvent.latLng.toJSON().lng;
            $("#map-lat").val(lat);
            $("#map-lon").val(lng);
            var latlng = mapsMouseEvent.latLng;
            marker1.setPosition(latlng);
            localStorage.setItem("newCompanyMapLat", lat);
            localStorage.setItem("newCompanyMapLng", lng);
            this.map1.marker.infowindow.close();
        });
        // var marker = new google.maps.Marker({
        //   position: { lat: this.cur_lat, lng: this.cur_lng },
        //   map: this.map,
        //   draggable: true,
        // });
        var marker1 = new google.maps.Marker({
            position: { lat: this.cur_lat, lng: this.cur_lng },
            map: this.map1,
            draggable: false,
        });
        var marker2 = new google.maps.Marker({
            position: { lat: this.cur_lat, lng: this.cur_lng },
            map: this.map2,
            draggable: false,
        });
        // google.maps.event.addListener(marker, "dragend", function () {
        //   var lat = marker.getPosition().lat();
        //   var lng = marker.getPosition().lng();
        //   $("#map-lat").val(lat);
        //   $("#map-lon").val(lng);
        // });
        // google.maps.event.addListener(marker2, "dragend", function () {
        //   var lat = marker2.getPosition().lat();
        //   var lng = marker2.getPosition().lng();
        //   $("#map-lat").val(lat);
        //   $("#map-lon").val(lng);
        //   localStorage.setItem("newCompanyMapLat", lat);
        //   localStorage.setItem("newCompanyMapLng", lng);
        // });
        this.createPostMap = new google.maps.Map(document.getElementById("create_post_map"), options);
        this.create_company_profile = new google.maps.Map(document.getElementById("create_company_profile"), options2);
        this.setBusinessMarkers2 = new google.maps.Map(document.getElementById("create_post_map"), options);
        // open question post dialog
        // console.log(this.current_lat, this.current_long)
        // custom set marker
        this.setPostMarkers(this.map);
        this.setBusinessMarkers(this.map);
        this.setBusinessMarkers2(this.map);
        // this.locate_marker_on_map(this.loc , this.createPostMap)
        // this.setMapToCurrentLocation(this.map)
        this.locate_marker_on_map(this.loc, this.map);
        // console.log(current_lat,current_long)
        this.locate_marker_on_map2(this.loc, this.create_company_profile);
        // by default lo lon for address
        $("#map-lat").val(this.loc.lat);
        $("#map-lon").val(this.loc.lng);
        google.maps.event.addListener(this.post_marker2, "dragend", function () {
            // console.log(this.getPosition().lat(), this.getPosition().lng())
            var lat = this.post_marker2.getPosition().lat();
            var lng = this.post_marker2.getPosition().lng();
            $("#map-lat").val(lat);
            $("#map-lon").val(lng);
            this.fav = 0;
        });
        var that = this;
        google.maps.event.addListener(this.map, "click", function (event) {
            that.infowindow.close();
        });
        // click on map event listner
        google.maps.event.addListener(this.map, "dblclick", function (event) {
            if (that.ApiService.checkIsLogin()) {
                // console.log(that.ApiService.getUserData().is_profile_created)
                if (!that.ApiService.getUserData().is_profile_created) {
                    that.toast.error("Please create profile first");
                    $("#create-profile").modal("show");
                    return false;
                }
            }
            else {
                that.toast.error("Please login");
                $("#login").modal("show");
                return false;
            }
            this.clicked_location_lat = event.latLng.lat();
            this.clicked_location_lng = event.latLng.lng();
            $("#involvement").modal("show");
            // set clicked location with marker on model
            that.createPostMap.setCenter({
                lat: this.clicked_location_lat,
                lng: this.clicked_location_lng,
            });
            // clear previous marker
            // that.post_marker.setPosition({ lat: this.clicked_location_lat, lng: this.clicked_location_lng });
            $("#map-lat").val(event.latLng.lat());
            $("#map-lon").val(event.latLng.lng());
        });
        var mapType = new google.maps.StyledMapType(this.stylez, {
            name: "Grayscale",
        });
        this.map.mapTypes.set("tehgrayz", mapType);
        this.map.setMapTypeId("tehgrayz");
        this.createPostMap.mapTypes.set("tehgrayz", mapType);
        this.createPostMap.setMapTypeId("tehgrayz");
        this.create_company_profile.mapTypes.set("tehgrayz", mapType);
        this.create_company_profile.setMapTypeId("tehgrayz");
    }
    // set map to current location
    setMapToCurrentLocation(map) {
        // console.log('clicked')
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                map.setCenter(initialLocation);
            });
        }
    }
    GetCenterLocation() { }
    // SetMapToCurrentLocationEvent() {
    //   this.setMapToCurrentLocation(this.map)
    //   location.reload();
    // }
    bindInfoWindow(marker, map, infowindow, description) {
        marker.addListener("mouseover", function () {
            infowindow.setContent(description);
            infowindow.open(map, this);
        });
        marker.addListener("mousedown", function () {
            infowindow.close(map, true);
            console.log(infowindow, "this is infowindow");
        });
        $("#map").on("click", function () {
            infowindow.close(map, false);
        });
    }
    // set post on map
    setPostMarkers(map) {
        window.navigator.geolocation.getCurrentPosition((data) => {
            this.current_lat = data.coords.latitude;
            this.current_long = data.coords.longitude;
        });
        for (var i = 0; i < this.posts.length; i++) {
            var marker = new google.maps.Marker({
                position: {
                    lat: parseFloat(this.posts[i].lat),
                    lng: parseFloat(this.posts[i].lon),
                },
                map: map,
                icon: this.getflag(this.posts[i].project_type.type, this.posts[i].project_category),
            });
            this.bindInfoWindow(marker, map, this.infowindow, `<a id="ourModal" value="` +
                this.posts[i].id +
                `"   class="test_element"> 
     
        <div
      class="prop-card m-0 text-center bg-white">

         
          <img src=` +
                this.posts[i].post_image.image +
                ` alt="" style="object-fit: contain;" class="img-responsive responsive" width="200" height="200">
        </div>
        <div class="prop-info pt-2">
          <ul>
            <li class="fw-600">` +
                this.posts[i].name +
                `</li>
            <li class="fw-600">` +
                this.posts[i].created_by_name +
                `</li>
          </ul>
          <ul>
            <li><a href="https://maps.google.com/maps?saddr=` +
                this.current_lat +
                "," +
                this.current_long +
                "&daddr=" +
                this.posts[i].lat +
                "," +
                this.posts[i].lon +
                `" class="fa fa-paper-plane pull-right ml-2 whpc-20" target="_blank"></a>` +
                this.posts[i].city +
                "," +
                this.posts[i].country +
                `</li>
            <li>` +
                this.posts[i].year +
                `</li>
          </ul>
        </div>
      </a>
      
      </div>`);
        }
    }
    setBusinessMarkers(map) {
        var mapType = new google.maps.StyledMapType(this.stylez, {
            name: "Grayscale",
        });
        map.mapTypes.set("tehgrayz", mapType);
        map.setMapTypeId("tehgrayz");
        for (var i = 0; i < this.business_pins.length; i++) {
            var marker = new google.maps.Marker({
                position: {
                    lat: parseFloat(this.business_pins[i].lat),
                    lng: parseFloat(this.business_pins[i].lon),
                },
                map: map,
                icon: {
                    url: this.getBusinessflag(this.business_pins[i].business_type),
                    scaledSize: new google.maps.Size(25, 25),
                },
            });
            this.bindInfoWindow(marker, map, this.infowindow, ` <div
      class="prop-card m-0" >
     
    

          <a  target="_blank" href="/users-profile/` +
                this.business_pins[i].username +
                `">
          <img src= "https://api.insite.city/media/` +
                this.business_pins[i].picture +
                `" alt="USER IMAGE" object-fit: contain;" class="img-responsive responsive width="200" height="200"></a>
        </div>
        <div class="prop-info pt-2">
          <ul>
            <li class="fw-600">` +
                this.business_pins[i].name +
                `</li>
            <li class="fw-600">` +
                // this.business_pins[i].created_by_name +
                `</li>
          </ul>
          <ul>
            <li>
            <a href="https://maps.google.com/maps?saddr=` +
                // this.current_lat +
                // "," +
                // this.current_long +
                // "&daddr=" +
                // this.business_pins[i].lat +
                // "," +
                // this.business_pins[i].lon +
                // `" class="fa fa-paper-plane pull-right ml-2 whpc-20" target="_blank">
                // </a>` +
                // this.business_pins[i].city +
                // "," +
                // this.business_pins[i].country +
                // `</li>
                // <li>` +
                // this.business_pins[i].year +
                `</li>
          </ul>
        </div>
      </div>`);
            // google.maps.event.addListener(marker, 'click', function() {
            //   map.setCenter(marker.position)
            // });
        }
    }
    setBusinessMarkers2(map) {
        var mapType = new google.maps.StyledMapType(this.stylez, {
            name: "Grayscale",
        });
        map.mapTypes.set("tehgrayz", mapType);
        map.setMapTypeId("tehgrayz");
        for (var i = 0; i < this.business_pins.length; i++) {
            var marker = new google.maps.Marker({
                position: {
                    lat: parseFloat(this.posts[i].lat),
                    lng: parseFloat(this.posts[i].lon),
                },
                map: map,
                icon: {
                    url: this.getBusinessflag(this.business_pins[i].business_type),
                    scaledSize: new google.maps.Size(25, 25),
                },
            });
            this.bindInfoWindow(marker, map, this.infowindow, ` <div
      class="prop-card m-0" >
     
    

          <a  target="_blank" href="/users-profile/` +
                this.business_pins[i].username +
                `">
          <img src= "https://api.insite.city/media/` +
                this.business_pins[i].picture +
                `" alt="USER IMAGE" object-fit: contain;" class="img-responsive responsive width="200" height="200""></a>
        </div>
        <div class="prop-info pt-2">
          <ul>
            <li class="fw-600">` +
                this.business_pins[i].name +
                `</li>
            <li class="fw-600">` +
                // this.business_pins[i].created_by_name +
                `</li>
          </ul>
          <ul>
            <li>
            <a href="https://maps.google.com/maps?saddr=` +
                // this.current_lat +
                // "," +
                // this.current_long +
                // "&daddr=" +
                // this.business_pins[i].lat +
                // "," +
                // this.business_pins[i].lon +
                // `" class="fa fa-paper-plane pull-right ml-2 whpc-20" target="_blank">
                // </a>` +
                // this.business_pins[i].city +
                // "," +
                // this.business_pins[i].country +
                // `</li>
                // <li>` +
                // this.business_pins[i].year +
                `</li>
          </ul>
        </div>
      </div>`);
            // google.maps.event.addListener(marker, 'click', function() {
            //   map.setCenter(marker.position)
            // });
        }
    }
    bindClickOnquestion(marker) {
        var that = this;
        marker.addListener("click", function () {
            // that.router.navigate([]).then((result) => {
            //   window.open(marker.url);
            // });
            that.router.navigateByUrl(marker.url);
        });
    }
    // set question on map
    setQuestionMarkers(map) {
        for (var i = 0; i < this.questionPosts.length; i++) {
            var marker = new google.maps.Marker({
                position: {
                    lat: parseFloat(this.questionPosts[i].lat),
                    lng: parseFloat(this.questionPosts[i].lon),
                },
                map: map,
                icon: "/assets/images/icon_web/public_space.png",
                url: "/public-detailed-view/" + this.questionPosts[i].id,
            });
            this.bindInfoWindow(marker, map, this.infowindow, ` <a id="ourModal"  target="_blank" href="/involvement/` +
                this.posts[i].id +
                `"> 
     
        <div
      class="prop-card m-0 text-center bg-white">

         
          
        </div>
        <div class="prop-info pt-2">
        
         
        </div>
      </a>
      
      </div>`);
            this.markersArray.push(marker);
            this.bindClickOnquestion(marker);
            // var infowindow = new google.maps.InfoWindow();
            // google.maps.event.addListener(
            //   marker,
            //   "click",
            //   (function (marker) {
            //     return function () {
            //       this.post_id = this.questionPosts[i].id
            //       this.getPostDetails(this.post_id);
            //       $("#exampleModalCenter").modal("show");
            //     };
            //   })(marker)
            // );
        }
    }
    // clear question from map
    clearQuestionFromMap() {
        for (var i = 0; i < this.markersArray.length; i++) {
            this.markersArray[i].setMap(null);
        }
        this.markersArray.length = 0;
    }
    // clear select location marker from map
    clearPostCreateFromMap() {
        for (var i = 0; i < this.markersArray.length; i++) {
            this.markersArray[i].setMap(null);
        }
        this.markersArray.length = 0;
    }
    changeSliderEvent(event) {
        // console.log(event)
        if (event.target.checked) {
            this.setQuestionMarkers(this.map);
        }
        else {
            this.clearQuestionFromMap();
        }
    }
    locate_marker_on_map(location, map) {
        this.post_marker = new google.maps.Marker({
            // position: location,
            // map: map,
            animation: google.maps.Animation.DROP,
            title: "Post location",
        });
    }
    locate_marker_on_map2(location, map) {
        this.post_marker2 = new google.maps.Marker({
            position: { lat: this.cur_lat, lng: this.cur_lng },
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            title: "Post location",
        });
    }
    openQuestionDialog() {
        this.QuestCreateForm = this.fb.group({
            nickName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        $("#imagefile").attr("src", "/assets/images/place_image.png");
        $("#questimg").val("");
        $("#post-question").modal("show");
    }
    saveQuestion(event) {
        if (!this.ApiService.checkIsLogin()) {
            this.toast.error("Please login");
            return;
        }
        this.isDescription = false;
        this.isImage = false;
        if (this.QuestCreateForm.value.description == "") {
            this.message = "Description field is required";
            this.isDescription = true;
            return;
        }
        if (this.singleFiles == null) {
            this.message = "Please upload file";
            this.isImage = true;
            return;
        }
        //get access of geolocation
        // console.log(this.map.getCenter())
        var mylat = this.map.getCenter().lat();
        var mylon = this.map.getCenter().lng();
        this.formData = new FormData();
        this.formData.append("nickname", this.QuestCreateForm.value.nickName);
        this.formData.append("country_code", this.ApiService.getUserData().country_code),
            this.formData.append("mobile_number", this.ApiService.getUserData().mobile_number),
            this.formData.append("picture", this.singleFiles);
        this.formData.append("question_text", this.QuestCreateForm.value.description);
        this.formData.append("lat", mylat);
        this.formData.append("lon", mylon);
        this.ApiService.create_quest(this.formData).subscribe((response) => {
            // this.toast.success(response.message);
            // $("#post-question").modal("hide");
        }),
            (error) => {
                this.toast.error(error.error.message);
            };
    }
    onFileChanged(event) {
        var singleFiles = event.target.files;
        var file = event.target.files[0];
        var fileType = file["type"];
        var validImageTypes = ["image/gif", "image/jpeg", "image/png"];
        if ($.inArray(fileType, validImageTypes) < 0) {
            $("#questimg").val("");
            $("#imagefile").attr("src", "/assets/images/place_image.png");
            this.toast.error("Whoops! That is not an image!");
        }
        if (singleFiles) {
            for (let file of singleFiles) {
                let singleReader = new FileReader();
                singleReader.onload = (e) => {
                    $("#imagefile").attr("src", e.target.result);
                };
                singleReader.readAsDataURL(file);
            }
        }
        this.singleFiles = event.target.files[0];
        this.isImage = false;
    }
    load_create_posts() {
        this.api_get_project_type();
        this.api_get_project_category();
    }
    validate_create_posts() {
        var projTyp = this.postForm.value.project_type;
        var projCat = this.postForm.value.project_category;
        if (projTyp != "Select Project Type") {
            var project_type = this.postForm.value.project_type;
        }
        else {
            var project_type = null;
        }
        if (projCat != "Select Project Category") {
            var project_category = this.postForm.value.project_category;
        }
        else {
            var project_category = null;
        }
        var name = this.postForm.value.name;
        var year = this.postForm.value.year;
        var about_post = this.postForm.value.about_post;
        var images = this.postImage;
        var t_type_start_date = this.postForm.value.t_type_start_date;
        var t_type_end_date = this.postForm.value.t_type_end_date;
        var s = Date.parse(t_type_start_date);
        var e = Date.parse(t_type_end_date);
        if (!name || name == "") {
            this.loginError("Please provide project name");
            return false;
        }
        if (!project_type || project_type == "") {
            this.loginError("Please provide project type");
            return false;
        }
        if (this.starType == true &&
            (!project_category || project_category == "")) {
            this.loginError("Please provide project category");
            return false;
        }
        if (this.typ == 0 && (!year || year == "")) {
            this.loginError("Please provide year");
            return false;
        }
        if (this.typ == 0 && year.toString().length < 4) {
            this.loginError("Please enter year in YYYY format");
            return false;
        }
        if (this.typ == 1 && (!t_type_start_date || t_type_start_date == "")) {
            this.loginError("Please provide start date");
            return false;
        }
        if (this.typ == 1 && (!t_type_end_date || t_type_end_date == "")) {
            this.loginError("Please provide end date");
            return false;
        }
        else {
            // console.log(s)
            // console.log(e)
        }
        if (this.typ == 1 && e <= s) {
            this.loginError("End date should be Greater");
            return false;
        }
        if (this.taggs.length == 0) {
            this.loginError("Please provide tags");
            return false;
        }
        if (!about_post || about_post == "") {
            this.loginError("Please provide descriptions");
            return false;
        }
        // if (this.base64Image.length <= 0) {
        //   this.loginError("Please provide images");
        //   return false;
        // }
        if (!$("#post_perms").is(":checked")) {
            this.loginError("Please accept content terms and conditions");
            return false;
        }
        return true;
    }
    api_get_project_type() {
        this.ApiService.getProjectType().subscribe((response) => {
            this.project_typeData = response["data"];
        }, (error) => {
            console.log("error", error);
            this.loginError(error.error.message);
        });
    }
    getType() {
        var id = $("#selType :selected").val();
        for (var i of this.project_typeData) {
            if (i.id == id) {
                var checkType = i.is_t_type;
                this.starType = i.is_star_type;
                // console.log(this.starType)
            }
        }
        if (checkType == true) {
            this.typ = 1;
        }
        else {
            this.typ = 0;
        }
        if (this.starType == false) {
            this.hideCat = 1;
        }
        else {
            this.hideCat = 0;
        }
    }
    api_get_project_category() {
        this.ApiService.getProjectCategory().subscribe((response) => {
            this.project_categoryData = Object.values(response.data);
        }, (error) => {
            console.log("error", error);
            this.loginError(error.error.message);
        });
    }
    emptyPostForm() {
        this.postForm.setValue({
            name: "",
            project_type: "",
            project_category: "",
            year: "",
            t_type_end_date: "",
            t_type_start_date: "",
            tags: "",
            about_post: "",
            images: null,
        });
        for (var i = 0; i < this.imageTags.length; i++) {
            $("#imgTag" + i).val("");
        }
        this.taggs = [];
        this.selectedImages = [];
        this.base64Image = [];
        this.imageTags = [];
    }
    getStrEndDate() {
        if ($("#start-date").val()) {
            this.strD = $("#start-date").val();
        }
        else {
            this.strD = "2020-07-15";
        }
        if ($("#end-date").val()) {
            this.endD = $("#end-date").val();
        }
        else {
            this.endD = "2021-07-16";
        }
    }
    hit() {
        var img_tagg = $("#creditt").val();
        this.postImageTag = img_tagg;
    }
    getTags() {
        for (var i of this.taggs) {
            this.sendingtags.push(i.name);
        }
        for (var j in this.userTaggs) {
            this.sendingUsertags.push(this.userTaggs[j].id);
            // console.log(this.sendingUsertags)
        }
    }
    // getMoreValues(callback){
    //   this.latitude = $('#map-lat').val()
    //     this.longitude = $('#map-lon').val()
    //     this.ApiService.getaddress(this.latitude, this.longitude).subscribe(x=>{
    //     console.log(x)
    //   })
    // }
    getMoreValues(callback) {
        this.latitude = $("#map-lat").val();
        this.longitude = $("#map-lon").val();
        this.ApiService.getAddressNew({
            lat: this.latitude,
            lon: this.longitude,
        }).subscribe((res) => {
            console.log("===========1846===========", res["results"][0].address_components);
            console.log(res, "Whole data");
            let addressComponents = res["results"][0].address_components;
            for (var i = 0; i < addressComponents.length; i++) {
                if (addressComponents[i].types[0] == "country") {
                    this.country = addressComponents[i].long_name;
                }
                if (addressComponents[i].types[0] == "administrative_area_level_2") {
                    this.city = addressComponents[i].long_name;
                }
                if (addressComponents[i].types[0] == "postal_code") {
                    this.posttalcode = addressComponents[i].long_name;
                }
                if (addressComponents[i].types[0] == "route") {
                    this.street = addressComponents[i].long_name;
                }
            }
            if (this.country == undefined || this.country == null) {
                this.country = "N/A";
            }
            if (this.city == undefined || this.city == null) {
                this.city = "N/A";
            }
            if (this.street == undefined || this.street == null) {
                this.street = "N/A";
            }
            if (this.posttalcode == undefined || this.posttalcode == null) {
                this.posttalcode = "000000";
            }
            console.log("===========1846===========", this.country, this.city, this.posttalcode, this.street);
            if (callback)
                callback();
        }, (err) => {
            console.log("===========1848==============", err);
            this.country = "NA";
            this.posttalcode = "";
            this.city = "NA";
            this.street = "";
        });
        // this.ApiService.getAddressFromLatLng(
        //   this.latitude + "," + this.longitude
        // ).then(
        //   (result) => {
        //     var address = result[0].Location.Address;
        //     console.log(result);
        //     this.country = address.AdditionalData[0].value;
        //     this.posttalcode = address.PostalCode;
        //     this.city = address.City;
        //     this.street = address.Label;
        //     if (callback) callback();
        //   },
        //   (error) => {
        //     console.log("error", error);
        //     // this.loginError(error.error.message);
        //     this.country = "NA";
        //     this.posttalcode = "";
        //     this.city = "NA";
        //     this.street = "";
        //   }
        // );
    }
    api_create_posts() {
        console.log("==================>", "api_create_posts", this.postForm.value);
        if (this.postForm.value.project_category == "Select Project Category") {
            this.postForm.value.project_category = "";
        }
        $("#post_btn").css("display", "none");
        const postData = new FormData();
        postData.append("name", this.postForm.value.name),
            postData.append("project_type", this.postForm.value.project_type),
            postData.append("project_category", this.postForm.value.project_category),
            postData.append("year", this.postForm.value.year),
            postData.append("tags", this.sendingtags.toString()),
            postData.append("about_post", this.postForm.value.about_post),
            postData.append("lat", this.latitude),
            postData.append("lon", this.longitude),
            postData.append("taged_users", this.sendingUsertags.toString()),
            this.selectedImages.map((img) => {
                postData.append("images", img);
            });
        postData.append("image_tag", this.imageTags.toString()),
            postData.append("t_type_end_date", this.endD),
            postData.append("t_type_start_date", this.strD),
            postData.append("country", this.country),
            postData.append("city", this.city),
            postData.append("zip_code", this.posttalcode),
            postData.append("street", ""),
            this.ApiService.postsCreate(postData).subscribe((response) => {
                this.toast.success("success", response.message);
                this.emptyPostForm();
                $("#involvement").modal("hide");
                this.ngOnInit();
                $("#post_btn").css("display", "block");
            }, (error) => {
                this.toast.error(error.error.message);
            });
    }
    submit_create_posts(e) {
        this.getTags();
        if (this.validate_create_posts()) {
            this.getImageTag();
            this.getStrEndDate();
            this.getMoreValues(() => {
                this.api_create_posts();
            });
        }
    }
    loginError(e) {
        console.log(e);
        this.errormessage = e;
        setTimeout(() => {
            this.errormessage = "";
        }, 4000);
    }
    getlatlong(data) {
        var lat = data.lat;
        var lon = data.lon;
        // var options = {
        //   center: { lat: lat, lng: lon },
        //   zoom: this.zoomView,
        //   fullscreenControl: false,
        //   mapTypeControl: false,
        //   streetViewControl: false,
        //   disableDoubleClickZoom: true,
        //   mapTypeControlOptions: {
        //     mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
        //   },
        //   gestureHandling: 'greedy'
        // }
        var initialLocation = new google.maps.LatLng(lat, lon);
        this.map.setCenter(initialLocation);
    }
    SetMapToCurrentLocationEvent() {
        var lat = this.current_lat;
        var lon = this.current_long;
        var initialLocation = new google.maps.LatLng(lat, lon);
        this.map.setCenter(initialLocation);
        this.map.setZoom(16);
    }
    getPostDetails(id) {
        this.ApiService.getProjectPostDetails(id).subscribe((x) => {
            var data = x["data"];
            // console.log(data, "Post Details");
            this.post_images = data.post_images;
            this._albums = [];
            for (let i = 0; i < this.post_images.length; i++) {
                const src = this.post_images[i]["image"];
                const album = {
                    src: src,
                    caption: "",
                    thumb: src,
                };
                this._albums.push(album);
            }
            // console.log(this.post_images)
            this.projectType = data.project_type.type;
            if (data.project_category == null) {
                this.project_category = "";
            }
            else {
                this.project_category = data.project_category.category;
            }
            this.postname = data.name;
            this.created_by = data.created_by_name;
            this.postlocation = data.city + ", " + data.country + " | " + data.year;
            this.description = data.about_post;
            this.created_on = data.created_on;
            this.lat = data.lat;
            this.lon = data.lon;
            this.report_reasons = data.report_reasons;
            this.is_reported = data.is_reported;
            this.total_comments = data.total_comments;
            this.is_liked = data.is_liked;
            this.comments = [];
            var comments = data.comments;
            for (var c = 0; c < comments.length; c++) {
                this.comments.push(comments[c]);
            }
            // console.log(this.comments);
            this.total_likes = data.total_likes;
            this.total_reported = data.total_reported;
            this.total_shares = data.total_shares;
            this.involvements = data.involvements;
            this.involvements_types = data.involvements_types;
            this.involvements_Arraykeys = Object.keys(data.involvements).reverse();
            // console.log(this.involvements_Arraykeys, "involvements_Arraykeys");
        }, (err) => {
            this.toast.error("Something went wrong. Please try after some time");
        });
    }
    reportPost(id) {
        console.log(id);
    }
    copyLink() {
        console.log("");
    }
    likeDislikePost(e) {
        console.log(e);
    }
    navigateOnMap(a, b) {
        console.log(a);
    }
    // manufacture id submit data
    manufactureSubmit(data) {
        this.userDataa = JSON.parse(localStorage.getItem("userData"));
        data["user_id"] = this.userDataa.id;
        console.log(data, "invite data");
        this.ApiService.create_post_invite_user(data).subscribe((response) => {
            console.log(response);
            this.toast.success("Invite post send successfully");
            $("#manufacture").modal("hide");
        }, (error) => console.log(error));
    }
    withoutLogin(e) {
        var value = e.target.name;
        this.nullName = localStorage.getItem("token");
        var abc = localStorage.getItem("token");
        if (abc == null) {
            this.toast.error("Please register to continue");
        }
        else {
            window.open(`/involvement/${value}`, "_blank");
        }
    }
    myprofileClick() {
        var res = $(this).attr("data-id");
        //   this.userDataa = JSON.parse(localStorage.getItem("userData"));
        //  console.log(this.userDataa,"asdffffffffffffffffffff")
        //   if (this.userDataa.name ==  ) {
        //     this.router.navigate(["/my-profile/"]);
        //   } else {
        //     this.router.navigate(["/users-profile/" + this.created_by  ]);
        //   }
    }
    onRightClick() {
        return false;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _service_messaging_service__WEBPACK_IMPORTED_MODULE_9__["MessagingService"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/home/home.component.html"),
        providers: [_service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]],
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/layout/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/layout/involvement/involvement.component.css":
/*!**************************************************************!*\
  !*** ./src/app/layout/involvement/involvement.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cursor{\r\ncursor: pointer;\r\n}\r\n.fw-500-in{\r\n    font-weight: 500;\r\n    font-family: inherit;\r\n}\r\n.dropdown-list[_ngcontent-uja-c3] {\r\n  \r\n    padding: 6px!important;\r\n\r\n}\r\n.multiselect-dropdown .dropdown-btn{\r\n \r\n    padding: 2px!important;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2ludm9sdmVtZW50L2ludm9sdmVtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7QUFHQTs7SUFFSSxzQkFBc0I7O0FBRTFCO0FBRUE7O0lBRUksc0JBQXNCOztBQUUxQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbnZvbHZlbWVudC9pbnZvbHZlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cnNvcntcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5mdy01MDAtaW57XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd24tbGlzdFtfbmdjb250ZW50LXVqYS1jM10ge1xyXG4gIFxyXG4gICAgcGFkZGluZzogNnB4IWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRue1xyXG4gXHJcbiAgICBwYWRkaW5nOiAycHghaW1wb3J0YW50O1xyXG4gIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/involvement/involvement.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/involvement/involvement.component.ts ***!
  \*************************************************************/
/*! exports provided: InvolvementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvolvementComponent", function() { return InvolvementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_6__);








let InvolvementComponent = class InvolvementComponent {
    constructor(api, route, toast, Form, router, _lightbox) {
        this.api = api;
        this.route = route;
        this.toast = toast;
        this.Form = Form;
        this.router = router;
        this._lightbox = _lightbox;
        this._albums = [];
        this.content = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.postDetails = [];
        this.post_images = [];
        this.comments = [];
        this.involvements = [];
        this.allInvolvements = [];
        this.sub_involvements = [];
        this.involvements_Arraykeys = [];
        this.selectedFile = "";
        this.userData = [];
        this.isMarkInv = false;
        this.isFullMarkForm = false;
        this.UserData = [];
        this.userTaggs = [];
        this.userTagsList = [];
        this.userTag = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.record = [];
        this.postDetail = [];
        this.tagsUsername = [];
        this.taggedUsrsList = [];
        // replay from
        this.replayForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
        this.markdata = [];
        this.replayForm = this.Form.group({
            name: "",
        });
    }
    ngOnInit() {
        this.userData = JSON.parse(localStorage.getItem("userData"));
        this.UserData = JSON.parse(localStorage.getItem("userData"));
        console.log(this.userData.profile_type, "line no 77");
        console.log(JSON.parse(localStorage.getItem("userData")).business_type, "line no 85");
        this.businessType = JSON.parse(localStorage.getItem("userData")).business_type;
        console.log(this.businessType, "line non 96");
        if (this.businessType == "3") {
            this.getMarkInvolvement();
        }
        else {
            console.log("no data found");
        }
        this.username =
            localStorage.getItem("userData") != undefined
                ? JSON.parse(localStorage.getItem("userData")).username
                : "";
        console.log(this.username, "55555555555555");
        this.route.params.subscribe((params) => {
            // alert("ram")
            this.post_id = params["post_id"];
            this.userData = this.api.getUserData().company_detail.name;
            console.log(this.userData, "4464646464");
            this.getAuthUsers();
            if (!this.userData) {
                this.toast.error("Please login");
                this.router.navigate(["/home"]);
                return false;
            }
            else {
                if (this.userData.profile_type == "4") {
                    this.toast.error("Please create your profile to see projects");
                    this.router.navigate(["/home"]);
                    return false;
                }
                // $('#likes').modal('show')
            }
            this.getProjectData();
            this.inviteForm = this.Form.group({
                email: [""],
            });
            this.dropdownSettings = {
                singleSelection: true,
                idField: "id",
                textField: "username",
                allowSearchFilter: true,
            };
            //check markinv eligibility
            if (JSON.parse(localStorage.getItem("userData")).profile_type == "2" ||
                JSON.parse(localStorage.getItem("userData")).profile_type == "3") {
                this.isMarkInv = true;
                if (JSON.parse(localStorage.getItem("userData")).business_type == 3 ||
                    JSON.parse(localStorage.getItem("userData")).business_type == 4 ||
                    JSON.parse(localStorage.getItem("userData")).business_type == 5) {
                    this.isMarkInv = true;
                }
                if (JSON.parse(localStorage.getItem("userData")).business_type == 2 ||
                    JSON.parse(localStorage.getItem("userData")).business_type == 4 ||
                    JSON.parse(localStorage.getItem("userData")).business_type == 5) {
                    this.isFullMarkForm = true;
                }
            }
            this.getPostDetails(this.post_id);
        });
        this.markinvolvementForm = this.Form.group({
            involvement_type: "Involvement type",
            element: "",
            material: "",
            link: "",
        });
    }
    openMarkInvDialog() {
        this.markinvolvementForm.reset({
            involvement_type: "Involvement type",
        });
        $("#addpic").val("");
        $("#previewImg").attr("src", "/assets/images/place_image.png");
        $("#involvement").modal("show");
    }
    submitMarkInvolvementForm() {
        //validate all fields
        var element = this.markinvolvementForm.value.element;
        var material = this.markinvolvementForm.value.material;
        var link = this.markinvolvementForm.value.link;
        var involvementType = this.markinvolvementForm.value.involvement_type;
        var picture = this.selectedFile;
        if (!involvementType ||
            involvementType == "" ||
            involvementType == "Involvement type")
            if (!element || element == "") {
                // {
                //   this.markInvError("Pleae select involvement type");
                //   return false;
                // }
                this.markInvError("Please enter keyword for element");
                return false;
            }
        if (!material || material == "") {
            this.markInvError("Please enter keyword for material");
            return false;
        }
        if (this.userData.business_type == 4 || this.userData.business_type == 5) {
            if (!$("#addpic").val() || $("#addpic").val() == null) {
                this.markInvError("Please provide picture");
                return false;
            }
            if (!link || link == "") {
                this.markInvError("Please embed the link with picture");
                return false;
            }
        }
        const data = new FormData();
        data.append("keyword_for_element", element);
        data.append("keyword_for_material", material);
        data.append("enter_link", link),
            data.append("involvement_type", involvementType),
            // data.append("image", picture),
            (this.integerPostId = parseInt(this.post_id));
        data.append("post_id", this.integerPostId),
            console.log(typeof this.integerPostId, "thiks is the type of post id");
        this.api.markInvolvment(data).subscribe((response) => {
            this.toast.success(response["message"]);
            $("#involvement").modal("hide");
            this.getPostDetails(this.post_id);
        }, (err) => {
            this.toast.error("Something went wrong. Please try after some time");
        });
    }
    getPostDetails(id) {
        this.api.getProjectPostDetails(id).subscribe((x) => {
            var data = x["data"];
            this.created_by_name = data.created_by;
            console.log(this.created_by_name, "this is myyyyyyyyyy");
            console.log(data, "Post Details");
            this.post_images = data.post_images;
            this._albums = [];
            for (let i = 0; i < this.post_images.length; i++) {
                const src = this.post_images[i]["image"];
                const album = {
                    src: src,
                    caption: "",
                    thumb: src,
                };
                this._albums.push(album);
                console.log(this._albums, "post detailes from custom side");
            }
            // console.log(this.post_images)
            this.projectType = data.project_type.type;
            if (data.project_category == null) {
                this.project_category = "";
            }
            else {
                this.project_category = "|" + data.project_category.category;
            }
            this.postname = data.name;
            console.log(data, "line 257");
            this.created_by = data.created_by_name;
            this.new_created_by = data.created_by;
            this.postlocation = data.city + ", " + data.country + " | " + data.year;
            this.description = data.about_post;
            this.created_on = data.created_on;
            this.lat = data.lat;
            this.lon = data.lon;
            this.report_reasons = data.report_reasons;
            this.is_reported = data.is_reported;
            this.total_comments = data.total_comments;
            this.is_liked = data.is_liked;
            console.log(this.is_liked, "like like");
            this.comments = [];
            var comments = data.comments;
            for (var c = 0; c < comments.length; c++) {
                this.comments.push(comments[c]);
            }
            console.log(this.comments);
            this.total_likes = data.total_likes;
            this.total_reported = data.total_reported;
            this.total_shares = data.total_shares;
            this.involvements = data.involvements;
            this.involvements_types = data.involvements_types;
            this.involvements_Arraykeys = Object.keys(data.involvements).reverse();
            console.log(this.involvements_Arraykeys, "involvements_Arraykeys");
        }, (err) => {
            this.toast.error("This post is blocked by admin");
        });
    }
    // comment post
    // content = document.getElementById("content");
    commentPost() {
        if (this.content && this.post_id) {
            if (this.content.value == "" || this.content.value == null) {
                this.commentsPostError("This field is required");
                return false;
            }
            this.api
                .commentPost({ post_id: this.post_id, content: this.content.value })
                .subscribe((x) => {
                console.log(x, "this is from submit comment");
                this.comments = [];
                this.getPostDetails(this.post_id);
                this.content.reset();
                this.toast.success(x["message"]);
                // location.reload();
            }, (err) => {
                this.toast.error("Something went wrong. Please try after some time");
            });
        }
    }
    // show image
    showImage(img_url) {
        console.log(img_url);
        $("#my-pic").modal("show");
        $("#show_img").attr("src", img_url);
    }
    // single like button
    likeDislikePost(current_status) {
        this.getPostDetails(this.post_id);
        if (current_status == true) {
            var final_status = false;
        }
        else {
            var final_status = true;
        }
        this.api
            .likePost({
            post_id: this.post_id,
            is_liked: final_status,
        })
            .subscribe((response) => {
            this.getPostDetails(this.post_id);
            this.toast.success(response["message"]);
        }, (err) => {
            this.toast.error("Something went wrong. Please try after some time adafafaf");
        });
    }
    likeDislikeComment(id, current_status) {
        if (current_status == true) {
            var final_status = false;
        }
        else {
            var final_status = true;
        }
        this.api
            .likeComment({
            comment_id: id,
            is_liked: final_status,
        })
            .subscribe((response) => {
            this.getPostDetails(this.post_id);
            this.toast.success(response["message"]);
        }, (err) => {
            this.toast.error("Something went wrong. Please try after some time");
        });
    }
    navigateOnMap(lat, lon) {
        if (navigator.geolocation) {
            // Call getCurrentPosition with success and failure callbacks
            window.navigator.geolocation.getCurrentPosition((data) => {
                var url = "https://maps.google.com/maps?saddr=" +
                    data.coords.latitude +
                    "," +
                    data.coords.longitude +
                    "&daddr=" +
                    lat +
                    "," +
                    lon;
                window.open(url, "_blank", "location=yes");
            }, (error) => {
                this.toast.error("Unable to access your current location Because you blocked it.");
            });
        }
        else {
            this.toast.error("Sorry, your browser does not support geolocation services.");
        }
    }
    commentsPostError(e) {
        console.log(e);
        this.errormessage = e;
        setTimeout(() => {
            this.errormessage = "";
        }, 4000);
    }
    markInvError(e) {
        console.log(e);
        this.errormessage = e;
        setTimeout(() => {
            this.errormessage = "";
        }, 4000);
    }
    CheckUploadedImage(event) {
        var file = event.target.files[0];
        var fileType = file["type"];
        var validImageTypes = ["image/gif", "image/jpeg", "image/png"];
        if ($.inArray(fileType, validImageTypes) < 0) {
            this.markInvError("Whoops! That is not an image!");
            $("#addpic").val("");
            $("#previewImg").attr("src", "/assets/images/place_image.png");
        }
        else {
            var singleFiles = event.target.files;
            if (singleFiles) {
                for (let file of singleFiles) {
                    let singleReader = new FileReader();
                    singleReader.onload = (e) => {
                        $("#previewImg").attr("src", e.target.result);
                    };
                    singleReader.readAsDataURL(file);
                }
            }
            this.selectedFile = file;
        }
    }
    reportPost(id) {
        console.log(id);
        this.api
            .reportPost({
            post_id: this.post_id,
            reason_id: id,
        })
            .subscribe((response) => {
            this.is_reported = true;
            this.toast.success(response["message"]);
        }, (err) => {
            this.toast.error("Something went wrong. Please try after some time");
        });
    }
    copyLink() {
        var copyText = "https://insite.city/my-profile/involvement/" + this.post_id;
        var input = document.createElement("input");
        input.setAttribute("value", copyText);
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand("copy");
        document.body.removeChild(input);
        this.toast.success("Link copied");
    }
    open(index) {
        // open lightbox
        this._lightbox.open(this._albums, index);
    }
    close() {
        // close lightbox programmatically
        this._lightbox.close();
    }
    getName(data) {
        if (data == this.username) {
            this.router.navigate(["/my-profile"]);
        }
        else {
            this.router.navigate(["/users-profile/" + data]);
        }
    }
    invite() {
        let post_id = parseInt(this.post_id);
        const postData = new FormData();
        postData.append("user_id", this.userId);
        postData.append("post_id", this.post_id);
        if (this.inviteForm.value.email != "")
            postData.append("email_id", this.inviteForm.value.email);
        this.api.inviteuser(postData).subscribe((a) => {
            this.inviteResponse = a["response"];
            this.toast.success("sucessfull");
            console.log(this.inviteResponse, "inviteResponse");
        }, (error) => {
            this.toast.error(error.error.message);
            console.log(error.error.message, "errorMessage");
        });
    }
    onItemSelect(item) {
        this.userId = item.id;
        console.log(this.userId, " selected Item");
    }
    removePost() {
        let dataTosend = {
            post_id: this.post_id,
            sure_delete: true,
        };
        this.api.removepost(dataTosend).subscribe((res) => {
            this.removePostResponse = res["message"];
            console.log(this.removePostResponse);
            this.router.navigate(["/my-profile"]);
        }, (error) => {
            this.toast.error(error.error.message);
        });
    }
    getProjectData() {
        this.api.getProjectDetails(this.post_id).subscribe((res) => {
            this.ProjectData = res["data"];
            this.postDetail = this.ProjectData;
            this.new1_created_by = this.ProjectData.created_by;
            this.createdByuser = this.ProjectData.created_by_user;
            console.log(this.ProjectData, "True False line 627");
        });
    }
    navigateProfile() {
        if (this.new_created_by == this.username) {
            this.router.navigate(["/my-profile/"]);
        }
        else {
            this.router.navigate(["/users-profile/" + this.new1_created_by]);
        }
    }
    getAuthUsers() {
        this.taggedUsers;
        this.api.getAllauthuser().subscribe((x) => {
            this.taggedUsrsList = x["data"];
            console.log(this.taggedUsrsList, "taggedUsersList");
        });
    }
    selectedTags(data) {
        this.selectedTagsss = data.id;
        console.log(this.selectedTagsss, "selectedTagsss");
    }
    get name() {
        return this.replayForm.get("name");
    }
    replySubmit(result) {
        console.log(result);
    }
    getMarkInvolvement() {
        this.api.getInvolvement().subscribe((x) => {
            console.log(x, "******************************************************");
            this.markdata = x["data"];
        });
    }
};
InvolvementComponent.ctorParameters = () => [
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_6__["Lightbox"] }
];
InvolvementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-involvement",
        template: __webpack_require__(/*! raw-loader!./involvement.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/involvement/involvement.component.html"),
        styles: [__webpack_require__(/*! ./involvement.component.css */ "./src/app/layout/involvement/involvement.component.css")]
    })
], InvolvementComponent);



/***/ }),

/***/ "./src/app/layout/legal-policy/legal-policy.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/legal-policy/legal-policy.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sZWdhbC1wb2xpY3kvbGVnYWwtcG9saWN5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/legal-policy/legal-policy.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/legal-policy/legal-policy.component.ts ***!
  \***************************************************************/
/*! exports provided: LegalPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalPolicyComponent", function() { return LegalPolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LegalPolicyComponent = class LegalPolicyComponent {
    constructor() { }
    ngOnInit() {
    }
};
LegalPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-legal-policy',
        template: __webpack_require__(/*! raw-loader!./legal-policy.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/legal-policy/legal-policy.component.html"),
        styles: [__webpack_require__(/*! ./legal-policy.component.css */ "./src/app/layout/legal-policy/legal-policy.component.css")]
    })
], LegalPolicyComponent);



/***/ }),

/***/ "./src/app/layout/mark-involvement-gallery/mark-involvement-gallery.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/mark-involvement-gallery/mark-involvement-gallery.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYXJrLWludm9sdmVtZW50LWdhbGxlcnkvbWFyay1pbnZvbHZlbWVudC1nYWxsZXJ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/mark-involvement-gallery/mark-involvement-gallery.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/mark-involvement-gallery/mark-involvement-gallery.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MarkInvolvementGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkInvolvementGalleryComponent", function() { return MarkInvolvementGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let MarkInvolvementGalleryComponent = class MarkInvolvementGalleryComponent {
    constructor(route, api, toast, Form, router, http) {
        this.route = route;
        this.api = api;
        this.toast = toast;
        this.Form = Form;
        this.router = router;
        this.http = http;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["COMMA"]];
        this.otherOption = false;
        this.taggs = [];
        this.tagsList = [];
        this.new_tag = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.imageId = [];
        this.mytags = "";
        this.sendingtags = [];
        this.selectedImages = [];
        this.base64Image = [];
        this.image_Id = [];
        this.imageTags = [];
        this.project_typeData = [];
    }
    ngOnInit() {
        this.route.params.subscribe((data) => {
            console.log(data, "datassss");
            this.userId = data["post_id"];
            console.log(this.userId, "hhh");
        });
        this.getPostDetails();
        console.log(this.country, "ccccc");
        this.load_create_posts();
        this.editForm = this.Form.group({
            name: [""],
            tags: [""],
            projectType: [""],
            projectCategory: [""],
            image: [""],
            description: [""],
            country: [""],
            year: [""],
            city: [""],
            likes: [""],
            comment: [""],
            share: [""],
        });
        var imagesPreview = function (input, placeToInsertImagePreview) {
            if (input.files) {
                var filesAmount = input.files.length;
                var i;
                for (i = 0; i < filesAmount; i++) {
                    var reader, target;
                    reader = new FileReader();
                    reader.onload = function (event) {
                        var html = $('<li class="marks"><a href="JavaScript:void(0);" data-toggle="modal" data-target="#my-pic"><img src=' +
                            event.target.result +
                            '></a><button  class="remove-pic">&#10006;</button><label class="d-block"><input type="radio" name="select-pic"><span class="btn-gray btn-block"></span></label></li>');
                        $(html).appendTo(placeToInsertImagePreview);
                        $(".remove-pic").click(function () {
                            $(this).closest("li").remove();
                        });
                    };
                    reader.readAsDataURL(input.files[i]);
                }
            }
        };
        $("#multiImageSelet").on("change", function () {
            imagesPreview(this, "ul.pictures");
        });
        this.new_tag.valueChanges.subscribe((val) => {
            this.message = val;
            this.tagsList = [];
            this.api.getTagsList(this.message).subscribe((x) => {
                if (val != "") {
                    var data = x["data"];
                    console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        this.d = data[i].tag;
                        this.tagsList.push(this.d);
                    }
                }
                else {
                    this.tagsList = [];
                }
            });
        });
    }
    saveTag() {
        $("#mtChip").value = "";
    }
    getProjectData() {
        this.api.getProjectDetails(this.userId).subscribe((res) => {
            this.ProjectData = res["data"];
            console.log(this.ProjectData, "Post Data");
        });
    }
    getPostDetails() {
        this.api.getProjectPostDetails(this.userId).subscribe((x) => {
            var data = x["data"];
            console.log(data, "Post Details");
            this.post_images = data.post_images;
            console.log(this.post_images, "line");
            this.wholeData = data;
            this._albums = [];
            var self = this;
            for (let i = 0; i < this.post_images.length; i++) {
                const src = this.post_images[i]["image"];
                var sd = 0;
                // var html = $('<li class="marks"><a href="JavaScript:void(0);" data-toggle="modal" data-target="#my-pic"><img class="imageToZoom" src=' + src + '></a> <button  class="remove-pic' + i + '">&#10006;</button><label class="d-block"><input type="radio" name="select-pic"><input type="text" value=>' + this.post_images[i]['image_tag'] + '</label></li>');
                // var html = $('<li class="marks"><a href="JavaScript:void(0);" data-toggle="modal" data-target="#my-pic"><img class="imageToZoom" src=' + src + '></a> <button  class="remove-pic' + i + '">&#10006;</button><label class="d-block"><input type="text" [(ngModel)]=' + this.post_images[i]['image_tags'] + '></label></li>');
                // $(html).appendTo('ul.pictures');
                $(".remove-pic" + i).click(function () {
                    $(this).closest("li").remove();
                    self.imageId.push(self.post_images[i]["id"]);
                    console.log(self.imageId);
                });
                const album = {
                    src: src,
                    caption: "",
                    thumb: src,
                };
                this._albums.push(album);
                console.log(this._albums);
            }
            let images = document.getElementsByClassName("imageToZoom");
            for (var i = 0; i < images.length; i++) {
                images[i].addEventListener("click", (event) => {
                    $("#zoomedImage").prop("src", $(event.target).prop("src"));
                });
            }
            // console.log(this.post_images)
            this.projectType = data.project_type.type;
            if (data.project_category == null) {
                this.project_category = "";
            }
            else {
                this.project_category = data.project_category.category;
            }
            this.postname = data.name;
            this.city = data.city;
            this.country = data.country;
            this.year = data.year;
            console.log(this.year);
            this.postlocation = data.city + ", " + data.country + " | " + data.year;
            this.description = data.about_post;
            this.created_on = data.created_on_at;
            this.lat = data.lat;
            this.lon = data.lon;
            this.report_reasons = data.report_reasons;
            this.is_reported = data.is_reported;
            this.tags = data.tags;
            console.log(this.tags, "tagssggg");
            this.total_comments = data.total_comments;
            this.is_liked = data.total_likes;
            for (let i = 0; i < this.tags.length; i++) {
                this.taggs[i] = { name: this.tags[i].tag };
                console.log(this.tags[i].tag);
            }
            this.comments = [];
            var comments = data.comments;
            for (var c = 0; c < comments.length; c++) {
                this.comments.push(comments[c]);
            }
            console.log(this.comments);
            this.total_likes = data.total_likes;
            this.total_reported = data.total_reported;
            this.total_shares = data.total_shares;
            this.involvements = data.involvements;
            this.involvements_types = data.involvements_types;
            this.involvements_Arraykeys = Object.keys(data.involvements).reverse();
            console.log(this.involvements_Arraykeys, "involvements_Arraykeys");
            for (var i = 0; i < this.tags.length; i++) {
                this.mytags = this.tags[i].tag + ",";
            }
            console.log(`projectCategory ${this.project_category}`);
            this.editForm.patchValue({
                name: this.postname,
                // tags: this.mytags,
                // image: this._albums,
                projectType: this.projectType,
                projectCategory: this.project_category,
                description: this.description,
                country: this.country,
                year: this.year,
                // createdOn: this.created_on,
                city: this.city,
                likes: this.total_likes,
                comment: this.total_comments,
                share: this.total_shares,
            });
            this.formatDate(this.created_on);
        }, (err) => {
            this.toast.error("Something went wrong. Please try after some time");
        });
    }
    // Add tags
    // imgget(img){
    //   this.imgmodal = img
    //   console.log(this.imgmodal)
    // }
    addTag(event) {
        var tagName = event.target.textContent;
        let flag = false;
        for (var i = 0; i < this.taggs.length; i++) {
            if (this.taggs[i].name == tagName) {
                flag = true;
                break;
            }
            else {
                flag = false;
            }
        }
        if (flag) {
            this.toast.error("Tag already inserted");
        }
        else {
            this.taggs.push({ name: tagName });
            var index = this.tagsList.indexOf(event.target.textContent);
            if (index > -1) {
                this.tagsList.splice(index, 1);
            }
        }
    }
    onEnter() {
        let flag = false;
        if (this.message.length > 3 && this.message != "") {
            for (var i = 0; i < this.taggs.length; i++) {
                if (this.taggs[i].name == this.message) {
                    flag = true;
                    break;
                }
                else {
                    flag = false;
                }
            }
            if (flag) {
                this.toast.error("Tag already inserted");
            }
            else {
                this.taggs.push({ name: this.message });
                this.new_tag.setValue("");
            }
        }
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        if (input) {
            input.value = "";
        }
    }
    remove(tagg) {
        const index = this.taggs.indexOf(tagg);
        if (index >= 0) {
            this.taggs.splice(index, 1);
            if (this.tagsList.includes(tagg.name)) {
                return;
            }
            else {
                this.tagsList.push(tagg.name);
            }
        }
    }
    getTags() {
        for (var i of this.taggs) {
            this.sendingtags.push(i.name);
        }
    }
    chooseImage(event) {
        var that = this;
        this.otherOption = true;
        for (let i = 0; i < event.target.files.length; i++) {
            let img = event.target.files[i];
            const reader = new FileReader();
            reader.onload = function () {
                that.base64Image.push(reader.result);
            };
            reader.readAsDataURL(img);
            this.selectedImages.push(img);
        }
        let file = event.target.files[0];
        var that = this;
        const reader = new FileReader();
        reader.onload = function () {
            that.base64Image.push(reader.result);
        };
        reader.readAsDataURL(event.target.files[0]);
        this.selectedImages.push(event.target.files[0]);
    }
    getImageTag() {
        for (var i = 0; i < this.base64Image.length; i++) {
            this.imageTags.push($("#imgTag" + i).val());
        }
        // console.log(this.imageTags)
    }
    removeImage(img, index) {
        this.image_Id = img.id;
        // alert(this.image_Id);
        console.log(this.image_Id, "image data ");
        this.api.deletePostImage(img).subscribe((res) => {
            console.log(res, "delete image form api");
            this.imageId.splice(index, 1);
            this.toast.success("Image submit successfully");
            // window.location.reload()
            this.post_images.splice(img, 1);
            console.log(this.post_images, "line no 396");
        }, (error) => {
            this.toast.error("image not delete");
        });
        // this.image_Id.splice(img.id, 1);
        // this.imageTags.splice(img.id, 1);
        // this.selectedImages.splice(img.id, 1);
        // if (this.selectedImages.length == 1) {
        //   this.otherOption = true;
        // }
    }
    formatDate(date) {
        var d = new Date(date), month = "" + (d.getMonth() + 1), day = "" + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = "0" + month;
        if (day.length < 2)
            day = "0" + day;
        this.FinalDate = [year, month, day].join("-");
        console.log(date, "dd");
        console.log(this.FinalDate, "finalDate");
    }
    editPost() {
        this.getTags();
        const editData = new FormData();
        editData.append("name", this.editForm.value.name);
        editData.append("tags", this.sendingtags.toString()),
            editData.append("about_post", this.editForm.value.description);
        editData.append("project_type", this.wholeData.project_type["id"]);
        if (this.wholeData.project_category == null) {
            editData.append("project_category", "");
        }
        else {
            editData.append("project_category", this.wholeData.project_category["id"]);
        }
        editData.append("year", this.editForm.value.year);
        console.log(editData.append("year", this.editForm.value.year), "7878787878787878787878787");
        editData.append("lat", this.wholeData.lat);
        editData.append("lon", this.wholeData.lon);
        editData.append("taged_users", this.wholeData.lon);
        console.log(editData.append("taged_users", this.wholeData.lon), "7878787878787878787878787");
        this.selectedImages.map((img) => {
            editData.append("images", img);
        });
        editData.append("image_tag", this.imageTags.toString());
        editData.append("created_by_name", this.editForm.value.companyName);
        editData.append("t_type_end_date", this.wholeData.t_type_end_date);
        editData.append("t_type_start_date", this.wholeData.t_type_start_date);
        editData.append("country", this.wholeData.country);
        editData.append("city", this.wholeData.city);
        editData.append("zip_code", this.wholeData.zip_code);
        editData.append("street", this.wholeData.street);
        editData.append("user_id", this.wholeData.id);
        editData.append("deleted_images", this.imageId.toString());
        console.log(editData);
        this.api.editpost(editData, this.userId).subscribe((res) => {
            this.toast.success("Edit Successfull");
            setTimeout(() => {
                window.history.back();
            }, 500);
        }, (error) => {
            this.toast.error(error.error.message, "please try again");
        });
    }
    getName(data) {
        this.router.navigate(["/users-profile/" + data]);
    }
    load_create_posts() {
        this.api_get_project_type();
        this.api_get_project_category();
    }
    api_get_project_type() {
        this.api.getProjectType().subscribe((response) => {
            this.project_typeData = response["data"];
        }, (error) => {
            console.log("error", error);
        });
    }
    api_get_project_category() {
        this.api.getProjectCategory().subscribe((response) => {
            this.project_categoryData = Object.values(response.data);
        }, (error) => {
            console.log("error", error);
        });
    }
    getType() {
        var id = $("#selType :selected").val();
        for (var i of this.project_typeData) {
            if (i.id == id) {
                var checkType = i.is_t_type;
                this.starType = i.is_star_type;
                // console.log(this.starType)
            }
        }
        if (checkType == true) {
            this.typ = 1;
        }
        else {
            this.typ = 0;
        }
        if (this.starType == false) {
            this.hideCat = 1;
        }
        else {
            this.hideCat = 0;
        }
    }
};
MarkInvolvementGalleryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
MarkInvolvementGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-mark-involvement-gallery",
        template: __webpack_require__(/*! raw-loader!./mark-involvement-gallery.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/mark-involvement-gallery/mark-involvement-gallery.component.html"),
        styles: [__webpack_require__(/*! ./mark-involvement-gallery.component.css */ "./src/app/layout/mark-involvement-gallery/mark-involvement-gallery.component.css")]
    })
], MarkInvolvementGalleryComponent);



/***/ }),

/***/ "./src/app/layout/my-profile/my-profile.component.css":
/*!************************************************************!*\
  !*** ./src/app/layout/my-profile/my-profile.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ccode *{\r\n display: block;\r\n}\r\n\r\n\r\n.map-rel{\r\n    position: relative;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: flex;\r\n  }\r\n\r\n\r\n.map-absol{\r\n    position: absolute;\r\n    background: transparent;\r\n    border: none;\r\n  }\r\n\r\n\r\n.map-absol img{\r\n    width: 28px;\r\n  }\r\n\r\n\r\n/* =========================== */\r\n\r\n\r\n#main #faq .card {\r\n  margin-bottom: 30px;\r\n  border: 0;\r\n}\r\n\r\n\r\n#main #faq .card .card-header {\r\n  border: 0;\r\n  border-radius: 2px;\r\n  padding: 0;\r\n}\r\n\r\n\r\n#main #faq .card .card-header .btn-header-link {\r\n  color: #fff;\r\n  display: block;\r\n  text-align: left;\r\n  color: #222;\r\n  padding: 14px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n#main #faq .card .card-header .btn-header-link.collapsed {\r\n  color: rgb(0, 0, 0);\r\n}\r\n\r\n\r\n.btn.focus, .btn:focus {\r\n  outline: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n\r\n.card-header {\r\n  background-color: transparent;\r\n}\r\n\r\n\r\n#main #faq .card .collapse {\r\n  border: 0;\r\n}\r\n\r\n\r\n#main #faq .card .collapse.show {\r\n  line-height: 30px;\r\n  color: #222;\r\n}\r\n\r\n\r\n.accordion_card_title{\r\n    text-align: start;\r\n}\r\n\r\n\r\n.accordion_card_title p {\r\n  color: #222;\r\n  font-size: 14px!important;\r\n}\r\n\r\n\r\n.card .card-body {\r\n  border-left: 0;\r\n  border-right: 0;\r\n}\r\n\r\n\r\n.card {\r\n\r\n  background-color: transparent!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L215LXByb2ZpbGUvbXktcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsY0FBYztBQUNmOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsb0JBQWE7SUFBYixhQUFhO0VBQ2Y7OztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7OztBQUNBO0lBQ0UsV0FBVztFQUNiOzs7QUFJRixnQ0FBZ0M7OztBQUdoQztFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7OztBQUVBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7O0FBSUE7RUFDRSxtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7O0FBR0E7RUFDRSw2QkFBNkI7QUFDL0I7OztBQUNBO0VBQ0UsU0FBUztBQUNYOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7OztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7OztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7OztBQUVBOztFQUVFLHVDQUF1QztBQUN6QyIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jY29kZSAqe1xyXG4gZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG4ubWFwLXJlbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5tYXAtYWJzb2x7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgLm1hcC1hYnNvbCBpbWd7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICB9XHJcblxyXG5cclxuICBcclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5cclxuI21haW4gI2ZhcSAuY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbiNtYWluICNmYXEgLmNhcmQgLmNhcmQtaGVhZGVyIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbiNtYWluICNmYXEgLmNhcmQgLmNhcmQtaGVhZGVyIC5idG4taGVhZGVyLWxpbmsge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgcGFkZGluZzogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5cclxuXHJcbiNtYWluICNmYXEgLmNhcmQgLmNhcmQtaGVhZGVyIC5idG4taGVhZGVyLWxpbmsuY29sbGFwc2VkIHtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4uYnRuLmZvY3VzLCAuYnRuOmZvY3VzIHtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbiNtYWluICNmYXEgLmNhcmQgLmNvbGxhcHNlIHtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbiNtYWluICNmYXEgLmNhcmQgLmNvbGxhcHNlLnNob3cge1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGNvbG9yOiAjMjIyO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uX2NhcmRfdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxufVxyXG5cclxuLmFjY29yZGlvbl9jYXJkX3RpdGxlIHAge1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQgLmNhcmQtYm9keSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/my-profile/my-profile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/my-profile/my-profile.component.ts ***!
  \***********************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");






let MyProfileComponent = class MyProfileComponent {
    constructor(api, Toast, fb) {
        this.api = api;
        this.Toast = Toast;
        this.fb = fb;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        this.colleagues = [];
        this.projectdata = [];
        this.submitted = false;
        this.userTag = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.tagsList = [];
        this.userTagsList = [];
        this.userTaggs = [];
        this.checkToshow = true;
        this.project_categoryData = [];
        this.loc = { lat: 28.60986453001585, lng: 77.3846419721832 };
        this.loc2 = { lat: 28.854161458374126, lng: 77.33640512525938 };
        this.username = localStorage.getItem("userData") != undefined
            ? JSON.parse(localStorage.getItem("userData")).username
            : "";
        this.user_id = localStorage.getItem("userData") != undefined
            ? JSON.parse(localStorage.getItem("userData")).id
            : "";
        this.sendingtags = [];
        this.project_typeData = [];
        this.otherOption = false;
        this.postImageTag = "Enter Credit";
        this.selectedImages = [];
        this.imageTags = [];
        this.sendingUsertags = [];
        this.new_tag = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
    }
    ngOnInit() {
        this.userName =
            localStorage.getItem("userData") != undefined
                ? JSON.parse(localStorage.getItem("userData")).username
                : "";
        this.errormessage = "";
        this.submitted = false;
        this.colleagueForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            // mobile_number: new FormControl(''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
        });
        this.api_get_project_type();
        this.api_get_project_category();
        this.postForm = this.fb.group({
            name: "",
            project_type: "Select Project Type",
            project_category: "Select Project Category",
            year: "",
            t_type_start_date: "",
            t_type_end_date: "",
            tags: "",
            about_post: "",
            images: null,
        });
        setTimeout(() => {
            $(".colleague-profile> ul> li")
                .on("click", function () {
                $(this).find(".colleague-details").slideToggle("slow");
                $(this)
                    .find("span>i")
                    .toggleClass("fa fa-caret-down")
                    .toggleClass("fa fa-caret-up");
            })
                .on("dblclick", function () {
                $(this).find(".back-dark").toggleClass("add-gray");
                $(this).find(".com").toggleClass("hide-me").toggleClass("show-me");
                $(this)
                    .find(".btn-delete")
                    .toggleClass("hide-me")
                    .toggleClass("show-me");
            });
        }, 500);
        this.getProject();
        this.getColleagues();
        this.getProfileData();
        this.postFollow();
        this.userTag.valueChanges.subscribe((val) => {
            this.taggedUsers = val;
            this.userTagsList = [];
            this.api.getauthuser(this.taggedUsers).subscribe((x) => {
                if (val != "") {
                    var data = x["data"];
                    for (var i = 0; i < data.length; i++) {
                        this.userTagsList.push(data[i]);
                    }
                }
                else {
                    this.userTagsList = [];
                }
            });
        });
        if (JSON.parse(localStorage.getItem("profile_type")) == "1") {
            this.checkToshow = false;
        }
        else {
            this.checkToshow = true;
        }
    }
    initMap(searchzoomView) {
        //
        this.zoomView = 16;
        if (searchzoomView != "") {
            this.zoomView = searchzoomView;
        }
        // console.log(this.current_lat);
        // console.log(this.current_long);
        // console.log(this.current_postion)
        var that = this;
        var options = {
            // center: { lat: 28.6056448, lng: 70.38982399999999 },
            center: { lat: this.current_lat, lng: this.current_long },
            zoom: this.zoomView,
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            disableDoubleClickZoom: true,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, "tehgrayz"],
            },
            gestureHandling: "greedy",
        };
        var options1 = {
            // center: { lat: 28.6056448, lng: 70.38982399999999 },
            center: { lat: this.cur_lat, lng: this.cur_lng },
            zoom: this.zoomView,
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            disableDoubleClickZoom: true,
            gestureHandling: "greedy",
        };
        var options2 = {
            // center: { lat: 28.6056448, lng: 70.38982399999999 },
            center: { lat: this.cur_lat, lng: this.cur_lng },
            zoom: this.zoomView,
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            disableDoubleClickZoom: true,
            gestureHandling: "greedy",
        };
        this.map = new google.maps.Map(document.getElementById("map"), options);
        this.map1.addListener("click", (mapsMouseEvent) => {
            var lat = mapsMouseEvent.latLng.toJSON().lat;
            var lng = mapsMouseEvent.latLng.toJSON().lng;
            $("#map-lat").val(lat);
            $("#map-lon").val(lng);
            var latlng = mapsMouseEvent.latLng;
            marker1.setPosition(latlng);
            localStorage.setItem("newCompanyMapLat", lat);
            localStorage.setItem("newCompanyMapLng", lng);
            this.map1.marker.infowindow.close();
        });
        // var marker = new google.maps.Marker({
        //   position: { lat: this.cur_lat, lng: this.cur_lng },
        //   map: this.map,
        //   draggable: true,
        // });
        var marker1 = new google.maps.Marker({
            position: { lat: this.cur_lat, lng: this.cur_lng },
            map: this.map1,
            draggable: false,
        });
        this.createPostMap = new google.maps.Map(document.getElementById("create_post_map"), options);
        this.create_company_profile = new google.maps.Map(document.getElementById("create_company_profile"), options2);
        // this.locate_marker_on_map(this.loc , this.createPostMap)
        // this.setMapToCurrentLocation(this.map)
        this.locate_marker_on_map(this.loc, this.map);
        // console.log(current_lat,current_long)
        this.locate_marker_on_map2(this.loc, this.create_company_profile);
        // by default lo lon for address
        $("#map-lat").val(this.loc.lat);
        $("#map-lon").val(this.loc.lng);
        google.maps.event.addListener(this.post_marker2, "dragend", function () {
            // console.log(this.getPosition().lat(), this.getPosition().lng())
            var lat = this.post_marker2.getPosition().lat();
            var lng = this.post_marker2.getPosition().lng();
            alert(lat);
            $("#map-lat").val(lat);
            $("#map-lon").val(lng);
            this.fav = 0;
        });
        var that = this;
        google.maps.event.addListener(this.map, "click", function (event) {
            that.infowindow.close();
        });
        // click on map event listner
        google.maps.event.addListener(this.map, "dblclick", function (event) {
            if (that.api.checkIsLogin()) {
                // console.log(that.ApiService.getUserData().is_profile_created)
                if (!that.api.getUserData().is_profile_created) {
                    that.Toast.error("Please create profile first");
                    $("#create-profile").modal("show");
                    return false;
                }
            }
            else {
                that.Toast.error("Please login");
                $("#login").modal("show");
                return false;
            }
            this.clicked_location_lat = event.latLng.lat();
            this.clicked_location_lng = event.latLng.lng();
            $("#involvement").modal("show");
            // set clicked location with marker on model
            that.createPostMap.setCenter({
                lat: this.clicked_location_lat,
                lng: this.clicked_location_lng,
            });
            // clear previous marker
            // that.post_marker.setPosition({ lat: this.clicked_location_lat, lng: this.clicked_location_lng });
            $("#map-lat").val(event.latLng.lat());
            $("#map-lon").val(event.latLng.lng());
        });
        var mapType = new google.maps.StyledMapType(this.stylez, {
            name: "Grayscale",
        });
        this.map.mapTypes.set("tehgrayz", mapType);
        this.map.setMapTypeId("tehgrayz");
        this.createPostMap.mapTypes.set("tehgrayz", mapType);
        this.createPostMap.setMapTypeId("tehgrayz");
        this.create_company_profile.mapTypes.set("tehgrayz", mapType);
        this.create_company_profile.setMapTypeId("tehgrayz");
    }
    locate_marker_on_map(location, map) {
        this.post_marker = new google.maps.Marker({
            // position: location,
            // map: map,
            animation: google.maps.Animation.DROP,
            title: "Post location",
        });
    }
    locate_marker_on_map2(location, map) {
        this.post_marker2 = new google.maps.Marker({
            position: { lat: this.cur_lat, lng: this.cur_lng },
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            title: "Post location",
        });
    }
    getColleagues() {
        this.api.getColleaguesProfiles().subscribe((x) => {
            console.log(x["data"].colleague_accounts, "get colleagues data form");
            this.colleagues = x["data"].colleague_accounts;
        });
    }
    getNumber(obj) {
        var numb = this.colleagueForm.value.mobile_number.length;
        this.country_code = obj.slice(0, -numb);
    }
    telInputObject(obj) {
        console.log(obj);
        obj.setCountry("in");
    }
    hasError(obj) {
        console.log(obj);
    }
    onCountryChange(obj) {
        console.log(obj);
    }
    validateForm() {
        var username = this.colleagueForm.value.username;
        // var mobile_number = this.colleagueForm.value.mobile_number
        var email = this.colleagueForm.value.email;
        var password = this.colleagueForm.value.password;
        // var country_code = this.country_code
        console.log(this.colleagueForm.value.username);
        console.log(this.colleagueForm.value.email);
        console.log(this.colleagueForm.value.password);
        if (username == "") {
            this.errormessage = "Please Enter Username";
            return false;
        }
        if (email == "") {
            this.errormessage = "Please Enter Email";
            return false;
        }
        // if(mobile_number == '' ){
        //   this.errormessage = "Please Enter Mobile number"
        //   return false;
        // }
        // if (mobile_number.length != 10) {
        //   this.errormessage = 'Mobile number must be of 10 characters';
        //   return false;
        // }
        if (password == "") {
            this.errormessage = "Please Enter Password";
            return false;
        }
        // if(country_code == ''){
        //   this.errormessage = "Please Enter Country code"
        //   return false;
        // }
        return true;
    }
    createColleague(colleagueData) {
        this.submitted = true;
        if (this.validateForm() == true) {
            this.api.createColleaguesProfiles(colleagueData).subscribe((x) => {
                this.Toast.success("success", x["message"]);
                console.log(x["message"]);
                $("#add-colleague").modal("hide");
                setTimeout(() => {
                    window.location.reload();
                    this.getColleagues();
                }, 500);
            }, (err) => {
                console.log(err.error.message);
                this.Toast.error("error", err.error.message);
            });
        }
        console.log(colleagueData);
    }
    getColleagueId(id) {
        console.log(id, "jfksnsojdzn");
        this.colleague_id = id;
        this.deleteColleague();
    }
    deleteColleague() {
        this.api.deleteColleaguesProfiles({ id: this.colleague_id }).subscribe((x) => {
            this.Toast.success("Success", x["message"]);
            $("#delete").modal("hide");
            setTimeout(() => {
                window.location.reload();
                this.getColleagues();
            }, 500);
        }, (err) => {
            console.log(err);
        });
    }
    getProfileData() {
        this.api.getProfileData(this.username).subscribe((d) => {
            this.profiledata = d["data"];
            console.log(this.profiledata, "Profile Data");
            this.socialLinks1 = this.profiledata.social_links[1];
            if (this.profiledata.company_detail) {
                this.showName = this.profiledata.company_detail["name"];
            }
            else {
                this.showName = this.profiledata.name;
            }
            this.socialLinks2 = this.profiledata.social_links[2];
            this.socialLinks3 = this.profiledata.social_links[3];
            this.socialLinks4 = this.profiledata.social_links[4];
            console.log(this.username, "userName");
            if (this.profiledata.profile_type == 1)
                this.profiledata.profile_type = "Personal";
            else if (this.profiledata.profile_type == 2)
                this.profiledata.profile_type = "Company";
            else if (this.profiledata.profile_type == 2)
                this.profiledata.profile_type = "Company colleague";
            this.companyname = this.profiledata
                ? this.profiledata.company_detail
                    ? this.profiledata.company_detail["name"]
                    : ""
                : "";
        }, (err) => {
            console.log(err);
        });
    }
    openLink(data) {
        // alert(data);
        // console.log(data)
        window.open(data);
    }
    getProject() {
        this.api.getProjectData(this.username).subscribe((d) => {
            this.projectdata = d["data"];
            console.log(this.projectdata, "projectdata");
        }, (err) => {
            console.log(err);
        });
    }
    postFollow() {
        this.api.getfollowunfollow(this.user_id).subscribe((d) => {
            this.followdata = d["data"];
            console.log(this.followdata, "followdata");
            this.followdata.followed == true ? 1 : 0;
        }, (err) => {
            console.log(err);
        });
    }
    addUserTag(user) {
        var userName = user.username;
        let flag = false;
        for (var i = 0; i < this.userTaggs.length; i++) {
            if (this.userTaggs[i].username == userName) {
                flag = true;
                break;
            }
            else {
                flag = false;
            }
        }
        if (flag) {
            this.Toast.error("Tag already inserted");
        }
        else {
            this.userTaggs.push(user);
            var index = this.userTagsList.indexOf(user.username);
            if (index > -1) {
                this.userTagsList.splice(index, 1);
            }
        }
    }
    getTags() {
        for (var i of this.taggs) {
            this.sendingtags.push(i.name);
        }
        for (var j in this.userTaggs) {
            this.sendingUsertags.push(this.userTaggs[j].id);
            // console.log(this.sendingUsertags)
        }
    }
    invite() {
        this.getTags();
        // let a =  this.sendingtags.map((item)=>{
        //  return item.toString()
        // })
        const postData = new FormData();
        postData.append("user_id", this.sendingtags);
        console.log(JSON.stringify(postData), "postData");
        this.api.inviteuser(postData).subscribe((a) => {
            this.inviteResponse = a["response"];
            this.Toast.success("sucessfull");
            console.log(this.inviteResponse, "inviteResponse");
        }, (error) => {
            this.Toast.error(error.error.message);
            console.log(error.error.message, "errorMessage");
        });
    }
    api_get_project_type() {
        this.api.getProjectType().subscribe((response) => {
            this.project_typeData = response["data"];
            console.log(this.project_typeData, "999999999999999999999999999");
        }, (error) => {
            console.log("error", error);
            this.Toast.error(error.error.message);
        });
    }
    getMoreValues(callback) {
        this.latitude = $("#map-lat").val();
        this.longitude = $("#map-lon").val();
        this.api
            .getAddressNew({
            lat: this.latitude,
            lon: this.longitude,
        })
            .subscribe((res) => {
            console.log("===========1846===========", res["results"][0].address_components);
            console.log(res, "Whole data");
            let addressComponents = res["results"][0].address_components;
            for (var i = 0; i < addressComponents.length; i++) {
                if (addressComponents[i].types[0] == "country") {
                    this.country = addressComponents[i].long_name;
                }
                if (addressComponents[i].types[0] == "administrative_area_level_2") {
                    this.city = addressComponents[i].long_name;
                }
                if (addressComponents[i].types[0] == "postal_code") {
                    this.posttalcode = addressComponents[i].long_name;
                }
                if (addressComponents[i].types[0] == "route") {
                    this.street = addressComponents[i].long_name;
                }
            }
            if (this.country == undefined || this.country == null) {
                this.country = "N/A";
            }
            if (this.city == undefined || this.city == null) {
                this.city = "N/A";
            }
            if (this.street == undefined || this.street == null) {
                this.street = "N/A";
            }
            if (this.posttalcode == undefined || this.posttalcode == null) {
                this.posttalcode = "000000";
            }
            console.log("===========1846===========", this.country, this.city, this.posttalcode, this.street);
            if (callback)
                callback();
        }, (err) => {
            console.log("===========1848==============", err);
            this.country = "NA";
            this.posttalcode = "";
            this.city = "NA";
            this.street = "";
        });
        // this.ApiService.getAddressFromLatLng(
        //   this.latitude + "," + this.longitude
        // ).then(
        //   (result) => {
        //     var address = result[0].Location.Address;
        //     console.log(result);
        //     this.country = address.AdditionalData[0].value;
        //     this.posttalcode = address.PostalCode;
        //     this.city = address.City;
        //     this.street = address.Label;
        //     if (callback) callback();
        //   },
        //   (error) => {
        //     console.log("error", error);
        //     // this.loginError(error.error.message);
        //     this.country = "NA";
        //     this.posttalcode = "";
        //     this.city = "NA";
        //     this.street = "";
        //   }
        // );
    }
    api_create_posts() {
        console.log("==================>", "api_create_posts", this.postForm.value);
        if (this.postForm.value.project_category == "Select Project Category") {
            this.postForm.value.project_category = "";
        }
        const postData = new FormData();
        postData.append("name", this.postForm.value.name),
            postData.append("project_type", this.postForm.value.project_type),
            postData.append("project_category", this.postForm.value.project_category),
            postData.append("year", this.postForm.value.year),
            postData.append("tags", this.sendingtags.toString()),
            postData.append("about_post", this.postForm.value.about_post),
            postData.append("lat", this.latitude),
            postData.append("lon", this.longitude),
            postData.append("taged_users", this.sendingUsertags.toString()),
            this.selectedImages.map((img) => {
                postData.append("images", img);
            });
        postData.append("image_tag", this.imageTags.toString()),
            postData.append("t_type_end_date", this.endD),
            postData.append("t_type_start_date", this.strD),
            postData.append("country", this.country),
            postData.append("city", this.city),
            postData.append("zip_code", this.posttalcode),
            postData.append("street", ""),
            this.api.postsCreate(postData).subscribe((response) => {
                this.Toast.success("success", response.message);
                this.emptyPostForm();
                $("#involvement").modal("hide");
                this.ngOnInit();
            }, (error) => {
                this.Toast.error(error.error.message);
            });
    }
    submit_create_posts(e) {
        this.getTags();
        if (this.validate_create_posts()) {
            this.getImageTag();
            this.getStrEndDate();
            this.getMoreValues(() => {
                this.api_create_posts();
            });
        }
    }
    // save tags on click save button
    saveTag() {
        $("#mtChip").value = "";
    }
    // add tag on select from list
    addTag(event) {
        var tagName = event.target.textContent;
        let flag = false;
        for (var i = 0; i < this.taggs.length; i++) {
            if (this.taggs[i].name == tagName) {
                flag = true;
                break;
            }
            else {
                flag = false;
            }
        }
        if (flag) {
            this.Toast.error("Tag already inserted");
        }
        else {
            this.taggs.push({ name: tagName });
            var index = this.tagsList.indexOf(event.target.textContent);
            if (index > -1) {
                this.tagsList.splice(index, 1);
            }
        }
    }
    // add tag on hit enter
    onEnter() {
        let flag = false;
        if (this.message.length > 3 && this.message != "") {
            for (var i = 0; i < this.taggs.length; i++) {
                if (this.taggs[i].name == this.message) {
                    flag = true;
                    break;
                }
                else {
                    flag = false;
                }
            }
            if (flag) {
                this.Toast.error("Tag already inserted");
            }
            else {
                this.taggs.push({ name: this.message });
                this.new_tag.setValue("");
            }
        }
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        // if ((value || '').trim()) {
        //   this.taggs.push({name: value.trim()});
        // }
        // Reset the input value
        if (input) {
            input.value = "";
        }
    }
    remove(tagg) {
        const index = this.taggs.indexOf(tagg);
        if (index >= 0) {
            this.taggs.splice(index, 1);
            if (this.tagsList.includes(tagg.name)) {
                return;
            }
            else {
                this.tagsList.push(tagg.name);
            }
        }
    }
    // mat chip
    removeImage(image, index) {
        this.base64Image.splice(index, 1);
        this.imageTags.splice(index, 1);
        this.selectedImages.splice(index, 1);
        if (this.selectedImages.length == 1) {
            this.otherOption = true;
            // console.log(this.selectedImages.length)
        }
    }
    chooseImage(event) {
        var that = this;
        this.otherOption = true;
        for (let i = 0; i < event.target.files.length; i++) {
            let img = event.target.files[i];
            const reader = new FileReader();
            reader.onload = function () {
                that.base64Image.push(reader.result);
            };
            reader.readAsDataURL(img);
            this.selectedImages.push(img);
        }
        // let file = event.target.files[0];
        // var that = this;
        // const reader = new FileReader();
        // reader.onload = function() {
        //   that.base64Image.push(reader.result);
        // };
        // reader.readAsDataURL(event.target.files[0]);
        // this.selectedImages.push(event.target.files[0]);
    }
    load_create_posts() {
        this.api_get_project_type();
        this.api_get_project_category();
    }
    validate_create_posts() {
        var projTyp = this.postForm.value.project_type;
        var projCat = this.postForm.value.project_category;
        if (projTyp != "Select Project Type") {
            var project_type = this.postForm.value.project_type;
        }
        else {
            var project_type = null;
        }
        if (projCat != "Select Project Category") {
            var project_category = this.postForm.value.project_category;
        }
        else {
            var project_category = null;
        }
        var name = this.postForm.value.name;
        var year = this.postForm.value.year;
        var about_post = this.postForm.value.about_post;
        var images = this.postImage;
        var t_type_start_date = this.postForm.value.t_type_start_date;
        var t_type_end_date = this.postForm.value.t_type_end_date;
        var s = Date.parse(t_type_start_date);
        var e = Date.parse(t_type_end_date);
        if (!name || name == "") {
            this.loginError("Please provide project name");
            return false;
        }
        if (!project_type || project_type == "") {
            this.loginError("Please provide project type");
            return false;
        }
        if (this.starType == true &&
            (!project_category || project_category == "")) {
            this.loginError("Please provide project category");
            return false;
        }
        if (this.typ == 0 && (!year || year == "")) {
            this.loginError("Please provide year");
            return false;
        }
        if (this.typ == 0 && year.toString().length < 4) {
            this.loginError("Please enter year in YYYY format");
            return false;
        }
        if (this.typ == 1 && (!t_type_start_date || t_type_start_date == "")) {
            this.loginError("Please provide start date");
            return false;
        }
        if (this.typ == 1 && (!t_type_end_date || t_type_end_date == "")) {
            this.loginError("Please provide end date");
            return false;
        }
        else {
            // console.log(s)
            // console.log(e)
        }
        if (this.typ == 1 && e <= s) {
            this.loginError("End date should be Greater");
            return false;
        }
        if (this.taggs.length == 0) {
            this.loginError("Please provide tags");
            return false;
        }
        if (!about_post || about_post == "") {
            this.loginError("Please provide descriptions");
            return false;
        }
        // if (this.base64Image.length <= 0) {
        //   this.loginError("Please provide images");
        //   return false;
        // }
        if (!$("#post_perms").is(":checked")) {
            this.loginError("Please accept content terms and conditions");
            return false;
        }
        return true;
    }
    getImageTag() {
        for (var i = 0; i < this.base64Image.length; i++) {
            this.imageTags.push($("#imgTag" + i).val());
        }
        // console.log(this.imageTags)
    }
    loginError(e) {
        console.log(e);
        this.errormessage = e;
        setTimeout(() => {
            this.errormessage = "";
        }, 4000);
    }
    getType() {
        var id = $("#selType :selected").val();
        for (var i of this.project_typeData) {
            if (i.id == id) {
                var checkType = i.is_t_type;
                this.starType = i.is_star_type;
                // console.log(this.starType)
            }
        }
        if (checkType == true) {
            this.typ = 1;
        }
        else {
            this.typ = 0;
        }
        if (this.starType == false) {
            this.hideCat = 1;
        }
        else {
            this.hideCat = 0;
        }
    }
    api_get_project_category() {
        this.api.getProjectCategory().subscribe((response) => {
            this.project_categoryData = Object.values(response.data);
            console.log(this.project_categoryData, "888888888888888888888888");
        }, (error) => {
            console.log("error", error);
            this.loginError(error.error.message);
        });
    }
    emptyPostForm() {
        this.postForm.setValue({
            name: "",
            project_type: "",
            project_category: "",
            year: "",
            t_type_end_date: "",
            t_type_start_date: "",
            tags: "",
            about_post: "",
            images: null,
        });
        for (var i = 0; i < this.imageTags.length; i++) {
            $("#imgTag" + i).val("");
        }
        this.taggs = [];
        this.selectedImages = [];
        this.base64Image = [];
        this.imageTags = [];
    }
    getStrEndDate() {
        if ($("#start-date").val()) {
            this.strD = $("#start-date").val();
        }
        else {
            this.strD = "2020-07-15";
        }
        if ($("#end-date").val()) {
            this.endD = $("#end-date").val();
        }
        else {
            this.endD = "2021-07-16";
        }
    }
    hit() {
        var img_tagg = $("#creditt").val();
        this.postImageTag = img_tagg;
    }
    onRightClick() {
        return false;
    }
};
MyProfileComponent.ctorParameters = () => [
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-my-profile",
        template: __webpack_require__(/*! raw-loader!./my-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/my-profile/my-profile.component.html"),
        styles: [__webpack_require__(/*! ./my-profile.component.css */ "./src/app/layout/my-profile/my-profile.component.css")]
    })
], MyProfileComponent);



/***/ }),

/***/ "./src/app/layout/my-settings/my-settings.component.css":
/*!**************************************************************!*\
  !*** ./src/app/layout/my-settings/my-settings.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9teS1zZXR0aW5ncy9teS1zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/my-settings/my-settings.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/my-settings/my-settings.component.ts ***!
  \*************************************************************/
/*! exports provided: MySettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySettingsComponent", function() { return MySettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MySettingsComponent = class MySettingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
MySettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-settings',
        template: __webpack_require__(/*! raw-loader!./my-settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/my-settings/my-settings.component.html"),
        styles: [__webpack_require__(/*! ./my-settings.component.css */ "./src/app/layout/my-settings/my-settings.component.css")]
    })
], MySettingsComponent);



/***/ }),

/***/ "./src/app/layout/notifications-setting/notifications-setting.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/notifications-setting/notifications-setting.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 24px;\r\n  }\r\n  \r\n  .switch input { \r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n  \r\n  .slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n  \r\n  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 20px;\r\n    width: 20px;\r\n    left: 3px;\r\n    bottom: 2px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n  \r\n  input:checked + .slider {\r\n    background-color: #FFD705;\r\n  }\r\n  \r\n  input:focus + .slider {\r\n    box-shadow: 0 0 1px #FFD705;\r\n  }\r\n  \r\n  input:checked + .slider:before {\r\n    -webkit-transform: translateX(15px);\r\n    transform: translateX(15px);\r\n  }\r\n  \r\n  /* Rounded sliders */\r\n  \r\n  .slider.round {\r\n    border-radius: 34px;\r\n  }\r\n  \r\n  .slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L25vdGlmaWNhdGlvbnMtc2V0dGluZy9ub3RpZmljYXRpb25zLXNldHRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztFQUNYOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsbUNBQW1DO0lBRW5DLDJCQUEyQjtFQUM3Qjs7RUFFQSxvQkFBb0I7O0VBQ3BCO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L25vdGlmaWNhdGlvbnMtc2V0dGluZy9ub3RpZmljYXRpb25zLXNldHRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2l0Y2gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zd2l0Y2ggaW5wdXQgeyBcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGxlZnQ6IDNweDtcclxuICAgIGJvdHRvbTogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDcwNTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggI0ZGRDcwNTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcclxuICB9XHJcbiAgXHJcbiAgLyogUm91bmRlZCBzbGlkZXJzICovXHJcbiAgLnNsaWRlci5yb3VuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/notifications-setting/notifications-setting.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/notifications-setting/notifications-setting.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NotificationsSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsSettingComponent", function() { return NotificationsSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationsSettingComponent = class NotificationsSettingComponent {
    constructor() { }
    ngOnInit() {
        this.NotificationToken = localStorage.getItem("NToken");
        console.log(this.NotificationToken, "nn");
    }
    notificationOff($event) {
        if ($event.target.checked == false) {
            localStorage.setItem("Notification", 'false');
        }
        if ($event.target.checked == true) {
            localStorage.setItem("Notification", 'true');
        }
        console.log($event.target.checked);
    }
};
NotificationsSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications-setting',
        template: __webpack_require__(/*! raw-loader!./notifications-setting.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/notifications-setting/notifications-setting.component.html"),
        styles: [__webpack_require__(/*! ./notifications-setting.component.css */ "./src/app/layout/notifications-setting/notifications-setting.component.css")]
    })
], NotificationsSettingComponent);



/***/ }),

/***/ "./src/app/layout/notifications-view/notifications-view.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/layout/notifications-view/notifications-view.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ub3RpZmljYXRpb25zLXZpZXcvbm90aWZpY2F0aW9ucy12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/notifications-view/notifications-view.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/notifications-view/notifications-view.component.ts ***!
  \***************************************************************************/
/*! exports provided: NotificationsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsViewComponent", function() { return NotificationsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationsViewComponent = class NotificationsViewComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotificationsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications-view',
        template: __webpack_require__(/*! raw-loader!./notifications-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/notifications-view/notifications-view.component.html"),
        styles: [__webpack_require__(/*! ./notifications-view.component.css */ "./src/app/layout/notifications-view/notifications-view.component.css")]
    })
], NotificationsViewComponent);



/***/ }),

/***/ "./src/app/layout/notifications/notifications.component.css":
/*!******************************************************************!*\
  !*** ./src/app/layout/notifications/notifications.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/notifications/notifications.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/notifications/notifications.component.ts ***!
  \*****************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");



let NotificationsComponent = class NotificationsComponent {
    constructor(Api) {
        this.Api = Api;
    }
    ngOnInit() {
        let UserData = this.Api.getUserData();
        console.log(UserData, "dd ollll");
        this.getNotifications(UserData["id"]);
    }
    getNotifications(id) {
        console.log(id);
        let dataTosend = {
            notification_for_user: id,
        };
        this.Api.getNotifcations(dataTosend).subscribe((res) => {
            this.notificationList = res["data"];
            console.log(this.notificationList, "NOtificationsList");
        });
    }
};
NotificationsComponent.ctorParameters = () => [
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-notifications",
        template: __webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/notifications/notifications.component.html"),
        styles: [__webpack_require__(/*! ./notifications.component.css */ "./src/app/layout/notifications/notifications.component.css")]
    })
], NotificationsComponent);



/***/ }),

/***/ "./src/app/layout/post-detail/post-detail.component.css":
/*!**************************************************************!*\
  !*** ./src/app/layout/post-detail/post-detail.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wb3N0LWRldGFpbC9wb3N0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/post-detail/post-detail.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/post-detail/post-detail.component.ts ***!
  \*************************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostDetailComponent = class PostDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
PostDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-detail',
        template: __webpack_require__(/*! raw-loader!./post-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/post-detail/post-detail.component.html"),
        styles: [__webpack_require__(/*! ./post-detail.component.css */ "./src/app/layout/post-detail/post-detail.component.css")]
    })
], PostDetailComponent);



/***/ }),

/***/ "./src/app/layout/privacy-policy/privacy-policy.component.css":
/*!********************************************************************!*\
  !*** ./src/app/layout/privacy-policy/privacy-policy.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/privacy-policy/privacy-policy.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/privacy-policy/privacy-policy.component.ts ***!
  \*******************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrivacyPolicyComponent = class PrivacyPolicyComponent {
    constructor() { }
    ngOnInit() {
    }
};
PrivacyPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacy-policy',
        template: __webpack_require__(/*! raw-loader!./privacy-policy.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/privacy-policy/privacy-policy.component.html"),
        styles: [__webpack_require__(/*! ./privacy-policy.component.css */ "./src/app/layout/privacy-policy/privacy-policy.component.css")]
    })
], PrivacyPolicyComponent);



/***/ }),

/***/ "./src/app/layout/public-detailed-view/public-detailed-view.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/layout/public-detailed-view/public-detailed-view.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".destroted{\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    width: 100%;\r\n    padding-top: 0%;\r\n    height:calc(100vh - 180px)\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3B1YmxpYy1kZXRhaWxlZC12aWV3L3B1YmxpYy1kZXRhaWxlZC12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxlQUFlO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wdWJsaWMtZGV0YWlsZWQtdmlldy9wdWJsaWMtZGV0YWlsZWQtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc3Ryb3RlZHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMCU7XHJcbiAgICBoZWlnaHQ6Y2FsYygxMDB2aCAtIDE4MHB4KVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/public-detailed-view/public-detailed-view.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/public-detailed-view/public-detailed-view.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PublicDetailedViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicDetailedViewComponent", function() { return PublicDetailedViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let PublicDetailedViewComponent = class PublicDetailedViewComponent {
    constructor(fb, ApiService, toast, http, route, router) {
        this.fb = fb;
        this.ApiService = ApiService;
        this.toast = toast;
        this.http = http;
        this.route = route;
        this.router = router;
        this.content = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.post_id = params["post_id"];
            this.userData = this.ApiService.getUserData();
            if (!this.userData) {
                this.toast.error("Please login");
                this.router.navigate(["/home"]);
                return false;
            }
            else {
                this.get_post(this.post_id);
                // $("#comment").modal("show");
            }
        });
    }
    get_post(post_id) {
        this.ApiService.questionDetails(post_id).subscribe((response) => {
            this.questionDetail = response["data"];
            console.log(this.questionDetail, "line no 65");
            this.commentname = this.questionDetail.comments;
            this.commantsImage = this.questionDetail.comments[0].comment_by.profile_image;
            console.log(this.questionDetail.comments, "this is 70 line");
            console.log(this.questionDetail.comments[0].comment_by.profile_image, "this is 71 line");
            this.comments = this.questionDetail.comments;
            this.is_reported = this.questionDetail.is_reported;
        }, (err) => {
            this.toast.error("Something went wrong. Please try after some time");
        });
    }
    commentPost() {
        if (this.content && this.post_id) {
            if (this.content.value == "" || this.content.value == null) {
                this.commentsPostError("This field is required");
                return false;
            }
            this.ApiService.commentOnQuestionPost({
                question_id: this.post_id,
                content: this.content.value,
            }).subscribe((x) => {
                console.log(x);
                this.get_post(this.post_id);
                this.content.reset();
                this.toast.success(x["message"]);
            }, (err) => {
                console.log(err);
            });
        }
    }
    likeDislikePost(current_status) {
        if (current_status == true) {
            var final_status = false;
        }
        else {
            var final_status = true;
        }
        this.ApiService.likeQuestionPost({
            question_id: this.post_id,
            is_liked: final_status,
        }).subscribe((response) => {
            this.get_post(this.post_id);
            this.toast.success(response["message"]);
        }, (err) => {
            this.toast.error("Something went wrong. Please try after some time");
        });
    }
    likeDislikeComment(id, current_status) {
        if (current_status == true) {
            var final_status = false;
        }
        else {
            var final_status = true;
        }
        this.ApiService.likeQuestionComment({
            comment_id: id,
            is_liked: final_status,
        }).subscribe((response) => {
            this.get_post(this.post_id);
            this.toast.success(response["message"]);
        }, (err) => {
            this.toast.error("Something went wrong. Please try after some time");
        });
    }
    navigateOnMap(lat, lon) {
        if (navigator.geolocation) {
            // Call getCurrentPosition with success and failure callbacks
            window.navigator.geolocation.getCurrentPosition((data) => {
                console.log("ok");
                var url = "https://maps.google.com/maps?saddr=" +
                    data.coords.latitude +
                    "," +
                    data.coords.longitude +
                    "&daddr=" +
                    lat +
                    "," +
                    lon;
                window.open(url, "_blank", "location=yes");
            }, (eoor) => {
                this.toast.error("Unable to access your current location Because you blocked it.");
            });
        }
        else {
            this.toast.error("Sorry, your browser does not support geolocation services.");
        }
    }
    commentsPostError(e) {
        console.log(e);
        this.errormessage = e;
        setTimeout(() => {
            this.errormessage = "";
        }, 4000);
    }
    reportPost(id) {
        console.log(id);
        this.ApiService.reportQuestionPost({
            question_id: this.post_id,
            reason_id: id,
        }).subscribe((response) => {
            this.toast.success(response["message"]);
            this.is_reported = true;
        }, (err) => {
            this.toast.error("Something went wrong. Please try after some time");
        });
    }
    copyLink() {
        var copyText = "https://insite.fluper.in/public-detailed-view/" + this.post_id;
        var input = document.createElement("input");
        input.setAttribute("value", copyText);
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand("copy");
        document.body.removeChild(input);
        this.toast.success("Link copied");
    }
};
PublicDetailedViewComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
PublicDetailedViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-public-detailed-view",
        template: __webpack_require__(/*! raw-loader!./public-detailed-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/public-detailed-view/public-detailed-view.component.html"),
        providers: [_service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]],
        styles: [__webpack_require__(/*! ./public-detailed-view.component.css */ "./src/app/layout/public-detailed-view/public-detailed-view.component.css")]
    })
], PublicDetailedViewComponent);



/***/ }),

/***/ "./src/app/layout/settings/settings.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/settings/settings.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/settings/settings.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/settings/settings.component.ts ***!
  \*******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let SettingsComponent = class SettingsComponent {
    constructor(api, toast, Form) {
        this.api = api;
        this.toast = toast;
        this.Form = Form;
        this.submitted = false;
    }
    ngOnInit() {
        this.changePasswordForm = this.Form.group({
            oldPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            newPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    sendFeedback() {
        if (Boolean(this.feedback) == false) {
            this.toast.error("feedback is required");
            return;
        }
        this.api.sendUserFeedback({ feedback: this.feedback }).subscribe((res) => {
            this.toast.success(res["message"]);
            this.feedback = "";
            $("#close-feedbackModal").click();
        }, (error) => {
            this.toast.error(error.error.feedback);
        });
    }
    get f() {
        return this.changePasswordForm.controls;
    }
    changeUserPassword() {
        this.submitted = true;
        if (this.changePasswordForm.invalid) {
            return;
        }
        if (this.changePasswordForm.value.newPassword !=
            this.changePasswordForm.value.confirmPassword) {
            this.toast.error("Password does not match");
            return;
        }
        let dataToSend = {
            old_password: this.changePasswordForm.value.oldPassword,
            new_password: this.changePasswordForm.value.newPassword,
        };
        this.api.changePassword(dataToSend).subscribe((res) => {
            this.toast.success(res["message"]);
            $("#cancel").click();
        }, (error) => {
            this.toast.error(error.error.message);
        });
    }
    clearForm() {
        this.changePasswordForm.reset();
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-settings",
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/settings/settings.component.html"),
        styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/layout/settings/settings.component.css")]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/layout/subscription/subscription.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/subscription/subscription.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-name{\r\n    margin: 70px 0 20px 0;\r\n}\r\n.account-name h6{\r\n    margin-bottom: 15px;\r\n    font-weight: 600;\r\n}\r\n.include{\r\n    margin-bottom: 15px;\r\n    font-weight: 600;\r\n}\r\n.payble{\r\n    font-weight: 600;\r\n}\r\ninput[type=checkbox]{\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n.account-name{\r\n    margin: 70px 0 20px 0;\r\n}\r\n.account-name h6{\r\n    margin-bottom: 15px;\r\n    font-weight: 600;\r\n}\r\n.include{\r\n    margin-bottom: 15px;\r\n    font-weight: 600;\r\n}\r\n.payble{\r\n    font-weight: 600;\r\n}\r\n.card-check ul li{\r\n    color: #1e1e20;\r\n    cursor: pointer;\r\n}\r\n.card-check ul li img{\r\n    width: 22px;\r\n    margin: 0 3px;\r\n}\r\n.subsText{\r\n    color: black;\r\n    font-size: 15px;\r\n}\r\n.card{\r\n    padding: 5%;\r\n    color: black;\r\n    /* font-size: 10px; */\r\n}\r\n.cardnum{\r\n    width: 90%;\r\n    height: 30%;\r\n    color: black;\r\n    font-size: 20px;\r\n}\r\n.account-name>p{\r\n    font-size: 16px;\r\n}\r\n.InputElement{\r\n    border: 1px solid #ced4da !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc3Vic2NyaXB0aW9uL3N1YnNjcmlwdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtbmFtZXtcclxuICAgIG1hcmdpbjogNzBweCAwIDIwcHggMDtcclxufVxyXG4uYWNjb3VudC1uYW1lIGg2e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmluY2x1ZGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ucGF5Ymxle1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5pbnB1dFt0eXBlPWNoZWNrYm94XXtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYWNjb3VudC1uYW1le1xyXG4gICAgbWFyZ2luOiA3MHB4IDAgMjBweCAwO1xyXG59XHJcbi5hY2NvdW50LW5hbWUgaDZ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uaW5jbHVkZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5wYXlibGV7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5jYXJkLWNoZWNrIHVsIGxpe1xyXG4gICAgY29sb3I6ICMxZTFlMjA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNhcmQtY2hlY2sgdWwgbGkgaW1ne1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBtYXJnaW46IDAgM3B4O1xyXG59XHJcbi5zdWJzVGV4dHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uY2FyZHtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLyogZm9udC1zaXplOiAxMHB4OyAqL1xyXG59XHJcbi5jYXJkbnVte1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5hY2NvdW50LW5hbWU+cHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLklucHV0RWxlbWVudHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGEgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/subscription/subscription.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/subscription/subscription.component.ts ***!
  \***************************************************************/
/*! exports provided: SubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function() { return SubscriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm2015/ngx-stripe.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let SubscriptionComponent = class SubscriptionComponent {
    constructor(api, router, toast, fb, af, stripeService, Location) {
        this.api = api;
        this.router = router;
        this.toast = toast;
        this.fb = fb;
        this.af = af;
        this.stripeService = stripeService;
        this.subscriptiondata = [];
        // optional parameters
        this.elementsOptions = {
            locale: "en",
        };
        this.isLogined = true;
    }
    ngOnInit() {
        history.pushState(null, document.title, location.href);
        window.addEventListener('popstate', function (event) {
            history.pushState(null, document.title, location.href);
            localStorage.clear();
        });
        this.getSubscriptionData();
        // stripe
        this.stripeTest = this.fb.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.stripeService.elements(this.elementsOptions).subscribe((elements) => {
            this.elements = elements;
            // Only mount the element the first time
            if (!this.card) {
                this.card = this.elements.create("card", {
                    hidePostalCode: true,
                    style: {
                        base: {
                            iconColor: "#000",
                            color: "#000",
                            lineHeight: "60px",
                            fontWeight: 300,
                            fontFamily: "sans-serif",
                            fontSize: "15px",
                            "::placeholder": {
                                color: "#7e7f82",
                            },
                        },
                    },
                });
                this.card.mount("#card-element");
            }
        });
        // stripe end
    }
    userState() {
        this.userData = JSON.parse(localStorage.getItem("userData"));
        this.userId = this.userData.id;
        let timestamp = new Date().getTime().toString();
        let dataTOSave = {
            id: this.userId,
            name: this.userData.company_detail["name"],
            onlineState: "1",
            profile_image: this.userData.company_detail["picture"],
            username: this.userData.username,
            timeStamp: timestamp,
        };
        this.af.database.ref("/userState/" + this.userId).set(dataTOSave);
    }
    proceedtopay() {
        const name = this.stripeTest.get("name").value;
        if (name == "") {
            this.errormessage = "Please Provide Card Holder Name";
        }
        else {
            this.stripeService
                .createToken(this.card, { name })
                .subscribe((result) => {
                if (result.token) {
                    console.log(result.token);
                    var data = result.token;
                    var card_token = data.id;
                    this.api
                        .make_payment({ card_token: card_token, is_card_save: true })
                        .subscribe((x) => {
                        console.log(x["message"]);
                        this.success_message = x["message"];
                        $("#checkout").modal("hide");
                        $("#paidsuccess").modal("show");
                        //     this.api.setUserData(response.data)
                        // this.userState()
                    });
                }
                else if (result.error) {
                    // Error creating the token
                    console.log(result.error.message);
                }
            });
        }
    }
    setHome() {
        this.captured = true;
        localStorage.setItem("captured", this.captured);
    }
    // ======================
    Pricecheck() {
        if (this.subscriptiondata.price == 0.0) {
            this.router.navigate(["/"]);
            console.log("if calling");
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
        else if (this.subscriptiondata.price > 0.0) {
            $("#checkout").modal("show");
            window.history.pushState(null, "", window.location.href);
            window.onpopstate = function () {
                window.history.pushState(null, "", window.location.href);
                alert("Please Make Payment");
            };
        }
    }
    getSubscriptionData() {
        this.api.get_subscription_plan().subscribe((x) => {
            this.subscriptiondata = x["data"];
            console.log(x, "this is after registration");
            this.account_type = this.subscriptiondata["account_type"];
            this.add_pictures_link_to_others_posts =
                this.subscriptiondata["add_pictures_link_to_others_posts"];
            this.comment_on_existing_posts =
                this.subscriptiondata["comment_on_existing_posts"];
            this.create_posts = this.subscriptiondata["create_posts"];
            this.mark_involvement_in_others_posts =
                this.subscriptiondata["mark_involvement_in_others_posts"];
            this.users_or_account = this.subscriptiondata["users_or_account"];
            this.plan_name = this.subscriptiondata["plan_name"];
            // created_on;
            // plan_desc;
            // plan_name;
            // price;
        });
    }
};
SubscriptionComponent.ctorParameters = () => [
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"] },
    { type: ngx_stripe__WEBPACK_IMPORTED_MODULE_4__["StripeService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"] }
];
SubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-subscription",
        template: __webpack_require__(/*! raw-loader!./subscription.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/subscription/subscription.component.html"),
        providers: [_service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]],
        styles: [__webpack_require__(/*! ./subscription.component.css */ "./src/app/layout/subscription/subscription.component.css")]
    })
], SubscriptionComponent);



/***/ }),

/***/ "./src/app/layout/terms-conditions/terms-conditions.component.css":
/*!************************************************************************!*\
  !*** ./src/app/layout/terms-conditions/terms-conditions.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90ZXJtcy1jb25kaXRpb25zL3Rlcm1zLWNvbmRpdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/terms-conditions/terms-conditions.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/terms-conditions/terms-conditions.component.ts ***!
  \***********************************************************************/
/*! exports provided: TermsConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsComponent", function() { return TermsConditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");



let TermsConditionsComponent = class TermsConditionsComponent {
    constructor(api) {
        this.api = api;
    }
    ngOnInit() {
        this.api.t().subscribe(x => {
            this.htmlString = x.data[0].content;
            console.log(this.htmlString);
        }, err => {
            console.log(err);
        });
    }
};
TermsConditionsComponent.ctorParameters = () => [
    { type: _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
TermsConditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms-conditions',
        template: __webpack_require__(/*! raw-loader!./terms-conditions.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/terms-conditions/terms-conditions.component.html"),
        styles: [__webpack_require__(/*! ./terms-conditions.component.css */ "./src/app/layout/terms-conditions/terms-conditions.component.css")]
    })
], TermsConditionsComponent);



/***/ }),

/***/ "./src/app/layout/unfollowed-profile/unfollowed-profile.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/layout/unfollowed-profile/unfollowed-profile.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91bmZvbGxvd2VkLXByb2ZpbGUvdW5mb2xsb3dlZC1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/unfollowed-profile/unfollowed-profile.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/unfollowed-profile/unfollowed-profile.component.ts ***!
  \***************************************************************************/
/*! exports provided: UnfollowedProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnfollowedProfileComponent", function() { return UnfollowedProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UnfollowedProfileComponent = class UnfollowedProfileComponent {
    constructor(api, Toast, activatedRoute) {
        this.api = api;
        this.Toast = Toast;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(data => {
            this.userName = data['name'];
            console.log(this.userName);
        });
        this.getProject();
        this.getProfileData();
        this.activatedRoute.params.subscribe(data => {
            this.userName = data['name'];
            console.log(this.userName);
        });
    }
    getProfileData() {
        this.api.getProfileData(this.userName).subscribe(d => {
            console.log(d, "UserProfileData");
            console.log(this.userName, "this is userName");
            this.profiledata = d['data'];
            // this.profileImage = this.profiledata.company_detail.description;
            this.description = this.profiledata.company_detail.description;
            console.log(this.description, "iskiii sdjfasfk asfaskfj sadfksadfj");
            console.log(this.profiledata, "ProfileData");
            this.id = this.profiledata.id;
            if (this.profiledata.profile_type == 1)
                this.profiledata.profile_type = 'Personal';
            else if (this.profiledata.profile_type == 2)
                this.profiledata.profile_type = 'Company';
            else if (this.profiledata.profile_type == 2)
                this.profiledata.profile_type = 'Company colleague';
            this.socialLinks1 = this.profiledata.social_links[1];
            this.socialLinks2 = this.profiledata.social_links[2];
            this.socialLinks3 = this.profiledata.social_links[3];
            this.socialLinks4 = this.profiledata.social_links[4];
        }, err => {
            console.log(err);
        });
    }
    openLink(data) {
        if (data) {
            window.open('https://' + data);
        }
    }
    getProject() {
        this.api.getProjectData(this.userName).subscribe(d => {
            this.projectdata = d['data'];
            // console.log(this.projectdata)
        }, err => {
            console.log(err);
        });
    }
    followUnfollow() {
        this.userId = this.profiledata.id;
        let dataTosend = {
            user_id: this.userId
        };
        this.api.followunfollowUser(dataTosend).subscribe((res) => {
            this.followed = res['followed'];
            console.log(this.followed, "truOrFalse");
            if (this.followed == "True") {
                $('#follow').modal('show');
                setTimeout(() => {
                    $('#follow').modal('hide');
                }, 1000);
            }
            else {
                $('#Unfollow').modal('show');
                setTimeout(() => {
                    $('#Unfollow').modal('hide');
                }, 1000);
            }
            this.getProfileData();
            //  this.followed == true ? $('#follow').modal('show') : $('#Unfollow').modal('show')
        }, error => {
            this.Toast.error(error.error.message);
        });
    }
    likeDIslike() {
        this.userId = this.profiledata.id;
        let dataTosend = {
            user_id: this.userId
        };
        this.api.likedislike(dataTosend).subscribe((res) => {
            this.likes = res['message'];
            this.Toast.success(this.likes);
            this.getProfileData();
            console.log(this.likes, "likes");
        }, error => {
            this.Toast.error(error.error.message);
        });
    }
};
UnfollowedProfileComponent.ctorParameters = () => [
    { type: src_app_service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
UnfollowedProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unfollowed-profile',
        template: __webpack_require__(/*! raw-loader!./unfollowed-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/unfollowed-profile/unfollowed-profile.component.html"),
        styles: [__webpack_require__(/*! ./unfollowed-profile.component.css */ "./src/app/layout/unfollowed-profile/unfollowed-profile.component.css")]
    })
], UnfollowedProfileComponent);



/***/ }),

/***/ "./src/app/service/api/api.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/api/api.service.ts ***!
  \********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.tokenn = localStorage.getItem("userData") != undefined
            ? JSON.parse(localStorage.getItem("userData")).token
            : "";
        this.baseurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: this.tokenn,
        });
        // For TOken Header2
        this.tokenHeader2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", localStorage.getItem("token"));
        this.platform = new H.service.Platform({
            app_id: "joUTCcnEdkz4ySuGgu07",
            app_code: "AeupDUrzMb1hO_ORVeeL8w",
        });
        this.geocoder = this.platform.getGeocodingService();
    }
    getfollowfollow() {
        throw new Error("Method not implemented.");
    }
    login(data) {
        return this.http.post(`${this.baseurl}api/v1/users/login`, data);
    }
    getAddressNew(data) {
        return this.http.post(`https://api.insite.city/api/v1/extra/get_address`, data);
    }
    auto_detect_country_code() {
        return this.http.get("https://ip-api.com/json");
    }
    get_country_code() {
        return this.http.get(`${this.baseurl}api/v1/users/country_code_list`);
    }
    guest_login(data) {
        return this.http.post(`${this.baseurl}api/v1/users/login_as_guest`, data);
    }
    guest_signup(data) {
        return this.http.post(`${this.baseurl}api/v1/users/registration`, data);
    }
    guest_resetPassword(data) {
        return this.http.post(`${this.baseurl}api/v1/users/password_reset`, data);
    }
    otp_verify(data) {
        return this.http.post(`${this.baseurl}api/v1/users/verify_otp`, data);
    }
    get_bussiness_area() {
        return this.http.get(`${this.baseurl}api/v1/users/bussiness_area_list`);
    }
    // for getting lat and lon from address
    get_latlng(address) {
        return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBMKjOfr-vsOYRI5MhiFsaw0bb026Gorok`);
    }
    get_profession() {
        return this.http.get(`${this.baseurl}api/v1/users/profession_list`);
    }
    getAddress(query) {
        return new Promise((resolve, reject) => {
            this.geocoder.geocode({ searchText: query }, (result) => {
                if (result.Response.View.length > 0) {
                    if (result.Response.View[0].Result.length > 0) {
                        resolve(result.Response.View[0].Result);
                    }
                    else {
                        reject({ message: "no results found" });
                    }
                }
                else {
                    reject({ message: "no results found" });
                }
            }, (error) => {
                reject(error);
            });
        });
    }
    getAddressFromLatLng(query) {
        return new Promise((resolve, reject) => {
            this.geocoder.reverseGeocode({ prox: query, mode: "retrieveAddress" }, (result) => {
                console.log("===========", result);
                if (result.Response.View.length > 0) {
                    if (result.Response.View[0].Result.length > 0) {
                        resolve(result.Response.View[0].Result);
                    }
                    else {
                        reject({ message: "no results found" });
                    }
                }
                else {
                    reject({ message: "no results found" });
                }
            }, (error) => {
                reject(error);
            });
        });
    }
    getaddress(lat, lng) {
        return this.http.post("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat, lng + "&key=AIzaSyC1uhhqUelWl23KlXJ2c3PRA6pcfagQO6M");
    }
    postCreateProfile(data) {
        return this.http.post(`${this.baseurl}api/v1/users/registration`, data);
    }
    create_quest(data) {
        return this.http.post(`${this.baseurl}api/v1/questions/create`, data);
    }
    getProjectType() {
        return this.http.get(this.baseurl + "api/v1/posts/project_type_list");
        // return this.http.get(this.baseurl +'api/v1/posts/project_type_list')
    }
    getProjectCategory() {
        return this.http.get(this.baseurl + "api/v1/posts/project_category_list");
    }
    getTagsList(name) {
        return this.http.get(this.baseurl + "api/v1/posts/get_tag_list?tag_name=" + name);
    }
    getUserTagList(name) {
        return this.http.get(this.baseurl + "api/v1/posts/get_users_list_for_tag?name=" + name);
    }
    postsCreate(data) {
        return this.http.post(this.baseurl + "api/v1/posts/create", data, {
            headers: this.tokenHeader,
        });
    }
    getHomePageData(data) {
        return this.http.post(this.baseurl + "api/v1/posts/get_home_page_data", data, { headers: this.tokenHeader });
    }
    getHomePageDataa(data) {
        return this.http.post(this.baseurl + "api/v1/posts/get_home_page_data", data);
    }
    getFilterListData() {
        return this.http.get(this.baseurl + "api/v1/posts/filter_list_data");
    }
    getColleaguesProfiles() {
        return this.http.get(this.baseurl + "api/v1/users/view_colleagues_profile", { headers: this.tokenHeader });
    }
    createColleaguesProfiles(data) {
        return this.http.post(this.baseurl + "api/v1/users/create_colleague_profile", data, { headers: this.tokenHeader });
    }
    deleteColleaguesProfiles(id) {
        return this.http.post(this.baseurl + "api/v1/users/delete_colleague_profile", id, { headers: this.tokenHeader });
    }
    get_subscription_plan() {
        return this.http.get(this.baseurl + "api/v1/subscriptions/payment_detail_page", { headers: this.tokenHeader2 });
    }
    make_payment(data) {
        return this.http.post(this.baseurl + "api/v1/payment/make_payment", data, {
            headers: this.tokenHeader,
        });
    }
    // like comment mark involvment api
    getProjectPostDetails(id) {
        return this.http.get(this.baseurl + "api/v1/posts/project_post_detail/" + id, { headers: this.tokenHeader });
    }
    likePost(data) {
        return this.http.post(this.baseurl + "api/v1/posts/like_a_post", data, {
            headers: this.tokenHeader,
        });
    }
    commentPost(data) {
        return this.http.post(this.baseurl + "api/v1/posts/comment_on_post", data, {
            headers: this.tokenHeader,
        });
    }
    likeComment(data) {
        return this.http.post(this.baseurl + "api/v1/posts/like_a_comment", data, {
            headers: this.tokenHeader,
        });
    }
    reportPost(data) {
        return this.http.post(this.baseurl + "api/v1/posts/report_a_post", data, {
            headers: this.tokenHeader,
        });
    }
    questionDetails(id) {
        return this.http.get(this.baseurl + "api/v1/questions/question_detail/" + id, { headers: this.tokenHeader });
    }
    likeQuestionPost(data) {
        return this.http.post(this.baseurl + "api/v1/questions/like_a_question_post", data, { headers: this.tokenHeader });
    }
    commentOnQuestionPost(data) {
        return this.http.post(this.baseurl + "api/v1/questions/comment_on_question_post", data, { headers: this.tokenHeader });
    }
    likeQuestionComment(data) {
        return this.http.post(this.baseurl + "api/v1/questions/like_a_question_comment", data, { headers: this.tokenHeader });
    }
    reportQuestionPost(data) {
        return this.http.post(this.baseurl + "api/v1/questions/report_a_question_post", data, { headers: this.tokenHeader });
    }
    markInvolvment(data) {
        return this.http.post(this.baseurl + "api/v1/posts/mark_involvement", data, { headers: this.tokenHeader });
    }
    getlogout() {
        return this.http.post(this.baseurl + "api/v1/users/logout", "", {
            headers: this.tokenHeader,
        });
    }
    delete_account() {
        return this.http.delete(this.baseurl + "api/v1/users/delete_account", {
            headers: this.tokenHeader,
        });
    }
    // custom services
    checkIsLogin() {
        if (localStorage.getItem("userData")) {
            return true;
        }
        else {
            return false;
        }
    }
    logout() {
        localStorage.setItem("userData", "");
    }
    setUserData(data) {
        localStorage.setItem("token", data["token"]);
        localStorage.setItem("userData", JSON.stringify(data));
    }
    getUserData() {
        if (localStorage.getItem("userData")) {
            return JSON.parse(localStorage.getItem("userData"));
        }
        else {
            return null;
        }
    }
    getCurrentLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((data) => {
                resolve(true);
            }, (error) => {
                reject(false);
            });
        });
    }
    // M10 ADMIN/USER EDIT PROFILE
    getProfileData(data) {
        return this.http.get(this.baseurl + "api/v1/users/user_detail/" + data, {
            headers: this.tokenHeader,
        });
    }
    getProjectData(data) {
        return this.http.get(this.baseurl + "api/v1/posts/my_projects/" + data, {
            headers: this.tokenHeader,
        });
    }
    getfollowunfollow(data) {
        return this.http.get(this.baseurl + "api/v1/users/follow_unfollow/" + data, { headers: this.tokenHeader });
    }
    getauthuser(name) {
        return this.http.get(this.baseurl + "api/v1/users/get_authorized_user?name=" + name, { headers: this.tokenHeader });
    }
    getAllauthuser() {
        return this.http.get(this.baseurl + "api/v1/users/get_authorized_user?name=", { headers: this.tokenHeader });
    }
    inviteuser(data) {
        return this.http.post(this.baseurl + "api/v1/users/invite", data, {
            headers: this.tokenHeader,
        });
    }
    followunfollowUser(data) {
        return this.http.post(this.baseurl + "api/v1/users/follow_unfollow", data, {
            headers: this.tokenHeader,
        });
    }
    likedislike(data) {
        return this.http.post(this.baseurl + "api/v1/users/like_other_profile", data, { headers: this.tokenHeader });
    }
    getProjectDetails(data) {
        return this.http.get(this.baseurl + "api/v1/posts/project_post_detail/" + data, { headers: this.tokenHeader });
    }
    editpost(data, userId) {
        return this.http.post(this.baseurl + "api/v1/posts/15/edit_post/" + userId, data, { headers: this.tokenHeader });
    }
    addPost(data, userId) {
        return this.http.post(this.baseurl + "api/v1/posts/15/add_image/" + userId, data, { headers: this.tokenHeader });
    }
    removepost(data) {
        return this.http.post(this.baseurl + "api/v1/posts/remove_post", data, {
            headers: this.tokenHeader,
        });
    }
    // deletePostImage page deelte api
    deletePostImage(data) {
        return this.http.post(this.baseurl + "api/v1/posts/delete_image", data, {
            headers: this.tokenHeader,
        });
    }
    editprofile(data) {
        return this.http.post(this.baseurl + "api/v1/users/edit_profile", data, {
            headers: this.tokenHeader,
        });
    }
    getChatUsers() {
        return this.http.get(this.baseurl + "api/v1/chat/get_users_list", {
            headers: this.tokenHeader,
        });
    }
    sendImageInChat(data) {
        return this.http.post(this.baseurl + "api/v1/chat/upload_get_file", data, {
            headers: this.tokenHeader,
        });
    }
    getNotifcations(data) {
        return this.http.post(this.baseurl + "api/v1/notification/get_notification_list_for_user", data, { headers: this.tokenHeader });
    }
    changePassword(data) {
        return this.http.post(this.baseurl + "api/v1/users/change_password", data, {
            headers: this.tokenHeader,
        });
    }
    sendUserFeedback(data) {
        return this.http.post(this.baseurl + "api/v1/users/user_feedback", data, {
            headers: this.tokenHeader,
        });
    }
    searchPost(data) {
        return this.http.post(this.baseurl + "/api/v1/posts/search_post?q=" + data, { headers: this.tokenHeader });
    }
    create_post_invite_user(data) {
        return this.http.post(this.baseurl + "api/v1/posts/create_post_invite", data, { headers: this.tokenHeader });
    }
    getInvolvement() {
        return this.http.get(this.baseurl + "api/v1/posts/getinvolvement", { headers: this.tokenHeader });
    }
    // For About-Us Data
    t() {
        return this.http.get(`${this.baseurl}api/v1/extra/t&c`);
    }
    // For faq Data
    faq() {
        return this.http.get(`${this.baseurl}api/v1/extra/faq`);
    }
    // For privacy_policy Data
    p() {
        return this.http.get(`${this.baseurl}api/v1/extra/privacy_policy`);
    }
    // For privacy_policy Data
    a() {
        return this.http.get(`${this.baseurl}api/v1/extra/about_us`);
    }
    // For disclaimer Data
    disclaimer() {
        return this.http.get(`${this.baseurl}api/v1/extra/disclaimer`);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ApiService);



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthService = class AuthService {
    constructor(router) {
        this.router = router;
    }
    isLoggedIn() {
        var token = localStorage.getItem('token');
        if (token)
            return true;
        else
            return false;
    }
    logOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        this.router.navigate(['/']);
        return true;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/service/data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let DataService = class DataService {
    // constructor(@Inject(GetprofileserviceService) adminData) {
    //   adminData.getAdminData().subscribe((response: any) => {
    //      
    //     if (response.response) {
    //       this.data = response.response
    //       console.log(this.data)
    //     } else {
    //       alert('Something went wrong');
    //     }
    //   },
    //     error => {
    //       if (error) {
    //         // this.error_message = error.error.message
    //         alert("asdkjaksda")
    //       }
    //     })
    // }
    constructor() {
        // data = JSON.parse(localStorage.getItem('rippleadmindata'))
        this.DataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("s");
        this.currentData = this.DataSource.asObservable();
    }
    changeData(data) {
        this.DataSource.next(data);
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/service/messaging.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/messaging.service.ts ***!
  \**********************************************/
/*! exports provided: MessagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return MessagingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/messaging */ "./node_modules/@angular/fire/messaging/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let MessagingService = class MessagingService {
    constructor(angularFireDB, angularFireAuth, angularFireMessaging) {
        this.angularFireDB = angularFireDB;
        this.angularFireAuth = angularFireAuth;
        this.angularFireMessaging = angularFireMessaging;
        // firebaseSW = firebaseSW
        this.currentMessage = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.angularFireMessaging.messaging.subscribe((_messaging) => {
            _messaging.onMessage = _messaging.onMessage.bind(_messaging);
            _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
        });
    }
    /**
     * update token in firebase database
     *
     * @param userId userId as a key
     * @param token token as a value
     */
    updateToken(userId, token) {
        // we can change this function to request our backend service
        this.angularFireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(() => {
            const data = {};
            data[userId] = token;
            this.angularFireDB.object('fcmTokens/').update(data);
        });
    }
    /**
     * request permission for notification from firebase cloud messaging
     *
     * @param userId userId
     */
    requestPermission(userId) {
        this.angularFireMessaging.requestToken.subscribe((token) => {
            console.log(token, "Notification Token");
            localStorage.setItem("NToken", token);
            this.updateToken(userId, token);
        }, (err) => {
            console.error('Unable to get permission to notify.', err);
        });
    }
    //   requestPermission(userId) {
    //       var that = this
    //        
    //     navigator.serviceWorker.register('firebase-messaging-sw.js').then(function(reg){
    //  
    //         var userToken = "3";
    //         firebase.messaging().useServiceWorker(reg);
    //         firebase.messaging().requestPermission().then(() => firebase.messaging().getToken())
    //         .then(token => {
    //            
    //           userToken = token;
    //           console.log(userToken,'userToken')
    //           window.localStorage.setItem('rentoDeviceToken', userToken);
    //           if(userToken){
    //        }
    //         })
    //         .catch(err => {
    //           console.log('Denied', err)
    //           window.location.reload();
    //         })
    //     })
    //   }
    /**
     * hook method when new notification received in foreground
     */
    receiveMessage() {
        this.angularFireMessaging.messages.subscribe((payload) => {
            console.log("new message received. ", payload);
            this.currentMessage.next(payload);
        }, error => {
            console.log(error.error.message);
        });
    }
};
MessagingService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_4__["AngularFireMessaging"] }
];
MessagingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MessagingService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // baseUrl: 'http://13.127.14.7/',
    // baseUrl: 'https://insite.city/',
    baseUrl: 'https://api.insite.city/',
    // baseUrl: 'https://a0038b87ea90.ngrok.io/',
    firebase: {
        apiKey: "AIzaSyC9q-SZ_pttEd_8tyE_-3CIOgXGqjkVdf4",
        authDomain: "insite-ios-1571744890805.firebaseapp.com",
        databaseURL: "https://insite-ios-1571744890805.firebaseio.com",
        projectId: "insite-ios-1571744890805",
        storageBucket: "insite-ios-1571744890805.appspot.com",
        messagingSenderId: "763270833053",
        appId: "1:763270833053:web:b3511a62ccef614df00574",
        measurementId: "G-D36G7W1RVC"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\webapp\insite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map