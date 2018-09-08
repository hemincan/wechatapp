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

var MallList = function (_wepy$page) {
  _inherits(MallList, _wepy$page);

  function MallList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MallList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MallList.__proto__ || Object.getPrototypeOf(MallList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '商品列表'
    }, _this.components = {}, _this.data = {
      normalView: true,
      inputShowed: false,
      inputVal: '',
      sortItem: [{
        name: '综合'
      }, {
        name: '销量'
      }, {
        name: '新品'
      }, {
        name: '价格'
      }],
      currentSelectSortItem: '综合',
      goodsData: [{
        name: '专用自能锁 全铜新人人工智能优质全铜新人人工智能优质',
        detail: '234234324',
        price: 399
      }, {
        name: '专用自能锁 全铜新人人工智能优质',
        detail: '234234324',
        price: 399
      }, {
        name: '专用自能锁 全铜新人人工智能优质',
        detail: '234234324',
        price: 399
      }, {
        name: '专用自能锁 全铜新人人工智能优质',
        detail: '234234324',
        price: 399
      }, {
        name: '专用自能锁 全铜新人人工智能优质',
        detail: '234234324',
        price: 399
      }, {
        name: '专用自能锁 全铜新人人工智能优质',
        detail: '234234324',
        price: 399
      }, {
        name: '专用自能锁 全铜新人人工智能优质',
        detail: '234234324',
        price: 399
      }, {
        name: '专用自能锁 全铜新人人工智能优质',
        detail: '234234324',
        price: 399
      }, {
        name: '专用自能锁 全铜新人人工智能优质',
        detail: '234234324',
        price: 399
      }, {
        name: '专用自能锁 全铜新人人工智能优质',
        detail: '234234324',
        price: 399
      }],
      icon20: '',
      icon60: ''
    }, _this.computed = {}, _this.methods = {
      showInput: function showInput() {
        this.inputShowed = true;
      },
      hideInput: function hideInput() {
        this.inputVal = '';
        this.inputShowed = false;
      },
      clearInput: function clearInput() {
        this.inputVal = '';
      },
      inputTyping: function inputTyping(e) {
        this.inputVal = e.detail.value;
      },
      sortItemCick: function sortItemCick(item) {
        this.currentSelectSortItem = item.name;
        console.log(item);
      },
      shiftView: function shiftView() {
        this.normalView = !this.normalView;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MallList, [{
    key: 'onReachBottom',
    value: function onReachBottom() {
      for (var i = 0; i < 10; i++) {
        this.goodsData.push({
          name: '111' + i,
          detail: '234234324',
          price: 399
        });
      }
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      _wepy2.default.showNavigationBarLoading();
      console.log("下拉");
      //模拟加载
      setTimeout(function () {
        // complete
        _wepy2.default.hideNavigationBarLoading(); //完成停止加载
        _wepy2.default.stopPullDownRefresh(); //停止下拉刷新
      }, 1500);
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var base64 = require('./../images/base64.js');

      this.icon20 = base64.icon20;
      this.icon60 = base64.icon60;
    }
  }]);

  return MallList;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(MallList , 'pages/mallList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbGxMaXN0LmpzIl0sIm5hbWVzIjpbIk1hbGxMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwibm9ybWFsVmlldyIsImlucHV0U2hvd2VkIiwiaW5wdXRWYWwiLCJzb3J0SXRlbSIsIm5hbWUiLCJjdXJyZW50U2VsZWN0U29ydEl0ZW0iLCJnb29kc0RhdGEiLCJkZXRhaWwiLCJwcmljZSIsImljb24yMCIsImljb242MCIsImNvbXB1dGVkIiwibWV0aG9kcyIsInNob3dJbnB1dCIsImhpZGVJbnB1dCIsImNsZWFySW5wdXQiLCJpbnB1dFR5cGluZyIsImUiLCJ2YWx1ZSIsInNvcnRJdGVtQ2ljayIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwic2hpZnRWaWV3IiwiZXZlbnRzIiwiaSIsInB1c2giLCJ3ZXB5Iiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwic2V0VGltZW91dCIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCJiYXNlNjQiLCJyZXF1aXJlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFJYkMsSSxHQUFPO0FBQ0pDLGtCQUFXLElBRFA7QUFFSkMsbUJBQWEsS0FGVDtBQUdKQyxnQkFBVSxFQUhOO0FBSUpDLGdCQUFTLENBQ047QUFDRUMsY0FBSztBQURQLE9BRE0sRUFJTjtBQUNFQSxjQUFLO0FBRFAsT0FKTSxFQU9OO0FBQ0VBLGNBQUs7QUFEUCxPQVBNLEVBVU47QUFDRUEsY0FBSztBQURQLE9BVk0sQ0FKTDtBQWtCSkMsNkJBQXNCLElBbEJsQjtBQW1CSkMsaUJBQVUsQ0FDUDtBQUNFRixjQUFLLDRCQURQO0FBRUVHLGdCQUFPLFdBRlQ7QUFHRUMsZUFBTTtBQUhSLE9BRE8sRUFNUDtBQUNFSixjQUFLLGtCQURQO0FBRUVHLGdCQUFPLFdBRlQ7QUFHRUMsZUFBTTtBQUhSLE9BTk8sRUFXUDtBQUNFSixjQUFLLGtCQURQO0FBRUVHLGdCQUFPLFdBRlQ7QUFHRUMsZUFBTTtBQUhSLE9BWE8sRUFnQlA7QUFDRUosY0FBSyxrQkFEUDtBQUVFRyxnQkFBTyxXQUZUO0FBR0VDLGVBQU07QUFIUixPQWhCTyxFQXFCUDtBQUNFSixjQUFLLGtCQURQO0FBRUVHLGdCQUFPLFdBRlQ7QUFHRUMsZUFBTTtBQUhSLE9BckJPLEVBMEJQO0FBQ0VKLGNBQUssa0JBRFA7QUFFRUcsZ0JBQU8sV0FGVDtBQUdFQyxlQUFNO0FBSFIsT0ExQk8sRUErQlA7QUFDRUosY0FBSyxrQkFEUDtBQUVFRyxnQkFBTyxXQUZUO0FBR0VDLGVBQU07QUFIUixPQS9CTyxFQW9DUDtBQUNFSixjQUFLLGtCQURQO0FBRUVHLGdCQUFPLFdBRlQ7QUFHRUMsZUFBTTtBQUhSLE9BcENPLEVBeUNQO0FBQ0VKLGNBQUssa0JBRFA7QUFFRUcsZ0JBQU8sV0FGVDtBQUdFQyxlQUFNO0FBSFIsT0F6Q08sRUE4Q1A7QUFDRUosY0FBSyxrQkFEUDtBQUVFRyxnQkFBTyxXQUZUO0FBR0VDLGVBQU07QUFIUixPQTlDTyxDQW5CTjtBQXVFSkMsY0FBUSxFQXZFSjtBQXdFSkMsY0FBUTtBQXhFSixLLFFBMkVQQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVU7QUFDUEMsZUFETyx1QkFDTTtBQUNSLGFBQUtaLFdBQUwsR0FBbUIsSUFBbkI7QUFDSCxPQUhLO0FBSU5hLGVBSk0sdUJBSU87QUFDVCxhQUFLWixRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsYUFBS0QsV0FBTCxHQUFtQixLQUFuQjtBQUNILE9BUEs7QUFRTmMsZ0JBUk0sd0JBUVE7QUFDVixhQUFLYixRQUFMLEdBQWdCLEVBQWhCO0FBQ0gsT0FWSztBQVdOYyxpQkFYTSx1QkFXT0MsQ0FYUCxFQVdVO0FBQ1osYUFBS2YsUUFBTCxHQUFnQmUsRUFBRVYsTUFBRixDQUFTVyxLQUF6QjtBQUNILE9BYks7QUFjTkMsa0JBZE0sd0JBY09DLElBZFAsRUFjYTtBQUNqQixhQUFLZixxQkFBTCxHQUE2QmUsS0FBS2hCLElBQWxDO0FBQ0FpQixnQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0QsT0FqQks7QUFrQk5HLGVBbEJNLHVCQWtCSztBQUNULGFBQUt2QixVQUFMLEdBQWtCLENBQUMsS0FBS0EsVUFBeEI7QUFDRDtBQXBCSyxLLFFBdUJWd0IsTSxHQUFTLEU7Ozs7O29DQUdPO0FBQ1osV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksRUFBcEIsRUFBd0JBLEdBQXhCLEVBQTZCO0FBQ3pCLGFBQUtuQixTQUFMLENBQWVvQixJQUFmLENBQXFCO0FBQ2pCdEIsZ0JBQUssUUFBTXFCLENBRE07QUFFakJsQixrQkFBTyxXQUZVO0FBR2pCQyxpQkFBTTtBQUhXLFNBQXJCO0FBS0g7QUFDSjs7O3dDQUNpQjtBQUNoQm1CLHFCQUFLQyx3QkFBTDtBQUNBUCxjQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBO0FBQ0FPLGlCQUFXLFlBQ1g7QUFDRTtBQUNBRix1QkFBS0csd0JBQUwsR0FGRixDQUVrQztBQUNoQ0gsdUJBQUtJLG1CQUFMLEdBSEYsQ0FHNkI7QUFDNUIsT0FMRCxFQUtFLElBTEY7QUFNRjs7OzZCQUNTO0FBQ0wsVUFBSUMsU0FBU0MsUUFBUSxrQkFBUixDQUFiOztBQUVBLFdBQUt4QixNQUFMLEdBQWN1QixPQUFPdkIsTUFBckI7QUFDQSxXQUFLQyxNQUFMLEdBQWNzQixPQUFPdEIsTUFBckI7QUFDSDs7OztFQTFJbUNpQixlQUFLTyxJOztrQkFBdEJ2QyxRIiwiZmlsZSI6Im1hbGxMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFsbExpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ZWG5ZOB5YiX6KGoJ1xyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICBub3JtYWxWaWV3OnRydWUsXHJcbiAgICAgICBpbnB1dFNob3dlZDogZmFsc2UsXHJcbiAgICAgICBpbnB1dFZhbDogJycsXHJcbiAgICAgICBzb3J0SXRlbTpbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6J+e7vOWQiCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6J+mUgOmHjydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6J+aWsOWTgSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6J+S7t+agvCdcclxuICAgICAgICAgIH1cclxuICAgICAgIF0sXHJcbiAgICAgICBjdXJyZW50U2VsZWN0U29ydEl0ZW06J+e7vOWQiCcsXHJcbiAgICAgICBnb29kc0RhdGE6W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOifkuJPnlKjoh6rog73plIEg5YWo6ZOc5paw5Lq65Lq65bel5pm66IO95LyY6LSo5YWo6ZOc5paw5Lq65Lq65bel5pm66IO95LyY6LSoJyxcclxuICAgICAgICAgICAgZGV0YWlsOicyMzQyMzQzMjQnLFxyXG4gICAgICAgICAgICBwcmljZTozOTlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6J+S4k+eUqOiHquiDvemUgSDlhajpk5zmlrDkurrkurrlt6Xmmbrog73kvJjotKgnLFxyXG4gICAgICAgICAgICBkZXRhaWw6JzIzNDIzNDMyNCcsXHJcbiAgICAgICAgICAgIHByaWNlOjM5OVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTon5LiT55So6Ieq6IO96ZSBIOWFqOmTnOaWsOS6uuS6uuW3peaZuuiDveS8mOi0qCcsXHJcbiAgICAgICAgICAgIGRldGFpbDonMjM0MjM0MzI0JyxcclxuICAgICAgICAgICAgcHJpY2U6Mzk5XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOifkuJPnlKjoh6rog73plIEg5YWo6ZOc5paw5Lq65Lq65bel5pm66IO95LyY6LSoJyxcclxuICAgICAgICAgICAgZGV0YWlsOicyMzQyMzQzMjQnLFxyXG4gICAgICAgICAgICBwcmljZTozOTlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6J+S4k+eUqOiHquiDvemUgSDlhajpk5zmlrDkurrkurrlt6Xmmbrog73kvJjotKgnLFxyXG4gICAgICAgICAgICBkZXRhaWw6JzIzNDIzNDMyNCcsXHJcbiAgICAgICAgICAgIHByaWNlOjM5OVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTon5LiT55So6Ieq6IO96ZSBIOWFqOmTnOaWsOS6uuS6uuW3peaZuuiDveS8mOi0qCcsXHJcbiAgICAgICAgICAgIGRldGFpbDonMjM0MjM0MzI0JyxcclxuICAgICAgICAgICAgcHJpY2U6Mzk5XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOifkuJPnlKjoh6rog73plIEg5YWo6ZOc5paw5Lq65Lq65bel5pm66IO95LyY6LSoJyxcclxuICAgICAgICAgICAgZGV0YWlsOicyMzQyMzQzMjQnLFxyXG4gICAgICAgICAgICBwcmljZTozOTlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6J+S4k+eUqOiHquiDvemUgSDlhajpk5zmlrDkurrkurrlt6Xmmbrog73kvJjotKgnLFxyXG4gICAgICAgICAgICBkZXRhaWw6JzIzNDIzNDMyNCcsXHJcbiAgICAgICAgICAgIHByaWNlOjM5OVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTon5LiT55So6Ieq6IO96ZSBIOWFqOmTnOaWsOS6uuS6uuW3peaZuuiDveS8mOi0qCcsXHJcbiAgICAgICAgICAgIGRldGFpbDonMjM0MjM0MzI0JyxcclxuICAgICAgICAgICAgcHJpY2U6Mzk5XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOifkuJPnlKjoh6rog73plIEg5YWo6ZOc5paw5Lq65Lq65bel5pm66IO95LyY6LSoJyxcclxuICAgICAgICAgICAgZGV0YWlsOicyMzQyMzQzMjQnLFxyXG4gICAgICAgICAgICBwcmljZTozOTlcclxuICAgICAgICAgIH1cclxuICAgICAgIF0sXHJcbiAgICAgICBpY29uMjA6ICcnLFxyXG4gICAgICAgaWNvbjYwOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgIHNob3dJbnB1dCAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRTaG93ZWQgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZUlucHV0ICgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbCA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0U2hvd2VkID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGVhcklucHV0ICgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbCA9ICcnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5wdXRUeXBpbmcgKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbCA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc29ydEl0ZW1DaWNrKGl0ZW0pIHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFNlbGVjdFNvcnRJdGVtID0gaXRlbS5uYW1lO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coaXRlbSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNoaWZ0Vmlldygpe1xyXG4gICAgICAgICAgdGhpcy5ub3JtYWxWaWV3ID0gIXRoaXMubm9ybWFsVmlldztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICBcclxuICAgIH07XHJcbiAgICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmdvb2RzRGF0YS5wdXNoKCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOicxMTEnK2ksXHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6JzIzNDIzNDMyNCcsXHJcbiAgICAgICAgICAgICAgICBwcmljZTozOTlcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICBvblB1bGxEb3duUmVmcmVzaCgpe1xyXG4gICAgICB3ZXB5LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuS4i+aLiVwiKVxyXG4gICAgICAvL+aooeaLn+WKoOi9vVxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKClcclxuICAgICAge1xyXG4gICAgICAgIC8vIGNvbXBsZXRlXHJcbiAgICAgICAgd2VweS5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKSAvL+WujOaIkOWBnOatouWKoOi9vVxyXG4gICAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpIC8v5YGc5q2i5LiL5ouJ5Yi35pawXHJcbiAgICAgIH0sMTUwMCk7XHJcbiAgIH07XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgbGV0IGJhc2U2NCA9IHJlcXVpcmUoJy4uL2ltYWdlcy9iYXNlNjQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5pY29uMjAgPSBiYXNlNjQuaWNvbjIwO1xyXG4gICAgICAgIHRoaXMuaWNvbjYwID0gYmFzZTY0Lmljb242MDtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==