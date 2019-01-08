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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","zhujiemian":"resource/game/zhujiemian.exml","wanjia":"resource/game/wanjia.exml","zhuanniu":"resource/game/zhuanniu.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/game/AnniuSkin.exml'] = window.AnniuSkin = (function (_super) {
	__extends(AnniuSkin, _super);
	function AnniuSkin() {
		_super.call(this);
		this.skinParts = ["anniu"];
		
		this.elementsContent = [this.anniu_i()];
	}
	var _proto = AnniuSkin.prototype;

	_proto.anniu_i = function () {
		var t = new eui.Image();
		this.anniu = t;
		t.source = "btnReturn_png";
		return t;
	};
	return AnniuSkin;
})(eui.Skin);generateEUI.paths['resource/game/jiemian.exml'] = window.jieMianSkin = (function (_super) {
	__extends(jieMianSkin, _super);
	function jieMianSkin() {
		_super.call(this);
		this.skinParts = ["icon"];
		
		this.currentState = "Up";
		this.height = 80;
		this.width = 111;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.icon_i()];
		this.states = [
			new eui.State ("Up",
				[
					new eui.SetProperty("_Image1","visible",false)
				])
			,
			new eui.State ("Dn",
				[
					new eui.SetProperty("_Image2","visible",false)
				])
		];
	}
	var _proto = jieMianSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "mbtn_BgFc_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.source = "mbtn_Bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.horizontalCenter = 0;
		t.source = "mbtnPlayer_png";
		t.verticalCenter = 0;
		return t;
	};
	return jieMianSkin;
})(eui.Skin);generateEUI.paths['resource/game/anNiuZu.exml'] = window.anNiuZuSkin = (function (_super) {
	__extends(anNiuZuSkin, _super);
	function anNiuZuSkin() {
		_super.call(this);
		this.skinParts = ["wanjia","yingxiong","wupin","guanyu","anniuzu"];
		
		this.elementsContent = [this.anniuzu_i()];
	}
	var _proto = anNiuZuSkin.prototype;

	_proto.anniuzu_i = function () {
		var t = new eui.Group();
		this.anniuzu = t;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.wanjia_i(),this.yingxiong_i(),this.wupin_i(),this.guanyu_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto.wanjia_i = function () {
		var t = new jiemian();
		this.wanjia = t;
		t.skinName = "jieMianSkin";
		t.x = 2;
		t.y = -220;
		return t;
	};
	_proto.yingxiong_i = function () {
		var t = new jiemian();
		this.yingxiong = t;
		t.skinName = "jieMianSkin";
		t.x = -173;
		t.y = -210;
		return t;
	};
	_proto.wupin_i = function () {
		var t = new jiemian();
		this.wupin = t;
		t.skinName = "jieMianSkin";
		t.x = -163;
		t.y = -200;
		return t;
	};
	_proto.guanyu_i = function () {
		var t = new jiemian();
		this.guanyu = t;
		t.skinName = "jieMianSkin";
		t.x = -153;
		t.y = -190;
		return t;
	};
	return anNiuZuSkin;
})(eui.Skin);generateEUI.paths['resource/game/guanyuchangjing.exml'] = window.guanyuchangjingSkin = (function (_super) {
	__extends(guanyuchangjingSkin, _super);
	function guanyuchangjingSkin() {
		_super.call(this);
		this.skinParts = ["zhedi","dilan","zhekuang","guanbi","kuang"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.zhedi_i(),this.dilan_i(),this.kuang_i()];
	}
	var _proto = guanyuchangjingSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bgListPage_jpg";
		t.top = 0;
		t.visible = true;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = true;
		return t;
	};
	_proto.zhedi_i = function () {
		var t = new eui.Rect();
		this.zhedi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 149.373;
		t.width = 519.019;
		t.x = -16.013;
		t.y = 678.236;
		return t;
	};
	_proto.dilan_i = function () {
		var t = new eui.Image();
		this.dilan = t;
		t.anchorOffsetX = 238.892;
		t.anchorOffsetY = 360.727;
		t.horizontalCenter = 0;
		t.source = "about_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.kuang_i = function () {
		var t = new eui.Group();
		this.kuang = t;
		t.anchorOffsetX = 243.67;
		t.anchorOffsetY = 360.727;
		t.x = 243.67;
		t.y = 360.727;
		t.elementsContent = [this.zhekuang_i(),this._Image2_i(),this._Label1_i(),this.guanbi_i()];
		return t;
	};
	_proto.zhekuang_i = function () {
		var t = new eui.Rect();
		this.zhekuang = t;
		t.anchorOffsetY = 0;
		t.height = 279.436;
		t.width = 480;
		t.x = 0;
		t.y = 196.754;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 238.892;
		t.anchorOffsetY = 360.727;
		t.source = "about_png";
		t.visible = true;
		t.x = 238.892;
		t.y = 360.727;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50.087;
		t.size = 20;
		t.text = "一行白鹭上青天";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 145.038;
		t.x = 221.087;
		t.y = 336.254;
		return t;
	};
	_proto.guanbi_i = function () {
		var t = new eui.Image();
		this.guanbi = t;
		t.anchorOffsetX = 15.088;
		t.anchorOffsetY = 16.502;
		t.source = "close_png";
		t.x = 411.37;
		t.y = 230.01;
		return t;
	};
	return guanyuchangjingSkin;
})(eui.Skin);generateEUI.paths['resource/game/wanjiachangjing.exml'] = window.wanjiachangjingSkin = (function (_super) {
	__extends(wanjiachangjingSkin, _super);
	function wanjiachangjingSkin() {
		_super.call(this);
		this.skinParts = ["fanhui","list","zhuangbeitiao","anniufanhui","zhuangbei","qianghua"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.fanhui_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.zhuangbeitiao_i(),this._Image6_i(),this.anniufanhui_i(),this.zhuangbei_i(),this.qianghua_i()];
	}
	var _proto = wanjiachangjingSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "commonBg_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "profileTitle_png";
		t.x = 174.5;
		t.y = 133;
		return t;
	};
	_proto.fanhui_i = function () {
		var t = new eui.Image();
		this.fanhui = t;
		t.source = "btnReturn_png";
		t.visible = false;
		t.x = 15;
		t.y = 130;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "skillBg_png";
		t.x = 25.17;
		t.y = 476.34;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "btnEquip_png";
		t.visible = false;
		t.x = 51.83;
		t.y = 628.33;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "btnStrengthen_png";
		t.visible = false;
		t.x = 260.51;
		t.y = 628.33;
		return t;
	};
	_proto.zhuangbeitiao_i = function () {
		var t = new eui.Scroller();
		this.zhuangbeitiao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 122;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.verticalCenter = 145;
		t.width = 417;
		t.x = 29.316;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = zhuangbeiSkin;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "profileContent_png";
		t.x = 30.425;
		t.y = 193.789;
		return t;
	};
	_proto.anniufanhui_i = function () {
		var t = new Anniu();
		this.anniufanhui = t;
		t.height = 20;
		t.skinName = "AnniuSkin";
		t.width = 20;
		t.x = 14.804;
		t.y = 129.538;
		return t;
	};
	_proto.zhuangbei_i = function () {
		var t = new Anniu();
		this.zhuangbei = t;
		t.height = 20;
		t.skinName = "AnniuSkin";
		t.width = 20;
		t.x = 29.37;
		t.y = 635.71;
		return t;
	};
	_proto.qianghua_i = function () {
		var t = new Anniu();
		this.qianghua = t;
		t.height = 20;
		t.skinName = "AnniuSkin";
		t.width = 20;
		t.x = 272.236;
		t.y = 635.056;
		return t;
	};
	return wanjiachangjingSkin;
})(eui.Skin);generateEUI.paths['resource/game/wupinchangjing.exml'] = window.wupinchangjingSkin = (function (_super) {
	__extends(wupinchangjingSkin, _super);
	function wupinchangjingSkin() {
		_super.call(this);
		this.skinParts = ["fanhui","list","wupinliebiao"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.fanhui_i(),this.wupinliebiao_i()];
	}
	var _proto = wupinchangjingSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bgListPage_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "goodsTitle_png";
		t.x = 174.5;
		t.y = 133;
		return t;
	};
	_proto.fanhui_i = function () {
		var t = new eui.Image();
		this.fanhui = t;
		t.source = "btnReturn_png";
		t.x = 15;
		t.y = 130;
		return t;
	};
	_proto.wupinliebiao_i = function () {
		var t = new eui.Scroller();
		this.wupinliebiao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 520.717;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 456.574;
		t.x = 12.23;
		t.y = 183.857;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = wupinliebiaoSkin;
		return t;
	};
	return wupinchangjingSkin;
})(eui.Skin);generateEUI.paths['resource/game/wupinliebiaoSkin.exml'] = window.wupinliebiaoSkin = (function (_super) {
	__extends(wupinliebiaoSkin, _super);
	function wupinliebiaoSkin() {
		_super.call(this);
		this.skinParts = ["mingcheng","neirong","tupian"];
		
		this.elementsContent = [this._Image1_i(),this.mingcheng_i(),this.neirong_i(),this.tupian_i()];
	}
	var _proto = wupinliebiaoSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "listItemBkgd_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mingcheng_i = function () {
		var t = new eui.Label();
		this.mingcheng = t;
		t.size = 20;
		t.text = "Label";
		t.textColor = 16312092;
		t.x = 153.782;
		t.y = 24;
		return t;
	};
	_proto.neirong_i = function () {
		var t = new eui.Label();
		this.neirong = t;
		t.size = 20;
		t.text = "Label";
		t.textColor = 4899042;
		t.x = 124.782;
		t.y = 65.254;
		return t;
	};
	_proto.tupian_i = function () {
		var t = new eui.Image();
		this.tupian = t;
		t.source = "goods01_png";
		t.x = 31;
		t.y = 17;
		return t;
	};
	return wupinliebiaoSkin;
})(eui.Skin);generateEUI.paths['resource/game/yingxiongchangjing.exml'] = window.yingxiongchangjingSkin = (function (_super) {
	__extends(yingxiongchangjingSkin, _super);
	function yingxiongchangjingSkin() {
		_super.call(this);
		this.skinParts = ["queding","fanhui","list","yingxiongliebiao","anniuqueding","anniufanhui"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.queding_i(),this.fanhui_i(),this.yingxiongliebiao_i(),this.anniuqueding_i(),this.anniufanhui_i()];
	}
	var _proto = yingxiongchangjingSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bgListPage_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "herosTitle_png";
		t.x = 174;
		t.y = 134.67;
		return t;
	};
	_proto.queding_i = function () {
		var t = new eui.Image();
		this.queding = t;
		t.source = "btnOK_png";
		t.visible = false;
		t.x = 377.83;
		t.y = 130;
		return t;
	};
	_proto.fanhui_i = function () {
		var t = new eui.Image();
		this.fanhui = t;
		t.source = "btnReturn_png";
		t.visible = false;
		t.x = 15;
		t.y = 130;
		return t;
	};
	_proto.yingxiongliebiao_i = function () {
		var t = new eui.Scroller();
		this.yingxiongliebiao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 516.741;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 455.038;
		t.x = 12.223;
		t.y = 183.861;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = yingxiongliebiaoSkin;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.anniuqueding_i = function () {
		var t = new Anniu();
		this.anniuqueding = t;
		t.height = 20;
		t.skinName = "AnniuSkin";
		t.visible = true;
		t.width = 20;
		t.x = 377.298;
		t.y = 128.962;
		return t;
	};
	_proto.anniufanhui_i = function () {
		var t = new Anniu();
		this.anniufanhui = t;
		t.height = 20;
		t.skinName = "AnniuSkin";
		t.visible = true;
		t.width = 20;
		t.x = 15;
		t.y = 130;
		return t;
	};
	return yingxiongchangjingSkin;
})(eui.Skin);generateEUI.paths['resource/game/yingxiongliebiaoSkin.exml'] = window.yingxiongliebiaoSkin = (function (_super) {
	__extends(yingxiongliebiaoSkin, _super);
	var yingxiongliebiaoSkin$Skin1 = 	(function (_super) {
		__extends(yingxiongliebiaoSkin$Skin1, _super);
		function yingxiongliebiaoSkin$Skin1() {
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
						new eui.SetProperty("_Image1","source","checked_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = yingxiongliebiaoSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "checkNo_png";
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
		return yingxiongliebiaoSkin$Skin1;
	})(eui.Skin);

	function yingxiongliebiaoSkin() {
		_super.call(this);
		this.skinParts = ["touxiang","mingzi","pingjia","xuanze"];
		
		this.elementsContent = [this._Image1_i(),this.touxiang_i(),this.mingzi_i(),this.pingjia_i(),this.xuanze_i()];
	}
	var _proto = yingxiongliebiaoSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "listItemBkgd_png";
		t.x = 0;
		t.y = -1;
		return t;
	};
	_proto.touxiang_i = function () {
		var t = new eui.Image();
		this.touxiang = t;
		t.source = "heros01_png";
		t.x = 30.83;
		t.y = 15.5;
		return t;
	};
	_proto.mingzi_i = function () {
		var t = new eui.Label();
		this.mingzi = t;
		t.size = 20;
		t.text = "Label";
		t.textColor = 16312092;
		t.x = 185;
		t.y = 20;
		return t;
	};
	_proto.pingjia_i = function () {
		var t = new eui.Label();
		this.pingjia = t;
		t.size = 20;
		t.text = "Label";
		t.textColor = 4896482;
		t.x = 127;
		t.y = 61;
		return t;
	};
	_proto.xuanze_i = function () {
		var t = new eui.CheckBox();
		this.xuanze = t;
		t.horizontalCenter = 177.5;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = yingxiongliebiaoSkin$Skin1;
		return t;
	};
	return yingxiongliebiaoSkin;
})(eui.Skin);generateEUI.paths['resource/game/zhuangbeiSkin.exml'] = window.zhuangbeiSkin = (function (_super) {
	__extends(zhuangbeiSkin, _super);
	function zhuangbeiSkin() {
		_super.call(this);
		this.skinParts = ["nameLab","icon"];
		
		this.height = 130;
		this.width = 87;
		this.elementsContent = [this._Image1_i(),this.nameLab_i(),this.icon_i()];
	}
	var _proto = zhuangbeiSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "skillItemFrame_png";
		t.x = 0;
		t.y = 6;
		return t;
	};
	_proto.nameLab_i = function () {
		var t = new eui.Label();
		this.nameLab = t;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 16098851;
		t.x = 6.826;
		t.y = 95.348;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.source = "skillIcon01_png";
		t.x = 10;
		t.y = 14;
		return t;
	};
	return zhuangbeiSkin;
})(eui.Skin);generateEUI.paths['resource/game/zhujiemian.exml'] = window.zhujiemianSkin = (function (_super) {
	__extends(zhujiemianSkin, _super);
	function zhujiemianSkin() {
		_super.call(this);
		this.skinParts = ["sceneGroup","anniu"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this.sceneGroup_i(),this.anniu_i()];
	}
	var _proto = zhujiemianSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "homeBg_jpg";
		t.top = 0;
		return t;
	};
	_proto.sceneGroup_i = function () {
		var t = new eui.Group();
		this.sceneGroup = t;
		t.horizontalCenter = 0;
		t.y = 0;
		return t;
	};
	_proto.anniu_i = function () {
		var t = new anNiuZu();
		this.anniu = t;
		t.bottom = 0;
		t.horizontalCenter = 4;
		t.skinName = "anNiuZuSkin";
		return t;
	};
	return zhujiemianSkin;
})(eui.Skin);