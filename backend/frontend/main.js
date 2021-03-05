(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kungf\Desktop\Projects\XMeme Project\XMeme\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\r\n  background-color: black;\r\n  color: white;\r\n  top: 0;\r\n  height: 70px;\r\n  box-shadow: 0 3px 6px rgba(245, 245, 245, 0.747);\r\n}\r\n\r\n.site-title {\r\n  font-family: \"Permanent Marker\", cursive;\r\n  font-size: 2rem;\r\n  margin: 10px;\r\n}\r\n\r\n.content-div {\r\n  margin-top: 75px;\r\n  width: 100%;\r\n  color: white;\r\n}\r\n\r\n.card {\r\n  background-color: black;\r\n}\r\n\r\n.post {\r\n  padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixNQUFNO0VBQ04sWUFBWTtFQUNaLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNzQ3KTtcclxufVxyXG5cclxuLnNpdGUtdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBlcm1hbmVudCBNYXJrZXJcIiwgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1kaXYge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5wb3N0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "AytR":
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
var environment = {
    production: false
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

/***/ "ENZJ":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



var PostService = /** @class */ (function () {
    function PostService(_http) {
        this._http = _http;
        this.server_url = "";
    }
    // Get 100 most recent memes
    PostService.prototype.getMemes = function () {
        return this._http.get(this.server_url + "/memes");
    };
    // Get message by id
    PostService.prototype.getMeme = function (id) {
        return this._http.get(this.server_url + "/memes/" + id);
    };
    // Post meme
    PostService.prototype.postMeme = function (url, name, caption) {
        return this._http.post(this.server_url + "/memes", {
            url: url,
            name: name,
            caption: caption,
        });
    };
    // Edit meme
    PostService.prototype.patchMeme = function (id, url, caption) {
        return this._http.patch(this.server_url + "/memes/" + id, {
            url: url,
            caption: caption,
        });
    };
    // Delete a meme
    PostService.prototype.deleteMeme = function (id) {
        return this._http.delete(this.server_url + "/memes/" + id);
    };
    PostService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/post.service */ "ENZJ");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");






var AppComponent = /** @class */ (function () {
    function AppComponent(_postService) {
        this._postService = _postService;
        this.faRedo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faRedo"];
        this.posts = [];
        this.error = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadPosts();
    };
    // Get posts from the setrvice
    AppComponent.prototype.loadPosts = function () {
        var _this = this;
        this._postService.getMemes().subscribe(function (res) {
            _this.posts = res;
        });
    };
    // Remove a post from the list
    AppComponent.prototype.removePost = function (i) {
        this.posts.splice(i, 1);
    };
    // Change error string to display error alert
    AppComponent.prototype.changeError = function (e) {
        console.log(e);
        this.error = e;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-root",
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "UcF+":
/*!****************************************************!*\
  !*** ./src/app/form-modal/form-modal.component.ts ***!
  \****************************************************/
/*! exports provided: FormModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModalComponent", function() { return FormModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-modal.component.html */ "kpvw");
/* harmony import */ var _form_modal_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-modal.component.css */ "Xiut");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/post.service */ "ENZJ");








var FormModalComponent = /** @class */ (function () {
    function FormModalComponent(modalService, _postService, formBuilder) {
        this.modalService = modalService;
        this._postService = _postService;
        this.formBuilder = formBuilder;
        this.validUrl = true;
        this.errorOccured = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlus"];
    }
    FormModalComponent.prototype.onImageError = function () {
        this.validUrl = false;
    };
    FormModalComponent.prototype.onImageLoad = function () {
        this.validUrl = true;
    };
    FormModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postForm = this.formBuilder.group({
            url: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            caption: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        this.postForm.controls.url.valueChanges.subscribe(function (url) {
            _this.validUrl = true;
        });
    };
    FormModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title" })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    FormModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    // Get Meme to add to add into posts list
    FormModalComponent.prototype.getMeme = function (id) {
        var _this = this;
        this._postService.getMeme(id).subscribe(function (res) { return _this.posts.unshift(res); });
    };
    FormModalComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var url = this.postForm.get("url").value;
        var name = this.postForm.get("name").value;
        var caption = this.postForm.get("caption").value;
        // Post meme to the backend
        this._postService.postMeme(url, name, caption).subscribe(function (res) { return _this.getMeme(res["id"]); }, function (err) {
            var s = err.status + ": " + err.error.error;
            console.log(s);
            _this.errorOccured.emit(s);
        });
        // Reset form
        this.postForm.setValue({ url: "", name: "", caption: "" });
        this.modalService.dismissAll();
    };
    FormModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
        { type: _services_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    FormModalComponent.propDecorators = {
        posts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        errorOccured: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    FormModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-form-modal",
            template: _raw_loader_form_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_form_modal_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _services_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], FormModalComponent);
    return FormModalComponent;
}());



/***/ }),

/***/ "VeAV":
/*!***************************************************************!*\
  !*** ./src/app/edit-form-modal/edit-form-modal.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post-btn {\r\n  margin: 10px;\r\n  height: 50px;\r\n  width: 50px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.name-input {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.image-prev-div {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtZm9ybS1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImVkaXQtZm9ybS1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtYnRuIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm5hbWUtaW5wdXQge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2LWRpdiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Navbar with website title and Refreshing the memes -->\n<nav class=\"navbar title fixed-top justify-content-between\">\n  <h1 class=\"site-title\">XMEME STREAM</h1>\n  <button type=\"button\" class=\"btn btn-dark btn-lg\" (click)=\"loadPosts()\">\n    <fa-icon [icon]=\"faRedo\"></fa-icon>\n  </button>\n</nav>\n\n<!-- List of Posts -->\n<div class=\"row content-div justify-content-center\">\n  <div class=\"col-sm-8 card rounded\">\n    <div *ngIf=\"posts.length == 0\" class=\"row justify-content-center\">\n      <div\n        class=\"card col-sm-6 border-warning text-warning justify-content-center\"\n      >\n        <div class=\"card-body\">No posts yet</div>\n      </div>\n    </div>\n    <app-post\n      *ngFor=\"let post of posts; index as i\"\n      (onDelete)=\"removePost(i)\"\n      (errorOccured)=\"changeError($event)\"\n      [i]=\"i\"\n      [id]=\"post.id\"\n      [name]=\"post.name\"\n      [url]=\"post.url\"\n      [caption]=\"post.caption\"\n    ></app-post>\n  </div>\n</div>\n\n<!-- Add Post Form Modal -->\n<app-form-modal\n  (errorOccured)=\"changeError($event)\"\n  [posts]=\"posts\"\n></app-form-modal>\n\n<!-- Error Alert -->\n<div *ngIf=\"error != ''\" class=\"fixed-bottom col-4 ml-auto z-4\">\n  <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n    \"{{ error }}\"\n    <button\n      type=\"button\"\n      class=\"close full-width\"\n      data-dismiss=\"alert\"\n      aria-label=\"Close\"\n      (click)=\"changeError('')\"\n    >\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "WmXN":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-form-modal/edit-form-modal.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Edit Meme</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n    <span aria-hidden=\"true\">×</span>\n  </button>\n</div>\n<form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"modal-body\">\n    <!-- Image Preview Section -->\n    <div *ngIf=\"editForm.controls.url.value == ''\" class=\"card image-prev-div\">\n      <div class=\"card-body justify-content-center\">Image Preview</div>\n    </div>\n    <div\n      *ngIf=\"!validUrl && editForm.controls.url.value != ''\"\n      class=\"card border-danger image-prev-div\"\n    >\n      <div class=\"card-body text-danger justify-content-center\">\n        Error: Image Falied to load\n      </div>\n    </div>\n    <div *ngIf=\"validUrl\" class=\"card image-prev-div\">\n      <div class=\"card-body justify-content-center\">\n        <img\n          *ngIf=\"validUrl\"\n          class=\"card-img-top\"\n          src=\"{{ editForm.controls.url.value }}\"\n          (error)=\"onImageError()\"\n          (load)=\"onImageLoad()\"\n        />\n      </div>\n    </div>\n    <!-- Image Url input  -->\n    <input\n      class=\"form-control name-input\"\n      type=\"text\"\n      placeholder=\"Image URL\"\n      formControlName=\"url\"\n      required\n    />\n    <!-- Caption Input -->\n    <textarea\n      class=\"form-control\"\n      placeholder=\"Caption\"\n      formControlName=\"caption\"\n      required\n    ></textarea>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"close()\">\n      CANCEL\n    </button>\n    <button\n      class=\"btn btn-outline-primary\"\n      type=\"submit\"\n      [disabled]=\"!editForm.valid || !validUrl\"\n    >\n      EDIT\n    </button>\n  </div>\n</form>\n");

/***/ }),

