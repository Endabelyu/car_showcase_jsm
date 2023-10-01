'use client';

import { useState } from 'react';
import { SearchManufacturer } from './';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);
// const SearchBar = () => {
const SearchBar = ({ setManufacturer, setModel }) => {
  // const [manufacturer, setManuFacturer] = useState('');
  // const [model, setModel] = useState('');
  const [searchManufacturer, setSearchManuFacturer] = useState('');
  const [searchModel, setSearchModel] = useState('');
  const router = useRouter();
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === '' && searchModel === '') {
      return alert('Please fill in the search bar');
    }
    console.log(searchManufacturer);
    setModel(searchModel);
    setManufacturer(searchManufacturer);
    // updateSearchParams(
    //   Model.toLowerCase(),
    //   Manufacturer.toLowerCase()
    // );
  };

  //

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        {/* <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManuFacturer}
        /> */}
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManuFacturer}
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4 "
          alt="car model "
        />

        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:h idden" />
    </form>
  );
};

export default SearchBar;
