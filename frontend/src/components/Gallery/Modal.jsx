import React from "react";

function Modal({ showModal }) {
  return (
    <div>
      {/* modal showed on click through useState in Item */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* content */}
              <div className="fullscreen bg-primary outline-none focus:outline-none">
                {/* image showed with API */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <img className="rounded-md" src="" alt="" />
                </div>
                {/* list of details showed with API */}
                <div className="relative p-6 flex-auto">
                  <h2 className="text-xl text-center my-6 text-background">
                    The Death of Socrates
                  </h2>
                  <h3 className="italic text-center mx-2 text-background">
                    Jacques-Louis David
                  </h3>
                  <h4 className="my-4 text-slate-500 text-lg leading-relaxed>">
                    Date
                  </h4>
                  <h4 className="my-4 text-slate-500 text-lg leading-relaxed">
                    Country
                  </h4>
                  <h4 className="my-4 text-slate-500 text-lg leading-relaxed>">
                    Department
                  </h4>
                  <h4 className="my-4 text-slate-500 text-lg leading-relaxed>">
                    Category
                  </h4>
                  <h4 className="my-4 text-slate-500 text-lg leading-relaxed>">
                    Technique
                  </h4>
                </div>
                {/* close */}
                <div className="flex items-center justify-end p-6 rounded-b">
                  <p className="text-secondary background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Close
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </div>
  );
}

export default Modal;
