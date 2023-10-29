import { BaseComponentWrapper, VanillaFrameworkOverrides } from 'ag-grid-community';
import { SvelteComponent } from 'svelte/internal';
// Called when a Svelte component is provided to override a default grid component
export class SvelteFrameworkComponentWrapper extends BaseComponentWrapper {
  createWrapper(UserSvelteComponent) {
    return new NewSvelteComponent(UserSvelteComponent);
  }
}
class NewSvelteComponent {
  SvelteComponent;
  eParentElement;
  componentInstance;
  methods = {
    // Provide a default refresh method
    refresh: (params) => {
      this.componentInstance.$set({ params });
      return true;
    }
  };
  constructor(SvelteComponent) {
    this.SvelteComponent = SvelteComponent;
  }
  init(params) {
    // Guaranteed to be called
    this.eParentElement = document.createElement('div');
    this.eParentElement.style.width = '100%';
    this.eParentElement.style.height = '100%';
    this.componentInstance = new this.SvelteComponent({
      target: this.eParentElement,
      props: { params }
    });
  }
  getGui() {
    return this.eParentElement;
  }
  destroy() {
    this.componentInstance.$destroy();
  }
  hasMethod(name) {
    return this.methods[name] != null;
  }
  callMethod(name, args) {
    this.methods[name]?.apply(this.componentInstance, [...args]);
  }
  addMethod(name, callback) {
    this.methods[name] = callback;
  }
}
export class SvelteFrameworkOverrides extends VanillaFrameworkOverrides {
  isFrameworkComponent(comp) {
    // HACK: In dev, the component is wrapped in a Svelte Proxy, obscuring the prototype chain.
    // Instead, components are identified by their class name (internally set to Proxy<ComponentName>).
    // In prod, it should be safe to directly check if they extend SvelteComponent.
    return (
      comp?.prototype?.constructor?.name?.startsWith('Proxy<') ||
      Object.prototype.isPrototypeOf.call(SvelteComponent, comp)
    );
  }
}
