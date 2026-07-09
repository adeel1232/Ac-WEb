export default function GoogleTranslate() {
  return (
    <>
      <div id="google_translate_element"></div>
      <style>{`
        #google_translate_element {
          display: inline-block;
        }
        .goog-te-gadget {
          font-family: inherit !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .goog-te-gadget-simple {
          background-color: transparent !important;
          border: none !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        .goog-te-gadget-icon {
          display: none !important;
        }
        .goog-te-gadget-heading {
          display: none !important;
        }
        .goog-te-combo {
          border-radius: 0.5rem !important;
          border: 1px solid #e5e7eb !important;
          padding: 0.5rem 0.75rem !important;
          font-size: 0.875rem !important;
          font-weight: 500 !important;
          color: #4b5563 !important;
          background-color: white !important;
          cursor: pointer !important;
          transition: all 0.2s !important;
          margin: 0 !important;
          min-width: auto !important;
          height: auto !important;
        }
        .goog-te-combo:hover {
          border-color: #0ea5e9 !important;
          color: #0284c7 !important;
        }
        .dark .goog-te-combo {
          background-color: transparent !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
          color: #d1d5db !important;
        }
        .dark .goog-te-combo:hover {
          border-color: rgba(255, 255, 255, 0.2) !important;
          color: #60a5fa !important;
        }
      `}</style>
    </>
  );
}
