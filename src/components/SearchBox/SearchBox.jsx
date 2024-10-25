import Image from "next/image";

const SearchBox = () => {
  return (
    // add functionality that if click on this section, user can search anything in site
    <div className="flex w-10/12 gap-2 mx-auto my-3 searchBox p-2 rounded-md">
      <Image
        height="24"
        width="24"
        src="/images/Search 1.svg"
        alt="search icon"
      />
      <div className="flex gap-1 searchBoxText">
        جستجو در
        <div className="searchBoxZias font-bold"> زی‌آث</div>
      </div>
    </div>
  );
};

export default SearchBox;
