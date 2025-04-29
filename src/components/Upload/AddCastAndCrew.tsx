import { useAtom } from "jotai";
import { selectedCastAtom, selectedCrewAtom } from "@/app/atoms/atom";
import { X } from "lucide-react";
import SelectFilmPersonnel from "./SelectFilmPersonnel";

const casts = [
  {
    name: "Scarlatt Johanson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2TVTcQC6GqXmqC_jobELQhf1ET7MOA6rYQ&s",
  },
  {
    name: "Elizabeth Olsen",
    image: "https://ntvb.tmsimg.com/assets/assets/620481_v9_bc.jpg?w=360&h=480",
  },
  {
    name: "Chris Evans",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQ0YWM1ODEtZDFkYy00MGJhLTkwZDUtMzVkZjljODU3ZTRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "RDJ",
    image:
      "https://cdn.shopify.com/s/files/1/0523/8521/8751/files/c5c11ebc-954e-4d9c-abf9-d4f47d88fea4.jpg",
  },
  {
    name: "Chris Hemsworth",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzGME_ao9C5iaCyx7uAVzBkj5ztIJYEcMFQ&s",
  },
];

const directors = [
  {
    name: "Steven Spielberg",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLMaLBkPYMVQzTaT9nkK3ilnThqrXEB5lmJUY8AFFiI1xL28D7",
  },
  {
    name: "Christopher Nolan",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT1oZ8A5ckGQ7Zi1P9AqbK_zO9W5UzJh7_MenkYreON56vAqLZM",
  },
  {
    name: "David Fincher",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDMJlGgpiVnMI2nsWgbnWJYSsAIqyynSn8hMUX_bwAcpyv9H-p",
  },
  {
    name: "Martin Scorsese",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTT9fFttEGnRdy1Cn_7nFwWKLSACZVztH0oYGmT81rf4AMLtgjo",
  },
  {
    name: "Quentin Tarantino",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlTrJvdxqSMBYf90USQe0qXEaMhXdy35FJOpUlEZ5PGl4wIBI",
  },
  {
    name: "James Cameron",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSzxqGFjFm5GMFr7xoopSpt3dzoZSpdUN0Jj7CWt1NX1cgJgeIj",
  },
];

export default function AddCastAndCrew() {
  const [selectedCasts, setSelectedCasts] = useAtom(selectedCastAtom);
  const [selectedCrews, setSelectedCrews] = useAtom(selectedCrewAtom);

  return (
    <div className="min-h-[50vh] w-full px-10 py-4">
      <h1 className="text-xl mb-4">Add Cast and Crew</h1>

      <div className="w-full flex flex-col gap-5">
        <SelectFilmPersonnel personnelType="Casts" items={casts} />
        <div className="w-full flex space-x-2 space-y-1 flex-wrap">
          {selectedCasts.map((cast: { image: string; name: string }, index) => {
            return (
              <div
                key={cast.name + index}
                className="h-12 w-1/3 group flex items-center gap-3 hover:bg-zinc-700 px-4 rounded-sm"
              >
                <img
                  src={cast.image}
                  className="h-10 w-10 rounded-full object-center object-cover "
                />
                <span>{cast.name}</span>
                <X
                  size={16}
                  className="ml-auto hover:text-red-500 hover:scale-125 transition-all duration-300 ease-in-out cursor-pointer opacity-0 group-hover:opacity-100"
                  onClick={() => {
                    setSelectedCasts((p) => p.filter((item) => item !== cast));
                  }}
                />
              </div>
            );
          })}
        </div>
        <SelectFilmPersonnel personnelType="Director" items={directors} />
        <div className="w-full flex space-x-2 space-y-1 flex-wrap">
          {selectedCrews.map(
            (director: { image: string; name: string }, index) => {
              return (
                <div
                  key={director.name + index}
                  className="h-12 w-1/3 group flex items-center gap-3 hover:bg-zinc-700 px-4 rounded-sm"
                >
                  <img
                    src={director.image}
                    className="h-10 w-10 rounded-full object-center object-cover "
                  />
                  <span>{director.name}</span>
                  <X
                    size={16}
                    className="ml-auto hover:text-red-500 hover:scale-125 transition-all duration-300 ease-in-out cursor-pointer opacity-0 group-hover:opacity-100"
                    onClick={() => {
                      setSelectedCrews((p) =>
                        p.filter((item) => item !== director),
                      );
                    }}
                  />
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}
