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
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties
      
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        font-family: var(--font-family, sans-serif);
        font-size: var(--font-size, 16px);
      }
      .card {
        display: flex;
        max-width: 498px;
        flex-flow: column;
        border-radius: 8px;
        overflow-wrap: break-word;
        white-space: pre-line;
        border-width: 0px;
        box-sizing: content-box;
        border-style: solid;
        background-color: var(--ddd-theme-default-roarLight);
        border-radius: var(--ddd-radius-sm);
      }
      .card img {
        display: block;
        width: 500px;
        height: 500px;
        object-fit: cover;
        aspect-ratio: 3/2;
        max-width: 100%;
        height: auto;
        border-top-left-radius: var(--ddd-radius-sm);
        border-top-right-radius: var(--ddd-radius-sm);
        
      }
      .card #color-line {
        display: flex;
        border-top-width: 12px;
        border-bottom-width: 0px;
        box-sizing: content-box;
        border-style: solid;
        border-color: var(--ddd-theme-default-forestGreen);
      }
      .card-text {
        display: flex;
        flex-wrap: nowrap;
        box-sizing: border-box;
        padding: 16px 16px 0px 16px;
        flex-flow: column;
      }
      .card-text h3 {
        font-size: 24px;
        line-height: normal;
        margin: 0px;
        padding: 4px 4px 4px 4px;
      }
      .card-text p {
        font-size: 16px;
        line-height: normal;
        margin: 0px;
        padding: 4px 4px 4px 4px;
      }
      .card button {
        max-width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        height: fit-content;
        background-color: var(--ddd-theme-default-forestGreen);
        color: var(--ddd-theme-default-white);
        border-radius: var(--ddd-radius-xs);
        color: white;
        font-weight: 500;
        border: 4px solid var(--ddd-theme-default-forestGreen);
        font-size: 16px;
        line-height: normal;
        text-transform: none;
        margin-bottom: 20px;
      }
      .card button:hover {
        background-color: white;
        color: var(--ddd-theme-default-forestGreen);
      }


    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="card">
    <img src="https://cdn.aarp.net/content/dam/aarp/travel/destinations/2020/09/1140-yosemite-hero.imgcache.rev.web.1044.600.jpg" ></img>
    <div id="color-line"></div>
    <div class="card-text">
      <h3>A card</h3>
      <p> This is a card. One of many.</p>
    </div>
    <button> Press </button>
    </div>`;
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);