import { PiPrinter } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Header from "./pages/Header";

function Purchase() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="flex-grow p-6 bg-white">
        <div className="container mx-auto bg-gray-300 p-6 mx-auto rounded-lg shadow-md">
          <div className="flex flex-row justify-evenly mb-4">
            <div className="">
              <h2 className="text-lg font-semibold">Note Sheets</h2>
            </div>
            <div>
              <PiPrinter className="text-2xl" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Attachments</h2>
            </div>
          </div>
          <div className="flex flex-row justify-evenly mb-4">
            <div className="flex flex-row space-x-1">
              <div>
                <h3 className="font-semibold">Created by:</h3>
              </div>{" "}
              <div>
                <p>atul-professor</p>
              </div>
            </div>
            <div className="flex flex-row space-x-1">
              <div>
                <h3 className="font-semibold">File ID:</h3>
              </div>{" "}
              <div>
                <p>CSE-2027-9-#619</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p>
                <strong>Description:</strong>
              </p>
              <p>
                <strong>Quantity:</strong> 40
              </p>
              <p>
                <strong>Estimated Cost:</strong> 2
              </p>
              <p>
                <strong>Specification:</strong> nknsadf
              </p>
              <p>
                <strong>Item Nature:</strong> Consumable
              </p>
              <p>
                <strong>Replaced:</strong> Yes
              </p>
              <p>
                <strong>Expected Delivery:</strong> Oct 1, 2024
              </p>
              <p>
                <strong>Financial Approval:</strong> No
              </p>
              <p>
                <strong>Head Approval:</strong> Yes
              </p>
            </div>
            <div>
              <p>
                <strong>Name:</strong> 2
              </p>
              <p>
                <strong>SubType:</strong> Subtype
              </p>
              <p>
                <strong>Purpose:</strong> New
              </p>
              <p>
                <strong>Type:</strong> Equipment
              </p>
              <p>
                <strong>Indigenous:</strong> Yes
              </p>
              <p>
                <strong>Budgetary Head:</strong> sdsf
              </p>
              <p>
                <strong>Sources of Supply:</strong> sfnsdfin
              </p>
              <p>
                <strong>Purchased:</strong> No
              </p>
              <p>
                <strong>Director Approval:</strong> Yes
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-6 mb-4 space-y-2">
            <div className="flex flex-row justify-between">
              <p>
                <strong>Atul-Professor:</strong> Sept 10, 2024, 8:19 p.m.
              </p>
              <p>
                <strong>Recieved By:</strong> vkjain-HOD(CSE)
              </p>
            </div>
            <div>
              <p>File with id#619 created by stul and sent to vkJain</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>
                <strong>vkJain-HOD(CSE):</strong> nice
              </p>
              <p>
                <strong>Recieved By:</strong> bhartenduks-Director
              </p>
            </div>
            <div className="flex flex-row justify-between">
              <p>
                <strong>bhartenduks-Director:</strong> good
              </p>
              <p>
                <strong>Recieved By:</strong> psadmin
              </p>
            </div>
          </div>

          <div>
            {/* <label htmlFor="remarks" className="block mb-2">
              <strong>Remarks:</strong>
              
=======
            <label htmlFor="remarks" className="block mb-2">
              Remarks:
>>>>>>> 1ed29f321fcca3e6ccae936ded41148b90c5b341
            </label>
            <input
              id="remarks"
              type="text"
              className="w-full border p-2 rounded mb-4"
              placeholder="Add remarks here..."
            />

            <label htmlFor="receiver" className="block mb-2">
              <strong>Receiver:</strong>
              
            </label>
            <input
              id="receiver"
              type="text"
              className="w-full border p-2 rounded mb-4"
              placeholder="Enter receiver name..."
            />

            <label htmlFor="file" className="block mb-2">
              <strong>Attach Files:</strong>
              
            </label> */}
            <input
              id="file"
              type="file"
              className="w-full border p-2 rounded mb-4"
            />

            <div className="flex flex-row justify-end space-x-3">
              <button
                className="bg-gray-500 text-white p-2 rounded"
                type="submit"
                onClick={() => navigate("/archive")}
              >
                Archive
              </button>
              <button
                className="bg-gray-500 text-white p-2 rounded mr-2"
                type="submit"
                onClick={() => navigate("/home")}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
