"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CvabastidasService = void 0;
var core_1 = require("@angular/core");
var CvabastidasService = /** @class */ (function () {
    function CvabastidasService(http) {
        this.http = http;
        this.profesional = [];
        this.educacion = [];
        this.testimonio = [];
        this.experiencia = [];
        this.referencias = [];
        this.blog = [];
        this.CargarProfesional();
        this.CargarEducacion();
        this.CargarTestimonio();
        this.CargarExperiencia();
        this.CargarReferencias();
        this.CargarBlog();
    }
    CvabastidasService.prototype.CargarProfesional = function () {
        var _this = this;
        this.http
            .get('https://portafolio-personal-634c6-default-rtdb.firebaseio.com/Profesional.json')
            .subscribe(function (resp) {
            _this.profesional = resp;
            console.log(resp);
        });
    };
    CvabastidasService.prototype.CargarEducacion = function () {
        var _this = this;
        this.http
            .get('https://portafolio-personal-634c6-default-rtdb.firebaseio.com/Educacion.json')
            .subscribe(function (resp) {
            _this.educacion = resp;
            console.log(resp);
        });
    };
    CvabastidasService.prototype.CargarTestimonio = function () {
        var _this = this;
        this.http
            .get('https://portafolio-personal-634c6-default-rtdb.firebaseio.com/Testimonio.json')
            .subscribe(function (resp) {
            _this.testimonio = resp;
            console.log(resp);
        });
    };
    CvabastidasService.prototype.CargarExperiencia = function () {
        var _this = this;
        this.http
            .get('https://portafolio-personal-634c6-default-rtdb.firebaseio.com/Experiencia.json')
            .subscribe(function (resp) {
            _this.experiencia = resp;
            console.log(resp);
        });
    };
    CvabastidasService.prototype.CargarReferencias = function () {
        var _this = this;
        this.http
            .get('https://portafolio-personal-634c6-default-rtdb.firebaseio.com/Referencias.json')
            .subscribe(function (resp) {
            _this.referencias = resp;
            console.log(resp);
        });
    };
    CvabastidasService.prototype.CargarBlog = function () {
        var _this = this;
        this.http
            .get('https://cv-tutorial-70504.firebaseio.com/Blog.json')
            .subscribe(function (resp) {
            _this.blog = resp;
            console.log(resp);
        });
    };
    CvabastidasService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CvabastidasService);
    return CvabastidasService;
}());
exports.CvabastidasService = CvabastidasService;
