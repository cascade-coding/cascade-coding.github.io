type MediaType = "video" | "image";

interface Project {
    id: string;
    media: {
        type: MediaType;
        url: string;
    };
    title: string;
    description: string;
    question?: string;
    readMoreText?: string;
    liveurl?: string;
    figmaurl?: string;
    liveurlCTAText?: string;
    additionalInfo?: string;
    overlayContent?: string;
}

export const projects: Project[] = [
    {
        id: 'x001',
        media: {
            type: "video",
            url: "https://www.youtube.com/embed/a103ei5esOY"
        },
        title: "Vanish – Private by Design",
        description: "Vanish isn't just a chat platform—it's your shield in the age of surveillance. Whether you're a whistleblower exposing corruption, a journalist protecting your sources, or someone who values privacy, Vanish guarantees your conversations remain completely secure and confidential.",
        question: "Could your secrets stay secret, even from the most powerful?",
        readMoreText: "Read More",
        additionalInfo: "I built this because no existing platform truly protected privacy—even from governments.",
        overlayContent: `
        <div
            class="lg:max-w-[900px] lg:mx-auto prose prose-lg prose-indigo pt-8"
        >
            <h2 class="font-primary text-3xl font-extrabold mb-4 text-gray-900">
              Privacy is a Necessity
            </h2>
            <p class="mb-6 text-gray-700 leading-relaxed">
              Privacy is no longer a luxury—it’s a necessity.
              <strong class="text-indigo-600 font-semibold">Vanish</strong>
              empowers you with a shield against surveillance, letting you
              communicate freely and securely. From sensitive information to
              casual chats, enjoy peace of mind knowing your conversations are
              truly yours.
            </p>

            <h3 class="font-primary text-2xl font-bold mt-8 mb-4 text-gray-900">
              Who Benefits?
            </h3>

            <ul class="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong class="text-indigo-600"
                  >Journalists & Whistleblowers:</strong
                >
                Share sensitive information securely while protecting your
                sources. Say goodbye to the fear of surveillance or data
                breaches—your communications remain safe and confidential.
              </li>
              <li>
                <strong class="text-indigo-600">Business Professionals:</strong>
                Exchange critical ideas, contracts, and documents with total
                peace of mind. Safeguard your intellectual property and
                sensitive business dealings, ensuring your information stays
                private and secure.
              </li>
              <li>
                <strong class="text-indigo-600">Everyday Users:</strong> Keep
                your personal conversations and private data safe. Take control
                of your online privacy without sacrificing convenience,
                empowering you to communicate freely and securely in a digital
                world.
              </li>
            </ul>

            <p class="mt-6 mb-4 text-gray-700 leading-relaxed">
              This project was inspired by the growing wave of censorship and
              control over major social media platforms, chat apps, and news
              outlets.
            </p>

            <p class="mb-4 text-gray-700 leading-relaxed">
              Watch the short overview video of
              <strong class="text-indigo-600 font-semibold">Vanish</strong>
              below to gain a clear and comprehensive understanding of its
              features and purpose.
            </p>
        </div>


        <div class="lg:max-w-[900px] lg:mx-auto py-8">
            <div id="media" class="relative w-full aspect-video max-w-[720px]">
                <iframe
                class="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/a103ei5esOY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                ></iframe>
            </div>
        </div>
    `
    },
    {
        id: 'x002',
        media: {
            type: "image",
            url: "/assets/trueshelf-lg.png"
        }, 
        title: "TrueShelf - Books that work",
        description: "On TrueShelf, books aren’t here to impress — they’re here to interrupt. Each one is chosen not because it’s popular, but because it rewires something real. You don’t need hundreds of books or an endless feed. You need one… maybe five… to turn your world inside out — no matter how big you think your problem is.",
        question: "Ever read something that made the rest of your bookshelf feel irrelevant?",
        liveurl: "https://cascade-coding.github.io/trueshelf/",
        liveurlCTAText: "Live View",
        figmaurl: "https://www.figma.com/design/9RtrEHyb9u29Z5ap7CIlyC/4-landing-pages?node-id=0-1&p=f&t=6eTsNYbJ414pn0G3-0",
        additionalInfo: "I made TrueShelf because finding one life-altering book shouldn’t feel like luck.",
    }
];




