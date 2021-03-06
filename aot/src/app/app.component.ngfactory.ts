/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from './app.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '../../../src/app/app.component';
import * as import3 from '@angular/common';
const styles_AppComponent:any[] = [import0.styles];
export const RenderType_AppComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_AppComponent,
  data: {}
}
);
function View_AppComponent_1(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Hello Angular']))
  ]
  ,(null as any),(null as any));
}
function View_AppComponent_2(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '',
      ''
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = v.context.$implicit;
    ck(v,1,0,currVal_0);
  });
}
export function View_AppComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'button',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.AppComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.toggleHeading()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Toggle Heading'])),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_AppComponent_1)),
    import1.ɵdid(16384,(null as any),0,import3.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n\n'])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h3',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['List of Heroes'])),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_AppComponent_2)),
    import1.ɵdid(802816,(null as any),0,import3.NgForOf,[
      import1.ViewContainerRef,
      import1.TemplateRef,
      import1.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import2.AppComponent = v.component;
    const currVal_0:any = co.showHeading;
    ck(v,4,0,currVal_0);
    const currVal_1:any = co.heroes;
    ck(v,10,0,currVal_1);
  },(null as any));
}
function View_AppComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'app-root',([] as any[]),(null as any),(null as any),(null as any),View_AppComponent_0,RenderType_AppComponent)),
    import1.ɵdid(49152,(null as any),0,import2.AppComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const AppComponentNgFactory:import1.ComponentFactory<import2.AppComponent> = import1.ɵccf('app-root',import2.AppComponent,View_AppComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2lyaW5hX2NybS9Eb2N1bWVudHMvd29ya3NwYWNlL0FuZ3VsYXI0U1NSL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9pcmluYV9jcm0vRG9jdW1lbnRzL3dvcmtzcGFjZS9Bbmd1bGFyNFNTUi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9pcmluYV9jcm0vRG9jdW1lbnRzL3dvcmtzcGFjZS9Bbmd1bGFyNFNTUi9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2lyaW5hX2NybS9Eb2N1bWVudHMvd29ya3NwYWNlL0FuZ3VsYXI0U1NSL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cy5BcHBDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVIZWFkaW5nKClcIj5Ub2dnbGUgSGVhZGluZzwvYnV0dG9uPlxuPGgxICpuZ0lmPVwic2hvd0hlYWRpbmdcIj5IZWxsbyBBbmd1bGFyPC9oMT5cblxuPGgzPkxpc3Qgb2YgSGVyb2VzPC9oMz5cbjxkaXYgKm5nRm9yPVwibGV0IGhlcm8gb2YgaGVyb2VzXCI+e3toZXJvfX08L2Rpdj5cbiIsIjxhcHAtcm9vdD48L2FwcC1yb290PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0NBO0lBQXdCOzs7Ozs7SUFHeEI7SUFBaUM7TUFBQTtNQUFBO0lBQUE7SUFBQTs7O0lBQUE7SUFBQTs7Ozs7TUFKakM7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBUTtRQUFBO1FBQUE7TUFBQTtNQUFSO0lBQUE7SUFBa0M7SUFBdUI7SUFDekQ7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUEwQztJQUUxQztJQUFJO0lBQW1CO0lBQ3ZCO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQStDOzs7O0lBSDNDO0lBQUosU0FBSSxTQUFKO0lBR0s7SUFBTCxVQUFLLFNBQUw7Ozs7O0lDSkE7Z0JBQUE7Ozs7In0=
