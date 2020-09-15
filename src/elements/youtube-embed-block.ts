import '@polymer/iron-icon';
import '@polymer/paper-button';
import { html, PolymerElement } from '@polymer/polymer';
import './hoverboard-icons';
import './shared-styles';

class YoutubeEmbedBlock extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles flex flex-alignment">
        :host {
          display: flex;
          width: 100%;
          background: var(--accent-color);
          color: var(--text-secondary-color);
          padding: 16px 0;
        }

        paper-button {
          color: #000;
        }
      </style>

      <div class="container container-narrow">
        <h1 class="container-title">🔴 Watch me live on Youtube 🔴</h1>
        <p>
          Our event will be livestreamed on Youtube. You can watch it directly from here:
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/watch?v=h5d-EOTWOOU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <a href="https://youtube.com/">
          <div class="cta-button">
            <paper-button class="icon-right">
              <iron-icon icon="hoverboard:youtube"></iron-icon>
              <span class="cta-label">Open on Youtube</span>
            </paper-button>
          </div>
        </a>
      </div>
    `;
  }

  static get is() {
    return 'youtube-embed-block';
  }
}

window.customElements.define(YoutubeEmbedBlock.is, YoutubeEmbedBlock);
