export default function InquireForm() {
  return (
    <>
    <div className="flex gap-[110px]">
    {/* <p className="services-text">Support Email:</p> */}
    <div className="form-card rounded-[40px] flex flex-col justify-center w-[800px] h-[750px] bg-[#212121] opacity-90 mt-[30px] p-6 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center underline">Inquiry Form</h2>
      <form className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold underline">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name..."
            required
            className="w-full p-2 rounded bg-[#27272E] text-white border-white-500/50 border-[1px]"
          />
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold underline">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email..."
            required
            className="w-full p-2 rounded bg-[#27272E] text-white border-white-500/50 border-[1px]"
          />
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block mb-1 font-semibold underline">Project Type</label>
          <select
            id="projectType"
            name="projectType"
            required
            className="w-full p-2 rounded bg-[#27272E] text-white border-white-500/50 border-[1px]"
          >
            <option value="" disabled>
              Select a project type
            </option>
            <option value="3D Modeling">2D Logo</option>
            <option value="3D Rigging">Social Media Kit</option>
            <option value="3D Animation">Branding</option>
            <option value="3D Modeling">3D Modeling</option>
            <option value="3D Rigging">3D Rigging</option>
            <option value="3D Animation">3D Animation</option>
          </select>
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="projectDescription" className="block mb-1 font-semibold underline">Project Description</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            placeholder="Enter project description..."
            required
            rows={6}
            className="w-full p-2 rounded bg-[#27272E] text- border-white-500/50 border-[1px]"
          ></textarea>
        </div>

        {/* Project Budget */}
        <div>
          <label htmlFor="projectBudget" className="block mb-1 font-semibold underline">Project Budget</label>
          <div className="flex items-center space-x-2">
            {/* Currency Selector */}
            <select
              id="currency"
              name="currency"
              required
              className="p-2 rounded bg-[#27272E] text-white"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="INR">INR (₹)</option>
              <option value="PKR">PKR (Rs.)</option>
              <option value="AUD">AUD (A$)</option>
            </select>

            {/* Budget Input */}
            <input
              type="number"
              id="projectBudget"
              name="projectBudget"
              placeholder="Enter amount..."
              min={0}
              required
              className="w-full p-2 rounded bg-[#27272E] text-white border-white-500/50 border-[1px]"
            />
          </div>
        </div>

        {/* Reference File */}
        <div>
          <label htmlFor="referenceFile" className="block mb-1 font-semibold underline">Reference Files</label>
          <input
            type="file"
            id="referenceFile"
            name="referenceFile"
            multiple
            className="w-full text-white"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-white hover:opacity-90 px-6 py-2 rounded font-semibold text-[#27272E] text-opacity-90"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
}
