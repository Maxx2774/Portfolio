import lockscreen1 from "../../assets/projects/lockscreen.png";
import lockscreen2 from "../../assets/projects/lockscreen2.png";
import ReactIcon from "../../assets/icons/react.svg?react";

import "./ios.css";

export default function IosLockScreen() {
  return (
    <section className="panel ios">
      <h1>iOS LOCK SCREEN</h1>
      <div className="content">
        <h2>
          One of my earliest projects involved replicating iOS lock screen with
          music playback controls.
        </h2>
        <div className="tech-stack">
          <div>
            <ReactIcon className="w-7 h-7 absolute left-2 top-2.5 " />
            <p className="bootstrap">React</p>
          </div>
        </div>
      </div>
      <img src={lockscreen1} className="lockscreen-1" />
      <img src={lockscreen2} className="lockscreen-2" />
      <p className="date">JAN 2024</p>
      <a
        href="https://ios-control-center-tsx.vercel.app/"
        target="_blank"
        className="live-demo"
      >
        Live demo
      </a>
    </section>
  );
}
