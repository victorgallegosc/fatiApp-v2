import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaCitaComponent } from './idea-cita.component';

describe('IdeaCitaComponent', () => {
  let component: IdeaCitaComponent;
  let fixture: ComponentFixture<IdeaCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdeaCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdeaCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
