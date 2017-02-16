"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var GalleryComponent = (function () {
    function GalleryComponent() {
        this.images = [
            { "url": "https://static.pexels.com/photos/27714/pexels-photo-27714.jpg" },
            { "url": "./app/assets/images/angela.jpg" },
            { "url": "https://static.pexels.com/photos/1848/nature-sunny-red-flowers.jpg" },
            { "url": "https://static.pexels.com/photos/27714/pexels-photo-27714.jpg" },
            { "url": "https://static.pexels.com/photos/27714/pexels-photo-27714.jpg" },
            { "url": "https://static.pexels.com/photos/27714/pexels-photo-27714.jpg" },
            { "url": "https://static.pexels.com/photos/27714/pexels-photo-27714.jpg" },
            { "url": "https://static.pexels.com/photos/27714/pexels-photo-27714.jpg" },
            { "url": "https://static.pexels.com/photos/27714/pexels-photo-27714.jpg" },
            { "url": "https://static.pexels.com/photos/27714/pexels-photo-27714.jpg" },
            { "url": "https://static.pexels.com/photos/27714/pexels-photo-27714.jpg" },
            { "url": "https://static.pexels.com/photos/27714/pexels-photo-27714.jpg" }
        ];
    }
    GalleryComponent.prototype.setSelectedImage = function (image) {
        this.selectedImage = image;
    };
    GalleryComponent = __decorate([
        core_1.Component({
            selector: 'galler',
            template: "\n\t<div>\n\t <gallery [datasource]=images></gallery>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.js.map