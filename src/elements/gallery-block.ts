import { customElement, property } from '@polymer/decorators';
import '@polymer/paper-button';
import { html, PolymerElement } from '@polymer/polymer';
import 'plastic-image';
import { ReduxMixin } from '../mixins/redux-mixin';
import { RootState, store } from '../store';
import { fetchGallery } from '../store/gallery/actions';
import './shared-styles';

@customElement('gallery-block')
export class GalleryBlock extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles flex flex-alignment">
        :host {
          display: block;
        }

        .photos-grid {
          margin: 64px auto;
          display: grid;
          width: 100%;
          min-height: 400px;
          height: calc(100vh - 40px);
          max-height: 750px;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(5, 1fr);
          grid-gap: 2px;
        }

        .grid-item {
          background-color: var(--secondary-background-color);
        }

        .grid-item:first-child {
          grid-area: 1 / 1 / 3 / 4;
        }

        .grid-item:nth-child(2) {
          grid-area: 3 / 1 / 5 / 3;
        }

        .grid-item:nth-child(3) {
          grid-area: 3 / 3 / 3 / 3;
        }

        .grid-item:nth-child(4) {
          grid-area: 4 / 3 / 4 / 3;
        }

        .grid-item:nth-child(5) {
          grid-area: 5 / 1 / 5 / 1;
        }

        .grid-item:nth-child(6) {
          display: none;
        }

        .grid-item:nth-child(7) {
          display: none;
        }

        .grid-item:nth-child(8) {
          display: none;
        }

        .gallery-info {
          padding: 16px;
          background-color: var(--default-primary-color);
          color: var(--text-primary-color);
          z-index: 1;
          grid-area: 5 / 2 / 5 / 4;
        }

        paper-button {
          margin-top: 16px;
          color: var(--text-primary-color);
        }

        @media (min-width: 640px) {
          .photos-grid {
            height: calc(100vh - 64px);
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: repeat(3, 1fr);
          }

          .grid-item:first-child {
            grid-area: 1 / 1 / 1 / 3;
          }

          .grid-item:nth-child(2) {
            grid-area: 1 / 3 / 2 / 5;
          }

          .grid-item:nth-child(3) {
            grid-area: 1 / 5 / 3 / 5;
          }

          .grid-item:nth-child(4) {
            grid-area: 2 / 1 / 2 / 1;
          }

          .grid-item:nth-child(5) {
            grid-area: 2 / 2 / 2 / 2;
          }

          .grid-item:nth-child(6) {
            grid-area: 3 / 1 / 3 / 3;
            display: block;
          }

          .grid-item:nth-child(7) {
            grid-area: 3 / 3 / 3 / 3;
            display: block;
          }

          .grid-item:nth-child(8) {
            grid-area: 3 / 4 / 3 / 6;
            display: block;
          }

          .gallery-info {
            padding: 24px;
            grid-area: 2 / 3 / 2 / 5;
          }
        }
      </style>

      <div class="photos-grid">
        <template is="dom-repeat" items="[[gallery]]" as="photo">
          <plastic-image
            class="grid-item"
            srcset="[[photo.url]]"
            sizing="cover"
            lazy-load
            preload
            fade
          ></plastic-image>
        </template>
        <div class="gallery-info" layout vertical justified>
          <div>
            <h2>{$ galleryBlock.title $}</h2>
            <p>{$ galleryBlock.description $}</p>
          </div>
          <a href="{$ ticketsUrl $}" target="_blank" rel="noopener noreferrer">
            <paper-button>Register to DevFest Sweden 2020</paper-button>
          </a>
        </div>
      </div>
    `;
  }

  @property({ type: Array })
  private gallery = [];
  @property({ type: Boolean })
  private galleryFetching = false;
  @property({ type: Object })
  private galleryFetchingError = {};

  stateChanged(state: RootState) {
    this.gallery = state.gallery.list;
    this.galleryFetching = state.gallery.fetching;
    this.galleryFetchingError = state.gallery.fetchingError;
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.gallery || !this.gallery.length) {
      store.dispatch(fetchGallery());
    }
  }
}
