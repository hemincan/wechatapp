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

var AllGoods = function (_wepy$page) {
   _inherits(AllGoods, _wepy$page);

   function AllGoods() {
      var _ref;

      var _temp, _this2, _ret;

      _classCallCheck(this, AllGoods);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
         args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = AllGoods.__proto__ || Object.getPrototypeOf(AllGoods)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
         navigationBarTitleText: '分类'
      }, _this2.components = {}, _this2.data = {
         scrollTop: 100,
         windowHeight: 0,
         list: {},
         //一级分类数据
         rootcateList: [{
            id: 1,
            name: '槈霜夺'
         }, {
            id: 2,
            name: '槈霜夺'
         }, {
            id: 3,
            name: '槈霜夺',
            active: true
         }],
         //二级三级分类数据
         childcateList: [{
            id: 1,
            name: '槈霜夺',
            thumLogo: '../images/goods02.png'
         }, {
            id: 1,
            name: '槈霜夺',
            thumLogo: '../images/goods02.png'
         }, {
            id: 1,
            name: '槈霜夺',
            thumLogo: '../images/goods02.png'
         }, {
            id: 1,
            name: '槈霜夺',
            thumLogo: '../images/goods02.png'
         }, {
            id: 1,
            name: '槈霜夺',
            thumLogo: '../images/goods02.png'
         }, {
            id: 1,
            name: '槈霜夺',
            thumLogo: '../images/goods02.png'
         }, {
            id: 1,
            name: '槈霜夺',
            thumLogo: '../images/goods02.png'
         }, {
            id: 1,
            name: '槈霜夺',
            thumLogo: '../images/goods02.png'
         }, {
            id: 1,
            name: '槈霜夺',
            thumLogo: '../images/goods02.png'
         }]
      }, _this2.computed = {}, _this2.methods = {
         changeCate: function changeCate(item) {
            //设置一级分类的选中状态
            for (var i = this.rootcateList.length - 1; i >= 0; i--) {
               if (this.rootcateList[i].id == item.id) {
                  this.rootcateList[i].active = true;
               } else {
                  this.rootcateList[i].active = false;
               }
            }
         }
      }, _this2.events = {}, _temp), _possibleConstructorReturn(_this2, _ret);
   }

   _createClass(AllGoods, [{
      key: 'onReachBottom',
      value: function onReachBottom() {}
   }, {
      key: 'onLoad',
      value: function onLoad() {
         var _this = this;
         //获取系统 的信息
         wx.getSystemInfo({
            success: function success(res) {
               _this.windowHeight = res.screenHeight;
            }
         });
      }
   }]);

   return AllGoods;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(AllGoods , 'pages/allGoods'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbEdvb2RzLmpzIl0sIm5hbWVzIjpbIkFsbEdvb2RzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwic2Nyb2xsVG9wIiwid2luZG93SGVpZ2h0IiwibGlzdCIsInJvb3RjYXRlTGlzdCIsImlkIiwibmFtZSIsImFjdGl2ZSIsImNoaWxkY2F0ZUxpc3QiLCJ0aHVtTG9nbyIsImNvbXB1dGVkIiwibWV0aG9kcyIsImNoYW5nZUNhdGUiLCJpdGVtIiwiaSIsImxlbmd0aCIsImV2ZW50cyIsIl90aGlzIiwid3giLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsInNjcmVlbkhlaWdodCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzsrTEFDbkJDLE0sR0FBUztBQUNQQyxpQ0FBd0I7QUFEakIsTyxTQUdUQyxVLEdBQWEsRSxTQUliQyxJLEdBQU87QUFDSEMsb0JBQVcsR0FEUjtBQUVIQyx1QkFBYyxDQUZYO0FBR0hDLGVBQU0sRUFISDtBQUlIO0FBQ0FDLHVCQUFjLENBQ1Q7QUFDR0MsZ0JBQUcsQ0FETjtBQUVHQyxrQkFBSztBQUZSLFVBRFMsRUFLUjtBQUNFRCxnQkFBRyxDQURMO0FBRUVDLGtCQUFLO0FBRlAsVUFMUSxFQVNSO0FBQ0VELGdCQUFHLENBREw7QUFFRUMsa0JBQUssS0FGUDtBQUdFQyxvQkFBTztBQUhULFVBVFEsQ0FMWDtBQW9CSDtBQUNBQyx3QkFBZSxDQUNWO0FBQ0dILGdCQUFHLENBRE47QUFFR0Msa0JBQUssS0FGUjtBQUdHRyxzQkFBUztBQUhaLFVBRFUsRUFNVDtBQUNFSixnQkFBRyxDQURMO0FBRUVDLGtCQUFLLEtBRlA7QUFHRUcsc0JBQVM7QUFIWCxVQU5TLEVBV1Q7QUFDRUosZ0JBQUcsQ0FETDtBQUVFQyxrQkFBSyxLQUZQO0FBR0VHLHNCQUFTO0FBSFgsVUFYUyxFQWdCVDtBQUNFSixnQkFBRyxDQURMO0FBRUVDLGtCQUFLLEtBRlA7QUFHRUcsc0JBQVM7QUFIWCxVQWhCUyxFQXFCVDtBQUNFSixnQkFBRyxDQURMO0FBRUVDLGtCQUFLLEtBRlA7QUFHRUcsc0JBQVM7QUFIWCxVQXJCUyxFQTBCVDtBQUNFSixnQkFBRyxDQURMO0FBRUVDLGtCQUFLLEtBRlA7QUFHRUcsc0JBQVM7QUFIWCxVQTFCUyxFQStCVDtBQUNFSixnQkFBRyxDQURMO0FBRUVDLGtCQUFLLEtBRlA7QUFHRUcsc0JBQVM7QUFIWCxVQS9CUyxFQW9DVDtBQUNFSixnQkFBRyxDQURMO0FBRUVDLGtCQUFLLEtBRlA7QUFHRUcsc0JBQVM7QUFIWCxVQXBDUyxFQXlDVDtBQUNFSixnQkFBRyxDQURMO0FBRUVDLGtCQUFLLEtBRlA7QUFHRUcsc0JBQVM7QUFIWCxVQXpDUztBQXJCWixPLFNBc0VQQyxRLEdBQVcsRSxTQUlYQyxPLEdBQVU7QUFDTkMsbUJBRE0sc0JBQ0tDLElBREwsRUFDVztBQUNaO0FBQ0EsaUJBQUssSUFBSUMsSUFBSSxLQUFLVixZQUFMLENBQWtCVyxNQUFsQixHQUEyQixDQUF4QyxFQUEyQ0QsS0FBSyxDQUFoRCxFQUFtREEsR0FBbkQsRUFBd0Q7QUFDcEQsbUJBQUcsS0FBS1YsWUFBTCxDQUFrQlUsQ0FBbEIsRUFBcUJULEVBQXJCLElBQXlCUSxLQUFLUixFQUFqQyxFQUFvQztBQUNqQyx1QkFBS0QsWUFBTCxDQUFrQlUsQ0FBbEIsRUFBcUJQLE1BQXJCLEdBQThCLElBQTlCO0FBQ0YsZ0JBRkQsTUFFSztBQUNGLHVCQUFLSCxZQUFMLENBQWtCVSxDQUFsQixFQUFxQlAsTUFBckIsR0FBOEIsS0FBOUI7QUFDRjtBQUNKO0FBQ0w7QUFWSyxPLFNBYVZTLE0sR0FBUyxFOzs7OztzQ0FHTyxDQUVmOzs7K0JBQ1E7QUFDTixhQUFJQyxRQUFRLElBQVo7QUFDQTtBQUNBQyxZQUFHQyxhQUFILENBQWlCO0FBQ1pDLHFCQUFRLGlCQUFTQyxHQUFULEVBQWE7QUFDakJKLHFCQUFNZixZQUFOLEdBQXFCbUIsSUFBSUMsWUFBekI7QUFDSDtBQUhXLFVBQWpCO0FBS0Y7Ozs7RUE3R21DQyxlQUFLQyxJOztrQkFBdEI1QixRIiwiZmlsZSI6ImFsbEdvb2RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxsR29vZHMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YiG57G7J1xyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiAxMDAsXHJcbiAgICAgICAgd2luZG93SGVpZ2h0OiAwLFxyXG4gICAgICAgIGxpc3Q6IHt9LFxyXG4gICAgICAgIC8v5LiA57qn5YiG57G75pWw5o2uXHJcbiAgICAgICAgcm9vdGNhdGVMaXN0OiBbXHJcbiAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICAgICAgbmFtZTon5qeI6Zyc5aS6J1xyXG4gICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDoyLFxyXG4gICAgICAgICAgICAgICAgbmFtZTon5qeI6Zyc5aS6J1xyXG4gICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDozLFxyXG4gICAgICAgICAgICAgICAgbmFtZTon5qeI6Zyc5aS6JyxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTp0cnVlXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICAvL+S6jOe6p+S4iee6p+WIhuexu+aVsOaNrlxyXG4gICAgICAgIGNoaWxkY2F0ZUxpc3Q6IFtcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgICAgICBuYW1lOifmp4jpnJzlpLonLFxyXG4gICAgICAgICAgICAgICAgdGh1bUxvZ286Jy4uL2ltYWdlcy9nb29kczAyLnBuZydcclxuICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6MSxcclxuICAgICAgICAgICAgICAgIG5hbWU6J+aniOmcnOWkuicsXHJcbiAgICAgICAgICAgICAgICB0aHVtTG9nbzonLi4vaW1hZ2VzL2dvb2RzMDIucG5nJ1xyXG4gICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICAgICAgbmFtZTon5qeI6Zyc5aS6JyxcclxuICAgICAgICAgICAgICAgIHRodW1Mb2dvOicuLi9pbWFnZXMvZ29vZHMwMi5wbmcnXHJcbiAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgICAgICBuYW1lOifmp4jpnJzlpLonLFxyXG4gICAgICAgICAgICAgICAgdGh1bUxvZ286Jy4uL2ltYWdlcy9nb29kczAyLnBuZydcclxuICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6MSxcclxuICAgICAgICAgICAgICAgIG5hbWU6J+aniOmcnOWkuicsXHJcbiAgICAgICAgICAgICAgICB0aHVtTG9nbzonLi4vaW1hZ2VzL2dvb2RzMDIucG5nJ1xyXG4gICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICAgICAgbmFtZTon5qeI6Zyc5aS6JyxcclxuICAgICAgICAgICAgICAgIHRodW1Mb2dvOicuLi9pbWFnZXMvZ29vZHMwMi5wbmcnXHJcbiAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgICAgICBuYW1lOifmp4jpnJzlpLonLFxyXG4gICAgICAgICAgICAgICAgdGh1bUxvZ286Jy4uL2ltYWdlcy9nb29kczAyLnBuZydcclxuICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6MSxcclxuICAgICAgICAgICAgICAgIG5hbWU6J+aniOmcnOWkuicsXHJcbiAgICAgICAgICAgICAgICB0aHVtTG9nbzonLi4vaW1hZ2VzL2dvb2RzMDIucG5nJ1xyXG4gICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICAgICAgbmFtZTon5qeI6Zyc5aS6JyxcclxuICAgICAgICAgICAgICAgIHRodW1Mb2dvOicuLi9pbWFnZXMvZ29vZHMwMi5wbmcnXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBjaGFuZ2VDYXRlKGl0ZW0pIHtcclxuICAgICAgICAgICAgIC8v6K6+572u5LiA57qn5YiG57G755qE6YCJ5Lit54q25oCBXHJcbiAgICAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5yb290Y2F0ZUxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICBpZih0aGlzLnJvb3RjYXRlTGlzdFtpXS5pZD09aXRlbS5pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb290Y2F0ZUxpc3RbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvb3RjYXRlTGlzdFtpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgIFxyXG4gICAgfTtcclxuICAgIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICAgICBcclxuICAgIH07XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgLy/ojrflj5bns7vnu58g55qE5L+h5oGvXHJcbiAgICAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcclxuICAgICAgICAgICAgc3VjY2VzczpmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgX3RoaXMud2luZG93SGVpZ2h0ID0gcmVzLnNjcmVlbkhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=