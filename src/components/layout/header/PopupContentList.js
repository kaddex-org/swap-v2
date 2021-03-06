import React from "react";
import styled from "styled-components";
import HeaderItem from "../../../shared/HeaderItem";
import { theme } from "../../../styles/theme";

const ListContainer = styled.div`
  border-radius: 4px;
  background: ${({ theme: { colors } }) => colors.purple} 0% 0% no-repeat
    padding-box;

  & svg {
    margin-right: 10px;
  }
`;

const PopupContentList = ({ items }) => {
  return (
    <ListContainer>
      {items.map((item, index) => (
        <HeaderItem
          className={item?.className}
          route={item?.route}
          key={index}
          onClick={item?.onCLick}
          icon={item?.icon}
          link={item?.link}
          headerItemStyle={{
            display: "flex",
            alignItems: "center",
            fontSize: 16,
            marginBottom: 9,
            fontFamily: theme.fontFamily.regular,
          }}
        >
          {item.label}
        </HeaderItem>
      ))}
    </ListContainer>
  );
};

export default PopupContentList;
