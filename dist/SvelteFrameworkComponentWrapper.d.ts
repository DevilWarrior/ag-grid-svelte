import {
  BaseComponentWrapper,
  VanillaFrameworkOverrides,
  type FrameworkComponentWrapper,
  type WrappableInterface
} from 'ag-grid-community';
import type { ComponentType as SvelteComponentType } from 'svelte';
export declare class SvelteFrameworkComponentWrapper
  extends BaseComponentWrapper<WrappableInterface>
  implements FrameworkComponentWrapper
{
  createWrapper(UserSvelteComponent: SvelteComponentType): WrappableInterface;
}
export declare class SvelteFrameworkOverrides extends VanillaFrameworkOverrides {
  isFrameworkComponent(comp: any): boolean;
}
