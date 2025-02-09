import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { V3BiBreadcrumbArray } from '../../models/V3BiBreadcrumbArray';
import { MessageService } from '../../genericServices/message.service';
import { StorageService } from '../../genericServices/storage.service';
import { BreadcrumbService } from '../../genericServices/breadcrumb.service';
import { ScreenComponent } from '../../genericComponents/screen/screen.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';




class MockMessageService {}
class MockStorageService {
  initLanguages = jasmine.createSpy('initLanguages');
  getCrumb = jasmine.createSpy('getCrumb');
  removeLastCrumb = jasmine.createSpy('removeLastCrumb');
}
class MockBreadcrumbService {
  clean = jasmine.createSpy('clean');
  addCrumb = jasmine.createSpy('addCrumb');
}


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockStorageService: StorageService;
  let mockBreadcrumbService: BreadcrumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, ScreenComponent],
      providers: [
        { provide: MessageService, useClass: MockMessageService },
        { provide: StorageService, useClass: MockStorageService },
        { provide: BreadcrumbService, useClass: MockBreadcrumbService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    mockStorageService = TestBed.inject(StorageService);
    mockBreadcrumbService = TestBed.inject(BreadcrumbService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize breadcrumb and call necessary services on ngOnInit', () => {
    component.ngOnInit();
    expect(mockStorageService.initLanguages).toHaveBeenCalled();
    expect(mockBreadcrumbService.clean).toHaveBeenCalled();
    expect(mockBreadcrumbService.addCrumb).toHaveBeenCalledWith('Home', '/welcome');
  });

  it('should have initial values for logoState and sidebarState', () => {
    expect(component.logoState).toBe('enabled-logged-in');
    expect(component.sidebarState).toBe('disabled');
  });

  // Add more tests as needed

  it('should have a defined background image', () => {
    expect(component.backgroundImage).toBe('data:image/png;base64,iVBORw0KGgoAAAAlFTkSuQmCC');
  });
});

