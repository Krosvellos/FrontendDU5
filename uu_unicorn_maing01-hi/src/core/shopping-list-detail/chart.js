//@@viewOn:imports
import React from "react";
import { createVisualComponent, useRoute, BackgroundProvider, Lsi } from "uu5g05";
import { Utils } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import { Config } from "uu5g05-dev";
import { PieChart } from "uu5chartsg01";
import { fruitsData } from "uu5chartsg01-data";

const resolvedItems = 15; // Replace with your resolved items count
const unresolvedItems = 10; // Replace with your unresolved items count

const resolvedPercent = (resolvedItems / (resolvedItems + unresolvedItems)) * 100;
const unresolvedPercent = 100 - resolvedPercent;

const resolvedData = [
  { name: "Resolved", label: "resolved", value: resolvedPercent },
  { name: "Unresolved", label: "unresolved", value: unresolvedPercent },
];
const Tile = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: "Tile",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    let { data, ...otherProps } = props;
   
    const itemListCount = data.itemList?.length || 0;
    const checkedItemListCount = data.itemList.filter((item) => item.checked)?.length || 0;
  },
function Page() {
  return (
    <>
      {/* Other parts of your code... */}
      <PieChart
        data={resolvedData}
        serieList={[
          {
            valueKey: "value",
            labelKey: "name",
            startAngle: 90,
            endAngle: -90,
          }
        ]}
      />
      {/* Other parts of your code... */}
    </>
  );
}

export default Page;