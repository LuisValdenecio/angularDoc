import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoult comfirm the nav-bar elements', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelectorAll('.nav-link')[0].innerText).toEqual('início');
    expect(compiled.querySelectorAll('.nav-link')[1].innerText).toEqual('definições');
    expect(compiled.querySelectorAll('.nav-link')[2].innerText).toEqual('histórico');

  });


});
