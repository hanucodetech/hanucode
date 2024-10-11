import React from "react";
import kotlin from "../../../assets/kot.png";
import c from "../../../assets/c.png";
import dart from "../../../assets/dart.png";
import js from "../../../assets/js.png";
import native from "../../../assets/native.png";
import java from "../../../assets/java.png";
import flutter from "../../../assets/flutter.png";


const Tech = () => {
  return (
    <div>
      <h1 className="mt-5 text-gray-600 ml-4 text-3xl font-bold tracking-tight  sm:text-5xl">
        Technology We Used
      </h1> 
           <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-2 md:w-1/6 sm:w-1/2 w-full">
              <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <img
                  src={kotlin}
                  alt="Description"
                  class="w-15 h-15 mb-3 inline-block"
                />
                <h2 class="title-font font-medium text-2xl text-gray-900">
                  KOTLIN
                </h2>
              </div>
            </div>

            <div class="p-2 md:w-1/6 sm:w-1/2 w-full">
              <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <img
                  src={c}
                  alt="Description"
                  class="w-15 h-15 mb-3 inline-block"
                />
                <h2 class="title-font font-medium text-2xl text-gray-900">
                 C#
                </h2>                
              </div>
            </div>

            <div class="p-2 md:w-1/6 sm:w-1/2 w-full">
              <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <img
                  src={dart}
                  alt="Description"
                  class="w-15 h-15 mb-3 inline-block"
                />
                <h2 class="title-font font-medium text-2xl text-gray-900">
               DART
                </h2>
              </div>
            </div>
            <div class="p-2 md:w-1/6 sm:w-1/2 w-full">
              <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <img
                  src={js}
                  alt="Description"
                  class="w-15 h-15 mb-3 inline-block"
                />
                <h2 class="title-font font-medium text-2xl text-gray-900">
                 JAVASCRIPT
                </h2>
              </div>
            </div>
            <div class="p-2 md:w-1/6 sm:w-1/2 w-full">
              <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <img
                  src={native}
                  alt="Description"
                  class="w-15 h-15 mb-3 inline-block"
                />
                <h2 class="title-font font-medium text-2xl text-gray-900">
                React Native
                </h2>
              </div>
            </div>
            <div class="p-2 md:w-1/6 sm:w-1/2 w-full">
              <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <img
                  src={flutter}
                  alt="Description"
                  class="w-15 h-15 mb-3 inline-block"
                />
                <h2 class="title-font font-medium text-2xl text-gray-900">
                Flutter
                </h2>
              </div>
            </div>
            <div class="p-2 md:w-1/6 sm:w-1/2 w-full">
              <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <img
                  src={java}
                  alt="Description"
                  class="w-15 h-15 mt-9 mb-3 inline-block"
                />
                <h2 class="title-font font-medium text-2xl text-gray-900">
                 Java
                </h2>
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tech;
