import Alpine from 'alpinejs';
import { icons } from './icons';
import { projects } from './projects';

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

    PROJECTS: typeof projects;
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


  window.PROJECTS = projects;


  Alpine.start();
}






const openOverlayBtn = document.getElementById('openOverlay') as HTMLButtonElement | null;
const closeOverlayBtn = document.getElementById('closeOverlay') as HTMLButtonElement | null;


// open overlay
openOverlayBtn?.addEventListener("click", () => {
  document.documentElement.classList.add("activate-overlay")

  console.log(openOverlayBtn.dataset.projectId)

  const currentProjectId = openOverlayBtn.dataset.projectId;

  const overlayContentWrapper = document.getElementById("overlay-content");

  if (!currentProjectId || !overlayContentWrapper) return

  const singleProject = projects.find(p => p.id === currentProjectId);


  overlayContentWrapper.innerHTML = `${singleProject?.overlayContent}`
});



// close overlay
closeOverlayBtn?.addEventListener("click", () => {
  document.documentElement.classList.remove("activate-overlay");


  const overlayContentWrapper = document.getElementById("overlay-content");

  if (!overlayContentWrapper) return

  overlayContentWrapper.innerHTML = ``;
});