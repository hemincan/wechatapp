'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoodsDetails = function (_wepy$page) {
    _inherits(GoodsDetails, _wepy$page);

    function GoodsDetails() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GoodsDetails);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoodsDetails.__proto__ || Object.getPrototypeOf(GoodsDetails)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '商品详情'
        }, _this.components = {}, _this.data = {
            photoList: [{
                url: '/images/pic_article.png'
            }, {
                url: '/images/pic_article.png'
            }, {
                url: '/images/pic_article.png'
            }, {
                url: '/images/pic_article.png'
            }]
        }, _this.computed = {}, _this.methods = {
            previewImage: function previewImage(e) {
                var current = e.target.dataset.src;
                // console.log(current)
                var imageArry = [];
                var obj = this.photoList;
                Object.keys(obj).forEach(function (index) {
                    // console.log(index)
                    imageArry.push(obj[index].url);
                });
                wx.previewImage({
                    current: current, // 当前显示图片的http链接
                    urls: imageArry // 需要预览的图片http链接列表
                });
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GoodsDetails, [{
        key: 'onReachBottom',
        value: function onReachBottom() {}
    }, {
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return GoodsDetails;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(GoodsDetails , 'pages/goodsDetails'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2RzRGV0YWlscy5qcyJdLCJuYW1lcyI6WyJHb29kc0RldGFpbHMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJwaG90b0xpc3QiLCJ1cmwiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJwcmV2aWV3SW1hZ2UiLCJlIiwiY3VycmVudCIsInRhcmdldCIsImRhdGFzZXQiLCJzcmMiLCJpbWFnZUFycnkiLCJvYmoiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImluZGV4IiwicHVzaCIsInd4IiwidXJscyIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7OztzTUFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBd0I7QUFEakIsUyxRQUdUQyxVLEdBQWEsRSxRQUliQyxJLEdBQU87QUFDSEMsdUJBQVUsQ0FDTjtBQUNJQyxxQkFBSTtBQURSLGFBRE0sRUFJTDtBQUNHQSxxQkFBSTtBQURQLGFBSkssRUFPTDtBQUNHQSxxQkFBSTtBQURQLGFBUEssRUFVTDtBQUNHQSxxQkFBSTtBQURQLGFBVks7QUFEUCxTLFFBaUJQQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVU7QUFDUEMsd0JBRE8sd0JBQ01DLENBRE4sRUFDUztBQUNiLG9CQUFJQyxVQUFVRCxFQUFFRSxNQUFGLENBQVNDLE9BQVQsQ0FBaUJDLEdBQS9CO0FBQ0E7QUFDQSxvQkFBSUMsWUFBWSxFQUFoQjtBQUNBLG9CQUFJQyxNQUFNLEtBQUtYLFNBQWY7QUFDQVksdUJBQU9DLElBQVAsQ0FBWUYsR0FBWixFQUFpQkcsT0FBakIsQ0FBeUIsVUFBQ0MsS0FBRCxFQUFXO0FBQ2xDO0FBQ0FMLDhCQUFVTSxJQUFWLENBQWVMLElBQUlJLEtBQUosRUFBV2QsR0FBMUI7QUFDRCxpQkFIRDtBQUlBZ0IsbUJBQUdiLFlBQUgsQ0FBZ0I7QUFDZEUsNkJBQVNBLE9BREssRUFDSTtBQUNsQlksMEJBQU1SLFNBRlEsQ0FFRztBQUZILGlCQUFoQjtBQUlEO0FBZEssUyxRQWlCVlMsTSxHQUFTLEU7Ozs7O3dDQUdPLENBRWY7OztpQ0FDUSxDQUVSOzs7O0VBdER1Q0MsZUFBS0MsSTs7a0JBQTFCMUIsWSIsImZpbGUiOiJnb29kc0RldGFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBHb29kc0RldGFpbHMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ZWG5ZOB6K+m5oOFJ1xyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgcGhvdG9MaXN0OltcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOicvaW1hZ2VzL3BpY19hcnRpY2xlLnBuZydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDonL2ltYWdlcy9waWNfYXJ0aWNsZS5wbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmw6Jy9pbWFnZXMvcGljX2FydGljbGUucG5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOicvaW1hZ2VzL3BpY19hcnRpY2xlLnBuZydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICBwcmV2aWV3SW1hZ2UoZSkge1xyXG4gICAgICAgICAgbGV0IGN1cnJlbnQgPSBlLnRhcmdldC5kYXRhc2V0LnNyYztcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnQpXHJcbiAgICAgICAgICBsZXQgaW1hZ2VBcnJ5ID0gW107XHJcbiAgICAgICAgICBsZXQgb2JqID0gdGhpcy5waG90b0xpc3Q7XHJcbiAgICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goKGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgICAgICBpbWFnZUFycnkucHVzaChvYmpbaW5kZXhdLnVybClcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgd3gucHJldmlld0ltYWdlKHtcclxuICAgICAgICAgICAgY3VycmVudDogY3VycmVudCwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxyXG4gICAgICAgICAgICB1cmxzOiBpbWFnZUFycnksIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgIFxyXG4gICAgfTtcclxuICAgIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICAgICBcclxuICAgIH07XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICBcclxuICAgIH1cclxuICB9XHJcbiJdfQ==