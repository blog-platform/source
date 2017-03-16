/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../../components/pagination/pagination.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/router/src/router';
import * as import9 from '@angular/common/src/location/location';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '../../../../../services/http.service';
import * as import12 from '../../../../../services/pager.service';
import * as import13 from './pagination.component.scss.shim.ngstyle';
import * as import14 from '../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import15 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from '@angular/common/src/location/location_strategy';
import * as import21 from '@angular/router/src/directives/router_link';
import * as import22 from '@angular/common/src/directives/ng_class';
import * as import23 from '@angular/core/src/change_detection/change_detection_util';
import * as import24 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import25 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import26 from '@angular/core/src/linker/template_ref';
import * as import27 from '@angular/common/src/directives/ng_if';
import * as import28 from '@angular/common/src/directives/ng_for';
export class Wrapper_PaginationComponent {
  /*private*/ _eventHandler:Function;
  context:import0.PaginationComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any,p4:any) {
    this._changed = false;
    this.context = new import0.PaginationComponent(p0,p1,p2,p3,p4);
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
var renderType_PaginationComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_PaginationComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.PaginationComponent>;
  _PaginationComponent_0_3:Wrapper_PaginationComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PaginationComponent_Host0,renderType_PaginationComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'pagination',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_PaginationComponent0(this.viewUtils,this,0,this._el_0);
    this._PaginationComponent_0_3 = new Wrapper_PaginationComponent(this.injectorGet(import8.Router,this.parentIndex),this.injectorGet(import9.Location,this.parentIndex),this.injectorGet(import10.ActivatedRoute,this.parentIndex),this.injectorGet(import11.HttpService,this.parentIndex),this.injectorGet(import12.PagerService,this.parentIndex));
    this.compView_0.create(this._PaginationComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._PaginationComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PaginationComponent) && (0 === requestNodeIndex))) { return this._PaginationComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._PaginationComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PaginationComponentNgFactory:import7.ComponentFactory<import0.PaginationComponent> = new import7.ComponentFactory<import0.PaginationComponent>('pagination',View_PaginationComponent_Host0,import0.PaginationComponent);
const styles_PaginationComponent:any[] = [import13.styles];
class View_PaginationComponent2 extends import1.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import14.Wrapper_NgClass;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import15.Wrapper_RouterLinkWithHref;
  _text_3:any;
  _text_4:any;
  _map_7:any;
  _arr_8:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_PaginationComponent2,renderType_PaginationComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_7 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {disabled: p0};
    });
    this._arr_8 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._NgClass_0_3 = new import14.Wrapper_NgClass(this.parentView.parentView.injectorGet(import17.IterableDiffers,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import18.KeyValueDiffers,this.parentView.parentIndex),new import19.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_2_3 = new import15.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import8.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import10.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import20.LocationStrategy,this.parentView.parentIndex));
    this._text_3 = this.renderer.createText(this._el_2,'First',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
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
    if (((token === import21.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._RouterLinkWithHref_2_3.context; }
    if (((token === import22.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._NgClass_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this._map_7((this.parentView.parentView.context.pager.currentPage === 1));
    this._NgClass_0_3.check_ngClass(currVal_0_0_0,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = this._arr_8(this.parentView.parentView.context.url,1);
    this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_0,throwOnChange,false);
    this._RouterLinkWithHref_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this._RouterLinkWithHref_2_3.checkHost(this,this,this._el_2,throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_2_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.parentView.context.setPage(1)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_PaginationComponent3 extends import1.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import14.Wrapper_NgClass;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import15.Wrapper_RouterLinkWithHref;
  _text_3:any;
  _text_4:any;
  _map_7:any;
  _arr_8:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_PaginationComponent3,renderType_PaginationComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_7 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {disabled: p0};
    });
    this._arr_8 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._NgClass_0_3 = new import14.Wrapper_NgClass(this.parentView.parentView.injectorGet(import17.IterableDiffers,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import18.KeyValueDiffers,this.parentView.parentIndex),new import19.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_2_3 = new import15.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import8.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import10.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import20.LocationStrategy,this.parentView.parentIndex));
    this._text_3 = this.renderer.createText(this._el_2,'Previous',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
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
    if (((token === import21.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._RouterLinkWithHref_2_3.context; }
    if (((token === import22.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._NgClass_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this._map_7((this.parentView.parentView.context.pager.currentPage === 1));
    this._NgClass_0_3.check_ngClass(currVal_0_0_0,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = this._arr_8(this.parentView.parentView.context.url,(this.parentView.parentView.context.pager.currentPage - 1));
    this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_0,throwOnChange,false);
    this._RouterLinkWithHref_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this._RouterLinkWithHref_2_3.checkHost(this,this,this._el_2,throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_2_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.parentView.context.setPage((this.parentView.parentView.context.pager.currentPage - 1))) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_PaginationComponent4 extends import1.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import14.Wrapper_NgClass;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import15.Wrapper_RouterLinkWithHref;
  _text_3:any;
  _text_4:any;
  _map_7:any;
  _arr_8:any;
  /*private*/ _expr_9:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_PaginationComponent4,renderType_PaginationComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_7 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {active: p0};
    });
    this._arr_8 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_9 = import23.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._NgClass_0_3 = new import14.Wrapper_NgClass(this.parentView.parentView.injectorGet(import17.IterableDiffers,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import18.KeyValueDiffers,this.parentView.parentIndex),new import19.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_2_3 = new import15.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import8.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import10.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import20.LocationStrategy,this.parentView.parentIndex));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
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
    if (((token === import21.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._RouterLinkWithHref_2_3.context; }
    if (((token === import22.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._NgClass_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this._map_7((this.parentView.parentView.context.pager.currentPage === this.context.$implicit));
    this._NgClass_0_3.check_ngClass(currVal_0_0_0,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = this._arr_8(this.parentView.parentView.context.url,this.context.$implicit);
    this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_0,throwOnChange,false);
    this._RouterLinkWithHref_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this._RouterLinkWithHref_2_3.checkHost(this,this,this._el_2,throwOnChange);
    const currVal_9:any = import3.inlineInterpolate(1,'',this.context.$implicit,'');
    if (import3.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setText(this._text_3,currVal_9);
      this._expr_9 = currVal_9;
    }
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_2_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.parentView.context.setPage(this.context.$implicit)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_PaginationComponent5 extends import1.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import14.Wrapper_NgClass;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import15.Wrapper_RouterLinkWithHref;
  _text_3:any;
  _text_4:any;
  _map_7:any;
  _arr_8:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_PaginationComponent5,renderType_PaginationComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_7 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {disabled: p0};
    });
    this._arr_8 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._NgClass_0_3 = new import14.Wrapper_NgClass(this.parentView.parentView.injectorGet(import17.IterableDiffers,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import18.KeyValueDiffers,this.parentView.parentIndex),new import19.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_2_3 = new import15.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import8.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import10.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import20.LocationStrategy,this.parentView.parentIndex));
    this._text_3 = this.renderer.createText(this._el_2,'Next',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
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
    if (((token === import21.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._RouterLinkWithHref_2_3.context; }
    if (((token === import22.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._NgClass_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this._map_7((this.parentView.parentView.context.pager.currentPage === this.parentView.parentView.context.pager.totalPages));
    this._NgClass_0_3.check_ngClass(currVal_0_0_0,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = this._arr_8(this.parentView.parentView.context.url,(this.parentView.parentView.context.pager.currentPage + 1));
    this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_0,throwOnChange,false);
    this._RouterLinkWithHref_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this._RouterLinkWithHref_2_3.checkHost(this,this,this._el_2,throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_2_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.parentView.context.setPage((this.parentView.parentView.context.pager.currentPage + 1))) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_PaginationComponent6 extends import1.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import14.Wrapper_NgClass;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import15.Wrapper_RouterLinkWithHref;
  _text_3:any;
  _text_4:any;
  _map_7:any;
  _arr_8:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_PaginationComponent6,renderType_PaginationComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_7 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {disabled: p0};
    });
    this._arr_8 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._NgClass_0_3 = new import14.Wrapper_NgClass(this.parentView.parentView.injectorGet(import17.IterableDiffers,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import18.KeyValueDiffers,this.parentView.parentIndex),new import19.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_2_3 = new import15.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import8.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import10.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import20.LocationStrategy,this.parentView.parentIndex));
    this._text_3 = this.renderer.createText(this._el_2,'Last',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
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
    if (((token === import21.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._RouterLinkWithHref_2_3.context; }
    if (((token === import22.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._NgClass_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this._map_7((this.parentView.parentView.context.pager.currentPage === this.parentView.parentView.context.pager.totalPages));
    this._NgClass_0_3.check_ngClass(currVal_0_0_0,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = this._arr_8(this.parentView.parentView.context.url,this.parentView.parentView.context.pager.pages.length);
    this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_0,throwOnChange,false);
    this._RouterLinkWithHref_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this._RouterLinkWithHref_2_3.checkHost(this,this,this._el_2,throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_2_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.parentView.context.setPage(this.parentView.parentView.context.pager.totalPages)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_PaginationComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import16.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import24.Wrapper_NgIf;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _vc_4:import16.ViewContainer;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import24.Wrapper_NgIf;
  _text_5:any;
  _anchor_6:any;
  /*private*/ _vc_6:import16.ViewContainer;
  _TemplateRef_6_5:any;
  _NgFor_6_6:import25.Wrapper_NgFor;
  _text_7:any;
  _anchor_8:any;
  /*private*/ _vc_8:import16.ViewContainer;
  _TemplateRef_8_5:any;
  _NgIf_8_6:import24.Wrapper_NgIf;
  _text_9:any;
  _anchor_10:any;
  /*private*/ _vc_10:import16.ViewContainer;
  _TemplateRef_10_5:any;
  _NgIf_10_6:import24.Wrapper_NgIf;
  _text_11:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_PaginationComponent1,renderType_PaginationComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'ul',new import3.InlineArray2(2,'class','pagination'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import16.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import26.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import24.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_4 = new import16.ViewContainer(4,0,this,this._anchor_4);
    this._TemplateRef_4_5 = new import26.TemplateRef_(this,4,this._anchor_4);
    this._NgIf_4_6 = new import24.Wrapper_NgIf(this._vc_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._anchor_6 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_6 = new import16.ViewContainer(6,0,this,this._anchor_6);
    this._TemplateRef_6_5 = new import26.TemplateRef_(this,6,this._anchor_6);
    this._NgFor_6_6 = new import25.Wrapper_NgFor(this._vc_6.vcRef,this._TemplateRef_6_5,this.parentView.injectorGet(import17.IterableDiffers,this.parentIndex),this.parentView.ref);
    this._text_7 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._anchor_8 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_8 = new import16.ViewContainer(8,0,this,this._anchor_8);
    this._TemplateRef_8_5 = new import26.TemplateRef_(this,8,this._anchor_8);
    this._NgIf_8_6 = new import24.Wrapper_NgIf(this._vc_8.vcRef,this._TemplateRef_8_5);
    this._text_9 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._anchor_10 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_10 = new import16.ViewContainer(10,0,this,this._anchor_10);
    this._TemplateRef_10_5 = new import26.TemplateRef_(this,10,this._anchor_10);
    this._NgIf_10_6 = new import24.Wrapper_NgIf(this._vc_10.vcRef,this._TemplateRef_10_5);
    this._text_11 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._anchor_6,
      this._text_7,
      this._anchor_8,
      this._text_9,
      this._anchor_10,
      this._text_11
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import26.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import27.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    if (((token === import26.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import27.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6.context; }
    if (((token === import26.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import28.NgFor) && (6 === requestNodeIndex))) { return this._NgFor_6_6.context; }
    if (((token === import26.TemplateRef) && (8 === requestNodeIndex))) { return this._TemplateRef_8_5; }
    if (((token === import27.NgIf) && (8 === requestNodeIndex))) { return this._NgIf_8_6.context; }
    if (((token === import26.TemplateRef) && (10 === requestNodeIndex))) { return this._TemplateRef_10_5; }
    if (((token === import27.NgIf) && (10 === requestNodeIndex))) { return this._NgIf_10_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = (this.parentView.context.pager.pages.length > 2);
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    const currVal_4_0_0:any = (this.parentView.context.pager.pages.length > 2);
    this._NgIf_4_6.check_ngIf(currVal_4_0_0,throwOnChange,false);
    this._NgIf_4_6.ngDoCheck(this,this._anchor_4,throwOnChange);
    const currVal_6_0_0:any = this.parentView.context.pager.pages;
    this._NgFor_6_6.check_ngForOf(currVal_6_0_0,throwOnChange,false);
    this._NgFor_6_6.ngDoCheck(this,this._anchor_6,throwOnChange);
    const currVal_8_0_0:any = (this.parentView.context.pager.pages.length > 2);
    this._NgIf_8_6.check_ngIf(currVal_8_0_0,throwOnChange,false);
    this._NgIf_8_6.ngDoCheck(this,this._anchor_8,throwOnChange);
    const currVal_10_0_0:any = (this.parentView.context.pager.pages.length > 2);
    this._NgIf_10_6.check_ngIf(currVal_10_0_0,throwOnChange,false);
    this._NgIf_10_6.ngDoCheck(this,this._anchor_10,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    this._vc_4.detectChangesInNestedViews(throwOnChange);
    this._vc_6.detectChangesInNestedViews(throwOnChange);
    this._vc_8.detectChangesInNestedViews(throwOnChange);
    this._vc_10.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
    this._vc_4.destroyNestedViews();
    this._vc_6.destroyNestedViews();
    this._vc_8.destroyNestedViews();
    this._vc_10.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 2)) { return new View_PaginationComponent2(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    if ((nodeIndex == 4)) { return new View_PaginationComponent3(this.viewUtils,this,4,this._anchor_4,this._vc_4); }
    if ((nodeIndex == 6)) { return new View_PaginationComponent4(this.viewUtils,this,6,this._anchor_6,this._vc_6); }
    if ((nodeIndex == 8)) { return new View_PaginationComponent5(this.viewUtils,this,8,this._anchor_8,this._vc_8); }
    if ((nodeIndex == 10)) { return new View_PaginationComponent6(this.viewUtils,this,10,this._anchor_10,this._vc_10); }
    return (null as any);
  }
}
var renderType_PaginationComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_PaginationComponent,{});
export class View_PaginationComponent0 extends import1.AppView<import0.PaginationComponent> {
  _anchor_0:any;
  /*private*/ _vc_0:import16.ViewContainer;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import24.Wrapper_NgIf;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PaginationComponent0,renderType_PaginationComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_0 = new import16.ViewContainer(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import26.TemplateRef_(this,0,this._anchor_0);
    this._NgIf_0_6 = new import24.Wrapper_NgIf(this._vc_0.vcRef,this._TemplateRef_0_5);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._anchor_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import26.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import27.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = (this.context.pager.pages && (this.context.pager.pages.length > 1));
    this._NgIf_0_6.check_ngIf(currVal_0_0_0,throwOnChange,false);
    this._NgIf_0_6.ngDoCheck(this,this._anchor_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 0)) { return new View_PaginationComponent1(this.viewUtils,this,0,this._anchor_0,this._vc_0); }
    return (null as any);
  }
}