/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../../components/welcome/welcome.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/router/src/router';
import * as import9 from '../../../../../services/http.service';
import * as import10 from './welcome.component.scss.shim.ngstyle';
import * as import11 from '@angular/core/src/animation/animation_transition';
import * as import12 from '@angular/core/src/animation/animation_sequence_player';
import * as import13 from '@angular/core/src/animation/animation_styles';
import * as import14 from '@angular/core/src/animation/animation_style_util';
import * as import15 from '@angular/core/src/animation/animation_keyframe';
import * as import16 from '@angular/core/src/animation/animation_player';
import * as import17 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import18 from '@angular/core/src/linker/view_container';
import * as import19 from '@angular/core/src/change_detection/change_detection_util';
import * as import20 from '@angular/router/src/router_state';
import * as import21 from '@angular/common/src/location/location_strategy';
import * as import22 from '@angular/router/src/directives/router_link';
import * as import23 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import24 from '@angular/core/src/linker/template_ref';
import * as import25 from '@angular/common/src/directives/ng_if';
import * as import26 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import27 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import28 from '@angular/common/src/directives/ng_for';
import * as import29 from '../../../../../components/auth/auth-profile.component';
import * as import30 from '../auth/auth-profile.component.ngfactory';
import * as import31 from '@angular/common/src/location/location';
import * as import32 from '../../../../../services/auth.service';
import * as import33 from '../../../../../services/user.service';
export class Wrapper_WelcomeComponent {
  /*private*/ _eventHandler:Function;
  context:import0.WelcomeComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.WelcomeComponent(p0,p1);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_WelcomeComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_WelcomeComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.WelcomeComponent>;
  _WelcomeComponent_0_3:Wrapper_WelcomeComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_WelcomeComponent_Host0,renderType_WelcomeComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'welcome',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_WelcomeComponent0(this.viewUtils,this,0,this._el_0);
    this._WelcomeComponent_0_3 = new Wrapper_WelcomeComponent(this.injectorGet(import8.Router,this.parentIndex),this.injectorGet(import9.HttpService,this.parentIndex));
    this.compView_0.create(this._WelcomeComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._WelcomeComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.WelcomeComponent) && (0 === requestNodeIndex))) { return this._WelcomeComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._WelcomeComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const WelcomeComponentNgFactory:import7.ComponentFactory<import0.WelcomeComponent> = new import7.ComponentFactory<import0.WelcomeComponent>('welcome',View_WelcomeComponent_Host0,import0.WelcomeComponent);
const styles_WelcomeComponent:any[] = [import10.styles];
var WelcomeComponent_welcome_states:any = {
  'in': {'opacity': '1'},
  '*': {},
  'void': {}
}
;
function WelcomeComponent_welcome_factory(view:import1.AppView<any>,element:any,currentState:any,nextState:any):import11.AnimationTransition {
  var previousPlayers:any = view.animationContext.getAnimationPlayers(element,((nextState == 'void')? (null as any): 'welcome'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = WelcomeComponent_welcome_states['*'];
  var startStateStyles:any = WelcomeComponent_welcome_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = WelcomeComponent_welcome_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  if (((player == (null as any)) && ((currentState == 'void') && true))) {
      player = new import12.AnimationSequencePlayer([view.renderer.animate(element,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {'opacity': '0'}
      ]
      )),import14.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import15.AnimationKeyframe(0,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[{}]))),
        new import15.AnimationKeyframe(1,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),200,0,(null as any),previousPlayers)]);
    totalTime = 200;
  }
  if (((player == (null as any)) && (true && (nextState == 'void')))) {
      player = new import12.AnimationSequencePlayer([view.renderer.animate(element,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[startStateStyles])),[
        new import15.AnimationKeyframe(0,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[{'opacity': 'true'}]))),
        new import15.AnimationKeyframe(1,new import13.AnimationStyles(import14.collectAndResolveStyles(collectedStyles,[{'opacity': '0'}])))
      ]
    ,100,0,(null as any),previousPlayers)]);
    totalTime = 100;
  }
  if ((player == (null as any))) { (player = new import16.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    player.destroy();
    import14.renderStyles(element,view.renderer,import14.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  new import12.AnimationSequencePlayer(previousPlayers).destroy();
  import14.renderStyles(element,view.renderer,import14.clearStyles(startStateStyles));
  view.animationContext.queueAnimation(element,'welcome',player);
  return new import11.AnimationTransition(player,currentState,nextState,totalTime);
}
class View_WelcomeComponent3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import17.Wrapper_RouterLinkWithHref;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_6:any;
  _arr_7:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import18.ViewContainer) {
    super(View_WelcomeComponent3,renderType_WelcomeComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_6 = import19.UNINITIALIZED;
    this._arr_7 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_8 = import19.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'h4',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_2_3 = new import17.Wrapper_RouterLinkWithHref(this.parentView.parentView.parentView.injectorGet(import8.Router,this.parentView.parentView.parentIndex),this.parentView.parentView.parentView.injectorGet(import20.ActivatedRoute,this.parentView.parentView.parentIndex),this.parentView.parentView.parentView.injectorGet(import21.LocationStrategy,this.parentView.parentView.parentIndex));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_2));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._RouterLinkWithHref_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_6:any = this.parentView.context.$implicit.state;
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      var animationTransition_welcome:any = this.componentType.animations['welcome'](this,this._el_0,((this._expr_6 == import19.UNINITIALIZED)? 'void': this._expr_6),((currVal_6 == import19.UNINITIALIZED)? 'void': currVal_6));
      this._expr_6 = currVal_6;
    }
    const currVal_2_0_0:any = this._arr_7(((('/' + this.parentView.context.$implicit.name) + '/') + this.parentView.context.$implicit.repo));
    this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_0,throwOnChange,false);
    this._RouterLinkWithHref_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this._RouterLinkWithHref_2_3.checkHost(this,this,this._el_2,throwOnChange);
    const currVal_8:any = import3.inlineInterpolate(1,'',this.parentView.context.$implicit.repo,'');
    if (import3.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setText(this._text_3,currVal_8);
      this._expr_8 = currVal_8;
    }
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.ngOnDestroy();
  }
  detachInternal():void {
    var animationTransition_welcome:any = this.componentType.animations['welcome'](this,this._el_0,this._expr_6,'void');
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_2_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
class View_WelcomeComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import18.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import23.Wrapper_NgIf;
  _text_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import18.ViewContainer) {
    super(View_WelcomeComponent2,renderType_WelcomeComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import18.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import24.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import23.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import24.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import25.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = (this.context.$implicit.name === (<View_WelcomeComponent0>this.parentView.parentView)._AuthProfileComponent_0_3.context.login.toLowerCase());
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 2)) { return new View_WelcomeComponent3(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}
class View_WelcomeComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _vc_5:import18.ViewContainer;
  _TemplateRef_5_5:any;
  _NgFor_5_6:import26.Wrapper_NgFor;
  _text_6:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import18.ViewContainer) {
    super(View_WelcomeComponent1,renderType_WelcomeComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','own-blogs'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'Your blogs:',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_5 = new import18.ViewContainer(5,0,this,this._anchor_5);
    this._TemplateRef_5_5 = new import24.TemplateRef_(this,5,this._anchor_5);
    this._NgFor_5_6 = new import26.Wrapper_NgFor(this._vc_5.vcRef,this._TemplateRef_5_5,this.parentView.injectorGet(import27.IterableDiffers,this.parentIndex),this.parentView.ref);
    this._text_6 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._anchor_5,
      this._text_6
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import24.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import28.NgFor) && (5 === requestNodeIndex))) { return this._NgFor_5_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_5_0_0:any = this.parentView.context.blogs;
    this._NgFor_5_6.check_ngForOf(currVal_5_0_0,throwOnChange,false);
    this._NgFor_5_6.ngDoCheck(this,this._anchor_5,throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_5.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 5)) { return new View_WelcomeComponent2(this.viewUtils,this,5,this._anchor_5,this._vc_5); }
    return (null as any);
  }
}
class View_WelcomeComponent4 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _RouterLinkWithHref_4_3:import17.Wrapper_RouterLinkWithHref;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  /*private*/ _expr_9:any;
  _arr_10:any;
  /*private*/ _expr_11:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import18.ViewContainer) {
    super(View_WelcomeComponent4,renderType_WelcomeComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_9 = import19.UNINITIALIZED;
    this._arr_10 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_11 = import19.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'section',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'h4',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_4_3 = new import17.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import8.Router,this.parentIndex),this.parentView.injectorGet(import20.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import21.LocationStrategy,this.parentIndex));
    this._text_5 = this.renderer.createText(this._el_4,'',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_4,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_4));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.RouterLinkWithHref) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._RouterLinkWithHref_4_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_9:any = this.context.$implicit.state;
    if (import3.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      var animationTransition_welcome:any = this.componentType.animations['welcome'](this,this._el_0,((this._expr_9 == import19.UNINITIALIZED)? 'void': this._expr_9),((currVal_9 == import19.UNINITIALIZED)? 'void': currVal_9));
      this._expr_9 = currVal_9;
    }
    const currVal_4_0_0:any = this._arr_10(((('/' + this.context.$implicit.name) + '/') + this.context.$implicit.repo));
    this._RouterLinkWithHref_4_3.check_routerLink(currVal_4_0_0,throwOnChange,false);
    this._RouterLinkWithHref_4_3.ngDoCheck(this,this._el_4,throwOnChange);
    this._RouterLinkWithHref_4_3.checkHost(this,this,this._el_4,throwOnChange);
    const currVal_11:any = import3.inlineInterpolate(2,'',this.context.$implicit.name,' - ',this.context.$implicit.repo,'');
    if (import3.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setText(this._text_5,currVal_11);
      this._expr_11 = currVal_11;
    }
  }
  destroyInternal():void {
    this._RouterLinkWithHref_4_3.ngOnDestroy();
  }
  detachInternal():void {
    var animationTransition_welcome:any = this.componentType.animations['welcome'](this,this._el_0,this._expr_9,'void');
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_4(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_4_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
var renderType_WelcomeComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_WelcomeComponent,{'welcome': WelcomeComponent_welcome_factory});
export class View_WelcomeComponent0 extends import1.AppView<import0.WelcomeComponent> {
  _el_0:any;
  compView_0:import1.AppView<import29.AuthProfileComponent>;
  _AuthProfileComponent_0_3:import30.Wrapper_AuthProfileComponent;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _vc_5:import18.ViewContainer;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import23.Wrapper_NgIf;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _anchor_11:any;
  /*private*/ _vc_11:import18.ViewContainer;
  _TemplateRef_11_5:any;
  _NgFor_11_6:import26.Wrapper_NgFor;
  _text_12:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_WelcomeComponent0,renderType_WelcomeComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'auth-profile',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import30.View_AuthProfileComponent0(this.viewUtils,this,0,this._el_0);
    this._AuthProfileComponent_0_3 = new import30.Wrapper_AuthProfileComponent(this.parentView.injectorGet(import8.Router,this.parentIndex),this.parentView.injectorGet(import20.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import31.Location,this.parentIndex),this.parentView.injectorGet(import32.AuthService,this.parentIndex),this.parentView.injectorGet(import33.UserService,this.parentIndex));
    this.compView_0.create(this._AuthProfileComponent_0_3.context);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,parentRenderNode,'button',new import3.InlineArray4(4,'class','btn btn-primary','type','button'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'Create Blog',(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_5 = new import18.ViewContainer(5,(null as any),this,this._anchor_5);
    this._TemplateRef_5_5 = new import24.TemplateRef_(this,5,this._anchor_5);
    this._NgIf_5_6 = new import23.Wrapper_NgIf(this._vc_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,parentRenderNode,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'All blogs:',(null as any));
    this._text_10 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._anchor_11 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_11 = new import18.ViewContainer(11,(null as any),this,this._anchor_11);
    this._TemplateRef_11_5 = new import24.TemplateRef_(this,11,this._anchor_11);
    this._NgFor_11_6 = new import26.Wrapper_NgFor(this._vc_11.vcRef,this._TemplateRef_11_5,this.parentView.injectorGet(import27.IterableDiffers,this.parentIndex),this.ref);
    this._text_12 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_2));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._anchor_11,
      this._text_12
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import29.AuthProfileComponent) && (0 === requestNodeIndex))) { return this._AuthProfileComponent_0_3.context; }
    if (((token === import24.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import25.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6.context; }
    if (((token === import24.TemplateRef) && (11 === requestNodeIndex))) { return this._TemplateRef_11_5; }
    if (((token === import28.NgFor) && (11 === requestNodeIndex))) { return this._NgFor_11_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AuthProfileComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_5_0_0:any = this._AuthProfileComponent_0_3.context.logged;
    this._NgIf_5_6.check_ngIf(currVal_5_0_0,throwOnChange,false);
    this._NgIf_5_6.ngDoCheck(this,this._anchor_5,throwOnChange);
    const currVal_11_0_0:any = this.context.blogs;
    this._NgFor_11_6.check_ngForOf(currVal_11_0_0,throwOnChange,false);
    this._NgFor_11_6.ngDoCheck(this,this._anchor_11,throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
    this._vc_11.detectChangesInNestedViews(throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_5.destroyNestedViews();
    this._vc_11.destroyNestedViews();
    this.compView_0.destroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 5)) { return new View_WelcomeComponent1(this.viewUtils,this,5,this._anchor_5,this._vc_5); }
    if ((nodeIndex == 11)) { return new View_WelcomeComponent4(this.viewUtils,this,11,this._anchor_11,this._vc_11); }
    return (null as any);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.go()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}