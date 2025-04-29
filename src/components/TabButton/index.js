import { memo } from "react";

const TabButton = memo(({ label, index, activeTab, onClick }) => {
  const isActive = activeTab === index;
  const buttonClasses = `py-2 px-4 text-sm font-roboto-slab ${
    isActive ? "border-[#0c7fb0] border-b-2 font-medium pb-3" : "text-black"
  }`;

  return (
    <button className={buttonClasses} onClick={() => onClick(index)}>
      {label}
    </button>
  );
});

export default TabButton;
