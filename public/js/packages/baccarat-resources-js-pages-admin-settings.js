"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7961],{83064:(A,e,r)=>{r.r(e),r.d(e,{default:()=>i});var _=r(85893),o=r(5255),a=r(91232),t=r(44557),s=r(94694),n=r(86131),l=r(82674),E=r(84002),C=r(80010),T=r(74944);const c={components:{FileUpload:r(79143).Z},mixins:[T.Z],props:{packageId:{type:String,required:!0},form:{type:Object,required:!0}},data:function(){return{variables:{GAME_BACCARAT_CATEGORIES:(0,C.v)("".concat(this.packageId,".categories")),GAME_BACCARAT_BANNER:(0,C.v)("".concat(this.packageId,".banner")),GAME_BACCARAT_MIN_BET:(0,C.v)("".concat(this.packageId,".min_bet")),GAME_BACCARAT_MAX_BET:(0,C.v)("".concat(this.packageId,".max_bet")),GAME_BACCARAT_BET_CHANGE_AMOUNT:(0,C.v)("".concat(this.packageId,".bet_change_amount")),GAME_BACCARAT_DEFAULT_BET_AMOUNT:(0,C.v)("".concat(this.packageId,".default_bet_amount")),GAME_BACCARAT_PAYOUT_PLAYER:(0,C.v)("".concat(this.packageId,".payouts.player")),GAME_BACCARAT_PAYOUT_TIE:(0,C.v)("".concat(this.packageId,".payouts.tie")),GAME_BACCARAT_PAYOUT_BANKER:(0,C.v)("".concat(this.packageId,".payouts.banker")),GAME_BACCARAT_SOUNDS_WIN:(0,C.v)("".concat(this.packageId,".sounds.win")),GAME_BACCARAT_SOUNDS_LOSE:(0,C.v)("".concat(this.packageId,".sounds.lose")),GAME_BACCARAT_SOUNDS_PUSH:(0,C.v)("".concat(this.packageId,".sounds.push"))}}},created:function(){this.$emit("input",this.variables)}};const i=(0,r(51900).Z)(c,(function(){var A=this,e=A._self._c;return e(_.Z,{attrs:{flat:""}},[e(o.ZB,[e(l.Z,[e(t.Z,[e(n.Z,[A._v(A._s(A.$t("General")))]),A._v(" "),e(s.Z,[e(a.Z,{attrs:{label:A.$t("Categories"),multiple:"",outlined:"",chips:"","small-chips":"","deletable-chips":"","hide-selected":"","no-filter":""},model:{value:A.form.GAME_BACCARAT_CATEGORIES,callback:function(e){A.$set(A.form,"GAME_BACCARAT_CATEGORIES",e)},expression:"form.GAME_BACCARAT_CATEGORIES"}}),A._v(" "),e("file-upload",{attrs:{label:A.$t("Banner"),name:"banner",folder:"games/".concat(A.packageId)},model:{value:A.form.GAME_BACCARAT_BANNER,callback:function(e){A.$set(A.form,"GAME_BACCARAT_BANNER",e)},expression:"form.GAME_BACCARAT_BANNER"}}),A._v(" "),e(E.Z,{attrs:{label:A.$t("Min bet"),rules:[A.validationInteger,A.validationPositiveNumber],error:A.form.errors.has("GAME_BACCARAT_MIN_BET"),"error-messages":A.form.errors.get("GAME_BACCARAT_MIN_BET"),outlined:"",suffix:A.$t("credits")},on:{keydown:function(e){return A.clearFormErrors(e,"GAME_BACCARAT_MIN_BET")}},model:{value:A.form.GAME_BACCARAT_MIN_BET,callback:function(e){A.$set(A.form,"GAME_BACCARAT_MIN_BET",A._n(e))},expression:"form.GAME_BACCARAT_MIN_BET"}}),A._v(" "),e(E.Z,{attrs:{label:A.$t("Max bet"),rules:[A.validationInteger,A.validationPositiveNumber],error:A.form.errors.has("GAME_BACCARAT_MAX_BET"),"error-messages":A.form.errors.get("GAME_BACCARAT_MAX_BET"),outlined:"",suffix:A.$t("credits")},on:{keydown:function(e){return A.clearFormErrors(e,"GAME_BACCARAT_MAX_BET")}},model:{value:A.form.GAME_BACCARAT_MAX_BET,callback:function(e){A.$set(A.form,"GAME_BACCARAT_MAX_BET",A._n(e))},expression:"form.GAME_BACCARAT_MAX_BET"}}),A._v(" "),e(E.Z,{attrs:{label:A.$t("Bet increment / decrement amount"),rules:[A.validationInteger,A.validationPositiveNumber],error:A.form.errors.has("GAME_BACCARAT_BET_CHANGE_AMOUNT"),"error-messages":A.form.errors.get("GAME_BACCARAT_BET_CHANGE_AMOUNT"),outlined:"",suffix:A.$t("credits")},on:{keydown:function(e){return A.clearFormErrors(e,"GAME_BACCARAT_BET_CHANGE_AMOUNT")}},model:{value:A.form.GAME_BACCARAT_BET_CHANGE_AMOUNT,callback:function(e){A.$set(A.form,"GAME_BACCARAT_BET_CHANGE_AMOUNT",A._n(e))},expression:"form.GAME_BACCARAT_BET_CHANGE_AMOUNT"}}),A._v(" "),e(E.Z,{attrs:{label:A.$t("Default bet amount"),rules:[A.validationInteger,A.validationPositiveNumber],error:A.form.errors.has("GAME_BACCARAT_DEFAULT_BET_AMOUNT"),"error-messages":A.form.errors.get("GAME_BACCARAT_DEFAULT_BET_AMOUNT"),outlined:"",suffix:A.$t("credits")},on:{keydown:function(e){return A.clearFormErrors(e,"GAME_BACCARAT_DEFAULT_BET_AMOUNT")}},model:{value:A.form.GAME_BACCARAT_DEFAULT_BET_AMOUNT,callback:function(e){A.$set(A.form,"GAME_BACCARAT_DEFAULT_BET_AMOUNT",A._n(e))},expression:"form.GAME_BACCARAT_DEFAULT_BET_AMOUNT"}})],1)],1),A._v(" "),e(t.Z,[e(n.Z,[A._v(A._s(A.$t("Paytable")))]),A._v(" "),e(s.Z,[e(E.Z,{attrs:{label:A.$t("Player bet"),rules:[A.validationPositiveNumber],error:A.form.errors.has("GAME_BACCARAT_PAYOUT_PLAYER"),"error-messages":A.form.errors.get("GAME_BACCARAT_PAYOUT_PLAYER"),outlined:"",prefix:A.$t("Bet")+" x "},on:{keydown:function(e){return A.clearFormErrors(e,"GAME_BACCARAT_PAYOUT_PLAYER")}},model:{value:A.form.GAME_BACCARAT_PAYOUT_PLAYER,callback:function(e){A.$set(A.form,"GAME_BACCARAT_PAYOUT_PLAYER",A._n(e))},expression:"form.GAME_BACCARAT_PAYOUT_PLAYER"}}),A._v(" "),e(E.Z,{attrs:{label:A.$t("Tie bet"),rules:[A.validationPositiveNumber],error:A.form.errors.has("GAME_BACCARAT_PAYOUT_TIE"),"error-messages":A.form.errors.get("GAME_BACCARAT_PAYOUT_TIE"),outlined:"",prefix:A.$t("Bet")+" x "},on:{keydown:function(e){return A.clearFormErrors(e,"GAME_BACCARAT_PAYOUT_TIE")}},model:{value:A.form.GAME_BACCARAT_PAYOUT_TIE,callback:function(e){A.$set(A.form,"GAME_BACCARAT_PAYOUT_TIE",A._n(e))},expression:"form.GAME_BACCARAT_PAYOUT_TIE"}}),A._v(" "),e(E.Z,{attrs:{label:A.$t("Banker bet"),rules:[A.validationPositiveNumber],error:A.form.errors.has("GAME_BACCARAT_PAYOUT_BANKER"),"error-messages":A.form.errors.get("GAME_BACCARAT_PAYOUT_BANKER"),outlined:"",prefix:A.$t("Bet")+" x "},on:{keydown:function(e){return A.clearFormErrors(e,"GAME_BACCARAT_PAYOUT_BANKER")}},model:{value:A.form.GAME_BACCARAT_PAYOUT_BANKER,callback:function(e){A.$set(A.form,"GAME_BACCARAT_PAYOUT_BANKER",A._n(e))},expression:"form.GAME_BACCARAT_PAYOUT_BANKER"}})],1)],1),A._v(" "),e(t.Z,[e(n.Z,[A._v(A._s(A.$t("Sounds")))]),A._v(" "),e(s.Z,[e("file-upload",{attrs:{label:A.$t("Win"),name:"win",folder:"games/".concat(A.packageId),accept:".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac",clearable:!0},model:{value:A.form.GAME_BACCARAT_SOUNDS_WIN,callback:function(e){A.$set(A.form,"GAME_BACCARAT_SOUNDS_WIN",e)},expression:"form.GAME_BACCARAT_SOUNDS_WIN"}}),A._v(" "),e("file-upload",{attrs:{label:A.$t("Lose"),name:"lose",folder:"games/".concat(A.packageId),accept:".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac",clearable:!0},model:{value:A.form.GAME_BACCARAT_SOUNDS_LOSE,callback:function(e){A.$set(A.form,"GAME_BACCARAT_SOUNDS_LOSE",e)},expression:"form.GAME_BACCARAT_SOUNDS_LOSE"}}),A._v(" "),e("file-upload",{attrs:{label:A.$t("Push"),name:"lose",folder:"games/".concat(A.packageId),accept:".webm,.wav,.mp3,.ogg,.m4a,.m4b,.mp4,.aac",clearable:!0},model:{value:A.form.GAME_BACCARAT_SOUNDS_PUSH,callback:function(e){A.$set(A.form,"GAME_BACCARAT_SOUNDS_PUSH",e)},expression:"form.GAME_BACCARAT_SOUNDS_PUSH"}})],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);