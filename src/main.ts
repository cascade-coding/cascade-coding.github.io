import Alpine from 'alpinejs';
import { gsap } from "gsap";

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

  window.scrollTo({ top: 0, behavior: 'instant' });
});



// close overlay
closeOverlayBtn?.addEventListener("click", () => {
  document.documentElement.classList.remove("activate-overlay");

  const overlayContentWrapper = document.getElementById("overlay-content");

  if (!overlayContentWrapper) return

  overlayContentWrapper.innerHTML = ``;
});





// hero animations

const heroImg = new Image();
heroImg.src = "/assets/hero-bg.png";

function runHeroAnimations() {
  gsap.from(".word", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.1
  });

  gsap.from(".subheadline", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out"
  });

  gsap.from(".main-ctas", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.15
  });
}

heroImg.onload = () => {
  gsap.to("body", { opacity: 1, duration: 1, ease: "power2.out" });

  runHeroAnimations();
};

heroImg.onerror = () => {
  gsap.to("body", { opacity: 1, duration: 1, ease: "power2.out" });
  runHeroAnimations();
};




