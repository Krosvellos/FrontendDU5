//@@viewOn:imports
import React from "react";
import { createVisualComponent, useRoute, BackgroundProvider, Lsi } from "uu5g05";
import { Grid, ListItem, Icon, B } from "uu5g05-elements";

import Uu5TilesElements from "uu5tilesg02-elements";

import User from "../../bricks/user.js";
import { useThemeContext } from "../theme-mode/theme-context.js";
import { useUserContext } from "../user-list/user-context.js";
import Config from "../config/config.js";
//@@viewOff:imports

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
    const [isDark] = useThemeContext();
    const { userList } = useUserContext();
    const [, setRoute] = useRoute();

    const owner = userList.find((user) => user.id === data.owner);
    const itemListCount = data.itemList?.length || 0;
    const checkedItemListCount = data.itemList.filter((item) => item.checked)?.length || 0;
    //@@viewOff:private
    console.log("Owner found:", owner); 
    console.log("Item list count:", itemListCount); 
    console.log("Checked item list count:", checkedItemListCount);
    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <BackgroundProvider background={isDark ? "dark" : "light"}>
      <Uu5TilesElements.Tile {...otherProps} headerOverlap>
        {({ padding }) => {
          return (
            
            <Grid
              className={Config.Css.css({
                paddingTop: padding.top,
                paddingRight: padding.right,
                paddingBottom: padding.bottom,
                paddingLeft: padding.left,
                display: "grid",
                rowGap: "8px",
              })}
            >
              <ListItem
                icon={data.archived ? "uugds-lock-closed" : "uugds-lock-open"}
                actionList={[
                  {
                    icon: "uugds-link",
                    colorScheme: "blue",
                    onClick: () => setRoute("shoppingListDetail", { id: data.id }),
                  },
                ]}
              >
                <strong>{data.name}</strong>
              </ListItem>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "8px",
                  margin: "0 8px",
                }}
              >
                
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div style={{ fontStyle: "impact", color: "grey" }}><Lsi lsi={{ cs: "majitel: ", en: "owner: "}}/> </div>
                  <User img={owner.img} name={owner.name} />
                </div>
              </div>
            </Grid>
          );
        }}
      </Uu5TilesElements.Tile>
      </BackgroundProvider>
    );
    //@@viewOff:render
  },
});

export default Tile;