import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@nextui-org/react";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // 검색 함수
  const handleSearch = (event) => {
    if (event.key === "Enter" && searchQuery.trim()) {
      // 검색 URL로 리다이렉트
      navigate(`/shopping-project/product?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // x 버튼 클릭시 clear
  const handleClear = () => {
    setSearchQuery(""); // 검색어를 빈 값으로 초기화
  };

  return (
    <div className="search-box flex justify-center items-center">
      <div className="sm:w-[100px] md:w-[400px] h-[60px] rounded-2xl flex justify-center items-center">
        <Input
          label="Search"
          isClearable
          radius="lg"
          defaultValue=""
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // 입력값 상태 업데이트
          onKeyDown={handleSearch} // 엔터키 입력 시 검색
          onClear={handleClear} // X 버튼 클릭 시 검색어 초기화
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-pink",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="To search..."
          startContent={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        />
      </div>
    </div>
  );
};

export default SearchBox;
