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
        display: block;
        font-family: var(--font-family, sans-serif);
        font-size: var(--font-size, 16px);
      }
      .card {
        display: flex;
        max-width: 700px;
        flex-flow: column;
        border-radius: 8px;
        z-index: 101;
        overflow-wrap: break-word;
        white-space: pre-line;
        border-width: 0px;
        border-style: solid;
        background-color: var(--ddd-theme-default-roarLight);
        border-radius: var(--ddd-radius-sm);
      }
      .card img {
        display: block;
        object-fit: cover;
        aspect-ratio: 3/2;
        border-top-left-radius: var(--ddd-radius-sm);
        border-top-right-radius: var(--ddd-radius-sm);
        
      }
      .card #color-line {
        height: 20px;
        margin: 0px;
        background-color: var(--ddd-theme-default-forestGreen);
      }
      .card button {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        background-color: var(--ddd-theme-default-forestGreen);
        color: var(--ddd-theme-default-white);
        border-radius: var(--ddd-radius-xs);
        color: white;
        height: 40px;
        margin-bottom: 20px;
        margin-left: 40px;
        margin-right: 40px;
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
    <div>
    <h3>A card</h3>
    <p> This is a card. One of many.</p>
    </div>
    <button> Press </button>
    </div>`;
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);