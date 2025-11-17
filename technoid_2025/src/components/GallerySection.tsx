export default function GallerySection() {
  const images = [
    "https://placehold.co/600x400/000/00f3ff?text=Technoid_01",
    "https://placehold.co/600x400/000/ff00ff?text=Technoid_02",
    "https://placehold.co/600x400/000/ffee00?text=Technoid_03",
    "https://placehold.co/600x400/000/ffffff?text=Technoid_04",
  ];
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {images.map((src, index) => (
          <div key={index} className="border-2 border-neon-cyan/50 p-2 bg-cyber-gray/50">
            <img 
              src={src} 
              alt={`Gallery Image ${index + 1}`} 
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
