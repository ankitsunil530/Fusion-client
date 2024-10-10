import Header from "./pages/Header";

function Purchase() {
  return (
    <div>
      <Header />
      <div className="flex-grow p-6 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Note Sheets</h2>
            <p>Created by: atul-professor</p>
            <p>File ID: CSE-2027-9-#619</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p>
                <strong>Description:</strong> Quantity: 40
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

          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <p>
              <strong>Atul-Professor:</strong> Sept 10, 2024, 8:19 p.m.
            </p>
            <p>File with id#619 created by stul and sent to vkJain</p>
            <p>
              <strong>vkJain-HOD(CSE):</strong> nice
            </p>
            <p>
              <strong>bhartenduks-Director:</strong> good
            </p>
          </div>

          <div>
            <label htmlFor="remarks" className="block mb-2">
              Remarks:
            </label>
            <input
              id="remarks"
              type="text"
              className="w-full border p-2 rounded mb-4"
              placeholder="Add remarks here..."
            />

            <label htmlFor="receiver" className="block mb-2">
              Receiver:
            </label>
            <input
              id="receiver"
              type="text"
              className="w-full border p-2 rounded mb-4"
              placeholder="Enter receiver name..."
            />

            <label htmlFor="file" className="block mb-2">
              Attach Files:
            </label>
            <input
              id="file"
              type="file"
              className="w-full border p-2 rounded mb-4"
            />

            <button className="bg-blue-500 text-white p-2 rounded mr-2">
              Send
            </button>
            <button className="bg-gray-500 text-white p-2 rounded">
              Archive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
