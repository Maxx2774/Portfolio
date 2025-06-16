export default function ImageModal({ isOpen, onClose, src, alt = "" }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 font-medium"
      >
        Close
      </button>
      <div
        className="relative max-w-6xl w-full mx-4"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-h-[90vh] object-contain rounded shadow-lg"
        />
        {alt && <p className="text-white text-center mt-4 text-sm">{alt}</p>}
      </div>
    </div>
  );
}