/***/ "X/D+":
/*!**************************************************************!*\
  !*** ./src/app/edit-form-modal/edit-form-modal.component.ts ***!
  \**************************************************************/
/*! exports provided: EditFormModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormModalComponent", function() { return EditFormModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_form_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-form-modal.component.html */ "WmXN");
/* harmony import */ var _edit_form_modal_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-form-modal.component.css */ "VeAV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/post.service */ "ENZJ");







var EditFormModalComponent = /** @class */ (function () {
    function EditFormModalComponent(modalService, _postService, formBuilder) {
        this.modalService = modalService;
        this._postService = _postService;
        this.formBuilder = formBuilder;
        this.editSubmitted = false;
        this.validUrl = true;
    }
    EditFormModalComponent.prototype.onImageError = function () {
        this.validUrl = false;
    };
    EditFormModalComponent.prototype.onImageLoad = function () {
        this.validUrl = true;
    };
    EditFormModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            url: [this.url, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            caption: [this.caption, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        this.editForm.controls.url.valueChanges.subscribe(function (url) {
            _this.validUrl = true;
        });
    };
    EditFormModalComponent.prototype.close = function () {
        this.modalService.close();
    };
    EditFormModalComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var url = this.editForm.get("url").value;
        var caption = this.editForm.get("caption").value;
        // Edit meme in the backend
        this._postService.patchMeme(this.id, url, caption).subscribe(function (res) {
            _this.modalService.close(res);
        }, function (err) {
            var s = err.status + ": " + err.error.error;
            console.log(s);
            _this.errorOccured.emit(s);
            _this.modalService.close(err);
        }); //dismiss the modal
    };
    EditFormModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] },
        { type: _services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    EditFormModalComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        caption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        errorOccured: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    EditFormModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-edit-form-modal",
            template: _raw_loader_edit_form_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_edit_form_modal_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"],
            _services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EditFormModalComponent);
    return EditFormModalComponent;
}());



