import { useState, useEffect } from "react";
import Upload from "../profile/Upload";

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const [modalHeight, setModalHeight] = useState("");
  const [className, setClassName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleFileSelect = (file: File) => {
    setSelectedFile(file); 
  }

  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const modalContent = document.querySelector(".modal-content");
    if (modalContent && !modalContent.contains(target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [closeModal]);

  useEffect(() => {
    // Set modal height dynamically based on the window height
    const windowHeight = window.innerHeight;
    setModalHeight(`calc(${windowHeight}px - 20rem)`); // Adjust the value as needed
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClassName(e.target.value);
  };

  const handleSubmit = async () => {
    // Handle submission logic here
    if (!className) {
      // Handle missing class name error
      return;
    }
  
    // Validate class name (e.g., length, allowed characters)
  
    if (!selectedFile) {
      // Handle missing CSV file error
      return;
    }
  
   // Set loading indicator (optional)
  
    try {
      const formData = new FormData();
      console.log('className', className);
      console.log('csvFile', selectedFile);
      formData.append('class', className);
      formData.append('csv_file', selectedFile);
      
      const res = await fetch('/api/login', {
        method: 'GET',
      });
      if(res.status === 200) {
        const val  = await res.json();
        console.log("Token val", val.token.value);
        const response = await fetch('https://pmt-inajc.ondigitalocean.app/create_class/', {
          method: 'POST',
          headers: {
            Authorization: `Token ${val.token.value}`,
          },
          body: formData,
        });
    
        if (response.ok) {
          console.log('Class added successfully!');
          closeModal();
          // Optionally, update the class list on the dashboard
        } else {
          // error = await response.json(); // Store API error messages
        }
      }
      else {
        console.log("No session exists");
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle other errors (e.g., network errors)
    } finally {
       // Hide loading indicator (optional)
    }
    // Close modal
    closeModal();
  };

  return (
    <>
      {/* Background overlay with blur effect */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-filter backdrop-blur-lg z-9999"></div>
      {/* Modal content */}
      <div className="modal-content fixed z-20 inset-0 overflow-y-auto" onClick={handleContentClick}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-blue-900 rounded-lg shadow-xl max-w-3xl w-full" style={{ maxHeight: modalHeight }}>
            <div className="px-6 py-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">Enter the Class</h2>
                <button
                  className="text-gray-600 hover:text-gray-800 focus:outline-none"
                  onClick={closeModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 text-sm"
                  placeholder="Class Name"
                  value={className}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mt-4 overflow-hidden">
              <Upload onFileSelect={handleFileSelect} />
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
