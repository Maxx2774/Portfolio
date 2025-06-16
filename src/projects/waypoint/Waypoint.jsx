import SupabaseIcon from "../../assets/icons/supabase.svg?react";
import NodeJsIcon from "../../assets/icons/nodejs.svg?react";
import ExpressIcon from "../../assets/icons/express.svg?react";
import ReactIcon from "../../assets/icons/react.svg?react";
import WaypointImage from "../../assets/projects/waypoint.png";
import { useNavigate } from "react-router-dom";
import "./waypoint.css";
import ImageModal from "../../components/ImageModal";
import { useState } from "react";
export default function Waypoint() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="panel waypoint">
      <button className="back" onClick={() => navigate(-1)}>
        Back
      </button>
      <h1>WAYPOINT</h1>
      <div className="content">
        <div className="image-container">
          <img src={WaypointImage} onClick={() => setIsOpen(true)} />
        </div>
        <div className="text-container">
          <h2>
            I’m currently building a trip planner app with interactive maps, a
            social feed, and AI-enhanced planning.
          </h2>

          <div className="tech-stack">
            <div>
              <ReactIcon className="w-6 h-6 absolute left-3 top-3" />
              <p className="react">React</p>
            </div>
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
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        src={WaypointImage}
      />
    </section>
  );
}
