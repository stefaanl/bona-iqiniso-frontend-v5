'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">bona-iqiniso-frontend-v5 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BreadcrumbComponent.html" data-type="entity-link" >BreadcrumbComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FooterComponent.html" data-type="entity-link" >FooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LabelEventHandlerComponent.html" data-type="entity-link" >LabelEventHandlerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LogoComponent.html" data-type="entity-link" >LogoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MainComponent.html" data-type="entity-link" >MainComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" >PageNotFoundComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileComponent.html" data-type="entity-link" >ProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RegisterComponent.html" data-type="entity-link" >RegisterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ScreenComponent.html" data-type="entity-link" >ScreenComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SidebarComponent.html" data-type="entity-link" >SidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpinnerComponent.html" data-type="entity-link" >SpinnerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UmlClassDiagramComponent.html" data-type="entity-link" >UmlClassDiagramComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UmlGroupedClassDiagramComponent.html" data-type="entity-link" >UmlGroupedClassDiagramComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/MarkFormTouchedDirective.html" data-type="entity-link" >MarkFormTouchedDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/LabelForm.html" data-type="entity-link" >LabelForm</a>
                            </li>
                            <li class="link">
                                <a href="classes/PanelArray.html" data-type="entity-link" >PanelArray</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiAlertArray.html" data-type="entity-link" >V3BiAlertArray</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiAlertBase.html" data-type="entity-link" >V3BiAlertBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiAlertValidationArray.html" data-type="entity-link" >V3BiAlertValidationArray</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiAlertValidationBase.html" data-type="entity-link" >V3BiAlertValidationBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiBreadcrumb.html" data-type="entity-link" >V3BiBreadcrumb</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiBreadcrumbBase.html" data-type="entity-link" >V3BiBreadcrumbBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiComponentBase.html" data-type="entity-link" >V3BiComponentBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiFreeTextArray.html" data-type="entity-link" >V3BiFreeTextArray</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiFreeTextBase.html" data-type="entity-link" >V3BiFreeTextBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiGlossaryArray.html" data-type="entity-link" >V3BiGlossaryArray</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiGlossaryBase.html" data-type="entity-link" >V3BiGlossaryBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiImageArray.html" data-type="entity-link" >V3BiImageArray</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiImageBase.html" data-type="entity-link" >V3BiImageBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiInfluenceArray.html" data-type="entity-link" >V3BiInfluenceArray</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiInfluenceBase.html" data-type="entity-link" >V3BiInfluenceBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiLabelArray.html" data-type="entity-link" >V3BiLabelArray</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiLabelBase.html" data-type="entity-link" >V3BiLabelBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiLoginRequest.html" data-type="entity-link" >V3BiLoginRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiNavigation.html" data-type="entity-link" >V3BiNavigation</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiNavigationBase.html" data-type="entity-link" >V3BiNavigationBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiNavigationItem.html" data-type="entity-link" >V3BiNavigationItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiNavigationProcessBase.html" data-type="entity-link" >V3BiNavigationProcessBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiNavigationProcessLink.html" data-type="entity-link" >V3BiNavigationProcessLink</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiNavigationProcessNode.html" data-type="entity-link" >V3BiNavigationProcessNode</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiPaginatorBase.html" data-type="entity-link" >V3BiPaginatorBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiPaginatorDOM.html" data-type="entity-link" >V3BiPaginatorDOM</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiPanelBase.html" data-type="entity-link" >V3BiPanelBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiStakeholderArray.html" data-type="entity-link" >V3BiStakeholderArray</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiStakeholderBase.html" data-type="entity-link" >V3BiStakeholderBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiTranslationArray.html" data-type="entity-link" >V3BiTranslationArray</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiTranslationBase.html" data-type="entity-link" >V3BiTranslationBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/V3BiUserBase.html" data-type="entity-link" >V3BiUserBase</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link" >AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BreadcrumbService.html" data-type="entity-link" >BreadcrumbService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BrowserService.html" data-type="entity-link" >BrowserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComponentService.html" data-type="entity-link" >ComponentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExportExcelService.html" data-type="entity-link" >ExportExcelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FreeTextService.html" data-type="entity-link" >FreeTextService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogletranslateService.html" data-type="entity-link" >GoogletranslateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpMessageService.html" data-type="entity-link" >HttpMessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImageService.html" data-type="entity-link" >ImageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InitComponentService.html" data-type="entity-link" >InitComponentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LabelService.html" data-type="entity-link" >LabelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LabelStateHandlerService.html" data-type="entity-link" >LabelStateHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LabelValidationHandlerService.html" data-type="entity-link" >LabelValidationHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NavigationComponentService.html" data-type="entity-link" >NavigationComponentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NavigationProcessService.html" data-type="entity-link" >NavigationProcessService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaginationService.html" data-type="entity-link" >PaginationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PanelService.html" data-type="entity-link" >PanelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PasseViteService.html" data-type="entity-link" >PasseViteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpinnerService.html" data-type="entity-link" >SpinnerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorageService.html" data-type="entity-link" >StorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WindowService.html" data-type="entity-link" >WindowService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpApiInterceptor.html" data-type="entity-link" >HttpApiInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/GoogleObj.html" data-type="entity-link" >GoogleObj</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
