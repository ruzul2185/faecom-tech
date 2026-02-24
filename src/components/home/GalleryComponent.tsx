import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    cloudinary: any;
  }
}

export interface MediaAsset {
  tag: string;
}

export interface GalleryConfig {
  mediaAssets: MediaAsset[];
}

export interface GalleryComponentProps {
  galleryConfig: GalleryConfig;
}

const getColumns = (width: number) => {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
};

const GalleryComponent = ({ galleryConfig }: GalleryComponentProps) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<any>(null);
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "demo";
  const [columns, setColumns] = useState(() => getColumns(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      const next = getColumns(window.innerWidth);
      setColumns((prev) => (prev !== next ? next : prev));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!galleryRef.current) return;

    // Destroy previous widget instance before creating a new one
    if (widgetRef.current) {
      try {
        widgetRef.current.destroy();
      } catch (_) {}
      widgetRef.current = null;
    }

    // Clear the container so the widget starts fresh
    galleryRef.current.innerHTML = "";

    widgetRef.current = window.cloudinary.galleryWidget({
      container: galleryRef.current,
      cloudName,
      displayProps: {
        mode: "expanded",
        columns,
        spacing: 15,
      },
      aspectRatio: "16:9",
      transformation: { crop: "fill" },
      bgColor: "transparent",
      carouselOffset: 10,
      navigation: "always",
      thumbnailProps: {
        mediaSymbolSize: 42,
        spacing: 20,
        width: 90,
        height: 90,
        navigationFloat: true,
        navigationShape: "square",
        navigationSize: 40,
        navigationColor: "#000000",
        selectedStyle: "border",
        selectedBorderPosition: "bottom",
        selectedBorderWidth: 4,
        navigationIconColor: "#000000",
      },
      navigationButtonProps: {
        iconColor: "#ffffff",
        color: "#000",
        size: 52,
        navigationPosition: "offset",
        navigationOffset: 12,
      },
      themeProps: {
        primary: "#000000",
        active: "#777777",
      },
      secureDistribution: "res-s.cloudinary.com",
      ...galleryConfig,
    });

    widgetRef.current.render();

    return () => {
      if (widgetRef.current) {
        try {
          widgetRef.current.destroy();
        } catch (_) {}
        widgetRef.current = null;
      }
    };
  }, [galleryConfig, columns, cloudName]);

  return (
    <section className="w-full max-w-442.5 mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Office Gallery</h2>
        <p className="text-gray-500 mt-3">
          A glimpse into our workspace and environment
        </p>
      </div>
      <div ref={galleryRef} className="w-full min-h-100" />
    </section>
  );
};

export default GalleryComponent;
