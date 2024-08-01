import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlGroupedClassDiagramComponent } from './uml-grouped-class-diagram.component';

describe('UmlGroupedClassDiagramComponent', () => {
  let component: UmlGroupedClassDiagramComponent;
  let fixture: ComponentFixture<UmlGroupedClassDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UmlGroupedClassDiagramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmlGroupedClassDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
