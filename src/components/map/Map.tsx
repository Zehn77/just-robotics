import { useState, useEffect, useRef } from "react";
import styles from "./Map.module.css";
import { MapIcons } from "./MapIcons";

const BRANCHES = {
  branchC4: { name: "Филиал ц4", lat: 41.318032, lon: 69.279045 },
  branchBeruni: { name: "Филиал беруни", lat: 41.341163, lon: 69.212857 },
};

declare global {
  interface Window {
    ymaps: any;
  }
}

export const Map = () => {
  const [branch, setBranch] = useState(BRANCHES.branchC4);

  useEffect(() => {
    setBranch(branch);
  }, [branch]);

  const mapRef = useRef(null);

  useEffect(() => {
    if (window.ymaps && mapRef.current) {
      window.ymaps.ready(() => {
        new window.ymaps.Map(mapRef.current, {
          center: [41.318032, 69.279045],
          zoom: 15,
          controls: ["zoomControl"],
        });
      });
    }
  }, []);

  return (
    <section>
      <div className="max-w-[1090px] px-5 mx-auto mt-4">
        <div className="flex justify-center md:justify-start gap-3 md:gap-14">
          <button
            onClick={() => setBranch(BRANCHES.branchC4)}
            className={`${
              styles.glowing_button_shadow
            } text-md md:text-lg text-black uppercase ${
              branch.name === BRANCHES.branchC4.name ? "bg-yellow" : "bg-white"
            } px-6 py-3  md:px-12 md:py-4 rounded-md cursor-pointer md:font-tektur-600`}
          >
            {BRANCHES.branchC4.name}
          </button>

          <button
            onClick={() => setBranch(BRANCHES.branchBeruni)}
            className={`${styles.glowing_button_shadow} ${
              branch.name === BRANCHES.branchBeruni.name
                ? "bg-yellow"
                : "bg-white"
            } px-6 py-3  md:px-12 md:py-4 rounded-md cursor-pointer md:font-tektur-600`}
          >
            {BRANCHES.branchBeruni.name}
          </button>
        </div>

        <MapIcons />
      </div>

      <div className="mt-8 h-[300px] w-full" ref={mapRef}></div>
    </section>
  );
};
