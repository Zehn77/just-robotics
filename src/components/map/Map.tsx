import { useState, useEffect } from "react";
import styles from "./Map.module.css";
import { MapIcons } from "./MapIcons";
import { YMaps, Map as YandexMap, Placemark } from "react-yandex-maps";

const BRANCHES = {
  branchC4: { name: "Филиал ц4", lat: 41.318032, lon: 69.279045 },
  branchBeruni: { name: "Филиал беруни", lat: 41.341163, lon: 69.212857 },
};

export const Map = () => {
  const [branch, setBranch] = useState(BRANCHES.branchC4);

  useEffect(() => {
    setBranch(branch);
  }, [branch]);

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

      <div className="my-8">
        <YMaps>
          <YandexMap
            defaultState={{
              center: [branch.lat, branch.lon],
              zoom: 15,
              type: "yandex#map",
            }}
            width="100%"
            height={300}
          >
            <Placemark geometry={[branch.lat, branch.lon]} />
          </YandexMap>
        </YMaps>
      </div>
    </section>
  );
};
