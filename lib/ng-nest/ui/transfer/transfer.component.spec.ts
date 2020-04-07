import { XIconModule } from '@ng-nest/ui/icon';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XTransferComponent } from './transfer.component';
import { Component, DebugElement, ChangeDetectorRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { XLayoutModule } from '@ng-nest/ui/layout';
import { XTransferModule } from '@ng-nest/ui/transfer';
import { FormsModule } from '@angular/forms';
import { XTransferPrefix, XTransferNode } from './transfer.type';
import { XButtonModule } from '@ng-nest/ui/button';
import { XContainerModule } from '@ng-nest/ui/container';
import { interval, of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe(XTransferPrefix, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, XTransferModule, XButtonModule, XContainerModule, XLayoutModule, XIconModule],
      declarations: [TestXTransferComponent]
    }).compileComponents();
  }));
  describe(`default.`, () => {
    let fixture: ComponentFixture<TestXTransferComponent>;
    let transfer: DebugElement;
    beforeEach(() => {
      fixture = TestBed.createComponent(TestXTransferComponent);
      fixture.detectChanges();
      transfer = fixture.debugElement.query(By.directive(XTransferComponent));
    });
    it('should create.', () => {
      expect(transfer).toBeDefined();
    });
  });
});

@Component({
  template: `
    <div class="row">
      <x-transfer
        [data]="data"
        [(ngModel)]="value"
        (ngModelChange)="change($event)"
        [nodeTpl]="nodeTpl"
        [titleTpl]="titleTpl"
        [titles]="['用户列表', '已选用户']"
        drag
      >
      </x-transfer>
      <ng-template #nodeTpl let-item="$node">
        <x-icon [type]="item.node.icon" class="custom-icon"></x-icon>{{ item.node?.label }}
      </ng-template>
      <ng-template #titleTpl let-title="$title" let-count="$count" let-checkedCount="$checkedCount">
        <div class="custom-title">
          <span>{{ checkedCount <= 0 ? '' : checkedCount + ' /' }} {{ count }} 项</span>
          <span>{{ title }}</span>
        </div>
      </ng-template>
    </div>
  `,
  styles: [
    `
      .row:not(:first-child) {
        margin-top: 1rem;
      }
      .custom-icon {
        margin-right: 0.125rem;
        font-size: 0.925rem;
      }
      .custom-title {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `
  ]
})
class TestXTransferComponent {
  value = [1, 3, 7];
  data: XTransferNode[] = Array.from({ length: 15 }).map((x, i) => {
    return { id: i + 1, label: '用户 ' + (i + 1), icon: 'fto-user', disabled: [3, 5, 9].indexOf(i + 1) >= 0 };
  });
  constructor(private cdr: ChangeDetectorRef) {
    // interval(10).subscribe(x => {
    //   of(true)
    //     .pipe(delay(10))
    //     .subscribe(() => {
    //       this.cdr.detectChanges();
    //     });
    // });
  }
  change($event) {
    console.log($event);
  }
}
