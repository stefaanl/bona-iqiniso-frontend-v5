import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import { of } from 'rxjs';
import {PasseViteService} from "../passe-vite.service";
import {LabelService} from "../../services/label.service";
import {AlertService} from "../../services/alert.service";
import {FreeTextService} from "../../services/free-text.service";
import {ImageService} from "../../services/image.service";
import {ComponentService} from "../../services/component.service";
import {InitComponentService} from "../init-component.service";
import {V3BiComponentBase} from "../../models/V3BiComponent";
import {V3BiImageBase} from "../../models/V3Bi-Image";
import {V3BiFreeTextBase} from "../../models/V3BiFreeTextBase";
import {V3BiAlertBase} from "../../models/V3BiAlertBase";
import {V3BiLabelBase} from "../../models/V3BiLabelBase";


describe('InitComponentService', () => {
  let service: InitComponentService;
  let componentServiceSpy: jasmine.SpyObj<ComponentService>;
  let imageServiceSpy: jasmine.SpyObj<ImageService>;
  let freetextServiceSpy: jasmine.SpyObj<FreeTextService>;
  let alertServiceSpy: jasmine.SpyObj<AlertService>;
  let labelServiceSpy: jasmine.SpyObj<LabelService>;
  let passeViteServiceSpy: jasmine.SpyObj<PasseViteService>;

  beforeEach(() => {
    const componentSpy = {
      'getComponent': jest.fn()
    };
    const imageSpy = {
      'getImage': jest.fn()
    };
    const freetextSpy = {
      'getFreeText': jest.fn()
    };
    const alertSpy = {
      'getAlert': jest.fn()
    };
    const labelSpy = {
      'getLabel': jest.fn()
    };
    const passeViteSpy = {
      'reset': jest.fn(),
      'add': jest.fn()
    };

    TestBed.configureTestingModule({
      providers: [
        InitComponentService,
        { provide: ComponentService, useValue: componentSpy },
        { provide: ImageService, useValue: imageSpy },
        { provide: FreeTextService, useValue: freetextSpy },
        { provide: AlertService, useValue: alertSpy },
        { provide: LabelService, useValue: labelSpy },
        { provide: PasseViteService, useValue: passeViteSpy }
      ]
    });

    service = TestBed.inject(InitComponentService);
    componentServiceSpy = TestBed.inject(ComponentService) as jasmine.SpyObj<ComponentService>;
    imageServiceSpy = TestBed.inject(ImageService) as jasmine.SpyObj<ImageService>;
    freetextServiceSpy = TestBed.inject(FreeTextService) as jasmine.SpyObj<FreeTextService>;
    alertServiceSpy = TestBed.inject(AlertService) as jasmine.SpyObj<AlertService>;
    labelServiceSpy = TestBed.inject(LabelService) as jasmine.SpyObj<LabelService>;
    passeViteServiceSpy = TestBed.inject(PasseViteService) as jasmine.SpyObj<PasseViteService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should reset state when getComponent is called', fakeAsync(() => {
    componentServiceSpy.getComponent.mockReturnValue(of([]));
    service.getComponent('testComponent').subscribe();
    tick();

    expect(passeViteServiceSpy.reset).toHaveBeenCalledWith('initComponent');
    expect(passeViteServiceSpy.reset).toHaveBeenCalledWith('initDescription');
    expect(passeViteServiceSpy.reset).toHaveBeenCalledWith('initImage');
    expect(passeViteServiceSpy.reset).toHaveBeenCalledWith('initLabel');
    expect(passeViteServiceSpy.reset).toHaveBeenCalledWith('initAlert');
  }));
  it('should call getComponent on ComponentService', () => {
    const mockComponent: V3BiComponentBase[] = [{ /* mock data */ } as V3BiComponentBase];
    componentServiceSpy.getComponent.mockReturnValue(of(mockComponent));

    service.getComponent('testComponent').subscribe();

    expect(componentServiceSpy.getComponent).toHaveBeenCalledWith(['testComponent']);
  });

  it('should handle the component data and call other services', () => {
    const mockComponent: V3BiComponentBase[] = [{
      image: 'imageRef',
      description: 'descriptionRef',
      alerts: ['alertRef'],
      labels: ['labelRef']
    } as V3BiComponentBase];

    componentServiceSpy.getComponent.mockReturnValue(of(mockComponent));
    imageServiceSpy.getImage.mockReturnValue(of([{ /* mock data */ } as V3BiImageBase]));
    freetextServiceSpy.getFreeText.mockReturnValue(of([{ /* mock data */ } as V3BiFreeTextBase]));
    alertServiceSpy.getAlert.mockReturnValue(of([{ /* mock data */ } as V3BiAlertBase]));
    labelServiceSpy.getLabel.mockReturnValue(of([{ /* mock data */ } as V3BiLabelBase]));

    service.getComponent('testComponent').subscribe();

    expect(imageServiceSpy.getImage).toHaveBeenCalledWith(['imageRef']);
    expect(freetextServiceSpy.getFreeText).toHaveBeenCalledWith(['descriptionRef']);
    expect(alertServiceSpy.getAlert).toHaveBeenCalledWith(['alertRef']);
    expect(labelServiceSpy.getLabel).toHaveBeenCalledWith(['labelRef']);
  });

  it('should handle undefined image reference', () => {
    const mockComponent: V3BiComponentBase[] = [{
      image: undefined,
      description: 'descriptionRef',
      alerts: ['alertRef'],
      labels: ['labelRef']
    } as V3BiComponentBase];

    componentServiceSpy.getComponent.mockReturnValue(of(mockComponent));
    freetextServiceSpy.getFreeText.mockReturnValue(of([{ /* mock data */ } as V3BiFreeTextBase]));
    alertServiceSpy.getAlert.mockReturnValue(of([{ /* mock data */ } as V3BiAlertBase]));
    labelServiceSpy.getLabel.mockReturnValue(of([{ /* mock data */ } as V3BiLabelBase]));

    service.getComponent('testComponent').subscribe();

    expect(passeViteServiceSpy.add).toHaveBeenCalledWith('initImage', null);
    expect(service.imageLoaded).toBeTrue();
  });

  // Add similar tests for getDescription, getAlerts, and getLabels
});
