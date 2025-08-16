import Alpine from 'alpinejs';
import { icons } from './icons';

declare global {
  interface Window {
    Alpine: typeof Alpine;
    iconComponent: (
      iconName?: string,
      tailwindClasses?: string
    ) => {
      iconName: string;
      tailwindClasses: string;
      readonly icon: string;
    };
  }
}

if (typeof window !== 'undefined') {
  window.Alpine = Alpine;

  window.iconComponent = (
    iconName = 'logo',
    tailwindClasses = ''
  ) => ({
    iconName,
    tailwindClasses,


    get icon() {
      const iconFn = icons[this.iconName];
      if (!iconFn) return '';
      return iconFn(this.tailwindClasses);
    }
  });

  Alpine.start();
}






const openOverlayBtn = document.getElementById('openOverlay') as HTMLButtonElement | null;
const closeOverlayBtn = document.getElementById('closeOverlay') as HTMLButtonElement | null;


openOverlayBtn?.addEventListener("click", () => {
  document.documentElement.classList.add("activate-overlay")
});

closeOverlayBtn?.addEventListener("click", () => {
  document.documentElement.classList.remove("activate-overlay")
});