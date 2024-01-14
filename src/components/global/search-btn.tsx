"use client";
import { Icon } from "@iconify/react";
type Props = {};

const SearchBtn = (props: Props) => {
  return (
    <button>
      <Icon className="text-3xl" icon="iconamoon:search" />
    </button>
  );
};

export default SearchBtn;
