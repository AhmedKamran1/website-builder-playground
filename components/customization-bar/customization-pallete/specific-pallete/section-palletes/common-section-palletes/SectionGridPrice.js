import { SectionEventTypesEnum } from "@/helpers/constants/event-types/event-types";
import { currencyTypes } from "@/helpers/currency-types/currency-list";
import React from "react";

const SectionGridPrice = ({
  gridItem,
  gridIndex,
  dispatchGridImageActions,
}) => {
  const { pricingFunctionalities } = gridItem;
  return (
    <div>
      <p>Content Price</p>
      <input
        type="number"
        value={pricingFunctionalities?.pricingText ?? ""}
        onChange={(event) =>
          dispatchGridImageActions({
            type: SectionEventTypesEnum.sectionGridImageFunctionalities
              .CHANGEGRIDPRICINGTEXT,
            payload: {
              gridIndex: gridIndex,
              pricingText: event.target.value,
            },
          })
        }
      />

      <select
        value={pricingFunctionalities?.currencyType ?? ""}
        onChange={(event) =>
          dispatchGridImageActions({
            type: SectionEventTypesEnum.sectionGridImageFunctionalities
              .CHANGEGRIDPRICINGCURRENCYTYPE,
            payload: {
              gridIndex: gridIndex,
              currencyType: event.target.value,
            },
          })
        }
      >
        {currencyTypes.map((currency, index) => (
          <option value={currency} key={index}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SectionGridPrice;
