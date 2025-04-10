/**
 * Copyright 2025 OrangeOakTree
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import {DDD} from "@haxtheweb/d-d-d/d-d-d.js";
/**
 * `ddd-card`
 * 
 * @demo index.html
 * @element ddd-card
 */
export class DddCard extends DDD {

  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "NO TITLE"
    this.descript = "NO DESCRIPTION"
    this.src = ""
    this.image = "https://hax.psu.edu/7d3549e0.png"
    this.primarycolor = "2"
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: {type: String},
      descript: {type: String},
      image: {type: String},
      src: {type: String},
      primarycolor: { 
        type: String,
        reflect: true,
        DDDDataAttributes: "data-primary"
      },

      
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: flex;
        transition: all .2s ease-out;
        flex-wrap: nowrap;
        font-family: var(--ddd-font-family);
        font-size: var(--ddd-font-size-l);
        position: static;
      }
      .card {
        transition: all .2s ease-out;
        display: flex;
        height: 100%;
        flex-wrap: nowrap;
        flex-direction: column;
        background-color: var(--ddd-theme-default-white);
        border-radius: var(--ddd-radius-sm);
        box-shadow: var(--ddd-boxShadow-sm);
      }
      .card img {
        border-top-left-radius: var(--ddd-radius-sm);
        border-top-right-radius: var(--ddd-radius-sm);
        object-fit: cover;
        width: 100%;
        max-width: 100%;
        height: auto;
        vertical-align: bottom;
        box-sizing: border-box;
        aspect-ratio: 3/2;
      }
      .card #color-line {
        display: flex;
        height: 24px;
        background-color: var(--ddd-theme-primary);
        box-sizing: border-box;
      }
      .card-text{
        font-family: var(--ddd-font-primary);
      }
      #card-bottom {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: var(--ddd-spacing-4); 
        padding-bottom: var(--ddd-spacing-4);
        padding-left: var(--ddd-spacing-5);
        padding-right: var(--ddd-spacing-4);
      }
      .card-text h3 {
        color: var( --ddd-theme-default-nittanyNavy );
        margin: var(--ddd-spacing-0);
        font-size: var(--ddd-font-size-xs);
        font-weight: var(--ddd-font-weight-bold);
        line-height: var(--ddd-lh-120);
      }
      .card-text p {
        font-size: var(--ddd-font-size-3xs);
        white-space: pre-line;
        font-weight: var(--ddd-font-weight-regular);
        line-height: var(--ddd-lh-150);
        color: var(--ddd-theme-default-coalyGray);
        margin-bottom: var(--ddd-spacing-0);
        margin-top: var(--ddd-spacing-3);
        margin-bottom: var(--ddd-spacing-2);
      }
      .card button {
        transition: all .2s ease-out;
        font-family: var(--ddd-font-primary);
        align-items: center;
        justify-content: center;
        padding-bottom: var(--ddd-spacing-3);
        padding-top: var(--ddd-spacing-3); 
        padding-left: var(--ddd-spacing-3);
        padding-right: var(--ddd-spacing-4);
        height: fit-content;
        width: 100%;
        font-weight: var(--ddd-font-weight-medium);
        font-size: var(--ddd-font-size-4xs);
        border-radius: var(--ddd-radius-xs);
        color: var(--ddd-theme-default-white);
        background-color: var(--ddd-theme-default-link);
        border: var(--ddd-border-size-sm);
      }
      .card button:hover {
        background-color: var(--ddd-theme-primary);
        border-color: var(--ddd-theme-primary);
        cursor: pointer;
      }


    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="card">
      <img src=${this.image}></img>
      <div id="color-line"></div>
      <div id="card-bottom">
        <div class="card-text">
          <h3>${this.title}</h3>
          <p> ${this.descript}</p>
        </div>
        <a href=${this.src}>
        <button> Explore ></button>
        </a>
      </div>
    </div>`;
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);