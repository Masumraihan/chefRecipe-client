import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blogs = () => {
  return (
    <>
      <h1 className='text-4xl text-center font-bold pt-12 pb-5'>FAQ</h1>
      <div className='pb-12 container mx-auto grid  md:grid-cols-2 items-center'>
        <div>
          <Pdf targetRef={ref} filename='code-example.pdf'>
            {({ toPdf }) => (
              <div className="pb-5 text-center">
                <button onClick={toPdf} className='btn btn-primary mx-auto'>
                  Download Question PDF
                </button>
              </div>
            )}
          </Pdf>
          <div ref={ref}>
            <div className='flex flex-col gap-3'>
              <div
                tabIndex={0}
                className='collapse collapse-plus border border-base-300 bg-base-100 rounded-box'
              >
                <div className='collapse-title text-xl font-medium'>
                  Tell us the differences between uncontrolled and controlled
                  components ?
                </div>
                <div className='collapse-content'>
                  <p>
                    Controlled components refer to components that have their
                    state and behavior controlled by parent component.These
                    components rely on props passed down from the parent
                    component to update their state and behavior <br />
                    Uncontrolled components means the component manage their own
                    state internally.
                  </p>
                </div>
              </div>
              <div
                tabIndex={1}
                className='collapse collapse-plus border border-base-300 bg-base-100 rounded-box'
              >
                <div className='collapse-title text-xl font-medium'>
                  How to validate React props using PropTypes ?
                </div>
                <div className='collapse-content'>
                  <p>
                    if You need to validate your props. You can define the
                    PropTypes for your component using the propTypes static
                    property, which is an object that contains key-value pairs
                    for each prop and its expected data type. You can use the
                    PropTypes library to define various types of data, including
                    strings, numbers, booleans, arrays, and objects
                  </p>
                </div>
              </div>
              <div
                tabIndex={1}
                className='collapse collapse-plus border border-base-300 bg-base-100 rounded-box'
              >
                <div className='collapse-title text-xl font-medium'>
                  Tell us the difference between nodejs and express js. ?
                </div>
                <div className='collapse-content'>
                  <p>
                    NodeJS is the package, which provides the JavaScript
                    run-time environment, whereas Express is a framework that
                    sits on top of NodeJS and helps us to handle requests and
                    responses.
                  </p>
                </div>
              </div>
              <div
                tabIndex={1}
                className='collapse collapse-plus border border-base-300 bg-base-100 rounded-box'
              >
                <div className='collapse-title text-xl font-medium'>
                  What is a custom hook, and why will you create a custom hook?{" "}
                </div>
                <div className='collapse-content'>
                  <p>
                    Custom hooks are reusable functions that a it can use to add
                    special and unique functionality to the applications. it can
                    be reused easily, which makes the code cleaner and reduces
                    the time to write the code. It also enhances the rendering
                    speed of the code as a custom hook does not need to be
                    rendered again and again while rendering the whole code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Player
          autoplay
          loop
          src='https://assets8.lottiefiles.com/private_files/lf30_5u6A5U.json'
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
    </>
  );
};

export default Blogs;
