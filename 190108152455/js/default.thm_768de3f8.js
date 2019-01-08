window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","imageTest":"resource/game/imageTest.exml","StartGameScene":"resource/game/StartGameScene.exml","YouXijiemian":"resource/eui_skins/YouXijiemian.exml","ShengLi":"resource/game/ShengLi.exml","Fuhuo":"resource/game/Fuhuo.exml","Xiayiguan":"resource/game/Xiayiguan.exml","Zidingyi":"resource/game/Zidingyi.exml","Paihangbang":"resource/eui_skins/Paihangbang.exml","Paihangmoban":"resource/game/Paihangmoban.exml","Ziyingdian":"resource/game/Ziyingdian.exml","Wuqi":"resource/game/Wuqi.exml","Wuqimoban":"resource/game/Wuqimoban.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Paihangbang.exml'] = window.PaihangbangSkin = (function (_super) {
	__extends(PaihangbangSkin, _super);
	var PaihangbangSkin$Skin1 = 	(function (_super) {
		__extends(PaihangbangSkin$Skin1, _super);
		function PaihangbangSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","percentWidth",110),
						new eui.SetProperty("_Image1","percentHeight",110)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_close_png"),
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PaihangbangSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_close_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PaihangbangSkin$Skin1;
	})(eui.Skin);

	function PaihangbangSkin() {
		_super.call(this);
		this.skinParts = ["Bangdan","guanbi"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Group1_i(),this._Scroller1_i(),this.guanbi_i()];
	}
	var _proto = PaihangbangSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.8;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "bg_tongyong_png";
		t.y = 196.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "banzi_title01_png";
		t.y = 82;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "rank_png";
		t.y = 109.31;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 40;
		t.y = 924.7;
		t.elementsContent = [this._Image4_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150.09;
		t.scale9Grid = new egret.Rectangle(33,35,69,70);
		t.source = "myBg_png";
		t.width = 671;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.text = "玩家644395";
		t.textColor = 0x996423;
		t.verticalCenter = 0;
		t.x = 273.33;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.text = "第0关";
		t.textColor = 0x996423;
		t.verticalCenter = 0;
		t.x = 549.99;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 579;
		t.horizontalCenter = 4;
		t.top = 315;
		t.width = 618;
		t.viewport = this.Bangdan_i();
		return t;
	};
	_proto.Bangdan_i = function () {
		var t = new eui.Group();
		this.Bangdan = t;
		t.anchorOffsetY = 0;
		t.height = 977.27;
		t.width = 620;
		t.y = 3.03;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 6;
		t.paddingLeft = 1;
		t.paddingTop = 5;
		return t;
	};
	_proto.guanbi_i = function () {
		var t = new eui.Button();
		this.guanbi = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.horizontalCenter = 262;
		t.label = "";
		t.top = 107;
		t.skinName = PaihangbangSkin$Skin1;
		return t;
	};
	return PaihangbangSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/YouXijiemian.exml'] = window.YouXijiemianSkin = (function (_super) {
	__extends(YouXijiemianSkin, _super);
	var YouXijiemianSkin$Skin2 = 	(function (_super) {
		__extends(YouXijiemianSkin$Skin2, _super);
		function YouXijiemianSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","huanwuqi_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = YouXijiemianSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "huanwuqi_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return YouXijiemianSkin$Skin2;
	})(eui.Skin);

	var YouXijiemianSkin$Skin3 = 	(function (_super) {
		__extends(YouXijiemianSkin$Skin3, _super);
		function YouXijiemianSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","percentWidth",110),
						new eui.SetProperty("_Image1","percentHeight",110)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","threeDartBtn_png"),
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = YouXijiemianSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "threeDartBtn_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return YouXijiemianSkin$Skin3;
	})(eui.Skin);

	var YouXijiemianSkin$Skin4 = 	(function (_super) {
		__extends(YouXijiemianSkin$Skin4, _super);
		function YouXijiemianSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","percentWidth",110),
						new eui.SetProperty("_Image1","percentHeight",110)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tulongbaodao_png"),
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = YouXijiemianSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "tulongbaodao_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return YouXijiemianSkin$Skin4;
	})(eui.Skin);

	function YouXijiemianSkin() {
		_super.call(this);
		this.skinParts = ["sanbiao","tulong","shuibei","daguanjindu","daguanshuzi","youxidao"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Button1_i(),this.sanbiao_i(),this.tulong_i(),this.shuibei_i(),this._Image2_i(),this._Label1_i(),this._Image3_i(),this._Group1_i(),this.youxidao_i()];
	}
	var _proto = YouXijiemianSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ditu_png";
		t.top = 0;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = -267;
		t.label = "";
		t.verticalCenter = 61;
		t.skinName = YouXijiemianSkin$Skin2;
		return t;
	};
	_proto.sanbiao_i = function () {
		var t = new eui.Button();
		this.sanbiao = t;
		t.anchorOffsetX = 75.76;
		t.anchorOffsetY = 75.76;
		t.label = "";
		t.x = 663.76;
		t.y = 939.3;
		t.skinName = YouXijiemianSkin$Skin3;
		return t;
	};
	_proto.tulong_i = function () {
		var t = new eui.Button();
		this.tulong = t;
		t.anchorOffsetX = 75.76;
		t.anchorOffsetY = 75.76;
		t.label = "";
		t.x = 663.76;
		t.y = 764.18;
		t.skinName = YouXijiemianSkin$Skin4;
		return t;
	};
	_proto.shuibei_i = function () {
		var t = new eui.Image();
		this.shuibei = t;
		t.source = "bz_png";
		t.x = -170;
		t.y = 835;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 22;
		t.source = "icon_jinbi_png";
		t.top = 65;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.left = 97;
		t.size = 50;
		t.text = "0";
		t.textColor = 0x108f79;
		t.top = 75;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "jiangli_png";
		t.y = 14.04;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 16;
		t.elementsContent = [this._Image4_i(),this.daguanjindu_i(),this.daguanshuzi_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(31,32,338,0);
		t.source = "jindutiao2_png";
		t.x = 0;
		t.y = 3.04;
		return t;
	};
	_proto.daguanjindu_i = function () {
		var t = new eui.Image();
		this.daguanjindu = t;
		t.anchorOffsetX = 0;
		t.left = 4;
		t.scale9Grid = new egret.Rectangle(29,30,333,0);
		t.source = "jindutiaoBg2_png";
		t.width = 390;
		t.y = 6;
		return t;
	};
	_proto.daguanshuzi_i = function () {
		var t = new eui.Label();
		this.daguanshuzi = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.stroke = 4;
		t.strokeColor = 0x114454;
		t.text = "第1关";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.x = 157;
		t.y = 19;
		return t;
	};
	_proto.youxidao_i = function () {
		var t = new eui.Image();
		this.youxidao = t;
		t.anchorOffsetX = 28;
		t.anchorOffsetY = 90;
		t.height = 180.73;
		t.horizontalCenter = 1;
		t.source = "B10_png";
		t.width = 53.55;
		t.y = 960;
		return t;
	};
	return YouXijiemianSkin;
})(eui.Skin);generateEUI.paths['resource/game/Fuhuo.exml'] = window.FuhuoSkin = (function (_super) {
	__extends(FuhuoSkin, _super);
	var FuhuoSkin$Skin5 = 	(function (_super) {
		__extends(FuhuoSkin$Skin5, _super);
		function FuhuoSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","percentWidth",110),
						new eui.SetProperty("_Image1","percentHeight",110)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_lv012_png"),
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FuhuoSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_lv012_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FuhuoSkin$Skin5;
	})(eui.Skin);

	function FuhuoSkin() {
		_super.call(this);
		this.skinParts = ["juzi","juzipou","daoshu","juzidaojishi","homo"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.juzidaojishi_i(),this._Group1_i(),this._Label2_i(),this._Group2_i()];
	}
	var _proto = FuhuoSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.8;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_tongyong4_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.juzidaojishi_i = function () {
		var t = new eui.Group();
		this.juzidaojishi = t;
		t.x = 211;
		t.y = 399;
		t.elementsContent = [this.juzi_i(),this.juzipou_i(),this.daoshu_i()];
		return t;
	};
	_proto.juzi_i = function () {
		var t = new eui.Image();
		this.juzi = t;
		t.anchorOffsetX = 162;
		t.anchorOffsetY = 164;
		t.source = "daojish_png";
		t.x = 162;
		t.y = 164;
		return t;
	};
	_proto.juzipou_i = function () {
		var t = new eui.Image();
		this.juzipou = t;
		t.source = "daojishi2_png";
		t.x = 1;
		t.y = 1;
		return t;
	};
	_proto.daoshu_i = function () {
		var t = new eui.Label();
		this.daoshu = t;
		t.anchorOffsetX = 106;
		t.anchorOffsetY = 86;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 170;
		t.stroke = 2;
		t.strokeColor = 0x9e0101;
		t.text = "10";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 954;
		t.elementsContent = [this.homo_i(),this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto.homo_i = function () {
		var t = new eui.Button();
		this.homo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 149;
		t.label = "";
		t.width = 395;
		t.x = 2;
		t.y = -5;
		t.skinName = FuhuoSkin$Skin5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "icon_guanyingmianfei_png";
		t.x = 46;
		t.y = 48;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 48;
		t.stroke = 2;
		t.strokeColor = 0x384d03;
		t.text = "获取复活卡";
		t.x = 111;
		t.y = 43;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 40;
		t.strokeColor = 0x9E0101;
		t.text = "跳过》";
		t.verticalCenter = 470;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 777;
		t.elementsContent = [this._Image3_i(),this._Label3_i(),this._Label4_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(26,27,67,59);
		t.source = "bg_tiao3_png";
		t.width = 508;
		t.x = 0;
		t.y = 7;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.stroke = 0;
		t.strokeColor = 0x9E0101;
		t.text = "是否复活：";
		t.textColor = 0x996423;
		t.x = 67;
		t.y = 46;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.stroke = 0;
		t.strokeColor = 0x9E0101;
		t.text = "×2";
		t.textColor = 0x996423;
		t.x = 386;
		t.y = 46;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "fuhuoka_icon_png";
		t.x = 252;
		t.y = 0;
		return t;
	};
	return FuhuoSkin;
})(eui.Skin);generateEUI.paths['resource/game/Paihangmoban.exml'] = window.PaihangmobanSkin = (function (_super) {
	__extends(PaihangmobanSkin, _super);
	function PaihangmobanSkin() {
		_super.call(this);
		this.skinParts = ["avatar","rank","nickname","lv","dengji","touxiang"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = PaihangmobanSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.avatar_i(),this.rank_i(),this.nickname_i(),this.lv_i(),this.dengji_i(),this.touxiang_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(29,28,61,58);
		t.source = "bg_tiao_png";
		t.width = 610.9;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.avatar_i = function () {
		var t = new eui.Image();
		this.avatar = t;
		t.source = "bg_touxiang_png";
		t.verticalCenter = 0;
		t.x = 115;
		return t;
	};
	_proto.rank_i = function () {
		var t = new eui.Image();
		this.rank = t;
		t.source = "icon_1_png";
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.text = "球球GO";
		t.textColor = 0x996423;
		t.verticalCenter = 0;
		t.x = 227;
		return t;
	};
	_proto.lv_i = function () {
		var t = new eui.Label();
		this.lv = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.text = "第7关";
		t.textColor = 0x996423;
		t.verticalCenter = 0;
		t.x = 500;
		return t;
	};
	_proto.dengji_i = function () {
		var t = new eui.Label();
		this.dengji = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.text = "4";
		t.textColor = 0x996423;
		t.verticalCenter = 2.5;
		t.x = 44;
		return t;
	};
	_proto.touxiang_i = function () {
		var t = new eui.Image();
		this.touxiang = t;
		t.horizontalCenter = -144;
		t.source = "A10_png";
		t.verticalCenter = 0;
		return t;
	};
	return PaihangmobanSkin;
})(eui.Skin);generateEUI.paths['resource/game/ShengLi.exml'] = window.ShengLiSkin = (function (_super) {
	__extends(ShengLiSkin, _super);
	var ShengLiSkin$Skin6 = 	(function (_super) {
		__extends(ShengLiSkin$Skin6, _super);
		function ShengLiSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","percentWidth",110),
						new eui.SetProperty("_Image1","percentHeight",110)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","zujiemian2_png"),
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShengLiSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "zujiemian2_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShengLiSkin$Skin6;
	})(eui.Skin);

	var ShengLiSkin$Skin7 = 	(function (_super) {
		__extends(ShengLiSkin$Skin7, _super);
		function ShengLiSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShengLiSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShengLiSkin$Skin7;
	})(eui.Skin);

	function ShengLiSkin() {
		_super.call(this);
		this.skinParts = ["home"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this.home_i(),this._Group5_i(),this._Image10_i(),this._Group6_i(),this._Group7_i()];
	}
	var _proto = ShengLiSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.8;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0.6;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "bg_tongyong6_png";
		t.y = 323.78;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "banzi_title014_png";
		t.y = 218.39;
		return t;
	};
	_proto.home_i = function () {
		var t = new eui.Button();
		this.home = t;
		t.horizontalCenter = -269;
		t.label = "";
		t.verticalCenter = -464;
		t.skinName = ShengLiSkin$Skin6;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 467;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 16;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "kuang12_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "icon_guozhi03_png";
		t.x = 12;
		t.y = 13;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "kuang12_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "icon_guozhi01_png";
		t.x = 12;
		t.y = 13;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "kuang12_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "icon_guozhi02_png";
		t.x = 12;
		t.y = 13;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "kuang12_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -2.5;
		t.source = "victory_png";
		t.verticalCenter = -440;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 115;
		t.y = 689.45;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(25,25,69,62);
		t.source = "bg_tiao4_png";
		t.width = 510;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "icon_jinbi_png";
		t.x = 272;
		t.y = 28.55;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "获得奖励：";
		t.textColor = 0x996423;
		t.x = 80;
		t.y = 36.55;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "+82";
		t.textColor = 0x996423;
		t.x = 354;
		t.y = 38.55;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 196.94;
		t.y = 849;
		t.elementsContent = [this._Button1_i(),this._Label3_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 147;
		t.label = "";
		t.width = 344.94;
		t.x = 0;
		t.y = 0;
		t.skinName = ShengLiSkin$Skin7;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 48;
		t.stroke = 2;
		t.strokeColor = 0x9e0101;
		t.text = "下一关";
		t.textColor = 0xffffff;
		t.x = 92;
		t.y = 50;
		return t;
	};
	return ShengLiSkin;
})(eui.Skin);generateEUI.paths['resource/game/StartGameScene.exml'] = window.StartGameSceneSkin = (function (_super) {
	__extends(StartGameSceneSkin, _super);
	var StartGameSceneSkin$Skin8 = 	(function (_super) {
		__extends(StartGameSceneSkin$Skin8, _super);
		function StartGameSceneSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","percentWidth",110),
						new eui.SetProperty("_Image1","percentHeight",110)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","start_png"),
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartGameSceneSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "start_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartGameSceneSkin$Skin8;
	})(eui.Skin);

	var StartGameSceneSkin$Skin9 = 	(function (_super) {
		__extends(StartGameSceneSkin$Skin9, _super);
		function StartGameSceneSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","percentWidth",110),
						new eui.SetProperty("_Image1","percentHeight",110)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","guozhidian_png"),
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartGameSceneSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "guozhidian_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartGameSceneSkin$Skin9;
	})(eui.Skin);

	var StartGameSceneSkin$Skin10 = 	(function (_super) {
		__extends(StartGameSceneSkin$Skin10, _super);
		function StartGameSceneSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","shengyin_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","shengyin1_png")
					])
			];
		}
		var _proto = StartGameSceneSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shengyin_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartGameSceneSkin$Skin10;
	})(eui.Skin);

	var StartGameSceneSkin$Skin11 = 	(function (_super) {
		__extends(StartGameSceneSkin$Skin11, _super);
		function StartGameSceneSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","percentWidth",110),
						new eui.SetProperty("_Image1","percentHeight",110)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","paihangbang_png"),
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartGameSceneSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "paihangbang_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartGameSceneSkin$Skin11;
	})(eui.Skin);

	var StartGameSceneSkin$Skin12 = 	(function (_super) {
		__extends(StartGameSceneSkin$Skin12, _super);
		function StartGameSceneSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","fank_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartGameSceneSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "fank_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartGameSceneSkin$Skin12;
	})(eui.Skin);

	var StartGameSceneSkin$Skin13 = 	(function (_super) {
		__extends(StartGameSceneSkin$Skin13, _super);
		function StartGameSceneSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","qiandaojiangli_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartGameSceneSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "qiandaojiangli_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartGameSceneSkin$Skin13;
	})(eui.Skin);

	var StartGameSceneSkin$Skin14 = 	(function (_super) {
		__extends(StartGameSceneSkin$Skin14, _super);
		function StartGameSceneSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","percentWidth",110),
						new eui.SetProperty("_Image1","percentHeight",110)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","huanwuqi_png"),
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartGameSceneSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "huanwuqi_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartGameSceneSkin$Skin14;
	})(eui.Skin);

	var StartGameSceneSkin$Skin15 = 	(function (_super) {
		__extends(StartGameSceneSkin$Skin15, _super);
		function StartGameSceneSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","open_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartGameSceneSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "open_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartGameSceneSkin$Skin15;
	})(eui.Skin);

	var StartGameSceneSkin$Skin16 = 	(function (_super) {
		__extends(StartGameSceneSkin$Skin16, _super);
		function StartGameSceneSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","lingjinbi_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartGameSceneSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "lingjinbi_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartGameSceneSkin$Skin16;
	})(eui.Skin);

	function StartGameSceneSkin() {
		_super.call(this);
		this.skinParts = ["liwuhe","StartGame","ziyingdian","fabu","paihang","wuqi","dajuzi","feidao"];
		
		this.height = 1334;
		this.width = 750;
		this._TweenGroup1_i();
		this.elementsContent = [this._Image1_i(),this.liwuhe_i(),this.StartGame_i(),this.ziyingdian_i(),this._Group1_i(),this._Button2_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Image5_i(),this._Label1_i(),this.dajuzi_i(),this.feidao_i()];
		
		eui.Binding.$bindProperties(this, ["liwuhe"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [5.95],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, [-10.57],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, [5.95],[],this._Object3,"rotation");
	}
	var _proto = StartGameSceneSkin.prototype;

	_proto._TweenGroup1_i = function () {
		var t = new egret.tween.TweenGroup();
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "quadIn";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ditu_png";
		t.top = 0;
		return t;
	};
	_proto.liwuhe_i = function () {
		var t = new eui.Image();
		this.liwuhe = t;
		t.anchorOffsetX = 39.75;
		t.source = "libao_png";
		t.x = 601.45;
		t.y = 0;
		return t;
	};
	_proto.StartGame_i = function () {
		var t = new eui.Button();
		this.StartGame = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 683;
		t.skinName = StartGameSceneSkin$Skin8;
		return t;
	};
	_proto.ziyingdian_i = function () {
		var t = new eui.Button();
		this.ziyingdian = t;
		t.horizontalCenter = -298;
		t.label = "";
		t.y = 642;
		t.skinName = StartGameSceneSkin$Skin9;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 889.71;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.fabu_i(),this.paihang_i(),this._Button1_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 40;
		return t;
	};
	_proto.fabu_i = function () {
		var t = new eui.Button();
		this.fabu = t;
		t.label = "";
		t.x = 0;
		t.y = 1;
		t.skinName = StartGameSceneSkin$Skin10;
		return t;
	};
	_proto.paihang_i = function () {
		var t = new eui.Button();
		this.paihang = t;
		t.anchorOffsetX = 72.73;
		t.anchorOffsetY = 78.79;
		t.height = 155;
		t.label = "";
		t.x = 262.73;
		t.y = 78.79;
		t.skinName = StartGameSceneSkin$Skin11;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = StartGameSceneSkin$Skin12;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 628;
		t.y = 396.56;
		t.skinName = StartGameSceneSkin$Skin13;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 606;
		t.y = 677.71;
		t.elementsContent = [this.wuqi_i(),this._Image2_i()];
		return t;
	};
	_proto.wuqi_i = function () {
		var t = new eui.Button();
		this.wuqi = t;
		t.label = "";
		t.x = 0;
		t.y = 10.64;
		t.skinName = StartGameSceneSkin$Skin14;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xinwuqi_png";
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = -16;
		t.y = 424.28;
		t.elementsContent = [this._Button3_i(),this._Image3_i()];
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = StartGameSceneSkin$Skin15;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "tishitubiao_png";
		t.y = -14.63;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 628;
		t.y = 545.88;
		t.elementsContent = [this._Button4_i(),this._Image4_i()];
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = StartGameSceneSkin$Skin16;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "tishitubiao1_png";
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.left = 22;
		t.source = "icon_jinbi2_png";
		t.y = 67.26;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.left = 94;
		t.size = 50;
		t.text = "0";
		t.textColor = 0x108f79;
		t.y = 75.61;
		return t;
	};
	_proto.dajuzi_i = function () {
		var t = new eui.Image();
		this.dajuzi = t;
		t.anchorOffsetX = 120;
		t.anchorOffsetY = 114;
		t.height = 224;
		t.horizontalCenter = 0.5;
		t.source = "daojish_png";
		t.width = 235;
		t.y = 626;
		return t;
	};
	_proto.feidao_i = function () {
		var t = new eui.Image();
		this.feidao = t;
		t.anchorOffsetX = 26.38;
		t.anchorOffsetY = 90.45;
		t.height = 182.79;
		t.horizontalCenter = 1.5;
		t.source = "A13_png";
		t.width = 54.65;
		t.y = 626.65;
		return t;
	};
	return StartGameSceneSkin;
})(eui.Skin);generateEUI.paths['resource/game/Wuqi.exml'] = window.WuqiSkin = (function (_super) {
	__extends(WuqiSkin, _super);
	var WuqiSkin$Skin17 = 	(function (_super) {
		__extends(WuqiSkin$Skin17, _super);
		function WuqiSkin$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","zi_fanhui_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WuqiSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "zi_fanhui_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return WuqiSkin$Skin17;
	})(eui.Skin);

	var WuqiSkin$Skin18 = 	(function (_super) {
		__extends(WuqiSkin$Skin18, _super);
		function WuqiSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_012_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WuqiSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_012_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return WuqiSkin$Skin18;
	})(eui.Skin);

	var WuqiSkin$Skin19 = 	(function (_super) {
		__extends(WuqiSkin$Skin19, _super);
		function WuqiSkin$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_012_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WuqiSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_012_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return WuqiSkin$Skin19;
	})(eui.Skin);

	function WuqiSkin() {
		_super.call(this);
		this.skinParts = ["fanhui","yuandian","group_a","wuqiku","choujiang","money","dangqianwuqi"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.fanhui_i(),this.yuandian_i(),this.wuqiku_i(),this._Image2_i(),this._Group5_i(),this._Group6_i(),this._Image5_i(),this._Label4_i(),this.dangqianwuqi_i(),this._Label5_i()];
	}
	var _proto = WuqiSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ditu_png";
		t.top = 0;
		return t;
	};
	_proto.fanhui_i = function () {
		var t = new eui.Button();
		this.fanhui = t;
		t.anchorOffsetX = 57;
		t.anchorOffsetY = 22;
		t.horizontalCenter = -295.5;
		t.label = "";
		t.y = 176;
		t.skinName = WuqiSkin$Skin17;
		return t;
	};
	_proto.yuandian_i = function () {
		var t = new eui.Group();
		this.yuandian = t;
		t.x = 262;
		t.y = 1034;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 12;
		return t;
	};
	_proto.wuqiku_i = function () {
		var t = new eui.Group();
		this.wuqiku = t;
		t.x = 0;
		t.y = 408;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.group_a_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 72;
		t.paddingLeft = 72;
		t.paddingRight = 72;
		return t;
	};
	_proto.group_a_i = function () {
		var t = new eui.Group();
		this.group_a = t;
		t.name = "0";
		t.x = 0;
		t.y = 0;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 10;
		t.verticalGap = 10;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.name = "1";
		t.x = 10;
		t.y = 10;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 10;
		t.verticalGap = 10;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.name = "2";
		t.x = 20;
		t.y = 20;
		t.layout = this._TileLayout3_i();
		return t;
	};
	_proto._TileLayout3_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 10;
		t.verticalGap = 10;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.name = "3";
		t.x = 30;
		t.y = 30;
		t.layout = this._TileLayout4_i();
		return t;
	};
	_proto._TileLayout4_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 10;
		t.verticalGap = 10;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.name = "4";
		t.x = 40;
		t.y = 40;
		t.layout = this._TileLayout5_i();
		return t;
	};
	_proto._TileLayout5_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 10;
		t.orientation = "columns";
		t.verticalGap = 10;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "icon_xinwuqi_png";
		t.x = 544;
		t.y = 1016;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 389;
		t.y = 1146;
		t.elementsContent = [this._Button1_i(),this._Image3_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.label = "";
		t.width = 328;
		t.x = 0;
		t.y = 0;
		t.skinName = WuqiSkin$Skin18;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "icon_guanyingmianfei2_png";
		t.x = 39;
		t.y = 46;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "免费领取";
		t.textColor = 0x9e0101;
		t.x = 111;
		t.y = 52;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "0/3";
		t.textColor = 0xffffff;
		t.x = 241;
		t.y = 52;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 21;
		t.y = 1146;
		t.elementsContent = [this.choujiang_i(),this._Label3_i(),this.money_i(),this._Image4_i()];
		return t;
	};
	_proto.choujiang_i = function () {
		var t = new eui.Button();
		this.choujiang = t;
		t.anchorOffsetX = 0;
		t.label = "";
		t.width = 328;
		t.x = 0;
		t.y = 0;
		t.skinName = WuqiSkin$Skin19;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "随机获取";
		t.textColor = 0x9E0101;
		t.x = 175;
		t.y = 54;
		return t;
	};
	_proto.money_i = function () {
		var t = new eui.Label();
		this.money = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "1500";
		t.textColor = 0xFFFFFF;
		t.x = 95;
		t.y = 54;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "icon_jinbi_png";
		t.x = 32;
		t.y = 40;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "icon_jinbi_png";
		t.x = 24;
		t.y = 68;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 40;
		t.text = "86";
		t.textColor = 0x108f79;
		t.x = 94;
		t.y = 86;
		return t;
	};
	_proto.dangqianwuqi_i = function () {
		var t = new eui.Image();
		this.dangqianwuqi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 161.4;
		t.horizontalCenter = 0;
		t.source = "A11_png";
		t.width = 57;
		t.y = 145.12;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.stroke = 4;
		t.strokeColor = 0x114454;
		t.text = "当前武器";
		t.x = 290;
		t.y = 326.85;
		return t;
	};
	return WuqiSkin;
})(eui.Skin);generateEUI.paths['resource/game/Wuqimoban.exml'] = window.WuqimobanSkin = (function (_super) {
	__extends(WuqimobanSkin, _super);
	function WuqimobanSkin() {
		_super.call(this);
		this.skinParts = ["moren","wuqi2"];
		
		this.elementsContent = [this._Image2_i(),this.moren_i(),this.wuqi2_i()];
		this._Image1_i();
		
		this._Image3_i();
		
		this.states = [
			new eui.State ("weiyongyou",
				[
					new eui.AddItems("_Image1","",2,"_Image2"),
					new eui.SetProperty("_Image1","visible",false),
					new eui.SetProperty("_Image2","visible",false),
					new eui.SetProperty("_Image3","visible",false)
				])
			,
			new eui.State ("yongyou",
				[
					new eui.AddItems("_Image1","",2,"_Image2"),
					new eui.SetProperty("moren","visible",false)
				])
			,
			new eui.State ("xuanding",
				[
					new eui.AddItems("_Image3","",2,"moren"),
					new eui.SetProperty("moren","visible",false)
				])
		];
	}
	var _proto = WuqimobanSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 145;
		t.horizontalCenter = 0;
		t.source = "kuang2_png";
		t.verticalCenter = 0;
		t.width = 144;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.source = "kuang0_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.height = 145;
		t.horizontalCenter = 0;
		t.source = "kuang2_png";
		t.verticalCenter = 0;
		t.width = 144;
		return t;
	};
	_proto.moren_i = function () {
		var t = new eui.Image();
		this.moren = t;
		t.horizontalCenter = 0;
		t.source = "kuang12_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.wuqi2_i = function () {
		var t = new eui.Image();
		this.wuqi2 = t;
		t.horizontalCenter = 0;
		t.source = "A11_png";
		t.verticalCenter = 0;
		return t;
	};
	return WuqimobanSkin;
})(eui.Skin);generateEUI.paths['resource/game/Zidingyi.exml'] = window.ZidingyiSkin = (function (_super) {
	__extends(ZidingyiSkin, _super);
	function ZidingyiSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [];
		this._Image1_i();
		
		this._Image2_i();
		
		this._Image3_i();
		
		this._Image4_i();
		
		this._Image5_i();
		
		this._Image6_i();
		
		this._Image7_i();
		
		this._Image8_i();
		
		this._Image9_i();
		
		this._Image10_i();
		
		this.states = [
			new eui.State ("1",
				[
					new eui.AddItems("_Image10","",1,"")
				])
			,
			new eui.State ("2",
				[
					new eui.AddItems("_Image9","",1,"")
				])
			,
			new eui.State ("3",
				[
					new eui.AddItems("_Image8","",1,"")
				])
			,
			new eui.State ("4",
				[
					new eui.AddItems("_Image7","",1,"")
				])
			,
			new eui.State ("5",
				[
					new eui.AddItems("_Image6","",1,"")
				])
			,
			new eui.State ("6",
				[
					new eui.AddItems("_Image5","",1,"")
				])
			,
			new eui.State ("7",
				[
					new eui.AddItems("_Image4","",1,"")
				])
			,
			new eui.State ("8",
				[
					new eui.AddItems("_Image3","",1,"")
				])
			,
			new eui.State ("9",
				[
					new eui.AddItems("_Image2","",1,"")
				])
			,
			new eui.State ("10",
				[
					new eui.AddItems("_Image1","",1,"")
				])
		];
	}
	var _proto = ZidingyiSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 153;
		t.horizontalCenter = 0;
		t.source = "victory_png";
		t.verticalCenter = 0;
		t.width = 242;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.source = "qiandaojiangli_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 176;
		t.horizontalCenter = 0;
		t.source = "7day_png";
		t.verticalCenter = 0;
		t.width = 211;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 181;
		t.horizontalCenter = 0;
		t.source = "6day_png";
		t.verticalCenter = 0;
		t.width = 181;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		this._Image5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 172;
		t.horizontalCenter = 0;
		t.source = "5day_png";
		t.verticalCenter = 0;
		t.width = 172;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		this._Image6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 171;
		t.horizontalCenter = 0;
		t.source = "taizi_png";
		t.verticalCenter = 0;
		t.width = 243.02;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		this._Image7 = t;
		t.horizontalCenter = 0;
		t.source = "icon_guozhi03_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		this._Image8 = t;
		t.horizontalCenter = 0;
		t.source = "icon_guozhi02_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		this._Image9 = t;
		t.horizontalCenter = 0;
		t.source = "icon_guozhi01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		this._Image10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.horizontalCenter = 0;
		t.source = "bz_png";
		t.verticalCenter = 0;
		t.width = 110.29;
		return t;
	};
	return ZidingyiSkin;
})(eui.Skin);generateEUI.paths['resource/game/Ziyingdian.exml'] = window.ZiyingdianSkin = (function (_super) {
	__extends(ZiyingdianSkin, _super);
	var ZiyingdianSkin$Skin20 = 	(function (_super) {
		__extends(ZiyingdianSkin$Skin20, _super);
		function ZiyingdianSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_close_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZiyingdianSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZiyingdianSkin$Skin20;
	})(eui.Skin);

	var ZiyingdianSkin$Skin21 = 	(function (_super) {
		__extends(ZiyingdianSkin$Skin21, _super);
		function ZiyingdianSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZiyingdianSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZiyingdianSkin$Skin21;
	})(eui.Skin);

	function ZiyingdianSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Image4_i(),this._Group2_i(),this._Group3_i()];
	}
	var _proto = ZiyingdianSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 14;
		t.y = 194;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Button1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_tongyong_png";
		t.x = 29;
		t.y = 155.89;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "banzi_title01_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "guozhidiandikuang_png";
		t.x = 233;
		t.y = 25.15;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 598;
		t.y = 20;
		t.skinName = ZiyingdianSkin$Skin20;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "taizi_png";
		t.y = 647.4;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 134.79;
		t.y = 429.15;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 184;
		t.scale9Grid = new egret.Rectangle(31,30,47,60);
		t.source = "bg_neirong_png";
		t.width = 514;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "lixianshouyi_png";
		t.x = 166.21;
		t.y = 32;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "icon_jinbi_png";
		t.x = 280.21;
		t.y = 88.18;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "当前离线收益";
		t.textColor = 0xb6270a;
		t.x = 88.21;
		t.y = 102.85;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "120/h";
		t.textColor = 0xB6270A;
		t.x = 338.21;
		t.y = 102.85;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 177;
		t.y = 986;
		t.elementsContent = [this._Button2_i(),this._Image8_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.label = "";
		t.width = 398;
		t.x = 0;
		t.y = 0;
		t.skinName = ZiyingdianSkin$Skin21;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "icon_jinbi_png";
		t.x = 194;
		t.y = 39.33;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "240/h";
		t.textColor = 0xB6270A;
		t.x = 256;
		t.y = 54;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.stroke = 3;
		t.strokeColor = 0x9e0101;
		t.text = "点我翻倍";
		t.textColor = 0xffffff;
		t.x = 65;
		t.y = 52;
		return t;
	};
	return ZiyingdianSkin;
})(eui.Skin);