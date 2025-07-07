import hakimMp4 from "../../assets/projects/videos/hakimlivs.mp4";
import SupabaseIcon from "../../assets/icons/supabase.svg?react";
import JavascriptIcon from "../../assets/icons/javascript.svg?react";
import NodeJsIcon from "../../assets/icons/nodejs.svg?react";
import BootstrapIcon from "../../assets/icons/Bootstrap.svg?react";
import ExpressIcon from "../../assets/icons/express.svg?react";
import "./hakimlivs.css";

export default function HakimLivs() {
  return (
    <section className="panel hakimlivs">
      <h1 className="hakimlivs-h1">HAKIM LIVS</h1>
      <div className="content">
        <div className="text-container">
          <h2 className="hakimlivs-h2">
            My first major project involved developing the backend and
            collaborating closely with frontend developers and QA testers.
          </h2>
          <div className="tech-stack">
            <div>
              <SupabaseIcon className="w-6 h-6 absolute left-2 top-3.5" />
              <p className="supabase">Supabase</p>
            </div>
            <div>
              <NodeJsIcon className="w-6 h-6 absolute left-2 top-3" />
              <p className="node-js">Node.js</p>
            </div>
            <div>
              <ExpressIcon className="w-6 h-6 absolute left-3 top-3 fill-white" />
              <p className="express">Express</p>
            </div>
            <div>
              <JavascriptIcon className="w-6 h-6 absolute left-2.5 rounded-[3px]" />
              <p className="javascript">Javascript</p>
            </div>
            <div>
              <BootstrapIcon className="w-7 h-7 absolute left-2 top-2.5" />
              <p className="bootstrap">Bootstrap</p>
            </div>
          </div>
        </div>
        <div className="video-container">
          <video
            autoPlay
            loop
            muted
            width="100%"
            preload="metadata"
            playsInline
            className="hakim-mp4"
          >
            <source src={hakimMp4} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <a
        href="https://be-webshop-2025-fe-eight.vercel.app/"
        target="_blank"
        className="live-demo"
      >
        Live demo
      </a>
      <p className="date">MAR 2025</p>
    </section>
  );
}
