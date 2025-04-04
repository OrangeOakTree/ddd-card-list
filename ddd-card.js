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
        font-family: var(--font-family, sans-serif);
        font-size: var(--font-size, 16px);
        position: static;
      }
      .card {
        transition: all .2s ease-out;
        display: flex;
        height: 100%;
        flex-wrap: nowrap;
        flex-direction: column;
        background-color: white;
        border-radius: var(--ddd-radius-sm);
        box-shadow: rgba(0, 3, 33, 0.125) 0px 4px 8px 0px;
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
        border-top-width: 12px;
        border-bottom-width: 0px;
        box-sizing: content-box;
        border-style: solid;
        border-color: var(--ddd-theme-primary);
      }
      .card-text{
        font-family:Roboto, Arial, Tahoma, sans-serif;
      }
      #card-bottom {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 16px 16px 20px 16px;
      }
      .card-text h3 {
        color: #001E44;
        margin: 0px;
        font-size: 22px;
        font-weight: 700;
        line-height: 120%;
        letter-spacing: normal;
      }
      .card-text p {
        font-size: 18px;
        line-height: normal;
        white-space: pre-line;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: normal;
        color: #262626;
        margin-bottom: 0rem;
        margin-top: 12px;
        margin-bottom: 8px;
        white-space: pre-line;
      }
      #btn-icon {
        color: rgb(255, 255, 255);
        display: block;
        height: 12px;
        width: 12px;
      }
      .card button {
        height: 100%;
        transition: all .2s ease-out;
        font-family:Roboto, Arial, Tahoma, sans-serif;
        align-items: center;
        justify-content: center;
        margin-top: auto;
        padding: 12px 24px 12px 16px;
        height: fit-content;
        width: 100%;
        font-weight: 500;
        font-size: 16px;
        border-radius: 4px;
        color: white;
        background-color: rgb(0, 95, 169);
        border: 2px solid rgb(0, 95, 169);
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
        <button src=${this.src}> Explore ></button>
      </div>
    </div>`;
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);