import DraftItem from "./DraftItem";

export default function Drafts() {
  const tempDrafts = ["Loki", "Thor", "Ironman", "Spideman"];
  return (
    <div className="h-full w-full p-5 flex flex-col gap-2">
      {tempDrafts.map((d, i) => {
        return (
          <DraftItem
            key={d + i}
            title={d}
            lastEdited={new Date().toLocaleString()}
          />
        );
      })}
    </div>
  );
}
