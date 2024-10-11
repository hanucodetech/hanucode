import React from "react";
import tms from "../../assets/tms.png";
import sv from "../../assets/sv.png";
import or from "../../assets/or.png";
const LiveProject = () => {
  return (
    <div className="hidden md:flex flex-col md:flex-row gap-4 mb-5">
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <img src={tms} className="h-full" />
          </div>
        </div>
      </div>
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <a href="https://svatsalyaacademy.com/" className="h-full">
              <img src={sv} className="h-full" />
            </a>
          </div>
        </div>
      </div>
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <img src={or} className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveProject;
