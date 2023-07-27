const SuggestionItem = () => {
  return (
    <div className="border border-slate-300 flex items-center w-full cursor-pointer px-3 py-[5px] hover:bg-slate-300 rounded-md justify-between shadow-sm">
      <div className="flex items-center gap-2">
        <img className="w-8 h-8 rounded-full bg-slate-200" />
        <p className="text-sm">Blob as Name</p>
      </div>
      <button className="hover:bg-slate-200 p-1 rounded-full">F</button>
    </div>
  );
};

const LoadingSuggestionItem = () => {
  return (
    <div className="border border-slate-300 flex items-center w-[200px] cursor-pointer px-3 py-[5px] rounded-md justify-between shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-slate-300 animate-pulse"></div>
        <span className="w-24 bg-slate-300 h-4 rounded-md animate-pulse"></span>
      </div>
      <div className="w-6 h-6 animate-pulse bg-slate-300 rounded-full"></div>
    </div>
  );
};

export const SuggestionsLoading = () => {
  return (
    <div className="flex flex-col gap-3 border border-slate-300 rounded-md p-4">
      <div className="bg-slate-300 w-[150px] animate-pulse h-[30px] rounded-full font-bold"></div>
      <LoadingSuggestionItem />
      <LoadingSuggestionItem />
      <LoadingSuggestionItem />
      <LoadingSuggestionItem />
      <LoadingSuggestionItem />
      <LoadingSuggestionItem />
    </div>
  );
};

const Suggestions = ({ title }) => {
  return (
    <div className="flex bg-white lg:w-[400px] border-slate-300  max-[1300px]:hidden flex-col gap-3 border rounded-md p-4">
      <h1 className="text-lg font-bold mb-3">{title}</h1>
      <SuggestionItem />
      <SuggestionItem />
      <SuggestionItem />
      <SuggestionItem />
      <SuggestionItem />
    </div>
  );
};
export default Suggestions;
