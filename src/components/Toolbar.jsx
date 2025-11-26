import React from "react";

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="toolbar">
      {filters.map((el, index) => {
        // использовали map чтобы для каждого фильтра создать кнопку и на эту кнопку повесить слышатель события
        return (
          <button
            style={{
              backgroundColor: selected === el ? "grey" : "white",
              color: selected === el ? "white" : "black",
            }}
            key={index}
            onClick={() => {
              onSelectFilter(el);
            }}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

export default Toolbar;