/***/ }),

/***/ "Xiut":
/*!*****************************************************!*\
  !*** ./src/app/form-modal/form-modal.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post-btn {\r\n  margin: 10px;\r\n  height: 50px;\r\n  width: 50px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.name-input {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.image-prev-div {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJmb3JtLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1idG4ge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ubmFtZS1pbnB1dCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmltYWdlLXByZXYtZGl2IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/post.component */ "fQWx");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _form_modal_form_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-modal/form-modal.component */ "UcF+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _edit_form_modal_edit_form_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-form-modal/edit-form-modal.component */ "X/D+");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"],
                _form_modal_form_modal_component__WEBPACK_IMPORTED_MODULE_9__["FormModalComponent"],
                _edit_form_modal_edit_form_modal_component__WEBPACK_IMPORTED_MODULE_11__["EditFormModalComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ZGUQ":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row justify-content-center cont\">\n  <div\n    class=\"col-lg-6 card border border-white post rounded\"\n    style=\"width: 18rem\"\n  >\n    <div class=\"d-flex card-heading\">\n      <!-- Name of the creator -->\n      <h5 class=\"card-title title-font\">{{ name }}</h5>\n      <div class=\"ml-auto\">\n        <!-- Delete Button -->\n        <button\n          type=\"button\"\n          class=\"btn btn-sm btn-outline-danger btn-margin\"\n          (click)=\"deletePost()\"\n        >\n          <fa-icon [icon]=\"faTrashAlt\"></fa-icon>\n        </button>\n        <!-- Edit Button -->\n        <button\n          type=\"button\"\n          class=\"btn btn-sm btn-outline-light\"\n          (click)=\"openModal()\"\n        >\n          <fa-icon [icon]=\"faEdit\"></fa-icon>\n        </button>\n      </div>\n    </div>\n    <!-- Error Message -->\n    <div *ngIf=\"!validUrl\" class=\"card border-danger\">\n      <div class=\"card-body text-danger justify-content-center\">\n        Error: Image Falied to load\n      </div>\n    </div>\n    <!-- Image Block -->\n    <img\n      *ngIf=\"validUrl\"\n      class=\"card-img-top\"\n      src=\"{{ url }}\"\n      (error)=\"onImageError($event)\"\n    />\n    <!-- Caption Block -->\n    <div class=\"card-body\">\n      <p class=\"card-text\">\n        {{ caption }}\n      </p>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "eMiF":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cont {\r\n  margin: 10px;\r\n}\r\n\r\n.card {\r\n  background-color: black;\r\n}\r\n\r\n.post {\r\n  padding: 20px;\r\n}\r\n\r\n.card-heading {\r\n  padding: 0;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.btn-margin {\r\n  margin-right: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoicG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnQge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucG9zdCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGluZyB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5idG4tbWFyZ2luIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "fQWx":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post.component.html */ "ZGUQ");
/* harmony import */ var _post_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.component.css */ "eMiF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _edit_form_modal_edit_form_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-form-modal/edit-form-modal.component */ "X/D+");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/post.service */ "ENZJ");








var PostComponent = /** @class */ (function () {
    function PostComponent(modalService, _postService) {
        this.modalService = modalService;
        this._postService = _postService;
        this.validUrl = true;
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEdit"];
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrashAlt"];
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.errorOccured = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    PostComponent.prototype.ngOnInit = function () { };
    PostComponent.prototype.onImageError = function (event) {
        this.validUrl = false;
    };
    // Delete post from parent component
    PostComponent.prototype.deletePost = function () {
        var _this = this;
        this._postService.deleteMeme(this.id).subscribe(function (res) {
            _this.onDelete.emit(_this.i);
        });
    };
    // Open Edit Form Modal
    PostComponent.prototype.openModal = function () {
        var _this = this;
        var modalRef = this.modalService.open(_edit_form_modal_edit_form_modal_component__WEBPACK_IMPORTED_MODULE_6__["EditFormModalComponent"], {
            backdrop: true,
            windowClass: "d-block",
            backdropClass: "modal-backdrop",
        });
        modalRef.componentInstance.id = this.id;
        modalRef.componentInstance.url = this.url;
        modalRef.componentInstance.caption = this.caption;
        modalRef.componentInstance.errorOccured = this.errorOccured;
        modalRef.result.then(function (res) {
            _this.url = res["url"];
            _this.caption = res["caption"];
        });
    };
    PostComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
        { type: _services_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"] }
    ]; };
    PostComponent.propDecorators = {
        i: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        caption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        onDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        errorOccured: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    PostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-post",
            template: _raw_loader_post_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_post_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _services_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "kpvw":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-modal/form-modal.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Form Modal Opening Button -->\n<div class=\"fixed-bottom row justify-content-center\">\n  <button\n    type=\"button\"\n    class=\"btn btn-light btn-lg post-btn\"\n    (click)=\"open(postModal)\"\n  >\n    <fa-icon [icon]=\"faPlus\"></fa-icon>\n  </button>\n</div>\n\n<ng-template #postModal let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Post a new Meme</h4>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"modal.dismiss('Cross click')\"\n    >\n      <span aria-hidden=\"true\">×</span>\n    </button>\n  </div>\n  <form [formGroup]=\"postForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"modal-body\">\n      <!-- Imahge Preview Section -->\n      <div\n        *ngIf=\"postForm.controls.url.value == ''\"\n        class=\"card image-prev-div\"\n      >\n        <div class=\"card-body justify-content-center\">Image Preview</div>\n      </div>\n      <div\n        *ngIf=\"!validUrl && postForm.controls.url.value != ''\"\n        class=\"card border-danger image-prev-div\"\n      >\n        <div class=\"card-body text-danger justify-content-center\">\n          Error: Image Falied to load\n        </div>\n      </div>\n      <div *ngIf=\"validUrl\" class=\"card image-prev-div\">\n        <div class=\"card-body justify-content-center\">\n          <img\n            *ngIf=\"validUrl\"\n            class=\"card-img-top\"\n            src=\"{{ postForm.controls.url.value }}\"\n            (error)=\"onImageError()\"\n            (load)=\"onImageLoad()\"\n          />\n        </div>\n      </div>\n      <!-- Image Input -->\n      <input\n        class=\"form-control name-input\"\n        type=\"text\"\n        placeholder=\"Image URL\"\n        formControlName=\"url\"\n        required\n      />\n      <!-- Name input -->\n      <input\n        class=\"form-control name-input\"\n        type=\"text\"\n        placeholder=\"Name\"\n        formControlName=\"name\"\n        required\n      />\n      <!-- Caption input -->\n      <textarea\n        class=\"form-control\"\n        placeholder=\"Caption\"\n        formControlName=\"caption\"\n        required\n      ></textarea>\n    </div>\n    <div class=\"modal-footer\">\n      <button\n        type=\"button\"\n        class=\"btn btn-outline-danger\"\n        (click)=\"modal.close('Cross click')\"\n      >\n        CANCEL\n      </button>\n      <button\n        class=\"btn btn-outline-primary\"\n        type=\"submit\"\n        [disabled]=\"!postForm.valid || !validUrl\"\n      >\n        POST\n      </button>\n    </div>\n  </form>\n</ng-template>\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map