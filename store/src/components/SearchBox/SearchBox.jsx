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
      <input type="text" value="" placeholder="جستجو در زی‌آث" className="flex gap-1 searchBoxText w-full h-full bg-transparent outline-none" />
    </div>
  );
};

export default SearchBox;
