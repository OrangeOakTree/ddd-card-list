/**
 * Copyright 2025 OrangeOakTree
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCardList extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-card-list";
  }

  constructor() {
    super();
    this.backgroundcolor = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      backgroundcolor: { 
        type: String,
        relfect: true,
        DDDDataAttributes: "data-accent"

       },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
    :host {
      display: flex;
      background-color: none;
      border: none;
      color: none;
    }
    slot {
      display: grid;
      grid-template-columns: repeat(1,1fr);
      gap: 16px;
    }
    .wrapper {
        display: flex;
        background-color: var(--ddd-theme-accent);
        padding-left: 26px;
        padding-right: 26px;
        padding-top: 60px;
        padding-bottom: 60px;
      }

    @media screen and (min-width: 768px) {
      .wrapper slot {
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
      }
    }
    @media screen and (min-width: 1080px) {
      .wrapper slot {
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
    }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
    <slot></slot>
    </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddCardList.tag, DddCardList);