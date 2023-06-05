class HeroContentItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div tabindex="0" class="hero-text">
        <h1 class="hero-title">Hungry.Q</h1>

        <p class="hero-subtitle">
        Temukan Tempat Makan Favorit Anda!
        </p>
    `;
  }
}

customElements.define('hero-content', HeroContentItem);
