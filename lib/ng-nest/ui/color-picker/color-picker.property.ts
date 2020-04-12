import { XControlValueAccessor } from '@ng-nest/ui/core';
import { Renderer2 } from '@angular/core';

/**
 * ColorPicker
 * @selector x-color-picker
 * @decorator component
 */
export const XColorPickerPrefix = 'x-color-picker';

/**
 * ColorPicker Property
 */
export abstract class XColorPickerProperty extends XControlValueAccessor<string> {
  constructor(public renderer: Renderer2) {
    super(renderer);
  }
}

/**
 * 颜色种类
 */
export type XColorType = 'hex' | 'rgba' | 'hsla';

/**
 * ColorPicker-Portal
 * @selector x-color-picker-portal
 * @decorator component
 */
export const XColorPickerPortalPrefix = 'x-color-picker-portal';
