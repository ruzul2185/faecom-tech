import { useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    title: "Modern Open Workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    title: "Creative Meeting Room",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    title: "Team Collaboration Area",
  },
  {
    src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600&auto=format&fit=crop",
    title: "Private Workstations",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    title: "Brainstorming Zone",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop",
    title: "Reception & Lounge",
  },
];

const GalleryComponent = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section className="w-[93%] max-w-442.5 mx-auto py-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Office Gallery</h2>
        <p className="text-gray-500 mt-3">
          A glimpse into our workspace and environment
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.title}
              loading="lazy"
              className="w-full h-65 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay with Title */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
              <h3 className="text-white text-lg font-semibold">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            loading="lazy"
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-h-[85vh] max-w-[95vw] rounded-xl shadow-2xl"
          />
          <p className="text-white mt-4 text-lg font-medium">
            {selectedImage.title}
          </p>
        </div>
      )}
    </section>
  );
};

export default GalleryComponent;
