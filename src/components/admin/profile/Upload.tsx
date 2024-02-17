import { useState } from "react";
import { MdFileUpload, MdCancel } from "react-icons/md";
import Card from "components/card";

const Upload = ({onFileSelect}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "text/csv") {
      setSelectedFile(file);
      onFileSelect(event.target.files[0]);
    } else {
      setSelectedFile(null);
      alert("Please select a CSV file.");
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const uploadButtonDisabled = !!selectedFile;

  return (
    <Card className="grid h-full w-full grid-cols-1 gap-3 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none 2xl:grid-cols-11">
      <div className="col-span-5 h-full w-full rounded-xl bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6">
        <label htmlFor="file-upload" className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:!border-navy-700 lg:pb-0 cursor-pointer">
          <MdFileUpload className="text-[80px] text-brand-500 dark:text-white" />
          <h4 className="text-xl font-bold text-brand-500 dark:text-white">
            Upload Files
          </h4>
          <p className="mt-2 text-sm font-medium text-gray-600">
            Only CSV files are allowed
          </p>
          <input
            id="file-upload"
            type="file"
            accept=".csv"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <div className="col-span-5 flex h-full w-full flex-col justify-center overflow-hidden rounded-xl bg-white pl-3 pb-4 dark:!bg-navy-800">
        {selectedFile && (
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-800 dark:text-gray-300">{selectedFile.name}</span>
            <button
              onClick={handleRemoveFile}
              className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600"
            >
              <MdCancel className="w-6 h-6" />
            </button>
          </div>
        )}
        <p className="leading-1 mt-2 text-base font-normal text-gray-600">
          Please upload the CSV in this format:
        </p>
        <div className="overflow-x-auto">
          <table className="mt-4 w-full border-collapse border border-gray-200 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-200 dark:border-gray-600 p-2 text-left text-sm font-medium text-gray-800 dark:text-gray-400">Admn No.</th>
                <th className="border border-gray-200 dark:border-gray-600 p-2 text-left text-sm font-medium text-gray-800 dark:text-gray-400">Name</th>
                <th className="border border-gray-200 dark:border-gray-600 p-2 text-left text-sm font-medium text-gray-800 dark:text-gray-400">DOB</th>
                <th className="border border-gray-200 dark:border-gray-600 p-2 text-left text-sm font-medium text-gray-800 dark:text-gray-400">Email</th>
                {/* Add more columns if necessary */}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-900">
                <td className="border border-gray-200 dark:border-gray-600 p-2 text-left text-sm text-gray-800 dark:text-gray-300">Data 1</td>
                <td className="border border-gray-200 dark:border-gray-600 p-2 text-left text-sm text-gray-800 dark:text-gray-300">Data 2</td>
                <td className="border border-gray-200 dark:border-gray-600 p-2 text-left text-sm text-gray-800 dark:text-gray-300">Data 3</td>
                <td className="border border-gray-200 dark:border-gray-600 p-2 text-left text-sm text-gray-800 dark:text-gray-300">Data 4</td>
                {/* Add more data cells if necessary */}
              </tr>
              {/* Add more rows if necessary */}
            </tbody>
          </table>
        </div>
        
      </div>
    </Card>
  );
};

export default Upload;
