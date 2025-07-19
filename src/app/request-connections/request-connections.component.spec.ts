import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestConnectionsComponent } from './request-connections.component';

describe('RequestConnectionsComponent', () => {
  let component: RequestConnectionsComponent;
  let fixture: ComponentFixture<RequestConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestConnectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
