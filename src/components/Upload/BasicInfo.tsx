import { GENRE, LANGUAGE } from "@/app/constants/constant";
import Description from "./Description";
import ReleaseDate from "./ReleaseDate";
import SelectContainer from "./SelectContainer";
import Title from "./Title";
import Tags from "./Tags";
import { AgeRating } from "./AgeRating";
import { useAtom } from "jotai";
import { genreAtom, languageAtom, subtitleAtom } from "@/app/atoms/atom";

export default function BasicInfo({ form }: { form: any }) {
  const [genres, setGenres] = useAtom(genreAtom);
  const [languages, setLanguages] = useAtom(languageAtom);
  const [subtitles, setSubtitles] = useAtom(subtitleAtom);

  return (
    <div className="h-max w-full flex">
      <div className="h-full w-1/2 space-y-4 px-10">
        <Title form={form} />
        <Description form={form} />
        <ReleaseDate form={form} />
        <SelectContainer
          type="Genre"
          items={GENRE}
          selectedItems={genres}
          setItems={setGenres}
          form={form}
        />
        <SelectContainer
          type="Language"
          items={LANGUAGE}
          selectedItems={languages}
          setItems={setLanguages}
          form={form}
        />
        <SelectContainer
          type="Subtitles"
          items={LANGUAGE}
          selectedItems={subtitles}
          setItems={setSubtitles}
          form={form}
        />
      </div>
      <div className="h-full w-1/2 space-y-4 ">
        <Tags />
        <AgeRating />
      </div>
    </div>
  );
}
