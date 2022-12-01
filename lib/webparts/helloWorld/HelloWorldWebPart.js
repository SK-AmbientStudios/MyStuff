var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField, PropertyPaneCheckbox, PropertyPaneDropdown, PropertyPaneToggle } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';
import { SPHttpClient } from '@microsoft/sp-http';
import { fluentHorizontalScroll, provideFluentDesignSystem } from "@fluentui/web-components";
var HelloWorldWebPart = /** @class */ (function (_super) {
    __extends(HelloWorldWebPart, _super);
    function HelloWorldWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        _this._environmentMessage = '';
        return _this;
    }
    HelloWorldWebPart.prototype.render = function () {
        this.domElement.innerHTML = "<section><div id=\"spListContainer\">\n    </div><a class=\"".concat(styles.editLink, "\" href=\"editmyApps.aspx\">Edit</a></section>");
        this._renderListAsync();
    };
    HelloWorldWebPart.prototype.onInit = function () {
        var _this = this;
        provideFluentDesignSystem().register(fluentHorizontalScroll());
        return this._getEnvironmentMessage().then(function (message) {
            _this._environmentMessage = message;
        });
    };
    HelloWorldWebPart.prototype._getListData = function () {
        var url = this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('MyApps')/items?$Select=Title,Icon,Url,Email&$top=12";
        return this.context.spHttpClient.get(url, SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    HelloWorldWebPart.prototype._renderList = function (items) {
        var html = "<div class=\"".concat(styles.myAppContainer, "\">");
        //provideFluentDesignSystem().register(fluentHorizontalScroll());
        items.forEach(function (item) {
            html += "<div class=\"".concat(styles.myApp, "\"><a href=\"").concat(item.AppLink.Url, "\"><img src=\"https://picsum.photos/id/58/50\" alt=\"").concat(item.Title, "\"></a></div>");
            /*html += `<ul class="${styles.list}">
            <li class="${styles.listItem}">
              <span class="ms-font-l">${item.Title}</span>
            </li>
          </ul>`;*/
        });
        html += "</div>";
        var listContainer = this.domElement.querySelector('#spListContainer');
        listContainer.innerHTML = html;
    };
    HelloWorldWebPart.prototype._renderListAsync = function () {
        var _this = this;
        this._getListData()
            .then(function (response) {
            _this._renderList(response.value);
        });
    };
    HelloWorldWebPart.prototype._getEnvironmentMessage = function () {
        var _this = this;
        if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
            return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
                .then(function (context) {
                var environmentMessage = '';
                switch (context.app.host.name) {
                    case 'Office': // running in Office
                        environmentMessage = _this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
                        break;
                    case 'Outlook': // running in Outlook
                        environmentMessage = _this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
                        break;
                    case 'Teams': // running in Teams
                        environmentMessage = _this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
                        break;
                    default:
                        throw new Error('Unknown host');
                }
                return environmentMessage;
            });
        }
        return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
    };
    HelloWorldWebPart.prototype.onThemeChanged = function (currentTheme) {
        if (!currentTheme) {
            return;
        }
        this._isDarkTheme = !!currentTheme.isInverted;
        var semanticColors = currentTheme.semanticColors;
        if (semanticColors) {
            this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
            this.domElement.style.setProperty('--link', semanticColors.link || null);
            this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
        }
    };
    Object.defineProperty(HelloWorldWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    HelloWorldWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: 'Description'
                                }),
                                PropertyPaneTextField('test', {
                                    label: 'Multi-line Text Field',
                                    multiline: true
                                }),
                                PropertyPaneCheckbox('test1', {
                                    text: 'Checkbox'
                                }),
                                PropertyPaneDropdown('test2', {
                                    label: 'Dropdown',
                                    options: [
                                        { key: '1', text: 'One' },
                                        { key: '2', text: 'Two' },
                                        { key: '3', text: 'Three' },
                                        { key: '4', text: 'Four' }
                                    ]
                                }),
                                PropertyPaneToggle('test3', {
                                    label: 'Toggle',
                                    onText: 'On',
                                    offText: 'Off'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return HelloWorldWebPart;
}(BaseClientSideWebPart));
export default HelloWorldWebPart;
//# sourceMappingURL=HelloWorldWebPart.js.map